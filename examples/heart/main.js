import { useLottie } from "/player.js";

const ACT = Object.freeze({
  idle: "start",
  holding: "start, hold",
  holdingLoop: "hold, hold-end",
  release: "hold-end, release-end",

  activeHolding: "active-hold, active-release",
  activeReleased: "active-release, active-release-end",
});

const { player, isPlaying, play, findElem } = useLottie({
  path: "animation/heart.json",
  container: ".lottie",
  debug: true,
});

player.addEventListener("DOMLoaded", () => {
  play(ACT.idle);

  findElem(".heart").onpointerdown = () => {
    if (isPlaying(ACT.release)) {
      play(ACT.activeHolding);
    } else {
      play(ACT.holding);
    }
  };

  findElem(".heart").onpointerup = () => {
    if (isPlaying(ACT.holding, ACT.holdingLoop)) play(ACT.release);
    else if (isPlaying(ACT.activeHolding)) play(ACT.activeReleased);
  };
});

player.addEventListener("complete", () => {
  if (isPlaying(ACT.holding)) play(ACT.holdingLoop, { loop: true });
});
