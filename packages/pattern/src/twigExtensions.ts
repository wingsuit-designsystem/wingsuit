import TwigAttribute from "./TwigAttribute";

export function twigAttributeFunction() {
  return new TwigAttribute();
}

export function twigFileUrl(url) {
  return url.replace('ws-assets://', '/');
}

export function twigItok() {
  return Math.random();
}