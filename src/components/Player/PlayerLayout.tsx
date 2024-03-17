import { Box } from "@mui/material";
import { useSelector } from "react-redux";
import PlayerInputs from "./PlayerInputs";
import AddPlayer from "./AddPlayer";
import { gameState } from "../../redux/slices/gameSlice";

const PlayerLayout = () => {
  const currenPlayer = useSelector(gameState).user;
  return <Box>{currenPlayer ? <PlayerInputs /> : <AddPlayer />}</Box>;
};

export default PlayerLayout;
