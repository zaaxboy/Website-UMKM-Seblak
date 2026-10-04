import React from 'react';
import { ORDER_STEPS } from '../data/menu';
import { Utensils, MessageSquare, CreditCard, ShoppingBag } from 'lucide-react';

export default function HowToOrder() {
  const getStepIcon = (index) => {
    switch (index) {
      case 0:
        return <Utensils className="w-6 h-6 text-[#C8102E]" />;
      case 1:
        return <MessageSquare className="w-6 h-6 text-emerald-600" />;
      case 2:
        return <CreditCard className="w-6 h-6 text-amber-500" />;
      case 3:
        return <ShoppingBag className="w-6 h-6 text-blue-600" />;
      default:
        return <Utensils className="w-6 h-6 text-[#C8102E]" />;
    }
  };

  return (
    <section id="cara-pesan" className="py-16 md:py-24 bg-white border-y border-gray-100 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* HEADER SECTION */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mt-4 tracking-tight">
            Cara Pesan Seblak Tanpa Ribet
          </h2>
          <p className="text-gray-600 text-base sm:text-lg mt-3">
            Hanya 4 langkah gampang dari HP kamu, seblak pedas hangat langsung siap dinikmati!
          </p>
        </div>

        {/* STEPS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {ORDER_STEPS.map((step, idx) => (
            <div
              key={step.step}
              className="relative bg-[#FAF8F5] p-8 rounded-3xl border border-gray-100 hover:border-red-200 hover:shadow-xl transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1"
            >
              <div>
                {/* STEP NUMBER BADGE */}
                <div className="flex items-center justify-between mb-6">
                  <span className="font-heading font-black text-3xl text-red-200 group-hover:text-[#C8102E] transition-colors">
                    {step.step}
                  </span>
                  <div className="w-12 h-12 bg-white rounded-2xl border border-gray-100 shadow-sm flex items-center justify-center">
                    {getStepIcon(idx)}
                  </div>
                </div>

                <h3 className="font-heading font-extrabold text-xl text-gray-900 mb-2">
                  {step.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {step.desc}
                </p>
              </div>

              {/* CONNECTION ARROW (FOR DESKTOP) */}
              {idx < ORDER_STEPS.length - 1 && (
                <div className="hidden lg:block absolute -right-4 top-1/2 -translate-y-1/2 z-10 text-gray-300 pointer-events-none">
                  <span className="text-2xl font-bold">➔</span>
                </div>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
