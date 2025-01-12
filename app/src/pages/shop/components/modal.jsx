import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

export default function Modal({ item, closeModal }) {
  const order = () => {};

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 h-screen">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md relative h-auto max-h-[90%] overflow-hidden">
        {/* Close Button */}
        <FontAwesomeIcon
          icon={faXmark}
          onClick={closeModal}
          size="xl"
          className="cursor-pointer absolute top-4 right-4 z-10 text-pink-500 hover:text-pink-700 transition-colors"
        />

        {/* Image with Overlay Text */}
        <div className="relative w-full h-[60%] mb-4">
          <img
            src={item.img}
            alt={item.name}
            className="w-full h-full object-cover rounded-lg"
          />
          {/* Price and Name Overlay */}
          <div className="absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-black via-transparent to-transparent rounded-b-lg">
            <div className="text-white text-left">
              <h3 className="text-2xl font-semibold tracking-tight">
                {item.name}
              </h3>
              <p className="text-lg mt-1 font-medium">{item.price}</p>
            </div>
          </div>
        </div>

        {/* Order Button */}
        <div className="flex justify-center mt-4">
          <button
            onClick={order}
            className="w-full bg-pink-500 text-white py-3 rounded-md text-lg font-semibold hover:bg-pink-600 transition-colors"
          >
            Order Now
          </button>
        </div>
      </div>
    </div>
  );
}
