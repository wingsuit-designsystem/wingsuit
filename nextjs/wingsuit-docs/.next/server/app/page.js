(() => {
var exports = {};
exports.id = 931;
exports.ids = [931];
exports.modules = {

/***/ 46517:
/***/ ((module) => {

"use strict";
module.exports = require("lodash");

/***/ }),

/***/ 18038:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/react");

/***/ }),

/***/ 98704:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/react-dom/server-rendering-stub");

/***/ }),

/***/ 97897:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/react-server-dom-webpack/client");

/***/ }),

/***/ 56786:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/react/jsx-runtime");

/***/ }),

/***/ 5868:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/app-render");

/***/ }),

/***/ 41844:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/get-segment-param");

/***/ }),

/***/ 96624:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/future/helpers/interception-routes");

/***/ }),

/***/ 75281:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/future/route-modules/route-module");

/***/ }),

/***/ 57085:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/app-router-context");

/***/ }),

/***/ 20199:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/hash");

/***/ }),

/***/ 39569:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/hooks-client-context");

/***/ }),

/***/ 17160:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router-context");

/***/ }),

/***/ 30893:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix");

/***/ }),

/***/ 12336:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/format-url");

/***/ }),

/***/ 17887:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/handle-smooth-scroll");

/***/ }),

/***/ 98735:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-bot");

/***/ }),

/***/ 60120:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-local-url");

/***/ }),

/***/ 68231:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-path");

/***/ }),

/***/ 54614:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/path-has-prefix");

/***/ }),

/***/ 53750:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash");

/***/ }),

/***/ 70982:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/resolve-href");

/***/ }),

/***/ 79618:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/server-inserted-html");

/***/ }),

/***/ 78423:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils");

/***/ }),

/***/ 39491:
/***/ ((module) => {

"use strict";
module.exports = require("assert");

/***/ }),

/***/ 14300:
/***/ ((module) => {

"use strict";
module.exports = require("buffer");

/***/ }),

/***/ 22057:
/***/ ((module) => {

"use strict";
module.exports = require("constants");

/***/ }),

/***/ 6113:
/***/ ((module) => {

"use strict";
module.exports = require("crypto");

/***/ }),

/***/ 82361:
/***/ ((module) => {

"use strict";
module.exports = require("events");

/***/ }),

/***/ 57147:
/***/ ((module) => {

"use strict";
module.exports = require("fs");

/***/ }),

/***/ 22037:
/***/ ((module) => {

"use strict";
module.exports = require("os");

/***/ }),

/***/ 71017:
/***/ ((module) => {

"use strict";
module.exports = require("path");

/***/ }),

/***/ 12781:
/***/ ((module) => {

"use strict";
module.exports = require("stream");

/***/ }),

/***/ 71576:
/***/ ((module) => {

"use strict";
module.exports = require("string_decoder");

/***/ }),

/***/ 73837:
/***/ ((module) => {

"use strict";
module.exports = require("util");

/***/ }),

/***/ 63625:
/***/ ((module) => {

const doc = [({"bg":"purple-light", "content":"<h2>2.1. Build your UI Patterns</h2> <p>When you are done with your <b>design tokens</b> you can continue with building your patterns. Start with your smallest components first, followed by the larger ones. <br/> </p>", "badge_headline":"Choose your wingsuit.yml sections:", "data":[({"title":"Base", "key":"base", "contents":[({"key":"canvas", "title":"Canvas", "intro_pattern":({"id":"tabs"}), "content":"<div class=\"relative\">\n<div class=\"code-block__feature absolute component-feature--fields\" style=\"right:2%; top: 70%; height: 21%; width: 64.5%\"></div>\n<div class=\"code-block__feature absolute component-feature--settings\" style=\"right:2%; top: 58%; height: 12%; width: 64.5%\"></div>\n<div class=\"component-feature--variants code-block__feature absolute\" style=\"top: 56.6%; height: 6.5%; width: 33.5%\"></div>\n<img src=\"/images/component_avatar.png\" width=\"1209\" height=\"1902\">\n</div>\n"})], "codes":[({"key":"yaml", "title":"avatar.wingsuit.yml", "format":"yaml", "code":"use: \"@molecules/avatar/avatar.twig\"\nlabel: Avatar\ndescription: \"An avatar represents an ....\"\n<div class='component-feature--fields code-block__feature' :class=\"{'code-block__feature--active':$store.component_feature == 'fields'}\">fields:\n  image:\n    type: pattern\n    label: Image\n    preview:\n      id: placeholder\n      variant: image\n      settings:\n        style: 1x1_xs_sc\n  text:\n    type: text\n    label: Text\n    preview:\n      faker: lorem.paragraph</div><div class='component-feature--settings code-block__feature' :class=\"{'code-block__feature--active':$store.component_feature =='settings'}\">settings:\n  text_align:\n    type: select\n    label: Text align\n    options:\n      left: Left\n      center: Center</div><div class='component-feature--variants code-block__feature' :class=\"{'code-block__feature--active':$store.component_feature =='variants'}\">variants:\n  default:\n    label: Default\n  horizontal:\n    label: Horizontal</div>\n"}), ({"key":"twig", "title":"avatar.twig", "format":"twig", "code":"{% set classes = [\n  text_align == 'center' ? 'text-center',\n  'bg-gray-100 rounded-xl overflow-hidden p-8',\n  variant == 'horizontal' ? 'flex flex-row'\n] %}\n\n{% set image_classes = [\n  'relative overflow-hidden flex-none w-48',<div class='code-block__feature' :class=\"{'code-block__feature--active':$store.component_feature =='variants'}\">variant == 'default'? 'h-48 rounded-full mx-auto',\nvariant == 'horizontal' ? 'h-auto -m-8 mr-8'</div>] %}\n\n&lt;figure {{ attributes.addClass(classes) }} &gt;\n  &lt;div {{ image_attributes.addClass(image_classes) }}&gt;<div class='code-block__feature' :class=\"{'code-block__feature--active':$store.component_feature =='fields'}\">     {{ image }}   </div>  &lt;/div&gt;\n  &lt;div class=\"pt-6 space-y-4 flex-1\"&gt;\n    &lt;blockquote&gt;\n      &lt;p class=\"text-lg font-semibold\"&gt;<div class='code-block__feature' :class=\"{'code-block__feature--active':$store.component_feature =='fields'}\">        {{ text }}        </div>      &lt;/p&gt;\n    &lt;/blockquote&gt;\n    &lt;figcaption&gt;\n      &lt;p class=\"text-teal-600\"&gt;<div class='code-block__feature' :class=\"{'code-block__feature--active':$store.component_feature =='fields'}\">        {{ full_name }}       </div>     &lt;/p&gt;\n    &lt;/figcaption&gt;\n  &lt;/div&gt;\n&lt;/figure&gt;\n"})]})]})];
module.exports = doc.length <= 1 ? doc[0] : doc;

/***/ }),

/***/ 79645:
/***/ ((module) => {

const doc = [({"bg":"blue-light", "content":"<h2>2.2. Document your components</h2>", "badge_headline":"Choose your documentation way:", "data":[({"title":"Automatic", "key":"automatic", "intro":"<p>Wingsuit provides Storybook DocBlocks as the building blocks to create full featured documentation right away from the wingsuit.yml.</p>", "contents":[({"key":"automatic", "title":"Automatic", "content":"<div class=\"p-14\">\n  <img src=\"/images/docs_export.png\" class=\"w-full\" width=\"648\" height=\"1719\">\n</div>\n"})], "codes":[({"key":"yaml", "title":"avatar.wingsuit.yml", "format":"yaml", "code":"avatar:\n  use: \"@molecules/avatar/avatar.twig\"\n  label: Avatar\n  description: \"An avatar represent a user, and displays the profile picture.\"\n  fields:\n    image:\n      type: pattern\n      label: Image\n      description: The profile picture.\n      preview:\n        id: placeholder\n        variant: image\n        settings:\n          style: 1x1_xs_sc\n    text:\n      type: text\n      label: Text\n      description: A short description of the avatar.\n      preview:\n        faker: lorem.paragraph\n    full_name:\n      type: text\n      label: Full name\n      description: The full name of the profile.\n      preview:\n        faker: name.findName\n    button:\n      type: pattern\n      label: Button\n      description: Button with link to profile detail page.\n      preview:\n        id: button\n        variant: default\n        settings:\n          expanded: true\n\n  settings:\n    text_align:\n      type: select\n      label: Text align\n      description: Align the text of the avatar.\n      options:\n        left: Left\n        center: Center\n\n  variants:\n    default:\n      label: Default\n      description: Show\n    horizontal:\n      label: Horizontal\n      fields:\n        image:\n          id: placeholder\n          variant: image\n          settings:\n            style: 1x2_xs_sc'\n"})]}), ({"title":"MDX", "key":"mdx", "intro":"<p>You want to tell more about your component. With Wingsuit you can render your Twig component in your Storyboook MDX documentantion file.</p>", "contents":[({"key":"mdx", "title":"MDX", "content":"<div class=\"px-14 pt-2 relative\">\n  <img src=\"/images/docs_mdx.png\" width=\"521\" height=\"4970\">\n</div>\n"})], "codes":[({"key":"mdx", "title":"grid.mdx", "format":"jsx", "code":"import { Meta, Title, Subtitle } from '@storybook/addon-docs/blocks';\nimport { PatternLoad, PatternPreview } from '@wingsuit-designsystem/pattern-react/server';\n\n&lt;PatternLoad patternId=\"grid\"&gt;\n  {(pattern) =&gt; (\n  &lt;&gt;\n    &lt;Title /&gt;\n    &lt;Subtitle /&gt;\n\n## Simple usage\n\n```twig dark\n  {% set cells = [\n    'Cell 1',\n    'Cell 2'\n  ] %}\n  {% include \"@organisms/grid/grid.twig\" with {\n    attributes: create_attribute(),\n    cells: cells,\n    columns: 2,\n    columns_width: 'equal',\n    gutter: 'default'\n  } only %}\n`} /&gt;\n```\n\n## Cells\nThe pattern loops through a list of cells and print each cell.&lt;br/&gt;\nTo adjust the way the blocks are printed use twig blocks.\n\n## Blocks\n* cell_outer: &lt;br/&gt;Use block cell_outer to adjust the markup of each cell. Variables: `cell`, `cell_counter`.\n* cell_inner:&lt;br/&gt;Use block cell_inner to print the cell variable. Variables: `cell`, `cell_counter`\n### Example: cell_inner\n```twig dark\n  {% set cells = [\n        {content: '&lt;div class=\"w-full h-20 bg-primary\"&gt;1&lt;/div&gt;'},\n        {content: '&lt;div class=\"w-full h-20 bg-primary\"&gt;2&lt;/div&gt;'},\n        {content: '&lt;div class=\"w-full h-20 bg-primary\"&gt;3&lt;/div&gt;'},\n        {content: '&lt;div class=\"w-full h-20 bg-primary\"&gt;4&lt;/div&gt;'},\n        {content: '&lt;div class=\"w-full h-20 bg-primary\"&gt;5&lt;/div&gt;'},\n        {content: '&lt;div class=\"w-full h-20 bg-primary\"&gt;6&lt;/div&gt;'},\n      ] %}\n      {% embed \"@organisms/grid/grid.twig\" with {\n        attributes: create_attribute(),\n        cells: cells,\n        columns: 2,\n        columns_width: 'equal',\n        gutter: 'default'\n      } only %}\n        {% block cell_inner %}\n          {{ cell.content }}\n        {% endblock %}\n      {% endembed %}\n```\n\n### Example: cell_outer\n```twig dark\n  {% set cells = [\n        {content: '&lt;div class=\"w-full h-20 bg-primary\"&gt;1&lt;/div&gt;'},\n        {content: '&lt;div class=\"w-full h-20 bg-primary\"&gt;2&lt;/div&gt;'},\n        {content: '&lt;div class=\"w-full h-20 bg-primary\"&gt;3&lt;/div&gt;'},\n        {content: '&lt;div class=\"w-full h-20 bg-primary\"&gt;4&lt;/div&gt;'},\n        {content: '&lt;div class=\"w-full h-20 bg-primary\"&gt;5&lt;/div&gt;'},\n        {content: '&lt;div class=\"w-full h-20 bg-primary\"&gt;6&lt;/div&gt;'},\n      ] %}\n      {% embed \"@organisms/grid/grid.twig\" with {\n        attributes: create_attribute(),\n        cells: cells,\n        columns: 2,\n        columns_width: 'equal',\n        gutter: 'default'\n      } only %}\n      {% block cell_outer %}\n        &lt;div&gt;\n        {{ cell.content }} + { cell_counter }\n        &lt;/div&gt;\n      {% endblock %}\n      {% endembed %}\n```\n\n## Column widths\nThe pattern comes with most common column widths configurations like 50x50 or 33x66.\nIf you need additional configuration you can extends the columns configuration inside the `grid.wingsuit.yml`.\n\n```yaml dark\ncolumns:\n2: &lt;&lt; Columns count\n  equal: 'grid-cols-1 md:grid-cols-2' &lt;&lt; Column width 50x50\n  '66x33': 'grid-cols-1 md:grid-cols-66/33' &lt;&lt; Column width 66x33\n  '33x66': 'grid-cols-1 md:grid-cols-33/66' &lt;&lt; Column width 33x66\n```\n\n## Gutter\nTo configure the spacing between the columns use the gutter configuration in the grid.wingsuit.yml.\n```yaml dark\n  gutter:\n    ...\n    default: 'gap-4 md:gap-5 lg:gap-7'\n    ...\n```\n\n## Examples\n### 4 equal columns.\n```twig dark\n  {% include \"@organisms/grid/grid.twig\" with {\n    cells: cells,\n    columns: 4,\n    columns_width: 'equal',\n    gutter: 'default'\n  } only %}\n```\n\n&lt;PatternPreview variant={pattern.getDefaultVariant()} columns=\"4\" config=\"equal\"/&gt;\n\n### 3 Columns with 25% 50% 25%.\n\n```twig dark\n {% include \"@organisms/grid/grid.twig\" with {\n   cells: cells,\n   columns: 3,\n   columns_width: '25x50x25',\n   gutter: 'default'\n } only %}\n```\n\n&lt;PatternPreview variant={pattern.getDefaultVariant()} columns=\"3\" columns_width=\"25x50x25\"/&gt;\n\n  &lt;/&gt;\n  )}\n&lt;/PatternLoad&gt;\n"})]})]})];
module.exports = doc.length <= 1 ? doc[0] : doc;

/***/ }),

/***/ 96910:
/***/ ((module) => {

const doc = [({"bg":"green-light", "content":"<h2>3. Make Love.</h2><p>After finalizing your component, you can easily use it in other apps like Drupal.</p>", "badge_headline":"Choose your flavor:", "data":[({"title":"Drupal opinionated", "key":"drupal", "contents":[({"key":"ui_patterns", "title":"UI Patterns", "show_code_block":false, "intro":"<p>With UI Patterns no code is needed. The UI Patterns ecosystem offers a lot of modules that help you to manage the mapping without presenter templates. But there are still corners in Drupal where you need a presenter templates.</p>\n<p>Don't forget to run <code class=\\\"language-bash\\\">yarn ws dev drupal</code></p>\n<p><div class=\"relative cursor-pointer\"><div class=\"play-icon\"></div><b>The video shows how to map an Drupal block to a pattern</b><img src='images/mariage.png'></div></p>\n", "content":""}), ({"key":"presenter", "title":"Presenter template", "intro_pattern":({"id":"code_block", "variant":"dark", "data":({"codes":[({"key":"presenter", "format":"twig", "code":"{% set button %}\n{% include \"@atoms/button/button.twig\" with {\n  \"text\": \"More\"|t,\n  \"link\": content.url\n} %}\n{% endset %}\n\n{% include \"@molecules/avatar/avatar.twig\" with {\n  \"full_name\": content.field_full_name,\n  \"text\": content.body,\n  \"button\": button\n} %}\n"})]})}), "show_code_block":false})]}), ({"title":"Other CMS", "key":"other_cms", "intro":"<div class=\"relative\">\n<p>If you don't use Drupal install the cms app with <code class=\"language-bash\">yarn ws generate-app</code> and run <code class=\"language-bash\">yarn ws dev cms</code> to compile your CSS and templates.</p><p> You can also install the drupal app with <code class=\"language-bash\">yarn ws generate-app</code> and run <code class=\"language-bash\">yarn ws dev drupal</code> </p>\n</div>\n", "contents":[({"key":"vanilla", "title":"Presenter", "show_code_block":false, "intro_pattern":({"id":"code_block", "variant":"dark", "data":({"codes":[({"key":"presenter", "format":"twig", "code":"{% set button %}\n{% include \"@atoms/button/button.twig\" with {\n  \"text\": \"More\"|t,\n  \"link\": content.url\n} %}\n{% endset %}\n\n{% include \"@molecules/avatar/avatar.twig\" with {\n  \"full_name\": content.field_full_name,\n  \"text\": content.body,\n  \"button\": button\n} %}\n"})]})})})]})]})];
module.exports = doc.length <= 1 ? doc[0] : doc;

/***/ }),

