// .storybook/manager.js

import { addons } from '@storybook/manager-api';
import { theme } from '@wingsuit-designsystem/storybook/theming';
theme.brandImage = "https://github.com/wingsuit-designsystem/wingsuit/raw/2.0.x/images/wsuit-logo-inline.png";
addons.setConfig({
  theme,
});
