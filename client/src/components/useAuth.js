// Store and Access data

import React, { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const login = (userData) => {
    // Assuming userData contains user information and/or tokens from the server
    setUser(userData);

    // You can also store the token in local storage or cookies for persistent authentication
    localStorage.setItem('userToken', userData.token);
  };

  const logout = () => {
    setUser(null);

    // Clear any stored tokens on logout
    localStorage.removeItem('userToken');
  };

  const value = {
    user,
    login,
    logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
