(() => {
	const refs = {
		togglerMenu: document.querySelector("[data-menu-button]"),
		menuItems: document.querySelectorAll("[data-menu-item]"),
		Menu: document.querySelector("[data-menu-container]")
	};

	refs.menuItems.forEach(item => {
		item.addEventListener("click", closeMenu);
	});
	refs.togglerMenu.addEventListener("click", toggleMenu);

	function toggleMenu() {
		refs.togglerMenu.classList.toggle("is-open");
		refs.Menu.classList.toggle("is-closed");
		document.body.classList.toggle("off_overflow");
	}
	function closeMenu() {
		if (refs.togglerMenu.classList.contains("is-open")){
			toggleMenu()
		};
		
	}
})();
