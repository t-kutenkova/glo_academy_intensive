const flowersSlider = new Swiper('.swiper-container', {
  // Параметры контейнера
  loop: true,
  slidesPerView: 5,

  //Стрелки
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});