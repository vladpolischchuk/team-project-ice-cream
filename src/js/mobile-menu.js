(() => {
	const refs = {
		togglerMenu: document.querySelector("[data-menu-button]"),
		menuItems: document.querySelectorAll("[data-menu-item]"),
		Menu: document.querySelector("[data-menu-container]"),
		openModal: document.querySelectorAll("[data-modal-open]"),
		togglerMenu: document.querySelector("[data-menu-button]"),
		closeModal: document.querySelectorAll("[data-modal-close]"),
		backDrop: document.querySelector("[data-modal-bg]")
	};

	refs.menuItems.forEach(item => {
		item.addEventListener("click", closeMenu);
	});
	refs.togglerMenu.addEventListener("click", toggleMenu);

	refs.openModal.forEach(item => {
		item.addEventListener("click", () => { toggleModal("[" + item.dataset.id + "]", (item.dataset.overlay===undefined?true:false)) });
	});
	refs.closeModal.forEach(item => {
		item.addEventListener("click", backDropClick);
	});
	refs.backDrop.addEventListener("click", backDropClick);

	function toggleMenu() {
		const expanded = refs.togglerMenu.getAttribute("aria-expanded") === "true" || false;
		refs.togglerMenu.setAttribute("aria-expanded", !expanded);
		refs.togglerMenu.classList.toggle("is-open");
		refs.Menu.classList.toggle("is-closed");
		refs.backDrop.classList.toggle("is-hidden");
		document.body.classList.toggle("off_overflow");
	}
	function closeMenu() {
		if (refs.togglerMenu.classList.contains("is-open")){
			toggleMenu();
		};
		
	}

	function toggleModal(modalData, modal) {
		closeMenu();
		document.querySelector(modalData).classList.toggle("is-hidden");
		if (modal) {
			refs.backDrop.dataset.overlay = true;
			refs.backDrop.classList.toggle("is-hidden");
			document.body.classList.toggle("off_overflow");
		} else {
			refs.backDrop.dataset.overlay = false;
		}
		if (refs.backDrop.dataset.opened == modalData) {
			refs.backDrop.dataset.opened = "none";
		} else {
			refs.backDrop.dataset.opened = modalData;
		}
	}
	function backDropClick() {
		let id = refs.backDrop.dataset.opened;
		if (id=="none") {
			closeMenu();
		} else {
			closeMenu();
			toggleModal(id, refs.backDrop.dataset.overlay);
		}

	}
})();