/***/ 97:
/***/ ((module) => {

const doc = [({"bg":"green-light", "content":"<h2>1. Define your Design Tokens</h2><p>Everything starts with well defined Design Tokens. <br> Collect all your spaces colors typography from your design before you start coding components. Good Design Tokens are a big timesaver!</p> ", "badge_headline":"Choose your technology:", "data":[({"title":"TailwindCSS", "intro":"<p>TailwindCSS is the <b>API</b> for your design system. All tailwind.config.js settings are automaticly documented in Storybook. </p>", "key":"tailwind", "contents":[({"key":"colors", "title":"Colors", "content":"<div class=\"p-6\">\n<img src=\"/images/colors_tailwind.svg\" width=\"235\" height=\"208\" class=\"w-full\">\n</div>\n"})], "codes":[({"key":"yaml", "title":"tailwind.config.js", "format":"javascript", "code":"module.exports = {\n ...\n theme: {\n   colors: {\n     red: colors.rose,\n     teal: {\n       200: '#e6fffa'\n       300: '#b2f5ea'\n       500: '#00ffd1'\n     },\n     purple: {\n       200: '#faf5ff'\n       500: '#8000ff'\n     },\n   },\n ...\n };\n"}), ({"key":"mdx", "title":"colors.mdx", "format":"jsx", "code":"import { Meta, ColorPalette, ColorItem, Subtitle } from '@storybook/addon-docs/blocks';\nconst tailwindConfig = require('../../config/silo/tailwind.json');\nconst colors = tailwindConfig.tailwind.theme.colors;\n\n&lt;Meta title=\"Tokens/Colors\" /&gt;\n\n# Colors Matter\n\n## A palette of great-looking, well-balanced colors.\n&lt;ColorPalette&gt;\n{\n  Object.keys(colors).map((key)=>{\n      const color = typeof colors[ key ] === 'string' ? [ colors[ key ] ]: colors[ key ];\n      const title = `.${ key }`;\n      return (\n        &lt;ColorItem key={ key } title={ title } colors={ color } /&gt;\n      )\n  })\n}\n&lt;/ColorPalette&gt;\n"})]}), ({"title":"SCSS", "key":"scss", "intro":"<p>Not every SCSS variable is a Design Token. Collect your Tokens in SCSS collections and export them. Wingsuit will document automaticly exported SCSS variables.</p>", "contents":[({"key":"colors", "title":"Colors", "content":"<div class=\"p-6\">\n<img src=\"/images/colors_scss.svg\">\n</div>\n"})], "codes":[({"key":"variables", "title":"variabels.scss", "format":"scss", "code":"$primary:       $blue !default;\n$secondary:     $gray-600 !default;\n$success:       $green !default;\n$info:          $cyan !default;\n$warning:       $yellow !default;\n$danger:        $red !default;\n$light:         $gray-100 !default;\n$dark:          $gray-800 !default;\n\n$theme-colors: () !default;\n$theme-colors: map-merge(\n(\n\"primary\":    $primary,\n\"secondary\":  $secondary,\n\"success\":    $success,\n\"info\":       $info,\n\"warning\":    $warning,\n\"danger\":     $danger,\n\"light\":      $light,\n\"dark\":       $dark\n),\n$theme-colors\n);\n"}), ({"key":"mdx", "title":"colors.mdx", "format":"jsx", "code":"import { Meta, ColorPalette, ColorItem, Subtitle } from '@storybook/addon-docs/blocks';\nconst colors = require('tokens/exports/_colors.scss');\n\n&lt;Meta title=\\\"Tokens/Colors\\\" /&gt;\n\n# Colors Matter\n\n## A palette of great-looking, well-balanced colors.\n&lt;ColorPalette&gt;\n{\n  Object.keys(colors).map((key)=>{\n                                   const color = typeof colors[key] === 'string' ? [colors[key]] : colors[key];\n                                   const title = `.${key}`;\n                                   return (\n  &lt;ColorItem key={key} title={title} colors={color} /&gt;\n                                   )\n})\n}\n&lt;/ColorPalette&gt;\n"})]})]})];
module.exports = doc.length <= 1 ? doc[0] : doc;

/***/ }),

/***/ 51589:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GlobalError: () => (/* reexport default from dynamic */ next_dist_client_components_error_boundary__WEBPACK_IMPORTED_MODULE_2___default.a),
/* harmony export */   __next_app__: () => (/* binding */ __next_app__),
/* harmony export */   originalPathname: () => (/* binding */ originalPathname),
/* harmony export */   pages: () => (/* binding */ pages),
/* harmony export */   routeModule: () => (/* binding */ routeModule),
/* harmony export */   tree: () => (/* binding */ tree)
/* harmony export */ });
/* harmony import */ var next_dist_server_future_route_modules_app_page_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(99461);
/* harmony import */ var next_dist_server_future_route_modules_app_page_module__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_future_route_modules_app_page_module__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(10119);
/* harmony import */ var next_dist_client_components_error_boundary__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(46783);
/* harmony import */ var next_dist_client_components_error_boundary__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_client_components_error_boundary__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_dist_server_app_render_entry_base__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(47183);
/* harmony import */ var next_dist_server_app_render_entry_base__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_app_render_entry_base__WEBPACK_IMPORTED_MODULE_3__);
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(const __WEBPACK_IMPORT_KEY__ in next_dist_server_app_render_entry_base__WEBPACK_IMPORTED_MODULE_3__) if(["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = () => next_dist_server_app_render_entry_base__WEBPACK_IMPORTED_MODULE_3__[__WEBPACK_IMPORT_KEY__]
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);
// @ts-ignore this need to be imported from next/dist to be external


const AppPageRouteModule = next_dist_server_future_route_modules_app_page_module__WEBPACK_IMPORTED_MODULE_0__.AppPageRouteModule;
// We inject the tree and pages here so that we can use them in the route
// module.
const tree = {
        children: [
        '',
        {
        children: ['__PAGE__', {}, {
          page: [() => Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 73231)), "/home/michaelzemui/projects/wingsuit/wingsuit/nextjs/wingsuit-docs/src/app/page.tsx"],
          
        }]
      },
        {
        'layout': [() => Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 72234)), "/home/michaelzemui/projects/wingsuit/wingsuit/nextjs/wingsuit-docs/src/app/layout.tsx"],
'not-found': [() => Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 53850, 23)), "next/dist/client/components/not-found-error"],
        
      }
      ]
      }.children;
const pages = ["/home/michaelzemui/projects/wingsuit/wingsuit/nextjs/wingsuit-docs/src/app/page.tsx"];

// @ts-expect-error - replaced by webpack/turbopack loader

const __next_app_require__ = __webpack_require__
const __next_app_load_chunk__ = () => Promise.resolve()
const originalPathname = "/page";
const __next_app__ = {
    require: __next_app_require__,
    loadChunk: __next_app_load_chunk__
};

// Create and export the route module that will be consumed.
const routeModule = new AppPageRouteModule({
    definition: {
        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__/* .RouteKind */ .x.APP_PAGE,
        page: "/page",
        pathname: "/",
        // The following aren't used in production.
        bundlePath: "",
        filename: "",
        appPaths: []
    },
    userland: {
        loaderTree: tree
    }
});

//# sourceMappingURL=app-page.js.map

/***/ }),

/***/ 84134:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 50379));
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 25920));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 11540, 17));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 76032, 17));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 64064, 17));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 33287, 17));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 23118, 17));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 79912, 17));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 43235, 17));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 1019, 17))

/***/ }),

/***/ 64223:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 88379, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 71791, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 82226, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 41460, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 94542, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 20449, 23))

/***/ }),

/***/ 73231:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Page),
  metadata: () => (/* binding */ metadata)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(56786);
// EXTERNAL MODULE: ../../packages/pattern/dist/index.js
var dist = __webpack_require__(84065);
// EXTERNAL MODULE: ./source/default/patterns/00-protons/index.js + 12 modules
var _00_protons = __webpack_require__(3598);
// EXTERNAL MODULE: ./source/default/patterns/03-organisms/download/download.twig
var download = __webpack_require__(84838);
var download_default = /*#__PURE__*/__webpack_require__.n(download);
// EXTERNAL MODULE: ./source/default/patterns/03-organisms/container/index.js
var container = __webpack_require__(31450);
// EXTERNAL MODULE: ./source/default/patterns/03-organisms/container/container.wingsuit.yml
var container_wingsuit = __webpack_require__(23598);
;// CONCATENATED MODULE: ./source/default/patterns/03-organisms/download/download.wingsuit.yml
 
    (0,dist.getStorage)().addDefinitions({"download":{"extends":["container.settings.bg","container.settings.width"],"use":"@organisms/download/download.twig","label":"Download","description":"Wingsuit download section","fields":{"intro":{"type":"text","label":"Intro","preview":"<h2>Try it now!</h2> <p>Get started using the automated command line tool. This command creates a Wingsuit demo project. The demo page uses the atomic design principle to structure the patterns..</p> "},"intro_drupal":{"type":"text","label":"Intro","preview":"<h2>Drupal Kickstarter!</h2> <p>is the quickest way to get up and running with Drupal Wingsuit. All patterns of the wingsuit demo project are mapped to Drupal entities.</p> "}},"namespace":"organisms"}}); 
   const patterndownload = (0,dist.getStorage)().loadPattern('download'); patterndownload.setTemplate((download_default()));   /* harmony default export */ const download_wingsuit = ((0,dist.getStorage)().loadPattern('download'));
;// CONCATENATED MODULE: ./source/default/patterns/03-organisms/download/index.js
/**
 * download
 */ 


// EXTERNAL MODULE: ./source/default/patterns/02-molecules/hero/hero.twig
var hero = __webpack_require__(87297);
var hero_default = /*#__PURE__*/__webpack_require__.n(hero);
// EXTERNAL MODULE: ./source/default/patterns/01-atoms/button/index.js
var _01_atoms_button = __webpack_require__(94293);
// EXTERNAL MODULE: ./source/default/patterns/01-atoms/button/button.wingsuit.yml
var button_wingsuit = __webpack_require__(78181);
// EXTERNAL MODULE: ./source/default/patterns/01-atoms/video/video.twig
var video = __webpack_require__(33553);
var video_default = /*#__PURE__*/__webpack_require__.n(video);
;// CONCATENATED MODULE: ./source/default/patterns/01-atoms/video/videos/front.mp4
const front_namespaceObject = __webpack_require__.p + "videos/front.mp4";
;// CONCATENATED MODULE: ./source/default/patterns/01-atoms/video/index.js
/**
 * Video
 */ // Module template

 //import './videos/layout-builder.mp4';
 //import './videos/kickstarter_make_love.mp4';

;// CONCATENATED MODULE: ./source/default/patterns/01-atoms/video/video.wingsuit.yml
 
    (0,dist.getStorage)().addDefinitions({"video":{"use":"@atoms/video/video.twig","label":"Video","description":"Component for displaying self hosted videos.","fields":{"video":{"type":"text","label":"The video field.","description":"The video provided by Drupal."},"src":{"type":"text","label":"The video src.","preview":"sample.mp4"}},"namespace":"atoms"}}); 
   const patternvideo = (0,dist.getStorage)().loadPattern('video'); patternvideo.setTemplate((video_default())); /* harmony default export */ const video_wingsuit = ((0,dist.getStorage)().loadPattern('video'));
;// CONCATENATED MODULE: ./source/default/patterns/02-molecules/hero/hero.wingsuit.yml
 
    (0,dist.getStorage)().addDefinitions({"hero":{"use":"@molecules/hero/hero.twig","label":"Hero","description":"Hero section component, for all your presentation needs.","fields":{"text":{"type":"text","label":"Headline","preview":"<h1 class='font-medium'>Build CMS independent Twig Components in Storybook</h1><p class='lead font-medium'> A modern way of building, maintaining and documenting your visual driven twig components in storybook with an automated and opinionated integration workflow for your CMS. <br> </p>"},"buttons":{"type":"pattern","label":"Button","preview":[{"id":"button","variant":"default","fields":{"text":"Online Demo"},"settings":{"size":"large","target":"_blank","round":true,"url":"https://master--5fd0183aaf074f00213f79cc.chromatic.com/"}},{"id":"button","variant":"default","fields":{"text":"Drupal Kickstarter"},"settings":{"size":"large","round":true,"url":"/drupal/ui_patterns"}}]},"image":{"type":"pattern","label":"Image","preview":{"id":"video","settings":{"src":"front.mp4"}}}},"namespace":"molecules"}}); 
   const patternhero = (0,dist.getStorage)().loadPattern('hero'); patternhero.setTemplate((hero_default()));     /* harmony default export */ const hero_wingsuit = ((0,dist.getStorage)().loadPattern('hero'));
;// CONCATENATED MODULE: ./source/default/patterns/02-molecules/hero/index.js
/**
 * hero
 */ 


// EXTERNAL MODULE: ./source/default/patterns/02-molecules/tabs/tabs.twig
var tabs = __webpack_require__(81233);
var tabs_default = /*#__PURE__*/__webpack_require__.n(tabs);
;// CONCATENATED MODULE: ./source/default/patterns/02-molecules/tabs/tabs.wingsuit.yml
 
    (0,dist.getStorage)().addDefinitions({"tabs":{"use":"@molecules/tabs/tabs.twig","label":"Tabs","description":"Feature tab component","fields":{"tabs":{"type":"object","label":"Tabs","preview":[{"title":"Fields","key":"fields","content":"<p>A field holds your data from your CMS.</p>"},{"title":"Settings","key":"settings","content":"<p>Define settings to make your pattern configurable. Typical settings are colors, alignment or sizes.</p>"},{"title":"Variants","key":"variants","content":"<p>A variant is a <b>configuration</b> of the pattern.</p>"}]}},"namespace":"molecules"}}); 
   const patterntabs = (0,dist.getStorage)().loadPattern('tabs'); patterntabs.setTemplate((tabs_default())); /* harmony default export */ const tabs_wingsuit = ((0,dist.getStorage)().loadPattern('tabs'));
;// CONCATENATED MODULE: ./source/default/patterns/02-molecules/tabs/index.js
/**
 * tabs
 */ 


// EXTERNAL MODULE: ./source/default/patterns/03-organisms/section-code/section-code.twig
var section_code = __webpack_require__(57737);
var section_code_default = /*#__PURE__*/__webpack_require__.n(section_code);
;// CONCATENATED MODULE: ./source/default/patterns/03-organisms/section-code/section-code.wingsuit.yml
 
    (0,dist.getStorage)().addDefinitions({"section_code":{"extends":["container.settings"],"use":"@organisms/section-code/section-code.twig","label":"Section: Code","description":"Amazing section-code component.","fields":{"content_bottom":{"type":"text","label":"Content bottom"},"content":{"type":"text","label":"Content","preview":"<h2>Description</h2><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum numquam blanditiis harum </p>"},"data":{"type":"object","label":"Data","description":"A code example e.g. in html.","preview":[{"title":"BASICS","key":"basics","contents":[{"key":"content1","title":"Content 1","content":"images/img1.png"},{"key":"content2","title":"Content 1","content":"images/img2.png"}],"codes":[{"key":"yml","title":"Code 1","code_format":"yaml","code":"<code>code_tabs:\n extends:\n - container.settings.bg\n use: \"@organisms/section-code/section-code.twig\"\n label: section-code\n description: Amazing section-code component.\n </code><code> fields:\n content:\n type: text\n label: Content</code>"},{"key":"yml2","title":"Code 2","code_format":"yaml","code":"<code>code_tabs:\n extends:\n - container.settings.bg\n use: \"@organisms/section-code/section-code.twig\"\n label: section-code\n description: Amazing section-code component.\n </code><code> fields:\n content:\n type: text\n label: Content</code>"}]},{"title":"Advanced","key":"advanced","contents":[{"key":"content1","title":"Content 1.1","content":"images/img1.png"},{"key":"content2","title":"Content 1.2","content":"images/img2.png"}],"codes":[{"key":"yml","title":"Codes 1","code_format":"yaml","code":"<code>code_tabs:\n extends:\n - container.settings.bg\n use: \"@organisms/section-code/section-code.twig\"\n label: section-code\n description: Amazing section-code component.\n </code><code> fields:\n content:\n type: text\n label: Content</code>"},{"key":"yml2","title":"Codes 2.2","code_format":"yaml","code":"<code>code_tabs:\n extends:\n - container.settings.bg\n use: \"@organisms/section-code/section-code.twig\"\n label: section-code\n description: Amazing section-code component.\n </code><code> fields:\n content:\n type: text\n label: Content</code>"}]}]}},"namespace":"organisms"}}); 
   const patternsectionCode = (0,dist.getStorage)().loadPattern('section_code'); patternsectionCode.setTemplate((section_code_default()));   /* harmony default export */ const section_code_wingsuit = ((0,dist.getStorage)().loadPattern('section_code'));
