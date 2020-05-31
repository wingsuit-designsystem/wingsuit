import TwigAttribute from './TwigAttribute';

export function twigAttributeFunction() {
  return Promise.resolve(new TwigAttribute());
}

export function twigFileUrl(url) {
  return Promise.resolve(url.replace('ws-assets://', '/'));
}

export function twigItok() {
  const d = new Date();
  return Promise.resolve(d.getMinutes());
}
