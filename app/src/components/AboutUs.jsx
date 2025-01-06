import React from "react";
import bg from "../util/photo_2025-01-01_01-20-14-removebg-preview.png";

function AboutUs() {
  return (
    <section id="about" className="flex flex-col h-screen">
      <div className="bg-gray-100 py-16 px-6 md:px-16 flex items-center justify-center h-[90vh] w-full relative">
        {/* Contact Info - Hidden on mobile */}

        {/* Right Text Section */}
        <div className="w-full md:w-1/2 px-6 md:px-12 flex flex-col justify-center items-center md:items-start text-center md:text-left">
          <h2 className="text-4xl font-extrabold mb-4 text-gray-800">
            About Us
          </h2>
          <p className="text-lg mb-6 text-gray-600 max-w-lg mx-auto md:mx-0 text-justify">
            We are a clothing brand that focuses on providing quality fashion
            for everyone. Our goal is to offer affordable, stylish clothing that
            fits your lifestyle.
          </p>
          <p className="text-lg mb-6 text-gray-600 max-w-lg mx-auto md:mx-0 text-justify">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugit
            nesciunt non quo veritatis dolore, sapiente, cupiditate asperiores
            ea ut quisquam iusto eaque adipisci quia laboriosam sint dolorum
            voluptatem nemo cum.
          </p>
          
          <div className="flex items-center space-x-6 text-gray-700 text-sm md:text-base md:flex pb-6">
            <div className="flex items-center space-x-2">
              <i className="fab fa-telegram-plane text-pink-500"></i>
              <a
                href="https://t.me/YourUsername"
                className="hover:text-pink-500 transition"
                target="_blank"
                rel="noopener noreferrer"
              >
                @YourUsername
              </a>
            </div>
            <div className="flex items-center space-x-2">
              <i className="fab fa-whatsapp text-green-500"></i>
              <a
                href="https://wa.me/123456789"
                className="hover:text-pink-500 transition"
                target="_blank"
                rel="noopener noreferrer"
              >
                +1 234 567 89
              </a>
            </div>
            <div className="flex items-center space-x-2">
              <i className="fas fa-phone-alt text-blue-500"></i>
              <a
                href="tel:+123456789"
                className="hover:text-pink-500 transition"
              >
                +1 234 567 89
              </a>
            </div>
          </div>
          <button className="bg-pink-500 text-white px-8 py-4 rounded-full text-lg font-semibold shadow-lg hover:bg-pink-600 transition-all transform hover:scale-105">
            Learn More
          </button>
        </div>
      </div>

      <footer id="contact" className="bg-gray-800 text-white py-6 w-full">
        <div className="container mx-auto text-center">
          <p className="text-sm">
            &copy; 2024 Clothing Brand. All rights reserved.
          </p>
        </div>
      </footer>
    </section>
  );
}

export default AboutUs;
