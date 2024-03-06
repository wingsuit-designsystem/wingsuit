exports.id = 153;
exports.ids = [153];
exports.modules = {

/***/ 50525:
/***/ ((module) => {

function webpackEmptyContext(req) {
	var e = new Error("Cannot find module '" + req + "'");
	e.code = 'MODULE_NOT_FOUND';
	throw e;
}
webpackEmptyContext.keys = () => ([]);
webpackEmptyContext.resolve = webpackEmptyContext;
webpackEmptyContext.id = 50525;
module.exports = webpackEmptyContext;

/***/ }),

/***/ 76032:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/colors_scss.svg";

/***/ }),

/***/ 64064:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/colors_tailwind.svg";

/***/ }),

/***/ 43235:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/logo.svg";

/***/ }),

/***/ 1019:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/close.svg";

/***/ }),

/***/ 11540:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/colors_export.png";

/***/ }),

/***/ 33287:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/component_avatar.png";

/***/ }),

/***/ 23118:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/docs_export.png";

/***/ }),

/***/ 79912:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/docs_mdx.png";

/***/ }),

/***/ 86324:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 17919))

/***/ }),

/***/ 17919:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppContextProvider: () => (/* binding */ AppContextProvider),
/* harmony export */   useAppContext: () => (/* binding */ useAppContext)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(18038);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
// app/context/theme.js
/* __next_internal_client_entry_do_not_use__ AppContextProvider,useAppContext auto */ 

const AppContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)({});
const AppContextProvider = ({ children })=>{
    const [feature, setFeature] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("settings");
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(AppContext.Provider, {
        value: {
            feature,
            setFeature
        },
        children: children
    });
};
const useAppContext = ()=>(0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(AppContext);


/***/ }),

/***/ 50379:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ WingsuitLink)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(24288);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* __next_internal_client_entry_do_not_use__ default auto */ 

function WingsuitLink({ children, wingsuitClassName, href }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
        href: href,
        className: href === "demo" ? `${wingsuitClassName} bg-teal-300` : wingsuitClassName,
        children: children
    });
}


/***/ }),

/***/ 3598:
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {

"use strict";

// EXTERNAL MODULE: ./source/default/patterns/01-atoms/image/image.twig
var image_image = __webpack_require__(46042);
// EXTERNAL MODULE: ./source/default/patterns/01-atoms/image/_image--background.twig
var _image_background = __webpack_require__(63452);
// EXTERNAL MODULE: ./source/default/patterns/01-atoms/image/_image--image.twig
var _image_image = __webpack_require__(12369);
;// CONCATENATED MODULE: ./source/default/patterns/01-atoms/image/images/colors_export.png
const colors_export_namespaceObject = __webpack_require__.p + "images/colors_export.png";
;// CONCATENATED MODULE: ./source/default/patterns/01-atoms/image/images/colors_scss.svg
const colors_scss_namespaceObject = __webpack_require__.p + "images/colors_scss.svg";
;// CONCATENATED MODULE: ./source/default/patterns/01-atoms/image/images/colors_tailwind.svg
const colors_tailwind_namespaceObject = __webpack_require__.p + "images/colors_tailwind.svg";
;// CONCATENATED MODULE: ./source/default/patterns/01-atoms/image/images/component_avatar.png
const component_avatar_namespaceObject = __webpack_require__.p + "images/component_avatar.png";
;// CONCATENATED MODULE: ./source/default/patterns/01-atoms/image/images/docs_export.png
const docs_export_namespaceObject = __webpack_require__.p + "images/docs_export.png";
;// CONCATENATED MODULE: ./source/default/patterns/01-atoms/image/images/docs_mdx.png
const docs_mdx_namespaceObject = __webpack_require__.p + "images/docs_mdx.png";
;// CONCATENATED MODULE: ./source/default/patterns/01-atoms/image/index.js
/**
 * image
 */ // Module template










// EXTERNAL MODULE: ../../packages/pattern/dist/index.js
var dist = __webpack_require__(84065);
// EXTERNAL MODULE: ./source/default/patterns/01-atoms/logo/logo.twig
var logo = __webpack_require__(21490);
var logo_default = /*#__PURE__*/__webpack_require__.n(logo);
;// CONCATENATED MODULE: ./source/default/patterns/01-atoms/logo/logo.wingsuit.yml
 
    (0,dist.getStorage)().addDefinitions({"logo":{"use":"@atoms/logo/logo.twig","label":"Logo","description":"Simple component to display the site logo.","namespace":"atoms"}}); 
   const patternlogo = (0,dist.getStorage)().loadPattern('logo'); patternlogo.setTemplate((logo_default())); /* harmony default export */ const logo_wingsuit = ((0,dist.getStorage)().loadPattern('logo'));
;// CONCATENATED MODULE: ./source/default/patterns/01-atoms/logo/images/logo.svg
const images_logo_namespaceObject = __webpack_require__.p + "images/logo.svg";
;// CONCATENATED MODULE: ./source/default/patterns/01-atoms/logo/index.js
/**
 * logo
 */ 



// EXTERNAL MODULE: ./source/default/patterns/01-atoms/svg/svg.twig
var svg = __webpack_require__(60427);
// EXTERNAL MODULE: ./source/default/patterns/01-atoms/svg/_svg--icon.twig
var _svg_icon = __webpack_require__(40881);
;// CONCATENATED MODULE: ./source/default/patterns/01-atoms/svg/svg/icons/close.svg
const close_namespaceObject = __webpack_require__.p + "images/close.svg";
;// CONCATENATED MODULE: ./source/default/patterns/01-atoms/svg/index.js
/**
 * svg
 */ // Module template




;// CONCATENATED MODULE: ./source/default/patterns/00-protons/index.js
/**
 * Base css generation and global js logic.
 */ 




/***/ }),

/***/ 94293:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* unused harmony export name */
/* harmony import */ var protons__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3598);
/* harmony import */ var _button_twig__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5086);
/* harmony import */ var _button_twig__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_button_twig__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _button_wingsuit_yml__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(78181);
/**
 * button
 */ // Module dependencies

// Module template


const name = "button";


/***/ }),

/***/ 4922:
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony import */ var _rich_text_wingsuit_yml__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(28064);
/* harmony import */ var _rich_text_twig__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(66745);
/* harmony import */ var _rich_text_twig__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_rich_text_twig__WEBPACK_IMPORTED_MODULE_1__);
/**
 * rich-text
 */ 



/***/ }),

/***/ 31450:
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony import */ var _container_wingsuit_yml__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(23598);
/* harmony import */ var _container_twig__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(51426);
/* harmony import */ var _container_twig__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_container_twig__WEBPACK_IMPORTED_MODULE_1__);
/**
 * container
 */ 



/***/ }),

/***/ 46588:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* unused harmony export name */
/* harmony import */ var protons__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3598);
/**
 * basicPage
 */ 
const name = "grid";


/***/ }),

/***/ 62159:
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony import */ var _page_twig__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(14947);
/* harmony import */ var _page_twig__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_page_twig__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _page_wingsuit_yml__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(95657);
/**
 * page
 */ 



/***/ }),

/***/ 72234:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ RootLayout),
  metadata: () => (/* binding */ metadata)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(56786);
// EXTERNAL MODULE: ../../node_modules/next/font/google/target.css?{"path":"src/app/layout.tsx","import":"Inter","arguments":[{"subsets":["latin"]}],"variableName":"inter"}
var layout_tsx_import_Inter_arguments_subsets_latin_variableName_inter_ = __webpack_require__(15261);
var layout_tsx_import_Inter_arguments_subsets_latin_variableName_inter_default = /*#__PURE__*/__webpack_require__.n(layout_tsx_import_Inter_arguments_subsets_latin_variableName_inter_);
// EXTERNAL MODULE: ./source/default/tokens/tokens.css
var tokens = __webpack_require__(91729);
// EXTERNAL MODULE: ../../node_modules/next/dist/build/webpack/loaders/next-flight-loader/module-proxy.js
var module_proxy = __webpack_require__(60391);
;// CONCATENATED MODULE: ./src/app/context/app.tsx

const proxy = (0,module_proxy.createProxy)(String.raw`/home/michaelzemui/projects/wingsuit/wingsuit/nextjs/wingsuit-docs/src/app/context/app.tsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule, $$typeof } = proxy;
const __default__ = proxy.default;

const e0 = proxy["AppContextProvider"];

const e1 = proxy["useAppContext"];

;// CONCATENATED MODULE: ./src/app/layout.tsx




const metadata = {
    title: "Create Next App",
    description: "Generated by create next app"
};
function RootLayout({ children }) {
    return /*#__PURE__*/ jsx_runtime_.jsx("html", {
        lang: "en",
        children: /*#__PURE__*/ jsx_runtime_.jsx(e0, {
            children: /*#__PURE__*/ jsx_runtime_.jsx("body", {
                className: (layout_tsx_import_Inter_arguments_subsets_latin_variableName_inter_default()).className,
                children: children
            })
        })
    });
}


/***/ }),

/***/ 65869:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Z: () => (/* binding */ WingsuitPattern)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(56786);
// EXTERNAL MODULE: ../../packages/pattern/dist/index.js
var dist = __webpack_require__(84065);
// EXTERNAL MODULE: ../../node_modules/next/dist/build/webpack/loaders/next-flight-loader/module-proxy.js
var module_proxy = __webpack_require__(60391);
;// CONCATENATED MODULE: ./src/component/wingsuit-link.tsx

const proxy = (0,module_proxy.createProxy)(String.raw`/home/michaelzemui/projects/wingsuit/wingsuit/nextjs/wingsuit-docs/src/component/wingsuit-link.tsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule, $$typeof } = proxy;
const __default__ = proxy.default;


/* harmony default export */ const wingsuit_link = (__default__);
// EXTERNAL MODULE: ../../node_modules/html-react-parser/index.mjs
var html_react_parser = __webpack_require__(3922);
// EXTERNAL MODULE: ../../packages/pattern/dist/Pattern.js
var Pattern = __webpack_require__(28885);
// EXTERNAL MODULE: ../../node_modules/react-tabs/lib/index.js
var lib = __webpack_require__(10192);
// EXTERNAL MODULE: ../../node_modules/react-tabs/style/react-tabs.css
var react_tabs = __webpack_require__(1113);
// EXTERNAL MODULE: ../../node_modules/next/dist/compiled/react/react.shared-subset.js
var react_shared_subset = __webpack_require__(36996);
;// CONCATENATED MODULE: ./src/component/wingsuit-pattern.tsx





// eslint-disable-next-line import/no-extraneous-dependencies



const components = {
    tab: lib.Tab,
    tabs: lib.Tabs,
    "tab-list": lib.TabList
};
async function WingsuitPattern({ children, patternId, variantId, variables }) {
    const markup = await dist.renderer.renderPatternPreview(patternId, variables, variantId);
    const options = {
        replace: (domNode)=>{
            const domName = domNode.name;
            if (domNode instanceof html_react_parser/* Element */.W_ && domNode.type === "tag" && domNode.name === "maincontent") {
                return children;
            }
            if (domNode instanceof html_react_parser/* Element */.W_ && domNode.type === "tag" && domNode.name === "a") {
                return /*#__PURE__*/ jsx_runtime_.jsx(wingsuit_link, {
                    href: domNode.attribs.href,
                    wingsuitClassName: domNode.attribs.class,
                    children: (0,html_react_parser/* domToReact */.du)(domNode.children)
                });
            }
            if (domNode instanceof html_react_parser/* Element */.W_ && domNode.type === "tag" && domName === "tab-panel") {
                return /*#__PURE__*/ jsx_runtime_.jsx(lib.TabPanel, {
                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        children: "DEMO"
                    })
                });
            }
            if (domNode instanceof html_react_parser/* Element */.W_ && domNode.type === "tag" && components[domName]) {
                return /*#__PURE__*/ react_shared_subset.createElement(components[domName], {}, (0,html_react_parser/* domToReact */.du)(domNode.children, options));
            }
            return domNode;
        }
    };
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: (0,html_react_parser/* default */.ZP)(markup, options)
    });
}
WingsuitPattern.defaultProps = {
    variantId: Pattern["default"].DEFAULT_VARIANT_NAME
};


/***/ }),

/***/ 88487:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

function _typeof(o) {
    "@babel/helpers - typeof";
    return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o) {
        return typeof o;
    } : function(o) {
        return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
    }, _typeof(o);
}
__webpack_require__(32639);
__webpack_require__(54944);
__webpack_require__(21601);
__webpack_require__(92230);
__webpack_require__(85507);
__webpack_require__(58810);
__webpack_require__(8351);
__webpack_require__(30343);
__webpack_require__(9061);
__webpack_require__(13951);
__webpack_require__(1554);
__webpack_require__(97950);
__webpack_require__(46833);
Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports["default"] = exports.MultiValueTypes = void 0;
__webpack_require__(51624);
__webpack_require__(71740);
__webpack_require__(84730);
__webpack_require__(31046);
var _Property2 = _interopRequireDefault(__webpack_require__(99270));
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        "default": obj
    };
}
function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}
function _defineProperties(target, props) {
    for(var i = 0; i < props.length; i++){
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor);
    }
}
function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    Object.defineProperty(Constructor, "prototype", {
        writable: false
    });
    return Constructor;
}
function _toPropertyKey(arg) {
    var key = _toPrimitive(arg, "string");
    return _typeof(key) === "symbol" ? key : String(key);
}
function _toPrimitive(input, hint) {
    if (_typeof(input) !== "object" || input === null) return input;
    var prim = input[Symbol.toPrimitive];
    if (prim !== undefined) {
        var res = prim.call(input, hint || "default");
        if (_typeof(res) !== "object") return res;
        throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return (hint === "string" ? String : Number)(input);
}
function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function");
    }
    subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
            value: subClass,
            writable: true,
            configurable: true
        }
    });
    Object.defineProperty(subClass, "prototype", {
        writable: false
    });
    if (superClass) _setPrototypeOf(subClass, superClass);
}
function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) {
        o.__proto__ = p;
        return o;
    };
    return _setPrototypeOf(o, p);
}
function _createSuper(Derived) {
    var hasNativeReflectConstruct = _isNativeReflectConstruct();
    return function _createSuperInternal() {
        var Super = _getPrototypeOf(Derived), result;
        if (hasNativeReflectConstruct) {
            var NewTarget = _getPrototypeOf(this).constructor;
            result = Reflect.construct(Super, arguments, NewTarget);
        } else {
            result = Super.apply(this, arguments);
        }
        return _possibleConstructorReturn(this, result);
    };
}
function _possibleConstructorReturn(self, call) {
    if (call && (_typeof(call) === "object" || typeof call === "function")) {
        return call;
    } else if (call !== void 0) {
        throw new TypeError("Derived constructors may only return object or undefined");
    }
    return _assertThisInitialized(self);
}
function _assertThisInitialized(self) {
    if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return self;
}
function _isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;
    try {
        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
        return true;
    } catch (e) {
        return false;
    }
}
function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _getPrototypeOf(o);
}
var MultiValueTypes = /*#__PURE__*/ function(MultiValueTypes) {
    MultiValueTypes["items"] = "items";
    MultiValueTypes["field_items"] = "field_items";
    MultiValueTypes["single_value"] = "single_value";
    return MultiValueTypes;
}({});
exports.MultiValueTypes = MultiValueTypes;
var Field = /*#__PURE__*/ function(_Property) {
    _inherits(Field, _Property);
    var _super = _createSuper(Field);
    function Field() {
        var _this;
        _classCallCheck(this, Field);
        for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++){
            args[_key] = arguments[_key];
        }
        _this = _super.call.apply(_super, [
            this
        ].concat(args));
        _this.multiValue = void 0;
        return _this;
    }
    _createClass(Field, [
        {
            key: "multiValueType",
            value: function multiValueType() {
                return this.multiValue;
            }
        },
        {
            key: "setMultiValueType",
            value: function setMultiValueType(multiValue) {
                this.multiValue = multiValue;
            }
        }
    ]);
    return Field;
}(_Property2["default"]);
exports["default"] = Field;


/***/ }),

/***/ 36568:
/***/ (() => {

"use strict";



/***/ }),

/***/ 58184:
/***/ (() => {

"use strict";



/***/ }),

/***/ 28885:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

__webpack_require__(92230);
__webpack_require__(13951);
__webpack_require__(1554);
__webpack_require__(97950);
__webpack_require__(46833);
__webpack_require__(28266);
__webpack_require__(79761);
__webpack_require__(33622);
__webpack_require__(97313);
__webpack_require__(53965);
__webpack_require__(88219);
__webpack_require__(65223);
Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports["default"] = void 0;
__webpack_require__(8351);
__webpack_require__(30343);
__webpack_require__(74376);
__webpack_require__(65710);
__webpack_require__(51624);
__webpack_require__(46260);
__webpack_require__(93772);
__webpack_require__(90840);
__webpack_require__(63704);
__webpack_require__(32639);
__webpack_require__(82365);
__webpack_require__(50069);
__webpack_require__(39870);
__webpack_require__(85507);
__webpack_require__(58810);
__webpack_require__(9061);
var _PatternVariant = _interopRequireDefault(__webpack_require__(43099));
var _Setting = _interopRequireDefault(__webpack_require__(43946));
var _Field = _interopRequireWildcard(__webpack_require__(88487));
var _utils = __webpack_require__(17407);
function _getRequireWildcardCache(nodeInterop) {
    if (typeof WeakMap !== "function") return null;
    var cacheBabelInterop = new WeakMap();
    var cacheNodeInterop = new WeakMap();
    return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) {
        return nodeInterop ? cacheNodeInterop : cacheBabelInterop;
    })(nodeInterop);
}
function _interopRequireWildcard(obj, nodeInterop) {
    if (!nodeInterop && obj && obj.__esModule) {
        return obj;
    }
    if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
        return {
            "default": obj
        };
    }
    var cache = _getRequireWildcardCache(nodeInterop);
    if (cache && cache.has(obj)) {
        return cache.get(obj);
    }
    var newObj = {};
    var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for(var key in obj){
        if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
            var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
            if (desc && (desc.get || desc.set)) {
                Object.defineProperty(newObj, key, desc);
            } else {
                newObj[key] = obj[key];
            }
        }
    }
    newObj["default"] = obj;
    if (cache) {
        cache.set(obj, newObj);
    }
    return newObj;
}
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        "default": obj
    };
}
function _typeof(o) {
    "@babel/helpers - typeof";
    return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o) {
        return typeof o;
    } : function(o) {
        return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
    }, _typeof(o);
}
function _slicedToArray(arr, i) {
    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}
function _nonIterableRest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _iterableToArrayLimit(r, l) {
    var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
    if (null != t) {
        var e, n, i, u, a = [], f = !0, o = !1;
        try {
            if (i = (t = t.call(r)).next, 0 === l) {
                if (Object(t) !== t) return;
                f = !1;
            } else for(; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0);
        } catch (r) {
            o = !0, n = r;
        } finally{
            try {
                if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return;
            } finally{
                if (o) throw n;
            }
        }
        return a;
    }
}
function _arrayWithHoles(arr) {
    if (Array.isArray(arr)) return arr;
}
function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}
function _defineProperties(target, props) {
    for(var i = 0; i < props.length; i++){
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor);
    }
}
function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    Object.defineProperty(Constructor, "prototype", {
        writable: false
    });
    return Constructor;
}
function _toPropertyKey(arg) {
    var key = _toPrimitive(arg, "string");
    return _typeof(key) === "symbol" ? key : String(key);
}
function _toPrimitive(input, hint) {
    if (_typeof(input) !== "object" || input === null) return input;
    var prim = input[Symbol.toPrimitive];
    if (prim !== undefined) {
        var res = prim.call(input, hint || "default");
        if (_typeof(res) !== "object") return res;
        throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return (hint === "string" ? String : Number)(input);
}
var Pattern = /*#__PURE__*/ function() {
    function Pattern(id, definition, storage) {
        var _definition$icon_path;
        _classCallCheck(this, Pattern);
        this.id = void 0;
        this.label = void 0;
        this.description = void 0;
        this.iconPath = void 0;
        this.template = void 0;
        this.namespace = void 0;
        this.parameters = void 0;
        this.use = void 0;
        this.visible = void 0;
        this.definition = void 0;
        this.patternVariants = [];
        this.defaultVariant = void 0;
        this.storage = void 0;
        this.id = id;
        this.label = definition.label;
        this.description = definition.description;
        this.visible = definition.visible;
        this.storage = storage;
        this.use = definition.use;
        this.iconPath = (_definition$icon_path = definition.icon_path) === null || _definition$icon_path === void 0 ? void 0 : _definition$icon_path.replace("ws-assets://", "");
        this.namespace = definition.namespace;
        this.parameters = definition.parameters;
        this.definition = definition;
        if (definition.template) {
            this.setTemplate(definition.template);
        }
        this.defaultVariant = new _PatternVariant["default"]("__default", this, Pattern.DEFAULT_VARIANT_NAME, this.use, this.label, this.description, definition.configuration);
        this.initializeVariants();
    }
    _createClass(Pattern, [
        {
            key: "getUse",
            value: function getUse() {
                return this.use;
            }
        },
        {
            key: "getStoryName",
            value: function getStoryName() {
                return "".concat(this.getNamespace(), "/").concat(this.getLabel());
            }
        },
        {
            key: "getLabel",
            value: function getLabel() {
                return this.label;
            }
        },
        {
            key: "getIconPath",
            value: function getIconPath() {
                return this.iconPath;
            }
        },
        {
            key: "setIconPath",
            value: function setIconPath(iconPath) {
                this.iconPath = iconPath;
            }
        },
        {
            key: "getNamespace",
            value: function getNamespace() {
                return this.namespace;
            }
        },
        {
            key: "setNamespace",
            value: function setNamespace(namespace) {
                this.namespace = namespace;
            }
        },
        {
            key: "getDescription",
            value: function getDescription() {
                return this.description;
            }
        },
        {
            key: "getId",
            value: function getId() {
                return this.id;
            }
        },
        {
            key: "getDefaultVariant",
            value: function getDefaultVariant() {
                return this.defaultVariant;
            }
        },
        {
            key: "isVisible",
            value: function isVisible(app) {
                if (this.visible == null || this.visible === "") {
                    return true;
                }
                var apps = this.visible.split("|");
                for(var i = 0; i < apps.length; i += 1){
                    if (apps[i].trim() === app) {
                        return true;
                    }
                }
                return false;
            }
        },
        {
            key: "getPatternVariants",
            value: function getPatternVariants() {
                return this.patternVariants;
            }
        },
        {
            key: "getVariant",
            value: function getVariant() {
                var id = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : Pattern.DEFAULT_VARIANT_NAME;
                var variantId = id === "" || id == null ? Pattern.DEFAULT_VARIANT_NAME : id;
                if (this.patternVariants[variantId] == null) {
                    throw new Error('Variant "'.concat(id, '" not found in pattern "').concat(this.getId(), '". Possible Variants are: "').concat(Object.keys(this.patternVariants).join(", "), '"'));
                }
                return this.patternVariants[variantId];
            }
        },
        {
            key: "getTemplate",
            value: function getTemplate() {
                return this.template;
            }
        },
        {
            key: "setTemplate",
            value: function setTemplate(template) {
                this.template = template;
            }
        },
        {
            key: "getParameters",
            value: function getParameters() {
                return this.parameters;
            }
        },
        {
            key: "getStorage",
            value: function getStorage() {
                return this.storage;
            }
        },
        {
            key: "initializeVariants",
            value: function initializeVariants() {
                var _this$definition$sett, _this$definition$fiel, _this$definition$conf, _this$definition$vari, _this = this;
                var variantKeys = [];
                var settings = (_this$definition$sett = this.definition.settings) !== null && _this$definition$sett !== void 0 ? _this$definition$sett : {};
                var fields = (_this$definition$fiel = this.definition.fields) !== null && _this$definition$fiel !== void 0 ? _this$definition$fiel : {};
                var settingsConfiguration = {};
                var configuration = (_this$definition$conf = this.definition.configuration) !== null && _this$definition$conf !== void 0 ? _this$definition$conf : {};
                var variantsDefinitions = (_this$definition$vari = this.definition.variants) !== null && _this$definition$vari !== void 0 ? _this$definition$vari : {};
                Object.keys(variantsDefinitions).forEach(function(key) {
                    variantKeys.push(key);
                });
                if (variantKeys.length === 0) {
                    variantKeys.push(Pattern.DEFAULT_VARIANT_NAME);
                }
                var isFirst = true;
                variantKeys.forEach(function(variantKey) {
                    var _variantsDefinitions$, _variantDefinition$la, _variantDefinition$us, _variantDefinition$de;
                    var cleanedSettings = {};
                    Object.entries(settings).forEach(function(_ref) {
                        var _ref2 = _slicedToArray(_ref, 2), name = _ref2[0], setting = _ref2[1];
                        if (setting.options) {
                            var options = {};
                            Object.entries(setting.options).forEach(function(_ref3) {
                                var _ref4 = _slicedToArray(_ref3, 2), optionName = _ref4[0], option = _ref4[1];
                                if (option.configuration) {
                                    if (!settingsConfiguration[name]) {
                                        settingsConfiguration[name] = {};
                                    }
                                    settingsConfiguration[name][optionName] = option.configuration;
                                    options[optionName] = option.label;
                                } else {
                                    options[optionName] = option;
                                }
                            });
                            cleanedSettings[name] = options;
                        }
                    });
                    var variantDefinition = (_variantsDefinitions$ = variantsDefinitions[variantKey]) !== null && _variantsDefinitions$ !== void 0 ? _variantsDefinitions$ : {};
                    var label = (_variantDefinition$la = variantDefinition.label) !== null && _variantDefinition$la !== void 0 ? _variantDefinition$la : _this.label;
                    var use = (_variantDefinition$us = variantDefinition.use) !== null && _variantDefinition$us !== void 0 ? _variantDefinition$us : _this.use;
                    var description = (_variantDefinition$de = variantDefinition.description) !== null && _variantDefinition$de !== void 0 ? _variantDefinition$de : "";
                    var variantConfiguration = variantDefinition.configuration != null ? variantDefinition.configuration : {};
                    var mergedConfiguration = (0, _utils.mergeDeep)(configuration, settingsConfiguration, variantConfiguration);
                    var variant = new _PatternVariant["default"](variantKey, _this, variantKey, use, label, description, mergedConfiguration);
                    if (isFirst) {
                        _this.defaultVariant = variant;
                    }
                    isFirst = false;
                    Object.keys(settings).forEach(function(key) {
                        var _settings$key$descrip, _settings$key$states, _settings$key$require;
                        var setting = new _Setting["default"](key, settings[key].type, settings[key].label, (_settings$key$descrip = settings[key].description) !== null && _settings$key$descrip !== void 0 ? _settings$key$descrip : "", settings[key].preview, variant);
                        setting.setStates((_settings$key$states = settings[key].states) !== null && _settings$key$states !== void 0 ? _settings$key$states : {});
                        setting.setRequired((_settings$key$require = settings[key].required) !== null && _settings$key$require !== void 0 ? _settings$key$require : false);
                        setting.setOptions(cleanedSettings[key]);
                        if (settings[key].default_value) {
                            var _settings$key$default;
                            setting.setDefaultValue((_settings$key$default = settings[key].default_value) !== null && _settings$key$default !== void 0 ? _settings$key$default : "");
                        }
                        if (settings[key].default_value) {
                            var _settings$key$default2;
                            setting.setPreview((_settings$key$default2 = settings[key].default_value) !== null && _settings$key$default2 !== void 0 ? _settings$key$default2 : null);
                        }
                        if (!setting.getPreview() && settings[key].required && settings[key].type === "select") {
                            var keys = Object.keys(cleanedSettings[key]);
                            if (keys.length > 0) {
                                var firstOption = keys[0];
                                setting.setPreview(firstOption);
                            }
                        }
                        variant.addSetting(setting);
                    });
                    Object.keys(fields).forEach(function(key) {
                        var field = new _Field["default"](key, fields[key].type, fields[key].label, fields[key].description, fields[key].preview, variant);
                        field.setMultiValueType(_Field.MultiValueTypes.single_value);
                        if (fields[key].multi_value_type != null) {
                            field.setMultiValueType(_Field.MultiValueTypes[fields[key].multi_value_type]);
                        } else if (Array.isArray(fields[key].preview)) {
                            field.setMultiValueType(_Field.MultiValueTypes.single_value);
                        }
                        variant.addField(field);
                    });
                    if (variantDefinition) {
                        if (variantDefinition.settings) {
                            Object.keys(variantDefinition.settings).forEach(function(key) {
                                var setting = variant.getSetting(key);
                                if (setting) {
                                    // @ts-ignore
                                    setting.setPreview(variantDefinition.settings[key]);
                                    setting.setEnable(false);
                                } else {
                                    console.warn("Invalid variant configuration. Setting with ".concat(key, " doesn't exists in variant. ").concat(variant.getId()));
                                }
                            });
                        }
                        if (variantDefinition.fields) {
                            Object.keys(variantDefinition.fields).forEach(function(key) {
                                var field = variant.getField(key);
                                // @ts-ignore
                                field.setPreview(variantDefinition.fields[key]);
                                field.setEnable(false);
                            });
                        }
                    }
                    _this.patternVariants[variantKey] = variant;
                });
            }
        }
    ]);
    return Pattern;
}();
exports["default"] = Pattern;
Pattern.DEFAULT_VARIANT_NAME = "__default";


/***/ }),

/***/ 22426:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

__webpack_require__(85507);
__webpack_require__(58810);
__webpack_require__(8351);
__webpack_require__(30343);
__webpack_require__(9061);
__webpack_require__(92230);
__webpack_require__(39870);
__webpack_require__(13951);
__webpack_require__(28266);
__webpack_require__(79761);
__webpack_require__(33622);
__webpack_require__(97313);
__webpack_require__(53965);
__webpack_require__(74376);
function _typeof(o) {
    "@babel/helpers - typeof";
    return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o) {
        return typeof o;
    } : function(o) {
        return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
    }, _typeof(o);
}
Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports["default"] = void 0;
__webpack_require__(1554);
__webpack_require__(86956);
__webpack_require__(32639);
__webpack_require__(97950);
__webpack_require__(46833);
__webpack_require__(64518);
__webpack_require__(90840);
__webpack_require__(63704);
__webpack_require__(82365);
__webpack_require__(51624);
__webpack_require__(93772);
var _Pattern = _interopRequireDefault(__webpack_require__(28885));
var _utils = __webpack_require__(17407);
var _class;
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        "default": obj
    };
}
function _slicedToArray(arr, i) {
    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}
function _nonIterableRest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _iterableToArrayLimit(r, l) {
    var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
    if (null != t) {
        var e, n, i, u, a = [], f = !0, o = !1;
        try {
            if (i = (t = t.call(r)).next, 0 === l) {
                if (Object(t) !== t) return;
                f = !1;
            } else for(; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0);
        } catch (r) {
            o = !0, n = r;
        } finally{
            try {
                if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return;
            } finally{
                if (o) throw n;
            }
        }
        return a;
    }
}
function _arrayWithHoles(arr) {
    if (Array.isArray(arr)) return arr;
}
function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}
function _defineProperties(target, props) {
    for(var i = 0; i < props.length; i++){
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor);
    }
}
function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    Object.defineProperty(Constructor, "prototype", {
        writable: false
    });
    return Constructor;
}
function _toPropertyKey(arg) {
    var key = _toPrimitive(arg, "string");
    return _typeof(key) === "symbol" ? key : String(key);
}
function _toPrimitive(input, hint) {
    if (_typeof(input) !== "object" || input === null) return input;
    var prim = input[Symbol.toPrimitive];
    if (prim !== undefined) {
        var res = prim.call(input, hint || "default");
        if (_typeof(res) !== "object") return res;
        throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return (hint === "string" ? String : Number)(input);
}
var PatternStorage = /*#__PURE__*/ function() {
    function PatternStorage() {
        _classCallCheck(this, PatternStorage);
        this.definitions = {};
        this.globals = {};
        this.patterns = {};
        this.twigResources = new Map();
    }
    _createClass(PatternStorage, [
        {
            key: "addGlobal",
            value: function addGlobal(name, value) {
                if (this.globals[name] != null) {
                    if (typeof value === "string") {
                        this.globals[name] = value;
                    } else {
                        this.globals[name] = Object.assign(this.globals[name], value);
                    }
                } else {
                    this.globals[name] = value;
                }
            }
        },
        {
            key: "getGlobals",
            value: function getGlobals() {
                return this.globals;
            }
        },
        {
            key: "getPatternIds",
            value: function getPatternIds() {
                return Object.keys(this.definitions);
            }
        },
        {
            key: "loadPatternsByNamespace",
            value: function loadPatternsByNamespace(namespace) {
                var _this = this;
                var foundPatterns = [];
                Object.keys(this.definitions).forEach(function(key) {
                    var pattern = _this.loadPattern(key);
                    if (pattern.getNamespace() === namespace) {
                        foundPatterns.push(pattern);
                    }
                });
                return foundPatterns;
            }
        },
        {
            key: "extendPatternDefinition",
            value: function extendPatternDefinition(pattern) {
                var _this2 = this;
                var resultingPattern = pattern;
                if (pattern != null && pattern["extends"] != null && pattern["extends"].length !== 0) {
                    pattern["extends"].forEach(function(extend) {
                        var _extend$split = extend.split("."), _extend$split2 = _slicedToArray(_extend$split, 3), basePattern = _extend$split2[0], basePatternType = _extend$split2[1], basePatternField = _extend$split2[2];
                        if (_this2.definitions[basePattern] == null) {
                            throw new Error('Base pattern "'.concat(basePattern, '" not found. Possible patterns ').concat(Object.keys(_this2.definitions).join(", ")));
                        }
                        var basePatternDefinition = _this2.extendPatternDefinition(_this2.definitions[basePattern]);
                        var basePatternTypes = [];
                        if (basePatternType == null) {
                            basePatternTypes = [
                                "fields",
                                "settings"
                            ];
                            if (resultingPattern.use === undefined) {
                                resultingPattern.use = basePatternDefinition.use;
                            }
                        } else {
                            basePatternTypes = [
                                basePatternType
                            ];
                        }
                        Object.keys(basePatternTypes).forEach(function(key) {
                            var type = basePatternTypes[key];
                            if (basePatternField == null) {
                                if (basePatternDefinition[type] != null) {
                                    if (resultingPattern[type] == null) {
                                        resultingPattern[type] = {};
                                    }
                                    resultingPattern[type] = (0, _utils.mergeDeep)(basePatternDefinition[type], resultingPattern[type]);
                                }
                            } else if (basePatternDefinition[type] != null) {
                                if (resultingPattern[type] == null) {
                                    resultingPattern[type] = [];
                                }
                                resultingPattern[type][basePatternField] = basePatternDefinition[type][basePatternField];
                            }
                        });
                    });
                    resultingPattern["extends"] = [];
                }
                return resultingPattern;
            }
        },
        {
            key: "loadPattern",
            value: function loadPattern(patternId) {
                if (this.patterns[patternId]) {
                    return this.patterns[patternId];
                }
                var definition = this.extendPatternDefinition(this.definitions[patternId]);
                if (definition == null) {
                    throw new Error('Pattern definition "'.concat(patternId, '" not found. Possible pattern ids are: "').concat(Object.keys(this.definitions).join(" ,"), '"'));
                }
                this.patterns[patternId] = new _Pattern["default"](patternId, definition, this);
                return this.patterns[patternId];
            }
        },
        {
            key: "loadVariant",
            value: function loadVariant(patternId, variantId) {
                var pattern = this.loadPattern(patternId);
                return pattern.getVariant(variantId);
            }
        },
        {
            key: "createDefinitions",
            value: function createDefinitions(definitions) {
                this.definitions = definitions;
                this.patterns = {};
            }
        },
        {
            key: "addDefinition",
            value: function addDefinition(id, patternDefinition) {
                this.definitions[id] = patternDefinition;
                delete this.patterns[id];
            }
        },
        {
            key: "addDefinitions",
            value: function addDefinitions(definitions) {
                var _this3 = this;
                Object.keys(definitions).forEach(function(id) {
                    _this3.definitions[id] = definitions[id];
                    delete _this3.patterns[id];
                });
            }
        },
        {
            key: "findTwigByNamespace",
            value: function findTwigByNamespace(namespace) {
                return this.twigResources.get(namespace);
            }
        }
    ], [
        {
            key: "getInstance",
            value: function getInstance() {
                if (!PatternStorage.instance) {
                    PatternStorage.instance = new PatternStorage();
                }
                return PatternStorage.instance;
            }
        }
    ]);
    return PatternStorage;
}();
exports["default"] = PatternStorage;
_class = PatternStorage;
PatternStorage.instance = void 0;


/***/ }),

