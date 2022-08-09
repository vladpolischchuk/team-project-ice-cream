function backToTop() {
    let button = $('.scroll-to-top');

    button.fadeOut(0);

    $(window).on('scroll', () => {
        if ($(this).scrollTop() >= 50) {
            button.fadeIn();
        } else {
            button.fadeOut();
        }
    });
}

backToTop();