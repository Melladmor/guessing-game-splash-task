import { Box, TextField, Typography, useTheme } from "@mui/material";
import { FormEvent, useState } from "react";
import { useDispatch } from "react-redux";
import PrimaryButton from "../Buttons/PrimaryButton";
import { setUserName } from "../../redux/slices/gameSlice";
import { socket } from "../../socket/webSockit";

const Player = () => {
  const theme = useTheme();
  const dispatch = useDispatch();
  const [player, setPlayer] = useState<string>("");

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setPlayer(value);
  };
  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    socket.emit("add-user", player);
    dispatch(setUserName(player));
  };

  return (
    <Box>
      <form onSubmit={onSubmit}>
        <Typography
          component="label"
          htmlFor="username"
          textAlign="center"
          color="#737373"
          fontSize="10px"
          width="100%"
          display="block"
          fontWeight="bold"
          marginBottom="15px">
          Please Insert Your Name
        </Typography>
        <TextField
          id="username"
          hiddenLabel
          variant="filled"
          size="small"
          sx={{
            border: `1px solid ${theme.palette.secondary.light}`,
            outline: "none",
            borderRadius: "5px",
            width: "100%",
          }}
          value={player}
          onChange={onChange}
          InputProps={{
            disableUnderline: true,
          }}
        />
        <PrimaryButton
          buttonProps={{
            disabled: player?.length < 2,
          }}>
          Accept
        </PrimaryButton>
      </form>
    </Box>
  );
};

export default Player;
