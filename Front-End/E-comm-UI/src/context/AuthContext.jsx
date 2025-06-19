import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState({
    token: localStorage.getItem("token"),
    userId: localStorage.getItem("userId"),
    role: localStorage.getItem("role"),
  });

  useEffect(() => {
    localStorage.setItem("token", user.token || "");
    localStorage.setItem("userId", user.userId || "");
    localStorage.setItem("role", user.role || "");
  }, [user]);

  const login = (data) => {
    setUser({
      token: data.token,
      userId: data.userId,
      role: data.role,
    });
  };

  const logout = () => {
    setUser({
      token: "",
      userId: "",
      role: "",
    });
    localStorage.clear();
  };

  return (
    <>
      <AuthContext.Provider value={{ user, login, logout }}>
        {children}
      </AuthContext.Provider>
    </>
  );
}
