import style from "./index.scss?inline";
import frameStyle from "./frame.scss?inline";
import { injectCSS, firstCap, isIframe, addListener, isTouch } from "../utils";

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

  // console.log('bro', Boolean(elem.closest("svg > *")))
  return Boolean(elem.closest("svg"));
}

function fullscreen(isFullscreen?: boolean) {
  if (isTouch()) return;

  window.top?.postMessage({ type: "fullscreen:request", isFullscreen }, "*");
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

    // listen to iframe messages
    addListener(
      "message",
      (event) => {
        // check if message is from the iframe
        if (event.source !== iframe.contentWindow) return;
        if (event.data?.type !== "fullscreen:request") return;

        let { isFullscreen } = event.data;

        isFullscreen = cell.classList.toggle("fullscreen", isFullscreen);
        // reply

        event.source?.postMessage(
          { type: "fullscreen:confirm", isFullscreen },
          event.origin
        );
      },
      false
    );

    // iframe.onload = () => initFrame(iframe, cell);
  });
}

if (isIframe()) {
  initFrame();
  injectCSS("framify-cell", frameStyle);
}

function initFrame() {
  fullscreen(false);
  let svg = false;

  // function handleCursor(event: PointerEvent) {
  //   if (!event.view) return;
  //   // document.body.classList.toggle(
  //   //   "is-outside",
  //   //   !isOnLottie(event.target as Element)
  //   // );
  // }

  // addListener(
  //   "pointerover",
  //   (event) => {
  //     handleCursor(event);
  //   },
  //   true
  // );

  addListener(
    "message",
    (event) => {
      if (event.data?.type !== "fullscreen:confirm") return;
      document.body.classList.toggle("is-fullscreen", event.data.isFullscreen);
    },
    true
  );

  // addListener(
  //   "pointermove",
  //   (event) => {
  //     handleCursor(event);
  //   },
  //   true
  // );

  addListener(
    "pointerdown",
    (event) => {
      svg = isOnLottie(event.target as Element);
    },
    true
  );

  addListener(
    "click",
    () => {
      if (!svg) fullscreen();
    },
    true
  );

  // focus out
  addListener(
    "blur",
    () => {
      svg = false;
    },
    true
  );

  addListener(
    "keydown",
    (event) => {
      if ((event as KeyboardEvent).key === "Escape") fullscreen(false);
    },
    true
  );
}
