import { withKnobs, text, boolean, number } from "@storybook/addon-knobs";
import 'tokens/tokens.css';
import button from './buttons.twig';

export default {
  title: 'Atoms/Buttons',
  decorators: [withKnobs]
};

export const buttonPrimary = () => (
  button({'foo': 'bar'})
);
