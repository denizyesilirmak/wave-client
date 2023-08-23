import { create } from "zustand";

interface IThemeStore {
  theme: string;
  setTheme: (theme: string) => void;
}

export const THEMES = {
  light: {
    name: "light",
    "--background-default": "#ffffff",
    "--border-color-default": "#e6e6e6",
    "--primary-color": "#9ae3eb",
    "--secondary-color": "#539dc5",
    "--tertiary-color": "#2c3e50",
    "--light-gray": "#f1f1f5",
    "--lighter-gray": "#f7f7f9",
  },
  dark: {
    name: "dark",
    "--background-default": "#2c3e50",
    "--border-color-default": "#34495e",
    "--primary-color": "#9ae3eb",
    "--secondary-color": "#539dc5",
    "--tertiary-color": "#2c3e50",
    "--light-gray": "#f1f1f5",
    "--lighter-gray": "#f7f7f9",
  },
};

const setCSSVariables = (theme: string) => {
  const root = document.documentElement;
  Object.values(THEMES[theme]).forEach((value, index) => {
    root.style.setProperty(Object.keys(THEMES[theme])[index], value as string);
  });
};

const getInitialTheme = () => {
  const persistedTheme = localStorage.getItem("theme");
  return persistedTheme ? persistedTheme : "light";
};

export const themeStore = create<IThemeStore>((set) => ({
  theme: getInitialTheme(),
  setTheme: (theme) => {
    setCSSVariables(theme);
    localStorage.setItem("theme", theme);
    set({ theme });
  },
}));

export const useTheme = () => {
  const theme = themeStore((state) => state.theme);
  const setTheme = themeStore((state) => state.setTheme);
  return [theme, setTheme];
};
