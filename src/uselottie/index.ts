import LottieController, { LottieControllerConfig } from "./LottieController";
import framify, { FramifyConfig } from "./framify";

// LOTTIE
export default function useLottie(
  options: LottieControllerConfig
): LottieController {
  const controller = new LottieController(options);

  // bind everything to the controller

  return controller;
}

// FRAMIFY
export { framify };

// GLOBAL DECLARATIONS

declare global {
  function useLottie(options: LottieControllerConfig): LottieController;
  function framify(folders: FramifyConfig["folders"], config?: FramifyConfig["options"]): void;
}

globalThis.useLottie = useLottie;
globalThis.framify = framify;
