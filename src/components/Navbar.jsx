import React, { useState, useEffect } from 'react';
import { Flame, ShoppingBag, Menu, X, ChevronRight } from 'lucide-react';
import { BRAND_INFO } from '../data/menu';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Beranda', href: '#beranda' },
    { name: 'Tentang UMKM', href: '#tentang' },
    { name: 'Keunggulan', href: '#keunggulan' },
    { name: 'Menu', href: '#menu' },
    { name: 'Racik Custom', href: '#racik-custom' },
    { name: 'Cara Pesan', href: '#cara-pesan' },
    { name: 'Testimoni', href: '#testimoni' },
    { name: 'Lokasi', href: '#lokasi' },
  ];

  const handleWaOrder = () => {
    const url = `https://wa.me/${BRAND_INFO.whatsappNumber}?text=${encodeURIComponent('Halo SEBLAKKUY, saya mau tanya / pesan seblak nih!')}`;
    window.open(url, '_blank');
  };

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled ? 'glass-nav border-b border-red-100/60 shadow-md py-3' : 'bg-[#FAF8F5]/90 backdrop-blur-md py-4'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* LOGO BRAND */}
          <a href="#beranda" className="flex items-center gap-2 group">
            <div className="bg-[#C8102E] text-white p-2 rounded-xl shadow-md group-hover:scale-105 transition-transform">
              <Flame className="w-6 h-6 animate-flame" />
            </div>
            <div className="flex flex-col">
              <span className="font-heading font-extrabold text-2xl tracking-tight text-gray-900 group-hover:text-[#C8102E] transition-colors">
                SEBLAK<span className="text-[#C8102E]">KUY</span>
              </span>
              <span className="text-[10px] font-semibold tracking-wider text-red-600 uppercase -mt-1">
                Pedes Nagih!
              </span>
            </div>
          </a>

          {/* DESKTOP NAV LINKS */}
          <nav className="hidden lg:flex items-center gap-1 bg-white/80 px-4 py-1.5 rounded-full border border-gray-200/80 shadow-xs">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-4 py-2 text-sm font-semibold text-gray-700 hover:text-[#C8102E] rounded-full hover:bg-red-50 transition-all"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* DESKTOP CTA BUTTON */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={handleWaOrder}
              className="flex items-center gap-2 bg-[#C8102E] hover:bg-[#9E0B22] text-white px-5 py-2.5 rounded-full font-bold text-sm shadow-lg shadow-red-600/25 hover:shadow-red-600/40 hover:-translate-y-0.5 active:translate-y-0 transition-all"
            >
              <ShoppingBag className="w-4 h-4" />
              <span>Pesan Sekarang</span>
            </button>
          </div>

          {/* MOBILE HAMBURGER BUTTON */}
          <div className="flex items-center lg:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-xl text-gray-700 hover:text-[#C8102E] hover:bg-red-50 focus:outline-none transition-colors"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* MOBILE MENU DRAWER */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-gray-100 shadow-xl px-4 pt-3 pb-6 animate-in slide-in-from-top duration-200">
          <div className="flex flex-col space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between px-4 py-3 rounded-xl font-semibold text-gray-800 hover:bg-red-50 hover:text-[#C8102E] transition-colors"
              >
                <span>{link.name}</span>
                <ChevronRight className="w-4 h-4 text-gray-400" />
              </a>
            ))}
            <div className="pt-3">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  handleWaOrder();
                }}
                className="w-full flex items-center justify-center gap-2 bg-[#C8102E] text-white py-3 rounded-xl font-bold text-base shadow-md"
              >
                <ShoppingBag className="w-5 h-5" />
                <span>Pesan Sekarang via WA</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
