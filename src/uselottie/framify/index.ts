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
  injectCSS("framify", style);
  const container = document.createElement("div");
  container.classList.add("framify");

  let currRow: string[] = [];
  const rows: string[][] = [currRow];

  // new row if cell is null
  folders.forEach((folder) => {
    if (folder === null) {
      currRow = [];
      rows.push(currRow);
      return;
    }
    if (typeof folder === "string") currRow.push(folder);
  });

  const rowsEl = document.createDocumentFragment();
  rows.forEach((row) => {
    const cells = document.createElement("div");
    cells.classList.add("framify__row");
    addCells(cells, row);
    rowsEl.appendChild(cells);
  });

  container.appendChild(rowsEl);
  parent.appendChild(container);
}

function isOnLottie(elem?: Element | null) {
  if (!elem) return false;
  return Boolean(elem.closest("svg > *"));
}

function fullscreen(cell?: Element | null, isFullscreen?: boolean) {
  if (!cell) return;

  if (window.matchMedia("(pointer:coarse)").matches) return;

  isFullscreen = cell.classList.toggle("fullscreen", isFullscreen);

  const frame = cell.querySelector("iframe")?.contentWindow;
  frame?.document.documentElement.style.setProperty(
    "--cursor",
    isFullscreen ? "zoom-out" : "zoom-in"
  );
}

function addCells(cells: HTMLElement, folders: string[]) {
  folders.forEach((folder) => {
    const cell = document.createElement("div");
    cells.appendChild(cell);

    if (!folder) return;
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
    iframe.onload = () => initFrame(iframe, cell);
  });
}

function initFrame(iframe: HTMLIFrameElement, cell: Element) {
  fullscreen(cell, false);
  let svg = false;

  function handleCursor(event: PointerEvent) {
    if (!event.view) return;
    const { style } = event.view.document.body;
    style.cursor = isOnLottie(event.target as Element) ? "" : `var(--cursor)`;
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
}
