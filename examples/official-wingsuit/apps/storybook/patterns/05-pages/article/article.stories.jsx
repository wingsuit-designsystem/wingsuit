<<<<<<< HEAD:examples/official-wingsuit/apps/storybook/patterns/05-pages/article/article.stories.jsx
import { RenderTwig } from '@wingsuit-designsystem/storybook';
import React from 'react';
import 'templates/article';
=======
import {RenderTwig} from "@wingsuit-designsystem/storybook";
import React from "react";
import "templates/article";

>>>>>>> WS #00: total updates,:packages/wingsuit/apps/storybook/patterns/05-pages/article/article.stories.js

export default {
  title: '05-pages/article',
  parameters: {
    layout: 'fullscreen',
  },
};

const template = require('./article.twig');

export const Article = () => <RenderTwig data={template}></RenderTwig>;
