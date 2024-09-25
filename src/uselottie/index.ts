
import LottieController, { LottieControllerConfig } from "./LottieController";


// LOTTIE
export default function useLottie(options: LottieControllerConfig) {
  return new LottieController(options);
}

declare global {
  function useLottie(options: LottieControllerConfig): LottieController;
}

globalThis.useLottie = useLottie;