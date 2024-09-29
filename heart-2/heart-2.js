import useLottie from 'https://unpkg.com/@matoseb/uselottie/build/bundle/index.js';

const ACTION = {
  holding: "start, hold",
  release: "hold, release-end",
  off: "off-start, off-end",
};

const controller = useLottie({
  container: ".lottie",
  name: "Heart 2",
  path: "/animations/heart-explode/data.json",
  debug: true,
  rateVariation: 0.1,
  volumeVariation: 0.1,
});

const { onLoad, onComplete, seek, play, isPlaying, getElem } =
  controller;

onLoad(() => {
  getElem().onpointerdown = () => {
    if (isPlaying(ACTION.release)) return;
    play(ACTION.holding);
  };

  window.onpointerup = () => {
    if (isPlaying(ACTION.holding)) {
      play(ACTION.release);
    } else if (isPlaying(ACTION.release)) {
      play(ACTION.off);
    }
  };
});

onComplete(() => {
  if (isPlaying(ACTION.off)) seek("start");
});
