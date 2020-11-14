// import Swiper JS
import Swiper from 'swiper';
import 'swiper/css/swiper.css';

Drupal.behaviors.slider = {
  attach() {
    const sliders = document.querySelectorAll('.swiper-container');
    sliders.forEach((slider) => {
      if (!slider.classList.contains('swiper-container--processed')) {
        // eslint-disable-next-line no-new
        new Swiper(slider, {
          navigation: {
            nextEl: slider.querySelector('.swiper-button-next'),
            prevEl: slider.querySelector('.swiper-button-prev'),
          },
          pagination: {
            el: slider.querySelector('.swiper-pagination'),
            type: 'fraction',
          },
        });
      }
    });
  },
};
