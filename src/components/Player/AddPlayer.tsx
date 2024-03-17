import { Typography } from "@mui/material";
import CustomBox from "../CustomBox/CustomBox";
import Player from "../Inputs/Player";

const AddPlayer = () => {
  return (
    <CustomBox
      sx={{
        padding: "7.2rem 2rem",
        minHeight: "60vh",
        height: "63.5vh",
      }}>
      <Typography
        fontSize="20px"
        color="#9ca3af"
        fontWeight="bold"
        width="100%"
        textAlign="center"
        marginBottom="40%">
        Welcome
      </Typography>
      <Player />
    </CustomBox>
  );
};

export default AddPlayer;
