var swiper3El = document.querySelector(".mySwiper3");
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

var navBar = document.querySelector(".navbar");

document.addEventListener("scroll", btnHide);

function btnHide() {
  if (window.scrollY > 0) {
    navBar.classList.add("navbar-custom-trans");
    navBar.classList.remove("navbar-custom");
  } else {
    navBar.classList.remove("navbar-custom-trans");
    navBar.classList.add("navbar-custom");
  }
}

btnHide();
