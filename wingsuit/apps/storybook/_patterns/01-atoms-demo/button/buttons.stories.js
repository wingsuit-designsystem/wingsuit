import { withKnobs, text, boolean, number } from "@storybook/addon-knobs";
import 'tokens/tokens.css';

export default {
  title: 'Atoms/Buttons',
  decorators: [withKnobs]
};
debugger;
export const button_primary = () => (

  require('./buttons.twig')()
);
