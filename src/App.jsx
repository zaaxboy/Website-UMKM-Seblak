import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import MenuSection from './components/MenuSection';
import SpicyAndToppingBuilder from './components/SpicyAndToppingBuilder';
import HowToOrder from './components/HowToOrder';
import Testimonials from './components/Testimonials';
import Location from './components/Location';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';

export default function App() {
  return (
    <div className="min-h-screen bg-[#FAF8F5] text-gray-900 font-sans selection:bg-[#C8102E] selection:text-white flex flex-col">
      {/* 1. Navbar Sticky */}
      <Navbar />

      <main className="flex-1">
        {/* 2. Hero Section */}
        <Hero />

        {/* 3. Keunggulan Section */}
        <Features />

        {/* 4. Menu Section & Filter */}
        <MenuSection />

        {/* 5. Level Pedas & Topping Builder */}
        <SpicyAndToppingBuilder />

        {/* 6. Cara Pesan (How to Order) */}
        <HowToOrder />

        {/* 7. Testimoni Section */}
        <Testimonials />

        {/* 8. Lokasi & Jam Buka */}
        <Location />
      </main>

      {/* 9. Footer */}
      <Footer />

      {/* Floating Action Button */}
      <FloatingWhatsApp />
    </div>
  );
}
