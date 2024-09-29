import tinycolor from "tinycolor2";

// System
export function isIOS() {
  return /iPad|iPhone|iPod/.test(navigator.userAgent);
}

// fallbacks
export const noFunc = () => {};

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
export function firstCap(text: string = "") {
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

export type ConsoleType = "log" | "warn" | "error" | "info" | "debug";

type FancyLog = {
  name?: string;
  color?: string;
  as?: ConsoleType;
};

// debugging
export function fancyLog(this: FancyLog, ...value: any[]) {
  const { name, color = "lightgray", as = "log" } = this;

  if (!name) return console[as](...value);

  const textColor = tinycolor(color).getLuminance() >= 0.5 ? "black" : "white";

  console[as](
    `%c${name}`,
    `color: ${textColor}; padding: 3px 5px; border-radius: 3px; background-color: ${color};`,
    ...value
  );
}

export function injectCSS(name: string, styleContent = "") {
  const attr = "data-type";
  let style = document.querySelector(`style[${attr}="${name}]`);

  if (!style) {
    style = document.createElement("style");
    style.setAttribute(attr, name);
    document.head.appendChild(style);
  }

  style.innerHTML = styleContent;
}

export function stringify(obj: unknown) {
  return typeof obj === "string" ? obj : JSON.stringify(obj);
}
