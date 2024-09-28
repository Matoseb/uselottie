import useLottie from 'https://unpkg.com/@matoseb/uselottie/build/bundle/index.js';

const ACTION = {
  idle: "active-release-end",
  holding: "start, hold",
  holdingLoop: "hold, hold-end",
  release: "hold-end, release-end",
  activeHolding: "active-hold, active-release",
  activeReleased: "active-release, active-release-end",
};

const controller = useLottie({
  container: ".lottie",
  path: "/animations/heart/data.json",
  debug: true,
  rateVariation: 0.1,
  volumeVariation: 0.1,
});

const { onLoad, onComplete, seek, play, isPlaying, getElem } = controller;

onLoad(() => {
  seek(ACTION.idle);

  getElem(".heart").onpointerdown = () => {
    if (isPlaying(ACTION.release)) {
      play(ACTION.activeHolding);
    } else {
      play(ACTION.holding);
    }
  };

  getElem().onpointerup = () => {
    if (isPlaying(ACTION.holding, ACTION.holdingLoop)) {
      play(ACTION.release);
    } else if (isPlaying(ACTION.activeHolding)) {
      play(ACTION.activeReleased);
    }
  };
});

onComplete(() => {
  if (isPlaying(ACTION.holding)) {
    play(ACTION.holdingLoop, { loop: true });
  }
});
