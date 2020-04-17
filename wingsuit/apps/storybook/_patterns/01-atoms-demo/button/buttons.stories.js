import { withKnobs, text, boolean, number } from "@storybook/addon-knobs";
import 'tokens/tokens.css';

export default {
  title: 'Atoms/Buttons',
  decorators: [withKnobs]
};



const x = require('atoms/button/button.wingsuit.yml');
console.log(x);
