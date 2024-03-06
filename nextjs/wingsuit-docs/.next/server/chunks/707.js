exports.id = 707;
exports.ids = [707];
exports.modules = {

/***/ 43259:
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

/***/ 26391:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 20449, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 88379, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 71791, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 82226, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 41460, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 94542, 23))

/***/ }),

/***/ 35620:
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {

"use strict";

// EXTERNAL MODULE: ./source/default/patterns/03-organisms/next-links/next-links.twig
var next_links = __webpack_require__(87071);
var next_links_default = /*#__PURE__*/__webpack_require__.n(next_links);
// EXTERNAL MODULE: ../../packages/pattern/dist/index.js
var dist = __webpack_require__(84065);
// EXTERNAL MODULE: ./source/default/patterns/00-protons/index.js + 12 modules
var _00_protons = __webpack_require__(3598);
// EXTERNAL MODULE: ./source/default/patterns/02-molecules/next/next.twig
var next = __webpack_require__(59850);
var next_default = /*#__PURE__*/__webpack_require__.n(next);
// EXTERNAL MODULE: ./source/default/patterns/01-atoms/button/index.js
var _01_atoms_button = __webpack_require__(94293);
// EXTERNAL MODULE: ./source/default/patterns/01-atoms/button/button.wingsuit.yml
var button_wingsuit = __webpack_require__(78181);
;// CONCATENATED MODULE: ./source/default/patterns/02-molecules/next/next.wingsuit.yml
 
    (0,dist.getStorage)().addDefinitions({"next":{"use":"@molecules/next/next.twig","label":"Next","description":"Next block","fields":{"title":{"type":"textfield","label":"Title","preview":{"faker":"lorem.sentence"}},"text":{"type":"textfield","label":"Text","preview":{"faker":"lorem.text"}},"button":{"type":"pattern","label":"Button","preview":{"id":"button","variant":"default","settings":{"size":"medium","round":true}}}},"namespace":"molecules"}}); 
   const patternnext = (0,dist.getStorage)().loadPattern('next'); patternnext.setTemplate((next_default()));   /* harmony default export */ const next_wingsuit = ((0,dist.getStorage)().loadPattern('next'));
// EXTERNAL MODULE: ./source/default/patterns/02-molecules/next/next.css
var next_next = __webpack_require__(45853);
;// CONCATENATED MODULE: ./source/default/patterns/02-molecules/next/index.js
/**
 * Next
 */ // Module template




const next_name = "next";

;// CONCATENATED MODULE: ./source/default/patterns/03-organisms/next-links/next-links.wingsuit.yml
 
    (0,dist.getStorage)().addDefinitions({"next_links":{"use":"@organisms/next-links/next-links.twig","label":"Next Links","description":"Next Links on bottom of the page","dependencies":["next"],"fields":{"heading":{"type":"text","label":"Heading","preview":{"faker":"lorem.word"}},"items":{"type":"object","label":"Items"}},"namespace":"organisms"}}); 
   const patternnextLinks = (0,dist.getStorage)().loadPattern('next_links'); patternnextLinks.setTemplate((next_links_default()));   /* harmony default export */ const next_links_wingsuit = ((0,dist.getStorage)().loadPattern('next_links'));
;// CONCATENATED MODULE: ./source/default/patterns/03-organisms/next-links/index.js
/**
 * next-links
 */ 



/***/ }),

/***/ 25515:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Layout)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(56786);
// EXTERNAL MODULE: ./source/default/patterns/04-templates/docs/docs.twig
var docs = __webpack_require__(90420);
var docs_default = /*#__PURE__*/__webpack_require__.n(docs);
// EXTERNAL MODULE: ../../packages/pattern/dist/index.js
var dist = __webpack_require__(84065);
// EXTERNAL MODULE: ./source/default/patterns/03-organisms/grid/index.js
var grid = __webpack_require__(46588);
// EXTERNAL MODULE: ./source/default/patterns/03-organisms/grid/grid.wingsuit.yml
var grid_wingsuit = __webpack_require__(82681);
// EXTERNAL MODULE: ./source/default/patterns/03-organisms/container/index.js
var container = __webpack_require__(31450);
// EXTERNAL MODULE: ./source/default/patterns/03-organisms/container/container.wingsuit.yml
var container_wingsuit = __webpack_require__(23598);
// EXTERNAL MODULE: ./source/default/patterns/01-atoms/rich-text/index.js
var rich_text = __webpack_require__(4922);
// EXTERNAL MODULE: ./source/default/patterns/01-atoms/rich-text/rich-text.wingsuit.yml
var rich_text_wingsuit = __webpack_require__(28064);
// EXTERNAL MODULE: ./source/default/patterns/04-templates/page/index.js
var page = __webpack_require__(62159);
// EXTERNAL MODULE: ./source/default/patterns/04-templates/page/page.wingsuit.yml + 2 modules
var page_wingsuit = __webpack_require__(95657);
;// CONCATENATED MODULE: ./source/default/patterns/04-templates/docs/docs.wingsuit.yml
 
    (0,dist.getStorage)().addDefinitions({"docs":{"use":"@templates/docs/docs.twig","label":"Docs Page","dependencies":["grid","container","rich_text"],"extends":["page"],"namespace":"templates"}}); 
   const patterndocs = (0,dist.getStorage)().loadPattern('docs'); patterndocs.setTemplate((docs_default()));         /* harmony default export */ const docs_wingsuit = ((0,dist.getStorage)().loadPattern('docs'));
