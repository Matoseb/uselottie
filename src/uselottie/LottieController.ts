import lottie, { AnimationConfigWithPath, SVGRendererConfig } from "lottie-web";
import LottieAudio, { LottieAudioOptions } from "./LottieAudio";
import styleContent from "./index.scss?inline";
import useHover from "./useHover";
import { Referentiel } from "referentiel";

import {
  getElem,
  getElems,
  firstCap,
  random as mathRandom,
  isIOS,
  toPercent,
  fancyLog,
  convertShortHand,
  noFunc,
  ConsoleType,
  injectCSS,
  clamp as clampNumber,
  stringify,
} from "./utils";

import {
  playAnimation,
  seekAnimation,
  BMAudioEvent,
  AnimationValue,
  CompleteAnimationItem,
} from "./lottie-utils";

import LottieApi, { AnimationItemAPI } from "lottie-api";

const convertPoint = Referentiel.convertPointFromPageToNode;

export type LottieControllerConfig = Omit<
  AnimationConfigWithPath,
  "container"
> & {
  debug?: boolean;
  injectCSS?: boolean;
  volumeVariation?: number;
  rateVariation?: number;
  howlerOptions?: LottieAudioOptions;
  container?: string | Element;
  filterSpread?: number | number[];
};

type AnimationKey = string | null;

enum MESSAGE {
  event, // log
  action, // log
  default, // log
  error, // error
}

const COLORS: Record<MESSAGE, string> = {
  [MESSAGE.event]: "lightblue",
  [MESSAGE.action]: "orange",
  [MESSAGE.default]: "lightgray",
  [MESSAGE.error]: "red",
};

const LOGTYPES: PartialRecord<MESSAGE, ConsoleType> = {
  [MESSAGE.error]: "error",
  [MESSAGE.default]: "log",
};
// logtype based on COLORS:

export default class LottieController {
  animation: AnimationKey = null;
  container: Element | null = null;
  api: AnimationItemAPI | null = null;
  name: string = "";
  stopHover: Callback | undefined;
  player: CompleteAnimationItem;
  debug: boolean = false;
  animVariation: number | boolean = false;
  volumeVariation: number;
  rateVariation: number;

