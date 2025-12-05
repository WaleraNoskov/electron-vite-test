export interface BufferFrame {
  id: number;
  frame: Uint16Array;
  date: Date;
}

export class FrameStore {
  private frames: BufferFrame[] = [];
  private lastFrameId = 0;
  private maxStoredFrames = 3;

  addFrame(buffer: Uint16Array): BufferFrame {
    this.lastFrameId++;

    const frame: BufferFrame = {
      id: this.lastFrameId,
      frame: buffer,
      date: new Date(),
    };
    this.frames.push(frame);

    if (this.frames.length > this.maxStoredFrames) this.frames.shift();

    return frame;
  }

  getFrame(frameId: number): BufferFrame | null {
    return this.frames.filter((f) => f.id == frameId).at(0) ?? null;
  }

  getLatestFrame(): BufferFrame | null {
    return this.frames.filter((f) => f.id == this.lastFrameId).at(0) ?? null;
  }

  getFrames(): BufferFrame[] {
    return this.frames;
  }
}

export const frameStore = new FrameStore();
