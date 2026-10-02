import React from 'react';
import { BRAND_INFO } from '../data/menu';
import { Flame, MessageCircle, Heart, ArrowUp } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-950 text-white pt-16 pb-12 relative overflow-hidden">

      {/* GLOW EFFECT */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-1 bg-gradient-to-r from-transparent via-[#C8102E] to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-12 border-b border-gray-800">

          {/* BRAND COLUMN */}
          <div className="md:col-span-5 space-y-4">
            <a href="#beranda" className="flex items-center gap-2">
              <div className="bg-[#C8102E] text-white p-2 rounded-xl">
                <Flame className="w-6 h-6 animate-flame text-amber-300" />
              </div>
              <span className="font-heading font-extrabold text-2xl tracking-tight text-white">
                SEBLAK<span className="text-[#C8102E]">KUY</span>
              </span>
            </a>

            <p className="text-gray-400 text-sm max-w-sm leading-relaxed">
              {BRAND_INFO.subTagline}
            </p>

            <div className="pt-2 flex items-center gap-3">

              {/* GANTI LINK SOSIAL MEDIA ASLI DI SINI (Lihat src/data/menu.js) */}

              <a
                href={BRAND_INFO.socials.instagram}
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-full bg-gray-900 border border-gray-800 flex items-center justify-center text-gray-400 hover:text-white hover:bg-[#C8102E] hover:border-[#C8102E] transition-all"
                aria-label="Instagram SEBLAKKUY"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>


              <a
                href={BRAND_INFO.socials.tiktok}
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-full bg-gray-900 border border-gray-800 flex items-center justify-center text-gray-400 hover:text-white hover:bg-[#C8102E] hover:border-[#C8102E] transition-all"
                aria-label="TikTok SEBLAKKUY"
              >
                {/* Custom TikTok SVG icon */}
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 3 15.68 6.34 6.34 0 0 0 9.33 22a6.34 6.34 0 0 0 6.34-6.34V9.05a9.83 9.83 0 0 0 3.92 1.31V6.9a4.85 4.85 0 0 1-.00-.21z" />
                </svg>
              </a>

              <a
                href={BRAND_INFO.socials.whatsapp}
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-full bg-gray-900 border border-gray-800 flex items-center justify-center text-gray-400 hover:text-white hover:bg-emerald-600 hover:border-emerald-600 transition-all"
                aria-label="WhatsApp SEBLAKKUY"
              >
                <MessageCircle className="w-5 h-5" />
              </a>

            </div>
          </div>

          {/* QUICK LINKS */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="font-heading font-bold text-sm uppercase tracking-wider text-gray-200">
              Navigasi Cepat
            </h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#beranda" className="hover:text-[#C8102E] transition-colors">Beranda</a></li>
              <li><a href="#keunggulan" className="hover:text-[#C8102E] transition-colors">Keunggulan</a></li>
              <li><a href="#menu" className="hover:text-[#C8102E] transition-colors">Daftar Menu</a></li>
              <li><a href="#racik-custom" className="hover:text-[#C8102E] transition-colors">Racik Custom</a></li>
              <li><a href="#cara-pesan" className="hover:text-[#C8102E] transition-colors">Cara Pesan</a></li>
            </ul>
          </div>

          {/* HOURS & ADDRESS */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="font-heading font-bold text-sm uppercase tracking-wider text-gray-200">
              Informasi Outlet
            </h4>
            <p className="text-sm text-gray-400 leading-relaxed">
              📍 {BRAND_INFO.address}
            </p>
            <p className="text-sm text-gray-400">
              ⏰ {BRAND_INFO.openHours}
            </p>
            <p className="text-sm font-semibold text-emerald-400 pt-1">
              💬 Whatsapp: +{BRAND_INFO.whatsappNumber}
            </p>
          </div>

        </div>

        {/* BOTTOM COPYRIGHT & BACK TO TOP */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500">
          <p className="flex items-center gap-1 text-center sm:text-left">
            © {new Date().getFullYear()} {BRAND_INFO.name}. Dibuat dengan <Heart className="w-3.5 h-3.5 text-red-500 fill-red-500" /> Ahmad Arjak Ukhillal Arzaq.
          </p>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 bg-gray-900 hover:bg-[#C8102E] text-gray-300 hover:text-white px-4 py-2 rounded-xl border border-gray-800 transition-all group"
          >
            <span>Kembali ke Atas</span>
            <ArrowUp className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>

      </div>
    </footer>
  );
}
