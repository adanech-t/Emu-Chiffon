import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";

import Modal from "./components/modal";
import { useItemsContext } from "../../context/ItemsContextProvider";

export default function Shop() {
  const [selectedItem, setSelectedItem] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const items = useItemsContext();

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
                  
                  <button
                    onClick={() => openModal(item)}
                    className="z-20 bg-pink-500 text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-pink-600"
                  >
                    Order
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

      {isModalOpen && <Modal item={selectedItem} closeModal={closeModal} />}
    </section>
  );
}
