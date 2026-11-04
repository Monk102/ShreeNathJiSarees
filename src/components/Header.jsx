import React, { useState, useEffect } from 'react';
import { STORE_INFO } from '../data/sareesData';
import { Phone, Clock, MapPin, Heart, Search, Menu, X, MessageCircle, Sparkles, Languages } from 'lucide-react';

export default function Header({ 
  wishlistCount, 
  onOpenWishlist, 
  searchQuery, 
  setSearchQuery, 
  language, 
  setLanguage,
  activeCategory,
  onSelectCategory 
}) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isOpenNow, setIsOpenNow] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Check if store is open (10:30 AM to 9:00 PM)
    const now = new Date();
    const currentHour = now.getHours() + now.getMinutes() / 60;
    setIsOpenNow(currentHour >= 10.5 && currentHour <= 21.0);
  }, []);

  const navLinks = [
    { name: language === 'hi' ? 'संग्रह' : 'Collections', href: '#catalog' },
    { name: language === 'hi' ? 'जरी साड़ियाँ' : 'Zari Borders', href: '#catalog', category: 'zari-border' },
    { name: language === 'hi' ? 'बनारसी सिल्क' : 'Banarasi Silk', href: '#catalog', category: 'banarasi' },
    { name: language === 'hi' ? 'दुल्हन स्पेशल' : 'Bridal Lounge', href: '#bridal-lounge' },
    { name: language === 'hi' ? 'ट्रूसो प्लानर' : 'Trousseau Stylist', href: '#trousseau' },
    { name: language === 'hi' ? 'दुकान एवं समय' : 'Store & Timings', href: '#location' },
    { name: language === 'hi' ? 'रिव्यूज' : 'Reviews', href: '#reviews' },
  ];

  const handleNavClick = (link) => {
    if (link.category && onSelectCategory) {
      onSelectCategory(link.category);
    }
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 w-full transition-all duration-300">
      {/* Top Announcement Bar */}
      <div className="bg-[#4a0815] text-[#faedd0] text-xs font-medium py-2 px-4 border-b border-[#7d1f2e]">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          {/* Left: Location & Status */}
          <div className="flex items-center gap-4 flex-wrap">
            <span className="flex items-center gap-1.5 text-amber-200">
              <MapPin className="w-3.5 h-3.5 text-amber-400" />
              <span>Cement Road, Kothi Bazar, Betul (M.P.)</span>
            </span>

            <span className="hidden sm:inline text-amber-300/40">|</span>

            <span className="flex items-center gap-1.5">
              <span className={`w-2 h-2 rounded-full ${isOpenNow ? 'bg-emerald-400 animate-pulse' : 'bg-amber-400'}`}></span>
              <span>{isOpenNow ? (language === 'hi' ? 'दुकान खुली है (रात्रि 9:00 बजे तक)' : 'Open Today until 9:00 PM') : (language === 'hi' ? 'प्रातः 10:30 बजे खुलेगी' : 'Opens 10:30 AM')}</span>
            </span>
          </div>

          {/* Right: Phone, WhatsApp, Language */}
          <div className="flex items-center gap-3">
            <a 
              href={`tel:${STORE_INFO.phone}`} 
              className="flex items-center gap-1 text-amber-200 hover:text-white transition-colors"
            >
              <Phone className="w-3 h-3 text-amber-400" />
              <span className="hidden md:inline">{STORE_INFO.phone}</span>
            </a>

            <span className="text-amber-300/40">|</span>

            <a 
              href={`https://wa.me/${STORE_INFO.whatsapp}?text=Namaste%20Shreenath%20Ji%20Sarees,%20I%20am%20inquiring%20about%20your%20saree%20collection`}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1 text-emerald-300 hover:text-emerald-200 font-semibold"
            >
              <MessageCircle className="w-3 h-3" />
              <span>WhatsApp</span>
            </a>

            <span className="text-amber-300/40">|</span>

            {/* Language Switch */}
            <button
              onClick={() => setLanguage(language === 'en' ? 'hi' : 'en')}
              className="flex items-center gap-1 bg-amber-400/20 hover:bg-amber-400/30 text-amber-200 px-2 py-0.5 rounded text-[11px] font-semibold border border-amber-300/30 transition-colors"
              title="Switch Language"
            >
              <Languages className="w-3 h-3" />
              <span>{language === 'en' ? 'हिन्दी' : 'English'}</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className={`w-full bg-[#fcfaf7]/95 backdrop-blur-md border-b transition-all duration-300 ${
        isScrolled ? 'shadow-lg border-amber-900/10 py-2.5' : 'border-amber-900/10 py-3.5'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          
          {/* Logo / Brand */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-11 h-11 rounded-full bg-gradient-to-br from-[#7d0a28] to-[#450514] flex items-center justify-center text-amber-300 shadow-md border-2 border-amber-400/50 group-hover:scale-105 transition-transform">
              <span className="font-serif font-black text-xl tracking-tighter">श्री</span>
            </div>
            <div className="flex flex-col text-left">
              <span className="font-serif text-xl sm:text-2xl font-bold tracking-tight text-[#580d1e] group-hover:text-[#7d0a28] transition-colors leading-none">
                Shreenath Ji Sarees
              </span>
              <div className="flex items-center gap-1.5 mt-0.5">
                <span className="text-[10px] sm:text-xs uppercase tracking-widest text-amber-800 font-bold">
                  {language === 'hi' ? 'कोठी बाजार • बैतूल (म.प्र.)' : 'Kothi Bazar • Betul (M.P.)'}
                </span>
                <span className="inline-flex items-center gap-0.5 px-1.5 py-0.2 text-[10px] font-bold bg-amber-100 text-amber-900 rounded-sm border border-amber-300">
                  ★ 4.1
                </span>
              </div>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center gap-6 xl:gap-8">
            {navLinks.map((link, idx) => (
              <a
                key={idx}
                href={link.href}
                onClick={() => handleNavClick(link)}
                className="text-stone-700 hover:text-[#7d0a28] text-sm font-semibold tracking-wide transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#7d0a28] hover:after:w-full after:transition-all"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Actions: Search, Wishlist, CTA */}
          <div className="flex items-center gap-2.5 sm:gap-4">
            {/* Search Input toggle */}
            <div className="relative">
              {isSearchOpen ? (
                <div className="flex items-center bg-amber-50 border border-amber-300 rounded-full px-3 py-1 text-xs shadow-inner w-44 sm:w-56">
                  <Search className="w-3.5 h-3.5 text-stone-500 mr-2 shrink-0" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder={language === 'hi' ? 'साड़ी, जरी, बनारसी खोजें...' : 'Search sarees, zari...'}
                    className="w-full bg-transparent focus:outline-none text-stone-800 placeholder-stone-400"
                    autoFocus
                  />
                  <button 
                    onClick={() => { setIsSearchOpen(false); setSearchQuery(''); }}
                    className="text-stone-400 hover:text-stone-600 ml-1"
                  >
                    <X className="w-3.5 h-3.5" />
                  </button>
                </div>
              ) : (
                <button
                  onClick={() => setIsSearchOpen(true)}
                  className="p-2 text-stone-700 hover:text-[#7d0a28] hover:bg-amber-100/50 rounded-full transition-colors"
                  title="Search Saree Collection"
                >
                  <Search className="w-5 h-5" />
                </button>
              )}
            </div>

            {/* Wishlist Button */}
            <button
              onClick={onOpenWishlist}
              className="relative p-2 text-stone-700 hover:text-[#7d0a28] hover:bg-amber-100/50 rounded-full transition-colors"
              title="Saved Sarees"
            >
              <Heart className="w-5 h-5" />
              {wishlistCount > 0 && (
                <span className="absolute top-0 right-0 w-4 h-4 bg-[#7d0a28] text-white text-[10px] font-bold rounded-full flex items-center justify-center animate-bounce">
                  {wishlistCount}
                </span>
              )}
            </button>

            {/* Book Visit / WhatsApp CTA */}
            <a
              href="#location"
              className="hidden sm:inline-flex items-center gap-1.5 bg-[#7d0a28] hover:bg-[#580d1e] text-amber-200 hover:text-white px-4 py-2 rounded-full text-xs font-bold shadow-md transition-all border border-amber-400/40"
            >
              <Sparkles className="w-3.5 h-3.5 text-amber-300" />
              <span>{language === 'hi' ? 'दुकान पर पधारें' : 'Visit Showroom'}</span>
            </a>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-stone-700 hover:text-[#7d0a28] hover:bg-amber-100/50 rounded-lg transition-colors"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-[#fffdfa] border-t border-amber-200/60 px-4 pt-3 pb-6 shadow-xl animate-fadeIn">
            {/* Mobile Search */}
            <div className="mb-4">
              <div className="flex items-center bg-stone-100 border border-stone-200 rounded-lg px-3 py-2 text-sm">
                <Search className="w-4 h-4 text-stone-500 mr-2 shrink-0" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder={language === 'hi' ? 'साड़ी, जरी, बनारसी खोजें...' : 'Search sarees, fabrics, colors...'}
                  className="w-full bg-transparent focus:outline-none text-stone-800"
                />
              </div>
            </div>

            <div className="flex flex-col space-y-3">
              {navLinks.map((link, idx) => (
                <a
                  key={idx}
                  href={link.href}
                  onClick={() => handleNavClick(link)}
                  className="text-stone-800 hover:text-[#7d0a28] hover:bg-amber-50 px-3 py-2 rounded-md font-semibold text-sm transition-colors flex items-center justify-between"
                >
                  <span>{link.name}</span>
                  <span className="text-amber-700 text-xs">›</span>
                </a>
              ))}

              <div className="pt-3 border-t border-amber-200/60 flex flex-col gap-2">
                <a
                  href={`https://wa.me/${STORE_INFO.whatsapp}?text=Namaste%20Shreenath%20Ji%20Sarees,%20I%20am%20interested%20in%20your%20saree%20collection`}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white py-2.5 rounded-lg text-sm font-semibold shadow"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>{language === 'hi' ? 'व्हाट्सएप पर बात करें' : 'Chat on WhatsApp'}</span>
                </a>
                
                <a
                  href={STORE_INFO.googleMapsUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full flex items-center justify-center gap-2 bg-amber-100 text-amber-950 hover:bg-amber-200 py-2.5 rounded-lg text-sm font-semibold border border-amber-300"
                >
                  <MapPin className="w-4 h-4 text-amber-800" />
                  <span>{language === 'hi' ? 'गूगल मैप्स पर रास्ता देखें' : 'Get Google Maps Direction'}</span>
                </a>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
