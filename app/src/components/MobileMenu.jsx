import { useState } from "react";
import { useAuthContext } from "../auth/AuthContextProvider";
import { Link } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";

export default function MobileMenu() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  console.log(isMenuOpen);
  const { isUser } = useAuthContext();
  return (
    <div className="md:hidden bg-gray-800 text-white p-4 space-y-4">
      <ScrollLink
        to="home"
        smooth={true}
        duration={500}
        offset={-70}
        onClick={() => setIsMenuOpen(false)}
        className="block text-lg hover:text-pink-500 cursor-pointer"
      >
        Home
      </ScrollLink>
      <ScrollLink
        to="shop"
        smooth={true}
        duration={500}
        offset={-70}
        onClick={() => setIsMenuOpen(false)}
        className="block text-lg hover:text-pink-500 cursor-pointer"
      >
        Shop
      </ScrollLink>
      <ScrollLink
        to="about"
        smooth={true}
        duration={500}
        offset={-70}
        onClick={() => setIsMenuOpen(false)}
        className="block text-lg hover:text-pink-500 cursor-pointer"
      >
        About Us
      </ScrollLink>
      <ScrollLink
        to="contact"
        smooth={true}
        duration={500}
        offset={-70}
        onClick={() => setIsMenuOpen(false)}
        className="block text-lg hover:text-pink-500 cursor-pointer"
      >
        Contact Us
      </ScrollLink>
      {!isUser ? (
        <Link to="auth">
          <button className="bg-pink-500 text-white px-4 py-2 mt-4 rounded-full text-sm font-medium hover:bg-pink-600 w-full">
            Login
          </button>
        </Link>
      ) : (
        <button className="border border-pink-500 text-white px-4 py-2 mt-4 rounded-full text-sm font-medium hover:bg-pink-600 w-full">
          Logout
        </button>
      )}
    </div>
  );
}
