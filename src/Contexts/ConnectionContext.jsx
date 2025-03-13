import { createContext, useEffect, useState, useContext } from "react";

export const ConnectionContext = createContext();

export const ConnectionProvider = ({ children }) => {
  const initialAuth = JSON.parse(localStorage.getItem("auth")) || {
    accessToken: null,
    refreshToken: null,
    identifiant: null,
  };

  const [auth, setAuth] = useState(initialAuth);
  const [isAuthenticated, setIsAuthenticated] = useState(
    !!initialAuth.refreshToken
  );

  useEffect(() => {
    if (auth.refreshToken) {
      localStorage.setItem("auth", JSON.stringify(auth));
      setIsAuthenticated(true);
    } else {
      localStorage.removeItem("auth");
      setIsAuthenticated(false);
    }
  }, [auth]);

  useEffect(() => {
    if (auth.refreshToken) {
      isAccessTokenValid();
    }
  }, []);

  const login = async (mail, password) => {
    try {
      const requestBody = {
        mail: mail,
        password: password,
      };

      const response = await fetch(
        "https://netsafe-center-backend.vercel.app/Login/login",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(requestBody),
        }
      );

      if (!response.ok) {
        return { success: false };
      }

      const data = await response.json();

      setAuth({
        accessToken: data.accessToken,
        refreshToken: data.refreshToken,
        identifiant: data.identifiant,
      });

      return { success: true };
    } catch (error) {
      throw new Error(error);
    }
  };

  const logout = () => {
    setAuth({ accessToken: null, refreshToken: null, identifiant: null });
  };

  const register = async (identifiant, mail, password) => {
    try {
      const requestBody = {
        identifiant: identifiant,
        mail: mail,
        password: password,
      };

      const response = await fetch(
        "https://netsafe-center-backend.vercel.app/Login/register",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(requestBody),
        }
      );

      if (!response.ok) {
        return { success: false };
      }

      login(mail, password);
      return { success: true };
    } catch (error) {
      throw new Error(error);
    }
  };

  const isAccessTokenValid = async () => {
    try {
      const response = await fetch(
        "https://netsafe-center-backend.vercel.app/protected",
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${auth.accessToken}`,
          },
        }
      );

      if (!response.ok) {
        const refreshed = await refreshAccessToken();
        return refreshed;
      }

      console.log(response);
    } catch (error) {
      throw new Error(error);
    }
  };

  const refreshAccessToken = async () => {
    try {
      const response = await fetch(
        "https://netsafe-center-backend.vercel.app/Login/refresh",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ refreshToken: auth.refreshToken }),
        }
      );

      if (!response.ok) {
        logout();
        return false;
      }

      const data = await response.json();

      setAuth((prevAuth) => ({
        ...prevAuth,
        accessToken: data.accessToken,
      }));
    } catch (error) {
      throw new Error(error);
    }
  };

  return (
    <ConnectionContext.Provider
      value={{ isAuthenticated, auth, login, logout, register }}
    >
      {children}
    </ConnectionContext.Provider>
  );
};
