import React, { useState, useMemo } from 'react';
import { CATEGORIES, SAREES_CATALOG } from '../data/sareesData';
import SareeCard from './SareeCard';
import { Sparkles, SlidersHorizontal, Search, X } from 'lucide-react';

export default function CatalogSection({ 
  language, 
  wishlist, 
  onToggleWishlist, 
  onQuickView,
  searchQuery,
  setSearchQuery,
  selectedCategory,
  setSelectedCategory
}) {
  const [selectedColor, setSelectedColor] = useState('All');
  const [sortBy, setSortBy] = useState('featured');

  const colorOptions = ['All', 'Red', 'Pink', 'Green', 'Blue', 'Yellow', 'Gold', 'Purple'];

  // Filtered and Sorted Sarees
  const filteredSarees = useMemo(() => {
    return SAREES_CATALOG.filter((saree) => {
      // Category Filter
      if (selectedCategory !== 'all' && saree.category !== selectedCategory) {
        return false;
      }

      // Color Filter
      if (selectedColor !== 'All' && saree.colorFamily !== selectedColor) {
        return false;
      }

      // Search Query Filter
      if (searchQuery.trim() !== '') {
        const query = searchQuery.toLowerCase();
        const matchesName = saree.name.toLowerCase().includes(query) || saree.hindiName.includes(query);
        const matchesFabric = saree.fabric.toLowerCase().includes(query);
        const matchesZari = saree.zari.toLowerCase().includes(query);
        const matchesColor = saree.color.toLowerCase().includes(query);
        const matchesOccasion = saree.occasion.toLowerCase().includes(query);
        if (!matchesName && !matchesFabric && !matchesZari && !matchesColor && !matchesOccasion) {
          return false;
        }
      }

      return true;
    }).sort((a, b) => {
      if (sortBy === 'price-low') return a.price - b.price;
      if (sortBy === 'price-high') return b.price - a.price;
      if (sortBy === 'rating') return b.rating - a.rating;
      return 0; // default featured
    });
  }, [selectedCategory, selectedColor, searchQuery, sortBy]);

  return (
    <section id="catalog" className="py-16 bg-[#fcfaf7] border-b border-amber-900/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#7d0a28]/10 text-[#7d0a28] text-xs font-bold tracking-wider uppercase mb-2">
            <Sparkles className="w-3.5 h-3.5 text-[#7d0a28]" />
            {language === 'hi' ? 'विशेष संग्रह' : 'Curated Masterpieces'}
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-extrabold text-[#450514]">
            {language === 'hi' ? 'साड़ियों एवं वस्त्रों का विस्तृत संकलन' : 'Explore The Saree & Fabric Collection'}
          </h2>
          <p className="mt-2 text-stone-600 text-sm sm:text-base">
            {language === 'hi' 
              ? 'लाइटवेट जरी बॉर्डर, रेशमी बनारसी, चंदेरी एवं आधुनिक डिजाइनों का प्रामाणिक खजाना' 
              : 'Discover lightweight zari borders, royal woven silks, Banarasi styles, and unstitched dress materials'}
          </p>
        </div>

        {/* Category Filter Pills (Horizontal Scrollable) */}
        <div className="flex items-center justify-start sm:justify-center gap-2 overflow-x-auto pb-3 mb-6 no-scrollbar">
          {CATEGORIES.map((cat) => {
            const isActive = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 py-2 rounded-full text-xs sm:text-sm font-bold whitespace-nowrap transition-all shadow-xs cursor-pointer ${
                  isActive
                    ? 'bg-[#7d0a28] text-white shadow-md border border-[#7d0a28]'
                    : 'bg-white hover:bg-amber-50 text-stone-700 border border-amber-200/80 hover:border-amber-300'
                }`}
              >
                {language === 'hi' ? cat.hindi : cat.name}
              </button>
            );
          })}
        </div>

        {/* Secondary Filter & Sort Bar */}
        <div className="bg-white p-4 rounded-2xl border border-amber-200/80 shadow-xs mb-8 flex flex-col md:flex-row items-center justify-between gap-4">
          
          {/* Color Filter */}
          <div className="flex items-center gap-2 flex-wrap w-full md:w-auto">
            <span className="text-xs font-bold text-stone-500 uppercase tracking-wider mr-1">
              {language === 'hi' ? 'रंग:' : 'Color:'}
            </span>
            {colorOptions.map((color) => (
              <button
                key={color}
                onClick={() => setSelectedColor(color)}
                className={`px-2.5 py-1 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                  selectedColor === color
                    ? 'bg-amber-100 text-amber-900 border border-amber-400 font-bold'
                    : 'text-stone-600 hover:bg-stone-100'
                }`}
              >
                {color}
              </button>
            ))}
          </div>

          {/* Sort & Count */}
          <div className="flex items-center justify-between md:justify-end gap-3 w-full md:w-auto">
            <span className="text-xs text-stone-500 font-medium">
              {filteredSarees.length} {language === 'hi' ? 'साड़ियाँ मिलीं' : 'styles available'}
            </span>

            <div className="flex items-center gap-2">
              <label htmlFor="sort-select" className="text-xs font-bold text-stone-500">
                {language === 'hi' ? 'क्रम:' : 'Sort:'}
              </label>
              <select
                id="sort-select"
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="bg-stone-50 border border-stone-200 rounded-lg text-xs font-semibold px-2.5 py-1.5 text-stone-800 focus:outline-none focus:ring-1 focus:ring-[#7d0a28]"
              >
                <option value="featured">{language === 'hi' ? 'लोकप्रिय (Featured)' : 'Featured'}</option>
                <option value="price-low">{language === 'hi' ? 'मूल्य: कम से ज्यादा' : 'Price: Low to High'}</option>
                <option value="price-high">{language === 'hi' ? 'मूल्य: ज्यादा से कम' : 'Price: High to Low'}</option>
                <option value="rating">{language === 'hi' ? 'उच्चतम रेटिंग' : 'Customer Rating'}</option>
              </select>
            </div>
          </div>

        </div>

        {/* Active Search Indicator */}
        {searchQuery.trim() !== '' && (
          <div className="mb-6 flex items-center justify-between bg-amber-50 p-3 rounded-xl border border-amber-200">
            <div className="flex items-center gap-2 text-xs text-stone-700">
              <Search className="w-4 h-4 text-amber-700" />
              <span>
                Search results for: <strong className="text-stone-900">"{searchQuery}"</strong>
              </span>
            </div>
            <button
              onClick={() => setSearchQuery('')}
              className="text-xs text-[#7d0a28] font-bold hover:underline flex items-center gap-1"
            >
              <X className="w-3.5 h-3.5" /> Clear Search
            </button>
          </div>
        )}

        {/* Products Grid */}
        {filteredSarees.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredSarees.map((saree) => (
              <SareeCard
                key={saree.id}
                saree={saree}
                language={language}
                isWishlisted={wishlist.some((item) => item.id === saree.id)}
                onToggleWishlist={onToggleWishlist}
                onQuickView={onQuickView}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-16 bg-white rounded-2xl border border-amber-200 p-8 max-w-md mx-auto">
            <div className="w-16 h-16 rounded-full bg-amber-50 flex items-center justify-center text-amber-600 mx-auto mb-3">
              <Sparkles className="w-8 h-8" />
            </div>
            <h3 className="font-serif text-lg font-bold text-stone-800">
              {language === 'hi' ? 'कोई साड़ी नहीं मिली' : 'No Sarees Match Filters'}
            </h3>
            <p className="text-xs text-stone-500 mt-1">
              Try resetting your category or search filters, or visit our Kothi Bazar showroom for our complete offline stock.
            </p>
            <button
              onClick={() => {
                setSelectedCategory('all');
                setSelectedColor('All');
                setSearchQuery('');
              }}
              className="mt-4 bg-[#7d0a28] hover:bg-[#580d1e] text-white text-xs font-bold px-4 py-2 rounded-xl transition-all"
            >
              {language === 'hi' ? 'सभी फ़िल्टर रीसेट करें' : 'Reset All Filters'}
            </button>
          </div>
        )}

      </div>
    </section>
  );
}
