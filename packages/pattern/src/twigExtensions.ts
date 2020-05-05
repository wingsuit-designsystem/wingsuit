import TwigAttribute from "./TwigAttribute";

export function twigAttributeFunction() {
  return new TwigAttribute();
}

export function twigFileUrl(url) {
  return url.replace('wsdist://', '/');
}
export function twigItok() {
  return Math.random();
}