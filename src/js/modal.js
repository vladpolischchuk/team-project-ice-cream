(() => {
	const refs = {
		openMenu: document.querySelector("[data-modal-buy]"),
		closeMenu: document.querySelector("[data-modal-close]"),
		modal: document.querySelector("[modal-data-buy]"),
		backDrop: document.querySelector("[data-modal-bg]")
	};

	refs.openMenu.addEventListener("click", toggleMenu);
	refs.closeMenu.addEventListener("click", toggleMenu);

	function toggleMenu() {
		refs.modal.classList.toggle("is-hidden");
		refs.backDrop.classList.toggle("is-hidden");
		document.body.classList.toggle("off_overflow");
	}
})();