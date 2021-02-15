const flowersSlider = new Swiper('.flowers-slider', {
  // Параметры контейнера
  loop: true,
  slidesPerView: 5,

  //Стрелки
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
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