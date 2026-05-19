(() => {
	const DEFAULT_LANGUAGE = "cs";
	const dictionaries = window.SITE_I18N || {};
	const state = {
		language: localStorage.getItem("site-language") || DEFAULT_LANGUAGE
	};

	const select = document.querySelector("[data-language-switcher]");
	const menu = document.querySelector("[data-menu]");
	const menuToggle = document.querySelector("[data-menu-toggle]");
	const header = document.querySelector("[data-header]");

	function getValue(path, dictionary) {
		return path.split(".").reduce((value, key) => value && value[key], dictionary);
	}

	function translate(language) {
		const dictionary = dictionaries[language] || dictionaries[DEFAULT_LANGUAGE];
		document.documentElement.lang = language;
		document.querySelectorAll("[data-i18n]").forEach((element) => {
			const value = getValue(element.dataset.i18n, dictionary);
			if (typeof value === "string") element.textContent = value;
		});
		renderServices(dictionary.serviceList || []);
	}

	function serviceTemplate(service) {
		const imageBase = `./img/${service.id}`;
		return `
			<article class="service-card" tabindex="0">
				<div class="service-card__media">
					<img src="${imageBase}--main.png" alt="${service.alt}" loading="lazy" width="320" height="320">
					<img src="${imageBase}--hover.png" alt="" aria-hidden="true" loading="lazy" width="320" height="320">
				</div>
				<div class="service-card__body">
					<div class="service-card__meta"><span>${service.section}</span><span>${service.id}</span></div>
					<h3>${service.title}</h3><p>${service.text}</p>
				</div>
			</article>`;
	}

	function renderServices(services) {
		document.querySelectorAll("[data-service-group]").forEach((container) => {
			const groupName = container.dataset.serviceGroup;
			container.innerHTML = services.filter((service) => service.group === groupName).map(serviceTemplate).join("");
		});
	}

	function setupLanguageSwitcher() {
		if (!select) return;
		Object.keys(dictionaries).forEach((language) => {
			if (!select.querySelector(`option[value="${language}"]`)) {
				const option = document.createElement("option");
				option.value = language;
				option.textContent = language.toUpperCase();
				select.append(option);
			}
		});
		select.value = dictionaries[state.language] ? state.language : DEFAULT_LANGUAGE;
		select.addEventListener("change", (event) => {
			state.language = event.target.value;
			localStorage.setItem("site-language", state.language);
			translate(state.language);
		});
	}

	function setupMenu() { if (!menu || !menuToggle) return; }
	function setupHeader() {
		if (!header) return;
		const update = () => header.classList.toggle("is-scrolled", window.scrollY > 12);
		update(); window.addEventListener("scroll", update, { passive: true });
	}
	function setupReveal() {
		const elements = document.querySelectorAll(".reveal");
		if (!("IntersectionObserver" in window)) return elements.forEach((e) => e.classList.add("is-visible"));
		const observer = new IntersectionObserver((entries) => entries.forEach((entry) => {
			if (entry.isIntersecting) { entry.target.classList.add("is-visible"); observer.unobserve(entry.target); }
		}), { threshold: 0.16 });
		elements.forEach((element) => observer.observe(element));
	}
	function setupYear() { document.querySelectorAll("[data-year]").forEach((e) => e.textContent = new Date().getFullYear()); }
	setupLanguageSwitcher(); setupMenu(); setupHeader(); setupReveal(); setupYear(); translate(state.language);
})();
