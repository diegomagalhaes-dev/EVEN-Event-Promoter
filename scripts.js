const $simpleCarousel = document.querySelector(".js-carousel");
new Glider($simpleCarousel, {
    slidesToShow: 1,
    slidesToScroll: 1,
    draggable: true,
    dots: ".js-carousel--dots",
    arrows: {
        prev: ".js-carousel--prev",
        next: ".js-carousel--next"
    },
    scrollLock: true,
    responsive: [
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 1,
                slidesToShow: 1
            }
        }
    ]
})