;// CONCATENATED MODULE: ./source/default/patterns/04-templates/docs/index.js
/**
 * page
 */ 


// EXTERNAL MODULE: ./src/component/wingsuit-pattern.tsx + 1 modules
var wingsuit_pattern = __webpack_require__(65869);
;// CONCATENATED MODULE: ./src/app/(docs)/layout.tsx


// eslint-disable-next-line import/no-unresolved


async function Layout({ children }) {
    return /*#__PURE__*/ jsx_runtime_.jsx(wingsuit_pattern/* default */.Z, {
        patternId: "docs",
        children: children
    });
}


/***/ }),

/***/ 45853:
/***/ (() => {



/***/ }),

/***/ 59850:
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

                this._source = new this.Source(`<div class="shadow bg-white flex py-3 px-6 w-full mb-8">
  <div class="flex-grow pr-4"><b>{{ title }}</b><br>{{ text }}</div>
  <div>
    {{ button }}
  </div>
</div>
`, `325258c52ec469497f487b189e10b9faef9a29e18c24e41ac990d954a81a0072`);

                let aliases = new this.Context();
                aliases.proxy[`_self`] = this.aliases.proxy[`_self`] = this;
            }

            async doDisplay(context, outputBuffer, blocks = new Map()) {
                let aliases = this.aliases.clone();

                outputBuffer.echo(`<div class="shadow bg-white flex py-3 px-6 w-full mb-8">
  <div class="flex-grow pr-4"><b>`);
                outputBuffer.echo((context.has(`title`) ? context.get(`title`) : null));
                outputBuffer.echo(`</b><br>`);
                outputBuffer.echo((context.has(`text`) ? context.get(`text`) : null));
                outputBuffer.echo(`</div>
  <div>
    `);
                outputBuffer.echo((context.has(`button`) ? context.get(`button`) : null));
                outputBuffer.echo(`
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

env.registerTemplatesModule(templatesModule, '325258c52ec469497f487b189e10b9faef9a29e18c24e41ac990d954a81a0072');

let template = env.loadTemplate('325258c52ec469497f487b189e10b9faef9a29e18c24e41ac990d954a81a0072');

module.exports = (context = {}) => {
    return template.then((template) => template.render(context));
};

/***/ }),

/***/ 87071:
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
 * next-links
 *
 * See next-links.wingsuit.yaml for documentation.
 */
#}

{#
  Classes
#}
{% set classes = [
  'pattern-next-links'
] %}

{#
  Attributes
#}
{% set attributes = attributes|default(create_attribute()) %}
{#
  Template
#}
<div class="pt-6 md:pt-14">
  <div class="p-2 my-2.5 uppercase font-bold">{{ heading }}</div>
  {% for item in items %}
    {{ pattern('next', {
      title: item.title,
      text: item.text,
      button: pattern('button',{
        text: item.link_title,
        round: true,
        size: 'medium',
        url: item.href,
      }, 'default')
    }) }}
  {% endfor %}
</div>
`, `928fb9bb9abdd6b6d1f5bbe0ab52b17ba8811932401dc80bc9539da5243c42cc`);

                let aliases = new this.Context();
                aliases.proxy[`_self`] = this.aliases.proxy[`_self`] = this;
            }

            async doDisplay(context, outputBuffer, blocks = new Map()) {
                let aliases = this.aliases.clone();

                outputBuffer.echo(`
`);
                context.proxy[`classes`] = new Map([[0, `pattern-next-links`]]);
                outputBuffer.echo(`
`);
                context.proxy[`attributes`] = (((context.has(`attributes`))) ? (await this.environment.getFilter('default').traceableCallable(20, this.source)(...[(context.has(`attributes`) ? context.get(`attributes`) : null), await this.environment.getFunction('create_attribute').traceableCallable(20, this.source)(...[])])) : (await this.environment.getFunction('create_attribute').traceableCallable(20, this.source)(...[])));
                outputBuffer.echo(`<div class="pt-6 md:pt-14">
  <div class="p-2 my-2.5 uppercase font-bold">`);
                outputBuffer.echo((context.has(`heading`) ? context.get(`heading`) : null));
                outputBuffer.echo(`</div>
  `);
                context.set('_parent', context.clone());

                await (async () => {
                    let c = this.ensureTraversable((context.has(`items`) ? context.get(`items`) : null));

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
                    outputBuffer.echo(await this.environment.getFunction('pattern').traceableCallable(27, this.source)(...[`next`, new Map([[`title`, await this.traceableMethod(this.getAttribute, 28, this.source)(this.environment, (context.has(`item`) ? context.get(`item`) : null), `title`, new Map([]), `any`, false, false, false)], [`text`, await this.traceableMethod(this.getAttribute, 29, this.source)(this.environment, (context.has(`item`) ? context.get(`item`) : null), `text`, new Map([]), `any`, false, false, false)], [`button`, await this.environment.getFunction('pattern').traceableCallable(30, this.source)(...[`button`, new Map([[`text`, await this.traceableMethod(this.getAttribute, 31, this.source)(this.environment, (context.has(`item`) ? context.get(`item`) : null), `link_title`, new Map([]), `any`, false, false, false)], [`round`, true], [`size`, `medium`], [`url`, await this.traceableMethod(this.getAttribute, 34, this.source)(this.environment, (context.has(`item`) ? context.get(`item`) : null), `href`, new Map([]), `any`, false, false, false)]]), `default`])]])]));
                    outputBuffer.echo(`
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

env.registerTemplatesModule(templatesModule, '928fb9bb9abdd6b6d1f5bbe0ab52b17ba8811932401dc80bc9539da5243c42cc');

let template = env.loadTemplate('928fb9bb9abdd6b6d1f5bbe0ab52b17ba8811932401dc80bc9539da5243c42cc');

module.exports = (context = {}) => {
    return template.then((template) => template.render(context));
};

/***/ }),

/***/ 90420:
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
 * Grid component
 *
 * See component.wingsuit.yml for usage.
 */
#}

{% set body %}
  {{ pattern('rich_text', {text: '<MainContent/>'}, 'default') }}
{% endset %}

{% include "@templates/site-container.twig" with {
  menu: pattern_preview('menu', {}, 'primary'),
  top_menu: pattern_preview('menu', {}, 'top'),
  footer_menu: null,
  show_hamburger: true,
  content: body,
  display_menu: true
} %}

`, `ba6584126a0ce6c50b90a1a02d23b2f462098fb621bea6292fada2be7a7131e8`);

                let aliases = new this.Context();
                aliases.proxy[`_self`] = this.aliases.proxy[`_self`] = this;
            }

            async doDisplay(context, outputBuffer, blocks = new Map()) {
                let aliases = this.aliases.clone();

                outputBuffer.echo(`
`);
                outputBuffer.start();
                outputBuffer.echo(`  `);
                outputBuffer.echo(await this.environment.getFunction('pattern').traceableCallable(11, this.source)(...[`rich_text`, new Map([[`text`, `<MainContent/>`]]), `default`]));
                outputBuffer.echo(`
`);
                context.proxy[`body`] = (() => {let tmp = outputBuffer.getAndClean(); return tmp === '' ? '' : new this.Markup(tmp, this.environment.getCharset());})();
                outputBuffer.echo(`
`);
                outputBuffer.echo(await this.include(context, outputBuffer, `9abd0e16b6b64380f565fa52ff93684586c8c3203d5734650fb47bfa04f056d2`, new Map([[`menu`, await this.environment.getFunction('pattern_preview').traceableCallable(15, this.source)(...[`menu`, new Map([]), `primary`])], [`top_menu`, await this.environment.getFunction('pattern_preview').traceableCallable(16, this.source)(...[`menu`, new Map([]), `top`])], [`footer_menu`, null], [`show_hamburger`, true], [`content`, (context.has(`body`) ? context.get(`body`) : null)], [`display_menu`, true]]), true, false, 14));
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

__webpack_require__(85007);
env.registerTemplatesModule(templatesModule, 'ba6584126a0ce6c50b90a1a02d23b2f462098fb621bea6292fada2be7a7131e8');

let template = env.loadTemplate('ba6584126a0ce6c50b90a1a02d23b2f462098fb621bea6292fada2be7a7131e8');

module.exports = (context = {}) => {
    return template.then((template) => template.render(context));
};

/***/ })

};
;