// // src/context/AuthContext.jsx

// import React, { createContext, useState, useEffect } from "react";
// import { apiLogin } from "../api/mock";

// // FIX: YAHAN 'export' KEYWORD ADD KIYA GAYA HAI
// export const AuthContext = createContext(null);

// export const AuthProvider = ({ children }) => {
//   const [user, setUser] = useState(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     try {
//       const storedUser = localStorage.getItem("user");
//       if (storedUser) {
//         setUser(JSON.parse(storedUser));
//       }
//     } catch (error) {
//       console.error("Failed to parse user from localStorage", error);
//     } finally {
//       setLoading(false);
//     }
//   }, []);

//   const login = async (email, password) => {
//     const { user: loggedInUser } = await apiLogin(email, password);
//     setUser(loggedInUser);
//     localStorage.setItem("user", JSON.stringify(loggedInUser));
//     return loggedInUser;
//   };

//   const logout = () => {
//     setUser(null);
//     localStorage.removeItem("user");
//   };

//   const value = { user, isAuthenticated: !!user, loading, login, logout };

//   return (
//     <AuthContext.Provider value={value}>
//       {!loading && children}
//     </AuthContext.Provider>
//   );
// };
// src/context/AuthContext.jsx (FINAL AND CORRECT VERSION)

import React, { createContext, useState, useEffect, useContext } from "react";
import { apiLogin } from "../api/mock";

// Isko export nahi karna hai
export const AuthContext = createContext(null);

// Is file se sirf AuthProvider aur useAuth hi export honge
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    try {
      const storedUser = localStorage.getItem("user");
      if (storedUser) {
        setUser(JSON.parse(storedUser));
      }
    } catch (error) {
      console.error("Failed to parse user from localStorage", error);
    } finally {
      setLoading(false);
    }
  }, []);

  const login = async (email, password) => {
    const { user: loggedInUser } = await apiLogin(email, password);
    setUser(loggedInUser);
    localStorage.setItem("user", JSON.stringify(loggedInUser));
    return loggedInUser;
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
  };

  const value = { user, isAuthenticated: !!user, loading, login, logout };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
};

// YAHI WO HOOK HAI JISE SABKO ISTEMAL KARNA HAI
export const useAuth = () => {
  return useContext(AuthContext);
};
