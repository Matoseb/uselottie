import { Howl, HowlOptions } from "howler";

export interface LottieAudioOptions extends HowlOptions {
}

export default class LottieAudio extends Howl {
  constructor(options: LottieAudioOptions) {
    super(options);
    // super.on("end", () => {
    //   // this.isPlaying = false;
    // });
  }

  manualSeek(value: number) {
    return super.seek(value);
  }
  manualPlay() {
    return super.play();
  }
  manualRate(value: number) {
    return super.rate(value);
  }
  manualVolume(value: number) {
    return super.volume(value);
  }
  playing() {
    return false;
  }
  setVolume() {}
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
}
