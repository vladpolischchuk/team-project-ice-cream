(() => {
	const refs = {
		togglerMenu: document.querySelector("[data-menu-button]"),
		menuItems: document.querySelectorAll("[data-menu-item]"),
		Menu: document.querySelector("[data-menu-container]"),
		openModal: document.querySelector("[data-modal-buy]"),
		togglerMenu: document.querySelector("[data-menu-button]"),
		closeModal: document.querySelector("[data-modal-close]"),
		modal: document.querySelector("[modal-data-buy]"),
		backDrop: document.querySelector("[data-modal-bg]")
	};

	refs.menuItems.forEach(item => {
		item.addEventListener("click", closeMenu);
	});
	refs.togglerMenu.addEventListener("click", toggleMenu);

	refs.openModal.addEventListener("click", toggleModal);
	refs.closeModal.addEventListener("click", toggleModal);

	function toggleMenu() {
		const expanded = refs.togglerMenu.getAttribute("aria-expanded") === "true" || false;
		refs.togglerMenu.setAttribute("aria-expanded", !expanded);
		refs.togglerMenu.classList.toggle("is-open");
		refs.Menu.classList.toggle("is-closed");
		document.body.classList.toggle("off_overflow");
	}
	function closeMenu() {
		if (refs.togglerMenu.classList.contains("is-open")){
			toggleMenu()
		};
		
	}
	function toggleModal() {
		closeMenu()
		refs.modal.classList.toggle("is-hidden");
		refs.backDrop.classList.toggle("is-hidden");
		document.body.classList.toggle("off_overflow");
	}
})();
