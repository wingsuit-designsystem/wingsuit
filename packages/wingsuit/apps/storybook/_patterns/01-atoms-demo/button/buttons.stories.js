import 'tokens/tokens.css';

import { tellStories } from '@wingsuit-designsystem/storybook';

tellStories('button', module, (variables, variant) => {
  return require('atoms/button/_button.twig')(variables);
});
