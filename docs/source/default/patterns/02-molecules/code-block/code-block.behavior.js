import hljs from 'highlight.js/lib/core';
import javascript from 'highlight.js/lib/languages/javascript';
import twig from 'highlight.js/lib/languages/twig';
import yaml from 'highlight.js/lib/languages/yaml';

hljs.registerLanguage('javascript', javascript);
hljs.registerLanguage('twig', twig);
hljs.registerLanguage('yaml', yaml);
window.Spruce.store('component_feature', null);
Drupal.behaviors.code_block = {
  attach() {
    document.querySelectorAll('.code-block').forEach((container) => {
      hljs.highlightElement(container);
    });
  },
};
