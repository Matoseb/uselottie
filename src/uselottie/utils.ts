import tinycolor from "tinycolor2";

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

// css
export function convertShortHand(value: number | number[]) {
  if (typeof value === "number") {
    return [value, value, value, value];
  }
  if (value.length === 2) {
    return [value[0], value[1], value[0], value[1]];
  }
  if (value.length === 3) {
    return [value[0], value[1], value[2], value[1]];
  }
  return value.slice(0, 4);
}

// debugging
export function fancyLog(this: any, ...value: any[]) {
  const { name, color = "lightgray" } = this;

  if (!name) return console.log(...value);

  const textColor = tinycolor(color).getLuminance() >= 0.5 ? "black" : "white";

  console.log(
    `%c${name}`,
    `color: ${textColor}; padding: 3px; border-radius: 3px; background-color: ${color};`,
    ...value
  );
}