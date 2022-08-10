(() => {
	const refs = {
		togglerDescription: document.querySelector("[data-description-toggle]"),
		descriptionSlides: document.querySelector("[data-description-slides]"),
	};

	refs.togglerDescription.addEventListener("click", toggleDescription);

	function toggleDescription() {
		if (refs.descriptionSlides.classList.contains("show-first")){
			refs.descriptionSlides.classList.toggle("show-first");
			refs.descriptionSlides.classList.toggle("show-two");
		} else if(refs.descriptionSlides.classList.contains("show-two")) {
			refs.descriptionSlides.classList.toggle("show-three");
			refs.descriptionSlides.classList.toggle("show-two");
		} else {
			refs.descriptionSlides.classList.toggle("show-first");
			refs.descriptionSlides.classList.toggle("show-three");
		}
		
	}

})();