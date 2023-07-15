import { createContext, useState } from "react";

export const DataContext = createContext();

const DataContextProvider = ({ children }) => {
  const [light, setLight] = useState(true);
  return (
    <DataContext.Provider value={{ light, setLight }}>
      {children}
    </DataContext.Provider>
  );
};

export default DataContextProvider;
