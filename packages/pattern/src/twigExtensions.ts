import TwigAttribute from './TwigAttribute';

export function twigAttributeFunction(attributes = '') {
  return Promise.resolve(new TwigAttribute(attributes));
}

export function twigFileUrl(url) {
  return Promise.resolve(url.replace('ws-assets://', ''));
}

export function without(element, ...args) {
  if (!element) {
    return [];
  }
  if (element instanceof TwigAttribute) {
    args.forEach(key => {
      element.removeAttribute(key);
    });
  }

  return element;
}

export function twigItok() {
  const d = new Date();
  return Promise.resolve(d.getMinutes());
}

export function twigUuid() {
  return Promise.resolve(
    'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, c => {
      // eslint-disable-next-line no-bitwise
      const r = (Math.random() * 16) | 0;
      // eslint-disable-next-line no-bitwise
      const v = c === 'x' ? r : (r & 0x3) | 0x8;
      return v.toString(16);
    })
  );
}
