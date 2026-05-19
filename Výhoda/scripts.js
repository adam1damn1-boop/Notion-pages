(function () {
	'use strict';

	var DEFAULT_LANG = 'cs';
	var STORAGE_KEY = 'vyhoda.lang';
	var dict = window.I18N || {};

	function getLang() {
		try {
			var saved = localStorage.getItem(STORAGE_KEY);
			if (saved && dict[saved]) return saved;
		} catch (e) {}
		return DEFAULT_LANG;
	}

	function applyLang(lang) {
		if (!dict[lang]) lang = DEFAULT_LANG;
		var pack = dict[lang];
		document.documentElement.setAttribute('lang', lang);
		document.documentElement.setAttribute('data-lang', lang);
		var nodes = document.querySelectorAll('[data-i18n]');
		nodes.forEach(function (node) {
			var key = node.getAttribute('data-i18n');
			if (!key || !(key in pack)) return;
			var val = pack[key];
			if (node.tagName === 'META') {
				node.setAttribute('content', val);
			} else if (node.tagName === 'TITLE') {
				node.textContent = val;
			} else if (node.tagName === 'INPUT' && node.type === 'submit') {
				node.value = val;
			} else {
				node.textContent = val;
			}
		});
		document.querySelectorAll('[data-lang-switch]').forEach(function (b) {
			b.classList.toggle('is-active', b.getAttribute('data-lang-switch') === lang);
		});
		try { localStorage.setItem(STORAGE_KEY, lang); } catch (e) {}
	}

	function initLangSwitch() {
		document.querySelectorAll('[data-lang-switch]').forEach(function (b) {
			b.addEventListener('click', function () {
				applyLang(b.getAttribute('data-lang-switch'));
			});
		});
	}

	function initBurger() {
		var burger = document.querySelector('.burger');
		var nav = document.querySelector('.nav__links');
		if (!burger || !nav) return;
		burger.addEventListener('click', function () {
			var open = nav.classList.toggle('is-open');
			burger.setAttribute('aria-expanded', open ? 'true' : 'false');
		});
		nav.querySelectorAll('a').forEach(function (a) {
			a.addEventListener('click', function () {
				nav.classList.remove('is-open');
				burger.setAttribute('aria-expanded', 'false');
			});
		});
	}

	function initScrollHeader() {
		var header = document.querySelector('.site-header');
		if (!header) return;
		var onScroll = function () {
			header.classList.toggle('is-scrolled', window.scrollY > 8);
		};
		document.addEventListener('scroll', onScroll, { passive: true });
		onScroll();
	}

	function initReveal() {
		var items = document.querySelectorAll('.section, .card, .callout, .contact__form');
		items.forEach(function (el) { el.classList.add('reveal'); });
		if (!('IntersectionObserver' in window)) {
			items.forEach(function (el) { el.classList.add('is-visible'); });
			return;
		}
		var io = new IntersectionObserver(function (entries) {
			entries.forEach(function (e) {
				if (e.isIntersecting) {
					e.target.classList.add('is-visible');
					io.unobserve(e.target);
				}
			});
		}, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
		items.forEach(function (el) { io.observe(el); });
	}

	function initTouchSwap() {
		if (!('ontouchstart' in window)) return;
		document.querySelectorAll('.swap').forEach(function (el) {
			el.addEventListener('touchstart', function () {
				document.querySelectorAll('.swap.is-touched').forEach(function (o) { if (o !== el) o.classList.remove('is-touched'); });
				el.classList.toggle('is-touched');
			}, { passive: true });
		});
	}

	function initYear() {
		var y = document.getElementById('year');
		if (y) y.textContent = new Date().getFullYear();
	}

	document.addEventListener('DOMContentLoaded', function () {
		applyLang(getLang());
		initLangSwitch();
		initBurger();
		initScrollHeader();
		initReveal();
		initTouchSwap();
		initYear();
	});
})();
