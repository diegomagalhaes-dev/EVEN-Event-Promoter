const $simpleCarousel = document.querySelector(".js-carousel");
new Glider($simpleCarousel, {
    slidesToShow: 1,
    slidesToScroll: 1,
    draggable: true,
    dots: ".js-carousel--dots",
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