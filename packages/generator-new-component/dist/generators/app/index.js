"use strict";

require("core-js/modules/es.symbol");

require("core-js/modules/es.symbol.description");

require("core-js/modules/es.symbol.iterator");

require("core-js/modules/es.array.filter");

require("core-js/modules/es.array.find");

require("core-js/modules/es.array.iterator");

require("core-js/modules/es.array.join");

require("core-js/modules/es.date.to-string");

require("core-js/modules/es.function.name");

require("core-js/modules/es.object.assign");

require("core-js/modules/es.object.create");

require("core-js/modules/es.object.define-property");

require("core-js/modules/es.object.set-prototype-of");

require("core-js/modules/es.object.to-string");

require("core-js/modules/es.reflect.construct");

require("core-js/modules/es.regexp.exec");

require("core-js/modules/es.regexp.to-string");

require("core-js/modules/es.string.iterator");

require("core-js/modules/es.string.replace");

require("core-js/modules/web.dom-collections.iterator");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

/* eslint-disable no-param-reassign */

/**
 * @file
 *
 * Enforce some of the business logic within Particle around components and
 * where they live.
 */
var _require = require('path'),
    join = _require.join,
    relative = _require.relative,
    extname = _require.extname;

var _require2 = require('fs'),
    readdirSync = _require2.readdirSync;

var Generator = require('yeoman-generator');

var _require3 = require('lodash'),
    camelCase = _require3.camelCase,
    kebabCase = _require3.kebabCase,
    snakeCase = _require3.snakeCase;

var rename = require('gulp-rename'); // All Particle apps have a config file
// const APP_CONFIG_FILE = 'wingsuit.app.config.js';
// _patterns is sacred


var PATTERNS_FOLDER = '_patterns';

var _default = /*#__PURE__*/function (_Generator) {
  _inherits(_default, _Generator);

  var _super = _createSuper(_default);

  function _default(args, opts) {
    var _this;

    _classCallCheck(this, _default);

    _this = _super.call(this, args, opts); // The chosen app

    _this.wingsuitApp = {};
    return _this;
  } // Any non-underscore function between here are initializing() will run in order
  // Reserved: Check for apps and design systems


  _createClass(_default, [{
    key: "initializing",
    value: function initializing() {} // Build out list of PL apps we want to present to user
    // Reserved: present options to the user

  }, {
    key: "prompting",
    value: function prompting() {
      var _this2 = this;

      var self = this;
      this.log("Hi! This will help you build a component folder with assets. Templates for this are in: ".concat(relative(process.cwd(), __dirname))); // Prompts presented to user

      var prompts = [{
        type: 'list',
        name: 'patternType',
        message: 'Where would you like this new component?',
        choices: function choices(_ref) {
          var chooseApp = _ref.chooseApp;
          // Set the config for the app in a shared place
          self.wingsuitApp = self.plConfigs.find(function (_ref2) {
            var APP_NAME = _ref2.APP_NAME;
            return APP_NAME === chooseApp;
          }); // Design system folder

          var APP_DESIGN_SYSTEM = self.wingsuitApp.APP_DESIGN_SYSTEM; // Return array of atomic folders within the app's design system

          return readdirSync(join(APP_DESIGN_SYSTEM, PATTERNS_FOLDER), {
            withFileTypes: true
          }).filter(function (folder) {
            return folder.isDirectory();
          });
        }
      }, {
        name: 'name',
        message: 'What shall we name it?',
        filter: function filter(answer) {
          return kebabCase(answer);
        }
      }];
      return this.prompt(prompts).then(function (props) {
        // To access props later use this.props.someAnswer;
        _this2.props = Object.assign({}, props, {
          // 'name' already exists as kebab-case-name (dashes)
          underscoreName: snakeCase(props.name),
          camelCaseName: camelCase(props.name),
          cleanPatternType: props.patternType.replace(/([0-9])\w+-/g, '')
        });
      });
    } // Reserved: write out the results

  }, {
    key: "writing",
    value: function writing() {
      var name = this.props.name; // Convert 'patterns.twig.ejs' to 'cards.twig'. registerTransformStream is
      // a reserved method to which Yeoman provides all file streams from copyTpl()

      this.registerTransformStream(rename(function (path) {
        // basename is 'patterns.twig' here
        var ext = extname(path.basename); // Original extname was '.ejs', change it to ext, which is now '.twig'

        path.extname = ext; // Remove extension ('.twig') from basename, replace 'pattern" with name

        path.basename = path.basename.replace(ext, '').replace('pattern', name);
        return path;
      })); // Copy and process all design system files

      this.fs.copyTpl(this.templatePath('ds/**/*.ejs'), this._dsComponentPath, this.props); // Copy and process all app files

      this.fs.copyTpl(this.templatePath('app/**/*.ejs'), this._appComponentPath, this.props);
      this.log("Your new component ".concat(name, " is being created, both as a raw component within your design system and demo folder within your Pattern Lab."));
    }
  }]);

  return _default;
}(Generator);

exports["default"] = _default;
;