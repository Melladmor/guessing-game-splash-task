import { Box, TextField, useTheme } from "@mui/material";
import { FormEvent } from "react";

import PrimaryButton from "../Buttons/PrimaryButton";
import { socket } from "../../socket/webSockit";

type Props = {
  setMessage: (value: string) => void;
  message: string;
  setChat: (value: any) => void;
  name: string;
};

const Message = (props: Props) => {
  const theme = useTheme();

  const { setMessage, message, setChat, name } = props;

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    socket.emit("chat-message", { name, message });
    setChat((prev: any) => {
      return [...prev, { name, message }];
    });
    setMessage("");
  };

  return (
    <Box
      bgcolor={theme.palette.secondary.light}
      borderRadius="0rem 0rem 0.5rem 0.5rem"
      padding="8px">
      <form onSubmit={onSubmit}>
        <Box display="flex" gap="5px" alignItems="center">
          <TextField
            hiddenLabel
            variant="filled"
            size="small"
            sx={{
              border: `1px solid ${theme.palette.primary.main}`,
              background: theme.palette.primary.main,
              outline: "none",
              borderRadius: "5px",
              width: "80%",
              padding: "0px",
              "& input": {
                height: "20px",
              },
            }}
            value={message}
            InputProps={{
              disableUnderline: true,
            }}
            onChange={(e) => setMessage(e.target.value)}
          />
          <PrimaryButton
            sxProps={{
              width: "20%",
              height: "37px",
              marginTop: "0px",
            }}
            buttonProps={{
              disabled: !message?.length || !name,
            }}>
            Start
          </PrimaryButton>
        </Box>
      </form>
    </Box>
  );
};

export default Message;
