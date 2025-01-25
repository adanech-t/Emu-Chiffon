import React, { useState } from "react";
import Modal from "./components/modal";
import { useItemsContext } from "../../context/ItemsContextProvider";

export default function Shop() {
  const [selectedItem, setSelectedItem] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8; // Set to 8 items per page

  const items = useItemsContext();

  const openModal = (item) => {
    setSelectedItem(item);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedItem(null);
  };

  // Calculate the current items to display based on the page
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = items.slice(indexOfFirstItem, indexOfLastItem);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  // Calculate total pages
  const totalPages = Math.ceil(items.length / itemsPerPage);

  return (
    <section
      id="shop"
      className="min-h-screen px-6 pt-16 flex flex-col items-center bg-gradient-to-b from-gray-100 to-gray-200"
    >
      {/* Title and Pagination in a row */}
      <div className="flex flex-col sm:flex-row justify-between items-center w-full max-w-7xl mb-10">
        <h2 className="text-3xl sm:text-4xl font-semibold text-gray-800 text-center sm:text-left">
          Featured Collections
        </h2>

        {/* Pagination Controls */}
        <div className="flex justify-center items-center space-x-2 sm:space-x-4 mt-4 sm:mt-0">
          <button
            onClick={() => paginate(currentPage - 1)}
            className="px-4 py-2 bg-pink-500 text-white rounded-full disabled:bg-gray-300 disabled:text-gray-500"
            disabled={currentPage === 1}
          >
            Prev
          </button>

          {/* Page Numbers */}
          <div className="flex items-center space-x-2">
            {[...Array(totalPages).keys()].map((number) => (
              <button
                key={number}
                onClick={() => paginate(number + 1)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  currentPage === number + 1
                    ? "bg-pink-500 text-white"
                    : "bg-white text-gray-800 hover:bg-pink-100"
                }`}
              >
                {number + 1}
              </button>
            ))}
          </div>

          <button
            onClick={() => paginate(currentPage + 1)}
            className="px-4 py-2 bg-pink-500 text-white rounded-full disabled:bg-gray-300 disabled:text-gray-500"
            disabled={currentPage === totalPages}
          >
            Next
          </button>
        </div>
      </div>

      {/* Item Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-8 w-full max-w-7xl">
        {currentItems.map((item, index) => (
          <div
            key={index}
            className="relative bg-white rounded-lg shadow-lg overflow-hidden group"
          >
            <img
              src={item.img}
              alt={item.name}
              className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
            />
            {/* Overlay content on top of the image */}
            <div className="absolute inset-0 bg-gradient-to-t from-black opacity-50"></div>
            <div className="absolute bottom-0 left-0 right-0 p-4 space-y-2">
              <h3 className="text-lg sm:text-xl font-semibold text-white">
                {item.name}
              </h3>
              <p className="text-sm sm:text-base text-white">
                {item.description}
              </p>
              <p className="text-xl font-bold text-white">{item.price} birr</p>
              <div className="flex justify-between items-center">
                <button
                  onClick={() => openModal(item)}
                  className="bg-pink-500 text-white px-6 py-2 rounded-full text-sm font-medium hover:bg-pink-600"
                >
                  Order
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {isModalOpen && <Modal item={selectedItem} closeModal={closeModal} />}
    </section>
  );
}
