import useLottie from "@matoseb/uselottie";

const controller = useLottie({
  container: ".lottie",
  path: "/animations/speed/data.json",
  debug: false,
});

const { onLoad, seek, play, getElem, isPlaying, getPoint } = controller;

const open = "on-start, on-end";
const close = "close-start, close-end";

onLoad(() => {
  let dragging = false;

  getElem().onpointerdown = (e) => {
    dragging = true;
  };

  window.onpointermove = (e) => {
    if (dragging === false) return;

    seek("start, end", {
      position: clamp(getPoint(e.pageX, e.pageY).y)
    });
  };

  window.onpointerup = () => {
    dragging = false;
  };
});

function clamp(value, min = 0, max = 1) {
  return Math.min(Math.max(value, min), max);
}

function lerpInv(start, stop, amount) {
  return (amount - start) / (stop - start);
}
