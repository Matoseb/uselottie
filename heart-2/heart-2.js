import useLottie from 'https://unpkg.com/@matoseb/uselottie/build/bundle/index.js';

// Define states
const ACTION = {
  holding: "start, hold",      // Pointer down
  release: "hold, release-end", // Pointer up
  off: "off-start, off-end",   // Animation reset
};

// Initialize Lottie controller
const controller = useLottie({
  name: "Heart 2",      // Animation name
  container: ".lottie", // Search <div class="lottie"></div>
  path: "/animations/heart-explode/data.json", // Path to data.json
  debug: true,          // Enable debug messages
  rateVariation: 0.1,   // Audio pitch variation
  volumeVariation: 0.1, // Audio volume variation
});

// Destructure controller methods
const { onLoad, onComplete, seek, play, isPlaying, getElem } = controller;

// setup
onLoad(() => {
  getElem().onpointerdown = () => {
    if (isPlaying(ACTION.release)) return;
    play(ACTION.holding);
  };

  getElem().onpointerup = () => {
    if (isPlaying(ACTION.holding)) {
      play(ACTION.release);
    } else if (isPlaying(ACTION.release)) {
      play(ACTION.off);
    }
  };
});

// events
onComplete(() => {
  if (isPlaying(ACTION.off)) seek("start"); // Reset to start if 'off'
});
