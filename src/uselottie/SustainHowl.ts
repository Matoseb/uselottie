import { Howl, HowlOptions } from "howler";

export interface SustainHowlOptions extends HowlOptions {
 
}

export default class SustainHowl extends Howl {
  constructor(options: SustainHowlOptions) {
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
