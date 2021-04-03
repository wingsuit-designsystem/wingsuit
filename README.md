<p align="center">
<img src="https://github.com/wingsuit-designsystem/wingsuit/raw/master/images/wsuit-logo-stacked.svg" width="340px">
</p>

## Upgrade from BETA.41 to rc.1

Breaking changes:
* From knobs to controls: 
Replace `@storybook/addon-knobs` to `@storybook/addon-controls` in your apps/storybook/main.js
* Twig functions `pattern_preview` and `pattern` are now compatible with UI Patterns functions
The arguments order changed from `pattern, variant, variables` to `pattern, variable, variant`.
So search for all `pattern_preview` and `pattern` methods and reorder the variables.

# Build bulletproof TWIG Components in Storybook

1.  Describe, develop and test your Pattern in storybook with [twing](https://www.npmjs.com/package/twing).
1.  Use the same pattern in Drupal with UI Patterns without any presenter pattern
1.  Starterkits for:
    *  Tailwind + Alpinejs
    *  Boostrap + jQuery
1.  Bundled Webpack base configuration to keep everything up to date.

## Documentation
Check out the <a href="https://wingsuit-designsystem.github.io/">Wingsuit documentation</a> for more information.
## Prerequisites

- [Node `^12`](https://nodejs.org)
- [YARN `^1.19`](https://yarnpkg.com/)
- [PHP `^7.3.0`](https://php.net)


## Quickstart

1. To install run inside `themes/custom`:

```bash
npx @wingsuit-designsystem/cli init
```

1. Then `cd wingsuit/` and run:

#### NPM
To start storybook
```bash
npm run dev:storybook
```
To start drupal
```bash
npm run dev:drupal
```
#### YARN
To start storybook
```bash
yarn dev:storybook
```
To start drupal
```bash
yarn dev:drupal
```
## Generate new pattern
```bash
yarn ws generate-component
```
## Develop Wingsuit

### Help?
I am looking for help. You can ping me at [drupaltwig@Slack](https://drupaltwig.slack.com)    

To develop Wingsuit you need `yarn`.
1. Clone repository:

```bash
git clone git@github.com:wingsuit-designsystem/wingsuit.git
cd wingsuit
yarn bootstrap
yarn dev
```

1. To start storybook `cd starter-kits/tailwind` and run:

```bash
yarn dev:storybook
```

1. To start drupal `cd starter-kits/tailwind` and run:

```bash
yarn dev:drupal
```

1. To build docs
```bash
yarn dev:drupal
```

## Wingsuit is inspired by [Particle](https://github.com/phase2/particle) from [Phase2](https://www.phase2technology.com/)

