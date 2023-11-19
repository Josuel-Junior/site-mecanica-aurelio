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

var navBar = document.querySelector(".navbar");
function navbarColor() {
  const viewportWidth = window.innerWidth;
  if (window.scrollY > 0 || viewportWidth < 992) {
    navBar.classList.add("navbar-custom-trans", "shadow");
    navBar.classList.remove("navbar-custom");
  }
  else if (window.scrollY === 0 && viewportWidth > 992) {
    navBar.classList.remove("navbar-custom-trans", "shadow");
    navBar.classList.add("navbar-custom");
  }
}

window.addEventListener('resize', function () {
  navbarColor()
});
navbarColor()

const debounce = function (func, wait, immediate) {
  let timeout;
  return function (...args) {
    const context = this;
    const later = function () {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    const callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
};

const target = document.querySelectorAll(".service-box");
const targetSection = document.querySelector(".services-container");

function animeScroll() {
  const windowTop = window.pageYOffset + ((window.innerHeight * 3) / 3);
  target.forEach(function (element) {
    if ((windowTop) > targetSection.offsetTop) {
      element.classList.replace("old-in-left", "in-left");
    } else {
      element.classList.replace("in-left", "old-in-left");
    }
  })
}

animeScroll();
if (target.length) {
  window.addEventListener('scroll', debounce(function () {
    animeScroll();
    navbarColor()
  }, 100));
}

ScrollReveal({ reset: true });
ScrollReveal().reveal('.box-values', { duration: 2500 });