/***/ 43099:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

__webpack_require__(92230);
__webpack_require__(13951);
__webpack_require__(1554);
__webpack_require__(97950);
__webpack_require__(46833);
__webpack_require__(28266);
__webpack_require__(79761);
__webpack_require__(33622);
__webpack_require__(97313);
__webpack_require__(53965);
Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports["default"] = void 0;
__webpack_require__(8351);
__webpack_require__(30343);
__webpack_require__(63704);
__webpack_require__(32639);
__webpack_require__(82365);
__webpack_require__(90840);
__webpack_require__(51624);
__webpack_require__(50069);
__webpack_require__(93772);
__webpack_require__(64518);
__webpack_require__(39870);
__webpack_require__(74376);
__webpack_require__(65710);
__webpack_require__(85507);
__webpack_require__(58810);
__webpack_require__(9061);
var _Pattern = _interopRequireDefault(__webpack_require__(28885));
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        "default": obj
    };
}
function _typeof(o) {
    "@babel/helpers - typeof";
    return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o) {
        return typeof o;
    } : function(o) {
        return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
    }, _typeof(o);
}
function _slicedToArray(arr, i) {
    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}
function _nonIterableRest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _iterableToArrayLimit(r, l) {
    var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
    if (null != t) {
        var e, n, i, u, a = [], f = !0, o = !1;
        try {
            if (i = (t = t.call(r)).next, 0 === l) {
                if (Object(t) !== t) return;
                f = !1;
            } else for(; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0);
        } catch (r) {
            o = !0, n = r;
        } finally{
            try {
                if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return;
            } finally{
                if (o) throw n;
            }
        }
        return a;
    }
}
function _arrayWithHoles(arr) {
    if (Array.isArray(arr)) return arr;
}
function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}
function _defineProperties(target, props) {
    for(var i = 0; i < props.length; i++){
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor);
    }
}
function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    Object.defineProperty(Constructor, "prototype", {
        writable: false
    });
    return Constructor;
}
function _toPropertyKey(arg) {
    var key = _toPrimitive(arg, "string");
    return _typeof(key) === "symbol" ? key : String(key);
}
function _toPrimitive(input, hint) {
    if (_typeof(input) !== "object" || input === null) return input;
    var prim = input[Symbol.toPrimitive];
    if (prim !== undefined) {
        var res = prim.call(input, hint || "default");
        if (_typeof(res) !== "object") return res;
        throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return (hint === "string" ? String : Number)(input);
}
var PatternVariant = /*#__PURE__*/ function() {
    function PatternVariant(id, pattern, variant, use, label, description, configuration) {
        _classCallCheck(this, PatternVariant);
        this.pattern = void 0;
        this.id = void 0;
        this.use = void 0;
        this.variant = void 0;
        this.renderArgs = {};
        this.beforeRenderHandler = void 0;
        this.label = void 0;
        this.template = void 0;
        this.description = void 0;
        this.configuration = void 0;
        this.fields = [];
        this.settings = [];
        this.id = id;
        this.pattern = pattern;
        this.variant = variant;
        this.label = label;
        this.use = use;
        this.description = description;
        this.configuration = configuration;
    }
    _createClass(PatternVariant, [
        {
            key: "getUse",
            value: function getUse() {
                if (!this.use) {
                    return this.getPattern().getUse();
                }
                return this.use;
            }
        },
        {
            key: "getCode",
            value: function getCode() {
                var variables = {
                    variant: ""
                };
                var settings = this.getSettings();
                if (this.getId() !== "__default") {
                    variables.variant = this.getId();
                } else {
                    delete variables.variant;
                }
                Object.keys(settings).forEach(function(key) {
                    var setting = settings[key];
                    if (setting.getType() !== "media_library" && setting.isEnable()) {
                        variables[key] = setting.getPreview();
                    }
                });
                var withBlock = Object.keys(variables).length === 0 ? "" : "with ".concat(JSON.stringify(variables, null, 2));
                delete variables.variant;
                var argsBlock = Object.keys(variables).length === 0 ? "''" : "".concat(JSON.stringify(variables, null, 2));
                var blocks = [
                    {
                        title: "Pattern function (recommend)",
                        code: "{{ pattern('".concat(this.getPattern().getId(), "', ").concat(argsBlock, ", '").concat(this.getId(), "') }} %}")
                    },
                    {
                        title: "Include pattern",
                        code: "{% include '".concat(this.getUse(), "' ").concat(withBlock, " %}")
                    },
                    {
                        title: "Embed pattern",
                        code: "{% embed '".concat(this.getUse(), "' ").concat(withBlock, " %}\n{% endembed %}\n        ")
                    }
                ];
                var generatedCode = [];
                Object.entries(blocks).forEach(function(_ref) {
                    var _ref2 = _slicedToArray(_ref, 2), key = _ref2[0], value = _ref2[1];
                    return generatedCode.push("/*\n* ".concat(value.title, ":\n*/\n").concat(value.code));
                });
                return generatedCode.join("\n\n");
            }
        },
        {
            key: "getTemplate",
            value: function getTemplate() {
                return this.template;
            }
        },
        {
            key: "setTemplate",
            value: function setTemplate(template) {
                this.template = template;
            }
        },
        {
            key: "getStoryId",
            value: function getStoryId() {
                var pattern = this.getPattern();
                return this.cleanStorybookString("".concat(pattern.getNamespace(), "-").concat(pattern.getLabel(), "--").concat(this.getLabel()));
            }
        },
        {
            key: "getId",
            value: function getId() {
                return this.id;
            }
        },
        {
            key: "getStorage",
            value: function getStorage() {
                return this.pattern.getStorage();
            }
        },
        {
            key: "getLabel",
            value: function getLabel() {
                return this.label;
            }
        },
        {
            key: "getDescription",
            value: function getDescription() {
                return this.description;
            }
        },
        {
            key: "getPattern",
            value: function getPattern() {
                return this.pattern;
            }
        },
        {
            key: "setPattern",
            value: function setPattern(pattern) {
                this.pattern = pattern;
            }
        },
        {
            key: "getVariant",
            value: function getVariant() {
                return this.variant;
            }
        },
        {
            key: "setVariant",
            value: function setVariant(value) {
                this.variant = value;
            }
        },
        {
            key: "getFields",
            value: function getFields() {
                return this.fields;
            }
        },
        {
            key: "setConfiguration",
            value: function setConfiguration(configuration) {
                this.configuration = configuration;
            }
        },
        {
            key: "getConfiguration",
            value: function getConfiguration() {
                return this.configuration;
            }
        },
        {
            key: "addField",
            value: function addField(field) {
                this.fields[field.getName()] = field;
            }
        },
        {
            key: "getField",
            value: function getField(name) {
                return this.fields[name];
            }
        },
        {
            key: "setFields",
            value: function setFields(fields) {
                this.fields = fields;
            }
        },
        {
            key: "getSettings",
            value: function getSettings() {
                return this.settings;
            }
        },
        {
            key: "setSettings",
            value: function setSettings(value) {
                this.settings = value;
            }
        },
        {
            key: "getSetting",
            value: function getSetting(name) {
                return this.settings[name];
            }
        },
        {
            key: "addSetting",
            value: function addSetting(setting) {
                this.settings[setting.getName()] = setting;
            }
        },
        {
            key: "handleFieldItem",
            value: function handleFieldItem(fieldItem) {
                var variant = fieldItem.variant !== null ? fieldItem.variant : null;
                var fields = fieldItem.fields != null ? fieldItem.fields : {};
                var settings = fieldItem.settings != null ? fieldItem.settings : {};
                var objects = Object.assign(fields, settings);
                return {
                    patternId: fieldItem.id,
                    variant: variant,
                    fields: fields,
                    settings: settings,
                    variables: objects
                };
            }
        },
        {
            key: "handleSubPreviewPattern",
            value: function handleSubPreviewPattern(preview, parentVariables) {
                var _this = this;
                if (preview.fields !== undefined) {
                    Object.keys(preview.fields).forEach(function(key) {
                        var field = preview.fields[key];
                        if (field != null && field.id !== undefined) {
                            if (parentVariables.children === undefined) {
                                // eslint-disable-next-line no-param-reassign
                                parentVariables.children = {};
                            }
                            // eslint-disable-next-line no-param-reassign
                            parentVariables.children[key] = _this.handleFieldItem(field);
                            _this.handleSubPreviewPattern(field, parentVariables.children[key]);
                        } else if (Array.isArray(field)) {
                            var i = 0;
                            if (parentVariables.children === undefined) {
                                // eslint-disable-next-line no-param-reassign
                                parentVariables.children = {};
                            }
                            field.forEach(function(item) {
                                if (item.id !== undefined) {
                                    // eslint-disable-next-line no-param-reassign
                                    parentVariables.children["".concat(key, "--").concat(i)] = _this.handleFieldItem(item);
                                    _this.handleSubPreviewPattern(item, parentVariables.children["".concat(key, "--").concat(i)]);
                                    i += 1;
                                }
                            });
                        }
                    });
                }
            }
        },
        {
            key: "buildPreviewPattern",
            value: function buildPreviewPattern(preview) {
                var rootVariables = this.handleFieldItem(preview);
                this.handleSubPreviewPattern(preview, rootVariables);
                return rootVariables;
            }
        },
        {
            key: "getRenderInfo",
            value: function getRenderInfo() {
                var _this2 = this;
                var previewPatterns = {};
                Object.keys(this.fields).forEach(function(key) {
                    var field = _this2.fields[key];
                    var preview = field.getPreview();
                    if (field.getType() === "pattern" && Array.isArray(preview)) {
                        for(var i = 0; i < preview.length; i += 1){
                            previewPatterns["".concat(key, "--").concat(i)] = _this2.buildPreviewPattern(preview[i]);
                        }
                    } else if (field.getType() === "pattern" && preview !== null && preview !== void 0 && preview.id) {
                        previewPatterns[key] = _this2.buildPreviewPattern(preview);
                    }
                });
                Object.keys(this.settings).forEach(function(key) {
                    var setting = _this2.settings[key];
                    var preview = setting.getPreview();
                    if (setting.getType() === "media_library" && preview !== null && preview !== void 0 && preview.id) {
                        previewPatterns[key] = _this2.buildPreviewPattern(preview);
                    }
                });
                return previewPatterns;
            }
        },
        {
            key: "setRenderArgs",
            value: function setRenderArgs(args) {
                this.renderArgs = args;
                if (this.beforeRenderHandler != null) {
                    this.beforeRenderHandler(args);
                }
            }
        },
        {
            key: "getRenderArgs",
            value: function getRenderArgs() {
                return this.renderArgs;
            }
        },
        {
            key: "beforeRender",
            value: function beforeRender(handler) {
                this.beforeRenderHandler = handler;
            }
        },
        {
            key: "getVariables",
            value: function getVariables() {
                var _this3 = this;
                var includeFields = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
                var includeSettings = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
                var includeVariant = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
                var values = {
                    variant: undefined
                };
                if (this.variant !== _Pattern["default"].DEFAULT_VARIANT_NAME && includeVariant) {
                    // eslint-disable-next-line dot-notation
                    // @ts-ignore
                    values.variant = this.variant;
                }
                if (includeFields) {
                    Object.keys(this.fields).forEach(function(key) {
                        var field = _this3.fields[key];
                        if (field !== null && field.getType() !== "pattern") {
                            values[key] = field.getPreview();
                        }
                    });
                }
                if (includeSettings) {
                    Object.keys(this.settings).forEach(function(key) {
                        if (_this3.settings[key].getType() !== "media_library") {
                            values[key] = _this3.settings[key].getPreview();
                        }
                    });
                }
                return values;
            }
        },
        {
            key: "cleanStorybookString",
            value: function cleanStorybookString(string) {
                return string.toLowerCase().replace(/ /g, "-").replace(/\//g, "-");
            }
        }
    ]);
    return PatternVariant;
}();
exports["default"] = PatternVariant;


/***/ }),

/***/ 99270:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

__webpack_require__(92230);
__webpack_require__(13951);
__webpack_require__(1554);
__webpack_require__(97950);
__webpack_require__(46833);
Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports["default"] = void 0;
__webpack_require__(97313);
__webpack_require__(8351);
__webpack_require__(30343);
__webpack_require__(43433);
__webpack_require__(9061);
__webpack_require__(51624);
__webpack_require__(93772);
__webpack_require__(90840);
__webpack_require__(39870);
__webpack_require__(85507);
__webpack_require__(58810);
__webpack_require__(32639);
var _falso = __webpack_require__(86608);
function _typeof(o) {
    "@babel/helpers - typeof";
    return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o) {
        return typeof o;
    } : function(o) {
        return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
    }, _typeof(o);
}
function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}
function _defineProperties(target, props) {
    for(var i = 0; i < props.length; i++){
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor);
    }
}
function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    Object.defineProperty(Constructor, "prototype", {
        writable: false
    });
    return Constructor;
}
function _toPropertyKey(arg) {
    var key = _toPrimitive(arg, "string");
    return _typeof(key) === "symbol" ? key : String(key);
}
function _toPrimitive(input, hint) {
    if (_typeof(input) !== "object" || input === null) return input;
    var prim = input[Symbol.toPrimitive];
    if (prim !== undefined) {
        var res = prim.call(input, hint || "default");
        if (_typeof(res) !== "object") return res;
        throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return (hint === "string" ? String : Number)(input);
}
var Property = /*#__PURE__*/ function() {
    function Property(name, type, label, description, preview, variant) {
        _classCallCheck(this, Property);
        this.name = void 0;
        this.type = void 0;
        this.label = void 0;
        this.description = void 0;
        this.preview = void 0;
        this.enable = true;
        this.variant = void 0;
        this.name = name;
        this.type = type;
        this.label = label;
        this.description = description;
        this.preview = preview;
        this.variant = variant;
    }
    _createClass(Property, [
        {
            key: "getDescription",
            value: function getDescription() {
                var _this$description;
                return (_this$description = this.description) !== null && _this$description !== void 0 ? _this$description : "";
            }
        },
        {
            key: "isEnable",
            value: function isEnable() {
                return this.enable;
            }
        },
        {
            key: "setEnable",
            value: function setEnable(value) {
                this.enable = value;
            }
        },
        {
            key: "setDescription",
            value: function setDescription(value) {
                this.description = value;
            }
        },
        {
            key: "generateFake",
            value: function generateFake(_preview) {
                var _preview$options;
                var token = "lorem.word";
                if (_preview.token == null && _preview.property != null) {
                    token = _preview.property;
                }
                if (_preview.token != null) {
                    token = _preview.token;
                }
                var fakeOptions = (_preview$options = _preview.options) !== null && _preview$options !== void 0 ? _preview$options : {};
                if (typeof _preview === "string") {
                    token = _preview;
                }
                try {
                    if (process.env.STORYBOOK_WINGSUIT_FAKER_SEED != null) {
                        if (!Number.isNaN(process.env.STORYBOOK_WINGSUIT_FAKER_SEED)) {
                            (0, _falso.seed)(process.env.STORYBOOK_WINGSUIT_FAKER_SEED);
                        } else {
                            console.error("STORYBOOK_WINGSUIT_FAKER_SEED must be numeric");
                        }
                    }
                    var tokens = {
                        "lorem.word": _falso.randWord,
                        "lorem.sentence": _falso.randSentence,
                        "lorem.paragraph": _falso.randParagraph,
                        "lorem.paragraphs": _falso.randParagraph,
                        "lorem.line": _falso.randLine
                    };
                    if (!tokens[token]) {
                        return "Invalid faker token: ".concat(token, ". Valid tokens are: ").concat(Object.keys(tokens).join(", "));
                    }
                    var result = tokens[token](fakeOptions);
                    return Array.isArray(result) ? result.join(" ") : result;
                } catch (e) {
                    if (e instanceof Error) {
                        return 'Invalid faker configuration "'.concat(token, '". ').concat(e.message);
                    }
                    return "";
                }
            }
        },
        {
            key: "cleanString",
            value: function cleanString(input) {
                var output = "";
                for(var i = 0; i < input.length; i += 1){
                    if (input.charCodeAt(i) <= 127 || input.charCodeAt(i) >= 160 && input.charCodeAt(i) <= 255) {
                        output += input.charAt(i);
                    }
                }
                return output;
            }
        },
        {
            key: "getPreview",
            value: function getPreview() {
                if (_typeof(this.preview) === "object") {
                    var _this$preview, _this$preview2;
                    if (((_this$preview = this.preview) === null || _this$preview === void 0 ? void 0 : _this$preview.faker) != null) {
                        return this.generateFake(this.preview.faker);
                    }
                    if (this.type === "pattern" || this.type === "object" || this.type === "media_library") {
                        return this.preview;
                    }
                    if (((_this$preview2 = this.preview) === null || _this$preview2 === void 0 ? void 0 : _this$preview2.ref) != null) {
                        var _this$variant$getSett, _this$preview3;
                        return (_this$variant$getSett = this.variant.getSetting((_this$preview3 = this.preview) === null || _this$preview3 === void 0 ? void 0 : _this$preview3.ref)) === null || _this$variant$getSett === void 0 ? void 0 : _this$variant$getSett.getPreview();
                    }
                    return JSON.stringify(this.preview);
                }
                var value = this.preview;
                if (typeof value === "string" || value instanceof String) {
                    value = this.cleanString(value);
                }
                return value;
            }
        },
        {
            key: "setPreview",
            value: function setPreview(value) {
                this.preview = value;
            }
        },
        {
            key: "getLabel",
            value: function getLabel() {
                return this.label;
            }
        },
        {
            key: "setLabel",
            value: function setLabel(value) {
                this.label = value;
            }
        },
        {
            key: "getName",
            value: function getName() {
                return this.name;
            }
        },
        {
            key: "setName",
            value: function setName(value) {
                this.name = value;
            }
        },
        {
            key: "getType",
            value: function getType() {
                return this.type;
            }
        },
        {
            key: "setType",
            value: function setType(value) {
                this.type = value;
            }
        }
    ]);
    return Property;
}();
exports["default"] = Property;


/***/ }),

/***/ 43946:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

function _typeof(o) {
    "@babel/helpers - typeof";
    return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o) {
        return typeof o;
    } : function(o) {
        return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
    }, _typeof(o);
}
__webpack_require__(54944);
__webpack_require__(21601);
__webpack_require__(92230);
__webpack_require__(85507);
__webpack_require__(58810);
__webpack_require__(8351);
__webpack_require__(30343);
__webpack_require__(9061);
__webpack_require__(39870);
__webpack_require__(13951);
__webpack_require__(1554);
__webpack_require__(97950);
__webpack_require__(46833);
__webpack_require__(28266);
__webpack_require__(79761);
__webpack_require__(33622);
__webpack_require__(97313);
__webpack_require__(53965);
__webpack_require__(74376);
Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports["default"] = void 0;
__webpack_require__(51624);
__webpack_require__(63704);
__webpack_require__(32639);
__webpack_require__(82365);
__webpack_require__(90840);
__webpack_require__(50069);
__webpack_require__(71740);
__webpack_require__(84730);
__webpack_require__(31046);
var _Property2 = _interopRequireDefault(__webpack_require__(99270));
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        "default": obj
    };
}
function _slicedToArray(arr, i) {
    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}
function _nonIterableRest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _iterableToArrayLimit(r, l) {
    var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
    if (null != t) {
        var e, n, i, u, a = [], f = !0, o = !1;
        try {
            if (i = (t = t.call(r)).next, 0 === l) {
                if (Object(t) !== t) return;
                f = !1;
            } else for(; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0);
        } catch (r) {
            o = !0, n = r;
        } finally{
            try {
                if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return;
            } finally{
                if (o) throw n;
            }
        }
        return a;
    }
}
function _arrayWithHoles(arr) {
    if (Array.isArray(arr)) return arr;
}
function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}
function _defineProperties(target, props) {
    for(var i = 0; i < props.length; i++){
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor);
    }
}
function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    Object.defineProperty(Constructor, "prototype", {
        writable: false
    });
    return Constructor;
}
function _toPropertyKey(arg) {
    var key = _toPrimitive(arg, "string");
    return _typeof(key) === "symbol" ? key : String(key);
}
function _toPrimitive(input, hint) {
    if (_typeof(input) !== "object" || input === null) return input;
    var prim = input[Symbol.toPrimitive];
    if (prim !== undefined) {
        var res = prim.call(input, hint || "default");
        if (_typeof(res) !== "object") return res;
        throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return (hint === "string" ? String : Number)(input);
}
function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function");
    }
    subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
            value: subClass,
            writable: true,
            configurable: true
        }
    });
    Object.defineProperty(subClass, "prototype", {
        writable: false
    });
    if (superClass) _setPrototypeOf(subClass, superClass);
}
function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) {
        o.__proto__ = p;
        return o;
    };
    return _setPrototypeOf(o, p);
}
function _createSuper(Derived) {
    var hasNativeReflectConstruct = _isNativeReflectConstruct();
    return function _createSuperInternal() {
        var Super = _getPrototypeOf(Derived), result;
        if (hasNativeReflectConstruct) {
            var NewTarget = _getPrototypeOf(this).constructor;
            result = Reflect.construct(Super, arguments, NewTarget);
        } else {
            result = Super.apply(this, arguments);
        }
        return _possibleConstructorReturn(this, result);
    };
}
function _possibleConstructorReturn(self, call) {
    if (call && (_typeof(call) === "object" || typeof call === "function")) {
        return call;
    } else if (call !== void 0) {
        throw new TypeError("Derived constructors may only return object or undefined");
    }
    return _assertThisInitialized(self);
}
function _assertThisInitialized(self) {
    if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return self;
}
function _isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;
    try {
        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
        return true;
    } catch (e) {
        return false;
    }
}
function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _getPrototypeOf(o);
}
var Setting = /*#__PURE__*/ function(_Property) {
    _inherits(Setting, _Property);
    var _super = _createSuper(Setting);
    function Setting() {
        var _this;
        _classCallCheck(this, Setting);
        for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++){
            args[_key] = arguments[_key];
        }
        _this = _super.call.apply(_super, [
            this
        ].concat(args));
        _this.defaultValue = "";
        _this.required = false;
        _this.options = {};
        _this.states = {};
        return _this;
    }
    _createClass(Setting, [
        {
            key: "getOptions",
            value: function getOptions() {
                return this.options;
            }
        },
        {
            key: "setOptions",
            value: function setOptions(options) {
                this.options = options;
            }
        },
        {
            key: "getOptionKeyByLabel",
            value: function getOptionKeyByLabel(label) {
                var _this2 = this;
                var optionKey = "";
                Object.keys(this.options).forEach(function(key) {
                    if (_this2.options[key] === label) {
                        optionKey = key;
                    }
                });
                return optionKey;
            }
        },
        {
            key: "getPreviewDisplayValue",
            value: function getPreviewDisplayValue() {
                if (this.getType() === "select" && this.getPreview()) {
                    return this.options[this.getPreview()];
                }
                return this.getPreview();
            }
        },
        {
            key: "getDefaultValue",
            value: function getDefaultValue() {
                return this.defaultValue;
            }
        },
        {
            key: "setDefaultValue",
            value: function setDefaultValue(defaultValue) {
                this.defaultValue = defaultValue;
            }
        },
        {
            key: "isRequired",
            value: function isRequired() {
                return this.required;
            }
        },
        {
            key: "setRequired",
            value: function setRequired(required) {
                this.required = required;
            }
        },
        {
            key: "getStates",
            value: function getStates() {
                return this.states;
            }
        },
        {
            key: "setStates",
            value: function setStates(states) {
                this.states = states;
            }
        },
        {
            key: "isActive",
            value: function isActive() {
                var _this3 = this;
                var states = this.getStates();
                var isActive = true;
                Object.entries(states).forEach(function(_ref) {
                    var _ref2 = _slicedToArray(_ref, 2), visibility = _ref2[0], stateItems = _ref2[1];
                    stateItems.forEach(function(stateItem) {
                        var match = stateItem.variant && stateItem.variant === _this3.variant.getId();
                        if (!match && visibility === "visible") {
                            isActive = false;
                        }
                        if (match && visibility === "invisible") {
                            isActive = false;
                        }
                    });
                });
                return isActive;
            }
        }
    ]);
    return Setting;
}(_Property2["default"]);
exports["default"] = Setting;


/***/ }),

/***/ 63065:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

__webpack_require__(92230);
__webpack_require__(13951);
Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports["default"] = void 0;
__webpack_require__(1554);
__webpack_require__(86956);
__webpack_require__(32639);
__webpack_require__(97950);
__webpack_require__(46833);
__webpack_require__(63704);
__webpack_require__(82365);
__webpack_require__(90840);
__webpack_require__(39870);
__webpack_require__(93772);
__webpack_require__(82066);
__webpack_require__(18389);
__webpack_require__(79761);
__webpack_require__(33622);
__webpack_require__(53965);
__webpack_require__(51624);
__webpack_require__(46260);
__webpack_require__(85507);
__webpack_require__(58810);
__webpack_require__(8351);
__webpack_require__(30343);
__webpack_require__(9061);
var _twigRenderEngine = __webpack_require__(51008);
function _typeof(o) {
    "@babel/helpers - typeof";
    return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o) {
        return typeof o;
    } : function(o) {
        return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
    }, _typeof(o);
}
function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}
function _defineProperties(target, props) {
    for(var i = 0; i < props.length; i++){
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor);
    }
}
function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    Object.defineProperty(Constructor, "prototype", {
        writable: false
    });
    return Constructor;
}
function _toPropertyKey(arg) {
    var key = _toPrimitive(arg, "string");
    return _typeof(key) === "symbol" ? key : String(key);
}
function _toPrimitive(input, hint) {
    if (_typeof(input) !== "object" || input === null) return input;
    var prim = input[Symbol.toPrimitive];
    if (prim !== undefined) {
        var res = prim.call(input, hint || "default");
        if (_typeof(res) !== "object") return res;
        throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return (hint === "string" ? String : Number)(input);
}
var htmlAttributeParser = __webpack_require__(87810);
var escapeHtml = __webpack_require__(66766);
var TwigAttribute = /*#__PURE__*/ function() {
    function TwigAttribute() {
        var _this = this;
        var attributes = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
        _classCallCheck(this, TwigAttribute);
        this.attributes = void 0;
        this.attributes = new Map();
        if (attributes !== "") {
            var attrs = htmlAttributeParser("<div ".concat(attributes, "></div>")).attributes;
            Object.keys(attrs).forEach(function(key) {
                if (key === "class") {
                    _this.attributes.set(key, attrs[key].split(" "));
                } else {
                    _this.attributes.set(key, attrs[key]);
                }
            });
        }
    }
    _createClass(TwigAttribute, [
        {
            key: "class",
            value: function _class() {
                var classes = this.attributes.get("class");
                if (Array.isArray(classes)) {
                    return this.attributes.get("class").join(" ");
                }
                return this.attributes.get("class") != null ? this.attributes.get("class") : "";
            }
        },
        {
            key: "setAttribute",
            value: function setAttribute(key, value) {
                this.attributes.set(key, value);
                return this;
            }
        },
        {
            key: "removeAttribute",
            value: function removeAttribute(key) {
                this.attributes["delete"](key);
                return this;
            }
        },
        {
            key: "getAttribute",
            value: function getAttribute(key) {
                return this.attributes.get(key);
            }
        },
        {
            key: "hasAttribute",
            value: function hasAttribute(key) {
                return this.attributes.has(key);
            }
        },
        {
            key: "removeClass",
            value: function removeClass() {
                var className = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
                var classAry = className.split(" ");
                for(var i = 0; i < classAry.length; i += 1){
                    var classItem = classAry[i];
                    var foundItem = this.attributes.get("class").indexOf(classItem);
                    if (this.attributes.get("class") != null && foundItem !== -1) {
                        this.attributes.get("class").splice(foundItem, 1);
                    }
                }
            }
        },
        {
            key: "addClass",
            value: function addClass() {
                var className = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
                if (className == null) {
                    return this;
                }
                if (this.attributes.get("class") == null) {
                    this.attributes.set("class", []);
                }
                var classes = this.attributes.get("class");
                var classAry = [];
                if (className instanceof Map) {
                    classAry = (0, _twigRenderEngine.twingMapToArray)(className);
                } else if (Array.isArray(className)) {
                    classAry = className;
                } else {
                    classAry = className.split(" ");
                }
                for(var i = 0; i < classAry.length; i += 1){
                    if (classAry[i] !== "") {
                        classes.push(classAry[i]);
                    }
                }
                return this;
            }
        },
        {
            key: "render",
            value: function render() {
                return this.toString();
            }
        },
        {
            key: "toArray",
            value: function toArray() {
                return Array.from(this.attributes);
            }
        },
        {
            key: "toString",
            value: function toString() {
                var _this2 = this;
                var output = "";
                Array.from(this.attributes.keys()).forEach(function(key) {
                    var attributeValue = null;
                    if (_typeof(_this2.attributes.get(key)) === "object" && Array.isArray(_this2.attributes.get(key))) {
                        attributeValue = _this2.attributes.get(key).join(" ");
                    } else if (typeof _this2.attributes.get(key) === "string") {
                        attributeValue = _this2.attributes.get(key);
                    }
                    if (attributeValue !== null) {
                        output += "".concat(key, '="').concat(escapeHtml(attributeValue), '" ');
                    }
                });
                return " ".concat(output.trim());
            }
        }
    ]);
    return TwigAttribute;
}();
exports["default"] = TwigAttribute;


/***/ }),

/***/ 5233:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

