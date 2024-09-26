import lottie, { AnimationConfigWithPath, SVGRendererConfig } from "lottie-web";
import SustainHowl, { SustainHowlOptions } from "./SustainHowl";
import styleContent from "./index.scss?inline";

import { getElem, getElems, firstCap, random, isIOS, toPercent } from "./utils";

import {
  playAnimation,
  seekAnimation,
  BMAudioEvent,
  AnimationValue,
  CompleteAnimationItem,
} from "./lottie-utils";

export interface LottieControllerConfig
  extends Omit<AnimationConfigWithPath, "container"> {
  debug?: boolean;
  injectCSS?: boolean;
  volumeVariation?: number;
  rateVariation?: number;
  howlerOptions?: SustainHowlOptions;
  container?: string | Element;
  filterSpread?: number | number[];
}

type Callback = (event: any) => void;

export default class LottieController {
  animation: AnimationValue = null;
  container: Element | null = null;
  player: CompleteAnimationItem;
  debug: boolean = false;
  volumeVariation: number;
  rateVariation: number;

  constructor(options: LottieControllerConfig = {}) {
    const {
      debug = false,
      injectCSS = true,
      volumeVariation = 0,
      rateVariation = 0,
      filterSpread = 0.5,
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
        style.innerHTML = styleContent;
        document.body.appendChild(style);
      }
    }
    // let animation;

    this.container =
      typeof options.container === "string"
        ? (() => {
            const elem = getElem(options.container);
            if (!elem) {
              throw new Error(`Element not found: ${options.container}`);
            }
            return elem;
          })()
        : options.container || document.body;

    this.player = lottie.loadAnimation({
      renderer: "svg", // Render method ('svg', 'canvas', or 'html')
      loop: false, // Set looping to true
      autoplay: false, // Set to true for autoplaying the animation
      rendererSettings: {
        // viewBoxSize: 1,
        filterSize: LottieController.buildFilterSize(filterSpread),
      },
      audioFactory(assetPath) {
        const audio = new SustainHowl({
          src: assetPath,
          html5: isIOS() ? true : false,
          // preload: true,
          ...howlerOptions,
        });
        return audio;
      },
      ...lottieOptions,

      container: this.container,
    }) as unknown as CompleteAnimationItem;

    this.player.addEventListener("DOMLoaded", () => {
      const fileName = LottieController.getName(this.player);
      document.title = firstCap(fileName);

      const container = this.getElem() as HTMLElement;
      if (!container) return;

      // Disable right click
      container.dataset.filename = fileName;
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
          const event = { audios, audio, data, willPlay: true } as BMAudioEvent;
          this.player.triggerEvent("audio", event);
          if (event.willPlay) audio.manualPlay();
        }
      });

      oldFrame = frame;
    });
  }

  onComplete = (callback: Callback) => {
    return this.player.addEventListener("complete", callback);
  };
  onLoad = (callback: Callback) => {
    return this.player.addEventListener("DOMLoaded", callback);
  };
  onAudio = (callback: Callback) => {
    return this.player.addEventListener("audio", callback);
  };
  getElem = (selector?: string | null, parent?: Element | null) => {
    parent ||= this.player.renderer.svgElement;
    // parent ||= this.container;
    if (!selector) return parent;
    return getElem(selector, parent || undefined);
  };
  getElems = (selector: string, parent?: Element | null) => {
    parent ||= this.player.renderer.svgElement;
    return getElems(selector, parent || undefined);
  };
  isPlaying = (...acts: any[]) => {
    acts = acts.map(LottieController.getAnimationKey);
    return this.animation !== null && acts.includes(this.animation);
  };
  currentAnimation = () => {
    return this.animation;
  };
  seek = (animation: AnimationValue, { position = 0, isFrame = true } = {}) => {
    this.log("seeking", animation);
    this.setAnimation(animation);
    this.player.loop = false;
    return seekAnimation(this.player, animation, position, isFrame);
  };
  getAnimation = () => {
    return this.animation;
  };

  setAnimation = (anim: AnimationValue = null) => {
    // if (container) container.dataset.animation = anim;
    anim = LottieController.getAnimationKey(anim);

    this.animation = anim;

    const container = this.getElem() as HTMLElement;
    if (!container) return;

    if (anim === null) {
      container.removeAttribute("data-animation");
      return;
    }
    container.setAttribute("data-animation", anim);
  };

  log = (name: string, value: any) => {
    if (!this.debug) return;
    console.log(`${name}:`, value);
  };

  play = (
    anim?: AnimationValue,
    { isFrame = true, loop = false, smooth = false } = {}
  ) => {
    const force = !smooth;

    this.player.loop = loop;

    this.log("playing", anim);

    if (typeof anim === "number") {
      this.setAnimation();
      this.player.goToAndPlay(anim, isFrame);
      return;
    }

    this.setAnimation(anim);
    return playAnimation(this.player, anim, force);
  };

  destroy = () => {
    this.player.destroy();
  };

  static getName(player: CompleteAnimationItem) {
    let { fileName, path = "" } = player;
    // console.log(path, fileName);
    if (!fileName || fileName === "data") {
      return path.split("/").filter(Boolean).pop() || "untitled";
    }

    return fileName;
  }

  static getAnimationKey(anim: AnimationValue = null) {
    if (anim !== null)
      anim = typeof anim === "string" ? anim : JSON.stringify(anim);
    return anim;
  }

  static buildFilterSize(spread: number | number[]) {
    
    const [top, right, bottom, left] = convertShortHand(spread);

    return {
      x: toPercent(-left),
      y: toPercent(-top),
      width: toPercent(1 + right + left),
      height: toPercent(1 + bottom + top),
    } as SVGRendererConfig["filterSize"];
  }
}

function convertShortHand(value: number | number[]) {
  if (typeof value === "number") {
    return [value, value, value, value];
  }
  if (value.length === 2) {
    return [value[0], value[1], value[0], value[1]];
  }
  if (value.length === 3) {
    return [value[0], value[1], value[2], value[1]];
  }
  return value.slice(0, 4);
}
