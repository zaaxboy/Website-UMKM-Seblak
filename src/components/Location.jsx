import React from 'react';
import { BRAND_INFO } from '../data/menu';
import { MapPin, Clock, Phone, ExternalLink, Navigation } from 'lucide-react';

export default function Location() {
  const handleOpenMaps = () => {
    // Open Google Maps search direction
    const query = encodeURIComponent(`${BRAND_INFO.name} ${BRAND_INFO.address}`);
    window.open(`https://www.google.com/maps/search/?api=1&query=${query}`, '_blank');
  };

  return (
    <section id="lokasi" className="py-16 md:py-24 bg-white border-t border-gray-100 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* HEADER SECTION */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mt-4 tracking-tight">
            Lokasi Outlet & Jam Buka 📍
          </h2>
          <p className="text-gray-600 text-base sm:text-lg mt-3">
            Mampir langsung buat santap hangat di tempat atau pesan takeaway tanpa antri!
          </p>
        </div>

        {/* CONTENT GRID: INFO & MAP */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">

          {/* LEFT: ADDRESS & OPERATIONAL INFO */}
          <div className="lg:col-span-5 bg-[#FAF8F5] p-8 rounded-3xl border border-gray-200/80 flex flex-col justify-between space-y-6">
            <div className="space-y-6">

              {/* ALAMAT */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-red-100 text-[#C8102E] rounded-2xl flex items-center justify-center shrink-0">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-lg text-gray-900 mb-1">Alamat Outlet</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {BRAND_INFO.address}
                  </p>
                </div>
              </div>

              {/* JAM OPERASIONAL */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-amber-100 text-amber-600 rounded-2xl flex items-center justify-center shrink-0">
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-lg text-gray-900 mb-1">Jam Operasional</h3>
                  <p className="text-gray-600 text-sm font-semibold">
                    {BRAND_INFO.openHours}
                  </p>
                  <span className="inline-block text-xs font-bold text-emerald-600 bg-emerald-50 px-2.5 py-0.5 rounded-md mt-1 border border-emerald-200">
                    🟢 Buka Setiap Hari
                  </span>
                </div>
              </div>

              {/* WHATSAPP CONTACT */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-2xl flex items-center justify-center shrink-0">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-lg text-gray-900 mb-1">Hubungi Admin / WA</h3>
                  <p className="text-gray-600 text-sm font-medium">
                    +{BRAND_INFO.whatsappNumber}
                  </p>
                  <p className="text-xs text-gray-400 mt-0.5">
                    Respon cepat untuk pemesanan & pertanyaan delivery.
                  </p>
                </div>
              </div>

            </div>

            {/* BUTTON NAVIGATION MAPS */}
            <div className="pt-4 border-t border-gray-200">
              <button
                onClick={handleOpenMaps}
                className="w-full flex items-center justify-center gap-2 bg-gray-900 hover:bg-gray-800 text-white py-3.5 px-5 rounded-2xl font-bold text-sm shadow-md transition-all hover:scale-[1.01]"
              >
                <Navigation className="w-4 h-4 text-red-400" />
                <span>Buka Rute di Google Maps</span>
                <ExternalLink className="w-3.5 h-3.5 text-gray-400 ml-auto" />
              </button>
            </div>

          </div>

          {/* RIGHT: MAP IFRAME EMBED */}
          <div className="lg:col-span-7 bg-gray-100 rounded-3xl overflow-hidden border border-gray-200 shadow-md relative min-h-[350px]">
            {/* GANTI LINK GOOGLE MAPS IFRAME ASLI DI SINI */}

            <iframe
              title="Google Maps Location SEBLAKKUY"
              src={BRAND_INFO.mapsEmbedUrl}
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: '380px' }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full rounded-3xl grayscale-[20%] hover:grayscale-0 transition-all duration-300"
            />
          </div>

        </div>

      </div>
    </section>
  );
}
