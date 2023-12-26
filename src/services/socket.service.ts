import { io } from "socket.io-client";

import { type SocketType } from "./socket.service.types";

import { useAppStore } from "@/store/app.store";
import { setOnlineUsers } from "@/store/onlineUsers.store";

class SocketService {
  socket: SocketType;

  constructor() {
    this.socket = io("http://localhost:3000", {
      transports: ["websocket"],
      autoConnect: false,
      reconnection: true,
      reconnectionDelay: 1500,
      reconnectionAttempts: 3,
      forceNew: true,
      timeout: 10000,
      query: {
        user: JSON.stringify(localStorage.getItem("user") || null),
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

  sendMessage(message: string) {
    this.socket.emit("message", message);
  }

  sendChatMessage(message: string, from: string, to: string) {
    this.socket.emit("chat-message", {
      message,
      from,
      to,
    });
  }
}

const socketService = new SocketService();

Object.freeze(socketService);

export default socketService;
