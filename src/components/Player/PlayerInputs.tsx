import { Box } from "@mui/material";
import Points from "../Inputs/Points";
import PrimaryButton from "../Buttons/PrimaryButton";
import { useDispatch, useSelector } from "react-redux";
import Multiplier from "../Inputs/Multiplier";
import Speed from "../Inputs/Speed";
import Round from "../round/Round";
import { useState } from "react";
import useAutoPlayer from "../../hooks/useAutoPlayer";
import { selectPointsVlaue } from "../../redux/slices/pointsSlice";
import { selectMultiplierVlaue } from "../../redux/slices/multiplierSlice";
import { calcSpeed, random } from "../../helper/helper";
import {
  gameState,
  generateMultiplier,
  restartGame,
  setAnimation,
  setRanking,
  updatePoints,
} from "../../redux/slices/gameSlice";
import { selectSpeedValue } from "../../redux/slices/speedSlice";
import { store } from "../../redux/store";

const PlayerInputs = () => {
  const dispatch = useDispatch();
  const [autoPlayerState, setAutoPlayerState] = useState<Player[]>([]);
  const [randomValueGenerated, setRandomValueGenerated] = useState<number>(
    random(1, 9, 2)
  );
  const gameStateValues = useSelector(gameState);
  const points = useSelector(selectPointsVlaue).value;
  const multiplier = useSelector(selectMultiplierVlaue).value;
  const speedValue = useSelector(selectSpeedValue).value;
  useAutoPlayer({ setState: setAutoPlayerState });

  const generatePlayers = () => {
    let players: Player[] = [];
    const data: Player = {
      id: 0,
      name: "You",
      point: Math.round(points * multiplier),
      multiplier,
      score: Math.round(points * multiplier),
    };
    players.push(data);

    for (let i = 0; i < 4; i++) {
      let point = random(1, 700, 0);
      let multiplier = random(1, 4, 2);

      players.push({
        id: i + 1,
        name: `CPU ${i + 1}`,
        point,
        multiplier,
        score: Math.round(points * multiplier),
      });
    }

    setAutoPlayerState(players);
    dispatch(setRanking(players));
  };

  const updateMainPoints = () => {
    dispatch(setAnimation(true));
    const value = points * multiplier;
    const pointsBalance: number = store.getState().gameSlice.points;
    const updatedPoints =
      randomValueGenerated >= multiplier
        ? pointsBalance + value
        : pointsBalance - value;
    dispatch(updatePoints(updatedPoints));
    dispatch(setAnimation(false));
  };

  const start = () => {
    setRandomValueGenerated(random(1, 9, 2));
    generatePlayers();
    dispatch(generateMultiplier(randomValueGenerated));
    dispatch(updatePoints(gameStateValues?.points - points));
    setTimeout(updateMainPoints, calcSpeed(speedValue));
  };

  return (
    <Box>
      <Box marginBottom="1rem">
        <Box display="flex" alignItems="center" gap="5px">
          <Points />
          <Multiplier />
        </Box>
        <Box>
          <PrimaryButton
            buttonProps={{
              type: "button",
              onClick: () => {
                gameStateValues?.points < 0 ? dispatch(restartGame()) : start();
              },
              disabled: gameStateValues?.animation,
            }}>
            {gameStateValues?.animation
              ? "Started"
              : gameStateValues?.points < 0
              ? "Restart"
              : "Start"}
          </PrimaryButton>
        </Box>
      </Box>

      <Box>
        <Round autoPlayerGenerated={autoPlayerState} />
        <Speed />
      </Box>
    </Box>
  );
};

export default PlayerInputs;
