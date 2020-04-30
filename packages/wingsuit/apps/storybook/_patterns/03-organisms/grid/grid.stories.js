import 'tokens/tokens.css';

import { tellStories } from '@wingsuit-designsystem/storybook';

tellStories('03-organisms/grid', module, (variables, variant) => {
  return require('organisms/grid/_grid.twig')(variables);
});
