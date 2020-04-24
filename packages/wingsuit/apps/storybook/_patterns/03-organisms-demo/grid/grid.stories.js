import 'tokens/tokens.css';

import { tellStories } from '@wingsuit-designsystem/storybook';


tellStories('grid', module, (variables, variant) => {
  return require('organisms/grid/_grid.twig')(variables);
});
