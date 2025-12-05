import { useRef, useEffect } from "react";
import { frameStore } from "../../../shared/lib/imageBuffer";

export function useDetectorCanvas(
  frameId: number,
  width: number,
  height: number,
) {
  const ref = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    if (!frameId) return;

    const ctx = ref.current?.getContext("2d");
    const buffer16 = frameStore.getFrame(frameId)?.frame;
    if (!ctx || !buffer16) return;

    const gray8 = convert16To8(buffer16);
    const rgba = grayToRgba(gray8);
    ctx.putImageData(new ImageData(rgba, width, height), 0, 0);
  }, [frameId]);

  return ref;
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