// EXTERNAL MODULE: ./source/default/patterns/02-molecules/code-block/code-block.twig
var code_block = __webpack_require__(2952);
var code_block_default = /*#__PURE__*/__webpack_require__.n(code_block);
;// CONCATENATED MODULE: ./source/default/patterns/02-molecules/code-block/code-block.wingsuit.yml
 
    (0,dist.getStorage)().addDefinitions({"code_block":{"use":"@molecules/code-block/code-block.twig","label":"Code-block","description":"Amazing code-block component.","fields":{"codes":{"type":"object","label":"Data","description":"The format of the code.","preview":[{"key":"code1","format":"yaml","title":"Code 1","code":"<code>use: @molecules/avatar/avatar.twig \n \tlabel: Avatar\n \tdescription: An avatar represents an ....\n</code><code> fields:\n <code class='highlight-feature highlight-feature--active'>\timage:\n \t\ttype: pattern\n label: Image\n preview:\n id: placeholder\n variant: image\n settings:\n style: 1x1_xs_sc\n</code></code>"},{"key":"code3","title":"Code 2","format":"yaml","image_url":"images/colors_export.png"}]}},"variants":{"dark":{"label":"Dark","configuration":{"frame":"bg-code-dark","content":"bg-dark-500","active_tab":"bg-dark-500"}},"light":{"label":"Light","configuration":{"frame":"bg-code-light","content":"bg-white","active_tab":"bg-gray-300"}}},"settings":{"hide_toolbar":{"type":"boolean","label":"Hide Toolbar","default_value":false}},"namespace":"molecules"}}); 
   const patterncodeBlock = (0,dist.getStorage)().loadPattern('code_block'); patterncodeBlock.setTemplate((code_block_default())); /* harmony default export */ const code_block_wingsuit = ((0,dist.getStorage)().loadPattern('code_block'));
// EXTERNAL MODULE: ./source/default/patterns/02-molecules/code-block/code-block.css
var code_block_code_block = __webpack_require__(91956);
// EXTERNAL MODULE: ../../node_modules/prismjs/themes/prism-okaidia.css
var prism_okaidia = __webpack_require__(77050);
// EXTERNAL MODULE: ../../node_modules/prismjs/plugins/toolbar/prism-toolbar.css
var prism_toolbar = __webpack_require__(82155);
;// CONCATENATED MODULE: ./source/default/patterns/02-molecules/code-block/index.js
/**
 * Code-block
 */ // Module template






;// CONCATENATED MODULE: ./source/default/patterns/03-organisms/section-code/index.js
/**
 * Code-block
 */ // Module template



const section_code_name = "section-code";

// EXTERNAL MODULE: ./source/default/patterns/03-organisms/section/section.twig
var section = __webpack_require__(40371);
var section_default = /*#__PURE__*/__webpack_require__.n(section);
// EXTERNAL MODULE: ./source/default/patterns/03-organisms/grid/index.js
var grid = __webpack_require__(46588);
// EXTERNAL MODULE: ./source/default/patterns/03-organisms/grid/grid.wingsuit.yml
var grid_wingsuit = __webpack_require__(82681);
// EXTERNAL MODULE: ./source/default/patterns/01-atoms/rich-text/index.js
var rich_text = __webpack_require__(4922);
// EXTERNAL MODULE: ./source/default/patterns/01-atoms/rich-text/rich-text.wingsuit.yml
var rich_text_wingsuit = __webpack_require__(28064);
;// CONCATENATED MODULE: ./source/default/patterns/03-organisms/section/section.wingsuit.yml
 
    (0,dist.getStorage)().addDefinitions({"section":{"use":"@organisms/section/section.twig","label":"Columns section","icon_path":"ws-assets://images/section-icon.svg","extends":["grid.settings","container.settings"],"description":"A section with a header and maximum five columns. A combination of container and grid. You can use this pattern as a section in Drupal's Layout Builder.","fields":{"header":{"type":"pattern","label":"Section Header","description":"Optional header","preview":{"id":"rich_text","fields":{"text":"<h2>Headline</h2>"}}},"column_1":{"type":"text","label":"First Column","preview":{"faker":"lorem.paragraph"}},"column_2":{"type":"text","label":"Second Column","preview":{"faker":"lorem.paragraph"}},"column_3":{"type":"text","label":"Third Column","preview":{"faker":"lorem.paragraph"}},"column_4":{"type":"text","label":"Fourth Column","preview":{"faker":"lorem.paragraph"}},"column_5":{"type":"text","label":"Five Column","preview":{"faker":"lorem.paragraph"}}},"settings":{"display_header_region":{"type":"boolean","label":"Display header region"},"columns_width_1":{"type":"radios","label":"Column widths","default_value":"equal","required":true,"options":{"equal":"100%"}},"columns_width_2":{"type":"radios","label":"Column widths","default_value":"equal","required":true,"options":{"equal":"50%/50%","66x33":"66%/33%","33x66":"33%/66%","25x75":"25%/75%"}},"columns_width_3":{"type":"radios","label":"Column widths","default_value":"equal","required":true,"options":{"equal":"33%/33%/33%","25x50x25":"25%/50%/25%"}},"columns_width_4":{"type":"radios","label":"Column widths","default_value":"equal","required":true,"options":{"equal":"25%/25%/25%/25%"}},"columns_width_5":{"type":"radios","label":"Column widths","default_value":"equal","required":true,"options":{"equal":"20%/20%/20%/20%"}},"equal_height":{"type":"boolean","group":"advanced","label":"Equal height"}},"variants":{"1_column":{"label":"One Column","fields":{"column_2":"","column_3":"","column_4":"","column_5":""},"settings":{"columns":1,"gutter":"default","columns_width_1":"equal","columns_width_2":"","columns_width_3":"","columns_width_4":"","columns_width_5":""}},"2_column":{"label":"Two Columns","fields":{"column_3":"","column_4":"","column_5":""},"settings":{"columns":2,"columns_width_1":"","columns_width_3":"","columns_width_4":"","columns_width_5":""}},"3_column":{"label":"Three Columns","fields":{"column_4":"","column_5":""},"settings":{"columns":3,"columns_width_1":"","columns_width_2":"","columns_width_4":"","columns_width_5":""}},"4_column":{"label":"Four Columns","fields":{"column_5":""},"settings":{"columns":4,"columns_width_1":"","columns_width_2":"","columns_width_3":"","columns_width_4":"equal","columns_width_5":""}},"5_column":{"label":"Five Columns","settings":{"columns":5,"columns_width_1":"","columns_width_2":"","columns_width_3":"","columns_width_4":"","columns_width_5":"equal"}}},"namespace":"organisms"}}); 
   const patternsection = (0,dist.getStorage)().loadPattern('section'); patternsection.setTemplate((section_default()));       /* harmony default export */ const section_wingsuit = ((0,dist.getStorage)().loadPattern('section'));
;// CONCATENATED MODULE: ./source/default/patterns/03-organisms/section/index.js
/**
 * section
 */ 




// EXTERNAL MODULE: ./source/default/patterns/04-templates/page/index.js
var page = __webpack_require__(62159);
// EXTERNAL MODULE: ./source/default/patterns/04-templates/page/page.twig
var page_page = __webpack_require__(14947);
var page_default = /*#__PURE__*/__webpack_require__.n(page_page);
// EXTERNAL MODULE: ./src/component/wingsuit-pattern.tsx + 1 modules
var wingsuit_pattern = __webpack_require__(65869);
;// CONCATENATED MODULE: ./src/app/page.tsx


// eslint-disable-next-line import/no-unresolved

// eslint-disable-next-line import/no-unresolved

// eslint-disable-next-line import/no-unresolved

// eslint-disable-next-line import/no-unresolved

// eslint-disable-next-line import/no-unresolved

// eslint-disable-next-line import/no-unresolved

// eslint-disable-next-line import/no-unresolved



const tokens = __webpack_require__(97);
const component = __webpack_require__(63625);
const love = __webpack_require__(96910);
const page_document = __webpack_require__(79645);
const metadata = {
    title: "Build Twig Components in Storybook",
    description: "A modern way of building, maintaining and documenting your visual driven twig components in storybook."
};
const pattern = {
    label: "Homepage",
    id: "frontpage",
    template: (page_default()),
    extends: [
        "page"
    ],
    fields: {
        content: {
            preview: [
                {
                    id: "hero"
                },
                {
                    id: "section_code",
                    fields: tokens
                },
                {
                    id: "section_code",
                    fields: component
                },
                {
                    id: "section_code",
                    fields: page_document
                },
                {
                    id: "section_code",
                    fields: love
                },
                {
                    id: "download"
                }
            ]
        }
    }
};
const storage = (0,dist.getStorage)();
storage.addDefinition("frontpage", pattern);
function Page() {
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ jsx_runtime_.jsx(wingsuit_pattern/* default */.Z, {
            patternId: "frontpage"
        })
    });
}


/***/ }),

/***/ 91956:
/***/ (() => {



/***/ }),

/***/ 82155:
/***/ (() => {



/***/ }),

/***/ 77050:
/***/ (() => {



/***/ }),

/***/ 12999:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const env = __webpack_require__(99920);
let templatesModule = (() => {
let module = {
    exports: undefined
};

module.exports = (TwingTemplate) => {
    return new Map([
        [0, class extends TwingTemplate {
            constructor(environment) {
                super(environment);

                this._source = new this.Source(`{#
/**
 * @file
 * badge
 *
 * See badge.wingsuit.yaml for documentation.
 */
#}

{#
  Defaults
#}

{% set attributes = attributes|default(create_attribute()) %}

{#
  Classes
#}

{#
  Template
#}
<div {{ attributes.addClass(
  [
    'md:text-2xl font-sans font-medium cursor-pointer border-2 px-4 text-center py-1 border-black dark:text-white dark:border-white',
    round == true ? 'rounded-full',
    expand == true ? 'flex-1 flex flex-col justify-center' : 'inline-block'

  ] | sort | join(' ') | trim) }}>
  {{ text }}
</div>
`, `d4ebf0ff66406d8a70dc4a7b7bf07761fac33945a1fd8ad35adbd7d19050aa4a`);

                let aliases = new this.Context();
                aliases.proxy[`_self`] = this.aliases.proxy[`_self`] = this;
            }

            async doDisplay(context, outputBuffer, blocks = new Map()) {
                let aliases = this.aliases.clone();

                outputBuffer.echo(`
`);
                outputBuffer.echo(`
`);
                context.proxy[`attributes`] = (((context.has(`attributes`))) ? (await this.environment.getFilter('default').traceableCallable(14, this.source)(...[(context.has(`attributes`) ? context.get(`attributes`) : null), await this.environment.getFunction('create_attribute').traceableCallable(14, this.source)(...[])])) : (await this.environment.getFunction('create_attribute').traceableCallable(14, this.source)(...[])));
                outputBuffer.echo(`
`);
                outputBuffer.echo(`
`);
                outputBuffer.echo(`<div `);
                outputBuffer.echo(await this.traceableMethod(this.getAttribute, 23, this.source)(this.environment, (context.has(`attributes`) ? context.get(`attributes`) : null), `addClass`, new Map([[0, await this.environment.getFilter('trim').traceableCallable(29, this.source)(...[await this.environment.getFilter('join').traceableCallable(29, this.source)(...[await this.environment.getFilter('sort').traceableCallable(29, this.source)(...[new Map([[0, `md:text-2xl font-sans font-medium cursor-pointer border-2 px-4 text-center py-1 border-black dark:text-white dark:border-white`], [1, ((this.compare((context.has(`round`) ? context.get(`round`) : null), true)) ? (`rounded-full`) : (``))], [2, ((this.compare((context.has(`expand`) ? context.get(`expand`) : null), true)) ? (`flex-1 flex flex-col justify-center`) : (`inline-block`))]])]), ` `])])]]), `method`, false, false, false));
                outputBuffer.echo(`>
  `);
                outputBuffer.echo((context.has(`text`) ? context.get(`text`) : null));
                outputBuffer.echo(`
</div>
`);
            }

            get isTraitable() {
                return false;
            }

        }],
    ]);
};

    return module.exports;
})();

env.registerTemplatesModule(templatesModule, 'd4ebf0ff66406d8a70dc4a7b7bf07761fac33945a1fd8ad35adbd7d19050aa4a');

let template = env.loadTemplate('d4ebf0ff66406d8a70dc4a7b7bf07761fac33945a1fd8ad35adbd7d19050aa4a');

module.exports = (context = {}) => {
    return template.then((template) => template.render(context));
};

/***/ }),

/***/ 33553:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const env = __webpack_require__(99920);
let templatesModule = (() => {
let module = {
    exports: undefined
};

module.exports = (TwingTemplate) => {
    return new Map([
        [0, class extends TwingTemplate {
            constructor(environment) {
                super(environment);

                this._source = new this.Source(`{# TEMPLATE #}
{% if video is empty and src is not empty %}
  <video autoplay muted loop class="w-full">
    <source src="{{ file_url('ws-assets://videos/' ~ src ) }}" type="video/mp4"/>
    Your browser does not support the video tag.
  </video>
{% else %}
  {{ video }}
{% endif %}
{% if caption is not empty %}
<div>{{ caption }}</div>
{% endif %}
`, `70c4d88b42c719ee9a913c065e0590432f9fc4e7cb5a51f788d33194d7668f31`);

                let aliases = new this.Context();
                aliases.proxy[`_self`] = this.aliases.proxy[`_self`] = this;
            }

            async doDisplay(context, outputBuffer, blocks = new Map()) {
                let aliases = this.aliases.clone();

                if (this.evaluate(!!(await this.environment.getTest('empty').traceableCallable(2, this.source)(...[(context.has(`video`) ? context.get(`video`) : null)]) && !(await this.environment.getTest('empty').traceableCallable(2, this.source)(...[(context.has(`src`) ? context.get(`src`) : null)]))))) {
                    outputBuffer.echo(`  <video autoplay muted loop class="w-full">
    <source src="`);
                    outputBuffer.echo(await this.environment.getFunction('file_url').traceableCallable(4, this.source)(...[(this.concatenate(`ws-assets://videos/`, (context.has(`src`) ? context.get(`src`) : null)))]));
                    outputBuffer.echo(`" type="video/mp4"/>
    Your browser does not support the video tag.
  </video>
`);
                }
                else {
                    outputBuffer.echo(`  `);
                    outputBuffer.echo((context.has(`video`) ? context.get(`video`) : null));
                    outputBuffer.echo(`
`);
                }
                if (this.evaluate(!(await this.environment.getTest('empty').traceableCallable(10, this.source)(...[(context.has(`caption`) ? context.get(`caption`) : null)])))) {
                    outputBuffer.echo(`<div>`);
                    outputBuffer.echo((context.has(`caption`) ? context.get(`caption`) : null));
                    outputBuffer.echo(`</div>
`);
                }
            }

            get isTraitable() {
                return false;
            }

        }],
    ]);
};

    return module.exports;
})();

env.registerTemplatesModule(templatesModule, '70c4d88b42c719ee9a913c065e0590432f9fc4e7cb5a51f788d33194d7668f31');

let template = env.loadTemplate('70c4d88b42c719ee9a913c065e0590432f9fc4e7cb5a51f788d33194d7668f31');

module.exports = (context = {}) => {
    return template.then((template) => template.render(context));
};

/***/ }),

