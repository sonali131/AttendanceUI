// // src/theme/theme.js
// import { createTheme } from "@mui/material/styles";

// export const theme = createTheme({
//   palette: {
//     primary: {
//       main: "#3f51b5", // Indigo
//     },
//     secondary: {
//       main: "#f50057", // Pink
//     },
//     background: {
//       default: "#f4f6f8", // A light gray
//     },
//   },
//   typography: {
//     fontFamily: "Roboto, Arial, sans-serif",
//   },
// });

//---- new code---
// src/theme/theme.js

import { createTheme } from "@mui/material/styles";

// Ab ye ek function hai jo 'mode' ('light' ya 'dark') leta hai
export const getAppTheme = (mode) =>
  createTheme({
    palette: {
      // MUI apne aap mode ke hisab se primary/secondary ke dark/light shades use kar lega
      mode,
      ...(mode === "light"
        ? {
            // Light Mode ki specific colors
            primary: { main: "#3f51b5" }, // Indigo
            secondary: { main: "#f50057" }, // Pink
            background: { default: "#f4f6f8", paper: "#ffffff" },
          }
        : {
            // Dark Mode ki specific colors
            primary: { main: "#7986cb" }, // Light Indigo
            secondary: { main: "#f06292" }, // Light Pink
            background: { default: "#121212", paper: "#1e1e1e" },
          }),
    },
    typography: {
      fontFamily: "Roboto, Arial, sans-serif",
    },
  });
