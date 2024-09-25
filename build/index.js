"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/uselottie/index.ts
var uselottie_exports = {};
__export(uselottie_exports, {
  default: () => useLottie
});
module.exports = __toCommonJS(uselottie_exports);

// src/uselottie/LottieController.ts
var import_lottie_web = __toESM(require("lottie-web"), 1);

// src/uselottie/SustainHowl.ts
var import_howler = require("howler");
var SustainHowl = class extends import_howler.Howl {
  constructor(options) {
    super(options);
  }
  manualSeek(value) {
    return super.seek(value);
  }
  manualPlay() {
    return super.play();
  }
  manualRate(value) {
    return super.rate(value);
  }
  manualVolume(value) {
    return super.volume(value);
  }
  playing() {
    return false;
  }
  setVolume() {
  }
  //@ts-ignore
  seek() {
    return super.seek();
  }
  //@ts-ignore
  rate() {
    return super.rate();
  }
  pause() {
    return this;
  }
  play() {
    return -1;
  }
};

// src/uselottie/index.scss?inline
var uselottie_default = `/* prevent zoom */
.lottie-controller {
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  -webkit-tap-highlight-color: transparent;
  -webkit-touch-callout: none;
  overflow: visible;
}
.lottie-controller * {
  touch-action: none;
  box-sizing: border-box;
  user-select: none;
  -webkit-user-select: none;
}
.lottie-controller > g[clip-path] {
  clip-path: unset;
}`;

// src/uselottie/utils.ts
function getMarker(player, name) {
  return player.markers.find((marker) => marker.payload.name === name);
}
function isIOS() {
  return /iPad|iPhone|iPod/.test(navigator.userAgent);
}
function playAnimation(player, animation, force = true) {
  const addFrame = player.loop ? 0 : 1;
  const frames = [];
  animation.split(",").filter(Boolean).slice(0, 2).map((name, index) => {
    let marker = getMarker(player, name.trim());
    if (!marker) return;
    const frame = marker.time + (index > 0 ? addFrame : 0);
    frames.push(frame);
  });
  if (frames.length <= 1) {
    player.goToAndStop(frames[0] || 0, true);
    return;
  }
  player.playSegments(frames, force);
}
function getElem(selector, parent = document) {
  return parent.querySelector(selector);
}
function random(min, max) {
  return Math.random() * (max - min) + min;
}
function firstCap(text) {
  return text.charAt(0).toUpperCase() + text.slice(1);
}

// src/uselottie/LottieController.ts
var LottieController = class {
  animation = null;
  player;
  debug = false;
  volumeVariation;
  rateVariation;
  constructor(options = {}) {
    const {
      debug = false,
      injectCSS = true,
      volumeVariation = 0,
      rateVariation = 0,
      howlerOptions = {},
      ...lottieOptions
    } = options;
    this.debug = debug;
    this.volumeVariation = volumeVariation;
    this.rateVariation = rateVariation;
    if (injectCSS) {
      let style = document.querySelector("style[data-type=lottie-controller]");
      if (!style) {
        style = document.createElement("style");
        style.setAttribute("data-type", "lottie-controller");
        style.innerHTML = uselottie_default;
        document.body.appendChild(style);
      }
    }
    this.player = import_lottie_web.default.loadAnimation({
      renderer: "svg",
      // Render method ('svg', 'canvas', or 'html')
      loop: false,
      // Set looping to true
      autoplay: false,
      // Set to true for autoplaying the animation
      audioFactory(assetPath) {
        const audio = new SustainHowl({
          src: assetPath,
          html5: isIOS() ? true : false,
          // preload: true,
          ...howlerOptions
        });
        return audio;
      },
      ...lottieOptions,
      container: typeof options.container === "string" ? (() => {
        const elem = getElem(options.container);
        if (!elem) {
          throw new Error(`Element not found: ${options.container}`);
        }
        return elem;
      })() : options.container || document.body
    });
    this.player.addEventListener("DOMLoaded", () => {
      document.title = firstCap(this.player.fileName);
      const container = this.getElem();
      if (!container) return;
      container.classList.add("lottie-controller");
      container.addEventListener(
        "contextmenu",
        (event) => {
          event.preventDefault();
          event.stopPropagation();
          return false;
        },
        true
      );
    });
    let oldFrame = Infinity;
    this.player.addEventListener("enterFrame", (event) => {
      if (event.direction !== 1) return;
      if (this.player.isPaused) return;
      const { audios } = this.player.audioController || { audios: [] };
      const frame = this.player.firstFrame + this.player.currentFrame;
      audios.forEach(({ audio, data }) => {
        const { st } = data;
        if (st <= frame && st > oldFrame) {
          const rate = this.rateVariation * 0.5;
          audio.manualRate(random(1 - rate, 1 + rate));
          audio.manualVolume(random(1 - this.volumeVariation, 1));
          const event2 = { audios, audio, data, willPlay: true };
          this.player.triggerEvent("audio", event2);
          if (event2.willPlay) audio.manualPlay();
        }
      });
      oldFrame = frame;
    });
  }
  onComplete = (callback) => {
    return this.player.addEventListener("complete", callback);
  };
  onLoad = (callback) => {
    return this.player.addEventListener("DOMLoaded", callback);
  };
  onAudio = (callback) => {
    return this.player.addEventListener("audio", callback);
  };
  getElem = (selector, parent) => {
    parent || (parent = this.player.renderer.svgElement);
    if (!selector) return parent;
    return getElem(selector, parent);
  };
  isPlaying = (...acts) => {
    return this.animation !== null && acts.includes(this.animation);
  };
  currentAnimation = () => {
    return this.animation;
  };
  play = (anim, { loop = false, force = true } = {}) => {
    this.animation = anim;
    const container = this.getElem();
    if (container && container instanceof HTMLElement)
      container.dataset.animation = anim;
    this.player.loop = loop;
    if (this.debug) console.log("playing:", anim);
    playAnimation(this.player, anim, force);
  };
  destroy = () => {
    this.player.destroy();
  };
};

// src/uselottie/index.ts
function useLottie(options) {
  const controller = new LottieController(options);
  return controller;
}
globalThis.useLottie = useLottie;
