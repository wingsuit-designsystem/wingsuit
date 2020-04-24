export default class TwigAttribute {
  private attributes = [];

  constructor() {
    this.attributes = [];
  }

  setAttribute(key, value) {
    this.attributes[key] = value;
    return this;
  }

  removeAttribute(key) {
    delete this.attributes[key];
    this.attributes.splice(key, 1);
    return this;
  }

  removeClass(className = '') {
    const classAry: string[] = className.split(' ');
    for (let i = 0; i < classAry.length; i++) {
      const classItem:string = classAry[i];
      const foundItem = this.attributes['class'].indexOf(classItem);
      if (this.attributes['class'] != null && foundItem !== -1 ) {
        this.attributes['class'].splice(foundItem, 1);
      }
    }
  }
  addClass(className = '') {
    if (this.attributes['class'] == null) {
      this.attributes['class'] = [];
    }
    const classAry: string[] = className.split(' ');
    for (let i = 0; i < classAry.length; i++) {
      if (classAry[i] !== '') {
        this.attributes['class'].push(classAry[i]);
      }
    }
    return this;
  }

  toString() {
    let output = '';
    Object.keys(this.attributes).forEach((key) => {
      let attributeValue = null;
      if (typeof this.attributes[key] === 'object' && Array.isArray(this.attributes[key])) {
        attributeValue = this.attributes[key].join(' ');
      } else if (typeof this.attributes[key] === 'string') {
        attributeValue = this.attributes[key];
      }
      if (attributeValue !== null) {
        output += `${key}="${attributeValue}" `;
      }
    });
    return output.trim();
  }
}