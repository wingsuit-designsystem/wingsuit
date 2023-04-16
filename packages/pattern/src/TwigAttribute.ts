import { twingMapToArray } from './twigRenderEngine';

const htmlAttributeParser = require('html-attribute-parser');
const escapeHtml = require('escape-html');

export default class TwigAttribute {
  private attributes: Map<string, any>;

  constructor(attributes = '') {
    this.attributes = new Map();
    if (attributes !== '') {
      const attrs = htmlAttributeParser(`<div ${attributes}></div>`).attributes;
      Object.keys(attrs).forEach((key) => {
        if (key === 'class') {
          this.attributes.set(key, attrs[key].split(' '));
        } else {
          this.attributes.set(key, attrs[key]);
        }
      });
    }
  }

  class() {
    const classes = this.attributes.get('class');
    if (Array.isArray(classes)) {
      return this.attributes.get('class').join(' ');
    }
    return this.attributes.get('class') != null ? this.attributes.get('class') : '';
  }

  setAttribute(key, value) {
    this.attributes.set(key, value);
    return this;
  }

  removeAttribute(key) {
    this.attributes.delete(key);
    return this;
  }

  getAttribute(key) {
    return this.attributes.get(key);
  }

  hasAttribute(key) {
    return this.attributes.has(key);
  }

  removeClass(className = '') {
    const classAry: string[] = className.split(' ');
    for (let i = 0; i < classAry.length; i += 1) {
      const classItem: string = classAry[i];
      const foundItem: number = this.attributes.get('class').indexOf(classItem);
      if (this.attributes.get('class') != null && foundItem !== -1) {
        this.attributes.get('class').splice(foundItem, 1);
      }
    }
  }

  addClass(className: string | string[] | null = '') {
    if (className == null) {
      return this;
    }
    if (this.attributes.get('class') == null) {
      this.attributes.set('class', []);
    }
    const classes = this.attributes.get('class');
    let classAry: string[] = [];
    if (className instanceof Map) {
      classAry = twingMapToArray(className);
    } else if (Array.isArray(className)) {
      classAry = className;
    } else {
      classAry = className.split(' ');
    }
    for (let i = 0; i < classAry.length; i += 1) {
      if (classAry[i] !== '') {
        classes.push(classAry[i]);
      }
    }
    return this;
  }

  render() {
    return this.toString();
  }

  toArray() {
    return Array.from(this.attributes);
  }

  toString() {
    let output = '';
    Array.from(this.attributes.keys()).forEach((key) => {
      let attributeValue = null;
      if (typeof this.attributes.get(key) === 'object' && Array.isArray(this.attributes.get(key))) {
        attributeValue = this.attributes.get(key).join(' ');
      } else if (typeof this.attributes.get(key) === 'string') {
        attributeValue = this.attributes.get(key);
      }
      if (attributeValue !== null) {
        output += `${key}="${escapeHtml(attributeValue)}" `;
      }
    });
    return ` ${output.trim()}`;
  }
}
