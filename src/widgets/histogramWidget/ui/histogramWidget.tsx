import { FC, useEffect, useRef } from "react";
import "./histogramWidget.scss";
import { useHistogram } from "../../../features/imageEditing/hooks/useHistogram.ts";
import { Flex, Group, Switch } from "@mantine/core";

export interface HistogramWidgetProps {
  width?: number | null;
  height?: number | null;
}

export const HistogramWidget: FC<HistogramWidgetProps> = (props) => {
  const {
    histogram,
    autoHistogramEnabled,
    setAutoHistogramEnabled,
    isChangingParameters,
  } = useHistogram();
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const width = props.width ?? 100;
    const height = props.height ?? 100;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const bins = histogram.length;
    const max = Math.max(...histogram);

    ctx.clearRect(0, 0, width, height);

    if (max === 0) return;

    const barWidth = width / bins;

    ctx.fillStyle = "#4dabf7";

    for (let i = 0; i < bins; i++) {
      const value = histogram[i];
      const barHeight = (value / max) * height;

      ctx.fillRect(i * barWidth, height - barHeight, barWidth, barHeight);
    }
  }, [histogram, props]);

  return (
    <Flex direction="column" gap="md">
      <canvas
        className="histogramWidget"
        ref={canvasRef}
        width={props.width ?? 100}
        height={props.height ?? 100}
      />
      <Group>
        <Switch
          disabled={isChangingParameters}
          label="Auto histogram"
          checked={autoHistogramEnabled}
          onChange={(e) =>
            void setAutoHistogramEnabled(e.currentTarget.checked)
          }
        />
      </Group>
    </Flex>
  );
};
