const flowersSlider = new Swiper('.flowers-slider', {
  // Параметры контейнера
  loop: true,
  slidesPerView: 5,

  // Стрелки
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // Настройка адаптивности
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 2,
      spaceBetween: 20
    },
    // when window width is >= 480px
    480: {
      slidesPerView: 3,
      spaceBetween: 30
    },
    // when window width is >= 992px
    992: {
      slidesPerView: 6,
      spaceBetween: 40
    }
  }

});

const feedbackSlider = new Swiper('.feedback-slider', {
  // Параметры контейнера
  loop: true,

  //Стрелки
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});