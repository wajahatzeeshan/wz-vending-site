export default function Home() {
  return (
    <section className="min-h-screen bg-gray-50 flex flex-col items-center justify-center px-6 text-center">
      <img
        src="/logo.png"
        alt="Zaroon Vending Logo"
        className="w-24 h-24 mb-6 animate-bounce"
      />

      <h1 className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight">
        Zaroon Zayan Vending
      </h1>

      <p className="mt-4 text-lg text-gray-600 max-w-xl">
        Premium vending solutions for workplaces, schools, gyms and beyond —
        freshness, convenience, and style all in one.
      </p>

      <a
        href="/contact"
        className="mt-8 inline-block px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white text-lg rounded-full shadow-md transition duration-300 ease-in-out"
      >
        Get Started
      </a>
    </section>
  );
}