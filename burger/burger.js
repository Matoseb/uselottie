import useLottie from 'https://unpkg.com/@matoseb/uselottie/build/bundle/index.js';

const controller = useLottie({
  container: ".lottie",
  path: "/animations/burger/data.json",
  debug: true,
});

const { onLoad, seek, play, getElem, isPlaying } = controller;

const open = "on-start, on-end";
const close = "close-start, close-end";

onLoad(() => {
  getElem().onclick = () => {
    if (isPlaying(open)) {
      play(close);
    } else {
      play(open);
    }
  };
});
