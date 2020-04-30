<p align="center">
<img src="https://github.com/wingsuit-designsystem/wingsuit/raw/master/images/logo_wingsuit_c_it.svg" width="240px">
</p>

### Server is an open source designsystem to build reusable Twig Components with [Storybook](https://storybook.js.org/) for Drupal.

1.  Describe, develop and test your Twig Components in storybook.
1.  Use this components defined components in Drupal with UI Patterns
1.  Tailwind + Alpinejs configured as frontend frameworks

## Prerequisites

- [Node `^8`, `^10`](https://nodejs.org)
- [NPM `^5`, `^6`](https://www.npmjs.com/)
- [PHP `^7.0.0`](https://php.net)


## Quickstart

1. Simply run:

   ```bash
   npm create @wingsuit-designsystem/wingsuit wingsuit
   ```

1. Then `cd wingsuit/` and run:

   ```bash
   npm install
   npm run dev:drupal
   ```


## Develop Server
1. Clone repository:

   ```bash
   git clone git@github.com:wingsuit-designsystem/wingsuit.git
   yarn bootstrap
   yarn build
   ```

1. To start storybook `cd packages/wingsuit` and run:

   ```bash
   npm run dev:storybook
   ```

1. To start drupal `cd packages/wingsuit` and run:

   ```bash
   npm run dev:drupal
   ```
## Server is inspired by [Particle](https://github.com/phase2/particle) from [Phase2](https://www.phase2technology.com/)

