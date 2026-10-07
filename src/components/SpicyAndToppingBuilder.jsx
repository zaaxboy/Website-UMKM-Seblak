import React, { useState } from 'react';
import { SPICY_LEVELS, EXTRA_TOPPINGS, BRAND_INFO } from '../data/menu';
import { Flame, Plus, Check, Send, Sparkles, RefreshCw } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function SpicyAndToppingBuilder() {
  const BASE_PRICE = 12000; // Harga dasar seblak racik custom
  const [selectedLevel, setSelectedLevel] = useState(SPICY_LEVELS[1]); // Default Level 2
  const [selectedToppings, setSelectedToppings] = useState(['ceker', 'bakso']); // Default toppings

  const toggleTopping = (toppingId) => {
    if (selectedToppings.includes(toppingId)) {
      setSelectedToppings(selectedToppings.filter((id) => id !== toppingId));
    } else {
      setSelectedToppings([...selectedToppings, toppingId]);
    }
  };

  // Hitung total harga
  const toppingsTotalPrice = selectedToppings.reduce((sum, toppingId) => {
    const item = EXTRA_TOPPINGS.find((t) => t.id === toppingId);
    return sum + (item ? item.price : 0);
  }, 0);

  const grandTotal = BASE_PRICE + toppingsTotalPrice;

  const handleSendCustomOrder = () => {
    // Triggers confetti burst
    try {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.7 }
      });
    } catch {
      // fallback silent
    }

    // Ambil nama-nama topping terpilih
    const toppingNames = selectedToppings
      .map((id) => {
        const t = EXTRA_TOPPINGS.find((item) => item.id === id);
        return t ? t.name : null;
      })
      .filter(Boolean)
      .join(', ');

    const toppingText = toppingNames.length > 0 ? toppingNames : 'Tanpa Topping Tambahan';

    // FORMAT PESAN SESUAI SPESIFIKASI:
    // "Halo SEBLAKKUY, saya mau pesan Seblak Custom dengan level pedas Level [X] ([Nama Level]) dan topping tambahan [topping]"
    const message = `Halo SEBLAKKUY, saya mau pesan Seblak Custom dengan level pedas Level ${selectedLevel.level} (${selectedLevel.name}) dan topping tambahan ${toppingText}. Total Estimasi: Rp ${grandTotal.toLocaleString('id-ID')}`;

    const url = `https://wa.me/${BRAND_INFO.whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  const handleReset = () => {
    setSelectedLevel(SPICY_LEVELS[1]);
    setSelectedToppings([]);
  };

  return (
    <section id="racik-custom" className="py-16 md:py-24 bg-gradient-to-b from-[#FAF8F5] via-red-50/40 to-[#FAF8F5] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* HEADER SECTION */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mt-4 tracking-tight">
            Pilih Level Pedas & Topping Pilihan
          </h2>
          <p className="text-gray-600 text-base sm:text-lg mt-3">
            Bebas mix & match! Tentukan tingkat pedasmu dan tumpuk topping kesukaanmu tanpa batas.
          </p>
        </div>

        {/* RACIK BUILDER CARD */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-gray-100 shadow-2xl max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10">

          {/* LEFT: CONTROLS */}
          <div className="lg:col-span-7 space-y-8">

            {/* STEP 1: LEVEL PEDAS (CHIPS INTERAKTIF) */}
            <div>
              <div className="flex items-center justify-between mb-4">
                <label className="font-heading font-bold text-lg text-gray-900 flex items-center gap-2">
                  <Flame className="w-5 h-5 text-[#C8102E]" />
                  <span>1. Pilih Level Pedas (Level 1 - 5)</span>
                </label>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {SPICY_LEVELS.map((lvl) => {
                  const isSelected = selectedLevel.level === lvl.level;
                  return (
                    <button
                      key={lvl.level}
                      onClick={() => setSelectedLevel(lvl)}
                      className={`p-3.5 rounded-2xl border text-left transition-all flex items-center justify-between ${isSelected
                        ? 'bg-[#C8102E] text-white border-[#C8102E] shadow-lg shadow-red-600/25 scale-[1.02]'
                        : 'bg-gray-50/80 text-gray-700 border-gray-200 hover:bg-red-50/50 hover:border-red-200'
                        }`}
                    >
                      <div className="flex items-center gap-3">
                        <span className="text-2xl">{lvl.emoji}</span>
                        <div className="flex flex-col">
                          <span className={`font-bold text-sm ${isSelected ? 'text-white' : 'text-gray-900'}`}>
                            Lvl {lvl.level}: {lvl.name}
                          </span>
                          <span className={`text-[11px] ${isSelected ? 'text-red-100' : 'text-gray-500'}`}>
                            {lvl.desc}
                          </span>
                        </div>
                      </div>
                      {isSelected && <Check className="w-5 h-5 text-white shrink-0 ml-1" />}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* STEP 2: TOPPING TAMBAHAN (CHIPS / CHECKBOX INTERAKTIF) */}
            <div>
              <div className="flex items-center justify-between mb-4">
                <label className="font-heading font-bold text-lg text-gray-900 flex items-center gap-2">
                  <Plus className="w-5 h-5 text-amber-500" />
                  <span>2. Tambah Topping Favorit</span>
                </label>
                <span className="text-xs font-medium text-gray-500">
                  {selectedToppings.length} Dipilih
                </span>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {EXTRA_TOPPINGS.map((topping) => {
                  const isChecked = selectedToppings.includes(topping.id);
                  return (
                    <button
                      key={topping.id}
                      onClick={() => toggleTopping(topping.id)}
                      className={`p-3 rounded-2xl border text-left transition-all flex flex-col justify-between ${isChecked
                        ? 'bg-amber-500 text-white border-amber-500 shadow-md scale-[1.02]'
                        : 'bg-white text-gray-800 border-gray-200 hover:border-amber-300 hover:bg-amber-50/30'
                        }`}
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-xl">{topping.icon}</span>
                        {isChecked ? (
                          <span className="bg-white/30 text-white rounded-full p-0.5">
                            <Check className="w-3.5 h-3.5" />
                          </span>
                        ) : (
                          <Plus className="w-4 h-4 text-gray-400" />
                        )}
                      </div>
                      <div className="mt-2">
                        <div className={`font-bold text-xs ${isChecked ? 'text-white' : 'text-gray-900'}`}>
                          {topping.name}
                        </div>
                        <div className={`text-[11px] font-semibold mt-0.5 ${isChecked ? 'text-amber-100' : 'text-gray-500'}`}>
                          +Rp {topping.price.toLocaleString('id-ID')}
                        </div>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

          </div>

          {/* RIGHT: LIVE ORDER SUMMARY CARD */}
          <div className="lg:col-span-5 bg-[#FAF8F5] rounded-3xl p-6 border border-gray-200/80 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between border-b border-gray-200 pb-4 mb-4">
                <h3 className="font-heading font-extrabold text-xl text-gray-900 flex items-center gap-2">
                  <span>Ringkasan Racikan</span>
                </h3>
                <button
                  onClick={handleReset}
                  className="text-xs font-semibold text-gray-500 hover:text-red-600 flex items-center gap-1 transition-colors"
                >
                  <RefreshCw className="w-3.5 h-3.5" />
                  <span>Reset</span>
                </button>
              </div>

              {/* DETAILS */}
              <div className="space-y-3.5 text-sm">

                {/* BASE SEBLAK */}
                <div className="flex justify-between items-center text-gray-700">
                  <span>Kerupuk & Bumbu Kencur Dasar</span>
                  <span className="font-bold text-gray-900">Rp {BASE_PRICE.toLocaleString('id-ID')}</span>
                </div>

                {/* SELECTED LEVEL */}
                <div className="flex justify-between items-center text-gray-700 bg-red-50 p-2.5 rounded-xl border border-red-100">
                  <span className="flex items-center gap-1.5 text-xs font-bold text-[#C8102E]">
                    <span>{selectedLevel.emoji}</span>
                    <span>Lvl {selectedLevel.level}: {selectedLevel.name}</span>
                  </span>
                  <span className="text-xs font-bold text-emerald-600">Gratis Custom</span>
                </div>

                {/* SELECTED TOPPINGS LIST */}
                <div className="pt-2">
                  <span className="text-xs font-bold text-gray-500 uppercase tracking-wider block mb-2">
                    Topping Tambahan:
                  </span>
                  {selectedToppings.length === 0 ? (
                    <p className="text-xs text-gray-400 italic">Belum ada topping tambahan dipilih</p>
                  ) : (
                    <div className="space-y-2">
                      {selectedToppings.map((id) => {
                        const top = EXTRA_TOPPINGS.find((t) => t.id === id);
                        if (!top) return null;
                        return (
                          <div key={id} className="flex justify-between items-center text-xs text-gray-700">
                            <span className="flex items-center gap-1.5">
                              <span>{top.icon}</span>
                              <span>{top.name}</span>
                            </span>
                            <span className="font-semibold">+Rp {top.price.toLocaleString('id-ID')}</span>
                          </div>
                        );
                      })}
                    </div>
                  )}
                </div>

              </div>
            </div>

            {/* TOTAL & SUBMIT BUTTON */}
            <div className="pt-6 border-t border-gray-200 mt-6 space-y-4">
              <div className="flex items-end justify-between">
                <span className="text-sm font-bold text-gray-500">Estimasi Total:</span>
                <span className="font-heading font-extrabold text-3xl text-[#C8102E]">
                  Rp {grandTotal.toLocaleString('id-ID')}
                </span>
              </div>

              <button
                onClick={handleSendCustomOrder}
                className="w-full flex items-center justify-center gap-2 bg-[#C8102E] hover:bg-[#9E0B22] text-white py-4 px-6 rounded-2xl font-bold text-base shadow-xl shadow-red-600/30 hover:shadow-red-600/40 hover:scale-[1.02] active:scale-95 transition-all"
              >
                <Send className="w-5 h-5" />
                <span>Kirim Pesanan Kebalap WA!</span>
              </button>

              <p className="text-[11px] text-gray-400 text-center font-medium">
                🔒 Pesanan akan langsung diteruskan ke WhatsApp Admin SEBLAKKUY.
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
