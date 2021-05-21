import Prism from 'prismjs';
import 'prismjs/components/prism-javascript';
import 'prismjs/components/prism-markup';
import 'prismjs/components/prism-css';
import 'prismjs/components/prism-scss';
import 'prismjs/plugins/keep-markup/prism-keep-markup';

import 'prismjs/components/prism-yaml';
import 'prismjs/components/prism-twig';
import 'prismjs/components/prism-bash';

window.Spruce.store('component_feature', null);
Drupal.behaviors.code_block = {
  attach() {
    document.querySelectorAll('.code-block').forEach((container) => {
      Prism.highlightElement(container);
    });
  },
};
