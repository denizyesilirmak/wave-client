import { create } from "zustand";

interface OnlineUsersStore {
  onlineUsers: unknown;
  setOnlineUsers: (users: unknown) => void;
}

export const useOnlineUsersStore = create<OnlineUsersStore>((set) => ({
  onlineUsers: {},
  setOnlineUsers: (users) => set({ onlineUsers: users }),
}));

export const setOnlineUsers = (users: unknown) => {
  console.log("setOnlineUsers", users);
  useOnlineUsersStore.setState({ onlineUsers: users });
};
