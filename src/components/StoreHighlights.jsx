import React from 'react';
import { STORE_HIGHLIGHTS } from '../data/sareesData';
import { Sparkles, MapPin, Clock, Star, Video, Scissors } from 'lucide-react';

const iconMap = {
  Sparkles: Sparkles,
  MapPin: MapPin,
  Clock: Clock,
  Star: Star,
  Video: Video,
  Scissors: Scissors
};

export default function StoreHighlights({ language }) {
  return (
    <section className="py-14 bg-white border-b border-amber-900/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-bold tracking-wider uppercase mb-2">
            <Sparkles className="w-3.5 h-3.5 text-amber-600" />
            {language === 'hi' ? 'हमारी विशेषताएँ' : 'Why Choose Shreenath Ji Sarees'}
          </div>
          <h2 className="font-serif text-2xl sm:text-4xl font-bold text-[#580d1e] tracking-tight">
            {language === 'hi' 
              ? 'बैतूल का सबसे भरोसेमंद साड़ी प्रतिष्ठान' 
              : 'The Hallmarks of Betul’s Favorite Saree Emporium'}
          </h2>
          <p className="mt-2 text-stone-600 text-sm sm:text-base">
            {language === 'hi'
              ? 'कोठी बाजार, बैतूल में पिछले कई वर्षों से परंपरा, नवीनता और प्रामाणिक जरी की अद्वितीय पहचान'
              : 'Serving families across Betul district with genuine golden zari weaves, honest pricing, and royal service'}
          </p>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {STORE_HIGHLIGHTS.map((item, idx) => {
            const IconComponent = iconMap[item.icon] || Sparkles;
            return (
              <div
                key={idx}
                className="group relative bg-[#fdfaf6] hover:bg-white p-6 rounded-2xl border border-amber-200/70 hover:border-amber-400 shadow-xs hover:shadow-xl transition-all duration-300 text-left flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-amber-100 to-amber-200 flex items-center justify-center text-[#7d0a28] shadow-inner mb-4 group-hover:scale-110 group-hover:bg-[#7d0a28] group-hover:text-amber-200 transition-all duration-300">
                    <IconComponent className="w-6 h-6" />
                  </div>
                  <h3 className="font-serif text-lg font-bold text-stone-900 group-hover:text-[#7d0a28] transition-colors">
                    {language === 'hi' ? item.hindiTitle : item.title}
                  </h3>
                  <p className="mt-2 text-xs sm:text-sm text-stone-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-amber-100 flex items-center text-xs font-bold text-amber-800 group-hover:text-[#7d0a28]">
                  <span>{language === 'hi' ? 'विस्तार से जानें' : 'Assured Guarantee'}</span>
                  <span className="ml-1 transition-transform group-hover:translate-x-1">→</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
