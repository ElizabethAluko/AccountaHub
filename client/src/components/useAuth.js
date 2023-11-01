// Store and Access data

import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const login = (userData) => {
    // const userDataJ = JSON.parse(userData);
    setUser(userData);

   localStorage.setItem('userData', userData);
    };

  const logout = () => {
    setUser(null);
    alert('Logout Successful!');

    // Clear any stored tokens on logout
    localStorage.removeItem('userData');
  };

  // Function to initialize user data from Local Storage on app load
  const initializeAuth = () => {
    const savedUserData = localStorage.getItem('userData');
    if (savedUserData) {
      // const user = JSON.parse(savedUserData);
      setUser(savedUserData);
      // setUser(user);
  }
};
  // Call the initialization function when your app loads
   useEffect(() => {
     initializeAuth();
   }, []);

  const value = {
    user,
    login,
    logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
