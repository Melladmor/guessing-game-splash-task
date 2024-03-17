import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

const initialState: PointsAndMultiplierState = {
  value: 50,
};

const pointsSlice = createSlice({
  name: "pointsSlice",
  initialState,
  reducers: {
    updatePointsState: (state, action: PayloadAction<number>) => {
      state.value = action.payload;
    },
    plusPoints: (state, action: PayloadAction<number>) => {
      if (action.payload >= state.value) {
        state.value += 25;
      }
    },
    miunsPoint: (state) => {
      if (state.value > 25) {
        state.value -= 25;
      }
    },
  },
});

export const { updatePointsState, plusPoints, miunsPoint } =
  pointsSlice.actions;

export const selectPointsVlaue = (state: RootState) => state.pointsSlice;

export default pointsSlice.reducer;
