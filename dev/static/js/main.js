$(document).ready(function () {
    svg4everybody({});

    $('.slider').slick({
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        adaptiveHeight: true,
        autoplay: true,
        autoplaySpeed: 5000
    });

    $('.testimonials__list').slick({
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        autoplay: true,
        autoplaySpeed: 3000
    }).on('afterChange', function(event) {
        const sliderDots = document.querySelectorAll('.slick-dots li');
        const clients = document.querySelectorAll('.client');
        let activeDotIndex;

        Array.from(sliderDots).forEach((item, index) => {
            if (item.classList.contains('slick-active')) {
                activeDotIndex = index;
            }
        });

        for (let i = 0; i < clients.length; i++) {
            clients[i].style.opacity = '0.5';
        }

        clients[activeDotIndex].style.opacity = '1';
    });
});
