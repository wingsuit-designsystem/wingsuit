import 'regenerator-runtime/runtime';
import Alpine from 'alpinejs';

window.Alpine = Alpine;
Drupal.behaviors.alpinejs = {
  isStarted: false,
  attach() {
    if (Drupal.behaviors.alpinejs.isStarted === false) {
      Alpine.start();
      Drupal.behaviors.alpinejs.isStarted = true;
    }
  },
};
