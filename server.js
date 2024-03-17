import { Server } from "socket.io";
const io = new Server(3000, {
  cors: {
    origin: "*",
  },
});

let users = new Map();

io.on("connection", (socket) => {
  let { id } = socket.client;
  const createDummyMessage = () => {
    setTimeout(() => {
      socket.emit("chat-message", {
        name: "CPU 1",
        message: "Hi Guys",
      });
    }, 2500);

    setTimeout(() => {
      socket.emit("chat-message", {
        name: "CPU 2",
        message: "Hiiii men",
      });
    }, 4000);

    setTimeout(() => {
      socket.emit("chat-message", {
        name: "CPU 3",
        message: "I could play this game for hours",
      });
    }, 6000);
  };
  socket.on("add-user", (name) => {
    users.set(name, [id]);
    socket.emit("user-data", [name, id]);
    createDummyMessage();
  });

  socket.on("chat-message", ({ name, message }) => {
    socket.broadcast.emit("chat-message", { name: name, message: message });
  });
});
