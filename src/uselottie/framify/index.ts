import style from "./index.scss?inline";
import { injectCSS, firstCap } from "../utils";

export type FramifyConfig = {
  folders: string[];
  options?: {
    parent?: HTMLElement;
  };
};

export default function framify(
  folders: FramifyConfig["folders"],
  { parent = document.body }: FramifyConfig["options"] = {}
) {
  const container = document.createElement("div");
  container.classList.add("framify");

  injectCSS("framify", style);

  folders.forEach((folder) => {
    const cell = document.createElement("div");

    // remove index .html or index.html
    const title = folder
      .replace(/\/index\.html?$/, "")
      .split("/")
      .pop();

    cell.innerHTML = /*html*/ `
      <a href="${folder}" class="framify__cell-link" title="${firstCap(title)}" target="_blank" rel="noopener noreferrer">🔗</a>
      <iframe src="${folder}"></iframe>
    `;
    cell.classList.add("framify__cell");
    const iframe = cell.querySelector("iframe");

    if (!iframe) return;

    iframe.onload = function () {
      fullscreen(cell, false);
      let svg = false;

      function handleCursor(event: PointerEvent) {
        if (!event.view) return;
        const { style } = event.view.document.body;
        style.cursor = isOnLottie(event.target as Element)
          ? ""
          : `var(--cursor)`;
      }

      const win = iframe.contentWindow;
      if (!win) return;

      win.onpointerover = function (event) {
        handleCursor(event);
      };
      win.onpointermove = function (event) {
        handleCursor(event);
      };

      win.onpointerdown = function (event) {
        svg = isOnLottie(event.target as Element);
      };

      win.onclick = function () {
        if (!svg) fullscreen(cell);
      };

      // focus out
      win.onblur = function () {
        svg = false;
      };

      win.onkeydown = function (event) {
        if (event.key === "Escape") fullscreen(cell, false);
      };
    };

    container.appendChild(cell);
  });

  function isOnLottie(elem?: Element | null) {
    if (!elem) return false;
    return Boolean(elem.closest("svg > *"));
  }

  function fullscreen(cell?: Element | null, isFullscreen?: boolean) {
    if (!cell) return;

    if (window.matchMedia("(max-width: 768px)").matches) return;

    isFullscreen = cell.classList.toggle("fullscreen", isFullscreen);

    const frame = cell.querySelector("iframe")?.contentWindow;
    frame?.document.documentElement.style.setProperty(
      "--cursor",
      isFullscreen ? "zoom-out" : "zoom-in"
    );
  }

  parent.appendChild(container);
}
