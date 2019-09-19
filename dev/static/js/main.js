$(document).ready(function () {
    svg4everybody({});

    $('.slider').slick({
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        adaptiveHeight: true,
        autoplay: true,
        autoplaySpeed: 5000,
    })
});
