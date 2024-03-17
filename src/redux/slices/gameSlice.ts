import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

const initialState: GameState = {
  user: "",
  points: 1000,
  multiplier: 0,
  speed: 1,
  animation: false,
  ranking: [],
};

export const gameSlice = createSlice({
  name: "gameSlice",
  initialState,
  reducers: {
    setUserName: (state, action: PayloadAction<string>) => {
      state.user = action.payload;
    },
    generateMultiplier: (state, action: PayloadAction<number>) => {
      state.animation = true;
      state.multiplier = action.payload;
    },
    setSpeed: (state, action: PayloadAction<number>) => {
      state.speed = action.payload;
    },
    setAnimation: (state, action: PayloadAction<boolean>) => {
      state.animation = action.payload;
    },
    updatePoints: (state, action: PayloadAction<number>) => {
      state.points = action.payload;
    },
    setRanking: (state, action: PayloadAction<Player[]>) => {
      state.ranking = action.payload;
    },
    restartGame: (state) => {
      state.points = 1000;
      state.multiplier = 0;
      state.speed = 1;
      state.animation = false;
    },
  },
});

export const {
  generateMultiplier,
  setAnimation,
  setRanking,
  setSpeed,
  setUserName,
  updatePoints,
  restartGame,
} = gameSlice.actions;

export const gameState = (state: RootState) => state.gameSlice;

export default gameSlice.reducer;
