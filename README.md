## A design system to build your Twig components better and faster.

# ![alt text](https://github.com/wingsuit-designsystem/wingsuit/raw/master/images/logo_wingsuit_c.png "Logo Title Text 1") Wingsuit 

## [Atomic Design](https://bradfrost.com/blog/post/atomic-web-design/) + [Tailwind](tailwindcss.com/) + [Storybook](https://storybook.js.org/) + [UI Patterns](https://www.drupal.org/project/ui_patterns)

1.  Describe, develop and test your Twig Components in storybook.
1.  Use this components defined components in Drupal with UI Patterns
1.  Tailwind + Alpinejs as default 

## Prerequisites

- [Node `^8`, `^10`](https://nodejs.org)
- [NPM `^5`, `^6`](https://www.npmjs.com/)
- [PHP `^7.0.0`](https://php.net)


## Quickstart

Wingsuit builds design systems in dev mode for local hosting, or production mode for optimized asset generation.

### Quickstart A

1. Simply run:

   ```bash
   npm create @wingsuit-designsystem/wingsuit wingsuit
   ```

1. Then `cd wingsuit/` and run:

   ```bash
   npm start
   ```

### Quickstart B
1. Clone repository:

   ```bash
   git clone git@github.com:wingsuit-designsystem/wingsuit.git
   ```

1. Then `cd wingsuit/wingsuit` and run:

   ```bash
   npm install
   npm run setup
   npm start
   ```

## Develop Wingsuit
1. Clone repository:

   ```bash
   git clone git@github.com:wingsuit-designsystem/wingsuit.git
   npx lerna link
   ```

1. Then `cd packages/wingsuit` and run:

   ```bash
   npm run storybook
   ```
   
## Wingsuit is inspired by [Particle](https://github.com/phase2/particle) from [Phase2](https://www.phase2technology.com/)
### Differences to Particle
1.  Wingsuit uses Storybook instead of Patternlab
1.  Wingsuit uses Tailwind instead of Bootstrap
1.  Uses Postcss instead of Sass
1.  Uses alpinejs instead of jQuery
1.  Uses [UI Patterns] instead of Presenter Templates (Presenter templates vs )

## Development
```
cd PROJECT/tools
npm link
cd PROJECT/wingsuit
npm link @wingsuit-designsystem/tools
```
```
cd PROJECT/pattern-loader
npm link
cd PROJECT/wingsuit
npm link pattern-loader
```