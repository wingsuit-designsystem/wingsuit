import React from 'react';

import { RenderTwig } from '@wingsuit-designsystem/storybook';

const twigTemplate = require('./article.twig');

export default { title: '05-pages/Article' };

export const Article = () => <RenderTwig data={twigTemplate}></RenderTwig>;
