import { useAppSelector } from "../../../application/hooks.ts";
import { useEffect, useRef, useState } from "react";
import { selectImageProcessingState } from "./selectors.ts";

export function useImageEditing() {
  const imageEditing = useAppSelector(selectImageProcessingState);

  const [fps, setFps] = useState(0);
  const timesRef = useRef<number[]>([]);
  const ref = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    console.log("1");
    const ctx = ref.current?.getContext("2d");
    console.log("2");

    if (!imageEditing.frame || !ctx) return;

    const gray8 = convert16To8(imageEditing.frame.array);
    const rgba = grayToRgba(gray8);
    ctx.putImageData(
      new ImageData(rgba, imageEditing.frame.width, imageEditing.frame.height),
      0,
      0,
    );

    if (!imageEditing.isOnline) {
      setFps(0);
      return;
    }

    const now = Date.now();
    const times = timesRef.current;

    times.push(now);
    if (times.length > 3) times.shift();
    if (times.length >= 2) {
      const fpsCalculated =
        1000 / ((times[times.length - 1] - times[0]) / (times.length - 1));
      setFps(fpsCalculated);
    }
  }, [imageEditing.frame, imageEditing.isOnline]);

  return {
    isOnline: imageEditing.isOnline,
    frame: imageEditing.frame,
    fps,
    ref,
  };
}

function convert16To8(src: Uint16Array) {
  const out = new Uint8ClampedArray(src.length);
  for (let i = 0; i < src.length; i++) {
    out[i] = src[i] >>> 8;
  }
  return out;
}

function grayToRgba(gray: Uint8ClampedArray) {
  const length = gray.length;
  const out = new Uint8ClampedArray(length * 4);

  for (let i = 0; i < length; i++) {
    const v = gray[i];
    const j = i * 4;
    out[j] = v;
    out[j + 1] = v;
    out[j + 2] = v;
    out[j + 3] = 255;
  }

  return out;
}
