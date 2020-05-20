import {RenderTwig} from "@wingsuit-designsystem/storybook";
import React from "react";

export default { title: '02-molecules/menu' };

const primaryTemplate = require('./menu.twig');

export const PrimaryMenu = () => <RenderTwig data={primaryTemplate}></RenderTwig>;
