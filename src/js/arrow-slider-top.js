function backToTop() {
    let button = $('.scroll-to-top');

    $(window).on('scroll', () => {
        if ($(this).scrollTop() >= 100) {
            button.fadeIn();
        } else {
            button.fadeOut();
        }
    });
}

backToTop();