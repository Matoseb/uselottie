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
    container: undefined, // The dom element that will contain the animation
    ...lottieOptions,
  });

  return {
    player,
    isPlaying(act) {
      return animation === act;
    },
    play(anim, { loop = false, transition = true } = {}) {
      animation = anim;
      player.loop = loop;
      if (debug) console.log("playing:", anim);
      playAnimation(player, anim, !transition);
    },
  };
}

export function getMarker(player, name) {
  return player.markers.find((marker) => marker.payload.name === name);
}

export function playAnimation(player, animation, force = true) {
  const addFrame = player.loop ? 0 : 1;
  const frames = animation.split(",").map((name, index) => {
    return getMarker(player, name.trim()).time + (index > 0 ? addFrame : 0);
  });

  frames.length > 1
    ? player.playSegments(frames, force)
    : player.goToAndStop(frames[0] || 0, true);
}

// DOM
export function find(selector, parent = document) {
  return parent.querySelector(selector);
}
