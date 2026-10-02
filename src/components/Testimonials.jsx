import React from 'react';
import { TESTIMONIALS_DATA } from '../data/menu';
import { Star, Quote, Heart } from 'lucide-react';

export default function Testimonials() {
  return (
    <section id="testimoni" className="py-16 md:py-24 bg-[#FAF8F5] relative overflow-hidden">

      {/* DECORATIVE LIGHT GLOW */}
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-orange-400/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-red-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">

        {/* HEADER SECTION */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mt-4 tracking-tight">
            Review Jujur Anak Muda & Foodies 💬
          </h2>
          <p className="text-gray-600 text-base sm:text-lg mt-3">
            Bukan kata admin, ini kata ribuan Gen Z yang udah ketagihan pedasnya SEBLAKKUY!
          </p>
        </div>

        {/* 3 TESTIMONIAL CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS_DATA.map((testi) => (
            <div
              key={testi.id}
              className="bg-white p-8 rounded-3xl border border-gray-100 shadow-xl hover:shadow-2xl transition-all duration-300 flex flex-col justify-between relative group hover:-translate-y-1.5"
            >
              {/* QUOTE ICON */}
              <Quote className="w-10 h-10 text-red-100 group-hover:text-red-200 transition-colors absolute top-6 right-6" />

              <div>
                {/* RATING STARS */}
                <div className="flex items-center gap-1 text-amber-400 mb-4">
                  {[...Array(testi.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-amber-400" />
                  ))}
                </div>

                {/* REVIEW COMMENT */}
                <p className="text-gray-700 text-base leading-relaxed italic relative z-10 font-medium">
                  "{testi.comment}"
                </p>
              </div>

              {/* USER PROFILE INFO */}
              <div className="flex items-center gap-4 pt-6 border-t border-gray-100 mt-6">
                <img
                  src={testi.avatar}
                  alt={testi.name}
                  className="w-12 h-12 rounded-full object-cover border-2 border-[#C8102E]/20"
                />
                <div className="flex flex-col">
                  <span className="font-heading font-bold text-gray-900 text-base">
                    {testi.name}
                  </span>
                  <span className="text-xs text-gray-500 font-medium">
                    {testi.role}
                  </span>
                </div>
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
