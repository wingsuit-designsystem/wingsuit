Drupal.behaviors.wingsuitMenu = () => {
  return {
    submenuIsOpen: false,
    processed: false,
    submenuDirection: 'right',
    getSubmenuDirection: ($el) => {
      const space = $el.getBoundingClientRect().right + $el.getBoundingClientRect().width;
      return space >= window.innerWidth ? 'left' : 'right';
    },
  };
};

