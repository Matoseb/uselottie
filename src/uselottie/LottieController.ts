import lottie, { AnimationConfigWithPath } from "lottie-web";
import autoBind from "auto-bind";
import SustainHowl, { SustainHowlOptions } from "./SustainHowl";
import styleContent from "./index.scss?inline";

import {
  getElem,
  firstCap,
  playAnimation,
  random,
  CompleteAnimationItem,
  BMAudioEvent,
  isIOS,
} from "./utils";

export interface LottieControllerConfig
  extends Omit<AnimationConfigWithPath, "container"> {
  debug?: boolean;
  injectCSS?: boolean;
  variations?: { rate: number; volume: number };
  volumeVariation?: number;
  rateVariation?: number;
  howlerOptions?: SustainHowlOptions;
  container?: string | Element;
}

type Callback = (event: any) => void;

export default class LottieController {
  animation: string | null = null;
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
      howlerOptions = {},
      ...lottieOptions
    } = options;

    this.debug = debug;
    this.volumeVariation = volumeVariation;
    this.rateVariation = rateVariation;

    console.log(injectCSS);

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

    this.player = lottie.loadAnimation({
      renderer: "svg", // Render method ('svg', 'canvas', or 'html')
      loop: false, // Set looping to true
      autoplay: false, // Set to true for autoplaying the animation
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

      container:
        typeof options.container === "string"
          ? (() => {
              const elem = getElem(options.container);
              if (!elem) {
                throw new Error(`Element not found: ${options.container}`);
              }
              return elem;
            })()
          : options.container || document.body,
    }) as unknown as CompleteAnimationItem;

    this.player.addEventListener("DOMLoaded", () => {
      document.title = firstCap(this.player.fileName);

      const container = this.getElem();
      if (!container) return;
      // Disable right click

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

      // this.getElem().onclick = () => {
      //   Howler._unlockAudio();
      // };
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

    autoBind(this);
  }

  onComplete(callback: Callback) {
    return this.player.addEventListener("complete", callback);
  }
  onLoad(callback: Callback) {
    return this.player.addEventListener("DOMLoaded", callback);
  }
  onAudio(callback: Callback) {
    return this.player.addEventListener("audio", callback);
  }
  getElem(selector?: string | null, parent?: Element) {
    parent ||= this.player.renderer.svgElement;
    if (!selector) return parent;
    return getElem(selector, parent);
  }
  isPlaying(...acts: string[]) {
    return this.animation !== null && acts.includes(this.animation);
  }
  currentAnimation() {
    return this.animation;
  }
  play(anim: string, { loop = false, force = true } = {}) {
    this.animation = anim;
    const container = this.getElem();

    if (container && container instanceof HTMLElement)
      container.dataset.animation = anim;

    this.player.loop = loop;
    if (this.debug) console.log("playing:", anim);

    playAnimation(this.player, anim, force);
  }

  destroy() {
    this.player.destroy();
  }
}