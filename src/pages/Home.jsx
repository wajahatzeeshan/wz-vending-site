import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Phone } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-gray-800" style={{ fontFamily: 'Aptos, sans-serif' }}>
      <header className="bg-blue-900 text-white py-6 px-8 shadow-md">
        <h1 className="text-3xl font-bold">Zaroon Zayan Enterprise</h1>
        <p className="text-lg">Healthy • Classic • Charged</p>
      </header>

      <section className="p-8 grid gap-6 md:grid-cols-2">
        <div>
          <h2 className="text-2xl font-semibold mb-4">Smart Vending in London</h2>
          <p className="mb-4">
            We bring state-of-the-art vending machines to student flats, shopping malls, and hospitals in London.
            Our machines offer 24/7 access to snacks, drinks, and phone chargers with contactless payments.
          </p>
          <a href="mailto:contact@zaroonvending.co.uk">
            <Button className="bg-blue-700 hover:bg-blue-600">Get a Machine</Button>
          </a>
        </div>
        <div>
          <Swiper spaceBetween={20} slidesPerView={1}>
            <SwiperSlide>
              <img src="/mock_1.png" alt="Vending Machine Mockup 1" className="rounded-xl shadow-xl" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="/mock_2.png" alt="Vending Machine Mockup 2" className="rounded-xl shadow-xl" />
            </SwiperSlide>
          </Swiper>
        </div>
      </section>

      <section className="p-8 bg-gray-100">
        <h2 className="text-xl font-bold mb-4">What We Offer</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Card>
            <CardContent className="p-4">
              <h3 className="font-bold text-lg mb-2">Healthy Snacks</h3>
              <p>Granola bars, protein treats, and more.</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <h3 className="font-bold text-lg mb-2">Cold Drinks</h3>
              <p>Water, juices, and energy drinks.</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <h3 className="font-bold text-lg mb-2">Chargers & Accessories</h3>
              <p>USB cables, earphones, and portable accessories.</p>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="p-8">
        <h2 className="text-xl font-bold mb-4">Contact Us</h2>
        <div className="flex flex-col gap-2">
          <p className="flex items-center gap-2"><Mail className="w-5 h-5" /> contact@zaroonvending.co.uk</p>
          <p className="flex items-center gap-2"><Phone className="w-5 h-5" /> +44 1234 567890</p>
        </div>
      </section>

      <footer className="text-center text-sm p-4 bg-gray-200 text-gray-600">
        &copy; 2025 Zaroon Zayan Enterprise. All rights reserved.
      </footer>
    </div>
  );
}