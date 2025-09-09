import React from 'react';

const ApiContext = React.createContext();

export const ApiProvider = ({ children }) => {
  // Для Vite используйте import.meta.env
  const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3001/api';
  
  return (
    <ApiContext.Provider value={{ API_URL }}>
      {children}
    </ApiContext.Provider>
  );
};

export { ApiContext };