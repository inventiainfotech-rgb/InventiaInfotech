import React, { createContext, useContext } from 'react';
import { useSupabaseAuth } from '../hooks/useSupabase';

const AuthContext = createContext(undefined);

export const AuthProvider = ({ children }) => {
  const auth = useSupabaseAuth();

  return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
