(() => {
	const refs = {
		togglerDescription: document.querySelector("[data-description-toggle]"),
		descriptionSlides: document.querySelectorAll("[data-description-slides]"),
	};

	refs.togglerDescription.addEventListener("click", toggleDescription);

	function toggleDescription() {
		if (refs.togglerMenu.classList.contains("is-open")){
			toggleMenu();
		};
		
	}

})();