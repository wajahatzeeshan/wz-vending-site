import React, { useEffect, useState } from "react";
import { Menu, Mail, Phone, Facebook, Instagram, Info, Star, MailIcon } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

export default function Home() {
  const [isDark, setIsDark] = useState(() => {
    return (
      localStorage.getItem("theme") === "dark" ||
      (!("theme" in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches)
    );
  });

  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDark]);

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 font-sans flex">
      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 z-50 w-64 h-full bg-blue-900 text-white p-6 shadow-lg transform transition-transform duration-300 ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0 md:static md:flex md:flex-col`}
      >
        <h1 className="text-2xl font-bold mb-8">Zaroon Vending</h1>
        <nav className="flex flex-col gap-4">
          <a href="#about" className="flex items-center gap-2 hover:text-blue-200">
            <Info className="w-4 h-4" /> About
          </a>
          <a href="#features" className="flex items-center gap-2 hover:text-blue-200">
            <Star className="w-4 h-4" /> Features
          </a>
          <a href="#contact" className="flex items-center gap-2 hover:text-blue-200">
            <MailIcon className="w-4 h-4" /> Contact
          </a>
        </nav>
      </aside>

      {/* Main Content */}
      <div className="flex-1 ml-0 md:ml-64">
        {/* Mobile Top Bar */}
        <div className="md:hidden flex justify-between items-center px-4 py-3 bg-blue-900 text-white shadow">
          <h1 className="text-lg font-bold">Zaroon Vending</h1>
          <div className="flex items-center gap-4">
            <button onClick={() => setSidebarOpen(!sidebarOpen)}>
              <Menu className="w-6 h-6" />
            </button>
            <button
              onClick={() => setIsDark(!isDark)}
              className="text-sm px-2 py-1 rounded bg-gray-200 dark:bg-gray-800 hover:bg-gray-300 dark:hover:bg-gray-700"
            >
              {isDark ? "☀️" : "🌙"}
            </button>
          </div>
        </div>

        {/* Hero */}
        <header
          className="relative h-[60vh] bg-cover bg-center flex items-center justify-center text-white text-center"
          style={{ backgroundImage: "url('/wz-vending-site/mock_1.png')" }}
        >
          <div className="bg-black/50 p-6 rounded-lg animate-fade-in-up">
            <h2 className="text-4xl font-bold mb-2">Zaroon Zayan Enterprise</h2>
            <p className="text-lg">Smart vending for modern spaces</p>
            <a href="mailto:contact@zaroonvending.co.uk">
              <button className="mt-4 bg-blue-600 hover:bg-blue-500 text-white px-6 py-2 rounded-full shadow-lg">
                Get a Machine
              </button>
            </a>
          </div>
        </header>

        {/* About */}
        <section id="about" className="p-8 bg-gradient-to-br from-white to-blue-50 dark:from-gray-900 dark:to-gray-800 text-center">
          <img
            src="/wz-vending-site/logo.png"
            alt="Logo"
            className="w-24 h-24 md:w-36 md:h-36 rounded-full shadow-lg mb-6 mx-auto"
          />
          <h2 className="text-2xl font-semibold mb-4">Smart Vending in London</h2>
          <p className="mb-4 max-w-2xl mx-auto">
            We bring state-of-the-art vending machines to student flats, shopping malls,
            and hospitals. Our machines provide 24/7 access to healthy snacks, drinks,
            and phone accessories – all via contactless payment.
          </p>
          <a href="mailto:contact@zaroonvending.co.uk">
            <Button className="bg-blue-700 hover:bg-blue-600">Get a Machine</Button>
          </a>
        </section>

        {/* Carousel */}
        <section className="px-4 md:px-8 pb-12 max-w-5xl mx-auto">
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
                alt="Mockup 1"
                className="rounded-xl shadow-xl max-w-full h-auto md:max-h-[400px] mx-auto"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="/wz-vending-site/mock_2.png"
                alt="Mockup 2"
                className="w-full max-w-[300px] h-auto object-contain rounded-xl shadow-xl mx-auto"
              />
            </SwiperSlide>
          </Swiper>
        </section>

        {/* Features */}
        <section id="features" className="p-8 bg-gray-100 dark:bg-gray-800">
          <h2 className="text-xl font-bold mb-4 text-center">What We Offer</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { title: "Healthy Snacks", desc: "Granola bars, protein treats, and nutritious choices." },
              { title: "Cold Drinks", desc: "Water, juices, and refreshing beverages." },
              { title: "Chargers & Accessories", desc: "USB cables, earphones, and more on-the-go tools." },
            ].map((feature, i) => (
              <Card key={i} className="hover:shadow-lg transition-transform hover:scale-105">
                <CardContent className="p-6 text-center">
                  <h3 className="font-bold text-lg text-blue-700 dark:text-blue-400 mb-2">{feature.title}</h3>
                  <p>{feature.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="p-8">
          <h2 className="text-xl font-bold mb-4 text-center">Contact Us</h2>
          <div className="flex flex-col gap-2 items-center">
            <p className="flex items-center gap-2">
              <Mail className="w-5 h-5" /> contact@zaroonvending.co.uk
            </p>
            <p className="flex items-center gap-2">
              <Phone className="w-5 h-5" /> +44 1234 567890
            </p>
          </div>
        </section>

        {/* Footer */}
        <footer className="text-center text-sm p-4 bg-gray-200 dark:bg-gray-950 dark:text-gray-400 text-gray-600">
          <p>&copy; 2025 Zaroon Zayan Enterprise. All rights reserved.</p>
          <div className="flex justify-center gap-4 mt-2">
            <Facebook className="w-5 h-5" />
            <Instagram className="w-5 h-5" />
          </div>
        </footer>
      </div>
    </div>
  );
}
