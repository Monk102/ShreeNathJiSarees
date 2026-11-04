import React, { useState, useEffect } from 'react';
import { STORE_INFO } from '../data/sareesData';
import { MessageCircle, Phone, Navigation, ArrowUp } from 'lucide-react';

export default function FloatingActions({ language }) {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* Floating Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-20 sm:bottom-6 right-4 sm:right-6 z-40 p-3 rounded-full bg-[#7d0a28] hover:bg-[#580d1e] text-amber-200 shadow-xl border border-amber-400/50 transition-all cursor-pointer animate-fadeIn"
          title="Scroll to Top"
          aria-label="Scroll to top"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      )}

      {/* Floating WhatsApp Action Pill (Bottom Left on Desktop, Sticky Bottom Bar on Mobile) */}
      <div className="fixed bottom-6 left-6 z-40 hidden sm:flex items-center gap-2">
        <a
          href={`https://wa.me/${STORE_INFO.whatsapp}?text=Namaste%20Shreenath%20Ji%20Sarees!%20I%20would%20like%20to%20know%20more%20about%20your%20saree%20collection`}
          target="_blank"
          rel="noreferrer"
          className="group flex items-center gap-2.5 bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-3 rounded-full shadow-2xl transition-all transform hover:scale-105 border-2 border-white"
        >
          <div className="relative">
            <MessageCircle className="w-5 h-5" />
            <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-amber-300 rounded-full animate-ping"></span>
          </div>
          <span className="text-xs font-bold tracking-wide">
            {language === 'hi' ? 'व्हाट्सएप चैट / वीडियो कॉल' : 'Chat on WhatsApp'}
          </span>
        </a>
      </div>

      {/* Mobile Sticky Bottom Action Bar */}
      <div className="fixed bottom-0 left-0 right-0 z-40 sm:hidden bg-white/95 backdrop-blur-md border-t border-amber-300 px-4 py-2 flex items-center justify-between gap-2 shadow-2xl">
        <a
          href={`tel:${STORE_INFO.phone}`}
          className="flex-1 flex items-center justify-center gap-1.5 bg-stone-100 text-stone-800 py-2.5 rounded-xl text-xs font-bold"
        >
          <Phone className="w-3.5 h-3.5 text-[#7d0a28]" />
          <span>Call</span>
        </a>

        <a
          href={`https://wa.me/${STORE_INFO.whatsapp}?text=Namaste%20Shreenath%20Ji%20Sarees!`}
          target="_blank"
          rel="noreferrer"
          className="flex-1 flex items-center justify-center gap-1.5 bg-emerald-600 text-white py-2.5 rounded-xl text-xs font-bold shadow-md"
        >
          <MessageCircle className="w-3.5 h-3.5" />
          <span>WhatsApp</span>
        </a>

        <a
          href={STORE_INFO.googleMapsUrl}
          target="_blank"
          rel="noreferrer"
          className="flex-1 flex items-center justify-center gap-1.5 bg-[#7d0a28] text-amber-200 py-2.5 rounded-xl text-xs font-bold"
        >
          <Navigation className="w-3.5 h-3.5" />
          <span>Directions</span>
        </a>
      </div>
    </>
  );
}
