// Button.stories.js | Button.stories.jsx

import React from 'react';

import { Button } from './button.jsx';

export default {
  title: 'Components/Button',
  component: Button,
};

export const Primary = () => <Button background="#ff0" label="Button" />;
