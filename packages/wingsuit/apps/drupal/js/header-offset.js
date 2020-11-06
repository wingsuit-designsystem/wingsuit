/**
 * @file
 * Adds the toolbar offset the fixed header component.
 */
(function ($) {
  Drupal.behaviors.header_offset = {
    attach() {
      if (typeof $ !== 'undefined') {
        $(document).on('drupalViewportOffsetChange', function (event, offset) {
          $('.header-offset').css('top', offset.top);
        });
      }
    },
  };
})(jQuery);
