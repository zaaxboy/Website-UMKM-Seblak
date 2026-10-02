import React from 'react';
import { MENU_DATA, BRAND_INFO } from '../data/menu';
import { ShoppingBag, Flame, Sparkles, CupSoda } from 'lucide-react';

export default function MenuSection() {
  const seblakMenu = MENU_DATA.filter((item) => item.category === 'Seblak');
  const drinksMenu = MENU_DATA.filter((item) => item.category === 'Minuman');

  const handleOrderMenu = (menuItem) => {
    const levelText = menuItem.defaultLevel > 0 ? `Level ${menuItem.defaultLevel}` : 'Normal';
    const message = `Halo SEBLAKKUY, saya mau pesan ${menuItem.name} (${levelText}) seharga Rp ${menuItem.price.toLocaleString('id-ID')}`;
    const url = `https://wa.me/${BRAND_INFO.whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  const renderCard = (item) => (
    <div
      key={item.id}
      className="bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-md hover:shadow-2xl transition-all duration-300 flex flex-col group hover:-translate-y-1"
    >
      {/* IMAGE CONTAINER & BADGES */}
      <div className="relative h-52 sm:h-60 overflow-hidden bg-gray-100">
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />

        {item.badge && (
          <span className={`absolute top-4 left-4 ${item.badgeColor || 'bg-[#C8102E] text-white'} text-xs font-black uppercase px-3.5 py-1.5 rounded-full shadow-lg backdrop-blur-xs flex items-center gap-1`}>
            <Sparkles className="w-3.5 h-3.5" />
            {item.badge}
          </span>
        )}

        {item.defaultLevel > 0 && (
          <span className="absolute top-4 right-4 bg-black/75 text-amber-400 text-xs font-extrabold px-3 py-1 rounded-full backdrop-blur-md border border-white/20 flex items-center gap-1">
            <Flame className="w-3.5 h-3.5 text-red-500 fill-red-500" />
            Lvl {item.defaultLevel}
          </span>
        )}
      </div>

      {/* CARD CONTENT */}
      <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
        <div>
          <h3 className="font-heading text-xl font-bold text-gray-900 group-hover:text-[#C8102E] transition-colors">
            {item.name}
          </h3>
          <p className="text-gray-500 text-sm mt-2 line-clamp-2 leading-relaxed">
            {item.description}
          </p>
        </div>

        {/* PRICE & ORDER BUTTON */}
        <div className="pt-4 border-t border-gray-100 flex items-center justify-between">
          <div className="flex flex-col">
            <span className="text-[11px] font-bold text-gray-400 uppercase">Harga</span>
            <span className="font-heading font-extrabold text-2xl text-[#C8102E]">
              Rp {item.price.toLocaleString('id-ID')}
            </span>
          </div>

          <button
            onClick={() => handleOrderMenu(item)}
            className="flex items-center gap-2 bg-[#C8102E] hover:bg-[#9E0B22] text-white px-5 py-2.5 rounded-2xl font-bold text-sm shadow-md hover:shadow-lg shadow-red-600/20 transition-all hover:scale-105 active:scale-95 cursor-pointer"
          >
            <ShoppingBag className="w-4 h-4" />
            <span>Pesan</span>
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <section id="menu" className="py-16 md:py-24 relative bg-[#FAF8F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">

        {/* MAIN SECTION TITLE */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <h2 className="text-3xl sm:text-5xl font-black text-gray-900 tracking-tight font-heading">
            Pilihan Seblak Pedas & Minuman Segar 😋
          </h2>
          <p className="text-gray-600 text-base sm:text-lg">
            Semua menu dibuat hangat dan segar sesuai pesananmu. Klik tombol **Pesan** untuk langsung order via WhatsApp!
          </p>
        </div>

        {/* SUBSECTION 1: DERETAN SEBLAK MAKANAN */}
        <div className="space-y-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-red-200/60 pb-5 gap-4">
            <div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mt-1 font-heading">
                Deretan Jenis Seblak Pedas Nagih
              </h3>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {seblakMenu.map((item) => renderCard(item))}
          </div>
        </div>

        {/* SUBSECTION 2: DERETAN MENU MINUMAN (SEPARATED BELOW SEBLAK) */}
        <div className="space-y-8 pt-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-sky-200/60 pb-5 gap-4">
            <div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mt-1 font-heading">
                Deretan Menu Minuman Segar
              </h3>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {drinksMenu.map((item) => renderCard(item))}
          </div>
        </div>

        {/* BOTTOM NOTE */}
        <div className="text-center bg-white border border-red-100 shadow-md rounded-3xl p-6 sm:p-8 max-w-3xl mx-auto">
          <p className="text-gray-800 text-sm sm:text-base font-semibold">
            💡 <span className="text-[#C8102E] font-extrabold">Mau racik topping & level pedas sendiri secara bebas?</span> Gunakan fitur simulator racik custom di bawah ini!
          </p>
        </div>

      </div>
    </section>
  );
}
