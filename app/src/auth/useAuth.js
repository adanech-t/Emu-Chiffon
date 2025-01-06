import { useState } from "react";
import { useNavigate } from "react-router-dom";

export function useAuth() {
  const navigate = useNavigate();
  const [isUser, setIsUser] = useState(false);
  const [error, setError] = useState("");

  const login = (username, password) => {
    // Admin credentials (for demo purposes)
    const adminUsername = "admin";
    const adminPassword = "admin123";

    // Check if credentials match admin credentials
    if (username === adminUsername && password === adminPassword) {
      // Redirect to the home page (or admin dashboard)
      navigate("/");
      setIsUser(true);
    } else {
      // Display error message
      setError("Invalid credentials. Please try again.");
    }
  };

  const logout = () => {
    setIsUser(false)
  };
  return { isUser, login, logout };
}
