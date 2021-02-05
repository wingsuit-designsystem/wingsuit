import '@glidejs/glide/dist/css/glide.core.min.css';
import Glide, {
  Controls,
  Breakpoints,
  Swipe,
  Autoplay,
} from '@glidejs/glide/dist/glide.modular.esm';

Drupal.behaviors.slider = {
  attach() {
    const sliders = document.querySelectorAll('.glide');
    sliders.forEach((slider) => {
      if (!slider.classList.contains('glide--processed')) {
        const autoplay = slider.attributes['data-autoplay'].value;
        const slidesPerView = slider.attributes['data-slides-per-view'].value;
        new Glide(slider, {
          type: 'carousel',
          perView: slidesPerView,
          autoplay: autoplay === '1' ? 2000 : false,
          gap: 30,
          breakpoints: {
            640: {
              perView: 1,
            },
            768: {
              perView: slidesPerView === '4' ? 2 : 1,
            },
          },
        }).mount({ Controls, Breakpoints, Swipe, Autoplay });
        slider.classList.add('glide--processed');
      }
    });
  },
};
