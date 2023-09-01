const swiper = new Swiper(".swiper", {
  direction: "horizontal",
  loop: true,
  speed: 700,

  pagination: {
    el: ".swiper-pagination",
  },

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  autoplay: {
    delay: 5000,
  },
});
