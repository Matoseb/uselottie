import "https://cdnjs.cloudflare.com/ajax/libs/howler/2.2.0/howler.min.js";
import "https://cdnjs.cloudflare.com/ajax/libs/lottie-web/5.12.2/lottie.min.js";

// LOTTIE
export function useLottie(options) {
  let animation;

  const {
    debug = false,
    variations = { rate: 0.1, volume: 0.1 },
    ...lottieOptions
  } = options;

  const player = lottie.loadAnimation({
    renderer: "svg", // Render method ('svg', 'canvas', or 'html')
    loop: false, // Set looping to true
    autoplay: false, // Set to true for autoplaying the animation
    audioFactory(assetPath) {
      const audio = new SustainHowl({
        src: assetPath,
        // html5: true,
        // preload: true,
      });
      return audio;
    },
    ...lottieOptions,

    container:
      typeof options.container === "string"
        ? findElem(options.container)
        : options.container,
  });

  // let currFrame = Infinity;
  // player.addEventListener("segmentStart", (event) => {
  //   const hasReset = event.firstFrame < currFrame;
  //   currFrame = event.firstFrame;
  //   if (!hasReset) return;
  //   player.audioController.audios.forEach(({ audio }) => {
  //     audio.reset?.();
  //   });
  // });

  const api = {
    player,
    onComplete(callback) {
      return player.addEventListener("complete", callback);
    },
    onLoad(callback) {
      return player.addEventListener("DOMLoaded", callback);
    },
    onAudio(callback) {
      return player.addEventListener("audio", callback);
    },
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
      if (debug) console.log("playing:", anim);

      playAnimation(player, anim, force);
    },
  };

  window.oncontextmenu = (event) => {
    event.preventDefault();
    event.stopPropagation();
    return false;
  };

  player.addEventListener("DOMLoaded", () => {
    document.title = firstCap(player.fileName);

    api.findElem().onclick = () => {
      Howler._unlockAudio();
    };
  });

  let oldFrame = Infinity;
  player.addEventListener("enterFrame", (event) => {
    if (event.direction !== 1) return;
    if (player.isPaused) return;

    const { audios } = player.audioController;
    const frame = player.firstFrame + player.currentFrame;
    // console.log(frame);

    // console.log(audios);

    audios.forEach(({ audio, data }) => {
      const { st } = data;

      if (st <= frame && st > oldFrame) {
        const dtFrame = frame - st;
        const dtTime = dtFrame / player.frameRate;
        const rate = variations.rate * 0.5;
        audio.manualRate(random(1 - rate, 1 + rate));
        audio.manualVolume(random(1 - variations.volume, 1));
        audio.manualSeek(dtTime);
        const event = { audios, audio, data, willPlay: true };
        player.triggerEvent("audio", event);
        if (event.willPlay) audio.manualPlay();
      }
    });

    oldFrame = frame;
  });

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

// random range
export function random(min, max) {
  return Math.random() * (max - min) + min;
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

  manualSeek(value) {
    super.seek(value);
  }
  manualPlay() {
    super.play();
  }
  manualRate(value) {
    super.rate(value);
  }
  manualVolume(value) {
    super.volume(value);
  }
  playing() {}
  rate() {}
  setVolume(value) {}
  seek() {}
  pause() {}
  play() {
    // if (this.isPlaying) return;
    // this.isPlaying = true;
    // super.play();
  }
  reset() {
    //   this.isPlaying = false;
    //   this.pause();
    //   super.seek(0);
  }
}

function firstCap(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}
