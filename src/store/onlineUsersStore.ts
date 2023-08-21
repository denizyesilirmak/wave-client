import { create } from "zustand";

export const useOnlineUsersStore = create((set) => ({
  onlineUsers: {},
  setOnlineUsers: (users) => set({ onlineUsers: users }),
}));

export const setOnlineUsers = (users) => {
  console.log("setOnlineUsers", users);
  useOnlineUsersStore.setState({ onlineUsers: users });
};
