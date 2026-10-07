import React, { useState } from 'react';
import { Flame, ShoppingBag, ArrowRight, ChevronLeft, ChevronRight, Star, ShieldCheck, Sparkles } from 'lucide-react';
import seblakRed from '../assets/seblak_red.jpg';
import seblakYellow from '../assets/seblak_yellow.jpg';
import seblakGreen from '../assets/seblak_green.jpg';
import chiliGarnish from '../assets/chili.jpg';
import { BRAND_INFO } from '../data/menu';

export default function Hero() {
  const [activeSlide, setActiveSlide] = useState(0);

  const slides = [
    {
      id: 0,
      title: "Pedes Nagih, Toping Numpuk!",
      subtitle: "Seblak street food kekinian khas Pemalang! Kuah rempah kencur asli, racik level pedas 1–5 sesukamu, plus 15+ topping melimpah.",
      buttonText: "Pesan via WhatsApp",
      img: seblakRed,
      flavorName: "Seblak Spesial Kuah Merah",
      accentColor: "from-red-500 to-amber-500"
    },
    {
      id: 1,
      title: "Seblak Keju Lumer Creamy!",
      subtitle: "Perpaduan kuah pedas gurih bertabur keju melt melted, sosis bratwurst & dumpling keju impian.",
      buttonText: "Coba Varian Keju",
      img: seblakYellow,
      flavorName: "Seblak Cheese Melted",
      badge: "Favorit Gen-Z Cheese Melt",
      accentColor: "from-amber-400 to-[#FF9900]"
    },
    {
      id: 2,
      title: "Seblak Cabe Hijau Rempah! ",
      subtitle: "Sensasi segar aroma kencur & racikan cabai hijau segar pilihan dengan ceker empuk & bakso iga.",
      buttonText: "Sensasi Cabai Hijau",
      img: seblakGreen,
      flavorName: "Seblak Cabe Hijau",
      badge: "Rempah Kencur Asli",
      accentColor: "from-emerald-500 to-green-600"
    }
  ];

  const currentSlide = slides[activeSlide];

  const handleNext = () => {
    setActiveSlide((prev) => (prev + 1) % slides.length);
  };

  const handlePrev = () => {
    setActiveSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const handleWaOrder = () => {
    const text = encodeURIComponent(`Halo SEBLAKKUY! Saya mau pesan ${currentSlide.flavorName} nih 🔥`);
    window.open(`https://wa.me/${BRAND_INFO.whatsappNumber}?text=${text}`, '_blank');
  };

  return (
    <section id="beranda" className="relative w-full overflow-hidden bg-[#FAF8F5] select-none font-sans">

      {/* TOP RED SEBLAK HERO CONTAINER */}
      <div className="relative bg-gradient-to-br from-[#C8102E] via-[#D9381E] to-[#B00C24] text-white pt-6 pb-20 sm:pb-32 px-4 sm:px-8 lg:px-12 rounded-b-[40px] md:rounded-b-[60px] shadow-2xl transition-colors duration-500">

        {/* TOP FLOATING SEBLAK BADGES */}
        <div className="max-w-7xl mx-auto flex items-center justify-between py-2 mb-4 relative z-30">
          <div className="flex items-center gap-3">
          </div>
        </div>

        {/* HERO MAIN GRID LAYOUT */}
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-4 items-center z-20 relative pt-2">

          {/* LEFT COLUMN: HEADLINE & CTA */}
          <div className="lg:col-span-5 flex flex-col text-left space-y-6 pt-2 lg:pt-4 z-30">


            {/* MAIN HEADLINE */}
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black tracking-tight text-white leading-[1.05] font-heading drop-shadow-md">
              {currentSlide.title}
            </h1>

            {/* SUBTITLE */}
            <p className="text-lg sm:text-xl text-red-100/90 font-normal max-w-md leading-relaxed">
              {currentSlide.subtitle}
            </p>

            {/* ACTION BUTTON CTA */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                onClick={handleWaOrder}
                className="inline-flex items-center justify-center bg-[#FAF8F5] hover:bg-white text-[#C8102E] font-extrabold text-base px-8 py-4 rounded-full shadow-2xl shadow-black/25 hover:shadow-black/40 hover:-translate-y-1 active:translate-y-0 transition-all duration-300 group cursor-pointer"
              >
                <ShoppingBag className="w-5 h-5 mr-2 text-[#C8102E]" />
                <span>{currentSlide.buttonText}</span>
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </button>

              <a
                href="#menu"
                className="inline-flex items-center justify-center border-2 border-white/50 hover:border-white text-white font-bold text-base px-6 py-4 rounded-full hover:bg-white/10 transition-all"
              >
                Lihat Menu
              </a>
            </div>

          </div>

          {/* RIGHT COLUMN: 3D STAGGERED SEBLAK BOWLS DISPLAY */}
          <div className="lg:col-span-7 relative h-[380px] sm:h-[480px] lg:h-[520px] flex items-end justify-center z-20 mt-4 lg:mt-0">

            {/* GLOW BACKGROUND EFFECT */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-80 h-80 lg:w-96 lg:h-96 bg-amber-400/25 rounded-full blur-3xl" />
            </div>

            {/* 3D BOWLS CONTAINER */}
            <div className="relative w-full h-full flex items-end justify-center max-w-2xl mx-auto">

              {/* BOWL 1: MAIN FEATURED SEBLAK BOWL (CENTER FRONT) */}
              <div
                onClick={() => setActiveSlide(0)}
                className={`absolute bottom-0 z-30 transition-all duration-700 ease-out cursor-pointer group ${activeSlide === 0
                  ? 'w-[260px] sm:w-[320px] lg:w-[360px] translate-y-0 scale-100 opacity-100 drop-shadow-[0_30px_40px_rgba(0,0,0,0.5)]'
                  : 'w-[180px] sm:w-[220px] lg:w-[250px] -translate-x-20 sm:-translate-x-28 bottom-6 scale-90 opacity-80 blur-[0.5px] hover:opacity-100'
                  }`}
              >
                <div className="relative rounded-3xl overflow-hidden p-1.5 bg-gradient-to-b from-white/30 to-white/10 backdrop-blur-md border border-white/40 shadow-2xl">
                  <img
                    src={seblakRed}
                    alt="Seblak Spesial Kuah Merah"
                    className="w-full h-auto object-cover rounded-2xl group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute bottom-3 left-3 right-3 bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-xl text-white text-xs font-bold flex items-center justify-between">
                    <span>Seblak Kuah Merah</span>
                    <span className="text-amber-300 font-extrabold">Level 1 - 5</span>
                  </div>
                </div>
              </div>

              {/* BOWL 2: SECONDARY SEBLAK BOWL (RIGHT MIDDLE) */}
              <div
                onClick={() => setActiveSlide(1)}
                className={`absolute transition-all duration-700 ease-out cursor-pointer group ${activeSlide === 1
                  ? 'w-[260px] sm:w-[320px] lg:w-[360px] bottom-0 z-30 translate-x-0 scale-100 opacity-100 drop-shadow-[0_30px_40px_rgba(0,0,0,0.5)]'
                  : 'w-[190px] sm:w-[230px] lg:w-[260px] right-4 sm:right-12 lg:right-16 bottom-8 sm:bottom-12 z-20 scale-95 opacity-90 drop-shadow-[0_20px_25px_rgba(0,0,0,0.35)] hover:opacity-100'
                  }`}
              >
                <div className="relative rounded-3xl overflow-hidden p-1.5 bg-gradient-to-b from-white/30 to-white/10 backdrop-blur-md border border-white/40 shadow-2xl">
                  <img
                    src={seblakYellow}
                    alt="Seblak Cheese Melted"
                    className="w-full h-auto object-cover rounded-2xl group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute bottom-3 left-3 right-3 bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-xl text-white text-xs font-bold flex items-center justify-between">
                    <span>Seblak Cheese Melt</span>
                    <span className="text-amber-300 font-extrabold">Keju Lumer</span>
                  </div>
                </div>
              </div>

              {/* BOWL 3: TERTIARY SEBLAK BOWL (FAR RIGHT BACK) */}
              <div
                onClick={() => setActiveSlide(2)}
                className={`absolute transition-all duration-700 ease-out cursor-pointer group ${activeSlide === 2
                  ? 'w-[260px] sm:w-[320px] lg:w-[360px] bottom-0 z-30 translate-x-0 scale-100 opacity-100 drop-shadow-[0_30px_40px_rgba(0,0,0,0.5)]'
                  : 'w-[140px] sm:w-[170px] lg:w-[195px] -right-4 sm:right-0 lg:right-2 bottom-16 sm:bottom-20 z-10 scale-90 opacity-80 drop-shadow-[0_15px_20px_rgba(0,0,0,0.3)] hover:opacity-100'
                  }`}
              >
                <div className="relative rounded-3xl overflow-hidden p-1.5 bg-gradient-to-b from-white/30 to-white/10 backdrop-blur-md border border-white/40 shadow-2xl">
                  <img
                    src={seblakGreen}
                    alt="Seblak Cabe Hijau"
                    className="w-full h-auto object-cover rounded-2xl group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute bottom-3 left-3 right-3 bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-xl text-white text-xs font-bold flex items-center justify-between">
                    <span>Seblak Cabai Hijau</span>
                    <span className="text-emerald-300 font-extrabold">Rempah Kencur</span>
                  </div>
                </div>
              </div>

            </div>

          </div>

        </div>

      </div>

      {/* ORGANIC WAVE GRAPHIC DIVIDER (Red to Cream) */}
      <div className="relative w-full -mt-12 sm:-mt-20 lg:-mt-24 pointer-events-none z-10">
        <svg
          viewBox="0 0 1440 160"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-auto preserve-3d"
        >
          <path
            d="M0,64L60,69.3C120,75,240,85,360,80C480,75,600,53,720,53.3C840,53,960,75,1080,85.3C1200,96,1320,96,1380,96L1440,96L1440,0L1380,0C1320,0,1200,0,1080,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"
            fill="#B00C24"
          />
        </svg>
      </div>

      {/* FLOATING RED CHILI GARNISHES */}
      <div className="absolute left-6 sm:left-16 bottom-10 z-20 pointer-events-none animate-float">
        <img
          src={chiliGarnish}
          alt="Floating Red Chili"
          className="w-12 h-12 sm:w-16 sm:h-16 object-contain mix-blend-multiply drop-shadow-md rotate-[-25deg]"
        />
      </div>

      <div className="absolute right-12 sm:right-28 bottom-4 z-20 pointer-events-none animate-float-reverse">
        <img
          src={chiliGarnish}
          alt="Floating Red Chili"
          className="w-10 h-10 sm:w-14 sm:h-14 object-contain mix-blend-multiply drop-shadow-md rotate-[35deg]"
        />
      </div>

      {/* BOTTOM CREAM BAR (Avatar Testimonial, Carousel Arrows, Pagination) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 pb-8 pt-2 relative z-20">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">

          {/* BOTTOM CENTER: CAROUSEL CONTROL ARROWS (← →) */}
          <div className="flex items-center gap-3">
            <button
              onClick={handlePrev}
              className="w-11 h-11 rounded-full border border-gray-300/80 bg-white/90 hover:bg-white flex items-center justify-center text-gray-800 shadow-sm hover:shadow-md transition-all duration-200 hover:scale-105 active:scale-95 cursor-pointer"
              aria-label="Seblak Sebelumnya"
            >
              <ChevronLeft className="w-5 h-5 text-gray-700" />
            </button>
            <button
              onClick={handleNext}
              className="w-11 h-11 rounded-full border border-gray-300/80 bg-white/90 hover:bg-white flex items-center justify-center text-gray-800 shadow-sm hover:shadow-md transition-all duration-200 hover:scale-105 active:scale-95 cursor-pointer"
              aria-label="Seblak Berikutnya"
            >
              <ChevronRight className="w-5 h-5 text-gray-700" />
            </button>
          </div>

          {/* BOTTOM RIGHT: PAGINATION DOTS (● ○ ○) */}
          <div className="flex items-center gap-2">
            {slides.map((slide, idx) => (
              <button
                key={slide.id}
                onClick={() => setActiveSlide(idx)}
                className={`transition-all duration-300 rounded-full ${activeSlide === idx
                  ? 'w-3.5 h-3.5 bg-[#C8102E]'
                  : 'w-3 h-3 bg-gray-300 hover:bg-gray-400'
                  }`}
                aria-label={`Ke varian seblak ${idx + 1}`}
              />
            ))}
          </div>

        </div>
      </div>

    </section>
  );
}