__webpack_require__(92230);
__webpack_require__(83676);
__webpack_require__(13951);
__webpack_require__(1554);
__webpack_require__(97950);
__webpack_require__(46833);
__webpack_require__(65054);
__webpack_require__(79410);
__webpack_require__(56506);
__webpack_require__(47347);
__webpack_require__(21601);
__webpack_require__(31046);
__webpack_require__(63704);
__webpack_require__(82365);
__webpack_require__(97313);
__webpack_require__(71740);
__webpack_require__(62680);
__webpack_require__(28266);
Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.TwigDefaultRenderer = void 0;
__webpack_require__(64518);
__webpack_require__(51624);
__webpack_require__(85507);
__webpack_require__(58810);
__webpack_require__(8351);
__webpack_require__(30343);
__webpack_require__(32639);
__webpack_require__(9061);
function _typeof(o) {
    "@babel/helpers - typeof";
    return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o) {
        return typeof o;
    } : function(o) {
        return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
    }, _typeof(o);
}
function _regeneratorRuntime() {
    "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ 
    _regeneratorRuntime = function _regeneratorRuntime() {
        return e;
    };
    var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function(t, e, r) {
        t[e] = r.value;
    }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag";
    function define(t, e, r) {
        return Object.defineProperty(t, e, {
            value: r,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }), t[e];
    }
    try {
        define({}, "");
    } catch (t) {
        define = function define(t, e, r) {
            return t[e] = r;
        };
    }
    function wrap(t, e, r, n) {
        var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []);
        return o(a, "_invoke", {
            value: makeInvokeMethod(t, r, c)
        }), a;
    }
    function tryCatch(t, e, r) {
        try {
            return {
                type: "normal",
                arg: t.call(e, r)
            };
        } catch (t) {
            return {
                type: "throw",
                arg: t
            };
        }
    }
    e.wrap = wrap;
    var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {};
    function Generator() {}
    function GeneratorFunction() {}
    function GeneratorFunctionPrototype() {}
    var p = {};
    define(p, a, function() {
        return this;
    });
    var d = Object.getPrototypeOf, v = d && d(d(values([])));
    v && v !== r && n.call(v, a) && (p = v);
    var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p);
    function defineIteratorMethods(t) {
        [
            "next",
            "throw",
            "return"
        ].forEach(function(e) {
            define(t, e, function(t) {
                return this._invoke(e, t);
            });
        });
    }
    function AsyncIterator(t, e) {
        function invoke(r, o, i, a) {
            var c = tryCatch(t[r], t, o);
            if ("throw" !== c.type) {
                var u = c.arg, h = u.value;
                return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function(t) {
                    invoke("next", t, i, a);
                }, function(t) {
                    invoke("throw", t, i, a);
                }) : e.resolve(h).then(function(t) {
                    u.value = t, i(u);
                }, function(t) {
                    return invoke("throw", t, i, a);
                });
            }
            a(c.arg);
        }
        var r;
        o(this, "_invoke", {
            value: function value(t, n) {
                function callInvokeWithMethodAndArg() {
                    return new e(function(e, r) {
                        invoke(t, n, e, r);
                    });
                }
                return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();
            }
        });
    }
    function makeInvokeMethod(e, r, n) {
        var o = h;
        return function(i, a) {
            if (o === f) throw new Error("Generator is already running");
            if (o === s) {
                if ("throw" === i) throw a;
                return {
                    value: t,
                    done: !0
                };
            }
            for(n.method = i, n.arg = a;;){
                var c = n.delegate;
                if (c) {
                    var u = maybeInvokeDelegate(c, n);
                    if (u) {
                        if (u === y) continue;
                        return u;
                    }
                }
                if ("next" === n.method) n.sent = n._sent = n.arg;
                else if ("throw" === n.method) {
                    if (o === h) throw o = s, n.arg;
                    n.dispatchException(n.arg);
                } else "return" === n.method && n.abrupt("return", n.arg);
                o = f;
                var p = tryCatch(e, r, n);
                if ("normal" === p.type) {
                    if (o = n.done ? s : l, p.arg === y) continue;
                    return {
                        value: p.arg,
                        done: n.done
                    };
                }
                "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg);
            }
        };
    }
    function maybeInvokeDelegate(e, r) {
        var n = r.method, o = e.iterator[n];
        if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y;
        var i = tryCatch(o, e.iterator, r.arg);
        if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y;
        var a = i.arg;
        return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y);
    }
    function pushTryEntry(t) {
        var e = {
            tryLoc: t[0]
        };
        1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e);
    }
    function resetTryEntry(t) {
        var e = t.completion || {};
        e.type = "normal", delete e.arg, t.completion = e;
    }
    function Context(t) {
        this.tryEntries = [
            {
                tryLoc: "root"
            }
        ], t.forEach(pushTryEntry, this), this.reset(!0);
    }
    function values(e) {
        if (e || "" === e) {
            var r = e[a];
            if (r) return r.call(e);
            if ("function" == typeof e.next) return e;
            if (!isNaN(e.length)) {
                var o = -1, i = function next() {
                    for(; ++o < e.length;)if (n.call(e, o)) return next.value = e[o], next.done = !1, next;
                    return next.value = t, next.done = !0, next;
                };
                return i.next = i;
            }
        }
        throw new TypeError(_typeof(e) + " is not iterable");
    }
    return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", {
        value: GeneratorFunctionPrototype,
        configurable: !0
    }), o(GeneratorFunctionPrototype, "constructor", {
        value: GeneratorFunction,
        configurable: !0
    }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function(t) {
        var e = "function" == typeof t && t.constructor;
        return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name));
    }, e.mark = function(t) {
        return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t;
    }, e.awrap = function(t) {
        return {
            __await: t
        };
    }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function() {
        return this;
    }), e.AsyncIterator = AsyncIterator, e.async = function(t, r, n, o, i) {
        void 0 === i && (i = Promise);
        var a = new AsyncIterator(wrap(t, r, n, o), i);
        return e.isGeneratorFunction(r) ? a : a.next().then(function(t) {
            return t.done ? t.value : a.next();
        });
    }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function() {
        return this;
    }), define(g, "toString", function() {
        return "[object Generator]";
    }), e.keys = function(t) {
        var e = Object(t), r = [];
        for(var n in e)r.push(n);
        return r.reverse(), function next() {
            for(; r.length;){
                var t = r.pop();
                if (t in e) return next.value = t, next.done = !1, next;
            }
            return next.done = !0, next;
        };
    }, e.values = values, Context.prototype = {
        constructor: Context,
        reset: function reset(e) {
            if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for(var r in this)"t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t);
        },
        stop: function stop() {
            this.done = !0;
            var t = this.tryEntries[0].completion;
            if ("throw" === t.type) throw t.arg;
            return this.rval;
        },
        dispatchException: function dispatchException(e) {
            if (this.done) throw e;
            var r = this;
            function handle(n, o) {
                return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o;
            }
            for(var o = this.tryEntries.length - 1; o >= 0; --o){
                var i = this.tryEntries[o], a = i.completion;
                if ("root" === i.tryLoc) return handle("end");
                if (i.tryLoc <= this.prev) {
                    var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc");
                    if (c && u) {
                        if (this.prev < i.catchLoc) return handle(i.catchLoc, !0);
                        if (this.prev < i.finallyLoc) return handle(i.finallyLoc);
                    } else if (c) {
                        if (this.prev < i.catchLoc) return handle(i.catchLoc, !0);
                    } else {
                        if (!u) throw new Error("try statement without catch or finally");
                        if (this.prev < i.finallyLoc) return handle(i.finallyLoc);
                    }
                }
            }
        },
        abrupt: function abrupt(t, e) {
            for(var r = this.tryEntries.length - 1; r >= 0; --r){
                var o = this.tryEntries[r];
                if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) {
                    var i = o;
                    break;
                }
            }
            i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null);
            var a = i ? i.completion : {};
            return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a);
        },
        complete: function complete(t, e) {
            if ("throw" === t.type) throw t.arg;
            return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y;
        },
        finish: function finish(t) {
            for(var e = this.tryEntries.length - 1; e >= 0; --e){
                var r = this.tryEntries[e];
                if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y;
            }
        },
        "catch": function _catch(t) {
            for(var e = this.tryEntries.length - 1; e >= 0; --e){
                var r = this.tryEntries[e];
                if (r.tryLoc === t) {
                    var n = r.completion;
                    if ("throw" === n.type) {
                        var o = n.arg;
                        resetTryEntry(r);
                    }
                    return o;
                }
            }
            throw new Error("illegal catch attempt");
        },
        delegateYield: function delegateYield(e, r, n) {
            return this.delegate = {
                iterator: values(e),
                resultName: r,
                nextLoc: n
            }, "next" === this.method && (this.arg = t), y;
        }
    }, e;
}
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
    try {
        var info = gen[key](arg);
        var value = info.value;
    } catch (error) {
        reject(error);
        return;
    }
    if (info.done) {
        resolve(value);
    } else {
        Promise.resolve(value).then(_next, _throw);
    }
}
function _asyncToGenerator(fn) {
    return function() {
        var self = this, args = arguments;
        return new Promise(function(resolve, reject) {
            var gen = fn.apply(self, args);
            function _next(value) {
                asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
            }
            function _throw(err) {
                asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
            }
            _next(undefined);
        });
    };
}
function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}
function _defineProperties(target, props) {
    for(var i = 0; i < props.length; i++){
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor);
    }
}
function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    Object.defineProperty(Constructor, "prototype", {
        writable: false
    });
    return Constructor;
}
function _toPropertyKey(arg) {
    var key = _toPrimitive(arg, "string");
    return _typeof(key) === "symbol" ? key : String(key);
}
function _toPrimitive(input, hint) {
    if (_typeof(input) !== "object" || input === null) return input;
    var prim = input[Symbol.toPrimitive];
    if (prim !== undefined) {
        var res = prim.call(input, hint || "default");
        if (_typeof(res) !== "object") return res;
        throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return (hint === "string" ? String : Number)(input);
}
// eslint-disable-next-line import/no-named-default
/**
 * Twig default renderer.
 *
 * Overwrite the renderer inside the twigRenderEngine.
 * Use renderer.setRenderer(new TwigCustomRenderer)
 * if you need a differnt render logic. This renderer works
 * with twigjs as well with twing.
 */ var TwigDefaultRenderer = /*#__PURE__*/ function() {
    function TwigDefaultRenderer() {
        _classCallCheck(this, TwigDefaultRenderer);
    }
    _createClass(TwigDefaultRenderer, [
        {
            key: "renderVariant",
            value: function() {
                var _renderVariant = _asyncToGenerator(/*#__PURE__*/ _regeneratorRuntime().mark(function _callee(variant, variables) {
                    return _regeneratorRuntime().wrap(function _callee$(_context) {
                        while(1)switch(_context.prev = _context.next){
                            case 0:
                                if (variant) {
                                    _context.next = 2;
                                    break;
                                }
                                return _context.abrupt("return", "Error while render variant. Variant is null.");
                            case 2:
                                if (!variant.getTemplate()) {
                                    _context.next = 4;
                                    break;
                                }
                                return _context.abrupt("return", variant.getTemplate()(Object.assign({}, variables)));
                            case 4:
                                if (variant.getPattern()) {
                                    _context.next = 6;
                                    break;
                                }
                                return _context.abrupt("return", "Error while render variant. Pattern is null. [ID: ".concat(variant.getId(), "]"));
                            case 6:
                                if (variant.getPattern().getTemplate()) {
                                    _context.next = 8;
                                    break;
                                }
                                return _context.abrupt("return", "Error while render variant. Template not linked pattern [ID: ".concat(variant.getPattern().getId(), ", PATH: ").concat(variant.getPattern().getUse(), "]"));
                            case 8:
                                return _context.abrupt("return", variant.getPattern().getTemplate()(Object.assign({}, variables)));
                            case 9:
                            case "end":
                                return _context.stop();
                        }
                    }, _callee);
                }));
                function renderVariant(_x, _x2) {
                    return _renderVariant.apply(this, arguments);
                }
                return renderVariant;
            }()
        }
    ]);
    return TwigDefaultRenderer;
}();
exports.TwigDefaultRenderer = TwigDefaultRenderer;


/***/ }),

/***/ 70129:
/***/ (() => {

"use strict";



/***/ }),

/***/ 84065:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

function _typeof(o) {
    "@babel/helpers - typeof";
    return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o) {
        return typeof o;
    } : function(o) {
        return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
    }, _typeof(o);
}
__webpack_require__(1554);
__webpack_require__(32639);
__webpack_require__(97950);
__webpack_require__(88219);
__webpack_require__(46833);
__webpack_require__(92230);
__webpack_require__(65223);
__webpack_require__(8351);
__webpack_require__(30343);
__webpack_require__(13951);
Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "IPatternDefinition", ({
    enumerable: true,
    get: function get() {
        return _definition.IPatternDefinition;
    }
}));
Object.defineProperty(exports, "IPatternDefinitions", ({
    enumerable: true,
    get: function get() {
        return _definition.IPatternDefinitions;
    }
}));
Object.defineProperty(exports, "IPatternStorage", ({
    enumerable: true,
    get: function get() {
        return _IPatternStorage["default"];
    }
}));
Object.defineProperty(exports, "IRenderer", ({
    enumerable: true,
    get: function get() {
        return _IRenderer["default"];
    }
}));
Object.defineProperty(exports, "Pattern", ({
    enumerable: true,
    get: function get() {
        return _Pattern["default"];
    }
}));
Object.defineProperty(exports, "PatternVariant", ({
    enumerable: true,
    get: function get() {
        return _PatternVariant["default"];
    }
}));
Object.defineProperty(exports, "Preview", ({
    enumerable: true,
    get: function get() {
        return _definition.Preview;
    }
}));
Object.defineProperty(exports, "Property", ({
    enumerable: true,
    get: function get() {
        return _definition.Property;
    }
}));
Object.defineProperty(exports, "TwigAttribute", ({
    enumerable: true,
    get: function get() {
        return _TwigAttribute["default"];
    }
}));
Object.defineProperty(exports, "Variant", ({
    enumerable: true,
    get: function get() {
        return _definition.Variant;
    }
}));
exports.getStorage = getStorage;
exports.storage = exports.renderer = void 0;
var _PatternStorage = _interopRequireDefault(__webpack_require__(22426));
var TwigRenderEngine = _interopRequireWildcard(__webpack_require__(51008));
var _IPatternStorage = _interopRequireDefault(__webpack_require__(36568));
var _TwigAttribute = _interopRequireDefault(__webpack_require__(63065));
var _Pattern = _interopRequireDefault(__webpack_require__(28885));
var _PatternVariant = _interopRequireDefault(__webpack_require__(43099));
var _definition = __webpack_require__(70129);
var _IRenderer = _interopRequireDefault(__webpack_require__(58184));
function _getRequireWildcardCache(nodeInterop) {
    if (typeof WeakMap !== "function") return null;
    var cacheBabelInterop = new WeakMap();
    var cacheNodeInterop = new WeakMap();
    return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) {
        return nodeInterop ? cacheNodeInterop : cacheBabelInterop;
    })(nodeInterop);
}
function _interopRequireWildcard(obj, nodeInterop) {
    if (!nodeInterop && obj && obj.__esModule) {
        return obj;
    }
    if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
        return {
            "default": obj
        };
    }
    var cache = _getRequireWildcardCache(nodeInterop);
    if (cache && cache.has(obj)) {
        return cache.get(obj);
    }
    var newObj = {};
    var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for(var key in obj){
        if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
            var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
            if (desc && (desc.get || desc.set)) {
                Object.defineProperty(newObj, key, desc);
            } else {
                newObj[key] = obj[key];
            }
        }
    }
    newObj["default"] = obj;
    if (cache) {
        cache.set(obj, newObj);
    }
    return newObj;
}
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        "default": obj
    };
}
var storage = _PatternStorage["default"].getInstance();
exports.storage = storage;
var renderer = TwigRenderEngine;
exports.renderer = renderer;
function getStorage() {
    return storage;
}


/***/ }),

/***/ 51008:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

function _typeof(o) {
    "@babel/helpers - typeof";
    return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o) {
        return typeof o;
    } : function(o) {
        return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
    }, _typeof(o);
}
__webpack_require__(92230);
__webpack_require__(8351);
__webpack_require__(30343);
__webpack_require__(13951);
__webpack_require__(65054);
__webpack_require__(79410);
__webpack_require__(56506);
__webpack_require__(47347);
__webpack_require__(21601);
__webpack_require__(31046);
__webpack_require__(97313);
__webpack_require__(71740);
__webpack_require__(62680);
__webpack_require__(28266);
Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.getNamespaces = getNamespaces;
exports.getPatternConfiguration = getPatternConfiguration;
exports.getRenderer = getRenderer;
exports.renderPattern = renderPattern;
exports.renderPatternPreview = renderPatternPreview;
exports.setNamespaces = setNamespaces;
exports.setRenderer = setRenderer;
exports.twingMapToArray = twingMapToArray;
__webpack_require__(1554);
__webpack_require__(86956);
__webpack_require__(32639);
__webpack_require__(97950);
__webpack_require__(46833);
__webpack_require__(63704);
__webpack_require__(82365);
__webpack_require__(64518);
__webpack_require__(83676);
__webpack_require__(90840);
__webpack_require__(26456);
__webpack_require__(9061);
__webpack_require__(51624);
var _Pattern = _interopRequireDefault(__webpack_require__(28885));
var _index = __webpack_require__(84065);
var _Field = __webpack_require__(88487);
var _TwigDefaultRenderer = __webpack_require__(5233);
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        "default": obj
    };
}
function _regeneratorRuntime() {
    "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ 
    _regeneratorRuntime = function _regeneratorRuntime() {
        return e;
    };
    var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function(t, e, r) {
        t[e] = r.value;
    }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag";
    function define(t, e, r) {
        return Object.defineProperty(t, e, {
            value: r,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }), t[e];
    }
    try {
        define({}, "");
    } catch (t) {
        define = function define(t, e, r) {
            return t[e] = r;
        };
    }
    function wrap(t, e, r, n) {
        var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []);
        return o(a, "_invoke", {
            value: makeInvokeMethod(t, r, c)
        }), a;
    }
    function tryCatch(t, e, r) {
        try {
            return {
                type: "normal",
                arg: t.call(e, r)
            };
        } catch (t) {
            return {
                type: "throw",
                arg: t
            };
        }
    }
    e.wrap = wrap;
    var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {};
    function Generator() {}
    function GeneratorFunction() {}
    function GeneratorFunctionPrototype() {}
    var p = {};
    define(p, a, function() {
        return this;
    });
    var d = Object.getPrototypeOf, v = d && d(d(values([])));
    v && v !== r && n.call(v, a) && (p = v);
    var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p);
    function defineIteratorMethods(t) {
        [
            "next",
            "throw",
            "return"
        ].forEach(function(e) {
            define(t, e, function(t) {
                return this._invoke(e, t);
            });
        });
    }
    function AsyncIterator(t, e) {
        function invoke(r, o, i, a) {
            var c = tryCatch(t[r], t, o);
            if ("throw" !== c.type) {
                var u = c.arg, h = u.value;
                return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function(t) {
                    invoke("next", t, i, a);
                }, function(t) {
                    invoke("throw", t, i, a);
                }) : e.resolve(h).then(function(t) {
                    u.value = t, i(u);
                }, function(t) {
                    return invoke("throw", t, i, a);
                });
            }
            a(c.arg);
        }
        var r;
        o(this, "_invoke", {
            value: function value(t, n) {
                function callInvokeWithMethodAndArg() {
                    return new e(function(e, r) {
                        invoke(t, n, e, r);
                    });
                }
                return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();
            }
        });
    }
    function makeInvokeMethod(e, r, n) {
        var o = h;
        return function(i, a) {
            if (o === f) throw new Error("Generator is already running");
            if (o === s) {
                if ("throw" === i) throw a;
                return {
                    value: t,
                    done: !0
                };
            }
            for(n.method = i, n.arg = a;;){
                var c = n.delegate;
                if (c) {
                    var u = maybeInvokeDelegate(c, n);
                    if (u) {
                        if (u === y) continue;
                        return u;
                    }
                }
                if ("next" === n.method) n.sent = n._sent = n.arg;
                else if ("throw" === n.method) {
                    if (o === h) throw o = s, n.arg;
                    n.dispatchException(n.arg);
                } else "return" === n.method && n.abrupt("return", n.arg);
                o = f;
                var p = tryCatch(e, r, n);
                if ("normal" === p.type) {
                    if (o = n.done ? s : l, p.arg === y) continue;
                    return {
                        value: p.arg,
                        done: n.done
                    };
                }
                "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg);
            }
        };
    }
    function maybeInvokeDelegate(e, r) {
        var n = r.method, o = e.iterator[n];
        if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y;
        var i = tryCatch(o, e.iterator, r.arg);
        if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y;
        var a = i.arg;
        return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y);
    }
    function pushTryEntry(t) {
        var e = {
            tryLoc: t[0]
        };
        1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e);
    }
    function resetTryEntry(t) {
        var e = t.completion || {};
        e.type = "normal", delete e.arg, t.completion = e;
    }
    function Context(t) {
        this.tryEntries = [
            {
                tryLoc: "root"
            }
        ], t.forEach(pushTryEntry, this), this.reset(!0);
    }
    function values(e) {
        if (e || "" === e) {
            var r = e[a];
            if (r) return r.call(e);
            if ("function" == typeof e.next) return e;
            if (!isNaN(e.length)) {
                var o = -1, i = function next() {
                    for(; ++o < e.length;)if (n.call(e, o)) return next.value = e[o], next.done = !1, next;
                    return next.value = t, next.done = !0, next;
                };
                return i.next = i;
            }
        }
        throw new TypeError(_typeof(e) + " is not iterable");
    }
    return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", {
        value: GeneratorFunctionPrototype,
        configurable: !0
    }), o(GeneratorFunctionPrototype, "constructor", {
        value: GeneratorFunction,
        configurable: !0
    }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function(t) {
        var e = "function" == typeof t && t.constructor;
        return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name));
    }, e.mark = function(t) {
        return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t;
    }, e.awrap = function(t) {
        return {
            __await: t
        };
    }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function() {
        return this;
    }), e.AsyncIterator = AsyncIterator, e.async = function(t, r, n, o, i) {
        void 0 === i && (i = Promise);
        var a = new AsyncIterator(wrap(t, r, n, o), i);
        return e.isGeneratorFunction(r) ? a : a.next().then(function(t) {
            return t.done ? t.value : a.next();
        });
    }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function() {
        return this;
    }), define(g, "toString", function() {
        return "[object Generator]";
    }), e.keys = function(t) {
        var e = Object(t), r = [];
        for(var n in e)r.push(n);
        return r.reverse(), function next() {
            for(; r.length;){
                var t = r.pop();
                if (t in e) return next.value = t, next.done = !1, next;
            }
            return next.done = !0, next;
        };
    }, e.values = values, Context.prototype = {
        constructor: Context,
        reset: function reset(e) {
            if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for(var r in this)"t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t);
        },
        stop: function stop() {
            this.done = !0;
            var t = this.tryEntries[0].completion;
            if ("throw" === t.type) throw t.arg;
            return this.rval;
        },
        dispatchException: function dispatchException(e) {
            if (this.done) throw e;
            var r = this;
            function handle(n, o) {
                return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o;
            }
            for(var o = this.tryEntries.length - 1; o >= 0; --o){
                var i = this.tryEntries[o], a = i.completion;
                if ("root" === i.tryLoc) return handle("end");
                if (i.tryLoc <= this.prev) {
                    var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc");
                    if (c && u) {
                        if (this.prev < i.catchLoc) return handle(i.catchLoc, !0);
                        if (this.prev < i.finallyLoc) return handle(i.finallyLoc);
                    } else if (c) {
                        if (this.prev < i.catchLoc) return handle(i.catchLoc, !0);
                    } else {
                        if (!u) throw new Error("try statement without catch or finally");
                        if (this.prev < i.finallyLoc) return handle(i.finallyLoc);
                    }
                }
            }
        },
        abrupt: function abrupt(t, e) {
            for(var r = this.tryEntries.length - 1; r >= 0; --r){
                var o = this.tryEntries[r];
                if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) {
                    var i = o;
                    break;
                }
            }
            i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null);
            var a = i ? i.completion : {};
            return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a);
        },
        complete: function complete(t, e) {
            if ("throw" === t.type) throw t.arg;
            return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y;
        },
        finish: function finish(t) {
            for(var e = this.tryEntries.length - 1; e >= 0; --e){
                var r = this.tryEntries[e];
                if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y;
            }
        },
        "catch": function _catch(t) {
            for(var e = this.tryEntries.length - 1; e >= 0; --e){
                var r = this.tryEntries[e];
                if (r.tryLoc === t) {
                    var n = r.completion;
                    if ("throw" === n.type) {
                        var o = n.arg;
                        resetTryEntry(r);
                    }
                    return o;
                }
            }
            throw new Error("illegal catch attempt");
        },
        delegateYield: function delegateYield(e, r, n) {
            return this.delegate = {
                iterator: values(e),
                resultName: r,
                nextLoc: n
            }, "next" === this.method && (this.arg = t), y;
        }
    }, e;
}
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
    try {
        var info = gen[key](arg);
        var value = info.value;
    } catch (error) {
        reject(error);
        return;
    }
    if (info.done) {
        resolve(value);
    } else {
        Promise.resolve(value).then(_next, _throw);
    }
}
function _asyncToGenerator(fn) {
    return function() {
        var self = this, args = arguments;
        return new Promise(function(resolve, reject) {
            var gen = fn.apply(self, args);
            function _next(value) {
                asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
            }
            function _throw(err) {
                asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
            }
            _next(undefined);
        });
    };
}
var rendererImpl = new _TwigDefaultRenderer.TwigDefaultRenderer();
var namespacesImpl = {};
function setRenderer(renderer) {
    rendererImpl = renderer;
}
function setNamespaces(namespaces) {
    namespacesImpl = namespaces;
}
function getNamespaces() {
    return namespacesImpl;
}
function getRenderer() {
    return rendererImpl;
}
function getPatternConfiguration(_x) {
    return _getPatternConfiguration.apply(this, arguments);
}
function _getPatternConfiguration() {
    _getPatternConfiguration = _asyncToGenerator(/*#__PURE__*/ _regeneratorRuntime().mark(function _callee(patternId) {
        var variantId, configuration, variant, _args = arguments;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
            while(1)switch(_context.prev = _context.next){
                case 0:
                    variantId = _args.length > 1 && _args[1] !== undefined ? _args[1] : _Pattern["default"].DEFAULT_VARIANT_NAME;
                    configuration = _args.length > 2 ? _args[2] : undefined;
                    _context.prev = 2;
                    variant = _index.storage.loadVariant(patternId, variantId);
                    _context.next = 6;
                    return new Promise(function(resolve) {
                        var config = variant.getConfiguration();
                        resolve(config[configuration]);
                    });
                case 6:
                    return _context.abrupt("return", _context.sent);
                case 9:
                    _context.prev = 9;
                    _context.t0 = _context["catch"](2);
                    return _context.abrupt("return", new Promise(function(resolve) {
                        if (_context.t0 instanceof Error) {
                            // eslint-disable-next-line no-console
                            console.info("Cannot load pattern configuration. Message: ".concat(_context.t0.message));
                        }
                        resolve("");
                    }));
                case 12:
                case "end":
                    return _context.stop();
            }
        }, _callee, null, [
            [
                2,
                9
            ]
        ]);
    }));
    return _getPatternConfiguration.apply(this, arguments);
}
function twingMapToArray(variables) {
    var ary = [];
    if (variables instanceof Map) {
        variables.forEach(function(value) {
            ary.push(value);
        });
    }
    return ary;
}
function renderPatternPreview(_x2) {
    return _renderPatternPreview.apply(this, arguments);
}
function _renderPatternPreview() {
    _renderPatternPreview = _asyncToGenerator(/*#__PURE__*/ _regeneratorRuntime().mark(function _callee2(patternId) {
        var variables, variantId, renderInfoContext, variant, renderInfo, promisedPreview, promisedPreviewNames, i, patternVariables, settings, _args2 = arguments;
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
            while(1)switch(_context2.prev = _context2.next){
                case 0:
                    variables = _args2.length > 1 && _args2[1] !== undefined ? _args2[1] : {};
                    variantId = _args2.length > 2 && _args2[2] !== undefined ? _args2[2] : _Pattern["default"].DEFAULT_VARIANT_NAME;
                    renderInfoContext = _args2.length > 3 && _args2[3] !== undefined ? _args2[3] : {};
                    _context2.prev = 3;
                    variant = _index.storage.loadVariant(patternId, variantId);
                    _context2.next = 10;
                    break;
                case 7:
                    _context2.prev = 7;
                    _context2.t0 = _context2["catch"](3);
                    return _context2.abrupt("return", new Promise(function(resolve) {
                        if (_context2.t0 instanceof Error) {
                            resolve(_context2.t0.message);
                        }
                    }));
                case 10:
                    renderInfo = Object.assign({}, variant.getRenderInfo(), renderInfoContext);
                    promisedPreview = [];
                    promisedPreviewNames = [];
                    i = 0;
                    Object.keys(renderInfo).forEach(function(key) {
                        var _renderInfo$key;
                        promisedPreview[i] = renderPatternPreview(renderInfo[key].patternId, renderInfo[key].variables, renderInfo[key].variant, ((_renderInfo$key = renderInfo[key]) === null || _renderInfo$key === void 0 ? void 0 : _renderInfo$key.children) || {});
                        promisedPreviewNames[i] = key;
                        i += 1;
                    });
                    patternVariables = variant.getVariables();
                    if (!(Object.keys(promisedPreview).length !== 0)) {
                        _context2.next = 18;
                        break;
                    }
                    return _context2.abrupt("return", new Promise(function(resolve) {
                        Promise.all(promisedPreview).then(function(promisedPreviewValues) {
                            var previewRenderedVariables = {};
                            for(var j = 0; j < promisedPreviewValues.length; j += 1){
                                var nameKeys = promisedPreviewNames[j].split("--");
                                // Handling multi value fields.
                                // Multi value patterns uses key--i as field name.
                                if (nameKeys.length === 1) {
                                    previewRenderedVariables[nameKeys[0]] = promisedPreviewValues[j];
                                } else {
                                    var fieldName = nameKeys[0];
                                    var delta = Number.parseInt(nameKeys[1], 10);
                                    if (variant.getField(fieldName).multiValueType() === _Field.MultiValueTypes.items) {
                                        var _previewRenderedVaria;
                                        previewRenderedVariables[nameKeys[0]] = (_previewRenderedVaria = previewRenderedVariables[nameKeys[0]]) !== null && _previewRenderedVaria !== void 0 ? _previewRenderedVaria : [];
                                        previewRenderedVariables[nameKeys[0]][delta] = promisedPreviewValues[j];
                                    } else if (variant.getField(fieldName).multiValueType() === _Field.MultiValueTypes.field_items) {
                                        var _previewRenderedVaria2;
                                        previewRenderedVariables[nameKeys[0]] = (_previewRenderedVaria2 = previewRenderedVariables[nameKeys[0]]) !== null && _previewRenderedVaria2 !== void 0 ? _previewRenderedVaria2 : [];
                                        previewRenderedVariables[nameKeys[0]][delta] = {
                                            content: promisedPreviewValues[j]
                                        };
                                    } else if (variant.getField(fieldName).multiValueType() === _Field.MultiValueTypes.single_value) {
                                        if (previewRenderedVariables[nameKeys[0]] === undefined) {
                                            previewRenderedVariables[nameKeys[0]] = promisedPreviewValues[j];
                                        } else {
                                            previewRenderedVariables[nameKeys[0]] += promisedPreviewValues[j];
                                        }
                                    } else {
                                        previewRenderedVariables[nameKeys[0]] = "No multi value type for field: '".concat(variant.getPattern().getId(), ":").concat(fieldName, ":").concat(variant.getField(fieldName).multiValueType(), "'");
                                    }
                                }
                            }
                            var finalVariables = Object.assign({}, patternVariables, buildBaseVariables(variables));
                            Object.keys(previewRenderedVariables).forEach(function(key) {
                                // Overwrite variables with rendered ones.
                                if (finalVariables[key] !== null) {
                                    finalVariables[key] = previewRenderedVariables[key];
                                }
                            });
                            renderPattern(patternId, finalVariables, variantId).then(function(output) {
                                resolve(output);
                            })["catch"](function(error) {
                                resolve(error);
                            });
                        });
                    }));
                case 18:
                    settings = variant.getSettings();
                    Object.keys(settings).forEach(function(key) {
                        if (settings[key].type === "attributes") {
                            // eslint-disable-next-line no-param-reassign
                            variables[key] = variables[key] ? new _index.TwigAttribute(variables[key]) : new _index.TwigAttribute(patternVariables[key]);
                        }
                    });
                    return _context2.abrupt("return", renderPattern(patternId, Object.assign({}, patternVariables, buildBaseVariables(variables, true)), variantId));
                case 21:
                case "end":
                    return _context2.stop();
            }
        }, _callee2, null, [
            [
                3,
                7
            ]
        ]);
    }));
    return _renderPatternPreview.apply(this, arguments);
}
function buildBaseVariables(variables) {
    var addGlobals = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
    var passedVariables = variables;
    // Variables are passed as Map in Twing.
    if (variables instanceof Map) {
        var obj = {};
        variables.forEach(function(value, key) {
            obj[key] = value;
        });
        passedVariables = obj;
    }
    if (addGlobals) {
        return Object.assign({}, _index.storage.getGlobals(), passedVariables);
    }
    return passedVariables;
}
function renderPattern(_x3) {
    return _renderPattern.apply(this, arguments);
}
function _renderPattern() {
    _renderPattern = _asyncToGenerator(/*#__PURE__*/ _regeneratorRuntime().mark(function _callee3(patternId) {
        var variables, variantId, variant, patternVariables, finalVariables, _args3 = arguments;
        return _regeneratorRuntime().wrap(function _callee3$(_context3) {
            while(1)switch(_context3.prev = _context3.next){
                case 0:
                    variables = _args3.length > 1 && _args3[1] !== undefined ? _args3[1] : {};
                    variantId = _args3.length > 2 && _args3[2] !== undefined ? _args3[2] : _Pattern["default"].DEFAULT_VARIANT_NAME;
                    _context3.prev = 2;
                    variant = _index.storage.loadVariant(patternId, variantId);
                    patternVariables = variant.getVariables(false);
                    finalVariables = Object.assign({}, patternVariables, buildBaseVariables(variables, true));
                    finalVariables.variant = variantId;
                    variant.setRenderArgs(finalVariables);
                    _context3.next = 10;
                    return rendererImpl.renderVariant(variant, finalVariables);
                case 10:
                    return _context3.abrupt("return", _context3.sent);
                case 13:
                    _context3.prev = 13;
                    _context3.t0 = _context3["catch"](2);
                    if (!_context3.t0.message) {
                        _context3.next = 17;
                        break;
                    }
                    return _context3.abrupt("return", _context3.t0.message);
                case 17:
                    return _context3.abrupt("return", _context3.t0);
                case 18:
                case "end":
                    return _context3.stop();
            }
        }, _callee3, null, [
            [
                2,
                13
            ]
        ]);
    }));
    return _renderPattern.apply(this, arguments);
}


/***/ }),

/***/ 17407:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

__webpack_require__(53965);
__webpack_require__(28266);
__webpack_require__(79761);
__webpack_require__(33622);
__webpack_require__(97313);
__webpack_require__(74376);
__webpack_require__(92230);
Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.mergeDeep = mergeDeep;
__webpack_require__(31406);
__webpack_require__(32639);
__webpack_require__(63704);
__webpack_require__(82365);
__webpack_require__(90840);
__webpack_require__(39870);
__webpack_require__(51624);
__webpack_require__(8351);
__webpack_require__(30343);
__webpack_require__(13951);
__webpack_require__(1554);
__webpack_require__(97950);
__webpack_require__(46833);
function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}
function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _iterableToArray(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}
function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _typeof(o) {
    "@babel/helpers - typeof";
    return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o) {
        return typeof o;
    } : function(o) {
        return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
    }, _typeof(o);
}
/**
 * Performs a deep merge of objects and returns new object. Does not modify
 * objects (immutable) and merges arrays via concatenation.
 *
 * @param {...object} objects - Objects to merge
 * @returns {object} New object with merged key/values
 */ function mergeDeep() {
    var isObject = function isObject(obj) {
        return obj && _typeof(obj) === "object";
    };
    for(var _len = arguments.length, objects = new Array(_len), _key = 0; _key < _len; _key++){
        objects[_key] = arguments[_key];
    }
    return objects.reduce(function(prev, obj) {
        Object.keys(obj).forEach(function(key) {
            var pVal = prev[key];
            var oVal = obj[key];
            if (Array.isArray(pVal) && Array.isArray(oVal)) {
                // eslint-disable-next-line no-param-reassign
                prev[key] = pVal.concat.apply(pVal, _toConsumableArray(oVal));
            } else if (isObject(pVal) && isObject(oVal)) {
                // eslint-disable-next-line no-param-reassign
                prev[key] = mergeDeep(pVal, oVal);
            } else {
                // eslint-disable-next-line no-param-reassign
                prev[key] = oVal;
            }
        });
        return prev;
    }, {});
}


/***/ }),

