import { createContext, useContext } from "react";
import { useAuth } from "./useAuth";

// Create AuthContext with default value as null or an empty object
export const AuthContext = createContext(null);

// Create a custom hook to use AuthContext
export function useAuthContext() {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error(
      "useDashBoardContext must be used within DashBoardContextProvider"
    );
  }
  return context;
}

// Define the AuthProvider component
export default function AuthProvider({ children }) {
  const { login, logout, isUser } = useAuth(); // Assume useAuth() returns these values
  const context = {
    login,
    logout,
    isUser,
  };

  return (
    <AuthContext.Provider value={context}>{children}</AuthContext.Provider>
  );
}
