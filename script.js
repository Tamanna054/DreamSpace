(() => {
	document.querySelectorAll(".menu-toggle").forEach((button) => {
		const navigation = document.getElementById(button.getAttribute("aria-controls"));
		if (!navigation) return;

		const closeMenu = () => {
			navigation.classList.remove("is-open");
			button.setAttribute("aria-expanded", "false");
			button.setAttribute("aria-label", "Open navigation menu");
		};

		document.addEventListener("click", (event) => {
			if (!navigation.classList.contains("is-open")) return;
			if (button.contains(event.target) || navigation.contains(event.target)) return;
			closeMenu();
		});

		document.addEventListener("keydown", (event) => {
			if (event.key !== "Escape" || !navigation.classList.contains("is-open")) return;
			closeMenu();
			button.focus();
		});
	});
})();
