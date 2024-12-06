import { createContext, useEffect, useState } from "react";

export const ConnectionContext = createContext();

export const ConnectionProvider = ({ children }) => {
  const initialConnection =
    JSON.parse(localStorage.getItem("connection")) || false;
  const [connection, setConnection] = useState(initialConnection);

  useEffect(() => {
    localStorage.setItem("connection", JSON.stringify(connection));
  }, [connection]);

  return (
    <ConnectionContext.Provider value={{ connection, setConnection }}>
      {children}
    </ConnectionContext.Provider>
  );
};
