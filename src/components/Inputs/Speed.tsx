import SpeedIcon from "@mui/icons-material/Speed";
import { useDispatch, useSelector } from "react-redux";
import {
  changeSpeedState,
  selectSpeedValue,
} from "../../redux/slices/speedSlice";
import { Box, Slider, Typography } from "@mui/material";
import HeaderLayout from "../HeaderLayout.tsx/HeaderLayout";
import { gameState } from "../../redux/slices/gameSlice";

const Speed = () => {
  const gameStateVlaues = useSelector(gameState);
  const speedValue = useSelector(selectSpeedValue).value;
  const dispatch = useDispatch();
  const marks = [
    {
      value: 1,
      label: (
        <Typography
          style={{
            fontSize: "10px",
            fontWeight: "bold",
            color: speedValue === 1 ? "#FF00FF" : "white",
          }}>
          1X
        </Typography>
      ),
    },
    {
      value: 2,
      label: (
        <Typography
          style={{
            fontSize: "10px",
            fontWeight: "bold",
            color: speedValue === 2 ? "#FF00FF" : "white",
          }}>
          2X
        </Typography>
      ),
    },
    {
      value: 3,
      label: (
        <Typography
          style={{
            fontSize: "10px",
            fontWeight: "bold",
            color: speedValue === 3 ? "#FF00FF" : "white",
          }}>
          3X
        </Typography>
      ),
    },
    {
      value: 4,
      label: (
        <Typography
          style={{
            fontSize: "10px",
            fontWeight: "bold",
            color: speedValue === 4 ? "#FF00FF" : "white",
          }}>
          4X
        </Typography>
      ),
    },
    {
      value: 5,
      label: (
        <Typography
          style={{
            fontSize: "10px",
            fontWeight: "bold",
            color: speedValue === 5 ? "#FF00FF" : "white",
          }}>
          5X
        </Typography>
      ),
    },
  ];
  const selectSpeed = (value: any) => {
    dispatch(changeSpeedState(value));
  };

  return (
    <HeaderLayout title="Speed" icon={<SpeedIcon sx={{ color: "#FF00FF" }} />}>
      <Box
        sx={{
          backgroundImage: `linear-gradient(to right, #232526, #414345)`,
        }}
        padding="20px"
        borderRadius="10px">
        <Slider
          size="medium"
          min={1}
          max={5}
          step={1}
          aria-label="Small"
          valueLabelDisplay="auto"
          value={speedValue}
          onChange={(_, value) => selectSpeed(value)}
          marks={marks}
          sx={{
            color: "#FF00FF",
          }}
          disabled={gameStateVlaues?.animation}
        />
      </Box>
    </HeaderLayout>
  );
};

export default Speed;
