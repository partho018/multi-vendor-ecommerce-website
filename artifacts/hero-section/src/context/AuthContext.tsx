import { createContext, useContext, useState, ReactNode } from "react";

interface User {
  name: string;
  email: string;
  phone?: string;
}

interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => { success: boolean; error?: string };
  register: (name: string, email: string, password: string, phone?: string) => { success: boolean; error?: string };
  logout: () => void;
  isAuthenticated: boolean;
}

const AuthContext = createContext<AuthContextType | null>(null);

const STORAGE_KEY = "laz_users";
const SESSION_KEY = "laz_session";

function getUsers(): Record<string, { name: string; email: string; phone?: string; password: string }> {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY) || "{}");
  } catch {
    return {};
  }
}

function getSession(): User | null {
  try {
    const raw = sessionStorage.getItem(SESSION_KEY);
    return raw ? JSON.parse(raw) : null;
  } catch {
    return null;
  }
}

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(getSession);

  const login = (email: string, password: string) => {
    const users = getUsers();
    const found = users[email.toLowerCase()];
    if (!found) return { success: false, error: "No account found with this email." };
    if (found.password !== password) return { success: false, error: "Incorrect password." };
    const u: User = { name: found.name, email: found.email, phone: found.phone };
    sessionStorage.setItem(SESSION_KEY, JSON.stringify(u));
    setUser(u);
    return { success: true };
  };

  const register = (name: string, email: string, password: string, phone?: string) => {
    if (!name.trim()) return { success: false, error: "Name is required." };
    if (!email.includes("@")) return { success: false, error: "Enter a valid email address." };
    if (password.length < 6) return { success: false, error: "Password must be at least 6 characters." };
    const users = getUsers();
    if (users[email.toLowerCase()]) return { success: false, error: "An account already exists with this email." };
    users[email.toLowerCase()] = { name, email, phone, password };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(users));
    const u: User = { name, email, phone };
    sessionStorage.setItem(SESSION_KEY, JSON.stringify(u));
    setUser(u);
    return { success: true };
  };

  const logout = () => {
    sessionStorage.removeItem(SESSION_KEY);
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, register, logout, isAuthenticated: !!user }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used within AuthProvider");
  return ctx;
}
