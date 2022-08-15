// Button for scroll to top
(() => {
    let button = document.querySelector('.btn-scroll-top');

    window.addEventListener('scroll', function(e) {

        if (window.scrollY>=150) {
            button.classList.add("is-hidden");
        } else {
            button.classList.remove("is-hidden");
        }
        });


})();