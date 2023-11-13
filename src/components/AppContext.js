// AppContext.js
import React, { createContext, useContext, useState } from 'react';
const AppContext = createContext();


export const AppProvider = ({ children }) => {
  const [view, setView] = useState('inicio');
 
  const changeView = (newView) => {
    setView(newView);
  };

  return (
    <AppContext.Provider value={{ view, changeView }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  return useContext(AppContext);
};
