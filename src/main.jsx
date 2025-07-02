// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import './index.css'
// import App from './App.jsx'

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <App />
//   </StrictMode>,
// )
// src/main.jsx
// src/main.jsx

// import React from "react";
// import ReactDOM from "react-dom/client";
// import App from "./App.jsx";
// import { BrowserRouter } from "react-router-dom";

// // FIX: Added the .jsx extension to the import path to be explicit.
// import { AuthProvider } from "./contexts/AuthContext.jsx";

// import { ThemeProvider, CssBaseline } from "@mui/material";
// import { theme } from "./theme/theme.js";
// import { LocalizationProvider } from "@mui/x-date-pickers";
// import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";

// ReactDOM.createRoot(document.getElementById("root")).render(
//   <React.StrictMode>
//     <ThemeProvider theme={theme}>
//       <LocalizationProvider dateAdapter={AdapterDateFns}>
//         <CssBaseline />
//         <BrowserRouter>
//           <AuthProvider>
//             <App />
//           </AuthProvider>
//         </BrowserRouter>
//       </LocalizationProvider>
//     </ThemeProvider>
//   </React.StrictMode>
// );
//--- new code
// src/main.jsx (FINAL AND CORRECTED VERSION)

import React, { useContext } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext.jsx";
import { ThemeProvider, CssBaseline } from "@mui/material";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";

// --- 1. Apne naye ThemeContext aur dynamic theme function ko import karein ---
import { CustomThemeProvider, ThemeContext } from "./contexts/ThemeContext.jsx";
import { getAppTheme } from "./theme/theme.js";

export const AppWrapper = () => {
  const { mode } = useContext(ThemeContext);
  const theme = getAppTheme(mode); // 'light' ya 'dark' mode ke hisab se theme generate karein

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline /> {/* Ye background color aur baaki styles apply karega */}
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <AuthProvider>
          <App />
        </AuthProvider>
      </LocalizationProvider>
    </ThemeProvider>
  );
};

// --- 3. Final render logic ---
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      {/* Humari poori app ab CustomThemeProvider se wrapped hai */}
      <CustomThemeProvider>
        <AppWrapper />
      </CustomThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
);
