import { useLottie, find } from "./player.js";

const ACT = Object.freeze({
  open: "inactive, active",
  loopActive: "active, active-looped",
  close: "close-start, close-end",
  loopClose: "close-end, close-looped",
});

const { player, isPlaying, play } = useLottie({
  path: "animations/toggle.json",
  container: find(".lottie"),
  debug: true,
});

player.addEventListener("DOMLoaded", () => {
  play(ACT.loopClose, { loop: true, transition: false });

  find(".toggle").onclick = () => {
    if (isPlaying(ACT.loopClose)) {
      play(ACT.open);
    }

    if (isPlaying(ACT.loopActive)) {
      play(ACT.close);
    }
  };
});

player.addEventListener("complete", () => {
  if (isPlaying(ACT.close)) {
    play(ACT.loopClose, { loop: true });
  }

  if (isPlaying(ACT.open)) {
    play(ACT.loopActive, { loop: true });
  }
});
