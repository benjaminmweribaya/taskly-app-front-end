import { createContext, useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import api from "../api/axios";

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const checkSession = async () => {
      try {
        const token = localStorage.getItem("access_token");
        if (!token) throw new Error("No token available");

        const response = await api.get("/session/");
        setUser(response.data.user);
      } catch (error) {
        setUser(null);
      } finally {
        setLoading(false);
      }
    };
    checkSession();
  }, []);

  const register = async (userData) => {
    try {
      const response = await api.post("/register/", userData);
      localStorage.setItem("access_token", response.data.access_token);
      setUser(response.data.user);
      navigate(`/workspace/${response.data.user.workspace_id}`);
      return { success: true };
    } catch (error) {
      return { success: false, message: error.response?.data?.error || "Registration failed" };
    }
  };

  const login = async (credentials) => {
    try {
      const response = await api.post("/login/", credentials);
      localStorage.setItem("access_token", response.data.access_token);
      setUser(response.data.user);
      navigate(`/workspace/${response.data.user.workspace_id}`);
      return { success: true };
    } catch (error) {
      return { success: false, message: error.response?.data?.error || "Login failed" };
    }
  };


  const logout = async () => {
    try {
      await api.delete("/logout/");
      localStorage.removeItem("access_token");
      setUser(null);
      navigate("/login");
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  return (
    <AuthContext.Provider value={{ user, register, login, logout, loading }}>
      {!loading && children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
