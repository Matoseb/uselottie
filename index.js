framify();

function framify(folders = window.links, { parent = document.body } = {}) {
  const container = document.createElement("div");
  container.classList.add("framify");

  folders.forEach((folder) => {
    const cell = document.createElement("div");
    cell.innerHTML =  `
      <iframe src="${folder}"></iframe>
    `;
    cell.classList.add("framify__cell");
    const iframe = cell.querySelector("iframe");
    iframe.onload = function (event) {
      fullscreen(cell, false);
      let svg;
      function handleCursor(event) {
        const { style } = event.view.document.body;
        style.cursor = isOnLottie(event.target) ? "" : `var(--cursor)`;
      }

      this.contentWindow.onpointerover = function (event) {
        handleCursor(event);
      };
      this.contentWindow.onpointermove = function (event) {
        handleCursor(event);
      };

      this.contentWindow.onpointerdown = function (event) {
        svg = isOnLottie(event.target);
      };

      this.contentWindow.onclick = function () {
        if (!svg) fullscreen(cell);
      };

      this.contentWindow.onblur = function (event) {
        svg = null;
      };

      this.contentWindow.onkeydown = function (event) {
        if (event.key === "Escape") fullscreen(cell, false);
      };
    };

    container.appendChild(cell);
  });

  function isOnLottie(elem) {
    return Boolean(elem.closest("svg > *"));
  }

  function fullscreen(cell, isFullscreen) {
    if(window.matchMedia("(max-width: 768px)").matches) return;

    isFullscreen = cell.classList.toggle("fullscreen", isFullscreen);

    const frame = cell.querySelector("iframe").contentWindow;
    frame.document.documentElement.style.setProperty(
      "--cursor",
      isFullscreen ? "zoom-out" : "zoom-in"
    );
  }

  parent.appendChild(container);
}
