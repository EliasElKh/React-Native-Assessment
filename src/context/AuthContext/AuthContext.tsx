import React, { createContext, useContext, useState, ReactNode } from 'react';
import { AuthContextType } from './AuthContex.types.ts';

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isVerified, setIsVerified] = useState(false); // Track OTP verification status

  const login = () => setIsLoggedIn(true);
  const logout = () => setIsLoggedIn(false);
  const verifyOTP = () => setIsVerified(true); // Set the user as verified

  return (
    <AuthContext.Provider value={{ isLoggedIn, isVerified, login, logout, verifyOTP }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used inside AuthProvider');
  }
  return context;
};
