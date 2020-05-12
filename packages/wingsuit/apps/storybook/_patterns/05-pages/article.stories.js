import React from 'react';

import { PatternPreview } from '@wingsuit-designsystem/storybook';

export default { title: '05-pages/Article' };

const template = require('./article.twig');

export const Article = () => (
  <PatternPreview patternId="card" variantId="default"/>
);
