import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home"; // Your home page component
import Auth from "./pages/Auth"; // The authentication page
import Nav from "./components/Nav";
import AuthContextProvider from "./auth/AuthContextProvider";
import AdminDashboard from "./components/AdminDashboard";
import ItemsContextProvider from "./context/ItemsContextProvider";

const App = () => {
  return (
    <>
      <Router basename="/">
        <AuthContextProvider>
          <ItemsContextProvider>
            <Nav />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/auth" element={<Auth />} />
              <Route path="/admin" element={<AdminDashboard />} />
            </Routes>
          </ItemsContextProvider>
        </AuthContextProvider>
      </Router>
    </>
  );
};

export default App;
