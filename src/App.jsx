import React, { useState, useEffect } from 'react';
import { Analytics } from '@vercel/analytics/react';
import Header from './components/Header';
import Hero from './components/Hero';
import StoreHighlights from './components/StoreHighlights';
import CatalogSection from './components/CatalogSection';
import TrousseauPlanner from './components/TrousseauPlanner';
import BridalAndVideoCall from './components/BridalAndVideoCall';
import InstagramFeed from './components/InstagramFeed';
import ReviewsSection from './components/ReviewsSection';
import StoreLocation from './components/StoreLocation';
import FAQSection from './components/FAQSection';
import Footer from './components/Footer';
import ProductDetailModal from './components/ProductDetailModal';
import WishlistDrawer from './components/WishlistDrawer';
import FloatingActions from './components/FloatingActions';
import { SAREES_CATALOG } from './data/sareesData';

export default function App() {
  const [language, setLanguage] = useState('en'); // 'en' or 'hi'
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedSaree, setSelectedSaree] = useState(null);
  const [isWishlistOpen, setIsWishlistOpen] = useState(false);
  
  // Persisted Wishlist
  const [wishlist, setWishlist] = useState(() => {
    try {
      const saved = localStorage.getItem('shreenathji_wishlist');
      if (saved) return JSON.parse(saved);
    } catch {
      // fallback
    }
    // Initialize with 2 default popular pieces so the drawer has immediate demo appeal
    return [SAREES_CATALOG[0], SAREES_CATALOG[1]];
  });

  useEffect(() => {
    try {
      localStorage.setItem('shreenathji_wishlist', JSON.stringify(wishlist));
    } catch {
      // ignore
    }
  }, [wishlist]);

  // Wishlist toggle handler
  const handleToggleWishlist = (saree) => {
    setWishlist((prev) => {
      const exists = prev.some((item) => item.id === saree.id);
      if (exists) {
        return prev.filter((item) => item.id !== saree.id);
      } else {
        return [...prev, saree];
      }
    });
  };

  const handleRemoveFromWishlist = (id) => {
    setWishlist((prev) => prev.filter((item) => item.id !== id));
  };

  const handleSelectCategory = (catId) => {
    setSelectedCategory(catId);
    const catalogElement = document.getElementById('catalog');
    if (catalogElement) {
      catalogElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleExploreClick = () => {
    const catalogElement = document.getElementById('catalog');
    if (catalogElement) {
      catalogElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleVideoCallClick = () => {
    const videoElement = document.getElementById('video-shopping');
    if (videoElement) {
      videoElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#fcfaf7] text-stone-800 flex flex-col font-sans selection:bg-amber-200 selection:text-[#580d1e]">
      
      {/* Navigation Header */}
      <Header
        wishlistCount={wishlist.length}
        onOpenWishlist={() => setIsWishlistOpen(true)}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        language={language}
        setLanguage={setLanguage}
        activeCategory={selectedCategory}
        onSelectCategory={handleSelectCategory}
      />

      {/* Hero Showcase */}
      <Hero
        language={language}
        onExploreClick={handleExploreClick}
        onVideoCallClick={handleVideoCallClick}
      />

      {/* Store Hallmarks & Features */}
      <StoreHighlights language={language} />

      {/* Main Filterable Saree Catalog */}
      <CatalogSection
        language={language}
        wishlist={wishlist}
        onToggleWishlist={handleToggleWishlist}
        onQuickView={(saree) => setSelectedSaree(saree)}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />

      {/* Interactive Wedding Trousseau Stylist */}
      <TrousseauPlanner
        language={language}
        onSelectCategory={handleSelectCategory}
      />

      {/* Bridal Lounge & Video Call Shopping */}
      <BridalAndVideoCall language={language} />

      {/* Instagram Feed from @shrinath_jisarees */}
      <InstagramFeed language={language} />

      {/* Verified 4.1★ Reviews on Google & Justdial */}
      <ReviewsSection language={language} />

      {/* Showroom Location, Directions & Timings */}
      <StoreLocation language={language} />

      {/* Frequently Asked Questions */}
      <FAQSection language={language} />

      {/* Footer */}
      <Footer
        language={language}
        onSelectCategory={handleSelectCategory}
      />

      {/* Modals & Drawers */}
      <ProductDetailModal
        saree={selectedSaree}
        onClose={() => setSelectedSaree(null)}
        language={language}
        isWishlisted={selectedSaree ? wishlist.some((item) => item.id === selectedSaree.id) : false}
        onToggleWishlist={handleToggleWishlist}
      />

      <WishlistDrawer
        isOpen={isWishlistOpen}
        onClose={() => setIsWishlistOpen(false)}
        wishlist={wishlist}
        onRemoveFromWishlist={handleRemoveFromWishlist}
        onQuickView={(saree) => setSelectedSaree(saree)}
        language={language}
      />

      {/* Sticky Mobile/Desktop Action Buttons */}
      <FloatingActions language={language} />

      {/* Vercel Web Analytics */}
      <Analytics />

    </div>
  );
}
