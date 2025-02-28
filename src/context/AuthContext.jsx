import { createContext, useContext, useState, useEffect } from "react";

// Create authentication context
const AuthContext = createContext(null);

// AuthProvider component to wrap around the app
export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  // Simulate fetching user authentication state from localStorage or API
  useEffect(() => {
    const storedUser = localStorage.getItem("tasklyUser");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  // Function to handle login
  const login = (userData) => {
    setUser(userData);
    localStorage.setItem("tasklyUser", JSON.stringify(userData));
  };

  // Function to handle logout
  const logout = () => {
    setUser(null);
    localStorage.removeItem("tasklyUser");
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

// Custom hook for accessing AuthContext
export function useAuth() {
  return useContext(AuthContext);
}
