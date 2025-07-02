// src/context/ThemeContext.jsx

import React, { createContext, useState, useMemo, useContext } from "react";

// ThemeContext ko create karein
export const ThemeContext = createContext({
  toggleColorMode: () => {},
});

// Ye component poori app ko wrap karega aur theme ki state provide karega
export const CustomThemeProvider = ({ children }) => {
  // State banayein jo 'light' ya 'dark' ho sakti hai.
  // Hum pehle localStorage se check karte hain, agar wahan kuch nahi hai to 'light' use karte hain.
  const [mode, setMode] = useState(
    localStorage.getItem("themeMode") || "light"
  );

  // Ye function theme ko toggle karega
  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => {
          const newMode = prevMode === "light" ? "dark" : "light";
          // Naye mode ko localStorage mein save kar dein
          localStorage.setItem("themeMode", newMode);
          return newMode;
        });
      },
    }),
    []
  );

  // useMemo ka istemal performance ke liye kiya gaya hai
  const themeValue = useMemo(() => ({ mode, ...colorMode }), [mode, colorMode]);

  return (
    <ThemeContext.Provider value={themeValue}>{children}</ThemeContext.Provider>
  );
};

// Ek custom hook banayein taaki context ko aasaani se use kar sakein
export const useThemeContext = () => {
  return useContext(ThemeContext);
};
