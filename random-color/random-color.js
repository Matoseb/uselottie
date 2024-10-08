import useLottie from 'https://unpkg.com/@matoseb/uselottie/build/bundle/index.js';

const controller = useLottie({
  container: ".lottie",
  path: "/animations/random-color/data.json",
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
} = controller;

const ACTION = {
  press: "a-1, a-2", // fallback to default
  active: ["a-2, a-3", "b-2, b-3", "c-2, c-3"], // red, green, blue
  release: ["a-3, b-1", "b-3, c-1", "c-3, d-1"], // red, green, blue
};

// setup
onLoad(() => {

  getElem().onpointerdown = () => {
    // play(ACTION.release);
    if (isPlaying(ACTION.active)) return;
    play(ACTION.press);
  };

  getElem().onpointerup = () => {
    if (isPlaying(ACTION.press)) {

      setAnimVariation(random([0, 1, 2])); // pick a random variation

      play(ACTION.active);
    } else if (isPlaying(ACTION.active)) {
      play(ACTION.release);
    }
  };
});
