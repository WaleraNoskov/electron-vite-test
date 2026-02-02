import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export enum CtStatus {
  Error,
  Idle,
  Starting,
  Running,
  Finishing,
  Cancelling,
  MovingHome,
}

export enum CtType {
  Unknown,
  NonStop,
  StepByStep,
}

export interface CtState {
  status: CtStatus;
  type: CtType;
  validationErrors: string[];
  stepsDone: number;
  totalSteps: number;
  timeToFinish: number;
}

const initialState: CtState = {
  status: CtStatus.Error,
  type: CtType.Unknown,
  validationErrors: [],
  stepsDone: 0,
  totalSteps: 0,
  timeToFinish: 0,
};

const ctSlice = createSlice({
  name: "ct",
  initialState,
  reducers: {
    setStatus: (state, action: PayloadAction<CtStatus>) => {
      state.status = action.payload;
    },
    setType: (state, action: PayloadAction<CtType>) => {
      state.type = action.payload;
    },
    setDoneSteps: (state, action: PayloadAction<number>) => {
      state.stepsDone = action.payload;
    },
    setTotalSteps: (state, action: PayloadAction<number>) => {
      state.totalSteps = action.payload;
    },
    setTimeToFinish: (state, action: PayloadAction<number>) => {
      state.timeToFinish = action.payload;
    },
    setValidationErrors: (state, action: PayloadAction<string[]>) => {
      state.validationErrors = action.payload;
    },
  },
});

export const {
  setStatus,
  setType,
  setDoneSteps,
  setTotalSteps,
  setTimeToFinish,
  setValidationErrors,
} = ctSlice.actions;
export const ctReducer = ctSlice.reducer;
