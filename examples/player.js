import "https://cdnjs.cloudflare.com/ajax/libs/howler/2.2.0/howler.min.js";
import "https://cdnjs.cloudflare.com/ajax/libs/lottie-web/5.12.2/lottie.min.js";

// LOTTIE
export function useLottie(options) {
  let animation;

  const { debug = false, ...lottieOptions } = options;

  const player = lottie.loadAnimation({
    renderer: "svg", // Render method ('svg', 'canvas', or 'html')
    loop: false, // Set looping to true
    autoplay: false, // Set to true for autoplaying the animation
    audioFactory(assetPath) {
      const audio = new SustainHowl({
        src: assetPath,
        preload: true,
      });
      return audio;
    },
    ...lottieOptions,

    container:
      typeof options.container === "string"
        ? findElem(options.container)
        : options.container,
  });

  let currFrame = Infinity;
  player.addEventListener("segmentStart", (event) => {
    const hasReset = event.firstFrame < currFrame;
    currFrame = event.firstFrame;
    if (!hasReset) return;
    player.audioController.audios.forEach(({ audio }) => {
      audio.reset?.();
    });
  });

  const api = {
    player,
    findElem(selector, parent) {
      parent = parent || player.renderer.svgElement;
      if (!selector) return parent;
      return findElem(selector, parent);
    },
    isPlaying(...acts) {
      return acts.includes(animation);
    },
    currentAnimation() {
      return animation;
    },
    play(anim, { loop = false, force = true } = {}) {
      animation = anim;
      api.findElem().dataset.animation = anim;
      player.loop = loop;
      // if (debug) console.log("playing:", anim);

      playAnimation(player, anim, force);
    },
  };
  return api;
}

export function getMarker(player, name) {
  return player.markers.find((marker) => marker.payload.name === name);
}

export function playAnimation(player, animation, force = true) {
  const addFrame = player.loop ? 0 : 1;

  // transform to array and add extra frame if sequence
  const frames = animation
    .split(",")
    .filter(Boolean)
    .map((name, index) => {
      return getMarker(player, name.trim()).time + (index > 0 ? addFrame : 0);
    });

  frames.length > 1
    ? player.playSegments(frames, force)
    : player.goToAndStop(frames[0] || 0, true);
}

// DOM
export function findElem(selector, parent = document) {
  return parent.querySelector(selector);
}

// SOUND
class SustainHowl extends Howl {
  constructor(options) {
    super(options);
    this.isPlaying = false;
    super.on("end", () => {
      // this.isPlaying = false;
    });
  }

  play() {
    if (this.isPlaying) return;
    this.isPlaying = true;
    super.play();
  }
  pause() {}
  reset() {
    this.isPlaying = false;
    // this.pause();
    // super.seek(0);
  }
}
