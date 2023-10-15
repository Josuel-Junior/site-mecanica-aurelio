var swiper3El = document.querySelector(".mySwiper3");
    Object.assign(swiper3El, {
    
      effect: "creative",
      speed: 1000,
      loop:true,
      creativeEffect: {
        prev: {
          // shadow: true,
          translate: ["-20%", 0, -1],
        },
        next: {
          translate: ["100%", 0, 0],
        },
      },
      autoplay: {
        delay: 6500,
        disableOnInteraction: false,
      },
    });
    swiper3El.initialize()


 
  