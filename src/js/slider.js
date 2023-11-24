var swiper3El = document.querySelector(".mySwiper");
Object.assign(swiper3El, {
    effect: "creative",
    speed: 1000,
    loop: true,

    creativeEffect: {
        prev: {
            translate: ["-20%", 0, -1],
        },
        next: {
            translate: ["100%", 0, 0],
        },
    },
    autoplay: {
        delay: 4000,
        disableOnInteraction: false,
    },
});
swiper3El.initialize();



var splide = new Splide('.splide', {
    perPage: 3,
    rewind: true,
    type: 'loop',
    autoplay: 'play',
    gap: '.5rem',
    interval: 3000,
    pauseOnHover: true,
    breakpoints: {
        992: {
            perPage: 3,
            height: '100%',
        },
        970: {
            perPage: 2,
            height: '100%',
        },
        760: {
            perPage: 1,
            height: '100%',
        },
    },
});
splide.mount();

