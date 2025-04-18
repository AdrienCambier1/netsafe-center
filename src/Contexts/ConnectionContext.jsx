import { createContext, useEffect, useState, useCallback } from "react";

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

  const login = async (mail, password) => {
    const response = await fetch(
      "https://netsafe-center-backend.vercel.app/Login/login",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ mail, password }),
      }
    ).catch(() => ({ ok: false }));

    if (response.ok) {
      const data = await response.json();

      setAuth({
        accessToken: data.accessToken,
        refreshToken: data.refreshToken,
        identifiant: data.identifiant,
      });

      return { success: true };
    }

    return { success: false };
  };

  const logout = () => {
    setAuth({ accessToken: null, refreshToken: null, identifiant: null });
  };

  const register = async (identifiant, mail, password) => {
    const response = await fetch(
      "https://netsafe-center-backend.vercel.app/Login/register",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ identifiant, mail, password }),
      }
    ).catch(() => ({ ok: false }));

    if (response.ok) {
      return login(mail, password);
    }

    return { success: false };
  };

  const authFetch = async (url, options = {}) => {
    if (!isAuthenticated) {
      logout();
      return { ok: false, status: 401 };
    }

    const authOptions = {
      ...options,
      headers: {
        ...options.headers,
        Authorization: `Bearer ${auth.accessToken}`,
        "Content-Type": options.headers?.["Content-Type"] || "application/json",
      },
    };

    const response = await fetch(url, authOptions).catch(() => {
      logout();
      return { ok: false, status: 0 };
    });

    if (response.status === 401) {
      logout();
    }

    return response;
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
