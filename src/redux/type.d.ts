interface Player {
  id: number | string;
  name: string;
  point: string | number;
  multiplier: string | number;
  score: number;
}

interface ChatI {
  name: string;
  message: string;
}

interface PointsAndMultiplierState {
  value: number;
}

interface updatePointsAfterGussing {
  generatedMultiplier: number;
  multiplier: number;
  points: number;
}
interface GameState {
  user: string;
  points: number;
  multiplier: number;
  speed: number;
  animation: boolean;
  ranking: Player[];
}

interface Matrix {
  value: number;
  x: string;
}
