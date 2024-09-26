export function isIOS() {
  return /iPad|iPhone|iPod/.test(navigator.userAgent);
}

// DOM
export function getElem(
  selector: string,
  parent: Element | Document = document
) {
  return parent.querySelector(selector);
}
export function getElems(
  selector: string,
  parent: Element | Document = document
) {
  return Array.from(parent.querySelectorAll(selector));
}

// math
export function random(min: number, max: number) {
  return Math.random() * (max - min) + min;
}

export function toPercent(value: number, total = 1) {
  return `${(value / total) * 100}%`;
}

// text
export function firstCap(text: string) {
  return text.charAt(0).toUpperCase() + text.slice(1);
}
