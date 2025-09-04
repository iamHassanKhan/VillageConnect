import React, { createContext, ReactNode, useContext, useState } from "react";
import { THEME } from "./theme";

type ThemeType = "light" | "dark";

interface ThemeContextProps {
  theme: ThemeType;
  colors: typeof THEME.light;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextProps>({
  theme: "light",
  colors: THEME.light,
  toggleTheme: () => {},
});

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState<ThemeType>("light");

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider
      value={{
        theme,
        colors: theme === "light" ? THEME.light : THEME.dark,
        toggleTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
