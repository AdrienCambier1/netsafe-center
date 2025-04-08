import { createContext, useEffect, useState, useCallback } from "react";
import { jwtDecode } from "jwt-decode";

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
  const [isRefreshing, setIsRefreshing] = useState(false);

  useEffect(() => {
    if (auth.refreshToken) {
      localStorage.setItem("auth", JSON.stringify(auth));
      setIsAuthenticated(true);
    } else {
      localStorage.removeItem("auth");
      setIsAuthenticated(false);
    }
  }, [auth]);

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
      return { success: false };
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

      const loginResult = await login(mail, password);
      return loginResult;
    } catch (error) {
      return { success: false };
    }
  };

  /* const isAccessTokenValid = async () => {
    try {
      if (!auth.accessToken) return false;

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

      return true;
    } catch (error) {
      return false;
    }
  }; */

  /* const refreshAccessToken = async () => {
    if (isRefreshing) return false;

    if (!auth.refreshToken) {
      logout();
      return false;
    }

    setIsRefreshing(true);

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

      return true;
    } catch (error) {
      logout();
      return false;
    } finally {
      setIsRefreshing(false);
    }
  }; */

  const authFetch = async (url, options = {}) => {
    if (!isAuthenticated) {
      logout();
      throw new Error("Non authentifié");
    }

    const authOptions = {
      ...options,
      headers: {
        ...options.headers,
        Authorization: `Bearer ${auth.accessToken}`,
        "Content-Type": options.headers?.["Content-Type"] || "application/json",
      },
    };

    try {
      const response = await fetch(url, authOptions);

      if (response.status === 401) {
        logout();
      }

      return response;
    } catch (error) {
      logout();
      throw new Error(error);
    }
  };

  return (
    <ConnectionContext.Provider
      value={{
        isAuthenticated,
        auth,
        login,
        logout,
        register,
        authFetch,
      }}
    >
      {children}
    </ConnectionContext.Provider>
  );
};
