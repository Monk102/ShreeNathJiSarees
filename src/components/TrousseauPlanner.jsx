import React, { useState } from 'react';
import { TROUSSEAU_EVENTS, STORE_INFO } from '../data/sareesData';
import { Sparkles, Calendar, CheckCircle2, MessageCircle, ArrowRight, Heart } from 'lucide-react';

export default function TrousseauPlanner({ language, onSelectCategory }) {
  const [activeEvent, setActiveEvent] = useState(TROUSSEAU_EVENTS[0].id);

  const currentEvent = TROUSSEAU_EVENTS.find((e) => e.id === activeEvent) || TROUSSEAU_EVENTS[0];

  const eventVisuals = {
    haldi: {
      image: "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&w=800&q=80",
      palette: ["#f59e0b", "#fbbf24", "#d97706", "#fef3c7"],
      catTarget: "chanderi"
    },
    sangeet: {
      image: "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?auto=format&fit=crop&w=800&q=80",
      palette: ["#1e3a8a", "#4338ca", "#047857", "#f43f5e"],
      catTarget: "zari-border"
    },
    wedding: {
      image: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=800&q=80",
      palette: ["#991b1b", "#b91c1c", "#d97706", "#fef08a"],
      catTarget: "bridal"
    },
    reception: {
      image: "https://images.unsplash.com/photo-1610030469668-93213045a557?auto=format&fit=crop&w=800&q=80",
      palette: ["#581c87", "#0284c7", "#f472b6", "#e0e7ff"],
      catTarget: "organza"
    }
  };

  const visual = eventVisuals[activeEvent] || eventVisuals.haldi;

  return (
    <section id="trousseau" className="py-16 bg-gradient-to-b from-[#fbf7f0] to-[#f7f0e4] border-b border-amber-900/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-bold tracking-wider uppercase mb-2">
            <Sparkles className="w-3.5 h-3.5 text-amber-600" />
            {language === 'hi' ? 'वैवाहिक वार्डरोब गाइड' : 'Interactive Wedding Stylist'}
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-extrabold text-[#450514]">
            {language === 'hi' ? 'बैतूल ब्राइडल ट्रूसो प्लानर' : 'Betul Bridal & Festive Trousseau Planner'}
          </h2>
          <p className="mt-2 text-stone-600 text-sm sm:text-base">
            {language === 'hi'
              ? 'हल्दी से लेकर रिसेप्शन तक — अपने हर खास उत्सव के लिए सही फैब्रिक, जरी बॉर्डर और शेड चुनें'
              : 'Select your upcoming wedding event to receive curated fabric advice, color harmony, and matching weaves'}
          </p>
        </div>

        {/* Event Selection Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-10">
          {TROUSSEAU_EVENTS.map((event) => {
            const isActive = activeEvent === event.id;
            return (
              <button
                key={event.id}
                onClick={() => setActiveEvent(event.id)}
                className={`px-5 py-3 rounded-2xl font-bold text-xs sm:text-sm transition-all shadow-xs cursor-pointer flex items-center gap-2 ${
                  isActive
                    ? 'bg-[#7d0a28] text-white shadow-lg border-2 border-amber-400'
                    : 'bg-white hover:bg-amber-50 text-stone-700 border border-amber-200'
                }`}
              >
                <Calendar className={`w-4 h-4 ${isActive ? 'text-amber-300' : 'text-stone-400'}`} />
                <span>{language === 'hi' ? event.hindiTitle : event.title}</span>
              </button>
            );
          })}
        </div>

        {/* Dynamic Event Showcase Card */}
        <div className="bg-white rounded-3xl overflow-hidden border border-amber-300 shadow-xl max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-12 text-left">
          
          {/* Visual Showcase Side */}
          <div className="md:col-span-5 relative min-h-[300px] md:min-h-full">
            <img
              src={visual.image}
              alt={currentEvent.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
            
            <div className="absolute bottom-6 left-6 right-6 text-white">
              <span className="text-amber-300 text-xs uppercase font-extrabold tracking-wider">
                Recommended Look
              </span>
              <h3 className="font-serif text-2xl font-bold text-white mt-1">
                {language === 'hi' ? currentEvent.hindiTitle : currentEvent.title}
              </h3>
              
              {/* Color Swatches */}
              <div className="mt-3 flex items-center gap-2">
                <span className="text-xs text-stone-300 font-semibold">Recommended Palette:</span>
                <div className="flex items-center gap-1.5">
                  {visual.palette.map((c, i) => (
                    <span
                      key={i}
                      className="w-5 h-5 rounded-full border-2 border-white shadow-xs"
                      style={{ backgroundColor: c }}
                      title={`Palette color ${i + 1}`}
                    ></span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Details & Recommendation Side */}
          <div className="md:col-span-7 p-6 sm:p-10 flex flex-col justify-between space-y-6">
            
            <div className="space-y-5">
              
              <div>
                <span className="text-xs uppercase font-extrabold text-[#7d0a28] tracking-widest">
                  {language === 'hi' ? 'विशेषज्ञ स्टाइलिंग सलाह' : 'Stylist Recommendation'}
                </span>
                <h4 className="font-serif text-xl sm:text-2xl font-bold text-stone-900 mt-1">
                  {language === 'hi' ? `इस अवसर के लिए श्रेष्ठ परिधान` : `Curated Style Guide for ${currentEvent.title}`}
                </h4>
              </div>

              {/* Specs Box */}
              <div className="space-y-3">
                <div className="bg-amber-50/80 p-3.5 rounded-xl border border-amber-200/80">
                  <span className="text-xs font-bold text-amber-900 uppercase block">
                    {language === 'hi' ? 'अनुशंसित फैब्रिक्स' : 'Ideal Fabrics'}:
                  </span>
                  <p className="text-sm font-semibold text-stone-800 mt-0.5">
                    {currentEvent.recommendedFabrics}
                  </p>
                </div>

                <div className="bg-stone-50 p-3.5 rounded-xl border border-stone-200">
                  <span className="text-xs font-bold text-stone-500 uppercase block">
                    {language === 'hi' ? 'लोकप्रिय शेड्स' : 'Harmonious Shades'}:
                  </span>
                  <p className="text-sm font-semibold text-stone-800 mt-0.5">
                    {currentEvent.idealColors}
                  </p>
                </div>

                <div className="bg-[#fcfaf7] p-3.5 rounded-xl border border-amber-200">
                  <span className="text-xs font-bold text-[#7d0a28] uppercase block flex items-center gap-1">
                    <Sparkles className="w-3.5 h-3.5" />
                    {language === 'hi' ? 'ड्रेपिंग एवं कम्फर्ट टिप' : 'Draping & Elegance Tip'}:
                  </span>
                  <p className="text-xs sm:text-sm text-stone-600 mt-1 leading-relaxed">
                    {currentEvent.tip}
                  </p>
                </div>
              </div>

            </div>

            {/* CTAs */}
            <div className="pt-4 border-t border-stone-200 flex flex-col sm:flex-row gap-3">
              <a
                href="#catalog"
                onClick={() => onSelectCategory && onSelectCategory(visual.catTarget)}
                className="flex-1 bg-[#7d0a28] hover:bg-[#580d1e] text-white py-3 px-4 rounded-xl text-xs sm:text-sm font-bold flex items-center justify-center gap-2 shadow-md transition-colors"
              >
                <span>{language === 'hi' ? 'इस लुक की साड़ियाँ देखें' : 'View Matching Sarees'}</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href={`https://wa.me/${STORE_INFO.whatsapp}?text=${encodeURIComponent(
                  `Namaste Shreenath Ji Sarees! I am planning my trousseau shopping for ${currentEvent.title} in Betul. Can you share suitable sarees and dress materials?`
                )}`}
                target="_blank"
                rel="noreferrer"
                className="bg-emerald-600 hover:bg-emerald-700 text-white py-3 px-4 rounded-xl text-xs sm:text-sm font-bold flex items-center justify-center gap-2 shadow-md transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                <span>{language === 'hi' ? 'व्हाट्सएप सहायता' : 'WhatsApp Stylist'}</span>
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
