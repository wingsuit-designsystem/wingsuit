import 'tokens/tokens.css';
import './index';

import { tellStories } from '@wingsuit-designsystem/storybook';

tellStories('atoms/image', module, (variables, variant) => {
  return require('atoms/image/_image.twig')(variables);
});
