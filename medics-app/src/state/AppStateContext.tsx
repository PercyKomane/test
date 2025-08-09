import React, { createContext, useContext, useMemo, useState } from 'react';

export type AppState = {
  isOnboarded: boolean;
  isAuthenticated: boolean;
  completeOnboarding: () => void;
  login: () => void;
  logout: () => void;
};

const AppStateContext = createContext<AppState | undefined>(undefined);

export function AppStateProvider({ children }: { children: React.ReactNode }) {
  const [isOnboarded, setIsOnboarded] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const value = useMemo<AppState>(() => ({
    isOnboarded,
    isAuthenticated,
    completeOnboarding: () => setIsOnboarded(true),
    login: () => setIsAuthenticated(true),
    logout: () => setIsAuthenticated(false),
  }), [isOnboarded, isAuthenticated]);

  return <AppStateContext.Provider value={value}>{children}</AppStateContext.Provider>;
}

export function useAppState(): AppState {
  const ctx = useContext(AppStateContext);
  if (!ctx) throw new Error('useAppState must be used within AppStateProvider');
  return ctx;
}