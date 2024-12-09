import React, { createContext, useState } from 'react';

// Create the Auth Context
export const AuthContext = createContext();

// Provide Auth Context
export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState('');

  // Login function
  const login = (username) => {
    setIsLoggedIn(true);
    setUsername(username);
    localStorage.setItem('token', 'some-token'); // Example token
    localStorage.setItem('username', username);
  };

  // Logout function
  const logout = () => {
    setIsLoggedIn(false);
    setUsername('');
    localStorage.removeItem('token');
    localStorage.removeItem('username');
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, username, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