/***/ 2952:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const env = __webpack_require__(99920);
let templatesModule = (() => {
let module = {
    exports: undefined
};

module.exports = (TwingTemplate) => {
    return new Map([
        [0, class extends TwingTemplate {
            constructor(environment) {
                super(environment);

                this._source = new this.Source(`{% set variant = variant|default('dark') %}
{% set content = pattern_configuration('code_block', variant, 'content') %}
{% set frame = pattern_configuration('code_block', variant, 'frame') %}
{% set active_tab = pattern_configuration('code_block', variant, 'active_tab') %}
<div
  x-data="{key: '{{ codes|first.key }}'}"
  class="border border-gray-300 relative overflow-hidden rounded-xl flex w-full">
  <div class="absolute inset-0 {{ frame }}"></div>
  <div class="relative w-full flex flex-col"
  >
    {% if hide_toolbar == false %}
    <div class="flex-none h-11 flex items-center px-4">
      <div class="flex space-x-1.5">
        <div class="w-3 h-3 border-2 rounded-full border-red-500"></div>
        <div class="w-3 h-3 border-2 rounded-full border-orange-500"></div>
        <div class="w-3 h-3 border-2 rounded-full border-green-500"></div>
      </div>
    </div>
    {% endif %}
    <ul class="flex text-sm {{ frame }} {{ codes|length == 1 ? 'hidden' }}" style="transform:translateY(0%) translateZ(0)">
      {%- for code_item in codes -%}
      <li class="flex-none">
        <button type="button"
                x-on:click="key='{{ code_item.key }}'"
                class="border border-transparent py-2 px-4 font-medium focus:outline-none focus-visible:ring-inset focus-visible:ring-2 focus-visible:ring-code-700 text-white"
              :class="{'{{ active_tab }}' : key === '{{ code_item.key }}'}">
          {{ code_item.title }}
        </button>
      </li>
      {% endfor %}
    </ul>
    <div class="{{ content }} relative border-t {% if variant == 'light'%} border-gray-300{% else %} border-white border-opacity-10 {% endif %} min-h-0 flex-auto flex flex-col"
         style="max-height: 450px"
    >
      <div class="w-full flex-auto flex min-h-0 overflow-auto scroll-container">
        {%- for code_item in codes -%}
          <div class="w-full relative flex-auto"
          x-show="key === '{{ code_item.key }}'"
          >
            {% if code_item.code is not empty %}
          <div class="flex text-xs md:text-sm">
            <div class="keep-markup flex relative block text-white w-full">
              <pre data-toolbar-order="{{ code_item.buttons }}" data-prismjs-copy class="code-block language-{{ code_item.format }}"><code>{{- code_item.code|trim -}}</code></pre>
            </div>
          </div>
            {% endif %}
            {% if code_item.image_url is not empty %}
              <img src="{{ file_url('ws-assets://' ~ code_item.image_url) }}" class="w-full">
            {% endif %}
            {% if code_item.content is not empty %}
              {{ code_item.content }}
            {% endif %}
          </div>
        {% endfor %}
      </div>
    </div>
  </div>
</div>
`, `5ee81c73ae3d5cf8be0a6d3149035170a4f17d263cd67363e285322ac8d667ae`);

                let aliases = new this.Context();
                aliases.proxy[`_self`] = this.aliases.proxy[`_self`] = this;
            }

            async doDisplay(context, outputBuffer, blocks = new Map()) {
                let aliases = this.aliases.clone();

                context.proxy[`variant`] = (((context.has(`variant`))) ? (await this.environment.getFilter('default').traceableCallable(1, this.source)(...[(context.has(`variant`) ? context.get(`variant`) : null), `dark`])) : (`dark`));
                context.proxy[`content`] = await this.environment.getFunction('pattern_configuration').traceableCallable(2, this.source)(...[`code_block`, (context.has(`variant`) ? context.get(`variant`) : null), `content`]);
                context.proxy[`frame`] = await this.environment.getFunction('pattern_configuration').traceableCallable(3, this.source)(...[`code_block`, (context.has(`variant`) ? context.get(`variant`) : null), `frame`]);
                context.proxy[`active_tab`] = await this.environment.getFunction('pattern_configuration').traceableCallable(4, this.source)(...[`code_block`, (context.has(`variant`) ? context.get(`variant`) : null), `active_tab`]);
                outputBuffer.echo(`<div
  x-data="{key: '`);
                outputBuffer.echo(await this.traceableMethod(this.getAttribute, 6, this.source)(this.environment, await this.environment.getFilter('first').traceableCallable(6, this.source)(...[(context.has(`codes`) ? context.get(`codes`) : null)]), `key`, new Map([]), `any`, false, false, false));
                outputBuffer.echo(`'}"
  class="border border-gray-300 relative overflow-hidden rounded-xl flex w-full">
  <div class="absolute inset-0 `);
                outputBuffer.echo((context.has(`frame`) ? context.get(`frame`) : null));
                outputBuffer.echo(`"></div>
  <div class="relative w-full flex flex-col"
  >
    `);
                if (this.evaluate(this.compare((context.has(`hide_toolbar`) ? context.get(`hide_toolbar`) : null), false))) {
                    outputBuffer.echo(`    <div class="flex-none h-11 flex items-center px-4">
      <div class="flex space-x-1.5">
        <div class="w-3 h-3 border-2 rounded-full border-red-500"></div>
        <div class="w-3 h-3 border-2 rounded-full border-orange-500"></div>
        <div class="w-3 h-3 border-2 rounded-full border-green-500"></div>
      </div>
    </div>
    `);
                }
                outputBuffer.echo(`    <ul class="flex text-sm `);
                outputBuffer.echo((context.has(`frame`) ? context.get(`frame`) : null));
                outputBuffer.echo(` `);
                outputBuffer.echo(((this.compare(await this.environment.getFilter('length').traceableCallable(20, this.source)(...[this, (context.has(`codes`) ? context.get(`codes`) : null)]), 1)) ? (`hidden`) : (``)));
                outputBuffer.echo(`" style="transform:translateY(0%) translateZ(0)">`);
                context.set('_parent', context.clone());

                await (async () => {
                    let c = this.ensureTraversable((context.has(`codes`) ? context.get(`codes`) : null));

                    if (c === context) {
                        context.set('_seq', context.clone());
                    }
                    else {
                        context.set('_seq', c);
                    }
                })();

                context.set('loop', new Map([
                  ['parent', context.get('_parent')],
                  ['index0', 0],
                  ['index', 1],
                  ['first', true]
                ]));
                if ((typeof context.get('_seq') === 'object') && this.isCountable(context.get('_seq'))) {
                    let length = this.count(context.get('_seq'));
                    let loop = context.get('loop');
                    loop.set('revindex0', length - 1);
                    loop.set('revindex', length);
                    loop.set('length', length);
                    loop.set('last', (length === 1));
                }
                await this.iterate(context.get('_seq'), async (__key__, __value__) => {
                    context.proxy[`_key`] = __key__;
                    context.proxy[`code_item`] = __value__;
                    outputBuffer.echo(`<li class="flex-none">
        <button type="button"
                x-on:click="key='`);
                    outputBuffer.echo(await this.traceableMethod(this.getAttribute, 24, this.source)(this.environment, (context.has(`code_item`) ? context.get(`code_item`) : null), `key`, new Map([]), `any`, false, false, false));
                    outputBuffer.echo(`'"
                class="border border-transparent py-2 px-4 font-medium focus:outline-none focus-visible:ring-inset focus-visible:ring-2 focus-visible:ring-code-700 text-white"
              :class="{'`);
                    outputBuffer.echo((context.has(`active_tab`) ? context.get(`active_tab`) : null));
                    outputBuffer.echo(`' : key === '`);
                    outputBuffer.echo(await this.traceableMethod(this.getAttribute, 26, this.source)(this.environment, (context.has(`code_item`) ? context.get(`code_item`) : null), `key`, new Map([]), `any`, false, false, false));
                    outputBuffer.echo(`'}">
          `);
                    outputBuffer.echo(await this.traceableMethod(this.getAttribute, 27, this.source)(this.environment, (context.has(`code_item`) ? context.get(`code_item`) : null), `title`, new Map([]), `any`, false, false, false));
                    outputBuffer.echo(`
        </button>
      </li>
      `);
                    (() => {
                        let loop = context.get('loop');
                        loop.set('index0', loop.get('index0') + 1);
                        loop.set('index', loop.get('index') + 1);
                        loop.set('first', false);
                        if (loop.has('length')) {
                            loop.set('revindex0', loop.get('revindex0') - 1);
                            loop.set('revindex', loop.get('revindex') - 1);
                            loop.set('last', loop.get('revindex0') === 0);
                        }
                    })();
                });
                (() => {
                    let parent = context.get('_parent');
                    context.delete('_seq');
                    context.delete('_iterated');
                    context.delete('_key');
                    context.delete('code_item');
                    context.delete('_parent');
                    context.delete('loop');
                    for (let [k, v] of parent) {
                        if (!context.has(k)) {
                            context.set(k, v);
                        }
                    }
                })();
                outputBuffer.echo(`    </ul>
    <div class="`);
                outputBuffer.echo((context.has(`content`) ? context.get(`content`) : null));
                outputBuffer.echo(` relative border-t `);
                if (this.evaluate(this.compare((context.has(`variant`) ? context.get(`variant`) : null), `light`))) {
                    outputBuffer.echo(` border-gray-300`);
                }
                else {
                    outputBuffer.echo(` border-white border-opacity-10 `);
                }
                outputBuffer.echo(` min-h-0 flex-auto flex flex-col"
         style="max-height: 450px"
    >
      <div class="w-full flex-auto flex min-h-0 overflow-auto scroll-container">`);
                context.set('_parent', context.clone());

                await (async () => {
                    let c = this.ensureTraversable((context.has(`codes`) ? context.get(`codes`) : null));

                    if (c === context) {
                        context.set('_seq', context.clone());
                    }
                    else {
                        context.set('_seq', c);
                    }
                })();

                context.set('loop', new Map([
                  ['parent', context.get('_parent')],
                  ['index0', 0],
                  ['index', 1],
                  ['first', true]
                ]));
                if ((typeof context.get('_seq') === 'object') && this.isCountable(context.get('_seq'))) {
                    let length = this.count(context.get('_seq'));
                    let loop = context.get('loop');
                    loop.set('revindex0', length - 1);
                    loop.set('revindex', length);
                    loop.set('length', length);
                    loop.set('last', (length === 1));
                }
                await this.iterate(context.get('_seq'), async (__key__, __value__) => {
                    context.proxy[`_key`] = __key__;
                    context.proxy[`code_item`] = __value__;
                    outputBuffer.echo(`<div class="w-full relative flex-auto"
          x-show="key === '`);
                    outputBuffer.echo(await this.traceableMethod(this.getAttribute, 38, this.source)(this.environment, (context.has(`code_item`) ? context.get(`code_item`) : null), `key`, new Map([]), `any`, false, false, false));
                    outputBuffer.echo(`'"
          >
            `);
                    if (this.evaluate(!(await this.environment.getTest('empty').traceableCallable(40, this.source)(...[await this.traceableMethod(this.getAttribute, 40, this.source)(this.environment, (context.has(`code_item`) ? context.get(`code_item`) : null), `code`, new Map([]), `any`, false, false, false)])))) {
                        outputBuffer.echo(`          <div class="flex text-xs md:text-sm">
            <div class="keep-markup flex relative block text-white w-full">
              <pre data-toolbar-order="`);
                        outputBuffer.echo(await this.traceableMethod(this.getAttribute, 43, this.source)(this.environment, (context.has(`code_item`) ? context.get(`code_item`) : null), `buttons`, new Map([]), `any`, false, false, false));
                        outputBuffer.echo(`" data-prismjs-copy class="code-block language-`);
                        outputBuffer.echo(await this.traceableMethod(this.getAttribute, 43, this.source)(this.environment, (context.has(`code_item`) ? context.get(`code_item`) : null), `format`, new Map([]), `any`, false, false, false));
                        outputBuffer.echo(`"><code>`);
                        outputBuffer.echo(await this.environment.getFilter('trim').traceableCallable(43, this.source)(...[await this.traceableMethod(this.getAttribute, 43, this.source)(this.environment, (context.has(`code_item`) ? context.get(`code_item`) : null), `code`, new Map([]), `any`, false, false, false)]));
                        outputBuffer.echo(`</code></pre>
            </div>
          </div>
            `);
                    }
                    outputBuffer.echo(`            `);
                    if (this.evaluate(!(await this.environment.getTest('empty').traceableCallable(47, this.source)(...[await this.traceableMethod(this.getAttribute, 47, this.source)(this.environment, (context.has(`code_item`) ? context.get(`code_item`) : null), `image_url`, new Map([]), `any`, false, false, false)])))) {
                        outputBuffer.echo(`              <img src="`);
                        outputBuffer.echo(await this.environment.getFunction('file_url').traceableCallable(48, this.source)(...[(this.concatenate(`ws-assets://`, await this.traceableMethod(this.getAttribute, 48, this.source)(this.environment, (context.has(`code_item`) ? context.get(`code_item`) : null), `image_url`, new Map([]), `any`, false, false, false)))]));
                        outputBuffer.echo(`" class="w-full">
            `);
                    }
                    outputBuffer.echo(`            `);
                    if (this.evaluate(!(await this.environment.getTest('empty').traceableCallable(50, this.source)(...[await this.traceableMethod(this.getAttribute, 50, this.source)(this.environment, (context.has(`code_item`) ? context.get(`code_item`) : null), `content`, new Map([]), `any`, false, false, false)])))) {
                        outputBuffer.echo(`              `);
                        outputBuffer.echo(await this.traceableMethod(this.getAttribute, 51, this.source)(this.environment, (context.has(`code_item`) ? context.get(`code_item`) : null), `content`, new Map([]), `any`, false, false, false));
                        outputBuffer.echo(`
            `);
                    }
                    outputBuffer.echo(`          </div>
        `);
                    (() => {
                        let loop = context.get('loop');
                        loop.set('index0', loop.get('index0') + 1);
                        loop.set('index', loop.get('index') + 1);
                        loop.set('first', false);
                        if (loop.has('length')) {
                            loop.set('revindex0', loop.get('revindex0') - 1);
                            loop.set('revindex', loop.get('revindex') - 1);
                            loop.set('last', loop.get('revindex0') === 0);
                        }
                    })();
                });
                (() => {
                    let parent = context.get('_parent');
                    context.delete('_seq');
                    context.delete('_iterated');
                    context.delete('_key');
                    context.delete('code_item');
                    context.delete('_parent');
                    context.delete('loop');
                    for (let [k, v] of parent) {
                        if (!context.has(k)) {
                            context.set(k, v);
                        }
                    }
                })();
                outputBuffer.echo(`      </div>
    </div>
  </div>
</div>
`);
            }

            get isTraitable() {
                return false;
            }

        }],
    ]);
};

    return module.exports;
})();

env.registerTemplatesModule(templatesModule, '5ee81c73ae3d5cf8be0a6d3149035170a4f17d263cd67363e285322ac8d667ae');

let template = env.loadTemplate('5ee81c73ae3d5cf8be0a6d3149035170a4f17d263cd67363e285322ac8d667ae');

module.exports = (context = {}) => {
    return template.then((template) => template.render(context));
};

/***/ }),

