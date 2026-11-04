import React from 'react';
import { X, Star, Heart, MessageCircle, Phone, Sparkles, CheckCircle2, ShieldCheck, Truck, Scissors } from 'lucide-react';
import { STORE_INFO } from '../data/sareesData';

export default function ProductDetailModal({ 
  saree, 
  onClose, 
  language, 
  isWishlisted, 
  onToggleWishlist 
}) {
  if (!saree) return null;

  const whatsappInquiryUrl = `https://wa.me/${STORE_INFO.whatsapp}?text=${encodeURIComponent(
    `Namaste Shreenath Ji Sarees! I am interested in purchasing/viewing "${saree.name}" (Code: ${saree.id}, ₹${saree.price.toLocaleString('en-IN')}) at your Cement Road, Kothi Bazar Betul store. Could you share more photos or a video clip of this saree?`
  )}`;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6 animate-fadeIn">
      
      {/* Modal Dialog */}
      <div 
        className="relative bg-[#fffdfa] rounded-3xl max-w-4xl w-full overflow-hidden shadow-2xl border border-amber-300 text-left my-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 bg-white/90 hover:bg-stone-100 text-stone-700 p-2 rounded-full shadow-md transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-12 max-h-[85vh] overflow-y-auto">
          
          {/* Left Column: Saree Image */}
          <div className="md:col-span-5 relative bg-stone-100 min-h-[350px] md:min-h-full">
            <img
              src={saree.image}
              alt={saree.name}
              className="w-full h-full object-cover object-top"
            />
            {saree.tag && (
              <span className="absolute top-4 left-4 bg-[#7d0a28] text-amber-200 text-xs font-bold px-3 py-1 rounded-full shadow border border-amber-400/50">
                {saree.tag}
              </span>
            )}
            <div className="absolute bottom-4 left-4 right-4 bg-black/60 backdrop-blur-md rounded-xl p-3 text-white text-xs">
              <p className="font-semibold text-amber-300">Shreenath Ji Sarees Guarantee</p>
              <p className="text-[11px] text-stone-200">100% Quality Inspected at our Kothi Bazar showroom</p>
            </div>
          </div>

          {/* Right Column: Saree Specs & Order Options */}
          <div className="md:col-span-7 p-6 sm:p-8 space-y-6">
            
            {/* Header / Titles */}
            <div>
              <div className="flex items-center justify-between gap-2 mb-1">
                <span className="text-xs uppercase font-extrabold tracking-wider text-[#7d0a28]">
                  {saree.fabric} • {saree.colorFamily}
                </span>

                <div className="flex items-center gap-1 bg-amber-100 px-2 py-0.5 rounded text-xs font-bold text-amber-900 border border-amber-300">
                  <Star className="w-3.5 h-3.5 fill-amber-500 text-amber-600" />
                  <span>{saree.rating} ({saree.reviewsCount} {language === 'hi' ? 'रिव्यूज' : 'reviews'})</span>
                </div>
              </div>

              <h2 className="font-serif text-xl sm:text-2xl font-bold text-stone-900 leading-snug">
                {language === 'hi' ? saree.hindiName : saree.name}
              </h2>

              <p className="text-xs text-stone-500 mt-1">
                Product Code: <span className="font-mono font-bold text-stone-700">{saree.id}</span> | In Stock at Kothi Bazar Showroom
              </p>
            </div>

            {/* Price Box */}
            <div className="bg-amber-50/70 p-4 rounded-2xl border border-amber-200 flex items-center justify-between">
              <div>
                <p className="text-xs font-medium text-stone-500">{language === 'hi' ? 'विशेष मूल्य' : 'Exclusive Store Price'}</p>
                <div className="flex items-baseline gap-2.5">
                  <span className="text-2xl sm:text-3xl font-extrabold text-[#7d0a28]">
                    ₹{saree.price.toLocaleString('en-IN')}
                  </span>
                  {saree.originalPrice && (
                    <span className="text-sm text-stone-400 line-through">
                      ₹{saree.originalPrice.toLocaleString('en-IN')}
                    </span>
                  )}
                  {saree.discount && (
                    <span className="text-xs font-bold bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded">
                      {saree.discount}
                    </span>
                  )}
                </div>
              </div>

              <button
                onClick={() => onToggleWishlist(saree)}
                className={`flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-bold border transition-colors ${
                  isWishlisted 
                    ? 'bg-[#7d0a28] text-white border-[#7d0a28]' 
                    : 'bg-white text-stone-700 border-stone-300 hover:border-[#7d0a28]'
                }`}
              >
                <Heart className={`w-4 h-4 ${isWishlisted ? 'fill-white' : ''}`} />
                <span>{isWishlisted ? (language === 'hi' ? 'सहेजा गया' : 'Saved') : (language === 'hi' ? 'सहेजें' : 'Save')}</span>
              </button>
            </div>

            {/* Description */}
            <div>
              <h4 className="text-xs font-bold uppercase text-stone-400 tracking-wider mb-1.5">
                {language === 'hi' ? 'विवरण' : 'Product Story & Weave'}
              </h4>
              <p className="text-stone-600 text-sm leading-relaxed">
                {saree.description}
              </p>
            </div>

            {/* Specification Grid */}
            <div className="grid grid-cols-2 gap-3 text-xs">
              <div className="bg-stone-50 p-2.5 rounded-xl border border-stone-200">
                <span className="text-stone-400 font-semibold block">{language === 'hi' ? 'जरी प्रकार' : 'Zari Detail'}:</span>
                <span className="font-bold text-stone-800">{saree.zari}</span>
              </div>
              <div className="bg-stone-50 p-2.5 rounded-xl border border-stone-200">
                <span className="text-stone-400 font-semibold block">{language === 'hi' ? 'साड़ी लंबाई' : 'Length & Cut'}:</span>
                <span className="font-bold text-stone-800">{saree.length}</span>
              </div>
              <div className="bg-stone-50 p-2.5 rounded-xl border border-stone-200">
                <span className="text-stone-400 font-semibold block">{language === 'hi' ? 'धुलाई निर्देश' : 'Wash Care'}:</span>
                <span className="font-bold text-stone-800">{saree.washCare}</span>
              </div>
              <div className="bg-stone-50 p-2.5 rounded-xl border border-stone-200">
                <span className="text-stone-400 font-semibold block">{language === 'hi' ? 'उपयुक्त अवसर' : 'Best For'}:</span>
                <span className="font-bold text-stone-800">{saree.occasion}</span>
              </div>
            </div>

            {/* Highlights bullets */}
            {saree.highlights && (
              <div className="space-y-1.5">
                <h4 className="text-xs font-bold uppercase text-stone-400 tracking-wider">
                  {language === 'hi' ? 'प्रमुख आकर्षण' : 'Key Highlights'}
                </h4>
                {saree.highlights.map((h, i) => (
                  <div key={i} className="flex items-center gap-2 text-xs text-stone-700">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span>{h}</span>
                  </div>
                ))}
              </div>
            )}

            {/* In-store benefits bar */}
            <div className="pt-2 border-t border-stone-200 flex flex-wrap gap-4 text-stone-600 text-xs">
              <span className="flex items-center gap-1">
                <Scissors className="w-3.5 h-3.5 text-amber-700" />
                <span>{language === 'hi' ? 'फॉल & पीको उपलब्ध' : 'Fall & Pico Available'}</span>
              </span>
              <span className="flex items-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5 text-amber-700" />
                <span>{language === 'hi' ? '100% प्रामाणिक सिल्क' : '100% Authentic Silk'}</span>
              </span>
              <span className="flex items-center gap-1">
                <Truck className="w-3.5 h-3.5 text-amber-700" />
                <span>{language === 'hi' ? 'बैतूल जिले में डिलीवरी' : 'Betul District Delivery'}</span>
              </span>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <a
                href={whatsappInquiryUrl}
                target="_blank"
                rel="noreferrer"
                className="flex-1 bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3 px-4 rounded-xl text-xs sm:text-sm flex items-center justify-center gap-2 shadow-md transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                <span>{language === 'hi' ? 'व्हाट्सएप पर ऑर्डर / वीडियो देखें' : 'Inquire on WhatsApp'}</span>
              </a>

              <a
                href={`tel:${STORE_INFO.phone}`}
                className="bg-[#580d1e] hover:bg-[#7d0a28] text-amber-200 font-bold py-3 px-4 rounded-xl text-xs sm:text-sm flex items-center justify-center gap-2 transition-colors"
              >
                <Phone className="w-4 h-4" />
                <span>{language === 'hi' ? 'दुकान पर कॉल करें' : 'Call Betul Store'}</span>
              </a>
            </div>

          </div>

        </div>

      </div>

    </div>
  );
}
