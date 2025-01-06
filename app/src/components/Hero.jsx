import chiffon5 from "../util/photo_2025-01-01_01-20-14.jpg";
export default function Hero() {
  return (
    <section
      id="home"
      className="relative h-screen bg-cover bg-center bg-fixed"
      style={{
        backgroundImage: `url(${chiffon5})`,
      }}
    >
      <div className="absolute inset-0 bg-transparent/55"></div>
      <div className="relative flex flex-col items-center justify-center h-full text-white text-center px-6">
        <h1 className="text-5xl md:text-6xl font-extrabold mb-6 animate-fade-in">
          Discover Your Unique Style
        </h1>
        <p className="text-lg md:text-xl max-w-2xl mb-8">
          Embrace fashion that reflects your personality. Explore our collection
          of timeless styles and modern trends.
        </p>
        <button className="bg-white text-gray-800 px-6 py-3 rounded-full text-lg font-semibold hover:bg-gray-200 transition-transform transform hover:scale-105">
          Shop Now
        </button>
      </div>
      <div className="absolute bottom-6 w-full flex justify-center">
        <a
          href="#shop"
          className="text-white text-sm font-medium animate-bounce"
        >
          Scroll Down ↓
        </a>
      </div>
    </section>
  );
}
