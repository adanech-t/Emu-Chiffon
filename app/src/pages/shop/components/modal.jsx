export default function Modal({item, closeModal}) {
    const order =()=>{

    }
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 h-screen">
      <div className="bg-white p-8 rounded-lg shadow-lg w-11/12 max-w-md h-[80%] relative">
        <button
          onClick={closeModal}
          className="absolute top-2 right-4 text-gray-500 hover:text-gray-700"
        >
          &#10005; 
        </button>
        <img
          src={item.img}
          className="w-full h-[75%] object-cover mb-4 rounded"
          alt="Product"
        />
        <h3 className="text-2xl font-semibold mb-2">{item.name}</h3>
        <p className="text-gray-500 mb-4">{item.price}</p>
        <div className="flex gap-4 mt-4">
          <button
            onClick={order}
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
  );
}