/***/ 99920:
/***/ ((module, exports, __webpack_require__) => {

"use strict";

__webpack_require__(92230);
Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.init = init;
__webpack_require__(63704);
__webpack_require__(32639);
__webpack_require__(82365);
__webpack_require__(90840);
__webpack_require__(83676);
__webpack_require__(74376);
__webpack_require__(65710);
__webpack_require__(51624);
var _pattern = __webpack_require__(84065);
var _require = __webpack_require__(48667), TwingEnvironment = _require.TwingEnvironment, TwingFunction = _require.TwingFunction, TwingLoaderFilesystem = _require.TwingLoaderFilesystem, TwingFilter = _require.TwingFilter;
var twingFilters = __webpack_require__(78004);
var loader = new TwingLoaderFilesystem();
var environment = new TwingEnvironment(loader, {
    autoescape: false,
    debug: true
});
// In storybook we get this returned as an instance of
// TWigLoaderNull, we need to avoid processing this.
if (typeof loader.addPath === "function") {
    var namespaces = _pattern.renderer.getNamespaces();
    Object.keys(namespaces).forEach(function(namespace) {
        loader.addPath(namespaces[namespace], namespace);
    });
}
function twigAttributeFunction() {
    var attributes = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
    return Promise.resolve(new _pattern.TwigAttribute(attributes));
}
function twigFileUrl(url) {
    return Promise.resolve(url.replace("ws-assets://", ""));
}
function _without(element) {
    if (!element) {
        return [];
    }
    if (element instanceof _pattern.TwigAttribute) {
        for(var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++){
            args[_key - 1] = arguments[_key];
        }
        args.forEach(function(key) {
            element.removeAttribute(key);
        });
    }
    return element;
}
function init() {
    twingFilters(environment);
    var filters = {
        without: function without(arg1) {
            for(var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++){
                args[_key2 - 1] = arguments[_key2];
            }
            return Promise.resolve(_without.apply(void 0, [
                arg1
            ].concat(args)));
        }
    };
    var functions = {
        file_url: twigFileUrl,
        pattern: _pattern.renderer.renderPattern,
        create_attribute: twigAttributeFunction,
        pattern_configuration: _pattern.renderer.getPatternConfiguration,
        pattern_preview: function pattern_preview(patternId) {
            var variables = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
            var variantId = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "__default";
            return new Promise(function(resolve) {
                _pattern.renderer.renderPatternPreview(patternId, variables, variantId).then(function(output) {
                    resolve(output);
                });
            });
        }
    };
    Object.keys(functions).forEach(function(key) {
        environment.addFunction(new TwingFunction(key, functions[key], []));
    });
    Object.keys(filters).forEach(function(key) {
        environment.addFilter(new TwingFilter(key, filters[key], []));
    });
}
init();
module.exports = environment;


/***/ }),

/***/ 91729:
/***/ (() => {



/***/ }),

/***/ 5086:
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
Defaults
#}
{% set tag_name = tag_name|default('div') %}
{% set color = color|default('primary') %}
{% set size = size|default('medium') %}
{% set attributes = attributes|default(create_attribute()) %}
{% set icon_size = icon_size|default('default') %}
{% set icon_alignment = icon_alignment|default('right') %}

{#
Classes
#}
{% set classes = [
  'cursor-pointer items-center justify-center inline-flex border-2 focus:outline-none transition-colors duration-500',
  expanded ? 'w-full',
  variant == 'outline' ? 'border-2',
  round ? 'border-2 rounded-xl',
  icon_alignment == 'left' ? 'flex-row-reverse' : 'flex-row',
  pattern_configuration('button', variant, 'colors')[color],
  pattern_configuration('button', variant, 'size')['text'][size],
  pattern_configuration('button', variant, 'size')['padding'][size],
] %}

{% set icon_size = ([
  icon_alignment == 'left' ? 'mr-4' : 'ml-4',
  pattern_configuration('button', variant, 'size')['icon'][size],
]) | sort | join(' ') | trim %}

{% if url is not empty %}
  {% set attributes = attributes.setAttribute('href', url) %}
  {% set tag_name = 'a' %}
{% endif %}

{#
Template
#}
<{{ tag_name }} {{ attributes.addClass(classes | sort | join(' ') | trim).setAttribute('target', target) }}>
{{ text }}
  {% if icon is not empty %}
    {% include "@atoms/svg/_svg--icon.twig" with {
      icon: icon,
      size: icon_size,
    } only %}
  {% endif %}
</{{ tag_name }}>
`, `72eb13a4482f00d66d5fd0d619831e74496ca2a0d884615a93d6978588c745a7`);

                let aliases = new this.Context();
                aliases.proxy[`_self`] = this.aliases.proxy[`_self`] = this;
            }

            async doDisplay(context, outputBuffer, blocks = new Map()) {
                let aliases = this.aliases.clone();

                context.proxy[`tag_name`] = (((context.has(`tag_name`))) ? (await this.environment.getFilter('default').traceableCallable(4, this.source)(...[(context.has(`tag_name`) ? context.get(`tag_name`) : null), `div`])) : (`div`));
                context.proxy[`color`] = (((context.has(`color`))) ? (await this.environment.getFilter('default').traceableCallable(5, this.source)(...[(context.has(`color`) ? context.get(`color`) : null), `primary`])) : (`primary`));
                context.proxy[`size`] = (((context.has(`size`))) ? (await this.environment.getFilter('default').traceableCallable(6, this.source)(...[(context.has(`size`) ? context.get(`size`) : null), `medium`])) : (`medium`));
                context.proxy[`attributes`] = (((context.has(`attributes`))) ? (await this.environment.getFilter('default').traceableCallable(7, this.source)(...[(context.has(`attributes`) ? context.get(`attributes`) : null), await this.environment.getFunction('create_attribute').traceableCallable(7, this.source)(...[])])) : (await this.environment.getFunction('create_attribute').traceableCallable(7, this.source)(...[])));
                context.proxy[`icon_size`] = (((context.has(`icon_size`))) ? (await this.environment.getFilter('default').traceableCallable(8, this.source)(...[(context.has(`icon_size`) ? context.get(`icon_size`) : null), `default`])) : (`default`));
                context.proxy[`icon_alignment`] = (((context.has(`icon_alignment`))) ? (await this.environment.getFilter('default').traceableCallable(9, this.source)(...[(context.has(`icon_alignment`) ? context.get(`icon_alignment`) : null), `right`])) : (`right`));
                outputBuffer.echo(`
`);
                context.proxy[`classes`] = new Map([[0, `cursor-pointer items-center justify-center inline-flex border-2 focus:outline-none transition-colors duration-500`], [1, (((context.has(`expanded`) ? context.get(`expanded`) : null)) ? (`w-full`) : (``))], [2, ((this.compare((context.has(`variant`) ? context.get(`variant`) : null), `outline`)) ? (`border-2`) : (``))], [3, (((context.has(`round`) ? context.get(`round`) : null)) ? (`border-2 rounded-xl`) : (``))], [4, ((this.compare((context.has(`icon_alignment`) ? context.get(`icon_alignment`) : null), `left`)) ? (`flex-row-reverse`) : (`flex-row`))], [5, await (async () => {let object = await this.environment.getFunction('pattern_configuration').traceableCallable(20, this.source)(...[`button`, (context.has(`variant`) ? context.get(`variant`) : null), `colors`]); return this.get(object, (context.has(`color`) ? context.get(`color`) : null));})()], [6, await (async () => {let object = await (async () => {let object = await this.environment.getFunction('pattern_configuration').traceableCallable(21, this.source)(...[`button`, (context.has(`variant`) ? context.get(`variant`) : null), `size`]); return this.get(object, `text`);})(); return this.get(object, (context.has(`size`) ? context.get(`size`) : null));})()], [7, await (async () => {let object = await (async () => {let object = await this.environment.getFunction('pattern_configuration').traceableCallable(22, this.source)(...[`button`, (context.has(`variant`) ? context.get(`variant`) : null), `size`]); return this.get(object, `padding`);})(); return this.get(object, (context.has(`size`) ? context.get(`size`) : null));})()]]);
                outputBuffer.echo(`
`);
                context.proxy[`icon_size`] = await this.environment.getFilter('trim').traceableCallable(28, this.source)(...[await this.environment.getFilter('join').traceableCallable(28, this.source)(...[await this.environment.getFilter('sort').traceableCallable(28, this.source)(...[new Map([[0, ((this.compare((context.has(`icon_alignment`) ? context.get(`icon_alignment`) : null), `left`)) ? (`mr-4`) : (`ml-4`))], [1, await (async () => {let object = await (async () => {let object = await this.environment.getFunction('pattern_configuration').traceableCallable(27, this.source)(...[`button`, (context.has(`variant`) ? context.get(`variant`) : null), `size`]); return this.get(object, `icon`);})(); return this.get(object, (context.has(`size`) ? context.get(`size`) : null));})()]])]), ` `])]);
                outputBuffer.echo(`
`);
                if (this.evaluate(!(await this.environment.getTest('empty').traceableCallable(30, this.source)(...[(context.has(`url`) ? context.get(`url`) : null)])))) {
                    outputBuffer.echo(`  `);
                    context.proxy[`attributes`] = await this.traceableMethod(this.getAttribute, 31, this.source)(this.environment, (context.has(`attributes`) ? context.get(`attributes`) : null), `setAttribute`, new Map([[0, `href`], [1, (context.has(`url`) ? context.get(`url`) : null)]]), `method`, false, false, false);
                    outputBuffer.echo(`  `);
                    context.proxy[`tag_name`] = `a`;
                }
                outputBuffer.echo(`
`);
                outputBuffer.echo(`<`);
                outputBuffer.echo((context.has(`tag_name`) ? context.get(`tag_name`) : null));
                outputBuffer.echo(` `);
                outputBuffer.echo(await this.traceableMethod(this.getAttribute, 38, this.source)(this.environment, await this.traceableMethod(this.getAttribute, 38, this.source)(this.environment, (context.has(`attributes`) ? context.get(`attributes`) : null), `addClass`, new Map([[0, await this.environment.getFilter('trim').traceableCallable(38, this.source)(...[await this.environment.getFilter('join').traceableCallable(38, this.source)(...[await this.environment.getFilter('sort').traceableCallable(38, this.source)(...[(context.has(`classes`) ? context.get(`classes`) : null)]), ` `])])]]), `method`, false, false, false), `setAttribute`, new Map([[0, `target`], [1, (context.has(`target`) ? context.get(`target`) : null)]]), `method`, false, false, false));
                outputBuffer.echo(`>
`);
                outputBuffer.echo((context.has(`text`) ? context.get(`text`) : null));
                outputBuffer.echo(`
  `);
                if (this.evaluate(!(await this.environment.getTest('empty').traceableCallable(40, this.source)(...[(context.has(`icon`) ? context.get(`icon`) : null)])))) {
                    outputBuffer.echo(`    `);
                    outputBuffer.echo(await this.include(context, outputBuffer, `42b7e111c2edc6215a54dcdc5414d847cd3557733ea9b82b1c32f716e0126422`, new Map([[`icon`, (context.has(`icon`) ? context.get(`icon`) : null)], [`size`, (context.has(`icon_size`) ? context.get(`icon_size`) : null)]]), false, false, 41));
                    outputBuffer.echo(`  `);
                }
                outputBuffer.echo(`</`);
                outputBuffer.echo((context.has(`tag_name`) ? context.get(`tag_name`) : null));
                outputBuffer.echo(`>
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

__webpack_require__(40881);
env.registerTemplatesModule(templatesModule, '72eb13a4482f00d66d5fd0d619831e74496ca2a0d884615a93d6978588c745a7');

let template = env.loadTemplate('72eb13a4482f00d66d5fd0d619831e74496ca2a0d884615a93d6978588c745a7');

module.exports = (context = {}) => {
    return template.then((template) => template.render(context));
};

/***/ }),

/***/ 73353:
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

                this._source = new this.Source(`<div class="ui-hamburger-02" :class="{'is-active': menuIsOpen}"></div>
`, `01c574c9a626cc4deb0422e101a7b0b2d188b4fd4a3ffcb055633d38097b8995`);

                let aliases = new this.Context();
                aliases.proxy[`_self`] = this.aliases.proxy[`_self`] = this;
            }

            async doDisplay(context, outputBuffer, blocks = new Map()) {
                let aliases = this.aliases.clone();

                outputBuffer.echo(`<div class="ui-hamburger-02" :class="{'is-active': menuIsOpen}"></div>
`);
            }

        }],
    ]);
};

    return module.exports;
})();

env.registerTemplatesModule(templatesModule, '01c574c9a626cc4deb0422e101a7b0b2d188b4fd4a3ffcb055633d38097b8995');

let template = env.loadTemplate('01c574c9a626cc4deb0422e101a7b0b2d188b4fd4a3ffcb055633d38097b8995');

module.exports = (context = {}) => {
    return template.then((template) => template.render(context));
};

/***/ }),

/***/ 63452:
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

                this._source = new this.Source(`<div class="{{ background_style }}"
     style="background-image: url('{{ file_url(url|trim|default('images/logo.png')) }}');"></div>
`, `3f965eea381ceff798c34618988433869598539ed8f434e3ed7e1851c3bc4a19`);

                let aliases = new this.Context();
                aliases.proxy[`_self`] = this.aliases.proxy[`_self`] = this;
            }

            async doDisplay(context, outputBuffer, blocks = new Map()) {
                let aliases = this.aliases.clone();

                outputBuffer.echo(`<div class="`);
                outputBuffer.echo((context.has(`background_style`) ? context.get(`background_style`) : null));
                outputBuffer.echo(`"
     style="background-image: url('`);
                outputBuffer.echo(await this.environment.getFunction('file_url').traceableCallable(2, this.source)(...[await this.environment.getFilter('default').traceableCallable(2, this.source)(...[await this.environment.getFilter('trim').traceableCallable(2, this.source)(...[(context.has(`url`) ? context.get(`url`) : null)]), `images/logo.png`])]));
                outputBuffer.echo(`');"></div>
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

env.registerTemplatesModule(templatesModule, '3f965eea381ceff798c34618988433869598539ed8f434e3ed7e1851c3bc4a19');

let template = env.loadTemplate('3f965eea381ceff798c34618988433869598539ed8f434e3ed7e1851c3bc4a19');

module.exports = (context = {}) => {
    return template.then((template) => template.render(context));
};

/***/ }),

/***/ 12369:
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

                this._source = new this.Source(`{% if caption is not empty %}
  <figure>
    {{ image }}
    {% if caption is not empty %}
      <figcaption>{{ caption }}</figcaption>
    {% endif %}
  </figure>
{% else %}
  {{ image }}
{% endif %}
`, `3e5c250da06370827ffcb5b57d909a2c771f8b381b1b7eb757ab8d78f7422f4a`);

                let aliases = new this.Context();
                aliases.proxy[`_self`] = this.aliases.proxy[`_self`] = this;
            }

            async doDisplay(context, outputBuffer, blocks = new Map()) {
                let aliases = this.aliases.clone();

                if (this.evaluate(!(await this.environment.getTest('empty').traceableCallable(1, this.source)(...[(context.has(`caption`) ? context.get(`caption`) : null)])))) {
                    outputBuffer.echo(`  <figure>
    `);
                    outputBuffer.echo((context.has(`image`) ? context.get(`image`) : null));
                    outputBuffer.echo(`
    `);
                    if (this.evaluate(!(await this.environment.getTest('empty').traceableCallable(4, this.source)(...[(context.has(`caption`) ? context.get(`caption`) : null)])))) {
                        outputBuffer.echo(`      <figcaption>`);
                        outputBuffer.echo((context.has(`caption`) ? context.get(`caption`) : null));
                        outputBuffer.echo(`</figcaption>
    `);
                    }
                    outputBuffer.echo(`  </figure>
`);
                }
                else {
                    outputBuffer.echo(`  `);
                    outputBuffer.echo((context.has(`image`) ? context.get(`image`) : null));
                    outputBuffer.echo(`
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

env.registerTemplatesModule(templatesModule, '3e5c250da06370827ffcb5b57d909a2c771f8b381b1b7eb757ab8d78f7422f4a');

let template = env.loadTemplate('3e5c250da06370827ffcb5b57d909a2c771f8b381b1b7eb757ab8d78f7422f4a');

module.exports = (context = {}) => {
    return template.then((template) => template.render(context));
};

/***/ }),

/***/ 46042:
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
 * Image component for images and background images.
 */
#}
{# SETTINGS #}
{% set variant = variant|default('image') %}

{# TEMPLATES #}
{% if variant == 'image' %}
  {%- set image -%}
    {% if url is not empty %}
      <img {{ img_attributes }} src="{{ file_url(url) }}" alt="{{ alt }}"/>
    {% else %}
      {{- image -}}
    {%- endif -%}
  {% endset %}

  {% include '@atoms/image/_image--image.twig' with {
    image: image,
    caption: caption
  } only %}
{% elseif variant == 'background' %}
  {% include '@atoms/image/_image--background.twig' with {
    url: url,
    background_style: background_style
  } only %}
{% endif %}
`, `aceec25e08cbe825d9ec1bbd9c04bc6fd1adce7cc74b9439a627f952751ace3c`);

                let aliases = new this.Context();
                aliases.proxy[`_self`] = this.aliases.proxy[`_self`] = this;
            }

            async doDisplay(context, outputBuffer, blocks = new Map()) {
                let aliases = this.aliases.clone();

                context.proxy[`variant`] = (((context.has(`variant`))) ? (await this.environment.getFilter('default').traceableCallable(8, this.source)(...[(context.has(`variant`) ? context.get(`variant`) : null), `image`])) : (`image`));
                outputBuffer.echo(`
`);
                if (this.evaluate(this.compare((context.has(`variant`) ? context.get(`variant`) : null), `image`))) {
                    outputBuffer.start();
                    if (this.evaluate(!(await this.environment.getTest('empty').traceableCallable(13, this.source)(...[(context.has(`url`) ? context.get(`url`) : null)])))) {
                        outputBuffer.echo(`      <img `);
                        outputBuffer.echo((context.has(`img_attributes`) ? context.get(`img_attributes`) : null));
                        outputBuffer.echo(` src="`);
                        outputBuffer.echo(await this.environment.getFunction('file_url').traceableCallable(14, this.source)(...[(context.has(`url`) ? context.get(`url`) : null)]));
                        outputBuffer.echo(`" alt="`);
                        outputBuffer.echo((context.has(`alt`) ? context.get(`alt`) : null));
                        outputBuffer.echo(`"/>
    `);
                    }
                    else {
                        outputBuffer.echo((context.has(`image`) ? context.get(`image`) : null));
                    }
                    context.proxy[`image`] = (() => {let tmp = outputBuffer.getAndClean(); return tmp === '' ? '' : new this.Markup(tmp, this.environment.getCharset());})();
                    outputBuffer.echo(`
  `);
                    outputBuffer.echo(await this.include(context, outputBuffer, `3e5c250da06370827ffcb5b57d909a2c771f8b381b1b7eb757ab8d78f7422f4a`, new Map([[`image`, (context.has(`image`) ? context.get(`image`) : null)], [`caption`, (context.has(`caption`) ? context.get(`caption`) : null)]]), false, false, 20));
                }
                else if (this.evaluate(this.compare((context.has(`variant`) ? context.get(`variant`) : null), `background`))) {
                    outputBuffer.echo(`  `);
                    outputBuffer.echo(await this.include(context, outputBuffer, `3f965eea381ceff798c34618988433869598539ed8f434e3ed7e1851c3bc4a19`, new Map([[`url`, (context.has(`url`) ? context.get(`url`) : null)], [`background_style`, (context.has(`background_style`) ? context.get(`background_style`) : null)]]), false, false, 25));
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

__webpack_require__(12369);
__webpack_require__(63452);
env.registerTemplatesModule(templatesModule, 'aceec25e08cbe825d9ec1bbd9c04bc6fd1adce7cc74b9439a627f952751ace3c');

let template = env.loadTemplate('aceec25e08cbe825d9ec1bbd9c04bc6fd1adce7cc74b9439a627f952751ace3c');

module.exports = (context = {}) => {
    return template.then((template) => template.render(context));
};

/***/ }),

/***/ 21490:
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
 * logo
 *
 * See logo.wingsuit.yaml for documentation.
 */
#}

{# TEMPLATE #}
<a class="pr-2 block" href="/">
  <img with="235" height="50" src="/{{ file_url('ws-assets://images/logo.svg') }}" alt="Brand Logo" class="w-full max-w-7xl">
</a>
`, `de728692c904e8a769f822a0508c5dfcb9e1cbcaee312f74fe757804f0d221f5`);

                let aliases = new this.Context();
                aliases.proxy[`_self`] = this.aliases.proxy[`_self`] = this;
            }

            async doDisplay(context, outputBuffer, blocks = new Map()) {
                let aliases = this.aliases.clone();

                outputBuffer.echo(`
`);
                outputBuffer.echo(`<a class="pr-2 block" href="/">
  <img with="235" height="50" src="/`);
                outputBuffer.echo(await this.environment.getFunction('file_url').traceableCallable(12, this.source)(...[`ws-assets://images/logo.svg`]));
                outputBuffer.echo(`" alt="Brand Logo" class="w-full max-w-7xl">
</a>
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

env.registerTemplatesModule(templatesModule, 'de728692c904e8a769f822a0508c5dfcb9e1cbcaee312f74fe757804f0d221f5');

let template = env.loadTemplate('de728692c904e8a769f822a0508c5dfcb9e1cbcaee312f74fe757804f0d221f5');

module.exports = (context = {}) => {
    return template.then((template) => template.render(context));
};

/***/ }),

/***/ 66745:
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
 * rich-text
 * with the rich-text we can use to creat different types of text as you can see in storybook.
 * Ex. headlines, list and more.
 * See rich-text.wingsuit.yaml for documentation.
 */
#}
{% set variant = variant|default('default') %}
{# TEMPLATE #}
<div
{{ attributes|default(create_attribute()).addClass(
  [
    'dark:prose-dark prose',
    text_align == 'center' ? 'text-center',
    width == 'small' ? 'max-w-3xl mx-auto': 'max-w-none',
    variant == 'default' ? 'lg:prose-lg',
    variant == 'large' ? 'prose-lg md:prose-2xl'
  ]
) }}
>
  {% block text %}
    {{ text }}
  {% endblock %}
</div>
`, `563725f8328ab252f287626622ae33633670f6759457f7da8b318b2545056eb4`);

                let aliases = new this.Context();
                
                this.blockHandlers = new Map([
                    ['text', async (context, outputBuffer, blocks = new Map()) => {
                        let aliases = this.aliases.clone();
                        outputBuffer.echo(`    `);
                        outputBuffer.echo((context.has(`text`) ? context.get(`text`) : null));
                        outputBuffer.echo(`
  `);
                    }]
                ]);
                aliases.proxy[`_self`] = this.aliases.proxy[`_self`] = this;
            }

            async doDisplay(context, outputBuffer, blocks = new Map()) {
                let aliases = this.aliases.clone();

                context.proxy[`variant`] = (((context.has(`variant`))) ? (await this.environment.getFilter('default').traceableCallable(10, this.source)(...[(context.has(`variant`) ? context.get(`variant`) : null), `default`])) : (`default`));
                outputBuffer.echo(`<div
`);
                outputBuffer.echo(await this.traceableMethod(this.getAttribute, 13, this.source)(this.environment, (((context.has(`attributes`))) ? (await this.environment.getFilter('default').traceableCallable(13, this.source)(...[(context.has(`attributes`) ? context.get(`attributes`) : null), await this.environment.getFunction('create_attribute').traceableCallable(13, this.source)(...[])])) : (await this.environment.getFunction('create_attribute').traceableCallable(13, this.source)(...[]))), `addClass`, new Map([[0, new Map([[0, `dark:prose-dark prose`], [1, ((this.compare((context.has(`text_align`) ? context.get(`text_align`) : null), `center`)) ? (`text-center`) : (``))], [2, ((this.compare((context.has(`width`) ? context.get(`width`) : null), `small`)) ? (`max-w-3xl mx-auto`) : (`max-w-none`))], [3, ((this.compare((context.has(`variant`) ? context.get(`variant`) : null), `default`)) ? (`lg:prose-lg`) : (``))], [4, ((this.compare((context.has(`variant`) ? context.get(`variant`) : null), `large`)) ? (`prose-lg md:prose-2xl`) : (``))]])]]), `method`, false, false, false));
                outputBuffer.echo(`
>
  `);
                outputBuffer.echo(await this.traceableRenderBlock(23, this.source)('text', context.clone(), outputBuffer, blocks));
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

env.registerTemplatesModule(templatesModule, '563725f8328ab252f287626622ae33633670f6759457f7da8b318b2545056eb4');

let template = env.loadTemplate('563725f8328ab252f287626622ae33633670f6759457f7da8b318b2545056eb4');

module.exports = (context = {}) => {
    return template.then((template) => template.render(context));
};

/***/ }),

