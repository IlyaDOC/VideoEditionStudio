// Companies slider
const companiesSlider = new Swiper('.companies-section__slider .swiper', {
  slidesPerView: 'auto',
  spaceBetween: 30,
  loop: true,
  speed: 3000,
  autoplay: {
    delay: 0,
    disableOnInteraction: false,
  },
  breakpoints: {
    320: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 3,
    },
    1024: {
      slidesPerView: 4,
    },
    1400: {
      slidesPerView: 5,
    }
  }
}); 