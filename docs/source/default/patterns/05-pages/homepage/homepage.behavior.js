window.Spruce.watch('component_feature', (value) => {
  document.querySelectorAll(`.scroll-container`).forEach((container) => {
    const element = container.querySelector(`.component-feature--${value}`);
    if (element != null) {
      container.scrollTo({ top: element.offsetTop - 200, behavior: 'smooth' });
    }
  });
});
