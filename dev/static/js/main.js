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

    // modal window om career page
    const applyPosition = () => {
        const applyButtons = document.querySelectorAll('.positions__btn');
        const modal = document.querySelector('.modal');
        const closeButton = document.querySelector('.modal__close');
        const modalTitle = document.querySelector('.modal__title');
        const form = document.querySelector('.modal__form');
        const submitButton = document.querySelector('.modal__btn');
        const overlay = document.querySelector('.overlay');

        for (let i = 0; i < applyButtons.length; i++) {
            applyButtons[i].addEventListener('click', e => {
                e.preventDefault();

                const message = modal.querySelector('.modal__message');

                if (message) message.parentElement.removeChild(message);

                overlay.classList.add('js-overlay-show');
                modal.classList.add('js-show');

                modalTitle.textContent = e.target.parentElement.querySelector('.positions__name').textContent;
            });
        }

        closeButton.addEventListener('click', e => {
            modal.classList.remove('js-show');
            overlay.classList.remove('js-overlay-show');
            form.classList.remove('js-hide');
        });

        submitButton.addEventListener('click', e => {
            e.preventDefault();

            const text = document.createElement('div');
            text.className = 'modal__message';
            text.textContent = 'Thank you! Your data was sent.';
            form.classList.add('js-hide');
            modal.appendChild(text);
        });
    };

    // initialize the main functionality
    const init = () => {
        applyPosition();
    };

    init();
});
