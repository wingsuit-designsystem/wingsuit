# twig-loader [![Build Status](https://travis-ci.org/zimmo-be/twig-loader.svg)](https://travis-ci.org/zimmo-be/twig-loader)
Webpack loader for compiling Twig.js templates. This loader will allow you to require Twig.js views to your code.

## Installation

`npm install twig-loader`

## Usage

[Documentation: Using loaders](http://webpack.github.io/docs/using-loaders.html?branch=master)

``` javascript

module.exports = {
    //...

    module: {
        rules: [
            {
                test: /\.twig$/,
                loader: "twig-loader",
                options: {
                    // See options section below
                },
            }
        ]
    },

    node: {
        fs: "empty" // avoids error messages
    }
};
```

### Options

- `twigOptions`: optional; a map of options to be passed through to Twig.
  Example: `{autoescape: true}`

## Loading templates

```twig
{# File: dialog.html.twig #}
<p>{{title}}</p>
```

```javascript
// File: app.js
var template = require("dialog.html.twig");
// => returns pre-compiled template as a function and automatically includes Twig.js to your project

var html = template({title: 'dialog title'});
// => Render the view with the given context

```

When you extend another view, it will also be added as a dependency. All twig functions that refer to additional templates are supported: import, include, extends & embed.

## Changelog
0.4.1 / 2018-06-12
==================
 * Upgrade mocha to fix security vulnerability warning

0.4.0 / 2018-05-17
==================
 * Add ablity to pass options to twig (PR #39)

0.3.1 / 2017-11-08
==================
 * Update to Twig.js 1.10, fixes #29

0.3.0 / 2017-02-19
==================
 * replace full path with a hash and implement mapcache for id/path resolution, fixes #12

0.2.4 / 2016-12-29
==================
 * Downgrade Twig.js back to 0.8.9 because of https://github.com/twigjs/twig.js/issues/440

0.2.3 / 2016-06-11
==================
 * Improve watch operation (rebuilding of modules)
 * Refactoring so compiler and the loader are in seperate modules
 * Add Twig as peer dependency

0.2.2 / 2016-06-03
==================

 * Add `embed` support
 * Update Twig.js version

0.2.1 / 2016-04-18
==================

* Improve `import` support (https://github.com/zimmo-be/twig-loader/pull/8)
* Rethrow exceptions when they occur during rendering to improve testing

0.2.0 / 2016-01-21
==================

* Add support for import statements (useful for Macro's)
* Correctly resolve dependencies from include/import/extend statements with relative path support: [\#3] and [\#5]
* CHANGE: No longer add the `.twig` file extension. After upgrading twig-loader, you may need to update your files and add `.twig` manually

