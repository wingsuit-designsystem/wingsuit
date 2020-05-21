import {RenderTwig} from "@wingsuit-designsystem/storybook";
import React from "react";
import "atoms/hamburger";
import "atoms/image";

export default {
  title: '05-pages/homepage',
  parameters: {
    layout: 'fullscreen',
  }
};

const template = require('./homepage.twig');

export const Homepage = () => <RenderTwig data={template}></RenderTwig>;