/***/ 87297:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const env = __webpack_require__(99920);
let templatesModule = (() => {
let module = {
    exports: undefined
};

module.exports = (TwingTemplate) => {
    return new Map([
        [0, class extends TwingTemplate {
            constructor(environment) {
                super(environment);

                this._source = new this.Source(`{#
/**
 * @file
 * hero
 *
 * See hero.wingsuit.yaml for documentation.
 */
#}

{# TEMPLATE #}

{% if data %}
  {% for item in data %}
    {% if item.content %}
      {% set content = item.content %}
    {% endif %}
    {% if item.text %}
      {% set text = item.text %}
    {% endif %}
    {% if item.buttons %}
      {% set buttons = item.buttons %}
    {% endif %}
    {% if item.image %}
      {% set image = item.image %}
    {% endif %}
  {% endfor %}
{% endif %}

<section class="pt-16 md:pt-28">
    {% embed "@organisms/container/container.twig" with {buttons: buttons, text: text, padding_bottom: 'small'} only %}
    {% block content %}
      {% include "@atoms/rich-text/rich-text.twig" with {text: text, variant: 'large' } only %}
      {% if buttons != ' ' %}
        <div class="flex space-x-4 py-8 lg:py-14">
          {{ buttons }}
        </div>
      {% endif %}
    {% endblock %}
  {% endembed %}
  {% embed "@organisms/container/container.twig" with {image:image, width: 'large'} only %}
    {% block content %}
      <div class="bg-video-500 p-4 mb-16">
      {{ image }}
      </div>
    {% endblock %}
  {% endembed %}

</section>

`, `7313b826d551d6dac9a1686b69524604a582d113a87bb44e92b418ed0a65d6d8`);

                let aliases = new this.Context();
                aliases.proxy[`_self`] = this.aliases.proxy[`_self`] = this;
            }

            async doDisplay(context, outputBuffer, blocks = new Map()) {
                let aliases = this.aliases.clone();

                outputBuffer.echo(`
`);
                outputBuffer.echo(`
`);
                if (this.evaluate((context.has(`data`) ? context.get(`data`) : null))) {
                    outputBuffer.echo(`  `);
                    context.set('_parent', context.clone());

                    await (async () => {
                        let c = this.ensureTraversable((context.has(`data`) ? context.get(`data`) : null));

                        if (c === context) {
                            context.set('_seq', context.clone());
                        }
                        else {
                            context.set('_seq', c);
                        }
                    })();

                    context.set('loop', new Map([
                      ['parent', context.get('_parent')],
                      ['index0', 0],
                      ['index', 1],
                      ['first', true]
                    ]));
                    if ((typeof context.get('_seq') === 'object') && this.isCountable(context.get('_seq'))) {
                        let length = this.count(context.get('_seq'));
                        let loop = context.get('loop');
                        loop.set('revindex0', length - 1);
                        loop.set('revindex', length);
                        loop.set('length', length);
                        loop.set('last', (length === 1));
                    }
                    await this.iterate(context.get('_seq'), async (__key__, __value__) => {
                        context.proxy[`_key`] = __key__;
                        context.proxy[`item`] = __value__;
                        outputBuffer.echo(`    `);
                        if (this.evaluate(await this.traceableMethod(this.getAttribute, 14, this.source)(this.environment, (context.has(`item`) ? context.get(`item`) : null), `content`, new Map([]), `any`, false, false, false))) {
                            outputBuffer.echo(`      `);
                            context.proxy[`content`] = await this.traceableMethod(this.getAttribute, 15, this.source)(this.environment, (context.has(`item`) ? context.get(`item`) : null), `content`, new Map([]), `any`, false, false, false);
                            outputBuffer.echo(`    `);
                        }
                        outputBuffer.echo(`    `);
                        if (this.evaluate(await this.traceableMethod(this.getAttribute, 17, this.source)(this.environment, (context.has(`item`) ? context.get(`item`) : null), `text`, new Map([]), `any`, false, false, false))) {
                            outputBuffer.echo(`      `);
                            context.proxy[`text`] = await this.traceableMethod(this.getAttribute, 18, this.source)(this.environment, (context.has(`item`) ? context.get(`item`) : null), `text`, new Map([]), `any`, false, false, false);
                            outputBuffer.echo(`    `);
                        }
                        outputBuffer.echo(`    `);
                        if (this.evaluate(await this.traceableMethod(this.getAttribute, 20, this.source)(this.environment, (context.has(`item`) ? context.get(`item`) : null), `buttons`, new Map([]), `any`, false, false, false))) {
                            outputBuffer.echo(`      `);
                            context.proxy[`buttons`] = await this.traceableMethod(this.getAttribute, 21, this.source)(this.environment, (context.has(`item`) ? context.get(`item`) : null), `buttons`, new Map([]), `any`, false, false, false);
                            outputBuffer.echo(`    `);
                        }
                        outputBuffer.echo(`    `);
                        if (this.evaluate(await this.traceableMethod(this.getAttribute, 23, this.source)(this.environment, (context.has(`item`) ? context.get(`item`) : null), `image`, new Map([]), `any`, false, false, false))) {
                            outputBuffer.echo(`      `);
                            context.proxy[`image`] = await this.traceableMethod(this.getAttribute, 24, this.source)(this.environment, (context.has(`item`) ? context.get(`item`) : null), `image`, new Map([]), `any`, false, false, false);
                            outputBuffer.echo(`    `);
                        }
                        outputBuffer.echo(`  `);
                        (() => {
                            let loop = context.get('loop');
                            loop.set('index0', loop.get('index0') + 1);
                            loop.set('index', loop.get('index') + 1);
                            loop.set('first', false);
                            if (loop.has('length')) {
                                loop.set('revindex0', loop.get('revindex0') - 1);
                                loop.set('revindex', loop.get('revindex') - 1);
                                loop.set('last', loop.get('revindex0') === 0);
                            }
                        })();
                    });
                    (() => {
                        let parent = context.get('_parent');
                        context.delete('_seq');
                        context.delete('_iterated');
                        context.delete('_key');
                        context.delete('item');
                        context.delete('_parent');
                        context.delete('loop');
                        for (let [k, v] of parent) {
                            if (!context.has(k)) {
                                context.set(k, v);
                            }
                        }
                    })();
                }
                outputBuffer.echo(`
<section class="pt-16 md:pt-28">
    `);
                outputBuffer.echo(await this.include(context, outputBuffer, await this.loadTemplate(`7313b826d551d6dac9a1686b69524604a582d113a87bb44e92b418ed0a65d6d8`, 30, 1), new Map([[`buttons`, (context.has(`buttons`) ? context.get(`buttons`) : null)], [`text`, (context.has(`text`) ? context.get(`text`) : null)], [`padding_bottom`, `small`]]), false, false, 30));
                outputBuffer.echo(`  `);
                outputBuffer.echo(await this.include(context, outputBuffer, await this.loadTemplate(`7313b826d551d6dac9a1686b69524604a582d113a87bb44e92b418ed0a65d6d8`, 40, 2), new Map([[`image`, (context.has(`image`) ? context.get(`image`) : null)], [`width`, `large`]]), false, false, 40));
                outputBuffer.echo(`
</section>

`);
            }

            get isTraitable() {
                return false;
            }

        }],
        [1, class extends TwingTemplate {
            constructor(environment) {
                super(environment);

                this._source = new this.Source(`{#
/**
 * @file
 * hero
 *
 * See hero.wingsuit.yaml for documentation.
 */
#}

{# TEMPLATE #}

{% if data %}
  {% for item in data %}
    {% if item.content %}
      {% set content = item.content %}
    {% endif %}
    {% if item.text %}
      {% set text = item.text %}
    {% endif %}
    {% if item.buttons %}
      {% set buttons = item.buttons %}
    {% endif %}
    {% if item.image %}
      {% set image = item.image %}
    {% endif %}
  {% endfor %}
{% endif %}

<section class="pt-16 md:pt-28">
    {% embed "@organisms/container/container.twig" with {buttons: buttons, text: text, padding_bottom: 'small'} only %}
    {% block content %}
      {% include "@atoms/rich-text/rich-text.twig" with {text: text, variant: 'large' } only %}
      {% if buttons != ' ' %}
        <div class="flex space-x-4 py-8 lg:py-14">
          {{ buttons }}
        </div>
      {% endif %}
    {% endblock %}
  {% endembed %}
  {% embed "@organisms/container/container.twig" with {image:image, width: 'large'} only %}
    {% block content %}
      <div class="bg-video-500 p-4 mb-16">
      {{ image }}
      </div>
    {% endblock %}
  {% endembed %}

</section>

`, `7313b826d551d6dac9a1686b69524604a582d113a87bb44e92b418ed0a65d6d8`);

                let aliases = new this.Context();
                
                this.blockHandlers = new Map([
                    ['content', async (context, outputBuffer, blocks = new Map()) => {
                        let aliases = this.aliases.clone();
                        outputBuffer.echo(`      `);
                        outputBuffer.echo(await this.include(context, outputBuffer, `563725f8328ab252f287626622ae33633670f6759457f7da8b318b2545056eb4`, new Map([[`text`, (context.has(`text`) ? context.get(`text`) : null)], [`variant`, `large`]]), false, false, 32));
                        outputBuffer.echo(`      `);
                        if (this.evaluate(!this.compare((context.has(`buttons`) ? context.get(`buttons`) : null), ` `))) {
                            outputBuffer.echo(`        <div class="flex space-x-4 py-8 lg:py-14">
          `);
                            outputBuffer.echo((context.has(`buttons`) ? context.get(`buttons`) : null));
                            outputBuffer.echo(`
        </div>
      `);
                        }
                        outputBuffer.echo(`    `);
                    }]
                ]);
                aliases.proxy[`_self`] = this.aliases.proxy[`_self`] = this;
            }

            doGetParent(context) {
                return this.loadTemplate(`7b43b8ea671f6b748a04f57240aa1d9995b6e3129a965868a2d25d2d9ad4e36c`, 30).then((parent) => {
                    this.parent = parent;

                    return parent;
                });
            }

            async doDisplay(context, outputBuffer, blocks = new Map()) {
                let aliases = this.aliases.clone();

                await (await this.getParent(context)).display(context, this.merge(await this.getBlocks(), blocks), outputBuffer);
            }

            get isTraitable() {
                return false;
            }

        }],
        [2, class extends TwingTemplate {
            constructor(environment) {
                super(environment);

                this._source = new this.Source(`{#
/**
 * @file
 * hero
 *
 * See hero.wingsuit.yaml for documentation.
 */
#}

{# TEMPLATE #}

{% if data %}
  {% for item in data %}
    {% if item.content %}
      {% set content = item.content %}
    {% endif %}
    {% if item.text %}
      {% set text = item.text %}
    {% endif %}
    {% if item.buttons %}
      {% set buttons = item.buttons %}
    {% endif %}
    {% if item.image %}
      {% set image = item.image %}
    {% endif %}
  {% endfor %}
{% endif %}

<section class="pt-16 md:pt-28">
    {% embed "@organisms/container/container.twig" with {buttons: buttons, text: text, padding_bottom: 'small'} only %}
    {% block content %}
      {% include "@atoms/rich-text/rich-text.twig" with {text: text, variant: 'large' } only %}
      {% if buttons != ' ' %}
        <div class="flex space-x-4 py-8 lg:py-14">
          {{ buttons }}
        </div>
      {% endif %}
    {% endblock %}
  {% endembed %}
  {% embed "@organisms/container/container.twig" with {image:image, width: 'large'} only %}
    {% block content %}
      <div class="bg-video-500 p-4 mb-16">
      {{ image }}
      </div>
    {% endblock %}
  {% endembed %}

</section>

`, `7313b826d551d6dac9a1686b69524604a582d113a87bb44e92b418ed0a65d6d8`);

                let aliases = new this.Context();
                
                this.blockHandlers = new Map([
                    ['content', async (context, outputBuffer, blocks = new Map()) => {
                        let aliases = this.aliases.clone();
                        outputBuffer.echo(`      <div class="bg-video-500 p-4 mb-16">
      `);
                        outputBuffer.echo((context.has(`image`) ? context.get(`image`) : null));
                        outputBuffer.echo(`
      </div>
    `);
                    }]
                ]);
                aliases.proxy[`_self`] = this.aliases.proxy[`_self`] = this;
            }

            doGetParent(context) {
                return this.loadTemplate(`7b43b8ea671f6b748a04f57240aa1d9995b6e3129a965868a2d25d2d9ad4e36c`, 40).then((parent) => {
                    this.parent = parent;

                    return parent;
                });
            }

            async doDisplay(context, outputBuffer, blocks = new Map()) {
                let aliases = this.aliases.clone();

                await (await this.getParent(context)).display(context, this.merge(await this.getBlocks(), blocks), outputBuffer);
            }

            get isTraitable() {
                return false;
            }

        }],
    ]);
};

    return module.exports;
})();

__webpack_require__(51426);
__webpack_require__(66745);
env.registerTemplatesModule(templatesModule, '7313b826d551d6dac9a1686b69524604a582d113a87bb44e92b418ed0a65d6d8');

let template = env.loadTemplate('7313b826d551d6dac9a1686b69524604a582d113a87bb44e92b418ed0a65d6d8');

module.exports = (context = {}) => {
    return template.then((template) => template.render(context));
};

/***/ }),

/***/ 81233:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const env = __webpack_require__(99920);
let templatesModule = (() => {
let module = {
    exports: undefined
};

module.exports = (TwingTemplate) => {
    return new Map([
        [0, class extends TwingTemplate {
            constructor(environment) {
                super(environment);

                this._source = new this.Source(`{#
/**
 * @file
 * tabs
 *
 * See tabs.wingsuit.yaml for documentation.
 */
#}

{% for item in tabs %}
  {% include "@atoms/badge/badge.twig" with {
    text: item.title, variant: 'default',
    round: true,
    attributes: create_attribute().setAttribute (
      'class', "{ 'bg-black text-white': $store.component_feature === '" ~ item.key ~ "' }"
    )
  } only %}
{% endfor %}
<div class="pb-8 pt-2">
  {% for item in tabs %}
  <div>
    <p>{{ item.content }}</p>
  </div>
{% endfor %}
</div>
`, `0e8076b8221c0a8b850f6fe0fbfaca46dad13f8a42b0ceea0ae2afe3b0d5cdd2`);

                let aliases = new this.Context();
                aliases.proxy[`_self`] = this.aliases.proxy[`_self`] = this;
            }

            async doDisplay(context, outputBuffer, blocks = new Map()) {
                let aliases = this.aliases.clone();

                outputBuffer.echo(`
`);
                context.set('_parent', context.clone());

                await (async () => {
                    let c = this.ensureTraversable((context.has(`tabs`) ? context.get(`tabs`) : null));

                    if (c === context) {
                        context.set('_seq', context.clone());
                    }
                    else {
                        context.set('_seq', c);
                    }
                })();

                context.set('loop', new Map([
                  ['parent', context.get('_parent')],
                  ['index0', 0],
                  ['index', 1],
                  ['first', true]
                ]));
                if ((typeof context.get('_seq') === 'object') && this.isCountable(context.get('_seq'))) {
                    let length = this.count(context.get('_seq'));
                    let loop = context.get('loop');
                    loop.set('revindex0', length - 1);
                    loop.set('revindex', length);
                    loop.set('length', length);
                    loop.set('last', (length === 1));
                }
                await this.iterate(context.get('_seq'), async (__key__, __value__) => {
                    context.proxy[`_key`] = __key__;
                    context.proxy[`item`] = __value__;
                    outputBuffer.echo(`  `);
                    outputBuffer.echo(await this.include(context, outputBuffer, `d4ebf0ff66406d8a70dc4a7b7bf07761fac33945a1fd8ad35adbd7d19050aa4a`, new Map([[`text`, await this.traceableMethod(this.getAttribute, 12, this.source)(this.environment, (context.has(`item`) ? context.get(`item`) : null), `title`, new Map([]), `any`, false, false, false)], [`variant`, `default`], [`round`, true], [`attributes`, await this.traceableMethod(this.getAttribute, 14, this.source)(this.environment, await this.environment.getFunction('create_attribute').traceableCallable(14, this.source)(...[]), `setAttribute`, new Map([[0, `class`], [1, (this.concatenate((this.concatenate(`{ 'bg-black text-white': $store.component_feature === '`, await this.traceableMethod(this.getAttribute, 15, this.source)(this.environment, (context.has(`item`) ? context.get(`item`) : null), `key`, new Map([]), `any`, false, false, false))), `' }`))]]), `method`, false, false, false)]]), false, false, 11));
                    (() => {
                        let loop = context.get('loop');
                        loop.set('index0', loop.get('index0') + 1);
                        loop.set('index', loop.get('index') + 1);
                        loop.set('first', false);
                        if (loop.has('length')) {
                            loop.set('revindex0', loop.get('revindex0') - 1);
                            loop.set('revindex', loop.get('revindex') - 1);
                            loop.set('last', loop.get('revindex0') === 0);
                        }
                    })();
                });
                (() => {
                    let parent = context.get('_parent');
                    context.delete('_seq');
                    context.delete('_iterated');
                    context.delete('_key');
                    context.delete('item');
                    context.delete('_parent');
                    context.delete('loop');
                    for (let [k, v] of parent) {
                        if (!context.has(k)) {
                            context.set(k, v);
                        }
                    }
                })();
                outputBuffer.echo(`<div class="pb-8 pt-2">
  `);
                context.set('_parent', context.clone());

                await (async () => {
                    let c = this.ensureTraversable((context.has(`tabs`) ? context.get(`tabs`) : null));

                    if (c === context) {
                        context.set('_seq', context.clone());
                    }
                    else {
                        context.set('_seq', c);
                    }
                })();

                context.set('loop', new Map([
                  ['parent', context.get('_parent')],
                  ['index0', 0],
                  ['index', 1],
                  ['first', true]
                ]));
                if ((typeof context.get('_seq') === 'object') && this.isCountable(context.get('_seq'))) {
                    let length = this.count(context.get('_seq'));
                    let loop = context.get('loop');
                    loop.set('revindex0', length - 1);
                    loop.set('revindex', length);
                    loop.set('length', length);
                    loop.set('last', (length === 1));
                }
                await this.iterate(context.get('_seq'), async (__key__, __value__) => {
                    context.proxy[`_key`] = __key__;
                    context.proxy[`item`] = __value__;
                    outputBuffer.echo(`  <div>
    <p>`);
                    outputBuffer.echo(await this.traceableMethod(this.getAttribute, 22, this.source)(this.environment, (context.has(`item`) ? context.get(`item`) : null), `content`, new Map([]), `any`, false, false, false));
                    outputBuffer.echo(`</p>
  </div>
`);
                    (() => {
                        let loop = context.get('loop');
                        loop.set('index0', loop.get('index0') + 1);
                        loop.set('index', loop.get('index') + 1);
                        loop.set('first', false);
                        if (loop.has('length')) {
                            loop.set('revindex0', loop.get('revindex0') - 1);
                            loop.set('revindex', loop.get('revindex') - 1);
                            loop.set('last', loop.get('revindex0') === 0);
                        }
                    })();
                });
                (() => {
                    let parent = context.get('_parent');
                    context.delete('_seq');
                    context.delete('_iterated');
                    context.delete('_key');
                    context.delete('item');
                    context.delete('_parent');
                    context.delete('loop');
                    for (let [k, v] of parent) {
                        if (!context.has(k)) {
                            context.set(k, v);
                        }
                    }
                })();
                outputBuffer.echo(`</div>
`);
            }

            get isTraitable() {
                return false;
            }

        }],
    ]);
};

    return module.exports;
})();

