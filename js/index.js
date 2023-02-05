
// main-vis slide
var swiper = new Swiper('.main-vis .swiper-container', {
  loop: true,
  speed: 2000,
  pagination: {
    el: '.main-vis .slider-pagination',
  },
  navigation: {
    nextEl: '.main-vis .next-button',
    prevEl: '.main-vis .prev-button',
  },
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
});

// best-slider
var swiper = new Swiper('.best-slide .swiper-container' , {
  loop: true,
  speed: 2000,
  pagination: {
    el: '.best-slide .slider-pagination',
  },
  navigation: {
    nextEl: '.best-slide .next-button',
    prevEl: '.best-slide .prev-button',
  },
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
});
