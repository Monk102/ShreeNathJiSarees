import React from 'react';
import { Heart, Star, Sparkles, MessageCircle, Eye } from 'lucide-react';
import { STORE_INFO } from '../data/sareesData';

export default function SareeCard({ 
  saree, 
  language, 
  isWishlisted, 
  onToggleWishlist, 
  onQuickView 
}) {
  const whatsappMessage = encodeURIComponent(
    `Namaste Shreenath Ji Sarees! I am interested in: "${saree.name}" (Code: ${saree.id}, ₹${saree.price.toLocaleString('en-IN')}) shown on your website. Is this piece available at your Kothi Bazar Betul showroom?`
  );

  return (
    <div className="group relative bg-white rounded-2xl overflow-hidden border border-amber-200/60 hover:border-amber-400/80 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between text-left">
      
      {/* Top Image Container */}
      <div className="relative aspect-[3/4] overflow-hidden bg-stone-100">
        <img
          src={saree.image}
          alt={saree.name}
          className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-108"
          loading="lazy"
        />

        {/* Gradient Overlay for contrast */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>

        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-1 z-10">
          {saree.tag && (
            <span className="bg-[#7d0a28] text-amber-200 text-[11px] font-bold px-2.5 py-1 rounded-full shadow-md border border-amber-400/40">
              {saree.tag}
            </span>
          )}
          {saree.discount && (
            <span className="bg-emerald-700 text-white text-[10px] font-extrabold px-2 py-0.5 rounded-full shadow-xs w-max">
              {saree.discount}
            </span>
          )}
        </div>

        {/* Wishlist Button */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            onToggleWishlist(saree);
          }}
          className={`absolute top-3 right-3 p-2 rounded-full transition-all shadow-md z-10 ${
            isWishlisted
              ? 'bg-[#7d0a28] text-white'
              : 'bg-white/90 hover:bg-white text-stone-700 hover:text-[#7d0a28]'
          }`}
          title={isWishlisted ? "Remove from Saved" : "Save to Wishlist"}
          aria-label="Wishlist"
        >
          <Heart className={`w-4 h-4 ${isWishlisted ? 'fill-white' : ''}`} />
        </button>

        {/* Quick View Hover Action */}
        <div className="absolute bottom-3 left-3 right-3 opacity-0 group-hover:opacity-100 transition-all transform translate-y-2 group-hover:translate-y-0 z-10">
          <button
            onClick={() => onQuickView(saree)}
            className="w-full bg-white/95 hover:bg-white text-stone-900 py-2 rounded-xl text-xs font-bold shadow-lg flex items-center justify-center gap-1.5 transition-colors border border-stone-200 cursor-pointer"
          >
            <Eye className="w-3.5 h-3.5 text-[#7d0a28]" />
            <span>{language === 'hi' ? 'त्वरित जानकारी (Quick View)' : 'View Details & Draping'}</span>
          </button>
        </div>
      </div>

      {/* Card Body */}
      <div className="p-4 flex flex-col flex-grow justify-between space-y-3">
        
        <div>
          {/* Micro Tags: Fabric & Zari */}
          <div className="flex flex-wrap items-center gap-1.5 mb-1.5">
            <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-amber-50 text-amber-900 border border-amber-200">
              {saree.fabric}
            </span>
            <span className="text-[10px] font-semibold text-stone-500">
              • {saree.colorFamily}
            </span>
          </div>

          {/* Title */}
          <h3 
            onClick={() => onQuickView(saree)}
            className="font-serif text-sm sm:text-base font-bold text-stone-900 group-hover:text-[#7d0a28] transition-colors line-clamp-2 cursor-pointer"
            title={saree.name}
          >
            {language === 'hi' ? saree.hindiName : saree.name}
          </h3>

          {/* Zari Highlight */}
          <p className="text-[11px] text-amber-800 font-medium line-clamp-1 mt-1 flex items-center gap-1">
            <Sparkles className="w-3 h-3 text-amber-600 shrink-0" />
            <span>{saree.zari}</span>
          </p>
        </div>

        {/* Price & Rating & CTA */}
        <div className="pt-2 border-t border-amber-100 space-y-3">
          
          <div className="flex items-center justify-between">
            <div className="flex items-baseline gap-2">
              <span className="text-base sm:text-lg font-black text-stone-900">
                ₹{saree.price.toLocaleString('en-IN')}
              </span>
              {saree.originalPrice && (
                <span className="text-xs text-stone-400 line-through">
                  ₹{saree.originalPrice.toLocaleString('en-IN')}
                </span>
              )}
            </div>

            <div className="flex items-center gap-1 text-[11px] font-bold text-amber-800 bg-amber-50 px-1.5 py-0.5 rounded">
              <Star className="w-3 h-3 fill-amber-400 text-amber-500" />
              <span>{saree.rating}</span>
            </div>
          </div>

          {/* WhatsApp Inquire CTA */}
          <a
            href={`https://wa.me/${STORE_INFO.whatsapp}?text=${whatsappMessage}`}
            target="_blank"
            rel="noreferrer"
            className="w-full flex items-center justify-center gap-2 bg-emerald-50 hover:bg-emerald-100 text-emerald-800 hover:text-emerald-900 border border-emerald-300 py-2 rounded-xl text-xs font-bold transition-all"
            title="Ask availability or request video showcase on WhatsApp"
          >
            <MessageCircle className="w-3.5 h-3.5 text-emerald-600" />
            <span>{language === 'hi' ? 'व्हाट्सएप पूछताछ' : 'WhatsApp Inquire'}</span>
          </a>

        </div>

      </div>

    </div>
  );
}
