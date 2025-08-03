import { Box, Grid, useTheme } from "@mui/material";
import Ranking from "./components/Ranking/Ranking";
import Chat from "./components/Chat/Chat";
import PlayerLayout from "./components/Player/PlayerLayout";
import InfoLayout from "./components/Info/InfoLayout";
import GameBoard from "./components/Chart/GameBoard";

function App() {
  const theme = useTheme();

  return (
    <Box
      height={theme.breakpoints.down("sm") ? "auto" : "100vh"}
      sx={{
        paddingX: {
          xs: "1rem",
          md: "1rem",
          lg: "10rem",
        },
        paddingY: "1rem",
      }}
      bgcolor={theme.palette.primary.main}>
      <Grid container spacing={2} marginBottom="1rem">
        <Grid item xs={12} md={12} lg={4}>
          <PlayerLayout />
        </Grid>
        <Grid item xs={12} md={12} lg={8}>
          <InfoLayout />
          <GameBoard />
        </Grid>
      </Grid>
      <Grid container spacing={2}>
        <Grid item xs={12} md={12} lg={7}>
          <Ranking />
        </Grid>
        <Grid item xs={12} md={12} lg={5}>
          <Chat />
        </Grid>
      </Grid>
    </Box>
  );
}

export default App;
