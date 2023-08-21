import { io } from "socket.io-client";

import { type SocketType } from "./socket.service.types";

import { MOCK_USERS } from "@mocks/users";
import { setOnlineUsers } from "@store/onlineUsersStore";
import { useAppStore } from "@/store/app.store";

class SocketService {
  socket: SocketType;

  constructor() {
    const randomUser =
      MOCK_USERS[Math.floor(Math.random() * MOCK_USERS.length)];

    this.socket = io("http://localhost:1133", {
      transports: ["websocket"],
      autoConnect: false,
      reconnection: true,
      reconnectionDelay: 1500,
      reconnectionAttempts: 3,
      forceNew: true,
      timeout: 10000,
      query: {
        user: JSON.stringify(randomUser),
      },
    });

    this.socket.on("connect", () => {
      console.log("Socket connected");
      useAppStore.getState().setSocketConnected(true);
    });

    this.socket.on("disconnect", () => {
      console.log("Socket disconnected");
      useAppStore.getState().setSocketConnected(false);
    });

    this.socket.on("connect_error", (error) => {
      console.log("Socket connect_error", error);
      return;
    });

    this.socket.on("online-users", (data) => {
      setOnlineUsers(data);
    });
  }

  connect() {
    this.socket.connect();
  }
}

const socketService = new SocketService();

export default socketService;
