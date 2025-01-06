import React, { useState } from "react";
import { Link as ScrollLink } from "react-scroll";
import { Link, useLocation } from "react-router-dom";
import { useAuthContext } from "../auth/AuthContextProvider";
import MobileMenu from "./MobileMenu";

export default function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const { isUser, logout } = useAuthContext();

  const { pathname } = useLocation();

  return (
    <nav className="z-20 bg-gray-800 text-white fixed w-full top-0 left-0 shadow-md">
      <div className="max-w-screen-xl mx-auto px-6 py-3 flex items-center justify-between">
        <div className="flex items-center space-x-8">
          {pathname === "/" ? (
            <ScrollLink
              to="home"
              smooth={true}
              duration={500}
              offset={-70} // Adjust for fixed header height
              className="text-2xl font-bold cursor-pointer"
            >
              Emu Chiffon
            </ScrollLink>
          ) : (
            <Link to="/" className="text-2xl font-bold cursor-pointer">
              Emu Chiffon
            </Link>
          )}

          <ul className="hidden md:flex space-x-10 ml-8">
            <li>
              {pathname === "/" ? (
                <ScrollLink
                  to="home"
                  smooth={true}
                  duration={200}
                  offset={-70}
                  className="text-lg/2 font-medium text-white hover:text-pink-500 transition duration-300 cursor-pointer"
                >
                  Home
                </ScrollLink>
              ) : (
                <Link
                  to="/"
                  className="text-lg/2 font-medium text-white hover:text-pink-500 transition duration-300 cursor-pointer"
                >
                  Home
                </Link>
              )}
            </li>
            <li>
              {pathname === "/" ? (
                <ScrollLink
                  to="shop"
                  smooth={true}
                  duration={200}
                  offset={0}
                  className="text-lg/2 font-medium text-white hover:text-pink-500 transition duration-300 cursor-pointer"
                >
                  Shop
                </ScrollLink>
              ) : (
                <Link
                  to="/"
                  className="text-lg/2 font-medium text-white hover:text-pink-500 transition duration-300 cursor-pointer"
                >
                  Shop
                </Link>
              )}
            </li>
            <li>
              {pathname === "/" ? (
                <ScrollLink
                  to="about"
                  smooth={true}
                  duration={200}
                  offset={0}
                  className="text-lg/2 font-medium text-white hover:text-pink-500 transition duration-300 cursor-pointer"
                >
                  About Us
                </ScrollLink>
              ) : (
                <Link
                  to="/"
                  className="text-lg/2 font-medium text-white hover:text-pink-500 transition duration-300 cursor-pointer"
                >
                  About Us
                </Link>
              )}
            </li>
            {isUser && (
              <li>
                <Link
                  to="/admin"
                  className="text-lg/2 font-medium text-white hover:text-pink-500 transition duration-300 cursor-pointer"
                >
                  Admin Dashboard
                </Link>
              </li>
            )}
          </ul>
        </div>

        {/* Login Button */}
        <div className="hidden md:block">
          {!isUser ? (
            <Link to="auth">
              <button className="bg-pink-500 text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-pink-600">
                Login
              </button>
            </Link>
          ) : (
            <button
              className="border border-pink-500 text-white px-3 py-2 rounded-full text-sm font-medium hover:bg-pink-600"
              onClick={logout}
            >
              Logout
            </button>
          )}
        </div>

        {/* Mobile menu toggle */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-2xl">
            {isMenuOpen ? "✕" : "☰"}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && <MobileMenu />}
    </nav>
  );
}
