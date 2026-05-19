(function () {
	"use strict";

	const LANG_KEY = "marta-lang";
	const DEFAULT_LANG = "cs";

	/* ---------- i18n ---------- */
	function applyLang(lang) {
		const dict = (window.I18N && window.I18N[lang]) || window.I18N[DEFAULT_LANG];
		if (!dict) return;
		document.documentElement.lang = lang;
		document.querySelectorAll("[data-i18n]").forEach(function (el) {
			const key = el.getAttribute("data-i18n");
			if (dict[key] != null) {
				if (el.tagName === "TITLE") {
					document.title = dict[key];
				} else {
					el.textContent = dict[key];
				}
			}
		});
	}

	function initLangSwitch() {
		const sel = document.getElementById("lang-switch");
		if (!sel) return;
		// Populate from available dictionaries
		const available = Object.keys(window.I18N || {});
		if (available.length > 1) {
			sel.innerHTML = "";
			available.forEach(function (code) {
				const opt = document.createElement("option");
				opt.value = code;
				opt.textContent = code.toUpperCase();
				sel.appendChild(opt);
			});
		}
		let saved = DEFAULT_LANG;
		try { saved = localStorage.getItem(LANG_KEY) || DEFAULT_LANG; } catch {}
		if (!window.I18N[saved]) saved = DEFAULT_LANG;
		sel.value = saved;
		applyLang(saved);
		sel.addEventListener("change", function () {
			applyLang(sel.value);
			try { localStorage.setItem(LANG_KEY, sel.value); } catch {}
		});
	}

	/* ---------- Mobile nav ---------- */
	function initNav() {
		const btn = document.querySelector(".nav-toggle");
		const list = document.getElementById("nav-list");
		if (!btn || !list) return;
		btn.addEventListener("click", function () {
			const open = btn.getAttribute("aria-expanded") === "true";
			btn.setAttribute("aria-expanded", String(!open));
		});
		list.addEventListener("click", function (e) {
			if (e.target.tagName === "A") btn.setAttribute("aria-expanded", "false");
		});
	}

	/* ---------- Reveal on scroll ---------- */
	function initReveal() {
		const items = document.querySelectorAll("[data-reveal]");
		if (!("IntersectionObserver" in window) || !items.length) {
			items.forEach(function (el) { el.classList.add("is-visible"); });
			return;
		}
		const io = new IntersectionObserver(function (entries) {
			entries.forEach(function (entry) {
				if (entry.isIntersecting) {
					entry.target.classList.add("is-visible");
					io.unobserve(entry.target);
				}
			});
		}, { rootMargin: "0px 0px -10% 0px", threshold: 0.08 });
		items.forEach(function (el) { io.observe(el); });
	}

	/* ---------- Contact form -> mailto ---------- */
	function initForm() {
		const form = document.getElementById("contact-form");
		if (!form) return;
		form.addEventListener("submit", function (e) {
			e.preventDefault();
			const data = new FormData(form);
			const name = (data.get("name") || "").toString().trim();
			const contact = (data.get("contact") || "").toString().trim();
			const message = (data.get("message") || "").toString().trim();
			const subject = encodeURIComponent("Poptávka — " + (name || "Šálek čaje"));
			const body = encodeURIComponent(
				"Jméno: " + name + "\n" +
				"Kontakt: " + contact + "\n\n" +
				message
			);
			window.location.href = "mailto:petr@salekcaje.cz?subject=" + subject + "&body=" + body;
		});
	}

	/* ---------- Footer year ---------- */
	function initYear() {
		const y = document.getElementById("year");
		if (y) y.textContent = String(new Date().getFullYear());
	}

	document.addEventListener("DOMContentLoaded", function () {
		initLangSwitch();
		initNav();
		initReveal();
		initForm();
		initYear();
	});
})();
