import React from "react";
import Hero from "../components/Hero";
import AboutUs from "../components/AboutUs";
import Shop from "./shop/shop";
// import { useAuthContext } from "../auth/AuthContextProvider";

const HomePage = () => {
  // const { isUser } = useAuthContext();
  return (
    <div className="font-sans bg-gray-50">
      <Hero />
      {/* <Clothings /> */}
      <Shop/>
      <AboutUs />
      {/* <AdminDashboard /> */}
    </div>
  );
};

export default HomePage;
