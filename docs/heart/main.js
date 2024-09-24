import { useLottie } from "../player.js";

const ACTION = Object.freeze({
  idle: "active-release-end",
  holding: "start, hold",
  holdingLoop: "hold, hold-end",
  release: "hold-end, release-end",
  activeHolding: "active-hold, active-release",
  activeReleased: "active-release, active-release-end",
});

const { isPlaying, play, findElem, onLoad, onComplete } = useLottie({
  path: "animation/heart.json",
  container: ".lottie",
  debug: true,
});

onLoad(() => {
  play(ACTION.idle);

  findElem(".heart").onpointerdown = () => {
    if (isPlaying(ACTION.release)) {
      play(ACTION.activeHolding);
    } else {
      play(ACTION.holding);
    }
  };

  findElem().onpointerup = () => {
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
