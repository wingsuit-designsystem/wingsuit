import {RenderTwig} from "@wingsuit-designsystem/storybook";
import React from "react";

export default { title: '05-pages/article' };

const template = require('./article.twig');

export const Article = () => <RenderTwig data={template}></RenderTwig>;
