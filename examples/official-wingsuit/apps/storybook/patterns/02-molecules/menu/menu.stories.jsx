import { RenderTwig } from '@wingsuit-designsystem/storybook';
import React from 'react';

export default { title: 'molecules/menu' };

const primaryTemplate = require('./menu.twig');

export const PrimaryMenu = () => <RenderTwig data={primaryTemplate}></RenderTwig>;
