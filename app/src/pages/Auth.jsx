import React, { useState } from "react";
import { useAuthContext } from "../auth/AuthContextProvider";

const Auth = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showForgotPassword, setShowForgotPassword] = useState(false);
  const [email, setEmail] = useState(""); // For the forgot password functionality
  const [message, setMessage] = useState("");

  const { login, forgotPassword } = useAuthContext(); // Assume `forgotPassword` is a method in your auth context

  const handleLogin = (e) => {
    e.preventDefault();
    login(username, password);
  };

  const handleForgotPasswordSubmit = (e) => {
    e.preventDefault();
    forgotPassword(email)
      .then(() => {
        setMessage("Password reset email sent successfully.");
        setShowForgotPassword(false); // Hide the forgot password section after submission
      })
      .catch(() => {
        setMessage("Failed to send password reset email. Please try again.");
      });
  };

  return (
    <div className="font-sans bg-gray-50 min-h-screen flex items-center justify-center bg-cover bg-center">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full sm:w-96">
        {!showForgotPassword ? (
          <>
            <h2 className="text-3xl font-bold text-center mb-6">Admin Login</h2>
            <form onSubmit={handleLogin}>
              <div className="mb-4">
                <label
                  htmlFor="username"
                  className="block text-lg font-medium text-gray-700"
                >
                  Username
                </label>
                <input
                  type="text"
                  id="username"
                  name="username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  required
                  className="w-full mt-2 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
                />
              </div>

              <div className="mb-6">
                <label
                  htmlFor="password"
                  className="block text-lg font-medium text-gray-700"
                >
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="w-full mt-2 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-pink-500 text-white py-3 rounded-md text-lg font-semibold hover:bg-pink-600"
              >
                Log In
              </button>
            </form>

            <div className="mt-4 text-center">
              <button
                onClick={() => setShowForgotPassword(true)}
                className="text-pink-500 hover:underline text-sm"
              >
                Forgot Password?
              </button>
            </div>
          </>
        ) : (
          <>
            <h2 className="text-2xl font-bold text-center mb-6">
              Reset Password
            </h2>
            <form onSubmit={handleForgotPasswordSubmit}>
              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block text-lg font-medium text-gray-700"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full mt-2 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-pink-500 text-white py-3 rounded-md text-lg font-semibold hover:bg-pink-600"
              >
                Send Reset Email
              </button>
            </form>

            <div className="mt-4 text-center">
              <button
                onClick={() => setShowForgotPassword(false)}
                className="text-gray-500 hover:underline text-sm"
              >
                Back to Login
              </button>
            </div>
          </>
        )}

        {message && (
          <p className="mt-4 text-center text-sm text-green-600">{message}</p>
        )}
      </div>
    </div>
  );
};

export default Auth;
