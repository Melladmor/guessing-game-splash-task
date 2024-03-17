import CustomBox from "../CustomBox/CustomBox";
import ChatIcon from "@mui/icons-material/Chat";
import { Box, Typography, useTheme } from "@mui/material";
import { useEffect, useRef, useState } from "react";
import HeaderLayout from "../HeaderLayout.tsx/HeaderLayout";
import Message from "../Inputs/Message";
import { socket } from "../../socket/webSockit";
import { useSelector } from "react-redux";
import { gameState } from "../../redux/slices/gameSlice";

function Chat() {
  const theme = useTheme();
  const username = useSelector(gameState).user;
  const [message, setMessage] = useState<string>("");
  const [chat, setChat] = useState<ChatI[]>([]);
  const [user, setUser] = useState<string>("");
  const messageContainer = useRef<HTMLDivElement>(null);
  useEffect(() => {
    socket.on("chat-message", ({ name, message }) => {
      setChat((prev) => {
        return [...prev, { name, message }];
      });
    });

    socket.on("connect", () => {
      socket.emit("new-user");
    });

    socket.on("user-data", (name: any) => {
      setUser(name[0]);
    });

    if (messageContainer?.current) {
      messageContainer.current.scrollTop =
        messageContainer.current.scrollHeight;
    }
    return () => {
      socket.off();
    };
  }, [chat]);

  return (
    <HeaderLayout title="Chat" icon={<ChatIcon style={{ color: "purple" }} />}>
      <CustomBox
        sx={{
          padding: "0px",
          height: "23.6vh",
          display: "grid",
          gridTemplateRows: "70% 30%",
        }}>
        <Box
          ref={messageContainer}
          className="scroll-bar"
          padding="0.5rem"
          sx={{ overflowY: "scroll" }}>
          {chat?.map((chat: ChatI) => {
            return (
              <Box
                key={chat.message}
                display="flex"
                gap="8px"
                marginBottom="4px">
                <Typography
                  color="purple"
                  fontSize="10px"
                  fontWeight="800"
                  textTransform="uppercase">
                  {chat?.name} :{" "}
                </Typography>
                <Typography
                  bgcolor={theme.palette.secondary.light}
                  padding="2px 4px"
                  borderRadius="6px"
                  fontSize="10px">
                  {chat?.message}
                </Typography>
              </Box>
            );
          })}
        </Box>
        <Message
          name={user ? user : username}
          setChat={setChat}
          setMessage={setMessage}
          message={message}
        />
      </CustomBox>
    </HeaderLayout>
  );
}

export default Chat;
