(($) => {
  Drupal.behaviors.header = {
    attach() {
      $('.navbar-toggler')
        .once()
        .each(() => {
          console.log('yo');
        });
    },
  };
})(jQuery);
