/**
 * @file
 * Adds the toolbar offset the fixed header component.
 */
(($) => {
  Drupal.behaviors.header_offset = {
    attach() {
      if (typeof $ !== 'undefined') {
        $(document).on('drupalViewportOffsetChange', (event, offset) => {
          $('.header-offset').css('top', offset.top);
        });
      }
    },
  };
})(jQuery);