__webpack_require__(12999);
env.registerTemplatesModule(templatesModule, '0e8076b8221c0a8b850f6fe0fbfaca46dad13f8a42b0ceea0ae2afe3b0d5cdd2');

let template = env.loadTemplate('0e8076b8221c0a8b850f6fe0fbfaca46dad13f8a42b0ceea0ae2afe3b0d5cdd2');

module.exports = (context = {}) => {
    return template.then((template) => template.render(context));
};

/***/ }),

/***/ 84838:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const env = __webpack_require__(99920);
let templatesModule = (() => {
let module = {
    exports: undefined
};

module.exports = (TwingTemplate) => {
    return new Map([
        [0, class extends TwingTemplate {
            constructor(environment) {
                super(environment);

                this._source = new this.Source(`{{ pattern_preview('section_code', {
  bg: bg|default('black'),
  width: width|default('default'),
  padding_top: padding_top|default('default'),
  padding_bottom: 'large',
  content: intro,
  content_align: 'center',
  content_width: 'small',
  badge_headline: 'Choose your flavor:',
  data: [
    {
      title: 'Drupal opinionated',
      key: "drupal",
      intro: '',
      hide_code_toolbar: true,
      contents: [],
      codes: [{
      'title': 'Tailwind',
      'key': 'wingsuit_tailwind',
      'format': 'bash',
      'buttons': 'copy-to-clipboard',
      'code': 'npx @wingsuit-designsystem/cli init -k tailwind',
    },
      {
        'title': 'Bootstrap',
        'key': 'wingsuit_bootstrap',
        'format': 'bash',
        'buttons': 'copy-to-clipboard',
        'code': 'npx @wingsuit-designsystem/cli init -k bootstrap',
      }],
    },
    {
      title: 'Vanilla',
      key: "other",
      intro: "",
      contents: [],
      hide_code_toolbar: true,
      codes: [
      {
        'title': 'Tailwind',
        'key': 'vanilla_tailwind',
        'format': 'bash',
        'buttons': '',
        'code': '
npx @wingsuit-designsystem/cli init -k vanilla-tailwind

# Add "cms" app and configure the \`distFolder\`, \`assetAtomicFolder\` to
# your template folder in your \`wingsuit.config.js\`:
yarn ws generate-app

# Start your app:
yarn ws dev cms
',
      },
      {
        'title': 'SCSS',
        'key': 'vanilla_scss',
        'format': 'bash',
        'buttons': '',
        'code': '
npx @wingsuit-designsystem/cli init -k vanilla-scss

# Add "cms" app and configure the \`distFolder\`, \`assetAtomicFolder\` to
# your template folder in your \`wingsuit.config.js\`:
yarn ws generate-app

# Start your app:
yarn ws dev cms
',
      }
    ],
    },
  ]
}) }}

{% set kickstarter_left %}

  {{ pattern('rich_text', {'text': '
<h2><div class="text-2xl">You might also try ...</div>Drupal Kickstarter</h2>
<p>Wingsuit Kickstarter is the fastest way to start your Drupal project with Wingsuit. The Kickstarter uses UI Patterns to map Patterns to Drupal and Acquia Blt for automation.
</p>
',
  }, 'large' ) }}
{% endset %}
{% set kickstarter_right %}
  <div class="flex items-center justify-center pt-20">
  {{ pattern_preview('button', {'size': 'large', 'round': true, 'text': 'Get Started', 'url': '/drupal/ui_patterns/'}, 'default') }}
  </div>
{% endset %}
{{ pattern('section', {columns: 2, column_1: kickstarter_left, column_2: kickstarter_right, padding_bottom: 'default' }, '2_column') }}
`, `46ddc964ff6b4e55275414421c599daf2f6912aa9ccd1a6ad792ad5f04db046b`);

                let aliases = new this.Context();
                aliases.proxy[`_self`] = this.aliases.proxy[`_self`] = this;
            }

            async doDisplay(context, outputBuffer, blocks = new Map()) {
                let aliases = this.aliases.clone();

                outputBuffer.echo(await this.environment.getFunction('pattern_preview').traceableCallable(1, this.source)(...[`section_code`, new Map([[`bg`, (((context.has(`bg`))) ? (await this.environment.getFilter('default').traceableCallable(2, this.source)(...[(context.has(`bg`) ? context.get(`bg`) : null), `black`])) : (`black`))], [`width`, (((context.has(`width`))) ? (await this.environment.getFilter('default').traceableCallable(3, this.source)(...[(context.has(`width`) ? context.get(`width`) : null), `default`])) : (`default`))], [`padding_top`, (((context.has(`padding_top`))) ? (await this.environment.getFilter('default').traceableCallable(4, this.source)(...[(context.has(`padding_top`) ? context.get(`padding_top`) : null), `default`])) : (`default`))], [`padding_bottom`, `large`], [`content`, (context.has(`intro`) ? context.get(`intro`) : null)], [`content_align`, `center`], [`content_width`, `small`], [`badge_headline`, `Choose your flavor:`], [`data`, new Map([[0, new Map([[`title`, `Drupal opinionated`], [`key`, `drupal`], [`intro`, ``], [`hide_code_toolbar`, true], [`contents`, new Map([])], [`codes`, new Map([[0, new Map([[`title`, `Tailwind`], [`key`, `wingsuit_tailwind`], [`format`, `bash`], [`buttons`, `copy-to-clipboard`], [`code`, `npx @wingsuit-designsystem/cli init -k tailwind`]])], [1, new Map([[`title`, `Bootstrap`], [`key`, `wingsuit_bootstrap`], [`format`, `bash`], [`buttons`, `copy-to-clipboard`], [`code`, `npx @wingsuit-designsystem/cli init -k bootstrap`]])]])]])], [1, new Map([[`title`, `Vanilla`], [`key`, `other`], [`intro`, ``], [`contents`, new Map([])], [`hide_code_toolbar`, true], [`codes`, new Map([[0, new Map([[`title`, `Tailwind`], [`key`, `vanilla_tailwind`], [`format`, `bash`], [`buttons`, ``], [`code`, `
npx @wingsuit-designsystem/cli init -k vanilla-tailwind

# Add "cms" app and configure the \`distFolder\`, \`assetAtomicFolder\` to
# your template folder in your \`wingsuit.config.js\`:
yarn ws generate-app

# Start your app:
yarn ws dev cms
`]])], [1, new Map([[`title`, `SCSS`], [`key`, `vanilla_scss`], [`format`, `bash`], [`buttons`, ``], [`code`, `
npx @wingsuit-designsystem/cli init -k vanilla-scss

# Add "cms" app and configure the \`distFolder\`, \`assetAtomicFolder\` to
# your template folder in your \`wingsuit.config.js\`:
yarn ws generate-app

# Start your app:
yarn ws dev cms
`]])]])]])]])]])]));
                outputBuffer.echo(`

`);
                outputBuffer.start();
                outputBuffer.echo(`
  `);
                outputBuffer.echo(await this.environment.getFunction('pattern').traceableCallable(78, this.source)(...[`rich_text`, new Map([[`text`, `
<h2><div class="text-2xl">You might also try ...</div>Drupal Kickstarter</h2>
<p>Wingsuit Kickstarter is the fastest way to start your Drupal project with Wingsuit. The Kickstarter uses UI Patterns to map Patterns to Drupal and Acquia Blt for automation.
</p>
`]]), `large`]));
                outputBuffer.echo(`
`);
                context.proxy[`kickstarter_left`] = (() => {let tmp = outputBuffer.getAndClean(); return tmp === '' ? '' : new this.Markup(tmp, this.environment.getCharset());})();
                outputBuffer.start();
                outputBuffer.echo(`  <div class="flex items-center justify-center pt-20">
  `);
                outputBuffer.echo(await this.environment.getFunction('pattern_preview').traceableCallable(87, this.source)(...[`button`, new Map([[`size`, `large`], [`round`, true], [`text`, `Get Started`], [`url`, `/drupal/ui_patterns/`]]), `default`]));
                outputBuffer.echo(`
  </div>
`);
                context.proxy[`kickstarter_right`] = (() => {let tmp = outputBuffer.getAndClean(); return tmp === '' ? '' : new this.Markup(tmp, this.environment.getCharset());})();
                outputBuffer.echo(await this.environment.getFunction('pattern').traceableCallable(90, this.source)(...[`section`, new Map([[`columns`, 2], [`column_1`, (context.has(`kickstarter_left`) ? context.get(`kickstarter_left`) : null)], [`column_2`, (context.has(`kickstarter_right`) ? context.get(`kickstarter_right`) : null)], [`padding_bottom`, `default`]]), `2_column`]));
                outputBuffer.echo(`
`);
            }

            get isTraitable() {
                return false;
            }

        }],
    ]);
};

    return module.exports;
})();

env.registerTemplatesModule(templatesModule, '46ddc964ff6b4e55275414421c599daf2f6912aa9ccd1a6ad792ad5f04db046b');

let template = env.loadTemplate('46ddc964ff6b4e55275414421c599daf2f6912aa9ccd1a6ad792ad5f04db046b');

module.exports = (context = {}) => {
    return template.then((template) => template.render(context));
};

/***/ }),

