import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Phone } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";


export default function Home() {
  return (
    <div className="min-h-screen bg-white text-gray-800 font-[Aptos,sans-serif]">
      {/* Hero Section */}
      <header
        className="relative h-[60vh] bg-cover bg-center flex items-center justify-center text-white text-center"
        style={{ backgroundImage: "url('/wz-vending-site/mock_1.png')" }}
      >
        <div className="bg-black/50 p-6 rounded-lg">
          <h1 className="text-4xl font-bold mb-2">Zaroon Zayan Enterprise</h1>
          <p className="text-lg">Smart vending for modern spaces</p>
          <a href="mailto:contact@zaroonvending.co.uk">
            <button className="mt-4 bg-blue-600 hover:bg-blue-500 text-white px-6 py-2 rounded-full shadow-lg">
              Get a Machine
            </button>
          </a>
        </div>
      </header>

      {/* About Section */}
      <section className="p-8 bg-gradient-to-br from-white to-blue-50 text-center">
        <img
          src="/wz-vending-site/logo.png"
          alt="Zaroon Zayan Enterprise Logo"
          className="w-32 h-32 md:w-48 md:h-48 rounded-full shadow-lg mx-auto mb-6"
        />
        <h2 className="text-2xl font-semibold mb-4">Smart Vending in London</h2>
        <p className="mb-4 max-w-2xl mx-auto">
          We bring state-of-the-art vending machines to student flats, shopping
          malls, and hospitals in London. Our machines offer 24/7 access to
          snacks, drinks, and phone chargers with contactless payments.
        </p>
        <a href="mailto:contact@zaroonvending.co.uk">
          <Button className="bg-blue-700 hover:bg-blue-600">Get a Machine</Button>
        </a>

        {/* Image Carousel */}
        <div className="mt-8">
          <Swiper
            spaceBetween={20}
            slidesPerView={1}
            autoplay={{ delay: 3000 }}
            pagination={{ clickable: true }}
            loop={true}
            modules={[Pagination, Autoplay]}
          >
            <SwiperSlide>
              <img
                src="/wz-vending-site/mock_1.png"
                alt="Vending Machine Mockup 1"
                className="rounded-xl shadow-xl max-w-full h-auto md:max-h-[400px] mx-auto"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="/wz-vending-site/mock_2.png"
                alt="Vending Machine Mockup 2"
                className="rounded-xl shadow-xl max-w-full h-auto md:max-h-[400px] mx-auto"
              />
            </SwiperSlide>
          </Swiper>
        </div>
      </section>

      {/* Offerings Section */}
      <section className="p-8 bg-gray-100">
        <h2 className="text-xl font-bold mb-4">What We Offer</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Card className="hover:shadow-md transition">
            <CardContent className="p-4">
              <h3 className="font-bold text-lg mb-2 text-blue-700">Healthy Snacks</h3>
              <p>Granola bars, protein treats, and more.</p>
            </CardContent>
          </Card>
          <Card className="hover:shadow-md transition">
            <CardContent className="p-4">
              <h3 className="font-bold text-lg mb-2 text-blue-700">Cold Drinks</h3>
              <p>Water, juices, and energy drinks.</p>
            </CardContent>
          </Card>
          <Card className="hover:shadow-md transition">
            <CardContent className="p-4">
              <h3 className="font-bold text-lg mb-2 text-blue-700">Chargers & Accessories</h3>
              <p>USB cables, earphones, and portable accessories.</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Contact Section */}
      <section className="p-8">
        <h2 className="text-xl font-bold mb-4">Contact Us</h2>
        <div className="flex flex-col gap-2">
          <p className="flex items-center gap-2">
            <Mail className="w-5 h-5" /> contact@zaroonvending.co.uk
          </p>
          <p className="flex items-center gap-2">
            <Phone className="w-5 h-5" /> +44 1234 567890
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center text-sm p-4 bg-gray-200 text-gray-600">
        &copy; 2025 Zaroon Zayan Enterprise. All rights reserved.
      </footer>
    </div>
  );
}
