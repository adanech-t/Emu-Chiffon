import React, { useState } from "react";
import { useItemsContext } from "../context/ItemsContextProvider";

const AdminDashboard = () => {
  const list = useItemsContext();
  const [items, setItems] = useState([...list]);
  const [itemName, setItemName] = useState("");
  const [itemPrice, setItemPrice] = useState("");
  const [itemImage, setItemImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const [searchTerm, setSearchTerm] = useState(""); // Search term state

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setItemImage(file);
      setImagePreview(URL.createObjectURL(file)); // Generate a preview URL
    }
  };

  const handleAddItem = (e) => {
    e.preventDefault();

    if (itemName && itemPrice && itemImage) {
      const newItem = {
        id: Date.now(), // Unique ID for the item
        name: itemName,
        price: parseFloat(itemPrice),
        image: URL.createObjectURL(itemImage),
      };
      setItems([...items, newItem]);
      setItemName("");
      setItemPrice("");
      setItemImage(null);
      setImagePreview(null); // Clear the preview after submission
    }
  };

  const handleRemoveItem = (id) => {
    setItems(items.filter((item) => item.id !== id));
  };

  const handleEditItem = () => {};

  // Filtered items based on the search term
  const filteredItems = items.filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="md:max-h-screen bg-gray-100 pt-6 flex justify-center flex-col md:flex-row gap-6 px-6 overflow-hidden">
      {/* Add Item Form */}
      <div className="w-fit h-screen py-16">
        <div className="w-full max-w-md bg-white rounded-lg shadow-md p-6 h-fit">
          <h1 className="text-2xl font-bold mb-6">Admin Dashboard</h1>
          <form onSubmit={handleAddItem} className="mb-6">
            <h2 className="text-xl font-semibold mb-4">Add New Item</h2>
            <div className="grid grid-cols-1 gap-4 mb-4">
              <input
                type="text"
                placeholder="Item Name"
                className="p-3 border rounded focus:outline-none focus:ring-2 focus:ring-pink-500"
                value={itemName}
                onChange={(e) => setItemName(e.target.value)}
              />
              <input
                type="number"
                placeholder="Item Price"
                className="p-3 border rounded focus:outline-none focus:ring-2 focus:ring-pink-500"
                value={itemPrice}
                onChange={(e) => setItemPrice(e.target.value)}
              />
              <input
                type="file"
                accept="image/*"
                className="p-3 border rounded focus:outline-none focus:ring-2 focus:ring-pink-500"
                onChange={handleImageChange}
              />
            </div>

            {/* Image Preview */}
            {imagePreview && (
              <div className="mb-4">
                <h3 className="text-lg font-semibold mb-2">Image Preview:</h3>
                <img
                  src={imagePreview}
                  alt="Preview"
                  className="w-48 h-48 object-cover rounded border"
                />
              </div>
            )}

            <button
              type="submit"
              className="w-full px-6 py-2 bg-pink-500 text-white rounded hover:bg-pink-600 transition"
            >
              Add Item
            </button>
          </form>
        </div>
        <div className="mt-6 bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold mb-4">Inventory Summary</h2>
          <p className="text-gray-700">
            <span className="font-semibold">Total Items:</span> {items.length}
          </p>
          <p className="text-gray-700">
            <span className="font-semibold">Total Value:</span> $
            {items
              .reduce((total, item) => total + (parseInt(item.price) || 0), 0)
              .toFixed(2)}
          </p>
        </div>
      </div>

      {/* Items List */}
      <div className="pt-16 h-screen flex md:flex-1 flex-col">
        <h2 className="text-2xl font-bold pb-4 sticky">Items List</h2>

        {/* Search Bar */}
        <div className="mb-6">
          <input
            type="text"
            placeholder="Search by Item Name"
            className="p-3 border rounded w-full focus:outline-none focus:ring-2 focus:ring-pink-500"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <div className="h-[85%] overflow-y-scroll overflow-x-hidden pb-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredItems.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-lg shadow-md overflow-hidden relative flex flex-col w-full"
              >
                {/* Ellipsis Menu */}
                <div className="absolute top-2 right-2 z-10">
                  <div className="relative group">
                    <button className="p-2 text-white hover:text-gray-700 focus:outline-none">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-5 h-5"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M12 6.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 18.75a.75.75 0 110-1.5.75.75 0 010 1.5z"
                        />
                      </svg>
                    </button>

                    {/* Dropdown Menu */}
                    <div className="absolute right-0 mt-2 w-32 bg-white rounded-lg shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-200 z-10">
                      <button
                        onClick={() => handleEditItem(item.id)}
                        className="block w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 text-left"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => handleRemoveItem(item.id)}
                        className="block w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 text-left"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </div>

                {/* Image */}
                <div className="h-48 w-full relative">
                  <img
                    src={item.img}
                    alt={item.name}
                    className="h-full w-full object-cover"
                  />
                </div>

                {/* Content */}
                <div className="p-4 flex-1 flex flex-col justify-between">
                  <h3 className="text-lg font-semibold mb-2 text-gray-800">
                    {item.name}
                  </h3>
                  <p className="text-gray-600 text-sm">${item.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
