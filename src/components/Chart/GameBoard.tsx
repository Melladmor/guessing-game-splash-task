import { useSelector } from "react-redux";

import { Box, useTheme } from "@mui/material";
import { gameState } from "../../redux/slices/gameSlice";
import CountUp from "react-countup";
import { calcSpeed, createMatrix } from "../../helper/helper";
import { Line, LineChart, ResponsiveContainer, XAxis, YAxis } from "recharts";
import { selectMultiplierVlaue } from "../../redux/slices/multiplierSlice";
import { useCallback, useMemo } from "react";
const matrixArray: Matrix[] = [
  { value: 0, x: "0" },
  { value: 0, x: "1" },
  { value: 0, x: "2" },
  { value: 0, x: "3" },
  { value: 0, x: "4" },
  { value: 0, x: "5" },
  { value: 0, x: "6" },
  { value: 0, x: "7" },
  { value: 0, x: "8" },
  { value: 0, x: "9" },
  { value: 0, x: "10" },
];
const GameBoard = () => {
  const theme = useTheme();
  const chartWidth = theme.breakpoints.down("sm") ? 800 : 400;
  const marginBottom = theme.breakpoints.down("sm")
    ? { top: 5, right: 0, left: 25, bottom: 5 }
    : { top: 20, right: 30, left: 20, bottom: 20 };
  const gameStateValue: GameState = useSelector(gameState);
  const stopRisingPoint = gameStateValue.multiplier;
  const startRisingPoint = useSelector(selectMultiplierVlaue).value;
  const speed = gameStateValue.speed;
  const functionMemoized = useCallback(
    () =>
      stopRisingPoint !== 0
        ? createMatrix(startRisingPoint, stopRisingPoint, matrixArray)
        : [],
    [stopRisingPoint]
  );
  const target = useMemo(() => {
    return functionMemoized();
  }, [stopRisingPoint, startRisingPoint]);

  return (
    <Box
      position="relative"
      bgcolor={theme.palette.secondary.light}
      marginTop="11px"
      borderRadius="10px">
      <Box
        position="absolute"
        top="20%"
        left="50%"
        sx={{
          transform: "translate(-50% ,-50%)",
          color: "white",
          fontSize: "60px",
          fontWeight: "bold",
          textShadow: "2px 2px 4px rgba(0, 0, 0, 0.8)",
          fontStyle: "oblique",
        }}>
        <CountUp
          start={0}
          end={stopRisingPoint}
          redraw={false}
          duration={calcSpeed(speed) / 1000}
          separator=""
          decimals={2}
          decimal="."
          prefix=""
          suffix="x"></CountUp>
      </Box>

      <Box>
        <ResponsiveContainer width="95%" height={395}>
          <LineChart
            width={chartWidth}
            height={397}
            data={target}
            key={`data-${gameStateValue.animation}`}
            margin={marginBottom}>
            <Line
              type="monotone"
              dataKey="value"
              strokeWidth={5}
              stroke="#FF00FF"
              dot={false}
              animationDuration={calcSpeed(speed)}
              repeatCount={5}
              hide={!stopRisingPoint}
            />
            <YAxis dataKey="x" domain={[0, 10]} hide />
            <XAxis dataKey="x" domain={[0, 10]} />
          </LineChart>
        </ResponsiveContainer>
      </Box>
    </Box>
  );
};

export default GameBoard;
