import { initJsBehaviors } from '@wingsuit-designsystem/pattern-react';

initJsBehaviors('Drupal');

export const parameters = {
  viewport: {
    viewports: {
      mobile_small: {
        name: 'Mobile Small',
        styles: {
          width: '320px',
          height: '568px',
        },
      },
      sm: {
        name: 'sm',
        styles: {
          width: '640px',
          height: '801px',
        },
      },
      md: {
        name: 'md',
        styles: {
          width: '768px',
          height: '1000px',
        },
      },
      lg: {
        name: 'lg',
        styles: {
          width: '1024px',
          height: '900px',
        },
      },
      xl: {
        name: 'xl',
        styles: {
          width: '1280px',
          height: '1024px',
        },
      },
      '2xl': {
        name: '2xl',
        styles: {
          width: '1536px',
          height: '1024px',
        },
      },
    },
  },
};
