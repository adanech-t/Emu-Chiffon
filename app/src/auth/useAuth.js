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
  const [isUser, setIsUser] = useState(false); // Tracks if the user is logged in
  const [error, setError] = useState(""); // Tracks error messages
  const [loading, setLoading] = useState(true); // Tracks the initial loading state

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
      navigate("/"); // Redirect to the home page
    } catch (err) {
      setError(err.message || "An error occurred during login.");
    }
  };

  /**
   * Handles user logout
   */
  const logout = async () => {
    try {
      await signOut(auth);
      setIsUser(false);
      navigate("/auth"); // Redirect to the login page
    } catch (err) {
      setError(err.message || "An error occurred during logout.");
    }
  };

  /**
   * Monitor the user's authentication state on mount
   */
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setIsUser(true); // User is logged in
      } else {
        setIsUser(false); // User is not logged in
      }
      setLoading(false); // Authentication state has been checked
    });

    // Cleanup subscription on component unmount
    return () => unsubscribe();
  }, []);

  return { isUser, login, logout, error, loading };
}
