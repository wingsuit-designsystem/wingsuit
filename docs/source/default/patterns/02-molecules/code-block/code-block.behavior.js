import Prism from 'prismjs';
import 'prismjs/components/prism-css';
import 'prismjs/components/prism-scss';
import 'prismjs/components/prism-yaml';
import 'prismjs/components/prism-twig';
import 'prismjs/components/prism-bash';
import 'prismjs/components/prism-jsx';

import 'prismjs/plugins/keep-markup/prism-keep-markup';
import 'prismjs/plugins/toolbar/prism-toolbar';
import 'prismjs/plugins/copy-to-clipboard/prism-copy-to-clipboard';

Drupal.behaviors.code_block = {
  attach() {
    Prism.highlightAll();
  },
};
