import React from 'react';
import { FEATURES_DATA } from '../data/menu';
import { Flame, UtensilsCrossed, Truck, Clock } from 'lucide-react';

export default function Features() {
  // MAP ICON STRING TO LUCIDE COMPONENT
  const renderIcon = (iconName) => {
    switch (iconName) {
      case 'Flame':
        return <Flame className="w-7 h-7 text-[#C8102E]" />;
      case 'UtensilsCrossed':
        return <UtensilsCrossed className="w-7 h-7 text-amber-500" />;
      case 'Truck':
        return <Truck className="w-7 h-7 text-emerald-600" />;
      case 'Clock':
        return <Clock className="w-7 h-7 text-blue-600" />;
      default:
        return <Flame className="w-7 h-7 text-[#C8102E]" />;
    }
  };

  const getBgGlow = (id) => {
    switch (id) {
      case 1:
        return 'bg-red-50 border-red-100 group-hover:border-red-300';
      case 2:
        return 'bg-amber-50 border-amber-100 group-hover:border-amber-300';
      case 3:
        return 'bg-emerald-50 border-emerald-100 group-hover:border-emerald-300';
      case 4:
        return 'bg-blue-50 border-blue-100 group-hover:border-blue-300';
      default:
        return 'bg-red-50 border-red-100';
    }
  };

  return (
    <section id="keunggulan" className="py-16 md:py-24 bg-white border-y border-gray-100 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* SECTION HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mt-4 tracking-tight">
            Cita Rasa Seblakkuy
          </h2>
          <p className="text-gray-600 text-base sm:text-lg mt-3">
            Bukan sekadar pedas biasa! Kami hadirkan racikan seblak yang ramah di kantong tapi punya standar rasa & kebersihan bintang lima.
          </p>
        </div>

        {/* 4 CARDS GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {FEATURES_DATA.map((feature) => (
            <div
              key={feature.id}
              className={`group p-8 rounded-3xl border transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl ${getBgGlow(feature.id)}`}
            >
              <div className="w-14 h-14 bg-white rounded-2xl shadow-sm border border-gray-100 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                {renderIcon(feature.icon)}
              </div>
              <h3 className="font-heading font-extrabold text-xl text-gray-900 mb-3 group-hover:text-[#C8102E] transition-colors">
                {feature.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
