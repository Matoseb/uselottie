import useLottie from "@matoseb/uselottie";

const controller = useLottie({
  container: ".lottie",
  path: "/animations/debug/data.json",
  debug: true,
});

// Destructure controller methods
const {
  onLoad,
  play,
  isPlaying,
  getElem,
  setAnimVariation,
  random,
  player,
  loop,
} = controller;

// setup
onLoad(() => {
  play("mark-1, mark-2", { loop: true });

  player.setSpeed(0.1);

  window.onclick = () => {
    loop(false);
  };
});
