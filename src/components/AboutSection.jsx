import React from 'react';
import { ShoppingBag, Utensils, Send, Sparkles, Download, CheckCircle2 } from 'lucide-react';
import seblakRed from '../assets/seblak_red.jpg';
import seblakYellow from '../assets/seblak_yellow.jpg';
import seblakGreen from '../assets/seblak_green.jpg';
import { BRAND_INFO } from '../data/menu';

export default function AboutSection() {
  const handleWaOrder = () => {
    const text = encodeURIComponent(`Halo ${BRAND_INFO.name}! Saya mau pesan seblak varian rasa favorit dong 🔥`);
    window.open(`https://wa.me/${BRAND_INFO.whatsappNumber}?text=${text}`, '_blank');
  };

  const handleMenuScroll = (e) => {
    e.preventDefault();
    const menuEl = document.getElementById('menu');
    if (menuEl) {
      menuEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="tentang" className="py-20 md:py-28 bg-[#FAF8F5] relative overflow-hidden font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

          {/* LEFT GRAPHIC CONTAINER: OVERLAPPING ROTATED CARDS LIKE IN PHOTO */}
          <div className="lg:col-span-6 relative flex justify-center items-center py-8 lg:py-12">

            {/* SVG BACKGROUND DASHED CURVE & ACCENT FLYING PLANE */}
            <svg
              className="absolute -left-4 sm:left-4 top-1/2 -translate-y-1/2 w-[110%] h-[120%] pointer-events-none text-emerald-300/60 z-0 hidden sm:block"
              viewBox="0 0 500 400"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M 40 250 C 20 120, 160 40, 280 80 C 400 120, 460 260, 320 340 C 200 400, 100 320, 80 200"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeDasharray="6 6"
              />
            </svg>

            {/* FLYING PAPER PLANE ICON ON DASHED PATH */}
            <div className="absolute left-0 bottom-12 -translate-x-2 translate-y-4 z-10 text-emerald-600 hidden sm:block">
              <Send className="w-6 h-6 transform -rotate-45 drop-shadow" />
            </div>

            {/* CARD CONTAINER */}
            <div className="relative w-[300px] sm:w-[380px] h-[360px] sm:h-[420px] z-10">

              {/* CARD 1: BACK TILTED CARD (LIGHT GRAY FRAME WITH SEBLAK GREEN/RED DISH) */}
              <div className="absolute top-0 left-0 w-[220px] sm:w-[260px] h-[270px] sm:h-[320px] bg-white rounded-[2.5rem] shadow-xl p-4 sm:p-5 border border-gray-100 transform -rotate-12 hover:-rotate-6 transition-transform duration-500 flex flex-col justify-center items-center group">
                <div className="w-full h-full rounded-[1.8rem] overflow-hidden bg-gradient-to-br from-gray-100 to-gray-50 flex items-center justify-center relative shadow-inner">
                  <img
                    src={seblakGreen}
                    alt="Seblak Cabe Hijau Rempah"
                    className="w-40 h-40 sm:w-48 sm:h-48 object-cover rounded-full shadow-lg group-hover:scale-105 transition-transform duration-500 border-4 border-white"
                  />
                </div>
              </div>

              {/* CARD 2: FRONT TILTED CARD (PALE YELLOW FRAME WITH SEBLAK YELLOW/RED BOWL) */}
              <div className="absolute bottom-0 right-0 w-[230px] sm:w-[270px] h-[280px] sm:h-[330px] bg-[#F6F4D2] rounded-[2.5rem] shadow-2xl p-4 sm:p-5 border border-yellow-200/60 transform rotate-6 hover:rotate-3 transition-transform duration-500 flex flex-col justify-center items-center group z-20">
                <div className="w-full h-full rounded-[1.8rem] overflow-hidden bg-amber-50/50 flex items-center justify-center relative">
                  <img
                    src={seblakYellow}
                    alt="Seblak Keju Lumer"
                    className="w-44 h-44 sm:w-52 sm:h-52 object-cover rounded-full shadow-xl group-hover:scale-105 transition-transform duration-500 border-4 border-white"
                  />
                </div>
              </div>

            </div>
          </div>

          {/* RIGHT CONTENT COLUMN */}
          <div className="lg:col-span-6 space-y-6 text-left">

            {/* HEADLINE LIKE IN PHOTO */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900 tracking-tight leading-[1.15] font-heading">
              Sajian Seblak <span className="text-[#C8102E]">Beragam</span> & Pedas Autentik
            </h2>

            {/* DESCRIPTION PARAGRAPHS */}
            <div className="space-y-4 text-gray-600 text-base sm:text-lg leading-relaxed font-normal">
              <p>
                <strong className="text-gray-900 font-semibold">SeblakKuy</strong> adalah usaha mikro, kecil, dan menengah (UMKM) kuliner yang berkomitmen menyajikan sajian seblak kekinian dengan pilihan varian rasa paling lengkap dan melimpah.
              </p>
              <p>
                Kami meracik kuah kencur rempah autentik dengan aneka pilihan varian inovatif, mulai dari Seblak Kuah Merah Pedas Nagih, Seblak Cheese Melted gurih creamy, hingga Seblak Cabe Hijau Segar & Seafood Komplit.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
