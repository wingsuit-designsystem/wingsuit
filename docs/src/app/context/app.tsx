// app/context/theme.js

'use client';

import { createContext, useContext, useState } from 'react';

const AppContext = createContext({});

export const AppContextProvider = ({ children }) => {
  const [feature, setFeature] = useState('settings');

  return <AppContext.Provider value={{ feature, setFeature }}>{children}</AppContext.Provider>;
};

export const useAppContext = () => useContext(AppContext);
