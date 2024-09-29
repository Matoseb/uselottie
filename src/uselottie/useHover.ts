import { isTouch } from "./utils";

type HoverHandler = (canHover: boolean) => void;

let isInitialized: (() => void) | null = null;
const hoverCallbacks: Set<HoverHandler> = new Set();

function initializeHoverListeners() {
  function updateHoverState(canHover: boolean) {
    // check if coarse

    hoverCallbacks.forEach((callback) => callback(canHover));
  }

  function disable(event: TouchEvent) {
    if (event.touches.length > 0) return;
    updateHoverState(false);
  }

  function enable() {
    updateHoverState(true);
  }

  function checkEnable() {
    if (isTouch()) return;
    updateHoverState(true);
  }

  if (!isTouch()) updateHoverState(true);

  if (!isInitialized) {
    window.addEventListener("touchstart", enable);
    window.addEventListener("mousemove", checkEnable);
    window.addEventListener("touchend", disable);
    isInitialized = () => {
      window.removeEventListener("touchstart", enable);
      window.removeEventListener("mousemove", checkEnable);
      window.removeEventListener("touchend", disable);
      if (isTouch()) updateHoverState(false);
      isInitialized = null;
    };
  }
}

export default function useHover(onHoverChange?: HoverHandler) {
  if (onHoverChange) {
    hoverCallbacks.add(onHoverChange);
  }

  initializeHoverListeners();

  return function destroy() {
    if (onHoverChange) {
      hoverCallbacks.delete(onHoverChange);
      if (isTouch()) onHoverChange(false);
    }

    if (hoverCallbacks.size === 0 && isInitialized) {
      isInitialized();
    }
  };
}
