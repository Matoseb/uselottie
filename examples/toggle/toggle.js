import { useLottie } from "./player.js";

const ACT = Object.freeze({
  open: "inactive, active",
  loopActive: "active, active-looped",
  close: "close-start, close-end",
  loopClose: "close-end, close-looped",
});

const { player, isPlaying, play, findElem } = useLottie({
  path: "animations/toggle.json",
  container: ".lottie",
  debug: true,
});

player.addEventListener("DOMLoaded", () => {
  play(ACT.loopClose, { loop: true, transition: false });

  findElem(".toggle").onclick = () => {
    if (isPlaying(ACT.loopClose)) play(ACT.open);
    if (isPlaying(ACT.loopActive)) play(ACT.close);
  };
});

player.addEventListener("complete", () => {
  if (isPlaying(ACT.close)) play(ACT.loopClose, { loop: true });
  if (isPlaying(ACT.open)) play(ACT.loopActive, { loop: true });
});
