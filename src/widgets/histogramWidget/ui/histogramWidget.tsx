import { useAppSelector } from "../../../application/hooks.ts";
import { selectImageEditingState } from "../../../features/imageEditing";
import { FC, useEffect, useRef } from "react";
import "./histogramWidget.scss";

export interface HistogramWidgetProps {
  width?: number | null;
  height?: number | null;
}

export const HistogramWidget: FC<HistogramWidgetProps> = (props) => {
  const state = useAppSelector(selectImageEditingState);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const width = props.width ?? 100;
    const height = props.height ?? 100;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const bins = state.histogram.length;
    const max = Math.max(...state.histogram);

    ctx.clearRect(0, 0, width, height);

    if (max === 0) return;

    const barWidth = width / bins;

    ctx.fillStyle = "#4dabf7";

    for (let i = 0; i < bins; i++) {
      const value = state.histogram[i];
      const barHeight = (value / max) * height;

      ctx.fillRect(i * barWidth, height - barHeight, barWidth, barHeight);
    }
  }, [state.histogram, props]);

  return (
    <canvas
      className="histogramWidget"
      ref={canvasRef}
      width={props.width ?? 100}
      height={props.height ?? 100}
    />
  );
};
