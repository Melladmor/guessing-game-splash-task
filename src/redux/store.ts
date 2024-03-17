import { configureStore } from "@reduxjs/toolkit";
import gameSlice from "./slices/gameSlice";
import pointsSlice from "./slices/pointsSlice";
import multiplierSlice from "./slices/multiplierSlice";
import speedSlice from "./slices/speedSlice";

export const store = configureStore({
  reducer: {
    gameSlice: gameSlice,
    pointsSlice: pointsSlice,
    multiplierSlice: multiplierSlice,
    speedSlice: speedSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