  constructor(options: LottieControllerConfig = {}) {
    const {
      debug = false,
      injectCSS: addCSS = true,
      volumeVariation = 0,
      name = "",
      rateVariation = 0,
      filterSpread = 0.5,
      howlerOptions = {},
      ...lottieOptions
    } = options;

    this.debug = debug;
    this.volumeVariation = volumeVariation;
    this.rateVariation = rateVariation;
    this.name = name;

    if (addCSS) injectCSS("lottie-controller", styleContent);

    this.container =
      typeof options.container === "string"
        ? (() => {
            const elem = getElem(options.container);
            if (!elem) {
              this.log(`Element not found`, MESSAGE.error)(options.container);
              throw new Error("Element not found:" + options.container);
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
        const audio = new LottieAudio({
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

    this.api = LottieApi.createAnimationApi(this.player);

    this.player.addEventListener("DOMLoaded", () => {
      this.name = this.getName();
      document.title = firstCap(this.name);

      this.log(
        "DOMLoaded",
        MESSAGE.event
      )(this.player.path + this.player.fileName + ".json");

      const container = this.getElem() as HTMLElement;
      if (!container) return;

      this.stopHover = useHover((canHover) => {
        this.setAttr("can-hover", canHover, true);
      });

      // Disable right click
      container.dataset.filename = this.name;
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

    this.player.addEventListener("complete", () => {
      this.setAttr("data-playing", false);
      this.log("complete", MESSAGE.event)();
    });

    this.player.addEventListener("loopComplete", () => {
      this.log("loopComplete", MESSAGE.event)();
    });

    let oldFrame = Infinity;

    this.player.addEventListener("enterFrame", (event) => {
      if (event.direction !== 1) return;

      const playing = this.isPlaying();
      this.setAttr("data-playing", playing);

      if (!playing) return;

      const { audios } = this.player.audioController || { audios: [] };
      const frame = this.player.firstFrame + this.player.currentFrame;

      audios.forEach(({ audio, data }) => {
        const { st } = data;

        if (st <= frame && st > oldFrame) {
          const rate = this.rateVariation * 0.5;
          audio.manualRate?.(mathRandom(1 - rate, 1 + rate));
          audio.manualVolume?.(mathRandom(1 - this.volumeVariation, 1));
          const event = { audios, audio, data, prevent: false } as BMAudioEvent;
          this.player.triggerEvent("audio", event);
          if (event.prevent !== true) audio.manualPlay?.();
        }
      });

      oldFrame = frame;
    });
  }

  random = mathRandom;

  setAnimVariation = (value: number | boolean = false) => {
    return (this.animVariation = value);
  };

  onComplete = (callback: Callback) => {
    return this.player.addEventListener("complete", callback);
  };
  onLoad = (callback: Callback) => {
    return this.player.addEventListener("DOMLoaded", callback);
  };
  onLoopComplete = (callback: Callback) => {
    return this.player.addEventListener("loopComplete", callback);
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
  isPlaying = (...possibleAnimations: AnimationValue[]) => {
    if (possibleAnimations.length === 0) return !this.player.isPaused;
    const keys = possibleAnimations.map(LottieController.getAnimationKey);
    return this.animation !== null && keys.includes(this.animation);
  };
  currentAnimation = () => {
    return this.animation;
  };

  private handleAnimVariation = (animation?: AnimationValue) => {
    if (!animation) return animation;
    if (!Array.isArray(animation)) return animation;
    if (this.animVariation === false) return animation;

    return animation[
      clampNumber(Number(this.animVariation), 0, animation.length)
    ];
  };

  seek = (animation: AnimationValue, { position = 0, isFrame = true } = {}) => {
    this.player.loop = false;
    this.player.resetSegments(true);

    this.setAnimation(animation);

    animation = this.handleAnimVariation(animation) as AnimationValue;

    const result = seekAnimation(this.player, animation, position, isFrame);

    this.log("seek", MESSAGE.action)({ position });

    return result;
  };

  getAnimation = () => {
    return this.animation;
  };

  getInfos = () => {
    return {
      animation: this.animation,
      currentFrame: this.player.currentFrame,
    };
  };

  setAnimation = (anim: AnimationValue = null) => {
    this.animation = LottieController.getAnimationKey(anim);
    this.setAttr("data-animation", this.animation);
  };

  getPoint = (
    x: number, // pageX
    y: number, // pageY
    {
      viewbox = false,
      selector = null,
      normalize = true,
      clamp = false,
    }: {
      viewbox?: boolean;
      selector?: string | null;
      normalize?: boolean;
      clamp?: boolean;
    } = {}
  ) => {
    const elem = this.getElem(selector);
    if (!elem) return null;

    let width, height, top, left, right, bottom;

    // check if element is a svg, or path, or ...
    if ("getBBox" in elem && viewbox) {
      const box = (elem as SVGSVGElement).getBBox();
      ({ x: left, y: top, width, height } = box);
      right = left + width;
      bottom = top + height;
    } else {
      ({ top, left, width, height, right, bottom } =
        elem.getBoundingClientRect());
    }

    if (!viewbox) {
      x -= left;
      y -= top;
    } else {
      [x, y] = convertPoint(elem, [x, y]);
    }

    if (clamp) {
      x = clampNumber(x, 0, width);
      y = clampNumber(y, 0, height);
    }

    if (normalize) {
      x /= width;
      y /= height;
    }

    return {
      top,
      left,
      width,
      height,
      right,
      bottom,
      x,
      y,
    };
  };

  setAttr = (key: string, value: any = "", modeNoValue = false) => {
    const container = this.getElem() as HTMLElement;

    if (!container) return;

    if (modeNoValue) {
      value = Boolean(value) ? "" : null;
    }

    if (value === null) {
      container.removeAttribute(key);
      return;
    }
    container.setAttribute(key, stringify(value));
  };

  log = (name?: string, messageType?: MESSAGE) => {
    if (!this.debug) return noFunc;

    const as = LOGTYPES[messageType || MESSAGE.default];
    const color = COLORS[messageType || MESSAGE.default];
    return (...value: any[]) => {
      fancyLog.call({ name, color, as }, ...value, { ...this.getInfos() });
    };
  };

  loop = (loop: boolean) => {
    const { player } = this;
    if (player.loop === true && player.loop !== loop && !player.isPaused) {
      const { firstFrame, totalFrames, currentFrame } = player;
      // add 1 to the totalFrames to include the last frame
      player.adjustSegment([firstFrame, totalFrames + firstFrame + 1], currentFrame);
    }
    return player.loop = loop;
  };

  play = (
    animation: AnimationValue = 0,
    { isFrame = true, loop = false, smooth = false } = {}
  ) => {
    const force = !smooth;
    this.player.loop = loop;

    if (typeof animation === "number") {
      this.setAnimation();
      this.player.goToAndPlay(animation, isFrame);
      return;
    }

    this.setAnimation(animation);
    animation = this.handleAnimVariation(animation) as AnimationValue;

    this.log("play", MESSAGE.action)();

    return playAnimation(this.player, animation, force);
  };

  getName = () => {
    const { fileName, path = "" } = this.player;

    if (this.name) return this.name;

    if (!fileName || fileName === "data") {
      return path.split("/").filter(Boolean).pop() || "untitled";
    }

    return fileName;
  };

  destroy = () => {
    this.player.destroy();
    this.stopHover?.();
  };

  static getAnimationKey(anim: AnimationValue = null): AnimationKey {
    if (anim === null || anim === undefined) return null;
    return stringify(anim);
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
