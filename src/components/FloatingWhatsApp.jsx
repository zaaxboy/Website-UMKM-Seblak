import React from 'react';
import { BRAND_INFO } from '../data/menu';
import { MessageCircle } from 'lucide-react';

export default function FloatingWhatsApp() {
  const handleClick = () => {
    const text = encodeURIComponent("Halo SEBLAKKUY, saya mau tanya / pesan seblak nih!");
    window.open(`https://wa.me/${BRAND_INFO.whatsappNumber}?text=${text}`, '_blank');
  };

  return (
    <div className="fixed bottom-6 right-6 z-40">
      <button
        onClick={handleClick}
        className="group relative flex items-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white p-3.5 sm:px-5 sm:py-3.5 rounded-full shadow-2xl shadow-emerald-600/40 hover:scale-105 active:scale-95 transition-all duration-300"
        aria-label="Tanya via WhatsApp"
      >
        <MessageCircle className="w-6 h-6 animate-pulse" />
        <span className="hidden sm:inline font-bold text-sm">Pesan via WA</span>
        
        {/* ONLINE BADGE */}
        <span className="absolute -top-1 -right-1 flex h-3.5 w-3.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-emerald-300 border-2 border-white"></span>
        </span>
      </button>
    </div>
  );
}
