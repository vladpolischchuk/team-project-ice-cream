(() => {
	const refs = {
		togglerProduct_1: document.querySelector("[data-product-toggle-1]"),
		togglerProduct_2: document.querySelector("[data-product-toggle-2]"),
		togglerProduct_3: document.querySelector("[data-product-toggle-3]"),
		productsSlides: [
			document.querySelector("[data-product-slides-1]"),
			document.querySelector("[data-product-slides-2]"),
			document.querySelector("[data-product-slides-3]")
		],
	};

	refs.togglerProduct_1.addEventListener("click", ()=>{toggleProducts(0)});
	refs.togglerProduct_2.addEventListener("click", ()=>{toggleProducts(1)});
	refs.togglerProduct_3.addEventListener("click", ()=>{toggleProducts(2)});

	function toggleProducts(id) {
		if (refs.productsSlides[id].classList.contains("show-first")){
			refs.productsSlides[id].classList.toggle("show-first");
			refs.productsSlides[id].classList.toggle("show-two");
		} else if(refs.productsSlides[id].classList.contains("show-two")) {
			refs.productsSlides[id].classList.toggle("show-three");
			refs.productsSlides[id].classList.toggle("show-two");
		} else {
			refs.productsSlides[id].classList.toggle("show-first");
			refs.productsSlides[id].classList.toggle("show-three");
		}
		
	}

})();