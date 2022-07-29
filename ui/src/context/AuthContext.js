import React, { useContext, useEffect, useState } from "react";
import { API_BASE_URL, AUTH_BASE_URL } from "../common/constants";

export const AuthContext = React.createContext();
export const useAuth = () => useContext(AuthContext);
export const AuthProvider = ({
    children
}) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [user, setUser] = useState();
    const [isLoading, setIsLoading] = useState(true);

    const getUser = async () => {
      try {
        const params = {
          headers: {
            'Content-Type': 'application/json',
          },
          method: 'GET',
          credentials: "include"
        };
        const response = await fetch(API_BASE_URL + '/api/auth/me', params);
        const json = await response.json();

        setIsAuthenticated(true);
        setUser(json.claims);
      } catch(e) {
        setIsAuthenticated(false);
      }
      setIsLoading(false);
    }

    useEffect(() => {
        getUser();
    }, []);

    const login = () => {
        window.location.href = AUTH_BASE_URL + '/datawiza/?dw_from_uri=' + encodeURIComponent(window.location.origin);
    }

    const logout = () => {
        window.location.href = AUTH_BASE_URL + '/datawiza/ab-logout';
    }

    return (
        <AuthContext.Provider
            value={{
                isAuthenticated,
                user,
                isLoading,
                login,
                logout
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};