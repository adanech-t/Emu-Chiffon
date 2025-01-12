import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import { auth } from "../firebase";

export function useAuth() {
  const navigate = useNavigate();
  const [isUser, setIsUser] = useState(false);
  const [error, setError] = useState(""); 
  const [loading, setLoading] = useState(true);

  /**
   * Handles user login with email and password
   * @param {string} email - The user's email address
   * @param {string} password - The user's password
   */
  const login = async (email, password) => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      setIsUser(true);
      setError("");
      navigate("/");
    } catch (err) {
      setError(err.message || "An error occurred during login.");
    }
  };

  const logout = async () => {
    try {
      await signOut(auth);
      setIsUser(false);
      navigate("/auth");
    } catch (err) {
      setError(err.message || "An error occurred during logout.");
    }
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setIsUser(true);
      } else {
        setIsUser(false);
      }
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  return { isUser, login, logout, error, loading };
}
