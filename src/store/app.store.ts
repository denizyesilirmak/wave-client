import { create } from "zustand";

interface IAppStore {
  socketConnected: boolean;
  setSocketConnected: (socketConnected: boolean) => void;
}

export const useAppStore = create<IAppStore>((set) => ({
  socketConnected: false,
  setSocketConnected: (socketConnected) => set({ socketConnected }),
}));

export const useSocketConnected = () =>
  useAppStore((state) => state.socketConnected);
