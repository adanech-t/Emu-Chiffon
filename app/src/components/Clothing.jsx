import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";

import hoodie from "../util/one.jpg";
import chiffon2 from "../util/two.jpg";
import chiffon3 from "../util/three.jpg";
import chiffon4 from "../util/four.jpg";

export default function Clothings() {
  const [selectedItem, setSelectedItem] = useState(null); // State to store selected item details
  const [isModalOpen, setIsModalOpen] = useState(false); // State to toggle modal visibility

  const items = [
    { img: hoodie, name: "Men's Hoodie", price: "$55.00" },
    { img: chiffon2, name: "Chiffon Dress", price: "$45.00" },
    { img: chiffon3, name: "Summer Top", price: "$35.00" },
    { img: chiffon4, name: "Casual Jacket", price: "$65.00" },
    { img: chiffon2, name: "Chiffon Dress", price: "$45.00" },
    { img: chiffon3, name: "Summer Top", price: "$35.00" },
    { img: chiffon4, name: "Casual Jacket", price: "$65.00" },
  ];

  const openModal = (item) => {
    setSelectedItem(item);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedItem(null);
  };

  return (
    <section
      id="shop"
      className="h-screen px-6 pt-16 flex items-center flex-col justify-center"
      style={{
        background: "linear-gradient(to bottom, #f7f7f7, #eaeaea)",
      }}
    >
      <h2 className="text-3xl font-bold text-center mb-12">
        Featured Collections
      </h2>
      <div className="relative w-full">
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={20}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 2 },
            768: { slidesPerView: 3 },
            1024: { slidesPerView: 4 },
          }}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          pagination={{ clickable: true }}
          className="w-full"
        >
          {items.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="relative bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                <img src={item.img} alt={item.name} className="object-center" />
                <div className="absolute bottom-0 left-0 p-4">
                  <h3 className="text-xl font-semibold mb-2">{item.name}</h3>
                  <p className="text-gray-500 mb-4">{item.price}</p>
                  <button
                    onClick={() => openModal(item)}
                    className="z-20 bg-pink-500 text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-pink-600"
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Custom Navigation Buttons */}
        <div
          className="swiper-button-prev absolute left-4 top-1/2 transform -translate-y-1/2 bg-pink-500 text-white w-40 h-40 flex items-center justify-center rounded-full hover:bg-pink-600 shadow-lg transition text-xl font-bold"
          style={{ width: "3.75rem", height: "3.75rem", color: "white" }}
        >
          &#10094; {/* Left Arrow */}
        </div>
        <div
          className="swiper-button-next absolute right-4 top-1/2 transform -translate-y-1/2 bg-pink-500 text-white w-20 h-20 flex items-center justify-center rounded-full hover:bg-pink-600 shadow-lg transition text-xl font-bold"
          style={{ width: "3.75rem", height: "3.75rem", color: "white" }}
        >
          &#10095; {/* Right Arrow */}
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 h-screen">
          <div className="bg-white p-8 rounded-lg shadow-lg w-11/12 max-w-md h-[80%] relative">
            <button
              onClick={closeModal}
              className="absolute top-2 right-4 text-gray-500 hover:text-gray-700"
            >
              &#10005; {/* Close Icon */}
            </button>
            <img
              src={selectedItem.img}
              className="w-full h-[75%] object-cover mb-4 rounded"
              alt="Product"
            />
            <h3 className="text-2xl font-semibold mb-2">{selectedItem.name}</h3>
            <p className="text-gray-500 mb-4">{selectedItem.price}</p>
            <div className="flex gap-4 mt-4">
              <button
                onClick={() => {
                  console.log("Order button clicked");
                  // Add logic for ordering the product
                }}
                className="flex-1 bg-green-500 text-white py-2 rounded-md text-lg font-semibold hover:bg-green-600"
              >
                Order
              </button>
              <button
                onClick={closeModal}
                className="flex-1 bg-pink-500 text-white py-2 rounded-md text-lg font-semibold hover:bg-pink-600"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
