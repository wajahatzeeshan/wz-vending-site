import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function Home() {
  return (
    <section className="min-h-screen bg-gray-50 flex flex-col items-center justify-center px-6 text-center">
      <img
        src={import.meta.env.BASE_URL + "logo.png"}
        alt="Zaroon Vending Logo"
        className="w-24 h-24 mb-6 animate-bounce"
      />

      <div className="mt-12 w-full max-w-4xl">

  <Swiper
    modules={[Navigation, Pagination]}
    spaceBetween={20}
    slidesPerView={1}
    navigation
    pagination={{ clickable: true }}
    loop
    className="rounded-lg shadow-lg"
  >
    {["mock_1.png", "mock_2.png"].map((img, i) => (
      <SwiperSlide key={i}>
        <img
          src={`/wz-vending-site/${img}`}
          alt={`Vending mockup ${i + 1}`}
          className="w-full h-auto rounded-xl border"
          autoplay={{ delay: 5000, disableOnInteraction: false }}
        />
      </SwiperSlide>
    ))}
  </Swiper>
</div>



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