/***/ 40881:
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

                this._source = new this.Source(`{# SETTINGS #}
{% set fill_color = fill_color|default('fill-current') %}
{% set classes = ([
  'svg',
  fill_color,
  size,
] | sort | join(' ') | trim )%}

{% set attributes = attributes|default(create_attribute()).addClass(classes) %}

{# TEMPLATE #}
<svg {{ attributes }}>
    <use xlink:href="{{ file_url('ws-assets://images/spritemap.svg') }}#{{ icon }}"></use>
</svg>
`, `42b7e111c2edc6215a54dcdc5414d847cd3557733ea9b82b1c32f716e0126422`);

                let aliases = new this.Context();
                aliases.proxy[`_self`] = this.aliases.proxy[`_self`] = this;
            }

            async doDisplay(context, outputBuffer, blocks = new Map()) {
                let aliases = this.aliases.clone();

                context.proxy[`fill_color`] = (((context.has(`fill_color`))) ? (await this.environment.getFilter('default').traceableCallable(2, this.source)(...[(context.has(`fill_color`) ? context.get(`fill_color`) : null), `fill-current`])) : (`fill-current`));
                context.proxy[`classes`] = await this.environment.getFilter('trim').traceableCallable(7, this.source)(...[await this.environment.getFilter('join').traceableCallable(7, this.source)(...[await this.environment.getFilter('sort').traceableCallable(7, this.source)(...[new Map([[0, `svg`], [1, (context.has(`fill_color`) ? context.get(`fill_color`) : null)], [2, (context.has(`size`) ? context.get(`size`) : null)]])]), ` `])]);
                outputBuffer.echo(`
`);
                context.proxy[`attributes`] = await this.traceableMethod(this.getAttribute, 9, this.source)(this.environment, (((context.has(`attributes`))) ? (await this.environment.getFilter('default').traceableCallable(9, this.source)(...[(context.has(`attributes`) ? context.get(`attributes`) : null), await this.environment.getFunction('create_attribute').traceableCallable(9, this.source)(...[])])) : (await this.environment.getFunction('create_attribute').traceableCallable(9, this.source)(...[]))), `addClass`, new Map([[0, (context.has(`classes`) ? context.get(`classes`) : null)]]), `method`, false, false, false);
                outputBuffer.echo(`
`);
                outputBuffer.echo(`<svg `);
                outputBuffer.echo((context.has(`attributes`) ? context.get(`attributes`) : null));
                outputBuffer.echo(`>
    <use xlink:href="`);
                outputBuffer.echo(await this.environment.getFunction('file_url').traceableCallable(13, this.source)(...[`ws-assets://images/spritemap.svg`]));
                outputBuffer.echo(`#`);
                outputBuffer.echo((context.has(`icon`) ? context.get(`icon`) : null));
                outputBuffer.echo(`"></use>
</svg>
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

env.registerTemplatesModule(templatesModule, '42b7e111c2edc6215a54dcdc5414d847cd3557733ea9b82b1c32f716e0126422');

let template = env.loadTemplate('42b7e111c2edc6215a54dcdc5414d847cd3557733ea9b82b1c32f716e0126422');

module.exports = (context = {}) => {
    return template.then((template) => template.render(context));
};

/***/ }),

/***/ 80459:
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

                this._source = new this.Source(`{# SETTINGS #}
{% set classes = ([
  'svg',
  size != '' ? size,
  'sprite-' ~ icon
] | sort | join(' ') | trim )%}

{% set attributes = attributes|default(create_attribute()).addClass(classes) %}

{# TEMPLATE #}
<div {{ attributes }}>
</div>
`, `56d092a52a6f7459f29665e146e3046ab9e60aa8cbbc0a62eb2e9cea1acba17a`);

                let aliases = new this.Context();
                aliases.proxy[`_self`] = this.aliases.proxy[`_self`] = this;
            }

            async doDisplay(context, outputBuffer, blocks = new Map()) {
                let aliases = this.aliases.clone();

                context.proxy[`classes`] = await this.environment.getFilter('trim').traceableCallable(6, this.source)(...[await this.environment.getFilter('join').traceableCallable(6, this.source)(...[await this.environment.getFilter('sort').traceableCallable(6, this.source)(...[new Map([[0, `svg`], [1, ((!this.compare((context.has(`size`) ? context.get(`size`) : null), ``)) ? ((context.has(`size`) ? context.get(`size`) : null)) : (``))], [2, (this.concatenate(`sprite-`, (context.has(`icon`) ? context.get(`icon`) : null)))]])]), ` `])]);
                outputBuffer.echo(`
`);
                context.proxy[`attributes`] = await this.traceableMethod(this.getAttribute, 8, this.source)(this.environment, (((context.has(`attributes`))) ? (await this.environment.getFilter('default').traceableCallable(8, this.source)(...[(context.has(`attributes`) ? context.get(`attributes`) : null), await this.environment.getFunction('create_attribute').traceableCallable(8, this.source)(...[])])) : (await this.environment.getFunction('create_attribute').traceableCallable(8, this.source)(...[]))), `addClass`, new Map([[0, (context.has(`classes`) ? context.get(`classes`) : null)]]), `method`, false, false, false);
                outputBuffer.echo(`
`);
                outputBuffer.echo(`<div `);
                outputBuffer.echo((context.has(`attributes`) ? context.get(`attributes`) : null));
                outputBuffer.echo(`>
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

env.registerTemplatesModule(templatesModule, '56d092a52a6f7459f29665e146e3046ab9e60aa8cbbc0a62eb2e9cea1acba17a');

let template = env.loadTemplate('56d092a52a6f7459f29665e146e3046ab9e60aa8cbbc0a62eb2e9cea1acba17a');

module.exports = (context = {}) => {
    return template.then((template) => template.render(context));
};

/***/ }),

/***/ 60427:
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

                this._source = new this.Source(`{# SETTINGS #}
{% set variant = variant|default('icon') %}

{# VATIANT TEMPLATES #}
{% if variant == 'icon' %}
  {% include "@atoms/svg/_svg--icon.twig" %}
{% elseif variant == 'inline-css' %}
  {% include "@atoms/svg/_svg--inline-css.twig" %}
{% endif %}
`, `6539fb6b9ada8d22548ec332fd51ba2f5a24f555ba8fa56627d58fb3ecc7a56f`);

                let aliases = new this.Context();
                aliases.proxy[`_self`] = this.aliases.proxy[`_self`] = this;
            }

            async doDisplay(context, outputBuffer, blocks = new Map()) {
                let aliases = this.aliases.clone();

                context.proxy[`variant`] = (((context.has(`variant`))) ? (await this.environment.getFilter('default').traceableCallable(2, this.source)(...[(context.has(`variant`) ? context.get(`variant`) : null), `icon`])) : (`icon`));
                outputBuffer.echo(`
`);
                if (this.evaluate(this.compare((context.has(`variant`) ? context.get(`variant`) : null), `icon`))) {
                    outputBuffer.echo(`  `);
                    outputBuffer.echo(await this.include(context, outputBuffer, `42b7e111c2edc6215a54dcdc5414d847cd3557733ea9b82b1c32f716e0126422`, undefined, true, false, 6));
                }
                else if (this.evaluate(this.compare((context.has(`variant`) ? context.get(`variant`) : null), `inline-css`))) {
                    outputBuffer.echo(`  `);
                    outputBuffer.echo(await this.include(context, outputBuffer, `56d092a52a6f7459f29665e146e3046ab9e60aa8cbbc0a62eb2e9cea1acba17a`, undefined, true, false, 8));
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

__webpack_require__(40881);
__webpack_require__(80459);
env.registerTemplatesModule(templatesModule, '6539fb6b9ada8d22548ec332fd51ba2f5a24f555ba8fa56627d58fb3ecc7a56f');

let template = env.loadTemplate('6539fb6b9ada8d22548ec332fd51ba2f5a24f555ba8fa56627d58fb3ecc7a56f');

module.exports = (context = {}) => {
    return template.then((template) => template.render(context));
};

/***/ }),

/***/ 79756:
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

                this._source = new this.Source(`<nav role="navigation" class="w-full">
  <ul class="list-reset block lg:flex flex-row justify-between flex-1 ">
    {% for item in items %}
      <li>
        <a class="pr-2 my-4 uppercase font-bold hover:underline" href="{{ item.url }}">
          {{ item.title }}
        </a>
        {% if item.below is not empty %}
          <ul class="list-reset lg:flex flex-col flex-1 mb-7">
            {% for sub_item in item.below %}
              <li class="mt-4">
                <a class="py-2 text-gray-600 hover:text-gray-900 hover:underline {% if (sub_item.in_active_trail) %} is-active {% endif %}" href="{{ sub_item.url }}">{{ sub_item.title }}</a>
              </li>
            {% endfor %}
          </ul>
        {% endif %}
      </li>
    {% endfor %}
  </ul>
</nav>

`, `56e387f7bc94c2b96ab4bde142693b1f528a546c8f9a0456a40a2872256b7d4e`);

                let aliases = new this.Context();
                aliases.proxy[`_self`] = this.aliases.proxy[`_self`] = this;
            }

            async doDisplay(context, outputBuffer, blocks = new Map()) {
                let aliases = this.aliases.clone();

                outputBuffer.echo(`<nav role="navigation" class="w-full">
  <ul class="list-reset block lg:flex flex-row justify-between flex-1 ">
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
                    outputBuffer.echo(`      <li>
        <a class="pr-2 my-4 uppercase font-bold hover:underline" href="`);
                    outputBuffer.echo(await this.traceableMethod(this.getAttribute, 5, this.source)(this.environment, (context.has(`item`) ? context.get(`item`) : null), `url`, new Map([]), `any`, false, false, false));
                    outputBuffer.echo(`">
          `);
                    outputBuffer.echo(await this.traceableMethod(this.getAttribute, 6, this.source)(this.environment, (context.has(`item`) ? context.get(`item`) : null), `title`, new Map([]), `any`, false, false, false));
                    outputBuffer.echo(`
        </a>
        `);
                    if (this.evaluate(!(await this.environment.getTest('empty').traceableCallable(8, this.source)(...[await this.traceableMethod(this.getAttribute, 8, this.source)(this.environment, (context.has(`item`) ? context.get(`item`) : null), `below`, new Map([]), `any`, false, false, false)])))) {
                        outputBuffer.echo(`          <ul class="list-reset lg:flex flex-col flex-1 mb-7">
            `);
                        context.set('_parent', context.clone());

                        await (async () => {
                            let c = this.ensureTraversable(await this.traceableMethod(this.getAttribute, 10, this.source)(this.environment, (context.has(`item`) ? context.get(`item`) : null), `below`, new Map([]), `any`, false, false, false));

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
                            context.proxy[`sub_item`] = __value__;
                            outputBuffer.echo(`              <li class="mt-4">
                <a class="py-2 text-gray-600 hover:text-gray-900 hover:underline `);
                            if (this.evaluate(await this.traceableMethod(this.getAttribute, 12, this.source)(this.environment, (context.has(`sub_item`) ? context.get(`sub_item`) : null), `in_active_trail`, new Map([]), `any`, false, false, false))) {
                                outputBuffer.echo(` is-active `);
                            }
                            outputBuffer.echo(`" href="`);
                            outputBuffer.echo(await this.traceableMethod(this.getAttribute, 12, this.source)(this.environment, (context.has(`sub_item`) ? context.get(`sub_item`) : null), `url`, new Map([]), `any`, false, false, false));
                            outputBuffer.echo(`">`);
                            outputBuffer.echo(await this.traceableMethod(this.getAttribute, 12, this.source)(this.environment, (context.has(`sub_item`) ? context.get(`sub_item`) : null), `title`, new Map([]), `any`, false, false, false));
                            outputBuffer.echo(`</a>
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
                            context.delete('sub_item');
                            context.delete('_parent');
                            context.delete('loop');
                            for (let [k, v] of parent) {
                                if (!context.has(k)) {
                                    context.set(k, v);
                                }
                            }
                        })();
                        outputBuffer.echo(`          </ul>
        `);
                    }
                    outputBuffer.echo(`      </li>
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
                outputBuffer.echo(`  </ul>
</nav>

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

env.registerTemplatesModule(templatesModule, '56e387f7bc94c2b96ab4bde142693b1f528a546c8f9a0456a40a2872256b7d4e');

let template = env.loadTemplate('56e387f7bc94c2b96ab4bde142693b1f528a546c8f9a0456a40a2872256b7d4e');

module.exports = (context = {}) => {
    return template.then((template) => template.render(context));
};

/***/ }),

/***/ 25172:
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

                this._source = new this.Source(`<div class="w-full flex-grow text-black z-20 mt-2 md:mt-0 md:-mt-2.5  bg-white h-full overflow-y-scroll md:overflow-y-visible fixed md:static left-0 top-11 bg-yellow md:bg-transparent hidden md:block" :class="{'block': menuIsOpen, 'hidden md:inline-block': !menuIsOpen}">
  <ul class="list-reset text-center md:text-left mt-20 md:mt-0">
    {% for item in items %}
      <li>
        <div class="p-2 my-2.5 uppercase font-bold">
          {{ item.title }}
        </div>
        {% if item.below is not empty %}
          <ul class="list-reset mb-7">
            {% for sub_item in item.below %}
              <li class="mb-2">
                <a class="p-2 inline-block text-gray-600 hover:text-gray-900 hover:underline {% if (current_path == sub_item.url) %} bg-teal-300 {% endif %}" href="{{ sub_item.url }}">{{ sub_item.title }}</a>
              </li>
            {% endfor %}
          </ul>
        {% endif %}
      </li>
    {% endfor %}
  </ul>
</div>
`, `9f4c577650f924b732c94aa4ebcc91cf63d8ae4cb88d8be6c58944cd96e49135`);

                let aliases = new this.Context();
                aliases.proxy[`_self`] = this.aliases.proxy[`_self`] = this;
            }

            async doDisplay(context, outputBuffer, blocks = new Map()) {
                let aliases = this.aliases.clone();

                outputBuffer.echo(`<div class="w-full flex-grow text-black z-20 mt-2 md:mt-0 md:-mt-2.5  bg-white h-full overflow-y-scroll md:overflow-y-visible fixed md:static left-0 top-11 bg-yellow md:bg-transparent hidden md:block" :class="{'block': menuIsOpen, 'hidden md:inline-block': !menuIsOpen}">
  <ul class="list-reset text-center md:text-left mt-20 md:mt-0">
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
                    outputBuffer.echo(`      <li>
        <div class="p-2 my-2.5 uppercase font-bold">
          `);
                    outputBuffer.echo(await this.traceableMethod(this.getAttribute, 6, this.source)(this.environment, (context.has(`item`) ? context.get(`item`) : null), `title`, new Map([]), `any`, false, false, false));
                    outputBuffer.echo(`
        </div>
        `);
                    if (this.evaluate(!(await this.environment.getTest('empty').traceableCallable(8, this.source)(...[await this.traceableMethod(this.getAttribute, 8, this.source)(this.environment, (context.has(`item`) ? context.get(`item`) : null), `below`, new Map([]), `any`, false, false, false)])))) {
                        outputBuffer.echo(`          <ul class="list-reset mb-7">
            `);
                        context.set('_parent', context.clone());

                        await (async () => {
                            let c = this.ensureTraversable(await this.traceableMethod(this.getAttribute, 10, this.source)(this.environment, (context.has(`item`) ? context.get(`item`) : null), `below`, new Map([]), `any`, false, false, false));

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
                            context.proxy[`sub_item`] = __value__;
                            outputBuffer.echo(`              <li class="mb-2">
                <a class="p-2 inline-block text-gray-600 hover:text-gray-900 hover:underline `);
                            if (this.evaluate(this.compare((context.has(`current_path`) ? context.get(`current_path`) : null), await this.traceableMethod(this.getAttribute, 12, this.source)(this.environment, (context.has(`sub_item`) ? context.get(`sub_item`) : null), `url`, new Map([]), `any`, false, false, false)))) {
                                outputBuffer.echo(` bg-teal-300 `);
                            }
                            outputBuffer.echo(`" href="`);
                            outputBuffer.echo(await this.traceableMethod(this.getAttribute, 12, this.source)(this.environment, (context.has(`sub_item`) ? context.get(`sub_item`) : null), `url`, new Map([]), `any`, false, false, false));
                            outputBuffer.echo(`">`);
                            outputBuffer.echo(await this.traceableMethod(this.getAttribute, 12, this.source)(this.environment, (context.has(`sub_item`) ? context.get(`sub_item`) : null), `title`, new Map([]), `any`, false, false, false));
                            outputBuffer.echo(`</a>
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
                            context.delete('sub_item');
                            context.delete('_parent');
                            context.delete('loop');
                            for (let [k, v] of parent) {
                                if (!context.has(k)) {
                                    context.set(k, v);
                                }
                            }
                        })();
                        outputBuffer.echo(`          </ul>
        `);
                    }
                    outputBuffer.echo(`      </li>
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
                outputBuffer.echo(`  </ul>
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

env.registerTemplatesModule(templatesModule, '9f4c577650f924b732c94aa4ebcc91cf63d8ae4cb88d8be6c58944cd96e49135');

let template = env.loadTemplate('9f4c577650f924b732c94aa4ebcc91cf63d8ae4cb88d8be6c58944cd96e49135');

module.exports = (context = {}) => {
    return template.then((template) => template.render(context));
};

/***/ }),

/***/ 35733:
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

                this._source = new this.Source(`<ul class="list-reset lg:flex justify-end flex-1 items-center pr-12">
  {% for item in items %}
    <li class="py-2 lg:py-0 lg:ml-3">
      <a class="ml-5 text-black hover:text-gray-600 {% if (item.in_active_trail) %}border-b border-teal-600 {% endif %}" href="{{ item.url }}">
        {{ item.title }}
      </a>
    </li>
  {% endfor %}
</ul>
`, `4a12a2b3b1ec3275dc2811cdf1fbcc44788a2d87951ba1c771c807217f707907`);

                let aliases = new this.Context();
                aliases.proxy[`_self`] = this.aliases.proxy[`_self`] = this;
            }

            async doDisplay(context, outputBuffer, blocks = new Map()) {
                let aliases = this.aliases.clone();

                outputBuffer.echo(`<ul class="list-reset lg:flex justify-end flex-1 items-center pr-12">
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
                    outputBuffer.echo(`    <li class="py-2 lg:py-0 lg:ml-3">
      <a class="ml-5 text-black hover:text-gray-600 `);
                    if (this.evaluate(await this.traceableMethod(this.getAttribute, 4, this.source)(this.environment, (context.has(`item`) ? context.get(`item`) : null), `in_active_trail`, new Map([]), `any`, false, false, false))) {
                        outputBuffer.echo(`border-b border-teal-600 `);
                    }
                    outputBuffer.echo(`" href="`);
                    outputBuffer.echo(await this.traceableMethod(this.getAttribute, 4, this.source)(this.environment, (context.has(`item`) ? context.get(`item`) : null), `url`, new Map([]), `any`, false, false, false));
                    outputBuffer.echo(`">
        `);
                    outputBuffer.echo(await this.traceableMethod(this.getAttribute, 5, this.source)(this.environment, (context.has(`item`) ? context.get(`item`) : null), `title`, new Map([]), `any`, false, false, false));
                    outputBuffer.echo(`
      </a>
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
                    context.delete('item');
                    context.delete('_parent');
                    context.delete('loop');
                    for (let [k, v] of parent) {
                        if (!context.has(k)) {
                            context.set(k, v);
                        }
                    }
                })();
                outputBuffer.echo(`</ul>
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

env.registerTemplatesModule(templatesModule, '4a12a2b3b1ec3275dc2811cdf1fbcc44788a2d87951ba1c771c807217f707907');

let template = env.loadTemplate('4a12a2b3b1ec3275dc2811cdf1fbcc44788a2d87951ba1c771c807217f707907');

module.exports = (context = {}) => {
    return template.then((template) => template.render(context));
};

/***/ }),

/***/ 94514:
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

                this._source = new this.Source(`{# VARIANT TEMPLATES #}
{% if variant == "primary" %}
  {% include '@molecules/menu/_menu--primary.twig' with {variant: 'primary', items: items} %}
{% elseif variant == "top" %}
  {% include '@molecules/menu/_menu--top.twig' with {variant: 'top', items: items} %}
{% elseif variant == "footer" %}
  {% include '@molecules/menu/_menu--footer.twig' with {variant: 'footer', items: items} %}
{% endif %}

`, `d265dfa42f01c4affd975c75a7e3c65d5bbf7b7663931346c85fb778f2e9e6d3`);

                let aliases = new this.Context();
                aliases.proxy[`_self`] = this.aliases.proxy[`_self`] = this;
            }

            async doDisplay(context, outputBuffer, blocks = new Map()) {
                let aliases = this.aliases.clone();

                if (this.evaluate(this.compare((context.has(`variant`) ? context.get(`variant`) : null), `primary`))) {
                    outputBuffer.echo(`  `);
                    outputBuffer.echo(await this.include(context, outputBuffer, `9f4c577650f924b732c94aa4ebcc91cf63d8ae4cb88d8be6c58944cd96e49135`, new Map([[`variant`, `primary`], [`items`, (context.has(`items`) ? context.get(`items`) : null)]]), true, false, 3));
                }
                else if (this.evaluate(this.compare((context.has(`variant`) ? context.get(`variant`) : null), `top`))) {
                    outputBuffer.echo(`  `);
                    outputBuffer.echo(await this.include(context, outputBuffer, `4a12a2b3b1ec3275dc2811cdf1fbcc44788a2d87951ba1c771c807217f707907`, new Map([[`variant`, `top`], [`items`, (context.has(`items`) ? context.get(`items`) : null)]]), true, false, 5));
                }
                else if (this.evaluate(this.compare((context.has(`variant`) ? context.get(`variant`) : null), `footer`))) {
                    outputBuffer.echo(`  `);
                    outputBuffer.echo(await this.include(context, outputBuffer, `56e387f7bc94c2b96ab4bde142693b1f528a546c8f9a0456a40a2872256b7d4e`, new Map([[`variant`, `footer`], [`items`, (context.has(`items`) ? context.get(`items`) : null)]]), true, false, 7));
                }
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

__webpack_require__(25172);
__webpack_require__(35733);
__webpack_require__(79756);
env.registerTemplatesModule(templatesModule, 'd265dfa42f01c4affd975c75a7e3c65d5bbf7b7663931346c85fb778f2e9e6d3');

let template = env.loadTemplate('d265dfa42f01c4affd975c75a7e3c65d5bbf7b7663931346c85fb778f2e9e6d3');

module.exports = (context = {}) => {
    return template.then((template) => template.render(context));
};

/***/ }),

/***/ 51426:
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
 * container
 *
 * See container.wingsuit.yaml for documentation.
 */
#}

{# Defaults #}
{% set width = width|default('default') %}
{% set padding_x = width != 'full' ? padding_x|default('default') : '' %}

{# SETTINGS #}
{% set bg_classes = ([
  pattern_configuration('container', '', 'bg')[bg],
] | sort | join(' ') | trim )%}

{% set classes = ([
  pattern_configuration('container', '', 'padding_x')[padding_x],
  pattern_configuration('container', '', 'padding_top')[padding_top],
  pattern_configuration('container', '', 'padding_bottom')[padding_bottom],
  pattern_configuration('container', '', 'width')[width],
  classes,
  'mx-auto w-full'
] | sort | join(' ') | trim )%}

{% set attributes = attributes|default(create_attribute()) %}

{# TEMPLATE #}
{% if bg %}
<div {{ create_attribute().addClass(bg_classes) }}>
{% endif %}
  <div {{ attributes.addClass(classes) }}>
    {% block content %}
    {{ content }}
    {% endblock %}
  </div>
{% if bg %}
</div>
{% endif %}
`, `7b43b8ea671f6b748a04f57240aa1d9995b6e3129a965868a2d25d2d9ad4e36c`);

                let aliases = new this.Context();
                
                this.blockHandlers = new Map([
                    ['content', async (context, outputBuffer, blocks = new Map()) => {
                        let aliases = this.aliases.clone();
                        outputBuffer.echo(`    `);
                        outputBuffer.echo((context.has(`content`) ? context.get(`content`) : null));
                        outputBuffer.echo(`
    `);
                    }]
                ]);
                aliases.proxy[`_self`] = this.aliases.proxy[`_self`] = this;
            }

            async doDisplay(context, outputBuffer, blocks = new Map()) {
                let aliases = this.aliases.clone();

                outputBuffer.echo(`
`);
                context.proxy[`width`] = (((context.has(`width`))) ? (await this.environment.getFilter('default').traceableCallable(11, this.source)(...[(context.has(`width`) ? context.get(`width`) : null), `default`])) : (`default`));
                context.proxy[`padding_x`] = ((!this.compare((context.has(`width`) ? context.get(`width`) : null), `full`)) ? ((((context.has(`padding_x`))) ? (await this.environment.getFilter('default').traceableCallable(12, this.source)(...[(context.has(`padding_x`) ? context.get(`padding_x`) : null), `default`])) : (`default`))) : (``));
                outputBuffer.echo(`
`);
                context.proxy[`bg_classes`] = await this.environment.getFilter('trim').traceableCallable(17, this.source)(...[await this.environment.getFilter('join').traceableCallable(17, this.source)(...[await this.environment.getFilter('sort').traceableCallable(17, this.source)(...[new Map([[0, await (async () => {let object = await this.environment.getFunction('pattern_configuration').traceableCallable(16, this.source)(...[`container`, ``, `bg`]); return this.get(object, (context.has(`bg`) ? context.get(`bg`) : null));})()]])]), ` `])]);
                outputBuffer.echo(`
`);
                context.proxy[`classes`] = await this.environment.getFilter('trim').traceableCallable(26, this.source)(...[await this.environment.getFilter('join').traceableCallable(26, this.source)(...[await this.environment.getFilter('sort').traceableCallable(26, this.source)(...[new Map([[0, await (async () => {let object = await this.environment.getFunction('pattern_configuration').traceableCallable(20, this.source)(...[`container`, ``, `padding_x`]); return this.get(object, (context.has(`padding_x`) ? context.get(`padding_x`) : null));})()], [1, await (async () => {let object = await this.environment.getFunction('pattern_configuration').traceableCallable(21, this.source)(...[`container`, ``, `padding_top`]); return this.get(object, (context.has(`padding_top`) ? context.get(`padding_top`) : null));})()], [2, await (async () => {let object = await this.environment.getFunction('pattern_configuration').traceableCallable(22, this.source)(...[`container`, ``, `padding_bottom`]); return this.get(object, (context.has(`padding_bottom`) ? context.get(`padding_bottom`) : null));})()], [3, await (async () => {let object = await this.environment.getFunction('pattern_configuration').traceableCallable(23, this.source)(...[`container`, ``, `width`]); return this.get(object, (context.has(`width`) ? context.get(`width`) : null));})()], [4, (context.has(`classes`) ? context.get(`classes`) : null)], [5, `mx-auto w-full`]])]), ` `])]);
                outputBuffer.echo(`
`);
                context.proxy[`attributes`] = (((context.has(`attributes`))) ? (await this.environment.getFilter('default').traceableCallable(28, this.source)(...[(context.has(`attributes`) ? context.get(`attributes`) : null), await this.environment.getFunction('create_attribute').traceableCallable(28, this.source)(...[])])) : (await this.environment.getFunction('create_attribute').traceableCallable(28, this.source)(...[])));
                outputBuffer.echo(`
`);
                if (this.evaluate((context.has(`bg`) ? context.get(`bg`) : null))) {
                    outputBuffer.echo(`<div `);
                    outputBuffer.echo(await this.traceableMethod(this.getAttribute, 32, this.source)(this.environment, await this.environment.getFunction('create_attribute').traceableCallable(32, this.source)(...[]), `addClass`, new Map([[0, (context.has(`bg_classes`) ? context.get(`bg_classes`) : null)]]), `method`, false, false, false));
                    outputBuffer.echo(`>
`);
                }
                outputBuffer.echo(`  <div `);
                outputBuffer.echo(await this.traceableMethod(this.getAttribute, 34, this.source)(this.environment, (context.has(`attributes`) ? context.get(`attributes`) : null), `addClass`, new Map([[0, (context.has(`classes`) ? context.get(`classes`) : null)]]), `method`, false, false, false));
                outputBuffer.echo(`>
    `);
                outputBuffer.echo(await this.traceableRenderBlock(35, this.source)('content', context.clone(), outputBuffer, blocks));
                outputBuffer.echo(`  </div>
`);
                if (this.evaluate((context.has(`bg`) ? context.get(`bg`) : null))) {
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

env.registerTemplatesModule(templatesModule, '7b43b8ea671f6b748a04f57240aa1d9995b6e3129a965868a2d25d2d9ad4e36c');

let template = env.loadTemplate('7b43b8ea671f6b748a04f57240aa1d9995b6e3129a965868a2d25d2d9ad4e36c');

module.exports = (context = {}) => {
    return template.then((template) => template.render(context));
};

/***/ }),

/***/ 74112:
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

                this._source = new this.Source(`<div>
  <div class="bg-yellow-100">
    {% if footer_menu is not empty %}
      {% embed "@organisms/container/container.twig" %}
        {% block content %}
          <div class="mt-2 pt-24 pb-10 text-3xl font-bold text-black">Documentation</div>
          <div class="block lg:flex pb-24">
            {{ footer_menu }}
          </div>
        {% endblock %}
      {% endembed %}
    {% endif %}
  </div>
  <div class="bg-black py-6 flex items-center">
    {% embed "@organisms/container/container.twig" %}
      {% block content %}
        <div class="space-x-8 flex sm:ml-auto sm:mt-0 mt-2 justify-center">
          <a
            class="w-12"
            href="https://drupaltwig.slack.com/archives/C01C82BH864" target="_blank" rel="noreferrer noopener"><img
              src="data:image/png;base64,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"
              alt="Wingsuit Slack" ></a>

          <a href="https://github.com/wingsuit-designsystem/wingsuit"
             class="w-12"
                                                                target="_blank" rel="noreferrer noopener"><img
              src="data:image/png;base64,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"
              alt="Storybook GitHub" style="border-radius: 50%; padding: 0px; background: rgb(255, 255, 255);"></a>
        </div>
      {% endblock %}
    {% endembed %}
  </div>
</div>
`, `9fbebb63016b7f6995d13e0590c894dee8c799a3f3a3fdb2e7cfad9889c38d0f`);

                let aliases = new this.Context();
                aliases.proxy[`_self`] = this.aliases.proxy[`_self`] = this;
            }

            async doDisplay(context, outputBuffer, blocks = new Map()) {
                let aliases = this.aliases.clone();

                outputBuffer.echo(`<div>
  <div class="bg-yellow-100">
    `);
                if (this.evaluate(!(await this.environment.getTest('empty').traceableCallable(3, this.source)(...[(context.has(`footer_menu`) ? context.get(`footer_menu`) : null)])))) {
                    outputBuffer.echo(`      `);
                    outputBuffer.echo(await this.include(context, outputBuffer, await this.loadTemplate(`9fbebb63016b7f6995d13e0590c894dee8c799a3f3a3fdb2e7cfad9889c38d0f`, 4, 1), undefined, true, false, 4));
                    outputBuffer.echo(`    `);
                }
                outputBuffer.echo(`  </div>
  <div class="bg-black py-6 flex items-center">
    `);
                outputBuffer.echo(await this.include(context, outputBuffer, await this.loadTemplate(`9fbebb63016b7f6995d13e0590c894dee8c799a3f3a3fdb2e7cfad9889c38d0f`, 15, 2), undefined, true, false, 15));
                outputBuffer.echo(`  </div>
</div>
`);
            }

            get isTraitable() {
                return false;
            }

        }],
        [1, class extends TwingTemplate {
            constructor(environment) {
                super(environment);

                this._source = new this.Source(`<div>
  <div class="bg-yellow-100">
    {% if footer_menu is not empty %}
      {% embed "@organisms/container/container.twig" %}
        {% block content %}
          <div class="mt-2 pt-24 pb-10 text-3xl font-bold text-black">Documentation</div>
          <div class="block lg:flex pb-24">
            {{ footer_menu }}
          </div>
        {% endblock %}
      {% endembed %}
    {% endif %}
  </div>
  <div class="bg-black py-6 flex items-center">
    {% embed "@organisms/container/container.twig" %}
      {% block content %}
        <div class="space-x-8 flex sm:ml-auto sm:mt-0 mt-2 justify-center">
          <a
            class="w-12"
            href="https://drupaltwig.slack.com/archives/C01C82BH864" target="_blank" rel="noreferrer noopener"><img
              src="data:image/png;base64,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"
              alt="Wingsuit Slack" ></a>

          <a href="https://github.com/wingsuit-designsystem/wingsuit"
             class="w-12"
                                                                target="_blank" rel="noreferrer noopener"><img
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQAAAAEACAMAAABrrFhUAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAADAFBMVEUAAAAAHz8NJzQOJjUNJDcNJTYNJTYNJTQNJDQNJDUNJjYLJjYNJjQNJjQLJjYNJjQNJjQNJjYNJjQLJjQNJDYNJjQLJDQNJjQLJjYLJjYLJjYMJjYMJTYMJTUNJDQLJzgVKj8AAFUMJjMLJjUNJTYMJjUNJTYNJjYLJDYMJDYNJTUNJjYKJTYAKioNIzUNJjYMJjUNJDYNJTYMJjYMJjYLJzcZGTMNKDUNJDQMJDYMJTUMJzYKKDIAPz8MJTUNJTYNJjQNJDYOJDYAJCQLITcMJjUNJjYMJjYLJjQLJjYIIzQMJjMMJTYNJDQLJTYNJTUSJDYNJzYMJjQNJjYMJjQNJzQNJjYNJjULJjYAAAAOKjgNJzcLJjUMJjUNJDYMJTYKJTUNJDYMJTQNJDUMJTQLJDYOJTYAAAANJDUNJjYMJTYLJjUNJDYLJDQNJDYLJDQLJjUQKTkNJTYLJDYMJjUNJTYNJTYNJTcNJTcOIzgPHy8TJzoPJzcOJzUOJzUOJDUMJTUNJjYNJTUOJDIXLi4NJjYNJjUMJDAOJTMMJjYNJTULJDQLJjUNJjYNJjQJJDYNJjQNJTURIjMMJjUMJjURIjMLJzYNJjYPJjYOJTULJDUNJjYLIjkNJTUMJDYMJTULJTULJTQLJjcAHDgAMzMNJTYMJTUKKjUMJTYLJTQJJzoNJjYOJjQMJjYNJDUNJTUNJjUNJjYNJjULJDYMJjULJjYMJjYMJTUOJTYNJDYNJjQLJjUPLTwNJDYPJTQPKDcMJTcMJTYNJDYMJjMNJTYNJjYMJjYMJzYMJDQLJTcNJTYNJjYLJjQLJjYMJjQMJjYLJjYMJTYNJDUJJTgLJTQMJDYNJjUMJjULJjQNJDQKJDQNJTYLIzUNJjUMJTUNJjQMJDYMJjYMJDcMJjYMJTULJjYNJTULJTUNJTQMJjcNKDUNJjUNKTcMJTUNJTQMJDUNJjYMJjUNJjYLKDQOJDcOJzUMJjYMJjUNJjQMJjYMJTYMJTcNJTUNJzcNJjb///+lnDxXAAAA/nRSTlMACCdIYXWInK/D1N3j6fD2/P338evk3tbGs5+MeWVNLQwDKFaCpuf+7MurXS8GOXDN+tOldkAKE/vKj1QZBD6H0NdGBxdkrfW0ax0UZ73Fbg5iucFqOvinQgESb9t3m6MwvMzSUthZAkzOPcj58ubfQx+q9JN0Xko3JBANIDRHWo7PsCMLg5gVNpG/7YqXXBzoXx61iw9BuyFt864WcypRne4uCQVLohi32hrqNVCUgJnictlp3GPgbKjCnhHEIjMpuDg7qZpPVT9YlnFXsqF/76TlG0S2hbrH0TGVK6yQSY3hU5J7yWCxiTwmhiV8vmjAeIQsRVt+fdWgemaBTu8QhSwAAAABYktHRP+lB/LFAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH4woYFTctTCw5hwAAFIBJREFUeNrdXXl8T1cWP6ERW5ZfgprYEsskKqFBSBBFQhC7CD+7EflZEmPfq1XGniaUKqWE2KKprVFb7EtbbSlKzFhGO6aUmZZWR6vzPvMHU7/c5b1z3++937s/3z/zu/e8c7557957zj33XAA3w6tEyRe8S/mULlO2XHlfP/8AW2BQhYqVXqz8h+AqVatVrxECzy1Ca9aqXafyH8MUdYTXfalUvYjI58v2yPoNgl8OVAQQ1bBR4+gmz4XxTauXKiNk+zPExDZr3sKjjY9r+UqrMMU1tG7WJt4zrU9o2y5IMQSJ7Tt09DTrkzp1DlAMRFiXrh70MXTr3iNGMRy2nslNPcL8XsGJiklI6d3HLrn1ffuVVUxF/wEJEptfc2CgYjqiBg2W1Pzo9mGKezCkpHzW22v9SXEjhtYLlcv81IaKmzEszSGP/cNHKBagYaokU8LIUToXN+kZ4aP/XKlihaAUnYPHiDESmD92nJjS48u2nzBx0uQpU6c5//+mz3h15mv9Xi89y09M2huzLTZ/zl/wE19G5bnJI+dpSZw2v+2ChYvQQtMXT7fS/rSKyGXs0Mw3Z4t8sVnNm8Uil9PZSywzf+lbKA3LLiu5XI/4Jm/XrosaHFa8Y4n5jpWrEK/9u9Vc8mRX12uE+BwS11iwKnivsqZeq3qv9TIgqjJzXY7mo2LXu3vl009r8Itq13yDUU/L3bjJX2swnOjWRcHmLRr6bPVebewTl3dopeUg5LnP/urb1IOZvaPNeOr7Gr5meL67gtwfqOoRtMy0AN687erM73BL+DRLdeW7c1c3Mx++odNu1bHQDcHTaF8VBSp+aPqWTmi9AhUFKpjuHaxRWZ9l9/NyxysYt+cjvg4BjU19dnwjlVm/qtu2siL3hvP12Gfif6Hvfr5ve2CzO+fhgwv4b2KhadHzQ/wBqPCwu1eiR47yI8dTzXnkMe4ctOgFK5yR1NHcofC4KXEv7jLkhEWh+uUnec5iyinjn3Y6ivOw8tWti0d8zPsoYz4x+lFLeHuddZaDhdjwKS8E093YB33IedmC3rQ8Is0ZmcJWGvmUM7zBf4b1UdkEnmdq4JIomfOIUlJsz9gbcz5Pw96BJez3PyMVJMGYCuyvwKDZuRab4NY1QRosrcseCT8zZJRhz3+fTweJEP8FOy5nwBR9jB2Nm+AAuXCWqWZgfZfX/8xZxnYGpMOkdJam21zcO+s7jCXVfy1IiOhzLF1393Xp02L6vxkjQUqsZwar9rsSKPySJTHnfZAUJcqz9P3ShfgXS57vepAWM8qxNNY9YEWzFgDnS4DEyGONWTEf6xOWxfqkth0BqXGhEitae0GPqEhW/D8nAiTHIVbKQmU90XrW/k/GFJAeNVkrlwnicqqzIk3R4AGIYGXpbxSVspnBY9gn4BG4yPBefAXjlnZW0LkqeAi6M5T/SkxEP4aIk+AxuORqeOQ9Rgj8cpznEGDvzXAMBSZwRxHdv1Jf8CA0ucIIYOKTaFYyHMC/gkdhNsM1TEYHmBj5b5PAw7CRDmQGZSH7MvIf/wYeh+2MMB6uZxrd84oHnl109KTtOI3pOOc8PYBe1egzYNO1RtfPtJnnHtOS2py53ujaF95aXzI9DOzE5HD8hSauq9bi8/djHJkbTc6Sib/x6e8e73sabT+jLTmr/YSxgeKLqL87Z8oMmmnafpG9T3CG06Ne0Wq/ic4q1h4H6fMPOVrJL3YiU+FmVVO+hWlriPywm1o9ptMhskZafVrSr80erT5TaLfxpOFZKlnX6QOpmmsThkurtVFAR0E661p5B/Q2NHS0dCAr6q/9RZ+g+pRR7zCcXgJq7yywTwwGHFhq2LDfLIX5iCLNnqvp0wYzVb/mETp22afzkkdSlnVTfdj0FodqXr1ac3bectV9tsgBvDoEUdqz2gt0Oq1a81T6fGKu5jNmquSOvkA7IHMivl6z4FqXrTk2p1CLX0Hld7+Z2PyvIbT4GyrZwX20Jw76m1bZMHU01BNK+oda+vItp4EqtMakKkfLqx8Dqnj59X9GODneHb9Va+2trd0U6nmz+F5hLeoJRxFf6An1wwO3NwAAJOUvLoOuKxBYdL1WHgCAPTlDteEghHqDqF6p+NEsBjOUa1UMKLgxfEFD8bOhBT5pU8poHR1FqHeB4n0Ur2k09YAPMGO0aQUjtHFOn1t4h9OyPTUFYhKg5ykWApOk2I2aCt/g7ChQr2kVDMFXrSQAteCsSuV3fMdsN5A6AYBa0o+0kgDUTtUcao8jk9WsL+UG3kUt00paScDbKBWpbX7/aZitgPG4OHB1Kwlog1JxA/UK7MXMZsgNxeHyE0BPBFfoNvWpkQKZXzXGSgJa4nScR33e86k2B8gm7ZCu2nwrCcCmK5wkOw6kJstE0cjB/3HISgKw54VLkFP8KtLt6i7kNRYLU4ZZZ38UOvz4ldZOTw+yQVt0uKK8dQQUoJWkHP23iJhLjNYrwkcP6wj4Fq1kbjb58hws9nsnF5IB7lpHwFm8lrfJvsUPFXUmfxbIBrVwIdAGr+U9sm8P518TyLBeQ4GQ5fIYq+xPETmtTKY9xyQ5/diWFP0vkaDtv60iYIuIlnvJ3s71h9qRP94TEf29VQQInQnabCN673v2W5wfGTcUCtuftIoAsayFH4jei0L5+2H3RQQPsG4Q3CWiZzJ/rfsK+ZPIOZPJNusICLgooGgCqWjt338iS/TsFtm1y1EsRAWR4kHk2bq6//+hKbmavy6QiFJGsRRDBApIkakfYdN4MR2Boq27FIvRAa/rcbLvjac/lCIjZvg0lxn+VhOwKgutbCiZNPTg6Q9l9K8v3lAsxwm8tmT2y8Kn289kvAh/7vxtRQL0QqvbgeiZGMeOBuJLkNySgYD9aHUHs12+BqSLgc6KLKlIAfQ5llByr/lJCn0w8dcuaEYXykHAUbTCK4iePgAA8DLx18VYcT/KYb8Shj7KSO4P3AIACCXHwK+x4iZIQoDyut5vdrwDAGrqdYUjw2UhIBsbHL7AsrUWixXp98SK4yfsK0A6LqkAUJv1XWCwTh4CPsXq3JMRVa3DHBkRGC0PATexOv+N6LgJAMgCyV2Rst5TJAI2gPE9YxH1R+Jvk2WPBLKArRx2kehXHsCLDAZgk5wPyETAXKTSU4l+tkgoQcrCFsSeJRMB2JE7kgyLTaXWBtnYUFCgTAQEYUfBitQESqZTj0JKGqtIBexVbIXU7og38ZdxSEkj5SJgPlLtOlRgvZTOzYZP5CIgVaf/chd8uMFyseiKxcDmc5D+4A4orXMd9C+5CPBGqt2V6NeOiog+REp6IBcBPyPVfkj0+4HKj8TuCdyWi4AHOiMCQ6GczhjrK3IRgB26ehH9+lM5Xtgi4f+RiwDsfvb7lB9J1suqgZS0Ri4CsCVSBlMLXz/iL9gA44dyEbAHqTbpxOcAubmHLZW8RC4C0nS6g4lA5odhN9xPy0UAtpz8UqJfDNh0ErBRLgIu6vThbEB6tWORkj6Wi4BjOvMl/SGIihDo+5gsRkedg6AfVNAZEYu0yWR/OnYzI4Lo6EuFSAZjYys7ZSKgP+hcCO0EsgZnS6yonjIRcBmrNRkWLoAXib+gy5F/IRMB6Oz+5kTHR9S+CPrOjO0yEYCu9biH6FgIfyD+shcrqp5MBNQCnS7Mt1R+yHasqBIyEYC+64Q83rIOquj9miBcHvvPg96R6zZ1trw9Wtbn8hAwDq00mSXUGKoRfxmBljVAHgIaoJUmJ73uVKKwL1qWRFsj+CNeZPhjMtQghYVgZXmly2J/IrrgbVOFWvmHKHrXwtQMahleQqt8jOy6gR7Mm6OlvSYLAfgbn96kQoL0OQp8Ae05iXLYH4RP7yeXr0UA8BLxt0349PN9chDwBV5jsupVb8ZxiSt4cflyEHADrzFZmO0SY00fhb+NIT5bBvsr4oueN7ExgslkjEQRuEWjsQwE9MPrSxX/vAoAkeR1BEvwAkMWWW9/9ga8vmSVgPQ4AACyiOBcvED42XoCRC6W/IXo2woAABrpHwVhWpDV9i8KEVB3K3PGIz9km8hNgr9aTYDI8eEksvNEAGAc/fpJQGZuK2vtjxUpY006fsqTW+OakBUg7grIhMMBVtofVUNE12bkGPh0CRlLsioiFBZbSUBtIVUbMhbCLGJs00Skej2yzv4rQldobSa7L+PEyhWx+3QPVbBsCTBWSFHSFVTyn/7QgvxhoJBcGGlRZCTwmJie5Hyv/F4xszXJrOCVshZliwje/BVHHh5vyB0dBc4jP0FVK+xfI6gkVfjw2QnRNvyfkEh2e0k5W1tRHb8hRTwrSBpPhnYKRIVDWpR77U8/LaqhncyIzHCqG0+VVJ4vzMANP3fan9NGWEGqbnZptdz3BcLyYcYo99lfqOPuhoGkkMdOP3YkP+FsHTfFxJVy00Bge6BDu3hyDrAVy4frQj6kJOhAn2HusP+Rrlt0vybF9Cz2M1VVuZ2eh0DuLtNHgnNd9d17SNW9LH73XB4ZLYzZrOsxsHqHqdNB+qdJ+vSaQX6eAas1Up7ug05kVckwy3y/23l6taKuAiJvD6JKrZVjL4dzB596OLOE+iC0/H4lM8wv8O6m13zIHa02BwAANE3huUrF5Fx/chdjxtHHqpXX7SMHGjwY5Mw9Di5gEuVIHSSb9FYfJanEKP9M9bnYK9XnvFHWlz+Z7+KFh9RBZ/p6lj7UYw9r5Fn6/6YVjoi4f9TlF+HclsY1wFXQxtH5oPb+ZJs6DEnXiwdkamqvwK+29amrcxd5fOzAPUfsYACoS0SHYVJ+Ahg3cTiK16DIGI56vmPq2l/X/bATnV5tu7nQp2r+bENsBwA4rLDj4cWREIXadk4uNloG/NOFoCwXfwdjQdW8S2fenkJdyRTDrMwxuNitzGH4+3h/w7/8dw21P4LyUX5htqNqrSnB7M+6gXMMMAbrNXwt8vkbes3xu5T4H9kNh1DfIqdhfedLS/xwlafyzokQkDjbOPt7UdJ51dfo6ni8tNHvnE9LzEIF50+IzQArjCOgkBI+htd0KGK6fIKpzsV3MPnV9UXnwBtG2X+KEs1PhqUz4OvyAuSHneb2lCM6vFEtjDLI/kg6RsE/ZBlKN+bGXp1LaBRp7iPUEF8GTTGGADqjuayKtvS14xUO8tpmOrXSTFb+QJyAHYbYf2EVJVgtE9RBX57IvXKwiVO6RYrGnTyhOrYPFxlygXUdSm4ru9hkbeNGyJ0TK7KXioWkMWhpgP0zabH/Vfdd6Ht3h+ZiNhuHqoaqdNXb2O66/SEfUVK1im5dpBX5D6/tWGe3oLVaietYPQQYsBT4hpaqWYOXvuY2/SrKu/mIfxN4vK5A6SKX7b9D+5/XNDtNpTf7uUu9vGJt0yfa0e4oCgku2j+dDk0GvqPdjZHzcxu53TSK+X7Zx+i8i+q4iwQwKh5ewvBGZ0DbeHsxVJ7xitPE2+Loteym3mhYLdfsX0tLHB2C6cjI9yjPG+OpLTUlvHeniCePCZ3R5n7pc4p+7HXJ/rGMPGbkueAVdM8tdjRZiqIoFf78YoGvyxdQ/cMlH4Ax82CLkL+TiFYmsqKJ+2APXCGAUfd7PDqpjFEkKYDjQ7c1kYDFLtifxpCHP14ZWpcxKx9iew+x5hFQRb/9rzLuPrklkPu2npH5V5adRL4+RUICWjA2pdKF9le8Gfp8zmbwe/kI8BrlcladfQhDBOcm5rmyEeB4lyHssuA2Sx7rNBD7dIrjmmQEsKIv4S1EpaQypISx623mDpKKgPssWfnicnYwxESx9wLtpSQioBNLVKYOQfGMuVBJ4SwHNm6ThYB6rFy9WF3pBUtZgbzxd9iNNw8Kk4KA5qwTPNs66vuYxrCEZdzhOf3/loCA06zQS0Af42LqiqKM54pbn7nKYgLqMU9weYNuMM/HB/L3g0P++8FWauAsu+9PbiKgGjMFY58LLoVXF2a24mdqfTZHP67y0ludK48o/Dy4StXPruaSiTWmETCAOQwVerlAACT1Z8kMayAmxS0EOL5hCunf1LW40j12vahldtkIiB/HlBF+D1zEcba3d62JXAQkVGaKSHE1sAoAp9ihrREdZSJgMLu+ZUw+GIA0dnpbdi95CGjOzkS0PQRDsIe9yItqIAkBca9zBFQDg9CV84Bx02Ug4EIhp38DMAy8Yim7D1tPwEZfTvdfwUCs5Lg6UVUd1hLQJJPX+wwYiu68RN+eY60k4FXeMS1bNTAYn/A2elbttVtFgNdiXvmKmIdgOKpzLxcrU8IaAkZu5fVMWQsmoD430ynwtw3uJyDJhxuCCb8DpmD2bq6ulU65mQBHcg63X/97YBL67udru+VHdxLQZwS/W2ESmIb4L/nPtR3IchcBP36l0mtfPJiJXSq7/v63k9xBwKEDKqWLArzBZHzsq6Ly+GWrzSZgarBa4sW2PmA6LhSpKe2/gJGHFayPAEZZu4hNqoWrYjuCGxCpful6QDsqCNFaHwFUUmfJFeodMuPBPRiusQ9Ut1qIc/OLOsPiYcUmloP9XlRvHp4PbkPCVxq6Z8x95ide+EjvxkDRs/VVr1/8NRpfbgHuxErNW3db/zwbACDutdH6t0aKnmR1fFe7nFbL9F12cC+OFGrr36pdnSE5ru0OvRw84UtEycJbNcDtsHcwrVCCKMY3cIAVyJLkioWjY8EqnJbgtqXzD8FCNDlrcYH1wEtzwFpkNbLS/mszwHrUL7TK/NhokAMzY60wf1Z1kAfVZ7nb/EfN7SAT7Kmj3Gn+iDQHSIc7b7jrDsYtY0BOfJfpb7716b/UAHkxbe8Vc80fNnEeSI75A1eZtuoZ1BI8ASGT3jKhpl5A58cHwWNwsHuPGCOtt/VMTgAPQ9KSfTnGWJ9R+nEeeCRC69eu62oOdcPFb+eCJ2PajQcLdXqM6UXL8ufB84Dc91f63BJiIb3VpokjveC5guNe6tlN+8trrRazi3pfSrsaB88tIqf+tGTX3R3tfhja/2Z2TmKMzd/Pd2fBo8Jv191u3H3ykQ3u1ud/4axJy3wE7ZoAAAAldEVYdGRhdGU6Y3JlYXRlADIwMTktMTAtMjRUMjE6NTU6MTcrMDA6MDAT8743AAAAJXRFWHRkYXRlOm1vZGlmeQAyMDE5LTEwLTI0VDIxOjU1OjE3KzAwOjAwYq4GiwAAAABJRU5ErkJggg=="
              alt="Storybook GitHub" style="border-radius: 50%; padding: 0px; background: rgb(255, 255, 255);"></a>
        </div>
      {% endblock %}
    {% endembed %}
  </div>
</div>
`, `9fbebb63016b7f6995d13e0590c894dee8c799a3f3a3fdb2e7cfad9889c38d0f`);

                let aliases = new this.Context();
                
                this.blockHandlers = new Map([
                    ['content', async (context, outputBuffer, blocks = new Map()) => {
                        let aliases = this.aliases.clone();
                        outputBuffer.echo(`          <div class="mt-2 pt-24 pb-10 text-3xl font-bold text-black">Documentation</div>
          <div class="block lg:flex pb-24">
            `);
                        outputBuffer.echo((context.has(`footer_menu`) ? context.get(`footer_menu`) : null));
                        outputBuffer.echo(`
          </div>
        `);
                    }]
                ]);
                aliases.proxy[`_self`] = this.aliases.proxy[`_self`] = this;
            }

            doGetParent(context) {
                return this.loadTemplate(`7b43b8ea671f6b748a04f57240aa1d9995b6e3129a965868a2d25d2d9ad4e36c`, 4).then((parent) => {
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

                this._source = new this.Source(`<div>
  <div class="bg-yellow-100">
    {% if footer_menu is not empty %}
      {% embed "@organisms/container/container.twig" %}
        {% block content %}
          <div class="mt-2 pt-24 pb-10 text-3xl font-bold text-black">Documentation</div>
          <div class="block lg:flex pb-24">
            {{ footer_menu }}
          </div>
        {% endblock %}
      {% endembed %}
    {% endif %}
  </div>
  <div class="bg-black py-6 flex items-center">
    {% embed "@organisms/container/container.twig" %}
      {% block content %}
        <div class="space-x-8 flex sm:ml-auto sm:mt-0 mt-2 justify-center">
          <a
            class="w-12"
            href="https://drupaltwig.slack.com/archives/C01C82BH864" target="_blank" rel="noreferrer noopener"><img
              src="data:image/png;base64,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"
              alt="Wingsuit Slack" ></a>

          <a href="https://github.com/wingsuit-designsystem/wingsuit"
             class="w-12"
                                                                target="_blank" rel="noreferrer noopener"><img
              src="data:image/png;base64,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"
              alt="Storybook GitHub" style="border-radius: 50%; padding: 0px; background: rgb(255, 255, 255);"></a>
        </div>
      {% endblock %}
    {% endembed %}
  </div>
</div>
`, `9fbebb63016b7f6995d13e0590c894dee8c799a3f3a3fdb2e7cfad9889c38d0f`);

                let aliases = new this.Context();
                
                this.blockHandlers = new Map([
                    ['content', async (context, outputBuffer, blocks = new Map()) => {
                        let aliases = this.aliases.clone();
                        outputBuffer.echo(`        <div class="space-x-8 flex sm:ml-auto sm:mt-0 mt-2 justify-center">
          <a
            class="w-12"
            href="https://drupaltwig.slack.com/archives/C01C82BH864" target="_blank" rel="noreferrer noopener"><img
              src="data:image/png;base64,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"
              alt="Wingsuit Slack" ></a>

          <a href="https://github.com/wingsuit-designsystem/wingsuit"
             class="w-12"
                                                                target="_blank" rel="noreferrer noopener"><img
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQAAAAEACAMAAABrrFhUAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAADAFBMVEUAAAAAHz8NJzQOJjUNJDcNJTYNJTYNJTQNJDQNJDUNJjYLJjYNJjQNJjQLJjYNJjQNJjQNJjYNJjQLJjQNJDYNJjQLJDQNJjQLJjYLJjYLJjYMJjYMJTYMJTUNJDQLJzgVKj8AAFUMJjMLJjUNJTYMJjUNJTYNJjYLJDYMJDYNJTUNJjYKJTYAKioNIzUNJjYMJjUNJDYNJTYMJjYMJjYLJzcZGTMNKDUNJDQMJDYMJTUMJzYKKDIAPz8MJTUNJTYNJjQNJDYOJDYAJCQLITcMJjUNJjYMJjYLJjQLJjYIIzQMJjMMJTYNJDQLJTYNJTUSJDYNJzYMJjQNJjYMJjQNJzQNJjYNJjULJjYAAAAOKjgNJzcLJjUMJjUNJDYMJTYKJTUNJDYMJTQNJDUMJTQLJDYOJTYAAAANJDUNJjYMJTYLJjUNJDYLJDQNJDYLJDQLJjUQKTkNJTYLJDYMJjUNJTYNJTYNJTcNJTcOIzgPHy8TJzoPJzcOJzUOJzUOJDUMJTUNJjYNJTUOJDIXLi4NJjYNJjUMJDAOJTMMJjYNJTULJDQLJjUNJjYNJjQJJDYNJjQNJTURIjMMJjUMJjURIjMLJzYNJjYPJjYOJTULJDUNJjYLIjkNJTUMJDYMJTULJTULJTQLJjcAHDgAMzMNJTYMJTUKKjUMJTYLJTQJJzoNJjYOJjQMJjYNJDUNJTUNJjUNJjYNJjULJDYMJjULJjYMJjYMJTUOJTYNJDYNJjQLJjUPLTwNJDYPJTQPKDcMJTcMJTYNJDYMJjMNJTYNJjYMJjYMJzYMJDQLJTcNJTYNJjYLJjQLJjYMJjQMJjYLJjYMJTYNJDUJJTgLJTQMJDYNJjUMJjULJjQNJDQKJDQNJTYLIzUNJjUMJTUNJjQMJDYMJjYMJDcMJjYMJTULJjYNJTULJTUNJTQMJjcNKDUNJjUNKTcMJTUNJTQMJDUNJjYMJjUNJjYLKDQOJDcOJzUMJjYMJjUNJjQMJjYMJTYMJTcNJTUNJzcNJjb///+lnDxXAAAA/nRSTlMACCdIYXWInK/D1N3j6fD2/P338evk3tbGs5+MeWVNLQwDKFaCpuf+7MurXS8GOXDN+tOldkAKE/vKj1QZBD6H0NdGBxdkrfW0ax0UZ73Fbg5iucFqOvinQgESb9t3m6MwvMzSUthZAkzOPcj58ubfQx+q9JN0Xko3JBANIDRHWo7PsCMLg5gVNpG/7YqXXBzoXx61iw9BuyFt864WcypRne4uCQVLohi32hrqNVCUgJnictlp3GPgbKjCnhHEIjMpuDg7qZpPVT9YlnFXsqF/76TlG0S2hbrH0TGVK6yQSY3hU5J7yWCxiTwmhiV8vmjAeIQsRVt+fdWgemaBTu8QhSwAAAABYktHRP+lB/LFAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH4woYFTctTCw5hwAAFIBJREFUeNrdXXl8T1cWP6ERW5ZfgprYEsskKqFBSBBFQhC7CD+7EflZEmPfq1XGniaUKqWE2KKprVFb7EtbbSlKzFhGO6aUmZZWR6vzPvMHU7/c5b1z3++937s/3z/zu/e8c7557957zj33XAA3w6tEyRe8S/mULlO2XHlfP/8AW2BQhYqVXqz8h+AqVatVrxECzy1Ca9aqXafyH8MUdYTXfalUvYjI58v2yPoNgl8OVAQQ1bBR4+gmz4XxTauXKiNk+zPExDZr3sKjjY9r+UqrMMU1tG7WJt4zrU9o2y5IMQSJ7Tt09DTrkzp1DlAMRFiXrh70MXTr3iNGMRy2nslNPcL8XsGJiklI6d3HLrn1ffuVVUxF/wEJEptfc2CgYjqiBg2W1Pzo9mGKezCkpHzW22v9SXEjhtYLlcv81IaKmzEszSGP/cNHKBagYaokU8LIUToXN+kZ4aP/XKlihaAUnYPHiDESmD92nJjS48u2nzBx0uQpU6c5//+mz3h15mv9Xi89y09M2huzLTZ/zl/wE19G5bnJI+dpSZw2v+2ChYvQQtMXT7fS/rSKyGXs0Mw3Z4t8sVnNm8Uil9PZSywzf+lbKA3LLiu5XI/4Jm/XrosaHFa8Y4n5jpWrEK/9u9Vc8mRX12uE+BwS11iwKnivsqZeq3qv9TIgqjJzXY7mo2LXu3vl009r8Itq13yDUU/L3bjJX2swnOjWRcHmLRr6bPVebewTl3dopeUg5LnP/urb1IOZvaPNeOr7Gr5meL67gtwfqOoRtMy0AN687erM73BL+DRLdeW7c1c3Mx++odNu1bHQDcHTaF8VBSp+aPqWTmi9AhUFKpjuHaxRWZ9l9/NyxysYt+cjvg4BjU19dnwjlVm/qtu2siL3hvP12Gfif6Hvfr5ve2CzO+fhgwv4b2KhadHzQ/wBqPCwu1eiR47yI8dTzXnkMe4ctOgFK5yR1NHcofC4KXEv7jLkhEWh+uUnec5iyinjn3Y6ivOw8tWti0d8zPsoYz4x+lFLeHuddZaDhdjwKS8E093YB33IedmC3rQ8Is0ZmcJWGvmUM7zBf4b1UdkEnmdq4JIomfOIUlJsz9gbcz5Pw96BJez3PyMVJMGYCuyvwKDZuRab4NY1QRosrcseCT8zZJRhz3+fTweJEP8FOy5nwBR9jB2Nm+AAuXCWqWZgfZfX/8xZxnYGpMOkdJam21zcO+s7jCXVfy1IiOhzLF1393Xp02L6vxkjQUqsZwar9rsSKPySJTHnfZAUJcqz9P3ShfgXS57vepAWM8qxNNY9YEWzFgDnS4DEyGONWTEf6xOWxfqkth0BqXGhEitae0GPqEhW/D8nAiTHIVbKQmU90XrW/k/GFJAeNVkrlwnicqqzIk3R4AGIYGXpbxSVspnBY9gn4BG4yPBefAXjlnZW0LkqeAi6M5T/SkxEP4aIk+AxuORqeOQ9Rgj8cpznEGDvzXAMBSZwRxHdv1Jf8CA0ucIIYOKTaFYyHMC/gkdhNsM1TEYHmBj5b5PAw7CRDmQGZSH7MvIf/wYeh+2MMB6uZxrd84oHnl109KTtOI3pOOc8PYBe1egzYNO1RtfPtJnnHtOS2py53ujaF95aXzI9DOzE5HD8hSauq9bi8/djHJkbTc6Sib/x6e8e73sabT+jLTmr/YSxgeKLqL87Z8oMmmnafpG9T3CG06Ne0Wq/ic4q1h4H6fMPOVrJL3YiU+FmVVO+hWlriPywm1o9ptMhskZafVrSr80erT5TaLfxpOFZKlnX6QOpmmsThkurtVFAR0E661p5B/Q2NHS0dCAr6q/9RZ+g+pRR7zCcXgJq7yywTwwGHFhq2LDfLIX5iCLNnqvp0wYzVb/mETp22afzkkdSlnVTfdj0FodqXr1ac3bectV9tsgBvDoEUdqz2gt0Oq1a81T6fGKu5jNmquSOvkA7IHMivl6z4FqXrTk2p1CLX0Hld7+Z2PyvIbT4GyrZwX20Jw76m1bZMHU01BNK+oda+vItp4EqtMakKkfLqx8Dqnj59X9GODneHb9Va+2trd0U6nmz+F5hLeoJRxFf6An1wwO3NwAAJOUvLoOuKxBYdL1WHgCAPTlDteEghHqDqF6p+NEsBjOUa1UMKLgxfEFD8bOhBT5pU8poHR1FqHeB4n0Ur2k09YAPMGO0aQUjtHFOn1t4h9OyPTUFYhKg5ykWApOk2I2aCt/g7ChQr2kVDMFXrSQAteCsSuV3fMdsN5A6AYBa0o+0kgDUTtUcao8jk9WsL+UG3kUt00paScDbKBWpbX7/aZitgPG4OHB1Kwlog1JxA/UK7MXMZsgNxeHyE0BPBFfoNvWpkQKZXzXGSgJa4nScR33e86k2B8gm7ZCu2nwrCcCmK5wkOw6kJstE0cjB/3HISgKw54VLkFP8KtLt6i7kNRYLU4ZZZ38UOvz4ldZOTw+yQVt0uKK8dQQUoJWkHP23iJhLjNYrwkcP6wj4Fq1kbjb58hws9nsnF5IB7lpHwFm8lrfJvsUPFXUmfxbIBrVwIdAGr+U9sm8P518TyLBeQ4GQ5fIYq+xPETmtTKY9xyQ5/diWFP0vkaDtv60iYIuIlnvJ3s71h9qRP94TEf29VQQInQnabCN673v2W5wfGTcUCtuftIoAsayFH4jei0L5+2H3RQQPsG4Q3CWiZzJ/rfsK+ZPIOZPJNusICLgooGgCqWjt338iS/TsFtm1y1EsRAWR4kHk2bq6//+hKbmavy6QiFJGsRRDBApIkakfYdN4MR2Boq27FIvRAa/rcbLvjac/lCIjZvg0lxn+VhOwKgutbCiZNPTg6Q9l9K8v3lAsxwm8tmT2y8Kn289kvAh/7vxtRQL0QqvbgeiZGMeOBuJLkNySgYD9aHUHs12+BqSLgc6KLKlIAfQ5llByr/lJCn0w8dcuaEYXykHAUbTCK4iePgAA8DLx18VYcT/KYb8Shj7KSO4P3AIACCXHwK+x4iZIQoDyut5vdrwDAGrqdYUjw2UhIBsbHL7AsrUWixXp98SK4yfsK0A6LqkAUJv1XWCwTh4CPsXq3JMRVa3DHBkRGC0PATexOv+N6LgJAMgCyV2Rst5TJAI2gPE9YxH1R+Jvk2WPBLKArRx2kehXHsCLDAZgk5wPyETAXKTSU4l+tkgoQcrCFsSeJRMB2JE7kgyLTaXWBtnYUFCgTAQEYUfBitQESqZTj0JKGqtIBexVbIXU7og38ZdxSEkj5SJgPlLtOlRgvZTOzYZP5CIgVaf/chd8uMFyseiKxcDmc5D+4A4orXMd9C+5CPBGqt2V6NeOiog+REp6IBcBPyPVfkj0+4HKj8TuCdyWi4AHOiMCQ6GczhjrK3IRgB26ehH9+lM5Xtgi4f+RiwDsfvb7lB9J1suqgZS0Ri4CsCVSBlMLXz/iL9gA44dyEbAHqTbpxOcAubmHLZW8RC4C0nS6g4lA5odhN9xPy0UAtpz8UqJfDNh0ErBRLgIu6vThbEB6tWORkj6Wi4BjOvMl/SGIihDo+5gsRkedg6AfVNAZEYu0yWR/OnYzI4Lo6EuFSAZjYys7ZSKgP+hcCO0EsgZnS6yonjIRcBmrNRkWLoAXib+gy5F/IRMB6Oz+5kTHR9S+CPrOjO0yEYCu9biH6FgIfyD+shcrqp5MBNQCnS7Mt1R+yHasqBIyEYC+64Q83rIOquj9miBcHvvPg96R6zZ1trw9Wtbn8hAwDq00mSXUGKoRfxmBljVAHgIaoJUmJ73uVKKwL1qWRFsj+CNeZPhjMtQghYVgZXmly2J/IrrgbVOFWvmHKHrXwtQMahleQqt8jOy6gR7Mm6OlvSYLAfgbn96kQoL0OQp8Ae05iXLYH4RP7yeXr0UA8BLxt0349PN9chDwBV5jsupVb8ZxiSt4cflyEHADrzFZmO0SY00fhb+NIT5bBvsr4oueN7ExgslkjEQRuEWjsQwE9MPrSxX/vAoAkeR1BEvwAkMWWW9/9ga8vmSVgPQ4AACyiOBcvED42XoCRC6W/IXo2woAABrpHwVhWpDV9i8KEVB3K3PGIz9km8hNgr9aTYDI8eEksvNEAGAc/fpJQGZuK2vtjxUpY006fsqTW+OakBUg7grIhMMBVtofVUNE12bkGPh0CRlLsioiFBZbSUBtIVUbMhbCLGJs00Skej2yzv4rQldobSa7L+PEyhWx+3QPVbBsCTBWSFHSFVTyn/7QgvxhoJBcGGlRZCTwmJie5Hyv/F4xszXJrOCVshZliwje/BVHHh5vyB0dBc4jP0FVK+xfI6gkVfjw2QnRNvyfkEh2e0k5W1tRHb8hRTwrSBpPhnYKRIVDWpR77U8/LaqhncyIzHCqG0+VVJ4vzMANP3fan9NGWEGqbnZptdz3BcLyYcYo99lfqOPuhoGkkMdOP3YkP+FsHTfFxJVy00Bge6BDu3hyDrAVy4frQj6kJOhAn2HusP+Rrlt0vybF9Cz2M1VVuZ2eh0DuLtNHgnNd9d17SNW9LH73XB4ZLYzZrOsxsHqHqdNB+qdJ+vSaQX6eAas1Up7ug05kVckwy3y/23l6taKuAiJvD6JKrZVjL4dzB596OLOE+iC0/H4lM8wv8O6m13zIHa02BwAANE3huUrF5Fx/chdjxtHHqpXX7SMHGjwY5Mw9Di5gEuVIHSSb9FYfJanEKP9M9bnYK9XnvFHWlz+Z7+KFh9RBZ/p6lj7UYw9r5Fn6/6YVjoi4f9TlF+HclsY1wFXQxtH5oPb+ZJs6DEnXiwdkamqvwK+29amrcxd5fOzAPUfsYACoS0SHYVJ+Ahg3cTiK16DIGI56vmPq2l/X/bATnV5tu7nQp2r+bENsBwA4rLDj4cWREIXadk4uNloG/NOFoCwXfwdjQdW8S2fenkJdyRTDrMwxuNitzGH4+3h/w7/8dw21P4LyUX5htqNqrSnB7M+6gXMMMAbrNXwt8vkbes3xu5T4H9kNh1DfIqdhfedLS/xwlafyzokQkDjbOPt7UdJ51dfo6ni8tNHvnE9LzEIF50+IzQArjCOgkBI+htd0KGK6fIKpzsV3MPnV9UXnwBtG2X+KEs1PhqUz4OvyAuSHneb2lCM6vFEtjDLI/kg6RsE/ZBlKN+bGXp1LaBRp7iPUEF8GTTGGADqjuayKtvS14xUO8tpmOrXSTFb+QJyAHYbYf2EVJVgtE9RBX57IvXKwiVO6RYrGnTyhOrYPFxlygXUdSm4ru9hkbeNGyJ0TK7KXioWkMWhpgP0zabH/Vfdd6Ht3h+ZiNhuHqoaqdNXb2O66/SEfUVK1im5dpBX5D6/tWGe3oLVaietYPQQYsBT4hpaqWYOXvuY2/SrKu/mIfxN4vK5A6SKX7b9D+5/XNDtNpTf7uUu9vGJt0yfa0e4oCgku2j+dDk0GvqPdjZHzcxu53TSK+X7Zx+i8i+q4iwQwKh5ewvBGZ0DbeHsxVJ7xitPE2+Loteym3mhYLdfsX0tLHB2C6cjI9yjPG+OpLTUlvHeniCePCZ3R5n7pc4p+7HXJ/rGMPGbkueAVdM8tdjRZiqIoFf78YoGvyxdQ/cMlH4Ax82CLkL+TiFYmsqKJ+2APXCGAUfd7PDqpjFEkKYDjQ7c1kYDFLtifxpCHP14ZWpcxKx9iew+x5hFQRb/9rzLuPrklkPu2npH5V5adRL4+RUICWjA2pdKF9le8Gfp8zmbwe/kI8BrlcladfQhDBOcm5rmyEeB4lyHssuA2Sx7rNBD7dIrjmmQEsKIv4S1EpaQypISx623mDpKKgPssWfnicnYwxESx9wLtpSQioBNLVKYOQfGMuVBJ4SwHNm6ThYB6rFy9WF3pBUtZgbzxd9iNNw8Kk4KA5qwTPNs66vuYxrCEZdzhOf3/loCA06zQS0Af42LqiqKM54pbn7nKYgLqMU9weYNuMM/HB/L3g0P++8FWauAsu+9PbiKgGjMFY58LLoVXF2a24mdqfTZHP67y0ludK48o/Dy4StXPruaSiTWmETCAOQwVerlAACT1Z8kMayAmxS0EOL5hCunf1LW40j12vahldtkIiB/HlBF+D1zEcba3d62JXAQkVGaKSHE1sAoAp9ihrREdZSJgMLu+ZUw+GIA0dnpbdi95CGjOzkS0PQRDsIe9yItqIAkBca9zBFQDg9CV84Bx02Ug4EIhp38DMAy8Yim7D1tPwEZfTvdfwUCs5Lg6UVUd1hLQJJPX+wwYiu68RN+eY60k4FXeMS1bNTAYn/A2elbttVtFgNdiXvmKmIdgOKpzLxcrU8IaAkZu5fVMWQsmoD430ynwtw3uJyDJhxuCCb8DpmD2bq6ulU65mQBHcg63X/97YBL67udru+VHdxLQZwS/W2ESmIb4L/nPtR3IchcBP36l0mtfPJiJXSq7/v63k9xBwKEDKqWLArzBZHzsq6Ly+GWrzSZgarBa4sW2PmA6LhSpKe2/gJGHFayPAEZZu4hNqoWrYjuCGxCpful6QDsqCNFaHwFUUmfJFeodMuPBPRiusQ9Ut1qIc/OLOsPiYcUmloP9XlRvHp4PbkPCVxq6Z8x95ide+EjvxkDRs/VVr1/8NRpfbgHuxErNW3db/zwbACDutdH6t0aKnmR1fFe7nFbL9F12cC+OFGrr36pdnSE5ru0OvRw84UtEycJbNcDtsHcwrVCCKMY3cIAVyJLkioWjY8EqnJbgtqXzD8FCNDlrcYH1wEtzwFpkNbLS/mszwHrUL7TK/NhokAMzY60wf1Z1kAfVZ7nb/EfN7SAT7Kmj3Gn+iDQHSIc7b7jrDsYtY0BOfJfpb7716b/UAHkxbe8Vc80fNnEeSI75A1eZtuoZ1BI8ASGT3jKhpl5A58cHwWNwsHuPGCOtt/VMTgAPQ9KSfTnGWJ9R+nEeeCRC69eu62oOdcPFb+eCJ2PajQcLdXqM6UXL8ufB84Dc91f63BJiIb3VpokjveC5guNe6tlN+8trrRazi3pfSrsaB88tIqf+tGTX3R3tfhja/2Z2TmKMzd/Pd2fBo8Jv191u3H3ykQ3u1ud/4axJy3wE7ZoAAAAldEVYdGRhdGU6Y3JlYXRlADIwMTktMTAtMjRUMjE6NTU6MTcrMDA6MDAT8743AAAAJXRFWHRkYXRlOm1vZGlmeQAyMDE5LTEwLTI0VDIxOjU1OjE3KzAwOjAwYq4GiwAAAABJRU5ErkJggg=="
              alt="Storybook GitHub" style="border-radius: 50%; padding: 0px; background: rgb(255, 255, 255);"></a>
        </div>
      `);
                    }]
                ]);
                aliases.proxy[`_self`] = this.aliases.proxy[`_self`] = this;
            }

            doGetParent(context) {
                return this.loadTemplate(`7b43b8ea671f6b748a04f57240aa1d9995b6e3129a965868a2d25d2d9ad4e36c`, 15).then((parent) => {
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
env.registerTemplatesModule(templatesModule, '9fbebb63016b7f6995d13e0590c894dee8c799a3f3a3fdb2e7cfad9889c38d0f');

let template = env.loadTemplate('9fbebb63016b7f6995d13e0590c894dee8c799a3f3a3fdb2e7cfad9889c38d0f');

module.exports = (context = {}) => {
    return template.then((template) => template.render(context));
};

/***/ }),

/***/ 14392:
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
{# SETTINGS #}
{% set columns = columns|default(2) %}
{% set columns_width = columns_width|default('equal') %}

{# Gap #}
{% set gutter = gutter|default('default') %}
{% set gutter_classes = pattern_configuration('grid', '', 'gutter')[gutter] %}
{# Container #}
{% set configuration = pattern_configuration('grid', '', 'columns')[columns][columns_width] %}
{% set classes = ([
  'grid',
  configuration,
  gutter_classes,
]) | sort | join(' ') | trim %}

{% set attributes = attributes|default(create_attribute()).addClass(classes) %}

{# TEMPLATE #}
{% if configuration is not empty %}
  <div {{ attributes }}>
    {% block cells %}
      {% for cell_counter, cell in cells %}
        {% block cell_outer %}
          <div>
            {% block cell_inner %}
              {{ cell }}
            {% endblock %}
          </div>
        {% endblock %}
      {%- endfor -%}
    {% endblock %}
  </div>
{% else %}
  No configuration found for "{{ columns }}/{{ configuration }}".
{% endif %}
`, `1d6fb948ec81c58226fc20ed9629dfeeda08e0d4d9758794a57a0ecc143c3408`);

                let aliases = new this.Context();
                
                this.blockHandlers = new Map([
                    ['cells', async (context, outputBuffer, blocks = new Map()) => {
                        let aliases = this.aliases.clone();
                        outputBuffer.echo(`      `);
                        context.set('_parent', context.clone());

                        await (async () => {
                            let c = this.ensureTraversable((context.has(`cells`) ? context.get(`cells`) : null));

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
                            context.proxy[`cell_counter`] = __key__;
                            context.proxy[`cell`] = __value__;
                            outputBuffer.echo(`        `);
                            outputBuffer.echo(await this.traceableRenderBlock(31, this.source)('cell_outer', context.clone(), outputBuffer, blocks));
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
                            context.delete('cell_counter');
                            context.delete('cell');
                            context.delete('_parent');
                            context.delete('loop');
                            for (let [k, v] of parent) {
                                if (!context.has(k)) {
                                    context.set(k, v);
                                }
                            }
                        })();
                    }],
                    ['cell_outer', async (context, outputBuffer, blocks = new Map()) => {
                        let aliases = this.aliases.clone();
                        outputBuffer.echo(`          <div>
            `);
                        outputBuffer.echo(await this.traceableRenderBlock(33, this.source)('cell_inner', context.clone(), outputBuffer, blocks));
                        outputBuffer.echo(`          </div>
        `);
                    }],
                    ['cell_inner', async (context, outputBuffer, blocks = new Map()) => {
                        let aliases = this.aliases.clone();
                        outputBuffer.echo(`              `);
                        outputBuffer.echo((context.has(`cell`) ? context.get(`cell`) : null));
                        outputBuffer.echo(`
            `);
                    }]
                ]);
                aliases.proxy[`_self`] = this.aliases.proxy[`_self`] = this;
            }

            async doDisplay(context, outputBuffer, blocks = new Map()) {
                let aliases = this.aliases.clone();

                context.proxy[`columns`] = (((context.has(`columns`))) ? (await this.environment.getFilter('default').traceableCallable(10, this.source)(...[(context.has(`columns`) ? context.get(`columns`) : null), 2])) : (2));
                context.proxy[`columns_width`] = (((context.has(`columns_width`))) ? (await this.environment.getFilter('default').traceableCallable(11, this.source)(...[(context.has(`columns_width`) ? context.get(`columns_width`) : null), `equal`])) : (`equal`));
                outputBuffer.echo(`
`);
                context.proxy[`gutter`] = (((context.has(`gutter`))) ? (await this.environment.getFilter('default').traceableCallable(14, this.source)(...[(context.has(`gutter`) ? context.get(`gutter`) : null), `default`])) : (`default`));
                context.proxy[`gutter_classes`] = await (async () => {let object = await this.environment.getFunction('pattern_configuration').traceableCallable(15, this.source)(...[`grid`, ``, `gutter`]); return this.get(object, (context.has(`gutter`) ? context.get(`gutter`) : null));})();
                context.proxy[`configuration`] = await (async () => {let object = await (async () => {let object = await this.environment.getFunction('pattern_configuration').traceableCallable(17, this.source)(...[`grid`, ``, `columns`]); return this.get(object, (context.has(`columns`) ? context.get(`columns`) : null));})(); return this.get(object, (context.has(`columns_width`) ? context.get(`columns_width`) : null));})();
                context.proxy[`classes`] = await this.environment.getFilter('trim').traceableCallable(22, this.source)(...[await this.environment.getFilter('join').traceableCallable(22, this.source)(...[await this.environment.getFilter('sort').traceableCallable(22, this.source)(...[new Map([[0, `grid`], [1, (context.has(`configuration`) ? context.get(`configuration`) : null)], [2, (context.has(`gutter_classes`) ? context.get(`gutter_classes`) : null)]])]), ` `])]);
                outputBuffer.echo(`
`);
                context.proxy[`attributes`] = await this.traceableMethod(this.getAttribute, 24, this.source)(this.environment, (((context.has(`attributes`))) ? (await this.environment.getFilter('default').traceableCallable(24, this.source)(...[(context.has(`attributes`) ? context.get(`attributes`) : null), await this.environment.getFunction('create_attribute').traceableCallable(24, this.source)(...[])])) : (await this.environment.getFunction('create_attribute').traceableCallable(24, this.source)(...[]))), `addClass`, new Map([[0, (context.has(`classes`) ? context.get(`classes`) : null)]]), `method`, false, false, false);
                outputBuffer.echo(`
`);
                if (this.evaluate(!(await this.environment.getTest('empty').traceableCallable(27, this.source)(...[(context.has(`configuration`) ? context.get(`configuration`) : null)])))) {
                    outputBuffer.echo(`  <div `);
                    outputBuffer.echo((context.has(`attributes`) ? context.get(`attributes`) : null));
                    outputBuffer.echo(`>
    `);
                    outputBuffer.echo(await this.traceableRenderBlock(29, this.source)('cells', context.clone(), outputBuffer, blocks));
                    outputBuffer.echo(`  </div>
`);
                }
                else {
                    outputBuffer.echo(`  No configuration found for "`);
                    outputBuffer.echo((context.has(`columns`) ? context.get(`columns`) : null));
                    outputBuffer.echo(`/`);
                    outputBuffer.echo((context.has(`configuration`) ? context.get(`configuration`) : null));
                    outputBuffer.echo(`".
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

env.registerTemplatesModule(templatesModule, '1d6fb948ec81c58226fc20ed9629dfeeda08e0d4d9758794a57a0ecc143c3408');

let template = env.loadTemplate('1d6fb948ec81c58226fc20ed9629dfeeda08e0d4d9758794a57a0ecc143c3408');

module.exports = (context = {}) => {
    return template.then((template) => template.render(context));
};

/***/ }),

/***/ 19030:
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

                this._source = new this.Source(`{# SETTINGS #}
{% set header_classes = ([
  'header-offset bg-teal-200 w-full z-30 top-0 text-white',
  variant == 'fixed'? 'fixed h-18 w-full p-4 md:p-0',
  variant == 'sticky'? 'sticky py-2',
]) | sort | join(' ') | trim %}

{% set github_logo_classes = ([
  show_hamburger == true ? 'hidden md:block',
]) | sort | join(' ') | trim %}

{# TEMPLATE #}
<header class="{{ header_classes }}">
  <div class=" h-full flex justify-between md:justify-none items-center">
    <div class="w-4/6 md:w-2/6 max-w-xs md:max-w-7xl ml-3">
      <div class="flex items-center -ml-3 md:ml-0">
        {% include "@atoms/logo/logo.twig" only %}
        <span class="text-xs text-gray-300">v1.2</span>
      </div>
    </div>
    {% if show_hamburger == true %}
      <div class="block md:hidden" xxxclick="menuIsOpen = !menuIsOpen">
        {% include "@atoms/hamburger/hamburger.twig" only %}
      </div>
    {% endif %}
    <div class="{{ github_logo_classes }}">
      <a href="https://github.com/wingsuit-designsystem/wingsuit" target="_blank">
      <svg width="60" height="60" viewBox="0 0 250 250" aria-hidden="true"
           style="fill: rgb(0, 0, 0); color: rgb(255, 255, 255); position: absolute; top: 0px; border: 0px; right: 0px; z-index: 10;">
        <path d="M0,0 L115,115 L130,115 L142,142 L250,250 L250,0 Z"></path>
        <path
          d="M128.3,109.0 C113.8,99.7 119.0,89.6 119.0,89.6 C122.0,82.7 120.5,78.6 120.5,78.6 C119.2,72.0 123.4,76.3 123.4,76.3 C127.3,80.9 125.5,87.3 125.5,87.3 C122.9,97.6 130.6,101.9 134.4,103.2"
          fill="currentColor" class="octo-arm" style="transform-origin: 130px 106px;"></path>
        <path
          d="M115.0,115.0 C114.9,115.1 118.7,116.5 119.8,115.4 L133.7,101.6 C136.9,99.2 139.9,98.4 142.2,98.6 C133.8,88.0 127.5,74.4 143.8,58.0 C148.5,53.4 154.0,51.2 159.7,51.0 C160.3,49.4 163.2,43.6 171.4,40.1 C171.4,40.1 176.1,42.5 178.8,56.2 C183.1,58.6 187.2,61.8 190.9,65.4 C194.5,69.0 197.7,73.2 200.1,77.6 C213.8,80.2 216.3,84.9 216.3,84.9 C212.7,93.1 206.9,96.0 205.4,96.6 C205.1,102.4 203.0,107.8 198.3,112.5 C181.9,128.9 168.3,122.5 157.7,114.1 C157.9,116.9 156.7,120.9 152.7,124.9 L141.0,136.5 C139.8,137.7 141.6,141.9 141.8,141.8 Z"
          fill="currentColor" class="octo-body"></path>
      </svg>
      </a>
    </div>

    {% if top_menu is not empty %}
      <div class="hidden lg:flex flex-1">
        {{ top_menu }}
      </div>
    {% endif %}
  </div>
</header>
`, `40246685c842670d9921c666b80c1e54862f3a13730a41ca946a64c2e04f8134`);

                let aliases = new this.Context();
                aliases.proxy[`_self`] = this.aliases.proxy[`_self`] = this;
            }

            async doDisplay(context, outputBuffer, blocks = new Map()) {
                let aliases = this.aliases.clone();

                context.proxy[`header_classes`] = await this.environment.getFilter('trim').traceableCallable(6, this.source)(...[await this.environment.getFilter('join').traceableCallable(6, this.source)(...[await this.environment.getFilter('sort').traceableCallable(6, this.source)(...[new Map([[0, `header-offset bg-teal-200 w-full z-30 top-0 text-white`], [1, ((this.compare((context.has(`variant`) ? context.get(`variant`) : null), `fixed`)) ? (`fixed h-18 w-full p-4 md:p-0`) : (``))], [2, ((this.compare((context.has(`variant`) ? context.get(`variant`) : null), `sticky`)) ? (`sticky py-2`) : (``))]])]), ` `])]);
                outputBuffer.echo(`
`);
                context.proxy[`github_logo_classes`] = await this.environment.getFilter('trim').traceableCallable(10, this.source)(...[await this.environment.getFilter('join').traceableCallable(10, this.source)(...[await this.environment.getFilter('sort').traceableCallable(10, this.source)(...[new Map([[0, ((this.compare((context.has(`show_hamburger`) ? context.get(`show_hamburger`) : null), true)) ? (`hidden md:block`) : (``))]])]), ` `])]);
                outputBuffer.echo(`
`);
                outputBuffer.echo(`<header class="`);
                outputBuffer.echo((context.has(`header_classes`) ? context.get(`header_classes`) : null));
                outputBuffer.echo(`">
  <div class=" h-full flex justify-between md:justify-none items-center">
    <div class="w-4/6 md:w-2/6 max-w-xs md:max-w-7xl ml-3">
      <div class="flex items-center -ml-3 md:ml-0">
        `);
                outputBuffer.echo(await this.include(context, outputBuffer, `de728692c904e8a769f822a0508c5dfcb9e1cbcaee312f74fe757804f0d221f5`, undefined, false, false, 17));
                outputBuffer.echo(`        <span class="text-xs text-gray-300">v1.2</span>
      </div>
    </div>
    `);
                if (this.evaluate(this.compare((context.has(`show_hamburger`) ? context.get(`show_hamburger`) : null), true))) {
                    outputBuffer.echo(`      <div class="block md:hidden" xxxclick="menuIsOpen = !menuIsOpen">
        `);
                    outputBuffer.echo(await this.include(context, outputBuffer, `01c574c9a626cc4deb0422e101a7b0b2d188b4fd4a3ffcb055633d38097b8995`, undefined, false, false, 23));
                    outputBuffer.echo(`      </div>
    `);
                }
                outputBuffer.echo(`    <div class="`);
                outputBuffer.echo((context.has(`github_logo_classes`) ? context.get(`github_logo_classes`) : null));
                outputBuffer.echo(`">
      <a href="https://github.com/wingsuit-designsystem/wingsuit" target="_blank">
      <svg width="60" height="60" viewBox="0 0 250 250" aria-hidden="true"
           style="fill: rgb(0, 0, 0); color: rgb(255, 255, 255); position: absolute; top: 0px; border: 0px; right: 0px; z-index: 10;">
        <path d="M0,0 L115,115 L130,115 L142,142 L250,250 L250,0 Z"></path>
        <path
          d="M128.3,109.0 C113.8,99.7 119.0,89.6 119.0,89.6 C122.0,82.7 120.5,78.6 120.5,78.6 C119.2,72.0 123.4,76.3 123.4,76.3 C127.3,80.9 125.5,87.3 125.5,87.3 C122.9,97.6 130.6,101.9 134.4,103.2"
          fill="currentColor" class="octo-arm" style="transform-origin: 130px 106px;"></path>
        <path
          d="M115.0,115.0 C114.9,115.1 118.7,116.5 119.8,115.4 L133.7,101.6 C136.9,99.2 139.9,98.4 142.2,98.6 C133.8,88.0 127.5,74.4 143.8,58.0 C148.5,53.4 154.0,51.2 159.7,51.0 C160.3,49.4 163.2,43.6 171.4,40.1 C171.4,40.1 176.1,42.5 178.8,56.2 C183.1,58.6 187.2,61.8 190.9,65.4 C194.5,69.0 197.7,73.2 200.1,77.6 C213.8,80.2 216.3,84.9 216.3,84.9 C212.7,93.1 206.9,96.0 205.4,96.6 C205.1,102.4 203.0,107.8 198.3,112.5 C181.9,128.9 168.3,122.5 157.7,114.1 C157.9,116.9 156.7,120.9 152.7,124.9 L141.0,136.5 C139.8,137.7 141.6,141.9 141.8,141.8 Z"
          fill="currentColor" class="octo-body"></path>
      </svg>
      </a>
    </div>

    `);
                if (this.evaluate(!(await this.environment.getTest('empty').traceableCallable(41, this.source)(...[(context.has(`top_menu`) ? context.get(`top_menu`) : null)])))) {
                    outputBuffer.echo(`      <div class="hidden lg:flex flex-1">
        `);
                    outputBuffer.echo((context.has(`top_menu`) ? context.get(`top_menu`) : null));
                    outputBuffer.echo(`
      </div>
    `);
                }
                outputBuffer.echo(`  </div>
</header>
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

__webpack_require__(21490);
__webpack_require__(73353);
env.registerTemplatesModule(templatesModule, '40246685c842670d9921c666b80c1e54862f3a13730a41ca946a64c2e04f8134');

let template = env.loadTemplate('40246685c842670d9921c666b80c1e54862f3a13730a41ca946a64c2e04f8134');

module.exports = (context = {}) => {
    return template.then((template) => template.render(context));
};

/***/ }),

/***/ 40371:
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
 * section
 *
 * See section.wingsuit.yaml for documentation.
 */
#}

{# SETTINGS #}
{% if padding_bottom is not defined %}
  {% set padding_bottom = 'default' %}
{% endif %}

{%- set header -%}{%- block header -%}{{ header }}{% endblock %}{% endset %}
{% set region_attributes = region_attributes|default(create_attribute()) %}
{% set grid %}
  {%- set column_1 -%}{%- block column_1 -%}{{ _context['column_1' ] }}{% endblock %}{% endset %}
  {%- set column_2 -%}{%- block column_2 -%}{{ _context['column_2' ] }}{% endblock %}{% endset %}
  {%- set column_3 -%}{%- block column_3 -%}{{ _context['column_3' ] }}{% endblock %}{% endset %}
  {%- set column_4 -%}{%- block column_4 -%}{{ _context['column_4' ] }}{% endblock %}{% endset %}
  {%- set column_5 -%}{%- block column_5 -%}{{ _context['column_5' ] }}{% endblock %}{% endset %}
  {% set cells = [] %}
  {%- for i in 1..columns -%}
    {% set cells = cells|merge([_context['column_' ~ i ]]) %}
  {% endfor %}
  {% set columns_width = columns_width|default(_context['columns_width_' ~ columns ]) %}
  {% embed "@organisms/grid/grid.twig" with {
    attributes: create_attribute(),
    cells: cells,
    columns_width: columns_width,
    region_attributes: region_attributes
  }
  %}
    {#
      Layout Builder regions attributes should be part of the section cell.
    #}
    {% block cell_outer %}
      {% set column_name = 'column_' ~ (cell_counter + 1) %}
      {% set cell_classes = [
        cell_option == 'flex' ? 'flex section-cell-flex'
      ]
      %}
      {% set current_region_attributes = region_attributes[column_name]|default(create_attribute()).addClass(cell_classes | sort) %}

      <div{{ current_region_attributes }}>
          {{ cell }}
      </div>
    {% endblock %}
  {% endembed %}
{% endset %}

{# TEMPLATES #}
{% embed "@organisms/container/container.twig" with {
  attributes: attributes,
  content: grid,
  width: width,
  padding_x: padding_x,
  padding_top: padding_top,
  padding_bottom: padding_bottom,
  bg: bg,
  header: header,
  region_attributes: region_attributes,
  display_header_region: display_header_region
} only %}
  {% block content %}
  {% if header is not empty and display_header_region == true %}
    <div class="mb-5 md:mb-10 {{ region_attributes.header.class }}"></div>
  {% endif %}
    {{ header }}
  {{ content }}
  {% endblock %}
{% endembed %}
`, `1fed694ee4f268972833be545e1b4731d3669b6c95f204e9af86dc2fcb70189f`);

                let aliases = new this.Context();
                
                this.blockHandlers = new Map([
                    ['header', async (context, outputBuffer, blocks = new Map()) => {
                        let aliases = this.aliases.clone();
                        outputBuffer.echo((context.has(`header`) ? context.get(`header`) : null));
                    }],
                    ['column_1', async (context, outputBuffer, blocks = new Map()) => {
                        let aliases = this.aliases.clone();
                        outputBuffer.echo(await (async () => {let object = context; return this.get(object, `column_1`);})());
                    }],
                    ['column_2', async (context, outputBuffer, blocks = new Map()) => {
                        let aliases = this.aliases.clone();
                        outputBuffer.echo(await (async () => {let object = context; return this.get(object, `column_2`);})());
                    }],
                    ['column_3', async (context, outputBuffer, blocks = new Map()) => {
                        let aliases = this.aliases.clone();
                        outputBuffer.echo(await (async () => {let object = context; return this.get(object, `column_3`);})());
                    }],
                    ['column_4', async (context, outputBuffer, blocks = new Map()) => {
                        let aliases = this.aliases.clone();
                        outputBuffer.echo(await (async () => {let object = context; return this.get(object, `column_4`);})());
                    }],
                    ['column_5', async (context, outputBuffer, blocks = new Map()) => {
                        let aliases = this.aliases.clone();
                        outputBuffer.echo(await (async () => {let object = context; return this.get(object, `column_5`);})());
                    }]
                ]);
                aliases.proxy[`_self`] = this.aliases.proxy[`_self`] = this;
            }

            async doDisplay(context, outputBuffer, blocks = new Map()) {
                let aliases = this.aliases.clone();

                outputBuffer.echo(`
`);
                if (this.evaluate(!((context.has(`padding_bottom`))))) {
                    outputBuffer.echo(`  `);
                    context.proxy[`padding_bottom`] = `default`;
                }
                outputBuffer.start();
                outputBuffer.echo(await this.traceableRenderBlock(15, this.source)('header', context.clone(), outputBuffer, blocks));
                context.proxy[`header`] = (() => {let tmp = outputBuffer.getAndClean(); return tmp === '' ? '' : new this.Markup(tmp, this.environment.getCharset());})();
                context.proxy[`region_attributes`] = (((context.has(`region_attributes`))) ? (await this.environment.getFilter('default').traceableCallable(16, this.source)(...[(context.has(`region_attributes`) ? context.get(`region_attributes`) : null), await this.environment.getFunction('create_attribute').traceableCallable(16, this.source)(...[])])) : (await this.environment.getFunction('create_attribute').traceableCallable(16, this.source)(...[])));
                outputBuffer.start();
                outputBuffer.start();
                outputBuffer.echo(await this.traceableRenderBlock(18, this.source)('column_1', context.clone(), outputBuffer, blocks));
                context.proxy[`column_1`] = (() => {let tmp = outputBuffer.getAndClean(); return tmp === '' ? '' : new this.Markup(tmp, this.environment.getCharset());})();
                outputBuffer.start();
                outputBuffer.echo(await this.traceableRenderBlock(19, this.source)('column_2', context.clone(), outputBuffer, blocks));
                context.proxy[`column_2`] = (() => {let tmp = outputBuffer.getAndClean(); return tmp === '' ? '' : new this.Markup(tmp, this.environment.getCharset());})();
                outputBuffer.start();
                outputBuffer.echo(await this.traceableRenderBlock(20, this.source)('column_3', context.clone(), outputBuffer, blocks));
                context.proxy[`column_3`] = (() => {let tmp = outputBuffer.getAndClean(); return tmp === '' ? '' : new this.Markup(tmp, this.environment.getCharset());})();
                outputBuffer.start();
                outputBuffer.echo(await this.traceableRenderBlock(21, this.source)('column_4', context.clone(), outputBuffer, blocks));
                context.proxy[`column_4`] = (() => {let tmp = outputBuffer.getAndClean(); return tmp === '' ? '' : new this.Markup(tmp, this.environment.getCharset());})();
                outputBuffer.start();
                outputBuffer.echo(await this.traceableRenderBlock(22, this.source)('column_5', context.clone(), outputBuffer, blocks));
                context.proxy[`column_5`] = (() => {let tmp = outputBuffer.getAndClean(); return tmp === '' ? '' : new this.Markup(tmp, this.environment.getCharset());})();
                outputBuffer.echo(`  `);
                context.proxy[`cells`] = new Map([]);
                context.set('_parent', context.clone());

                await (async () => {
                    let c = this.ensureTraversable(this.createRange(1, (context.has(`columns`) ? context.get(`columns`) : null)));

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
                    context.proxy[`i`] = __value__;
                    context.proxy[`cells`] = await this.environment.getFilter('merge').traceableCallable(25, this.source)(...[(context.has(`cells`) ? context.get(`cells`) : null), new Map([[0, await (async () => {let object = context; return this.get(object, (this.concatenate(`column_`, (context.has(`i`) ? context.get(`i`) : null))));})()]])]);
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
                    context.delete('i');
                    context.delete('_parent');
                    context.delete('loop');
                    for (let [k, v] of parent) {
                        if (!context.has(k)) {
                            context.set(k, v);
                        }
                    }
                })();
                outputBuffer.echo(`  `);
                context.proxy[`columns_width`] = (((context.has(`columns_width`))) ? (await this.environment.getFilter('default').traceableCallable(27, this.source)(...[(context.has(`columns_width`) ? context.get(`columns_width`) : null), await (async () => {let object = context; return this.get(object, (this.concatenate(`columns_width_`, (context.has(`columns`) ? context.get(`columns`) : null))));})()])) : (await (async () => {let object = context; return this.get(object, (this.concatenate(`columns_width_`, (context.has(`columns`) ? context.get(`columns`) : null))));})()));
                outputBuffer.echo(`  `);
                outputBuffer.echo(await this.include(context, outputBuffer, await this.loadTemplate(`1fed694ee4f268972833be545e1b4731d3669b6c95f204e9af86dc2fcb70189f`, 28, 1), new Map([[`attributes`, await this.environment.getFunction('create_attribute').traceableCallable(29, this.source)(...[])], [`cells`, (context.has(`cells`) ? context.get(`cells`) : null)], [`columns_width`, (context.has(`columns_width`) ? context.get(`columns_width`) : null)], [`region_attributes`, (context.has(`region_attributes`) ? context.get(`region_attributes`) : null)]]), true, false, 28));
                context.proxy[`grid`] = (() => {let tmp = outputBuffer.getAndClean(); return tmp === '' ? '' : new this.Markup(tmp, this.environment.getCharset());})();
                outputBuffer.echo(`
`);
                outputBuffer.echo(await this.include(context, outputBuffer, await this.loadTemplate(`1fed694ee4f268972833be545e1b4731d3669b6c95f204e9af86dc2fcb70189f`, 54, 2), new Map([[`attributes`, (context.has(`attributes`) ? context.get(`attributes`) : null)], [`content`, (context.has(`grid`) ? context.get(`grid`) : null)], [`width`, (context.has(`width`) ? context.get(`width`) : null)], [`padding_x`, (context.has(`padding_x`) ? context.get(`padding_x`) : null)], [`padding_top`, (context.has(`padding_top`) ? context.get(`padding_top`) : null)], [`padding_bottom`, (context.has(`padding_bottom`) ? context.get(`padding_bottom`) : null)], [`bg`, (context.has(`bg`) ? context.get(`bg`) : null)], [`header`, (context.has(`header`) ? context.get(`header`) : null)], [`region_attributes`, (context.has(`region_attributes`) ? context.get(`region_attributes`) : null)], [`display_header_region`, (context.has(`display_header_region`) ? context.get(`display_header_region`) : null)]]), false, false, 54));
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
 * section
 *
 * See section.wingsuit.yaml for documentation.
 */
#}

{# SETTINGS #}
{% if padding_bottom is not defined %}
  {% set padding_bottom = 'default' %}
{% endif %}

{%- set header -%}{%- block header -%}{{ header }}{% endblock %}{% endset %}
{% set region_attributes = region_attributes|default(create_attribute()) %}
{% set grid %}
  {%- set column_1 -%}{%- block column_1 -%}{{ _context['column_1' ] }}{% endblock %}{% endset %}
  {%- set column_2 -%}{%- block column_2 -%}{{ _context['column_2' ] }}{% endblock %}{% endset %}
  {%- set column_3 -%}{%- block column_3 -%}{{ _context['column_3' ] }}{% endblock %}{% endset %}
  {%- set column_4 -%}{%- block column_4 -%}{{ _context['column_4' ] }}{% endblock %}{% endset %}
  {%- set column_5 -%}{%- block column_5 -%}{{ _context['column_5' ] }}{% endblock %}{% endset %}
  {% set cells = [] %}
  {%- for i in 1..columns -%}
    {% set cells = cells|merge([_context['column_' ~ i ]]) %}
  {% endfor %}
  {% set columns_width = columns_width|default(_context['columns_width_' ~ columns ]) %}
  {% embed "@organisms/grid/grid.twig" with {
    attributes: create_attribute(),
    cells: cells,
    columns_width: columns_width,
    region_attributes: region_attributes
  }
  %}
    {#
      Layout Builder regions attributes should be part of the section cell.
    #}
    {% block cell_outer %}
      {% set column_name = 'column_' ~ (cell_counter + 1) %}
      {% set cell_classes = [
        cell_option == 'flex' ? 'flex section-cell-flex'
      ]
      %}
      {% set current_region_attributes = region_attributes[column_name]|default(create_attribute()).addClass(cell_classes | sort) %}

      <div{{ current_region_attributes }}>
          {{ cell }}
      </div>
    {% endblock %}
  {% endembed %}
{% endset %}

{# TEMPLATES #}
{% embed "@organisms/container/container.twig" with {
  attributes: attributes,
  content: grid,
  width: width,
  padding_x: padding_x,
  padding_top: padding_top,
  padding_bottom: padding_bottom,
  bg: bg,
  header: header,
  region_attributes: region_attributes,
  display_header_region: display_header_region
} only %}
  {% block content %}
  {% if header is not empty and display_header_region == true %}
    <div class="mb-5 md:mb-10 {{ region_attributes.header.class }}"></div>
  {% endif %}
    {{ header }}
  {{ content }}
  {% endblock %}
{% endembed %}
`, `1fed694ee4f268972833be545e1b4731d3669b6c95f204e9af86dc2fcb70189f`);

                let aliases = new this.Context();
                
                this.blockHandlers = new Map([
                    ['cell_outer', async (context, outputBuffer, blocks = new Map()) => {
                        let aliases = this.aliases.clone();
                        outputBuffer.echo(`      `);
                        context.proxy[`column_name`] = (this.concatenate(`column_`, ((context.has(`cell_counter`) ? context.get(`cell_counter`) : null) + 1)));
                        outputBuffer.echo(`      `);
                        context.proxy[`cell_classes`] = new Map([[0, ((this.compare((context.has(`cell_option`) ? context.get(`cell_option`) : null), `flex`)) ? (`flex section-cell-flex`) : (``))]]);
                        outputBuffer.echo(`      `);
                        context.proxy[`current_region_attributes`] = await this.traceableMethod(this.getAttribute, 44, this.source)(this.environment, ((await this.traceableMethod(this.getAttribute, 44, this.source)(this.environment, (context.has(`region_attributes`) ? context.get(`region_attributes`) : null), (context.has(`column_name`) ? context.get(`column_name`) : null), new Map([]), `array`, true, true, false)) ? (await this.environment.getFilter('default').traceableCallable(44, this.source)(...[await (async () => {let object = (context.has(`region_attributes`) ? context.get(`region_attributes`) : null); return this.get(object, (context.has(`column_name`) ? context.get(`column_name`) : null));})(), await this.environment.getFunction('create_attribute').traceableCallable(44, this.source)(...[])])) : (await this.environment.getFunction('create_attribute').traceableCallable(44, this.source)(...[]))), `addClass`, new Map([[0, await this.environment.getFilter('sort').traceableCallable(44, this.source)(...[(context.has(`cell_classes`) ? context.get(`cell_classes`) : null)])]]), `method`, false, false, false);
                        outputBuffer.echo(`
      <div`);
                        outputBuffer.echo((context.has(`current_region_attributes`) ? context.get(`current_region_attributes`) : null));
                        outputBuffer.echo(`>
          `);
                        outputBuffer.echo((context.has(`cell`) ? context.get(`cell`) : null));
                        outputBuffer.echo(`
      </div>
    `);
                    }]
                ]);
                aliases.proxy[`_self`] = this.aliases.proxy[`_self`] = this;
            }

            doGetParent(context) {
                return this.loadTemplate(`1d6fb948ec81c58226fc20ed9629dfeeda08e0d4d9758794a57a0ecc143c3408`, 28).then((parent) => {
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
 * section
 *
 * See section.wingsuit.yaml for documentation.
 */
#}

{# SETTINGS #}
{% if padding_bottom is not defined %}
  {% set padding_bottom = 'default' %}
{% endif %}

{%- set header -%}{%- block header -%}{{ header }}{% endblock %}{% endset %}
{% set region_attributes = region_attributes|default(create_attribute()) %}
{% set grid %}
  {%- set column_1 -%}{%- block column_1 -%}{{ _context['column_1' ] }}{% endblock %}{% endset %}
  {%- set column_2 -%}{%- block column_2 -%}{{ _context['column_2' ] }}{% endblock %}{% endset %}
  {%- set column_3 -%}{%- block column_3 -%}{{ _context['column_3' ] }}{% endblock %}{% endset %}
  {%- set column_4 -%}{%- block column_4 -%}{{ _context['column_4' ] }}{% endblock %}{% endset %}
  {%- set column_5 -%}{%- block column_5 -%}{{ _context['column_5' ] }}{% endblock %}{% endset %}
  {% set cells = [] %}
  {%- for i in 1..columns -%}
    {% set cells = cells|merge([_context['column_' ~ i ]]) %}
  {% endfor %}
  {% set columns_width = columns_width|default(_context['columns_width_' ~ columns ]) %}
  {% embed "@organisms/grid/grid.twig" with {
    attributes: create_attribute(),
    cells: cells,
    columns_width: columns_width,
    region_attributes: region_attributes
  }
  %}
    {#
      Layout Builder regions attributes should be part of the section cell.
    #}
    {% block cell_outer %}
      {% set column_name = 'column_' ~ (cell_counter + 1) %}
      {% set cell_classes = [
        cell_option == 'flex' ? 'flex section-cell-flex'
      ]
      %}
      {% set current_region_attributes = region_attributes[column_name]|default(create_attribute()).addClass(cell_classes | sort) %}

      <div{{ current_region_attributes }}>
          {{ cell }}
      </div>
    {% endblock %}
  {% endembed %}
{% endset %}

{# TEMPLATES #}
{% embed "@organisms/container/container.twig" with {
  attributes: attributes,
  content: grid,
  width: width,
  padding_x: padding_x,
  padding_top: padding_top,
  padding_bottom: padding_bottom,
  bg: bg,
  header: header,
  region_attributes: region_attributes,
  display_header_region: display_header_region
} only %}
  {% block content %}
  {% if header is not empty and display_header_region == true %}
    <div class="mb-5 md:mb-10 {{ region_attributes.header.class }}"></div>
  {% endif %}
    {{ header }}
  {{ content }}
  {% endblock %}
{% endembed %}
`, `1fed694ee4f268972833be545e1b4731d3669b6c95f204e9af86dc2fcb70189f`);

                let aliases = new this.Context();
                
                this.blockHandlers = new Map([
                    ['content', async (context, outputBuffer, blocks = new Map()) => {
                        let aliases = this.aliases.clone();
                        outputBuffer.echo(`  `);
                        if (this.evaluate(!!(!(await this.environment.getTest('empty').traceableCallable(67, this.source)(...[(context.has(`header`) ? context.get(`header`) : null)])) && this.compare((context.has(`display_header_region`) ? context.get(`display_header_region`) : null), true)))) {
                            outputBuffer.echo(`    <div class="mb-5 md:mb-10 `);
                            outputBuffer.echo(await this.traceableMethod(this.getAttribute, 68, this.source)(this.environment, await this.traceableMethod(this.getAttribute, 68, this.source)(this.environment, (context.has(`region_attributes`) ? context.get(`region_attributes`) : null), `header`, new Map([]), `any`, false, false, false), `class`, new Map([]), `any`, false, false, false));
                            outputBuffer.echo(`"></div>
  `);
                        }
                        outputBuffer.echo(`    `);
                        outputBuffer.echo((context.has(`header`) ? context.get(`header`) : null));
                        outputBuffer.echo(`
  `);
                        outputBuffer.echo((context.has(`content`) ? context.get(`content`) : null));
                        outputBuffer.echo(`
  `);
                    }]
                ]);
                aliases.proxy[`_self`] = this.aliases.proxy[`_self`] = this;
            }

            doGetParent(context) {
                return this.loadTemplate(`7b43b8ea671f6b748a04f57240aa1d9995b6e3129a965868a2d25d2d9ad4e36c`, 54).then((parent) => {
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

__webpack_require__(14392);
__webpack_require__(51426);
env.registerTemplatesModule(templatesModule, '1fed694ee4f268972833be545e1b4731d3669b6c95f204e9af86dc2fcb70189f');

let template = env.loadTemplate('1fed694ee4f268972833be545e1b4731d3669b6c95f204e9af86dc2fcb70189f');

module.exports = (context = {}) => {
    return template.then((template) => template.render(context));
};

/***/ }),

/***/ 14947:
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
{% include "@templates/site-container.twig" with {
  menu: menu,
  footer_menu: footer_menu,
  top_menu: top_menu,
  show_hamburger: true,
  content: content,
  display_menu: display_menu,
} %}

`, `862b5808b09213255555a6b2165a4bfcfc3b5b63b39454292588dcf2fd27c4ac`);

                let aliases = new this.Context();
                aliases.proxy[`_self`] = this.aliases.proxy[`_self`] = this;
            }

            async doDisplay(context, outputBuffer, blocks = new Map()) {
                let aliases = this.aliases.clone();

                outputBuffer.echo(await this.include(context, outputBuffer, `9abd0e16b6b64380f565fa52ff93684586c8c3203d5734650fb47bfa04f056d2`, new Map([[`menu`, (context.has(`menu`) ? context.get(`menu`) : null)], [`footer_menu`, (context.has(`footer_menu`) ? context.get(`footer_menu`) : null)], [`top_menu`, (context.has(`top_menu`) ? context.get(`top_menu`) : null)], [`show_hamburger`, true], [`content`, (context.has(`content`) ? context.get(`content`) : null)], [`display_menu`, (context.has(`display_menu`) ? context.get(`display_menu`) : null)]]), true, false, 9));
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
env.registerTemplatesModule(templatesModule, '862b5808b09213255555a6b2165a4bfcfc3b5b63b39454292588dcf2fd27c4ac');

let template = env.loadTemplate('862b5808b09213255555a6b2165a4bfcfc3b5b63b39454292588dcf2fd27c4ac');

module.exports = (context = {}) => {
    return template.then((template) => template.render(context));
};

/***/ }),

/***/ 85007:
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

                this._source = new this.Source(`{# Include this template inside the page.html.twig in drupal. #}

{% block header %}
  {% include '@organisms/header/header.twig' with {show_hamburger: show_hamburger, top_menu: top_menu, has_spacer: header_has_spacer, variant: "fixed" } only %}
{% endblock header %}

{{ highlighted }}
{% set content %}
  {% block content %}
    {{ content }}
  {% endblock %}
{% endset %}

<main class="main-content flex-1 mt-16">
  {% block main %}
    {% if menu is not empty and display_menu %}
      {% embed "@organisms/section/section.twig" with { columns_width_2: '25x75', columns: 2, width: 'default', padding_top: 'default'} %}
        {% block column_1 %}
          {{ menu }}
        {% endblock %}
        {% block column_2 %}
          {{ content }}
        {% endblock %}
      {% endembed %}

    {% else %}
      {% if display_menu == false %}
        <div class="hidden md:hidden" :class="{'block': menuIsOpen, 'hidden': !menuIsOpen}">
        {{ menu }}
        </div>
      {% endif %}
      {{ content }}
    {% endif %}
  {% endblock %}
</main>

{% block footer %}
  {% include "@organisms/footer/footer.twig" with {
    footer_menu: footer_menu
  } %}
{% endblock footer %}
`, `9abd0e16b6b64380f565fa52ff93684586c8c3203d5734650fb47bfa04f056d2`);

                let aliases = new this.Context();
                
                this.blockHandlers = new Map([
                    ['header', async (context, outputBuffer, blocks = new Map()) => {
                        let aliases = this.aliases.clone();
                        outputBuffer.echo(`  `);
                        outputBuffer.echo(await this.include(context, outputBuffer, `40246685c842670d9921c666b80c1e54862f3a13730a41ca946a64c2e04f8134`, new Map([[`show_hamburger`, (context.has(`show_hamburger`) ? context.get(`show_hamburger`) : null)], [`top_menu`, (context.has(`top_menu`) ? context.get(`top_menu`) : null)], [`has_spacer`, (context.has(`header_has_spacer`) ? context.get(`header_has_spacer`) : null)], [`variant`, `fixed`]]), false, false, 4));
                    }],
                    ['content', async (context, outputBuffer, blocks = new Map()) => {
                        let aliases = this.aliases.clone();
                        outputBuffer.echo(`    `);
                        outputBuffer.echo((context.has(`content`) ? context.get(`content`) : null));
                        outputBuffer.echo(`
  `);
                    }],
                    ['main', async (context, outputBuffer, blocks = new Map()) => {
                        let aliases = this.aliases.clone();
                        outputBuffer.echo(`    `);
                        if (this.evaluate(!!(!(await this.environment.getTest('empty').traceableCallable(16, this.source)(...[(context.has(`menu`) ? context.get(`menu`) : null)])) && (context.has(`display_menu`) ? context.get(`display_menu`) : null)))) {
                            outputBuffer.echo(`      `);
                            outputBuffer.echo(await this.include(context, outputBuffer, await this.loadTemplate(`9abd0e16b6b64380f565fa52ff93684586c8c3203d5734650fb47bfa04f056d2`, 17, 1), new Map([[`columns_width_2`, `25x75`], [`columns`, 2], [`width`, `default`], [`padding_top`, `default`]]), true, false, 17));
                            outputBuffer.echo(`
    `);
                        }
                        else {
                            outputBuffer.echo(`      `);
                            if (this.evaluate(this.compare((context.has(`display_menu`) ? context.get(`display_menu`) : null), false))) {
                                outputBuffer.echo(`        <div class="hidden md:hidden" :class="{'block': menuIsOpen, 'hidden': !menuIsOpen}">
        `);
                                outputBuffer.echo((context.has(`menu`) ? context.get(`menu`) : null));
                                outputBuffer.echo(`
        </div>
      `);
                            }
                            outputBuffer.echo(`      `);
                            outputBuffer.echo((context.has(`content`) ? context.get(`content`) : null));
                            outputBuffer.echo(`
    `);
                        }
                        outputBuffer.echo(`  `);
                    }],
                    ['footer', async (context, outputBuffer, blocks = new Map()) => {
                        let aliases = this.aliases.clone();
                        outputBuffer.echo(`  `);
                        outputBuffer.echo(await this.include(context, outputBuffer, `9fbebb63016b7f6995d13e0590c894dee8c799a3f3a3fdb2e7cfad9889c38d0f`, new Map([[`footer_menu`, (context.has(`footer_menu`) ? context.get(`footer_menu`) : null)]]), true, false, 38));
                    }]
                ]);
                aliases.proxy[`_self`] = this.aliases.proxy[`_self`] = this;
            }

            async doDisplay(context, outputBuffer, blocks = new Map()) {
                let aliases = this.aliases.clone();

                outputBuffer.echo(`
`);
                outputBuffer.echo(await this.traceableRenderBlock(3, this.source)('header', context.clone(), outputBuffer, blocks));
                outputBuffer.echo(`
`);
                outputBuffer.echo((context.has(`highlighted`) ? context.get(`highlighted`) : null));
                outputBuffer.echo(`
`);
                outputBuffer.start();
                outputBuffer.echo(`  `);
                outputBuffer.echo(await this.traceableRenderBlock(9, this.source)('content', context.clone(), outputBuffer, blocks));
                context.proxy[`content`] = (() => {let tmp = outputBuffer.getAndClean(); return tmp === '' ? '' : new this.Markup(tmp, this.environment.getCharset());})();
                outputBuffer.echo(`
<main class="main-content flex-1 mt-16">
  `);
                outputBuffer.echo(await this.traceableRenderBlock(15, this.source)('main', context.clone(), outputBuffer, blocks));
                outputBuffer.echo(`</main>

`);
                outputBuffer.echo(await this.traceableRenderBlock(37, this.source)('footer', context.clone(), outputBuffer, blocks));
            }

            get isTraitable() {
                return false;
            }

        }],
        [1, class extends TwingTemplate {
            constructor(environment) {
                super(environment);

                this._source = new this.Source(`{# Include this template inside the page.html.twig in drupal. #}

{% block header %}
  {% include '@organisms/header/header.twig' with {show_hamburger: show_hamburger, top_menu: top_menu, has_spacer: header_has_spacer, variant: "fixed" } only %}
{% endblock header %}

{{ highlighted }}
{% set content %}
  {% block content %}
    {{ content }}
  {% endblock %}
{% endset %}

<main class="main-content flex-1 mt-16">
  {% block main %}
    {% if menu is not empty and display_menu %}
      {% embed "@organisms/section/section.twig" with { columns_width_2: '25x75', columns: 2, width: 'default', padding_top: 'default'} %}
        {% block column_1 %}
          {{ menu }}
        {% endblock %}
        {% block column_2 %}
          {{ content }}
        {% endblock %}
      {% endembed %}

    {% else %}
      {% if display_menu == false %}
        <div class="hidden md:hidden" :class="{'block': menuIsOpen, 'hidden': !menuIsOpen}">
        {{ menu }}
        </div>
      {% endif %}
      {{ content }}
    {% endif %}
  {% endblock %}
</main>

{% block footer %}
  {% include "@organisms/footer/footer.twig" with {
    footer_menu: footer_menu
  } %}
{% endblock footer %}
`, `9abd0e16b6b64380f565fa52ff93684586c8c3203d5734650fb47bfa04f056d2`);

                let aliases = new this.Context();
                
                this.blockHandlers = new Map([
                    ['column_1', async (context, outputBuffer, blocks = new Map()) => {
                        let aliases = this.aliases.clone();
                        outputBuffer.echo(`          `);
                        outputBuffer.echo((context.has(`menu`) ? context.get(`menu`) : null));
                        outputBuffer.echo(`
        `);
                    }],
                    ['column_2', async (context, outputBuffer, blocks = new Map()) => {
                        let aliases = this.aliases.clone();
                        outputBuffer.echo(`          `);
                        outputBuffer.echo((context.has(`content`) ? context.get(`content`) : null));
                        outputBuffer.echo(`
        `);
                    }]
                ]);
                aliases.proxy[`_self`] = this.aliases.proxy[`_self`] = this;
            }

            doGetParent(context) {
                return this.loadTemplate(`1fed694ee4f268972833be545e1b4731d3669b6c95f204e9af86dc2fcb70189f`, 17).then((parent) => {
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

__webpack_require__(40371);
__webpack_require__(19030);
__webpack_require__(74112);
env.registerTemplatesModule(templatesModule, '9abd0e16b6b64380f565fa52ff93684586c8c3203d5734650fb47bfa04f056d2');

let template = env.loadTemplate('9abd0e16b6b64380f565fa52ff93684586c8c3203d5734650fb47bfa04f056d2');

module.exports = (context = {}) => {
    return template.then((template) => template.render(context));
};

/***/ }),

/***/ 78181:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* unused harmony export patternbutton */
/* harmony import */ var _wingsuit_designsystem_pattern__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(84065);
/* harmony import */ var atoms_button_button_twig__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5086);
/* harmony import */ var atoms_button_button_twig__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(atoms_button_button_twig__WEBPACK_IMPORTED_MODULE_1__);
 
    (0,_wingsuit_designsystem_pattern__WEBPACK_IMPORTED_MODULE_0__.getStorage)().addDefinitions({"button":{"use":"@atoms/button/button.twig","label":"Button","description":"Regular or outline buttons with different colors.","fields":{"text":{"type":"text","label":"Text","preview":"More"}},"variants":{"default":{"label":"Default","configuration":{"colors":{"primary":"border-teal-500 bg-teal-500 px-6 font-bold text-black hover:shadow-button","secondary":"border-yellow-300 bg-yellow-300 px-6 text-black hover:bg-yellow-600 hover:border-yellow-600"}}},"outline":{"label":"Outline","configuration":{"colors":{"primary":"border-teal-300 text-black px-6 hover:bg-teal-600 hover:border-teal-600 hover:text-white","secondary":"border-yellow-600 text-black px-6 hover:bg-yellow-600 hover:text-white"}},"description":"Inverts colors"}},"configuration":{"size":{"padding":{"small":"py-1 px-2","medium":"py-2 px-2","large":"py-2 px-4 md:py-4 md:px-8"},"text":{"small":"text-xs","medium":"text-base","large":"text-xl md:text-3xl"},"icon":{"small":"w-4 h-4","medium":"w-5 h-5","large":"w-6 h-6"}}},"settings":{"size":{"type":"select","required":true,"label":"Size","preview":"medium","options":{"small":"Small","medium":"Medium","large":"Large"}},"expanded":{"type":"boolean","label":"Expanded"},"round":{"type":"boolean","label":"Round"},"color":{"type":"select","required":true,"label":"Color","preview":"primary","description":"Choose your color","options":{"primary":"Primary","secondary":"Secondary"}},"url":{"type":"url","label":"Url","description":"The action url of your button","preview":"https://github.com/wingsuit-designsystem/wingsuit"},"icon":{"type":"select","label":"Icon","description":"Go with an icon alongside your text.","options":{"plus":"Plus","search":"Search","right-arrow":"Right-arrow"}},"icon_alignment":{"type":"select","label":"Icon alignment","description":"Left or right your text.","default_value":"right","options":{"left":"Left","right":"Right"}}},"namespace":"atoms"}}); 
   const patternbutton = (0,_wingsuit_designsystem_pattern__WEBPACK_IMPORTED_MODULE_0__.getStorage)().loadPattern('button'); patternbutton.setTemplate((atoms_button_button_twig__WEBPACK_IMPORTED_MODULE_1___default())); /* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = ((0,_wingsuit_designsystem_pattern__WEBPACK_IMPORTED_MODULE_0__.getStorage)().loadPattern('button'));

/***/ }),

/***/ 28064:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* unused harmony export patternrichText */
/* harmony import */ var _wingsuit_designsystem_pattern__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(84065);
/* harmony import */ var atoms_rich_text_rich_text_twig__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(66745);
/* harmony import */ var atoms_rich_text_rich_text_twig__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(atoms_rich_text_rich_text_twig__WEBPACK_IMPORTED_MODULE_1__);
 
    (0,_wingsuit_designsystem_pattern__WEBPACK_IMPORTED_MODULE_0__.getStorage)().addDefinitions({"rich_text":{"use":"@atoms/rich-text/rich-text.twig","label":"Rich Text","description":"Component for displaying rich text, for example from a WYSIWYG editor. Check https://github.com/tailwindlabs/tailwindcss-typography for more informations.","fields":{"text":{"type":"text","label":"Text","preview":"<p class=\"lead\">Until now, trying to style an article, document, or blog post with Tailwind has been a tedious task that required a keen eye for typography and a lot of complex custom CSS.</p><p>By default, Tailwind removes all of the default browser styling from paragraphs, headings, lists and more. This ends up being really useful for building application UIs because you spend less time undoing user-agent styles, but when you <em>really are</em> just trying to style some content that came from a rich-text editor in a CMS or a markdown file, it can be surprising and unintuitive.</p><p>We get lots of complaints about it actually, with people regularly asking us things like:</p><blockquote><p>Why is Tailwind removing the default styles on my <code>h1</code> elements? How do I disable this? What do you mean I lose all the other base styles too?</p></blockquote><p>We hear you, but we are not convinced that simply disabling our base styles is what you really want. You do not want to have to remove annoying margins every time you use a <code>p</code> element in a piece of your dashboard UI. And I doubt you really want your blog posts to use the user-agent styles either — you want them to look <em>awesome</em>, not awful.</p><p>The <code>@tailwindcss/typography</code> plugin is our attempt to give you what you <em>actually</em> want, without any of the downsides of doing something stupid like disabling our base styles.</p><p>It adds a new <code>prose</code> class that you can slap on any block of vanilla HTML content and turn it into a beautiful, well-formatted document:</p><pre><code class=\"language-html\">&lt;article class=\"prose\"&gt;&lt;h1&gt;Garlic bread with cheese: What the science tells us&lt;/h1&gt;&lt;p&gt; For years parents have espoused the health benefits of eating garlic bread with cheese to their children, with the food earning such an iconic status in our culture that kids will often dress up as warm, cheesy loaf for Halloween. &lt;/p&gt; &lt;p&gt; But a recent study shows that the celebrated appetizer may be linked to a series of rabies cases springing up around the country. &lt;/p&gt; &lt;!-- ... --&gt; &lt;/article&gt; </code></pre> <p>For more information about how to use the plugin and the features it includes, <a href=\"https://github.com/tailwindcss/typography/blob/master/README.md\">read the documentation</a>.</p><hr><h2>What to expect from here on out</h2><p>What follows from here is just a bunch of absolute nonsense I have written to dogfood the plugin itself. It includes every sensible typographic element I could think of, like <strong>bold text</strong>, unordered lists, ordered lists, code blocks, block quotes, <em>and even italics</em>.</p><p>It is important to cover all of these use cases for a few reasons:</p><ol><li>We want everything to look good out of the box.</li><li>Really just the first reason, that is the whole point of the plugin.</li><li>Here is a third pretend reason though a list with three items looks more realistic than a list with two items.</li></ol><p>Now we are going to try out another header style.</p><h3>Typography should be easy</h3><p>So that is a header for you — with any luck if we have done our job correctly that will look pretty reasonable.</p><p>Something a wise person once told me about typography is:</p><blockquote><p>Typography is pretty important if you do not want your stuff to look like trash. Make it good then it wont be bad.</p></blockquote><p>It is probably important that images look okay here by default as well:</p><figure><img src=\"https://images.unsplash.com/photo-1556740758-90de374c12ad?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=1000&amp;q=80\" alt=\"\"><figcaption>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.</figcaption></figure><p>Now I am going to show you an example of an unordered list to make sure that looks good, too:</p> <ul><li>So here is the first item in this list.</li><li>In this example we are keeping the items short.</li><li>Later, we will use longer, more complex list items.</li></ul><p>And that is the end of this section.</p><h2>What if we stack headings?</h2><h3>We should make sure that looks good, too.</h3><p>Sometimes you have headings directly underneath each other. In those cases you often have to undo the top margin on the second heading because it usually looks better for the headings to be closer together than a paragraph followed by a heading should be.</p><h3>When a heading comes after a paragraph …</h3><p>When a heading comes after a paragraph, we need a bit more space, like I already mentioned above. Now lets see what a more complex list would look like.</p><ul><li><p><strong>I often do this thing where list items have headings.</strong></p><p>For some reason I think this looks cool which is unfortunate because it is pretty annoying to get the styles right.</p><p>I often have two or three paragraphs in these list items, too, so the hard part is getting the spacing between the paragraphs, list item heading, and separate list items to all make sense. Pretty tough honestly, you could make a strong argument that you just should not write this way.</p></li><li><p><strong>Since this is a list, I need at least two items.</strong></p><p>I explained what I am doing already in the previous list item, but a list would not be a list if it only had one item, and we really want this to look realistic. That is why I have added this second list item so I actually have something to look at when writing the styles.</p></li><li><p><strong>It is not a bad idea to add a third item either.</strong></p><p>I think it probably would have been fine to just use two items but three is definitely not worse, and since I seem to be having no trouble making up arbitrary things to type, I might as well include it.</p></li></ul> <p>After this sort of list I usually have a closing statement or paragraph, because it kinda looks weird jumping right to a heading.</p><h2>Code should look okay by default.</h2><p>I think most people are going to use <a href=\"https://highlightjs.org/\">highlight.js</a> or <a href=\"https://prismjs.com/\">Prism</a> or something if they want to style their code blocks but it would not hurt to make them look <em>okay</em> out of the box, even with no syntax highlighting.</p><p>Here is what a default <code>tailwind.config.js</code> file looks like at the time of writing:</p> <pre><code class=\"language-js\">module.exports = { purge: [], theme: { extend: {}, }, variants: {}, plugins: [], } </code></pre><p>Hopefully that looks good enough to you.</p><h3>What about nested lists?</h3><p>Nested lists basically always look bad which is why editors like Medium do not even let you do it, but I guess since some of you goofballs are going to do it we have to carry the burden of at least making it work.</p><ol><li><strong>Nested lists are rarely a good idea.</strong> <ul><li>You might feel like you are being really \"organized\" or something but you are just creating a gross shape on the screen that is hard to read.</li><li>Nested navigation in UIs is a bad idea too, keep things as flat as possible.</li><li>Nesting tons of folders in your source code is also not helpful.</li></ul></li><li><strong>Since we need to have more items, here is another one.</strong><ul><li>I am not sure if we will bother styling more than two levels deep.</li><li>Two is already too much, three is guaranteed to be a bad idea.</li><li>If you nest four levels deep you belong in prison.</li></ul></li><li><strong>Two items is not really a list, three is good though.</strong><ul><li>Again please do not nest lists if you want people to actually read your content.</li><li>Nobody wants to look at this.</li><li>I am upset that we even have to bother styling this.</li></ul></li></ol><p>The most annoying thing about lists in Markdown is that <code>&lt;li&gt;</code> elements are not given a child <code>&lt;p&gt;</code> tag unless there are multiple paragraphs in the list item. That means I have to worry about styling that annoying situation too.</p><ul><li><p><strong>For example, here is another nested list.</strong></p><p>But this time with a second paragraph.</p><ul><li>These list items wont have <code>&lt;p&gt;</code> tags</li><li>Because they are only one line each</li></ul></li><li> <p><strong>But in this second top-level list item, they will.</strong></p><p>This is especially annoying because of the spacing on this paragraph.</p> <ul><li><p>As you can see here, because I have added a second line, this list item now has a <code>&lt;p&gt;</code> tag.</p><p>This is the second line I am talking about by the way.</p></li><li><p>Finally here is another list item so it is more like a list.</p></li></ul></li><li><p>A closing list item, but with no nested list, because why not?</p></li></ul><p>And finally a sentence to close off this section.</p><h2>There are other elements we need to style</h2><p>I almost forgot to mention links, like <a href=\"https://tailwindcss.com\">this link to the Tailwind CSS website</a>. We almost made them blue but that is so yesterday, so we went with dark gray, feels edgier.</p><p>We even included table styles, check it out:</p><table><thead><tr><th>Wrestler</th><th>Origin</th><th>Finisher</th></tr></thead><tbody><tr><td>Bret \"The Hitman\" Hart</td><td>Calgary, AB</td><td>Sharpshooter</td></tr><tr><td>Stone Cold Steve Austin</td><td>Austin, TX</td><td>Stone Cold Stunner</td></tr><tr><td>Randy Savage</td><td>Sarasota, FL</td><td>Elbow Drop</td></tr><tr><td>Vader</td><td>Boulder, CO</td><td>Vader Bomb</td></tr><tr><td>Razor Ramon</td><td>Chuluota, FL</td><td>Razor is Edge</td></tr></tbody></table><p>We also need to make sure inline code looks good, like if I wanted to talk about <code>&lt;span&gt;</code> elements or tell you the good news about <code>@tailwindcss/typography</code>.</p><h3>Sometimes I even use <code>code</code> in headings</h3><p>Even though it is probably a bad idea, and historically I have had a hard time making it look good. This <em>\"wrap the code blocks in backticks\"</em> trick works pretty well though really.</p><p>Another thing I have done in the past is put a <code>code</code> tag inside of a link, like if I wanted to tell you about the <a href=\"https://github.com/tailwindcss/docs\"><code>tailwindcss/docs</code></a> repository. I do not love that there is an underline below the backticks but it is absolutely not worth the madness it would require to avoid it.</p><h4>We have not used an <code>h4</code> yet</h4><p>But now we have. Please do not use <code>h5</code> or <code>h6</code> in your content, Medium only supports two heading levels for a reason, you animals. I honestly considered using a <code>before</code> pseudo-element to scream at you if you use an <code>h5</code> or <code>h6</code>.</p><p>We do not style them at all out of the box because <code>h4</code> elements are already so small that they are the same size as the body copy. What are we supposed to do with an <code>h5</code>, make it <em>smaller</em> than the body copy? No thanks.</p><h3>We still need to think about stacked headings though.</h3><h4>Lets make sure we do not screw that up with <code>h4</code> elements, either.</h4><p>Phew, with any luck we have styled the headings above this text and they look pretty good.</p><p>Let is add a closing paragraph here so things end with a decently sized block of text. I can not explain why I want things to end that way but I have to assume it is because I think things will look weird or unbalanced if there is a heading too close to the end of the document.</p><p>What I have written here is probably long enough, but adding this final sentence can not hurt.</p></div></div>"}},"variants":{"default":{"label":"Default"},"large":{"label":"Large"}},"settings":{"text_align":{"type":"select","options":{"center":"Center"}}},"namespace":"atoms"}}); 
   const patternrichText = (0,_wingsuit_designsystem_pattern__WEBPACK_IMPORTED_MODULE_0__.getStorage)().loadPattern('rich_text'); patternrichText.setTemplate((atoms_rich_text_rich_text_twig__WEBPACK_IMPORTED_MODULE_1___default())); /* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = ((0,_wingsuit_designsystem_pattern__WEBPACK_IMPORTED_MODULE_0__.getStorage)().loadPattern('rich_text'));

/***/ }),

/***/ 23598:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* unused harmony export patterncontainer */
/* harmony import */ var _wingsuit_designsystem_pattern__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(84065);
/* harmony import */ var organisms_container_container_twig__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(51426);
/* harmony import */ var organisms_container_container_twig__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(organisms_container_container_twig__WEBPACK_IMPORTED_MODULE_1__);
 
    (0,_wingsuit_designsystem_pattern__WEBPACK_IMPORTED_MODULE_0__.getStorage)().addDefinitions({"container":{"use":"@organisms/container/container.twig","label":"Container","description":"Primary Layout Container to manage the \"max-width\" and padding to other layout elements.","fields":{"content":{"type":"text","label":"Content","preview":{"faker":"lorem.paragraphs"}}},"settings":{"width":{"type":"select","label":"Width","default_value":"default","required":true,"preview":"default","options":{"small":"Small","default":"Default","large":"Large","xlarge":"Xlarge","full":"Full"}},"tab_bg":{"label":"Background","type":"group","group_type":"details"},"bg":{"type":"colorwidget","label":"Background color","default_value":"","group":"tab_bg","options":{"":"Transparent","gray-medium":"Medium gray/#6b7280","gray-light":"Light gray/#d1d5db","purple-light":"Light purple","green-light":"Light green","blue-light":"Light blue"}},"tab_spacing":{"label":"Spacing","type":"group","group_type":"details"},"padding_x":{"type":"select","label":"Padding left/right","required":true,"group":"tab_spacing","default_value":"default","options":{"default":"Default","large":"Large"}},"padding_top":{"type":"select","label":"Padding top","default_value":"default","group":"tab_spacing","options":{"small":"Small","default":"Default","large":"Large"}},"padding_bottom":{"type":"select","label":"Padding bottom","group":"tab_spacing","options":{"small":"Small","default":"Default","large":"Large"}},"tab_advanced":{"label":"Advanced","type":"group","group_type":"details"},"classes":{"type":"textfield","label":"Additional classes","group":"tab_advanced"}},"configuration":{"padding_x":{"default":"px-6","large":"px-10"},"padding_top":{"small":"pt-8","default":"pt-10 md:pt-20","large":"pt-20 md:pt-24"},"padding_bottom":{"small":"pb-8","default":"pb-10 md:pb-20","large":"pb-20 md:pb-24"},"width":{"small":"max-w-3xl","default":"max-w-6xl","large":"max-w-7xl","xlarge":"max-w-8xl"},"bg":{"gray-medium":"dark bg-gray-500","video":"bg-video-500","gray-light":"bg-gray-300","gray-lighter":"bg-gray-100","purple-light":"bg-purple-200","green-light":"bg-green-200","green-lighter":"bg-green-100","blue-light":"bg-blue-200","yellow-lighter":"bg-yellow-100","black":"dark bg-black"}},"namespace":"organisms"}}); 
   const patterncontainer = (0,_wingsuit_designsystem_pattern__WEBPACK_IMPORTED_MODULE_0__.getStorage)().loadPattern('container'); patterncontainer.setTemplate((organisms_container_container_twig__WEBPACK_IMPORTED_MODULE_1___default())); /* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = ((0,_wingsuit_designsystem_pattern__WEBPACK_IMPORTED_MODULE_0__.getStorage)().loadPattern('container'));

/***/ }),

/***/ 82681:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* unused harmony export patterngrid */
/* harmony import */ var _wingsuit_designsystem_pattern__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(84065);
/* harmony import */ var organisms_grid_grid_twig__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(14392);
/* harmony import */ var organisms_grid_grid_twig__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(organisms_grid_grid_twig__WEBPACK_IMPORTED_MODULE_1__);
 
    (0,_wingsuit_designsystem_pattern__WEBPACK_IMPORTED_MODULE_0__.getStorage)().addDefinitions({"grid":{"use":"@organisms/grid/grid.twig","label":"Grid","description":"A flexible mobile-first flexbox grid pattern, ensuring consistency across layouts.","fields":{"cells":{"type":"object","label":"Cells","description":"The cells of the grid.","preview":["<div class='w-full h-40 bg-gray-500'></div>","<div class='w-full h-40 bg-gray-500'></div>","<div class='w-full h-40 bg-gray-500'></div>","<div class='w-full h-40 bg-gray-500'></div>","<div class='w-full h-40 bg-gray-500'></div>","<div class='w-full h-40 bg-gray-500'></div>","<div class='w-full h-40 bg-gray-500'></div>","<div class='w-full h-40 bg-gray-500'></div>"]}},"settings":{"gutter":{"type":"select","label":"Gutter","required":true,"default_value":"default","description":"The gutter between the cells.","options":{"none":"None","default":"Default","large":"Large"}},"columns":{"type":"select","label":"Columns","description":"The number of grid columns","required":true,"preview":4,"options":{"1":"One column","2":"Two columns","3":"Three columns","4":"Four columns","5":"Five columns"}}},"configuration":{"columns":{"1":{"equal":"grid-cols-1"},"2":{"equal":"grid-cols-1 md:grid-cols-2","66x33":"grid-cols-1 md:grid-cols-66/33","33x66":"grid-cols-1 md:grid-cols-33/66","25x75":"grid-cols-1 md:grid-cols-25/75"},"3":{"equal":"grid-cols-1 md:grid-cols-3","25x50x25":"grid-cols-1 md:grid-cols-25/50/25"},"4":{"equal":"grid-cols-1 md-grid-cols-2 lg:grid-cols-4"},"5":{"equal":"grid-cols-1 md:grid-cols-5"}},"gutter":{"none":"","default":"gap-4 md:gap-5 lg:gap-7","large":"gap-10 md:gap-20"}},"namespace":"organisms"}}); 
   const patterngrid = (0,_wingsuit_designsystem_pattern__WEBPACK_IMPORTED_MODULE_0__.getStorage)().loadPattern('grid'); patterngrid.setTemplate((organisms_grid_grid_twig__WEBPACK_IMPORTED_MODULE_1___default())); /* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = ((0,_wingsuit_designsystem_pattern__WEBPACK_IMPORTED_MODULE_0__.getStorage)().loadPattern('grid'));

/***/ }),

/***/ 95657:
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {

"use strict";

// UNUSED EXPORTS: default, patternpage

// EXTERNAL MODULE: ../../packages/pattern/dist/index.js
var dist = __webpack_require__(84065);
// EXTERNAL MODULE: ./source/default/patterns/04-templates/page/page.twig
var page = __webpack_require__(14947);
var page_default = /*#__PURE__*/__webpack_require__.n(page);
// EXTERNAL MODULE: ./source/default/patterns/02-molecules/menu/menu.twig
var menu = __webpack_require__(94514);
var menu_default = /*#__PURE__*/__webpack_require__.n(menu);
// EXTERNAL MODULE: ./source/default/patterns/02-molecules/menu/_menu--primary.twig
var _menu_primary = __webpack_require__(25172);
// EXTERNAL MODULE: ./source/default/patterns/02-molecules/menu/_menu--footer.twig
var _menu_footer = __webpack_require__(79756);
;// CONCATENATED MODULE: ./source/default/patterns/02-molecules/menu/menu.wingsuit.yml
 
    (0,dist.getStorage)().addDefinitions({"menu":{"use":"@molecules/menu/menu.twig","label":"Menu","description":"Primary and footer menu component.","fields":{"items":{"type":"object","label":"Items"}},"variants":{"primary":{"label":"Primary","fields":{"items":[{"title":"Get Started","url":"#","below":[{"title":"Introduction","url":"/basics/introduction"}]},{"title":"GUIDES","url":"/guides/quick-start-guide","below":[{"title":"Quickstart guide","url":"/guides/quick-start-guide"},{"title":"Upgrade to Wingsuit 2.","url":"/guides/ws2-upgrade"},{"title":"Create new component","url":"/guides/create-component-guide"},{"title":"Create new app","url":"/guides/create-app-guide"},{"title":"Showroom","url":"/guides/showroom"},{"title":"Twing extensions","url":"/guides/twing-extensions-guide"}]},{"title":"CONFIGURATIONS","url":"#","below":[{"title":"Configuration","url":"/configurations/details"},{"title":"Custom webpack configuration","url":"/configurations/custom-webpack-config"}]},{"title":"APPS","url":"#","below":[{"title":"Overview","url":"/apps/overview"},{"title":"Drupal","url":"/apps/drupal"},{"title":"CMS","url":"/apps/cms"},{"title":"Pages","url":"/apps/pages"}]},{"title":"PRESETS","url":"#","below":[{"title":"Overview","url":"/presets/overview"},{"title":"Compression Preset","url":"/presets/compression"},{"title":"Imagemin Preset","url":"/presets/imagemin"},{"title":"Pwa Preset","url":"/presets/pwa"}]},{"title":"STARTER KITS","url":"#","below":[{"title":"TailwindCSS + Drupal","url":"/starter-kits/tailwind-drupal"}]},{"title":"COMPONENTS","url":"#","below":[{"title":"Overview","url":"/components/overview"},{"title":"Global variables","url":"/components/globals"},{"title":"Wingsuit Pattern","url":"/components/wingsuit"},{"title":"Presentation","url":"/components/presentation"}]},{"title":"ASSETS","url":"#","below":[{"title":"Overview","url":"/assets/overview"},{"title":"Images & Icons","url":"/assets/images"},{"title":"SVGs","url":"/assets/svg"},{"title":"Javascript","url":"/assets/javascript"}]},{"title":"DRUPAL","url":"/drupal/ui_patterns","below":[{"title":"Thinking in Components!","url":"/drupal/overview"},{"title":"Wingsuit Kickstarter","url":"/drupal/ui_patterns"}]},{"title":"DOCUMENTATION","url":"#","below":[{"title":"Get started","url":"/documentation/overview"},{"title":"MDX","url":"/documentation/mdx"}]},{"title":"TESTING","url":"#","below":[{"title":"Visual Testing","url":"/testing/visual-testing"}]}]}},"top":{"label":"Top","fields":{"items":[{"title":"Documentation","url":"/guides/quick-start-guide/"},{"title":"<b>What's new in Version 2.0 beta</b>","url":"/releases/twodotzero"}]}},"footer":{"label":"Footer","description":"The footer menu.","fields":{"items":[{"title":"BASICS","url":"/basics/introduction","below":[{"title":"Introduction","url":"/basics/introduction"},{"title":"Quick setup","url":"/guides/quick-start-guide"},{"title":"Create new component","url":"/guides/create-component-guide"}]},{"title":"CONFIGURATIONS","url":"/configurations/details","below":[{"title":"Configuration","url":"/configurations/details"},{"title":"Custom webpack configuration","url":"/configurations/custom-webpack-config"},{"title":"Presets","url":"/configurations/preset-webpack"}]},{"title":"COMPONENTS","url":"/components/overview","below":[{"title":"Wingsuit/UI Patterns","url":"/components/wingsuit"},{"title":"Twig only","url":"/components/twig"},{"title":"Presentation","url":"/components/presentation"}]}]}}},"visibility":"storybook","namespace":"molecules"}}); 
   const patternmenu = (0,dist.getStorage)().loadPattern('menu'); patternmenu.setTemplate((menu_default())); /* harmony default export */ const menu_wingsuit = ((0,dist.getStorage)().loadPattern('menu'));
;// CONCATENATED MODULE: ./source/default/patterns/02-molecules/menu/index.js
/**
 * menu
 */ 




;// CONCATENATED MODULE: ./source/default/patterns/04-templates/page/page.wingsuit.yml
 
    (0,dist.getStorage)().addDefinitions({"page":{"use":"@templates/page/page.twig","label":"Page","description":"Page","fields":{"content":{"type":"pattern","label":"Content","multi_value_type":"single_value"},"top_menu":{"type":"pattern","label":"Top Menu","preview":{"id":"menu","variant":"top"}},"menu":{"type":"pattern","label":"Menu","preview":{"id":"menu","variant":"primary"}},"footer_menu":{"type":"pattern","label":"Menu","preview":{"id":"menu","variant":"footer"}}},"settings":{"display_menu":{"type":"boolean","default_value":false}},"namespace":"templates"}}); 
   const patternpage = (0,dist.getStorage)().loadPattern('page'); patternpage.setTemplate((page_default()));   /* harmony default export */ const page_wingsuit = ((0,dist.getStorage)().loadPattern('page'));

/***/ })

};
;