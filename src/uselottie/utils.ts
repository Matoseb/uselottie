import {
  AnimationItem,
  AnimationSegment,
  AnimationEventName,
  BMEnterFrameEvent,
  BMCompleteLoopEvent,
  BMCompleteEvent,
  BMSegmentStartEvent,
  BMDestroyEvent,
} from "lottie-web";

import SustainHowl from "./SustainHowl";

interface Marker {
  payload: {
    name: string;
  };
  time: number;
}

interface AudioControl {
  audio: SustainHowl;
  data: any;
}

export interface BMAudioEvent {
  audios: AudioControl[];
  audio: SustainHowl;
  data: any;
  willPlay: boolean;
}

type CompleteAnimationEventName = "audio" | AnimationEventName;

export interface CompleteAnimationItem extends AnimationItem {
  markers: Marker[];
  fileName: string;
  audioController?: {
    audios: AudioControl[];
  };
  addEventListener: (
    name: CompleteAnimationEventName,
    callback: (event: any) => void
  ) => (() => void);
  removeEventListener: (
    name: CompleteAnimationEventName,
    callback: (event: any) => void
  ) => void;
  triggerEvent: (
    name: CompleteAnimationEventName,
    event:
      | BMAudioEvent
      | BMEnterFrameEvent
      | BMCompleteLoopEvent
      | BMCompleteEvent
      | BMSegmentStartEvent
      | BMDestroyEvent
      | undefined
  ) => void;
}

// lottie
export function getMarker(player: CompleteAnimationItem, name: string) {
  return player.markers.find((marker: Marker) => marker.payload.name === name);
}

export function isIOS() {
  return /iPad|iPhone|iPod/.test(navigator.userAgent);
}

export function playAnimation(
  player: CompleteAnimationItem,
  animation: string,
  force = true
) {
  const addFrame = player.loop ? 0 : 1;

  // transform to array and add extra frame if sequence

  const frames: number[] = [];

  animation
    .split(",")
    .filter(Boolean)
    .slice(0, 2)
    .map((name, index) => {
      let marker = getMarker(player, name.trim());
      if (!marker) return;
      const frame = marker.time + (index > 0 ? addFrame : 0);
      frames.push(frame);
    });

  if (frames.length <= 1) {
    player.goToAndStop(frames[0] || 0, true);
    return;
  }

  player.playSegments(frames as AnimationSegment, force);
}

// DOM
export function getElem(
  selector: string,
  parent: Element | Document = document
) {
  return parent.querySelector(selector);
}

// math
export function random(min: number, max: number) {
  return Math.random() * (max - min) + min;
}

// text
export function firstCap(text: string) {
  return text.charAt(0).toUpperCase() + text.slice(1);
}
