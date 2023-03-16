Drupal.behaviors.wingsuitMenu = () => {
  return {
    submenuIsOpen: false,
    processed: false,
    submenuDirection: 'right',
    getSubmenuDirection: ($el) => {
      const space = $el.getBoundingClientRect().width + $el.getBoundingClientRect().x + 400;
      return space >= window.innerWidth ? 'left' : 'right';
    },
  };
};
