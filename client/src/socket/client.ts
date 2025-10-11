import { io, Socket } from "socket.io-client";

export const socket: Socket = io(process.env.SERVER_URL, {
  auth: {
    token: "JWT_TOKEN",
  },
});

socket.on("connect", () => {
  console.log("연결", socket.id);
});

socket.on("disconnect", (reason) => {
  console.log("연결 끊김:", reason);
});
