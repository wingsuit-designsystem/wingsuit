# Wingsuit: A design system integrating to Pattern Lab and Tailwind with Drupal.

## [Atomic Design](https://bradfrost.com/blog/post/atomic-web-design/) + [Tailwind](tailwindcss.com/) + [Patternlab 3](https://patternlab.io/) + [UI Patterns](https://www.drupal.org/project/ui_patterns)

1.  Apply Tailwind Config to a locally-served **Pattern Lab**
1.  Create Twig Atomic Design Components
1.  Apply that design to Drupal with UI Patterns

## Prerequisites

- [Node `^8`, `^10`](https://nodejs.org)
- [NPM `^5`, `^6`](https://www.npmjs.com/)
- [PHP `^7.0.0`](https://php.net)

## Provides
1.  Shows [Tailwind](tailwindcss.com/) classes/configuration inside Patternlab
1.  Strict Atomic Design for your UI Components
1.  Productivity tools:
    1.  SVG Icons generation
    1.  Define your image styles with a yml file and use this,
    1.  LiveReload,
1.  Uses [alpinejs](https://github.com/alpinejs/alpine) for basic js operations.
1.  Uses [vue.js](https://vuejs.org/) for larger Javascript


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
   ```

1. Then `cd wingsuit` and run:

   ```bash
   fin up
   fin wingsuit/startup
   ```
## Wingsuit is heavenly inspired by [Particle](https://github.com/phase2/particle) from [Phase2](https://www.phase2technology.com/)
### Differences to Particle
1.  Wingsuit uses Tailwind instead of Bootstrap
1.  Uses Postcss instead of Sass
1.  Uses alpinejs instead of jQuery
1.  Uses [UI Patterns] instead of Presenter Templates (Presenter templates vs )
