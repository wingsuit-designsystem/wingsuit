import Splide from '@splidejs/splide';

Drupal.behaviors.slider = {
  attach() {
    const sliders = document.querySelectorAll('.splide');
    sliders.forEach((slider) => {
      if (!slider.classList.contains('splide--processed')) {
        const autoplay = slider.attributes['data-autoplay'].value;
        const slidesPerView = slider.attributes['data-slides-per-view'].value;
        const splide = new Splide(slider, {
          type: 'slide',
          arrows: true,
          perPage: slidesPerView,
          perMove: slidesPerView,
          autoplay: autoplay === '1',
          interval: 5000,
          rewind: autoplay === '1',
          gap: 30,
          breakpoints: {
            640: {
              perPage: 1,
              perMove: 1,
            },
            768: {
              perPage: slidesPerView === '4' ? 2 : 1,
              perMove: slidesPerView === '4' ? 2 : 1,
            },
          },
        });
        splide.mount();
        slider.classList.add('splide--processed');
      }
    });
  },
};
