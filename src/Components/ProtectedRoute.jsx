import { Navigate } from "react-router-dom";
import { useContext } from "react";
import { ConnectionContext } from "../Contexts";

export const ProtectedRoute = ({ children }) => {
  const { isAuthenticated } = useContext(ConnectionContext);

  if (!isAuthenticated) {
    return <Navigate to="/" />;
  }

  return children;
};
