import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

const initialState: PointsAndMultiplierState = {
  value: 0.25,
};

const multiplierSlice = createSlice({
  name: "multiplierSlice",
  initialState,
  reducers: {
    updateMultiplierState: (state, action: PayloadAction<number>) => {
      state.value = action.payload;
    },
    plusMultiplier: (state) => {
      if (10 >= state.value + 0.25) {
        state.value += 0.25;
      }
    },
    miunsMultiplier: (state) => {
      if (state.value >= 1) {
        state.value -= 0.25;
      }
    },
  },
});

export const { updateMultiplierState, plusMultiplier, miunsMultiplier } =
  multiplierSlice.actions;

export const selectMultiplierVlaue = (state: RootState) =>
  state.multiplierSlice;

export default multiplierSlice.reducer;
