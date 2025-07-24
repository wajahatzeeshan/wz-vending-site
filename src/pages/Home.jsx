import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function Home() {
  return (
    <section className="min-h-screen bg-gray-50 dark:bg-gray-900 flex flex-col items-center justify-center px-6 text-center">
      <img
        src={import.meta.env.BASE_URL + "logo.png"}
        alt="logo"
        className="w-24 h-24 mb-6 animate-bounce"
      />
 <h1 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-gray-100 leading-tight">
        Zaroon Zayan Vending
      </h1>

      <p className="mt-4 text-lg text-gray-600 dark:text-gray-300 max-w-xl">
        Premium vending solutions for workplaces, schools, gyms and beyond —
        freshness, convenience, and style all in one.
      </p>
      <br/>
      <div className="w-full max-w-2xl max-h-[400px] overflow-hidden mb-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          spaceBetween={20}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          loop
        >
          {["mock_1.png", "mock_2.png"].map((img, i) => (
            <SwiperSlide key={i} className="p-4">
              <img
                src={import.meta.env.BASE_URL + img}
                alt={`Vending mockup ${i + 1}`}
                className="w-full h-full max-h-[300px] object-contain rounded-xl mx-auto"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

     
      <a
        href={import.meta.env.BASE_URL + "contact"}
        className="mt-8 inline-block px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white text-lg rounded-full shadow-md transition duration-300 ease-in-out"
      >
        Get Started
      </a>
    </section>
  );
}