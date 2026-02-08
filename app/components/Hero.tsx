export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center px-6 md:px-16 overflow-hidden">
      <img
        src="/assets/amadra.png"
        alt=""
        className="absolute inset-0 w-full h-full object-cover pointer-events-none select-none"
      />

      <div className="absolute inset-0 bg-gradient-to-b from-white/90 via-white/60 to-black/80"></div>

      <div className="relative z-10 max-w-2xl mt-24">
        <h1 className="text-4xl md:text-6xl text-black font-bold">
          We are AMADRA
        </h1>

        <p className="text-gray-600 mt-4">
          A small, focused team building practical, well-engineered digital products.
          We believe in shipping real things, learning by doing, and keeping systems simple enough to scale without breaking.
        </p>

        <div className="mt-6 flex gap-4">
          <a
            href="#projects"
            className="px-6 py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition"
          >
            View Projects
          </a>
        </div>
      </div>
    </section>
  );
}
