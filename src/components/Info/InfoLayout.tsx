import { useSelector } from "react-redux";
import { gameState } from "../../redux/slices/gameSlice";
import { Box } from "@mui/material";
import InfoComponent from "./InfoComponent";
import MilitaryTechIcon from "@mui/icons-material/MilitaryTech";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import AvTimerIcon from "@mui/icons-material/AvTimer";
const InfoLayout = () => {
  const gameData = useSelector(gameState);
  return (
    <Box
      display="flex"
      gap="10px"
      justifyContent="space-between"
      sx={{
        flexWrap: {
          xs: "wrap",
          md: "warp",
          lg: "nowrap",
        },
      }}>
      <InfoComponent
        icon={<MilitaryTechIcon color="warning" />}
        value={gameData?.user ? gameData?.points : ""}
      />
      <InfoComponent
        icon={
          <AccountCircleIcon
            sx={{
              color: "#FF00FF",
            }}
          />
        }
        value={gameData?.user}
      />

      <InfoComponent
        value={gameData.user ? "21:55" : ""}
        icon={<AvTimerIcon color="warning" />}
      />
    </Box>
  );
};

export default InfoLayout;
