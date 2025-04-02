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

  useEffect(() => {
    if (auth.refreshToken) {
      checkAndRefreshToken();
    }
  }, []);

  const isTokenExpired = useCallback((token) => {
    if (!token) return true;

    try {
      const decoded = jwtDecode(token);
      const currentTime = Date.now() / 1000;

      if (!decoded.exp || decoded.exp < currentTime) {
        return true;
      }

      return decoded.exp - currentTime < 300;
    } catch (error) {
      console.error("Erreur lors du décodage du token:", error);
      return true;
    }
  }, []);

  const checkAndRefreshToken = useCallback(async () => {
    if (!auth.accessToken || isRefreshing) return false;

    if (!isTokenExpired(auth.accessToken)) {
      return true;
    }

    return await refreshAccessToken();
  }, [auth.accessToken, isRefreshing, isTokenExpired]);

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
      console.error("Erreur lors de la connexion:", error);
      return { success: false, error: error.message };
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
      console.error("Erreur lors de l'inscription:", error);
      return { success: false, error: error.message };
    }
  };

  const isAccessTokenValid = async () => {
    try {
      if (!auth.accessToken) return false;

      if (isTokenExpired(auth.accessToken)) {
        const refreshed = await refreshAccessToken();
        return refreshed;
      }

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
      console.error("Erreur lors de la vérification du token:", error);
      return false;
    }
  };

  const refreshAccessToken = async () => {
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
      console.error("Erreur lors du rafraîchissement du token:", error);
      logout();
      return false;
    } finally {
      setIsRefreshing(false);
    }
  };

  const authFetch = async (url, options = {}) => {
    await checkAndRefreshToken();

    if (!isAuthenticated) {
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

    return fetch(url, authOptions);
  };

  useEffect(() => {
    if (!auth.refreshToken) return;

    checkAndRefreshToken();

    const intervalId = setInterval(() => {
      checkAndRefreshToken();
    }, 3 * 60 * 1000);

    return () => clearInterval(intervalId);
  }, [auth.refreshToken, checkAndRefreshToken]);

  return (
    <ConnectionContext.Provider
      value={{
        isAuthenticated,
        auth,
        login,
        logout,
        register,
        isAccessTokenValid,
        authFetch,
        refreshAccessToken,
      }}
    >
      {children}
    </ConnectionContext.Provider>
  );
};