/***/ 57737:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const env = __webpack_require__(99920);
let templatesModule = (() => {
let module = {
    exports: undefined
};

module.exports = (TwingTemplate) => {
    return new Map([
        [0, class extends TwingTemplate {
            constructor(environment) {
                super(environment);

                this._source = new this.Source(`{% embed "@organisms/container/container.twig"
    with {
    width: width|default('default'),
    padding_top: padding_top|default('default'),
    padding_bottom: padding_bottom|default('default'),
    bg: bg
} %}
    {% block content %}


                    <div class="pb-10">
                        {% include "@atoms/rich-text/rich-text.twig" with {text: content, variant: 'large', text_align: content_align, width: content_width} only %}
                    </div>
                    {% if badge_headline is not empty %}
                        <div class="pb-2">
                            {% include "@atoms/rich-text/rich-text.twig" with {text: '<b>' ~ badge_headline ~ '</b>', variant: 'large'} only %}
                        </div>
                    {% endif %}
                    <Tabs>
                    <tab-list>
                        {% for item in data %}
                            <tab>
                            {% include "@atoms/badge/badge.twig" with {
                                text: item.title, variant: 'default',
                                round: false,
                                expand: true,
                                attributes: create_attribute().setAttribute(
                                    'x-click', 'key=\\'' ~ item.key ~'\\''
                                ).setAttribute (
                                    ':class', "{ 'bg-black text-white dark:bg-white dark:text-black': key === '" ~ item.key ~ "' }"
                                )
                            } only %}
                            </tab>
                        {% endfor %}
                    </tab-list>
                    {% for item in data %}
                        {% set code_block %}
                            {% if item.codes|length > 0 %}
                                {% include "@molecules/code-block/code-block.twig"
                                    with {
                                    variant: 'dark',
                                    hide_toolbar: item.hide_code_toolbar is defined ? item.hide_code_toolbar : false,
                                    codes: item.codes
                                } %}
                            {% endif %}
                        {% endset %}
                        {% set content %}
                            {% if item.contents|length > 0 %}
                                <div>
                                    <div {{ create_attribute().addClass([
                                        'pb-4 flex space-x-3',
                                        item.contents|length == 1 ? 'hidden'
                                    ]) }}>
                                            {% for content in item.contents %}

                                                {% include "@atoms/badge/badge.twig" with {
                                                    text: content.title, variant: 'default',
                                                    expand: true,
                                                    attributes: create_attribute().setAttribute(
                                                        'x-on:click', 'key=\\'' ~ content.key ~'\\''
                                                    ).setAttribute (
                                                        ':class', "{ 'bg-black text-white': key === '" ~ content.key ~ "' }"
                                                    )
                                                } only %}
                                            {% endfor %}
                                    </div>

                                    {% for content in item.contents %}
                                        <tab-panel>
                                            <div>
                                                {% if content.intro is not empty %}
                                                    <div class="pb-8 pt-4">
                                                        {{ pattern('rich_text', { text: content.intro }, 'large') }}
                                                    </div>
                                                {% endif %}
                                                {% if content.intro_pattern.id is not empty %}
                                                    {{ pattern_preview(content.intro_pattern.id, content.intro_pattern.data|default({}), content.intro_pattern.variant) }}
                                                {% endif %}
                                                {% if content.show_code_block is not defined or content.show_code_block == true %}
                                                    {% include "@molecules/code-block/code-block.twig"
                                                        with {
                                                        variant: 'light',
                                                        codes: [
                                                            {
                                                                image_url: content.image_url,
                                                                content: content.content
                                                            }
                                                        ]

                                                    } %}
                                                {% else %}
                                                    {{ content.content }}
                                                {% endif %}
                                            </div>
                                        </tab-panel>
                                    {% endfor %}
                                </div>
                            {% endif %}
                        {% endset %}
                        <tab-panel>
                            <div>
                                {% if item.intro is not empty %}
                                    <div class="pb-6">
                                        {% include "@atoms/rich-text/rich-text.twig" with {text: item.intro, variant: 'large'} only %}
                                    </div>
                                {% endif %}
                                <div>
                                    {% embed "@organisms/grid/grid.twig" with {
                                        columns: code_block|trim and content|trim is not empty ? 2 : 1,
                                        cells: [
                                            content,
                                            code_block
                                        ]
                                    } only %}
                                    {% endembed %}
                                </div>
                            </div>
                        </tab-panel>
                    {% endfor %}
                </div>
            </Tabs>
        {{ content_bottom }}
    {% endblock %}
{% endembed %}
`, `0fd855d34e0aeac9941a969535e3ce8c22ff5f0cad49c80c84b331e081743d80`);

                let aliases = new this.Context();
                aliases.proxy[`_self`] = this.aliases.proxy[`_self`] = this;
            }

            async doDisplay(context, outputBuffer, blocks = new Map()) {
                let aliases = this.aliases.clone();

                outputBuffer.echo(await this.include(context, outputBuffer, await this.loadTemplate(`0fd855d34e0aeac9941a969535e3ce8c22ff5f0cad49c80c84b331e081743d80`, 1, 2), new Map([[`width`, (((context.has(`width`))) ? (await this.environment.getFilter('default').traceableCallable(3, this.source)(...[(context.has(`width`) ? context.get(`width`) : null), `default`])) : (`default`))], [`padding_top`, (((context.has(`padding_top`))) ? (await this.environment.getFilter('default').traceableCallable(4, this.source)(...[(context.has(`padding_top`) ? context.get(`padding_top`) : null), `default`])) : (`default`))], [`padding_bottom`, (((context.has(`padding_bottom`))) ? (await this.environment.getFilter('default').traceableCallable(5, this.source)(...[(context.has(`padding_bottom`) ? context.get(`padding_bottom`) : null), `default`])) : (`default`))], [`bg`, (context.has(`bg`) ? context.get(`bg`) : null)]]), true, false, 1));
            }

            get isTraitable() {
                return false;
            }

        }],
        [2, class extends TwingTemplate {
            constructor(environment) {
                super(environment);

                this._source = new this.Source(`{% embed "@organisms/container/container.twig"
    with {
    width: width|default('default'),
    padding_top: padding_top|default('default'),
    padding_bottom: padding_bottom|default('default'),
    bg: bg
} %}
    {% block content %}


                    <div class="pb-10">
                        {% include "@atoms/rich-text/rich-text.twig" with {text: content, variant: 'large', text_align: content_align, width: content_width} only %}
                    </div>
                    {% if badge_headline is not empty %}
                        <div class="pb-2">
                            {% include "@atoms/rich-text/rich-text.twig" with {text: '<b>' ~ badge_headline ~ '</b>', variant: 'large'} only %}
                        </div>
                    {% endif %}
                    <Tabs>
                    <tab-list>
                        {% for item in data %}
                            <tab>
                            {% include "@atoms/badge/badge.twig" with {
                                text: item.title, variant: 'default',
                                round: false,
                                expand: true,
                                attributes: create_attribute().setAttribute(
                                    'x-click', 'key=\\'' ~ item.key ~'\\''
                                ).setAttribute (
                                    ':class', "{ 'bg-black text-white dark:bg-white dark:text-black': key === '" ~ item.key ~ "' }"
                                )
                            } only %}
                            </tab>
                        {% endfor %}
                    </tab-list>
                    {% for item in data %}
                        {% set code_block %}
                            {% if item.codes|length > 0 %}
                                {% include "@molecules/code-block/code-block.twig"
                                    with {
                                    variant: 'dark',
                                    hide_toolbar: item.hide_code_toolbar is defined ? item.hide_code_toolbar : false,
                                    codes: item.codes
                                } %}
                            {% endif %}
                        {% endset %}
                        {% set content %}
                            {% if item.contents|length > 0 %}
                                <div>
                                    <div {{ create_attribute().addClass([
                                        'pb-4 flex space-x-3',
                                        item.contents|length == 1 ? 'hidden'
                                    ]) }}>
                                            {% for content in item.contents %}

                                                {% include "@atoms/badge/badge.twig" with {
                                                    text: content.title, variant: 'default',
                                                    expand: true,
                                                    attributes: create_attribute().setAttribute(
                                                        'x-on:click', 'key=\\'' ~ content.key ~'\\''
                                                    ).setAttribute (
                                                        ':class', "{ 'bg-black text-white': key === '" ~ content.key ~ "' }"
                                                    )
                                                } only %}
                                            {% endfor %}
                                    </div>

                                    {% for content in item.contents %}
                                        <tab-panel>
                                            <div>
                                                {% if content.intro is not empty %}
                                                    <div class="pb-8 pt-4">
                                                        {{ pattern('rich_text', { text: content.intro }, 'large') }}
                                                    </div>
                                                {% endif %}
                                                {% if content.intro_pattern.id is not empty %}
                                                    {{ pattern_preview(content.intro_pattern.id, content.intro_pattern.data|default({}), content.intro_pattern.variant) }}
                                                {% endif %}
                                                {% if content.show_code_block is not defined or content.show_code_block == true %}
                                                    {% include "@molecules/code-block/code-block.twig"
                                                        with {
                                                        variant: 'light',
                                                        codes: [
                                                            {
                                                                image_url: content.image_url,
                                                                content: content.content
                                                            }
                                                        ]

                                                    } %}
                                                {% else %}
                                                    {{ content.content }}
                                                {% endif %}
                                            </div>
                                        </tab-panel>
                                    {% endfor %}
                                </div>
                            {% endif %}
                        {% endset %}
                        <tab-panel>
                            <div>
                                {% if item.intro is not empty %}
                                    <div class="pb-6">
                                        {% include "@atoms/rich-text/rich-text.twig" with {text: item.intro, variant: 'large'} only %}
                                    </div>
                                {% endif %}
                                <div>
                                    {% embed "@organisms/grid/grid.twig" with {
                                        columns: code_block|trim and content|trim is not empty ? 2 : 1,
                                        cells: [
                                            content,
                                            code_block
                                        ]
                                    } only %}
                                    {% endembed %}
                                </div>
                            </div>
                        </tab-panel>
                    {% endfor %}
                </div>
            </Tabs>
        {{ content_bottom }}
    {% endblock %}
{% endembed %}
`, `0fd855d34e0aeac9941a969535e3ce8c22ff5f0cad49c80c84b331e081743d80`);

                let aliases = new this.Context();
                
                this.blockHandlers = new Map([
                    ['content', async (context, outputBuffer, blocks = new Map()) => {
                        let aliases = this.aliases.clone();
                        outputBuffer.echo(`

                    <div class="pb-10">
                        `);
                        outputBuffer.echo(await this.include(context, outputBuffer, `563725f8328ab252f287626622ae33633670f6759457f7da8b318b2545056eb4`, new Map([[`text`, (context.has(`content`) ? context.get(`content`) : null)], [`variant`, `large`], [`text_align`, (context.has(`content_align`) ? context.get(`content_align`) : null)], [`width`, (context.has(`content_width`) ? context.get(`content_width`) : null)]]), false, false, 12));
                        outputBuffer.echo(`                    </div>
                    `);
                        if (this.evaluate(!(await this.environment.getTest('empty').traceableCallable(14, this.source)(...[(context.has(`badge_headline`) ? context.get(`badge_headline`) : null)])))) {
                            outputBuffer.echo(`                        <div class="pb-2">
                            `);
                            outputBuffer.echo(await this.include(context, outputBuffer, `563725f8328ab252f287626622ae33633670f6759457f7da8b318b2545056eb4`, new Map([[`text`, (this.concatenate((this.concatenate(`<b>`, (context.has(`badge_headline`) ? context.get(`badge_headline`) : null))), `</b>`))], [`variant`, `large`]]), false, false, 16));
                            outputBuffer.echo(`                        </div>
                    `);
                        }
                        outputBuffer.echo(`                    <Tabs>
                    <tab-list>
                        `);
                        context.set('_parent', context.clone());

                        await (async () => {
                            let c = this.ensureTraversable((context.has(`data`) ? context.get(`data`) : null));

                            if (c === context) {
                                context.set('_seq', context.clone());
                            }
                            else {
                                context.set('_seq', c);
                            }
                        })();

                        context.set('loop', new Map([
                          ['parent', context.get('_parent')],
                          ['index0', 0],
                          ['index', 1],
                          ['first', true]
                        ]));
                        if ((typeof context.get('_seq') === 'object') && this.isCountable(context.get('_seq'))) {
                            let length = this.count(context.get('_seq'));
                            let loop = context.get('loop');
                            loop.set('revindex0', length - 1);
                            loop.set('revindex', length);
                            loop.set('length', length);
                            loop.set('last', (length === 1));
                        }
                        await this.iterate(context.get('_seq'), async (__key__, __value__) => {
                            context.proxy[`_key`] = __key__;
                            context.proxy[`item`] = __value__;
                            outputBuffer.echo(`                            <tab>
                            `);
                            outputBuffer.echo(await this.include(context, outputBuffer, `d4ebf0ff66406d8a70dc4a7b7bf07761fac33945a1fd8ad35adbd7d19050aa4a`, new Map([[`text`, await this.traceableMethod(this.getAttribute, 24, this.source)(this.environment, (context.has(`item`) ? context.get(`item`) : null), `title`, new Map([]), `any`, false, false, false)], [`variant`, `default`], [`round`, false], [`expand`, true], [`attributes`, await this.traceableMethod(this.getAttribute, 29, this.source)(this.environment, await this.traceableMethod(this.getAttribute, 27, this.source)(this.environment, await this.environment.getFunction('create_attribute').traceableCallable(27, this.source)(...[]), `setAttribute`, new Map([[0, `x-click`], [1, (this.concatenate((this.concatenate(`key='`, await this.traceableMethod(this.getAttribute, 28, this.source)(this.environment, (context.has(`item`) ? context.get(`item`) : null), `key`, new Map([]), `any`, false, false, false))), `'`))]]), `method`, false, false, false), `setAttribute`, new Map([[0, `:class`], [1, (this.concatenate((this.concatenate(`{ 'bg-black text-white dark:bg-white dark:text-black': key === '`, await this.traceableMethod(this.getAttribute, 30, this.source)(this.environment, (context.has(`item`) ? context.get(`item`) : null), `key`, new Map([]), `any`, false, false, false))), `' }`))]]), `method`, false, false, false)]]), false, false, 23));
                            outputBuffer.echo(`                            </tab>
                        `);
                            (() => {
                                let loop = context.get('loop');
                                loop.set('index0', loop.get('index0') + 1);
                                loop.set('index', loop.get('index') + 1);
                                loop.set('first', false);
                                if (loop.has('length')) {
                                    loop.set('revindex0', loop.get('revindex0') - 1);
                                    loop.set('revindex', loop.get('revindex') - 1);
                                    loop.set('last', loop.get('revindex0') === 0);
                                }
                            })();
                        });
                        (() => {
                            let parent = context.get('_parent');
                            context.delete('_seq');
                            context.delete('_iterated');
                            context.delete('_key');
                            context.delete('item');
                            context.delete('_parent');
                            context.delete('loop');
                            for (let [k, v] of parent) {
                                if (!context.has(k)) {
                                    context.set(k, v);
                                }
                            }
                        })();
                        outputBuffer.echo(`                    </tab-list>
                    `);
                        context.set('_parent', context.clone());

                        await (async () => {
                            let c = this.ensureTraversable((context.has(`data`) ? context.get(`data`) : null));

                            if (c === context) {
                                context.set('_seq', context.clone());
                            }
                            else {
                                context.set('_seq', c);
                            }
                        })();

                        context.set('loop', new Map([
                          ['parent', context.get('_parent')],
                          ['index0', 0],
                          ['index', 1],
                          ['first', true]
                        ]));
                        if ((typeof context.get('_seq') === 'object') && this.isCountable(context.get('_seq'))) {
                            let length = this.count(context.get('_seq'));
                            let loop = context.get('loop');
                            loop.set('revindex0', length - 1);
                            loop.set('revindex', length);
                            loop.set('length', length);
                            loop.set('last', (length === 1));
                        }
                        await this.iterate(context.get('_seq'), async (__key__, __value__) => {
                            context.proxy[`_key`] = __key__;
                            context.proxy[`item`] = __value__;
                            outputBuffer.echo(`                        `);
                            outputBuffer.start();
                            outputBuffer.echo(`                            `);
                            if (this.evaluate((await this.environment.getFilter('length').traceableCallable(38, this.source)(...[this, await this.traceableMethod(this.getAttribute, 38, this.source)(this.environment, (context.has(`item`) ? context.get(`item`) : null), `codes`, new Map([]), `any`, false, false, false)]) > 0))) {
                                outputBuffer.echo(`                                `);
                                outputBuffer.echo(await this.include(context, outputBuffer, `5ee81c73ae3d5cf8be0a6d3149035170a4f17d263cd67363e285322ac8d667ae`, new Map([[`variant`, `dark`], [`hide_toolbar`, ((await this.traceableMethod(this.getAttribute, 42, this.source)(this.environment, (context.has(`item`) ? context.get(`item`) : null), `hide_code_toolbar`, new Map([]), `any`, true, true, false)) ? (await this.traceableMethod(this.getAttribute, 42, this.source)(this.environment, (context.has(`item`) ? context.get(`item`) : null), `hide_code_toolbar`, new Map([]), `any`, false, false, false)) : (false))], [`codes`, await this.traceableMethod(this.getAttribute, 43, this.source)(this.environment, (context.has(`item`) ? context.get(`item`) : null), `codes`, new Map([]), `any`, false, false, false)]]), true, false, 39));
                                outputBuffer.echo(`                            `);
                            }
                            outputBuffer.echo(`                        `);
                            context.proxy[`code_block`] = (() => {let tmp = outputBuffer.getAndClean(); return tmp === '' ? '' : new this.Markup(tmp, this.environment.getCharset());})();
                            outputBuffer.echo(`                        `);
                            outputBuffer.start();
                            outputBuffer.echo(`                            `);
                            if (this.evaluate((await this.environment.getFilter('length').traceableCallable(48, this.source)(...[this, await this.traceableMethod(this.getAttribute, 48, this.source)(this.environment, (context.has(`item`) ? context.get(`item`) : null), `contents`, new Map([]), `any`, false, false, false)]) > 0))) {
                                outputBuffer.echo(`                                <div>
                                    <div `);
                                outputBuffer.echo(await this.traceableMethod(this.getAttribute, 50, this.source)(this.environment, await this.environment.getFunction('create_attribute').traceableCallable(50, this.source)(...[]), `addClass`, new Map([[0, new Map([[0, `pb-4 flex space-x-3`], [1, ((this.compare(await this.environment.getFilter('length').traceableCallable(52, this.source)(...[this, await this.traceableMethod(this.getAttribute, 52, this.source)(this.environment, (context.has(`item`) ? context.get(`item`) : null), `contents`, new Map([]), `any`, false, false, false)]), 1)) ? (`hidden`) : (``))]])]]), `method`, false, false, false));
                                outputBuffer.echo(`>
                                            `);
                                context.set('_parent', context.clone());

                                await (async () => {
                                    let c = this.ensureTraversable(await this.traceableMethod(this.getAttribute, 54, this.source)(this.environment, (context.has(`item`) ? context.get(`item`) : null), `contents`, new Map([]), `any`, false, false, false));

                                    if (c === context) {
                                        context.set('_seq', context.clone());
                                    }
                                    else {
                                        context.set('_seq', c);
                                    }
                                })();

                                context.set('loop', new Map([
                                  ['parent', context.get('_parent')],
                                  ['index0', 0],
                                  ['index', 1],
                                  ['first', true]
                                ]));
                                if ((typeof context.get('_seq') === 'object') && this.isCountable(context.get('_seq'))) {
                                    let length = this.count(context.get('_seq'));
                                    let loop = context.get('loop');
                                    loop.set('revindex0', length - 1);
                                    loop.set('revindex', length);
                                    loop.set('length', length);
                                    loop.set('last', (length === 1));
                                }
                                await this.iterate(context.get('_seq'), async (__key__, __value__) => {
                                    context.proxy[`_key`] = __key__;
                                    context.proxy[`content`] = __value__;
                                    outputBuffer.echo(`
                                                `);
                                    outputBuffer.echo(await this.include(context, outputBuffer, `d4ebf0ff66406d8a70dc4a7b7bf07761fac33945a1fd8ad35adbd7d19050aa4a`, new Map([[`text`, await this.traceableMethod(this.getAttribute, 57, this.source)(this.environment, (context.has(`content`) ? context.get(`content`) : null), `title`, new Map([]), `any`, false, false, false)], [`variant`, `default`], [`expand`, true], [`attributes`, await this.traceableMethod(this.getAttribute, 61, this.source)(this.environment, await this.traceableMethod(this.getAttribute, 59, this.source)(this.environment, await this.environment.getFunction('create_attribute').traceableCallable(59, this.source)(...[]), `setAttribute`, new Map([[0, `x-on:click`], [1, (this.concatenate((this.concatenate(`key='`, await this.traceableMethod(this.getAttribute, 60, this.source)(this.environment, (context.has(`content`) ? context.get(`content`) : null), `key`, new Map([]), `any`, false, false, false))), `'`))]]), `method`, false, false, false), `setAttribute`, new Map([[0, `:class`], [1, (this.concatenate((this.concatenate(`{ 'bg-black text-white': key === '`, await this.traceableMethod(this.getAttribute, 62, this.source)(this.environment, (context.has(`content`) ? context.get(`content`) : null), `key`, new Map([]), `any`, false, false, false))), `' }`))]]), `method`, false, false, false)]]), false, false, 56));
                                    outputBuffer.echo(`                                            `);
                                    (() => {
                                        let loop = context.get('loop');
                                        loop.set('index0', loop.get('index0') + 1);
                                        loop.set('index', loop.get('index') + 1);
                                        loop.set('first', false);
                                        if (loop.has('length')) {
                                            loop.set('revindex0', loop.get('revindex0') - 1);
                                            loop.set('revindex', loop.get('revindex') - 1);
                                            loop.set('last', loop.get('revindex0') === 0);
                                        }
                                    })();
                                });
                                (() => {
                                    let parent = context.get('_parent');
                                    context.delete('_seq');
                                    context.delete('_iterated');
                                    context.delete('_key');
                                    context.delete('content');
                                    context.delete('_parent');
                                    context.delete('loop');
                                    for (let [k, v] of parent) {
                                        if (!context.has(k)) {
                                            context.set(k, v);
                                        }
                                    }
                                })();
                                outputBuffer.echo(`                                    </div>

                                    `);
                                context.set('_parent', context.clone());

                                await (async () => {
                                    let c = this.ensureTraversable(await this.traceableMethod(this.getAttribute, 68, this.source)(this.environment, (context.has(`item`) ? context.get(`item`) : null), `contents`, new Map([]), `any`, false, false, false));

                                    if (c === context) {
                                        context.set('_seq', context.clone());
                                    }
                                    else {
                                        context.set('_seq', c);
                                    }
                                })();

                                context.set('loop', new Map([
                                  ['parent', context.get('_parent')],
                                  ['index0', 0],
                                  ['index', 1],
                                  ['first', true]
                                ]));
                                if ((typeof context.get('_seq') === 'object') && this.isCountable(context.get('_seq'))) {
                                    let length = this.count(context.get('_seq'));
                                    let loop = context.get('loop');
                                    loop.set('revindex0', length - 1);
                                    loop.set('revindex', length);
                                    loop.set('length', length);
                                    loop.set('last', (length === 1));
                                }
                                await this.iterate(context.get('_seq'), async (__key__, __value__) => {
                                    context.proxy[`_key`] = __key__;
                                    context.proxy[`content`] = __value__;
                                    outputBuffer.echo(`                                        <tab-panel>
                                            <div>
                                                `);
                                    if (this.evaluate(!(await this.environment.getTest('empty').traceableCallable(71, this.source)(...[await this.traceableMethod(this.getAttribute, 71, this.source)(this.environment, (context.has(`content`) ? context.get(`content`) : null), `intro`, new Map([]), `any`, false, false, false)])))) {
                                        outputBuffer.echo(`                                                    <div class="pb-8 pt-4">
                                                        `);
                                        outputBuffer.echo(await this.environment.getFunction('pattern').traceableCallable(73, this.source)(...[`rich_text`, new Map([[`text`, await this.traceableMethod(this.getAttribute, 73, this.source)(this.environment, (context.has(`content`) ? context.get(`content`) : null), `intro`, new Map([]), `any`, false, false, false)]]), `large`]));
                                        outputBuffer.echo(`
                                                    </div>
                                                `);
                                    }
                                    outputBuffer.echo(`                                                `);
                                    if (this.evaluate(!(await this.environment.getTest('empty').traceableCallable(76, this.source)(...[await this.traceableMethod(this.getAttribute, 76, this.source)(this.environment, await this.traceableMethod(this.getAttribute, 76, this.source)(this.environment, (context.has(`content`) ? context.get(`content`) : null), `intro_pattern`, new Map([]), `any`, false, false, false), `id`, new Map([]), `any`, false, false, false)])))) {
                                        outputBuffer.echo(`                                                    `);
                                        outputBuffer.echo(await this.environment.getFunction('pattern_preview').traceableCallable(77, this.source)(...[await this.traceableMethod(this.getAttribute, 77, this.source)(this.environment, await this.traceableMethod(this.getAttribute, 77, this.source)(this.environment, (context.has(`content`) ? context.get(`content`) : null), `intro_pattern`, new Map([]), `any`, false, false, false), `id`, new Map([]), `any`, false, false, false), ((await this.traceableMethod(this.getAttribute, 77, this.source)(this.environment, await this.traceableMethod(this.getAttribute, 77, this.source)(this.environment, (context.has(`content`) ? context.get(`content`) : null), `intro_pattern`, new Map([]), `any`, false, true, false), `data`, new Map([]), `any`, true, true, false)) ? (await this.environment.getFilter('default').traceableCallable(77, this.source)(...[await this.traceableMethod(this.getAttribute, 77, this.source)(this.environment, await this.traceableMethod(this.getAttribute, 77, this.source)(this.environment, (context.has(`content`) ? context.get(`content`) : null), `intro_pattern`, new Map([]), `any`, false, false, false), `data`, new Map([]), `any`, false, false, false), new Map([])])) : (new Map([]))), await this.traceableMethod(this.getAttribute, 77, this.source)(this.environment, await this.traceableMethod(this.getAttribute, 77, this.source)(this.environment, (context.has(`content`) ? context.get(`content`) : null), `intro_pattern`, new Map([]), `any`, false, false, false), `variant`, new Map([]), `any`, false, false, false)]));
                                        outputBuffer.echo(`
                                                `);
                                    }
                                    outputBuffer.echo(`                                                `);
                                    if (this.evaluate(!!(!(await this.traceableMethod(this.getAttribute, 79, this.source)(this.environment, (context.has(`content`) ? context.get(`content`) : null), `show_code_block`, new Map([]), `any`, true, true, false)) || this.compare(await this.traceableMethod(this.getAttribute, 79, this.source)(this.environment, (context.has(`content`) ? context.get(`content`) : null), `show_code_block`, new Map([]), `any`, false, false, false), true)))) {
                                        outputBuffer.echo(`                                                    `);
                                        outputBuffer.echo(await this.include(context, outputBuffer, `5ee81c73ae3d5cf8be0a6d3149035170a4f17d263cd67363e285322ac8d667ae`, new Map([[`variant`, `light`], [`codes`, new Map([[0, new Map([[`image_url`, await this.traceableMethod(this.getAttribute, 85, this.source)(this.environment, (context.has(`content`) ? context.get(`content`) : null), `image_url`, new Map([]), `any`, false, false, false)], [`content`, await this.traceableMethod(this.getAttribute, 86, this.source)(this.environment, (context.has(`content`) ? context.get(`content`) : null), `content`, new Map([]), `any`, false, false, false)]])]])]]), true, false, 80));
                                        outputBuffer.echo(`                                                `);
                                    }
                                    else {
                                        outputBuffer.echo(`                                                    `);
                                        outputBuffer.echo(await this.traceableMethod(this.getAttribute, 92, this.source)(this.environment, (context.has(`content`) ? context.get(`content`) : null), `content`, new Map([]), `any`, false, false, false));
                                        outputBuffer.echo(`
                                                `);
                                    }
                                    outputBuffer.echo(`                                            </div>
                                        </tab-panel>
                                    `);
                                    (() => {
                                        let loop = context.get('loop');
                                        loop.set('index0', loop.get('index0') + 1);
                                        loop.set('index', loop.get('index') + 1);
                                        loop.set('first', false);
                                        if (loop.has('length')) {
                                            loop.set('revindex0', loop.get('revindex0') - 1);
                                            loop.set('revindex', loop.get('revindex') - 1);
                                            loop.set('last', loop.get('revindex0') === 0);
                                        }
                                    })();
                                });
                                (() => {
                                    let parent = context.get('_parent');
                                    context.delete('_seq');
                                    context.delete('_iterated');
                                    context.delete('_key');
                                    context.delete('content');
                                    context.delete('_parent');
                                    context.delete('loop');
                                    for (let [k, v] of parent) {
                                        if (!context.has(k)) {
                                            context.set(k, v);
                                        }
                                    }
                                })();
                                outputBuffer.echo(`                                </div>
                            `);
                            }
                            outputBuffer.echo(`                        `);
                            context.proxy[`content`] = (() => {let tmp = outputBuffer.getAndClean(); return tmp === '' ? '' : new this.Markup(tmp, this.environment.getCharset());})();
                            outputBuffer.echo(`                        <tab-panel>
                            <div>
                                `);
                            if (this.evaluate(!(await this.environment.getTest('empty').traceableCallable(102, this.source)(...[await this.traceableMethod(this.getAttribute, 102, this.source)(this.environment, (context.has(`item`) ? context.get(`item`) : null), `intro`, new Map([]), `any`, false, false, false)])))) {
                                outputBuffer.echo(`                                    <div class="pb-6">
                                        `);
                                outputBuffer.echo(await this.include(context, outputBuffer, `563725f8328ab252f287626622ae33633670f6759457f7da8b318b2545056eb4`, new Map([[`text`, await this.traceableMethod(this.getAttribute, 104, this.source)(this.environment, (context.has(`item`) ? context.get(`item`) : null), `intro`, new Map([]), `any`, false, false, false)], [`variant`, `large`]]), false, false, 104));
                                outputBuffer.echo(`                                    </div>
                                `);
                            }
                            outputBuffer.echo(`                                <div>
                                    `);
                            outputBuffer.echo(await this.include(context, outputBuffer, await this.loadTemplate(`0fd855d34e0aeac9941a969535e3ce8c22ff5f0cad49c80c84b331e081743d80`, 108, 1), new Map([[`columns`, ((!!(await this.environment.getFilter('trim').traceableCallable(109, this.source)(...[(context.has(`code_block`) ? context.get(`code_block`) : null)]) && !(await this.environment.getTest('empty').traceableCallable(109, this.source)(...[await this.environment.getFilter('trim').traceableCallable(109, this.source)(...[(context.has(`content`) ? context.get(`content`) : null)])])))) ? (2) : (1))], [`cells`, new Map([[0, (context.has(`content`) ? context.get(`content`) : null)], [1, (context.has(`code_block`) ? context.get(`code_block`) : null)]])]]), false, false, 108));
                            outputBuffer.echo(`                                </div>
                            </div>
                        </tab-panel>
                    `);
                            (() => {
                                let loop = context.get('loop');
                                loop.set('index0', loop.get('index0') + 1);
                                loop.set('index', loop.get('index') + 1);
                                loop.set('first', false);
                                if (loop.has('length')) {
                                    loop.set('revindex0', loop.get('revindex0') - 1);
                                    loop.set('revindex', loop.get('revindex') - 1);
                                    loop.set('last', loop.get('revindex0') === 0);
                                }
                            })();
                        });
                        (() => {
                            let parent = context.get('_parent');
                            context.delete('_seq');
                            context.delete('_iterated');
                            context.delete('_key');
                            context.delete('item');
                            context.delete('_parent');
                            context.delete('loop');
                            for (let [k, v] of parent) {
                                if (!context.has(k)) {
                                    context.set(k, v);
                                }
                            }
                        })();
                        outputBuffer.echo(`                </div>
            </Tabs>
        `);
                        outputBuffer.echo((context.has(`content_bottom`) ? context.get(`content_bottom`) : null));
                        outputBuffer.echo(`
    `);
                    }]
                ]);
                aliases.proxy[`_self`] = this.aliases.proxy[`_self`] = this;
            }

            doGetParent(context) {
                return this.loadTemplate(`7b43b8ea671f6b748a04f57240aa1d9995b6e3129a965868a2d25d2d9ad4e36c`, 1).then((parent) => {
                    this.parent = parent;

                    return parent;
                });
            }

            async doDisplay(context, outputBuffer, blocks = new Map()) {
                let aliases = this.aliases.clone();

                await (await this.getParent(context)).display(context, this.merge(await this.getBlocks(), blocks), outputBuffer);
            }

            get isTraitable() {
                return false;
            }

        }],
        [1, class extends TwingTemplate {
            constructor(environment) {
                super(environment);

                this._source = new this.Source(`{% embed "@organisms/container/container.twig"
    with {
    width: width|default('default'),
    padding_top: padding_top|default('default'),
    padding_bottom: padding_bottom|default('default'),
    bg: bg
} %}
    {% block content %}


                    <div class="pb-10">
                        {% include "@atoms/rich-text/rich-text.twig" with {text: content, variant: 'large', text_align: content_align, width: content_width} only %}
                    </div>
                    {% if badge_headline is not empty %}
                        <div class="pb-2">
                            {% include "@atoms/rich-text/rich-text.twig" with {text: '<b>' ~ badge_headline ~ '</b>', variant: 'large'} only %}
                        </div>
                    {% endif %}
                    <Tabs>
                    <tab-list>
                        {% for item in data %}
                            <tab>
                            {% include "@atoms/badge/badge.twig" with {
                                text: item.title, variant: 'default',
                                round: false,
                                expand: true,
                                attributes: create_attribute().setAttribute(
                                    'x-click', 'key=\\'' ~ item.key ~'\\''
                                ).setAttribute (
                                    ':class', "{ 'bg-black text-white dark:bg-white dark:text-black': key === '" ~ item.key ~ "' }"
                                )
                            } only %}
                            </tab>
                        {% endfor %}
                    </tab-list>
                    {% for item in data %}
                        {% set code_block %}
                            {% if item.codes|length > 0 %}
                                {% include "@molecules/code-block/code-block.twig"
                                    with {
                                    variant: 'dark',
                                    hide_toolbar: item.hide_code_toolbar is defined ? item.hide_code_toolbar : false,
                                    codes: item.codes
                                } %}
                            {% endif %}
                        {% endset %}
                        {% set content %}
                            {% if item.contents|length > 0 %}
                                <div>
                                    <div {{ create_attribute().addClass([
                                        'pb-4 flex space-x-3',
                                        item.contents|length == 1 ? 'hidden'
                                    ]) }}>
                                            {% for content in item.contents %}

                                                {% include "@atoms/badge/badge.twig" with {
                                                    text: content.title, variant: 'default',
                                                    expand: true,
                                                    attributes: create_attribute().setAttribute(
                                                        'x-on:click', 'key=\\'' ~ content.key ~'\\''
                                                    ).setAttribute (
                                                        ':class', "{ 'bg-black text-white': key === '" ~ content.key ~ "' }"
                                                    )
                                                } only %}
                                            {% endfor %}
                                    </div>

                                    {% for content in item.contents %}
                                        <tab-panel>
                                            <div>
                                                {% if content.intro is not empty %}
                                                    <div class="pb-8 pt-4">
                                                        {{ pattern('rich_text', { text: content.intro }, 'large') }}
                                                    </div>
                                                {% endif %}
                                                {% if content.intro_pattern.id is not empty %}
                                                    {{ pattern_preview(content.intro_pattern.id, content.intro_pattern.data|default({}), content.intro_pattern.variant) }}
                                                {% endif %}
                                                {% if content.show_code_block is not defined or content.show_code_block == true %}
                                                    {% include "@molecules/code-block/code-block.twig"
                                                        with {
                                                        variant: 'light',
                                                        codes: [
                                                            {
                                                                image_url: content.image_url,
                                                                content: content.content
                                                            }
                                                        ]

                                                    } %}
                                                {% else %}
                                                    {{ content.content }}
                                                {% endif %}
                                            </div>
                                        </tab-panel>
                                    {% endfor %}
                                </div>
                            {% endif %}
                        {% endset %}
                        <tab-panel>
                            <div>
                                {% if item.intro is not empty %}
                                    <div class="pb-6">
                                        {% include "@atoms/rich-text/rich-text.twig" with {text: item.intro, variant: 'large'} only %}
                                    </div>
                                {% endif %}
                                <div>
                                    {% embed "@organisms/grid/grid.twig" with {
                                        columns: code_block|trim and content|trim is not empty ? 2 : 1,
                                        cells: [
                                            content,
                                            code_block
                                        ]
                                    } only %}
                                    {% endembed %}
                                </div>
                            </div>
                        </tab-panel>
                    {% endfor %}
                </div>
            </Tabs>
        {{ content_bottom }}
    {% endblock %}
{% endembed %}
`, `0fd855d34e0aeac9941a969535e3ce8c22ff5f0cad49c80c84b331e081743d80`);

                let aliases = new this.Context();
                aliases.proxy[`_self`] = this.aliases.proxy[`_self`] = this;
            }

            doGetParent(context) {
                return this.loadTemplate(`1d6fb948ec81c58226fc20ed9629dfeeda08e0d4d9758794a57a0ecc143c3408`, 108).then((parent) => {
                    this.parent = parent;

                    return parent;
                });
            }

            async doDisplay(context, outputBuffer, blocks = new Map()) {
                let aliases = this.aliases.clone();

                await (await this.getParent(context)).display(context, this.merge(await this.getBlocks(), blocks), outputBuffer);
            }

            get isTraitable() {
                return false;
            }

        }],
    ]);
};

    return module.exports;
})();

__webpack_require__(51426);
__webpack_require__(14392);
__webpack_require__(66745);
__webpack_require__(12999);
__webpack_require__(2952);
env.registerTemplatesModule(templatesModule, '0fd855d34e0aeac9941a969535e3ce8c22ff5f0cad49c80c84b331e081743d80');

let template = env.loadTemplate('0fd855d34e0aeac9941a969535e3ce8c22ff5f0cad49c80c84b331e081743d80');

module.exports = (context = {}) => {
    return template.then((template) => template.render(context));
};

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [730,153], () => (__webpack_exec__(51589)));
module.exports = __webpack_exports__;

})();