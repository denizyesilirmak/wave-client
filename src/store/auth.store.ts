import { create } from "zustand";

type User = {
  id: number;
  name: string;
  email: string;
  password: string;
  title: string;
  token: string;
};

interface AuthStore {
  user: User | null;
  isLogged: boolean;
  setUser: (user: User) => void;
  setIsLogged: (isLogged: boolean) => void;
}

export const useAuthStore = create<AuthStore>((set) => ({
  user: null,
  isLogged: false,
  setUser: (user) => set(() => ({ user })),
  setIsLogged: (isLogged) => set(() => ({ isLogged })),
}));

export const setUser = (user: User) => {
  useAuthStore.getState().setUser(user);
};

export const setIsLogged = (isLogged: boolean) => {
  useAuthStore.getState().setIsLogged(isLogged);
};
