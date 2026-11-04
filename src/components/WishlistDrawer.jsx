import React from 'react';
import { X, Trash2, MessageCircle, Heart, ArrowRight } from 'lucide-react';
import { STORE_INFO } from '../data/sareesData';

export default function WishlistDrawer({ 
  isOpen, 
  onClose, 
  wishlist, 
  onRemoveFromWishlist, 
  onQuickView, 
  language 
}) {
  if (!isOpen) return null;

  const totalValue = wishlist.reduce((acc, item) => acc + item.price, 0);

  const handleShareWishlistOnWhatsApp = () => {
    if (wishlist.length === 0) return;
    const itemList = wishlist.map((s, idx) => `${idx + 1}. ${s.name} (₹${s.price.toLocaleString('en-IN')})`).join('%0A');
    const message = `Namaste Shreenath Ji Sarees! I shortlisted ${wishlist.length} sarees on your website for my upcoming shopping visit to your Kothi Bazar store:%0A%0A${itemList}%0A%0ATotal Est: ₹${totalValue.toLocaleString('en-IN')}%0A%0APlease keep these or similar varieties ready!`;
    window.open(`https://wa.me/${STORE_INFO.whatsapp}?text=${message}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-black/50 backdrop-blur-xs flex justify-end animate-fadeIn">
      
      <div 
        className="w-full max-w-md bg-[#fffdfa] h-full shadow-2xl flex flex-col justify-between border-l border-amber-300"
        onClick={(e) => e.stopPropagation()}
      >
        
        {/* Drawer Header */}
        <div className="p-4 sm:p-5 border-b border-amber-200/80 bg-[#fbf7f0] flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="p-1.5 rounded-full bg-amber-100 text-[#7d0a28]">
              <Heart className="w-5 h-5 fill-[#7d0a28]" />
            </div>
            <div>
              <h3 className="font-serif text-lg font-bold text-stone-900">
                {language === 'hi' ? 'आपकी पसंदीदा साड़ियाँ' : 'Your Wishlist'}
              </h3>
              <p className="text-xs text-stone-500">
                {wishlist.length} {language === 'hi' ? 'आइटम सहेजे गए' : 'pieces saved'}
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-full hover:bg-stone-200 text-stone-600 transition-colors"
            aria-label="Close drawer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Drawer Body: List of Items */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-5 space-y-3">
          {wishlist.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center p-6 text-stone-500">
              <div className="w-16 h-16 rounded-full bg-amber-50 flex items-center justify-center text-amber-400 mb-3 border border-amber-200">
                <Heart className="w-8 h-8" />
              </div>
              <h4 className="font-serif text-base font-bold text-stone-800">
                {language === 'hi' ? 'विशलिस्ट अभी खाली है' : 'Your Wishlist is Empty'}
              </h4>
              <p className="text-xs text-stone-500 max-w-xs mt-1">
                {language === 'hi' 
                  ? 'हमारे बनारसी सिल्क, जरी बॉर्डर एवं दुल्हन संग्रह से साड़ियों को सहेजें।' 
                  : 'Click the heart icon on any saree to create your personal wedding trousseau list.'}
              </p>
              <button
                onClick={onClose}
                className="mt-4 bg-[#7d0a28] hover:bg-[#580d1e] text-white text-xs font-bold px-4 py-2 rounded-xl transition-all"
              >
                {language === 'hi' ? 'साड़ियाँ देखें' : 'Browse Sarees'}
              </button>
            </div>
          ) : (
            wishlist.map((item) => (
              <div
                key={item.id}
                className="flex items-center gap-3 bg-white p-3 rounded-2xl border border-amber-200/70 shadow-xs hover:border-amber-400 transition-colors"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-16 h-20 object-cover object-top rounded-xl shrink-0 cursor-pointer"
                  onClick={() => {
                    onQuickView(item);
                    onClose();
                  }}
                />

                <div className="flex-1 min-w-0 text-left">
                  <h4 
                    onClick={() => {
                      onQuickView(item);
                      onClose();
                    }}
                    className="font-serif text-sm font-bold text-stone-900 truncate hover:text-[#7d0a28] cursor-pointer"
                  >
                    {language === 'hi' ? item.hindiName : item.name}
                  </h4>
                  <p className="text-[11px] text-stone-500">{item.fabric}</p>
                  <p className="text-sm font-extrabold text-[#7d0a28] mt-1">
                    ₹{item.price.toLocaleString('en-IN')}
                  </p>
                </div>

                <button
                  onClick={() => onRemoveFromWishlist(item.id)}
                  className="p-2 text-stone-400 hover:text-red-600 transition-colors"
                  title="Remove"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            ))
          )}
        </div>

        {/* Drawer Footer */}
        {wishlist.length > 0 && (
          <div className="p-4 sm:p-5 bg-white border-t border-amber-200/80 space-y-3">
            <div className="flex items-center justify-between text-sm">
              <span className="text-stone-500 font-medium">
                {language === 'hi' ? 'अनुमानित कुल मूल्य' : 'Estimated Total'}
              </span>
              <span className="font-extrabold text-lg text-stone-900">
                ₹{totalValue.toLocaleString('en-IN')}
              </span>
            </div>

            <button
              onClick={handleShareWishlistOnWhatsApp}
              className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3 px-4 rounded-xl text-xs sm:text-sm flex items-center justify-center gap-2 shadow-md transition-all cursor-pointer"
            >
              <MessageCircle className="w-4 h-4" />
              <span>{language === 'hi' ? 'व्हाट्सएप पर स्टोर को लिस्ट भेजें' : 'Send List to Store on WhatsApp'}</span>
            </button>

            <p className="text-[11px] text-center text-stone-400">
              Our team at Cement Road, Kothi Bazar will keep these pieces ready for your trial.
            </p>
          </div>
        )}

      </div>
    </div>
  );
}
