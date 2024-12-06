import { createContext, useEffect, useState } from "react";

export const ConnectionContext = createContext();

export const ConnectionProvider = ({ children }) => {
  const initialConnection = localStorage.getItem("connection") || false;
  const [connection, setConnection] = useState(initialConnection);

  useEffect(() => {
    localStorage.setItem("connection", connection);
  }, [connection]);

  return (
    <ConnectionContext.Provider value={{ connection, setConnection }}>
      {children}
    </ConnectionContext.Provider>
  );
};
