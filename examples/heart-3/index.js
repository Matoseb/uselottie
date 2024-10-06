import useLottie from "@matoseb/uselottie";

const controller = useLottie({
  container: ".lottie",
  path: "/animations/heart-simple/data.json",
  debug: true,
});

// Destructure controller methods
const { onLoad, onComplete, seek, play, isPlaying, getElem } = controller;

const ACTION = {
  on: "on-start, on-end",
  off: "off-start, off-end",
};

// setup
onLoad(() => {
  getElem().onclick = () => {
    if (isPlaying(ACTION.on)) {
      play(ACTION.off);
    } else {
      play(ACTION.on);
    }
  };
});