if ($.fn.owlCarousel) {
    var clientArea = $('.client-silder');
    clientArea.owlCarousel({
        items: 2,
        loop: true,
        autoplay: false,
        smartSpeed: 1500,
        margin: 30,
        nav: true,
        navText: ["<i class='ti-angle-left'</i>", "<i class='ti-angle-right'</i>"],
        dots: false,
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 1
            }
        }
    });
}
