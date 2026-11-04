import React from 'react';
import { STORE_INFO } from '../data/sareesData';
import { MapPin, Clock, Phone, Star, ExternalLink, Heart, Sparkles, MessageCircle } from 'lucide-react';
import InstagramIcon from './InstagramIcon';

export default function Footer({ language, onSelectCategory }) {
  return (
    <footer className="bg-[#30050d] text-[#faedd0] border-t-2 border-amber-500/40 pt-16 pb-24 lg:pb-12 text-left">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-amber-900/60">
          
          {/* Brand Info & Story (Col 1-4) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-amber-400 to-yellow-600 flex items-center justify-center text-[#450514] shadow-md border-2 border-amber-200">
                <span className="font-serif font-black text-2xl tracking-tighter">श्री</span>
              </div>
              <div>
                <h3 className="font-serif text-2xl font-bold text-amber-200 leading-none">
                  Shreenath Ji Sarees
                </h3>
                <p className="text-xs text-amber-400/90 font-medium mt-1">
                  {language === 'hi' ? 'श्रीनाथ जी साड़ीज़ • कोठी बाजार, बैतूल' : 'Cement Road, Kothi Bazar, Betul (M.P.)'}
                </p>
              </div>
            </div>

            <p className="text-xs text-stone-300 leading-relaxed">
              {language === 'hi'
                ? 'बैतूल का प्रतिष्ठित साड़ी शॉपिंग मॉल। बनारसी कतान सिल्क, गोल्डन जरी बॉर्डर साड़ियाँ, दुल्हन लहंगे, एवं ड्रेस मटेरियल्स का अद्वितीय संग्रह।'
                : 'Betul’s cherished ethnic wear and saree retailer. Celebrated for authentic golden zari borders, royal woven silks, Banarasi styles, and bespoke wedding trousseau.'}
            </p>

            {/* Badges */}
            <div className="flex items-center gap-3 pt-1">
              <div className="flex items-center gap-1 bg-amber-400/10 border border-amber-400/30 px-2.5 py-1 rounded-md text-xs font-bold text-amber-300">
                <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                <span>4.1★ Google & Justdial</span>
              </div>

              <div className="flex items-center gap-1 bg-emerald-500/10 border border-emerald-400/30 px-2.5 py-1 rounded-md text-xs font-bold text-emerald-300">
                <Clock className="w-3.5 h-3.5" />
                <span>Open till 9 PM</span>
              </div>
            </div>
          </div>

          {/* Saree Collections Links (Col 5-7) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-serif text-base font-bold text-amber-300 uppercase tracking-wider">
              {language === 'hi' ? 'प्रमुख संग्रह' : 'Popular Collections'}
            </h4>
            <ul className="space-y-2 text-xs text-stone-300">
              <li>
                <a 
                  href="#catalog" 
                  onClick={() => onSelectCategory && onSelectCategory('banarasi')}
                  className="hover:text-amber-200 transition-colors flex items-center gap-1.5"
                >
                  <span className="text-amber-500">›</span> Pure Banarasi Katan Silk
                </a>
              </li>
              <li>
                <a 
                  href="#catalog" 
                  onClick={() => onSelectCategory && onSelectCategory('zari-border')}
                  className="hover:text-amber-200 transition-colors flex items-center gap-1.5"
                >
                  <span className="text-amber-500">›</span> Lightweight Golden Zari Borders
                </a>
              </li>
              <li>
                <a 
                  href="#catalog" 
                  onClick={() => onSelectCategory && onSelectCategory('chanderi')}
                  className="hover:text-amber-200 transition-colors flex items-center gap-1.5"
                >
                  <span className="text-amber-500">›</span> MP Chanderi & Maheshwari Weaves
                </a>
              </li>
              <li>
                <a 
                  href="#bridal-lounge" 
                  className="hover:text-amber-200 transition-colors flex items-center gap-1.5"
                >
                  <span className="text-amber-500">›</span> Bridal Wedding Lounge
                </a>
              </li>
              <li>
                <a 
                  href="#catalog" 
                  onClick={() => onSelectCategory && onSelectCategory('organza')}
                  className="hover:text-amber-200 transition-colors flex items-center gap-1.5"
                >
                  <span className="text-amber-500">›</span> Organza & Shimmer Tissue Sarees
                </a>
              </li>
              <li>
                <a 
                  href="#catalog" 
                  onClick={() => onSelectCategory && onSelectCategory('dress-materials')}
                  className="hover:text-amber-200 transition-colors flex items-center gap-1.5"
                >
                  <span className="text-amber-500">›</span> Unstitched Suit Materials & Dupattas
                </a>
              </li>
            </ul>
          </div>

          {/* Store Address & Contact (Col 8-10) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-serif text-base font-bold text-amber-300 uppercase tracking-wider">
              {language === 'hi' ? 'दुकान संपर्क' : 'Showroom Address'}
            </h4>
            <div className="space-y-2.5 text-xs text-stone-300">
              <p className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span>Cement Road, Kothi Bazar, Betul – 460001, Madhya Pradesh</span>
              </p>

              <p className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Open Daily: 10:30 AM – 9:00 PM</span>
              </p>

              <p className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-amber-400 shrink-0" />
                <a href={`tel:${STORE_INFO.phone}`} className="hover:text-white font-bold">{STORE_INFO.phone}</a>
              </p>

              <p className="flex items-center gap-2">
                <MessageCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                <a 
                  href={`https://wa.me/${STORE_INFO.whatsapp}`} 
                  target="_blank" 
                  rel="noreferrer"
                  className="text-emerald-300 hover:text-emerald-200 font-bold"
                >
                  WhatsApp Video Shopping Available
                </a>
              </p>
            </div>
          </div>

          {/* Social Profiles & Trust Links (Col 11-12) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="font-serif text-base font-bold text-amber-300 uppercase tracking-wider">
              {language === 'hi' ? 'सोशल प्रोफाइल्स' : 'Follow & Find'}
            </h4>
            <div className="flex flex-col space-y-2 text-xs">
              <a
                href={STORE_INFO.instagramUrl}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 text-pink-300 hover:text-pink-200 font-bold bg-pink-900/30 border border-pink-700/40 p-2 rounded-lg"
              >
                <InstagramIcon className="w-4 h-4" />
                <span>Instagram</span>
                <ExternalLink className="w-3 h-3 ml-auto" />
              </a>

              <a
                href={STORE_INFO.googleMapsUrl}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 text-amber-300 hover:text-amber-200 font-bold bg-amber-900/30 border border-amber-700/40 p-2 rounded-lg"
              >
                <MapPin className="w-4 h-4" />
                <span>Google Maps</span>
                <ExternalLink className="w-3 h-3 ml-auto" />
              </a>

              <a
                href={STORE_INFO.justdialUrl}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 text-amber-300 hover:text-amber-200 font-bold bg-amber-900/30 border border-amber-700/40 p-2 rounded-lg"
              >
                <Star className="w-4 h-4" />
                <span>Justdial Page</span>
                <ExternalLink className="w-3 h-3 ml-auto" />
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Sub-footer */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-400">
          <p>
            © {new Date().getFullYear()} Shreenath Ji Sarees (Shrinath Ji Saarees Shopping Mall), Kothi Bazar, Betul, MP. All rights reserved.
          </p>

          <p className="flex items-center gap-1.5 text-amber-300/80">
            <span>Serving Betul, Multai, Shahpur & Amla with Authentic Weaves</span>
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
          </p>
        </div>

      </div>
    </footer>
  );
}
