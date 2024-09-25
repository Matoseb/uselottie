import LottieController, { LottieControllerConfig } from "./LottieController";


// LOTTIE
export default function useLottie(options: LottieControllerConfig): LottieController {
  const controller = new LottieController(options);

  // bind everything to the controller

  return controller;
}

declare global {
  function useLottie(options: LottieControllerConfig): LottieController;
}

globalThis.useLottie = useLottie;
