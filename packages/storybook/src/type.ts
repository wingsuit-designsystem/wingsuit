// types.ts
import type { BuilderOptions } from '@storybook/builder-webpack5';
import type { ReactOptions } from '@storybook/preset-react-webpack';

export type FrameworkOptions = ReactOptions & {
  appName: string | 'storybook';
  builder?: BuilderOptions;
};
