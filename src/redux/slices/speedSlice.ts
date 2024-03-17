import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

const initialState: PointsAndMultiplierState = {
  value: 1,
};

const speedSlice = createSlice({
  name: "speedSlice",
  initialState,
  reducers: {
    changeSpeedState: (state, action: PayloadAction<number>) => {
      state.value = action.payload;
    },
  },
});

export const { changeSpeedState } = speedSlice.actions;

export const selectSpeedValue = (state: RootState) => state.speedSlice;

export default speedSlice.reducer;
