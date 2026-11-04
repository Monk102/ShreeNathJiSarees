import React from 'react';
import { INSTAGRAM_POSTS, STORE_INFO } from '../data/sareesData';
import { Heart, MessageCircle, ExternalLink, Sparkles } from 'lucide-react';
import InstagramIcon from './InstagramIcon';

export default function InstagramFeed({ language }) {
  return (
    <section className="py-16 bg-[#fdfaf6] border-b border-amber-900/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-10 text-left">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gradient-to-r from-purple-100 to-pink-100 text-pink-900 text-xs font-bold uppercase tracking-wider mb-2">
              <InstagramIcon className="w-3.5 h-3.5 text-pink-600" />
              <span>{STORE_INFO.instagramHandle}</span>
            </div>
            <h2 className="font-serif text-2xl sm:text-4xl font-extrabold text-[#450514]">
              {language === 'hi' ? 'इंस्टाग्राम पर नए आगमन एवं रील' : 'Follow Us on Instagram'}
            </h2>
            <p className="text-stone-600 text-xs sm:text-sm mt-1">
              {language === 'hi' 
                ? 'दैनिक नए डिजाइन, साड़ी ड्रेपिंग टिप्स और वास्तविक ग्राहकों की झलकियाँ' 
                : 'Catch fresh arrivals, real Betul bride drapes, and behind-the-scenes at our Kothi Bazar showroom'}
            </p>
          </div>

          <a
            href={STORE_INFO.instagramUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 via-pink-600 to-rose-500 hover:opacity-95 text-white px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold shadow-md transition-all shrink-0"
          >
            <InstagramIcon className="w-4 h-4" />
            <span>{language === 'hi' ? '@shrinath_jisarees फॉलो करें' : 'Follow @shrinath_jisarees'}</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Instagram Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {INSTAGRAM_POSTS.map((post) => (
            <a
              key={post.id}
              href={STORE_INFO.instagramUrl}
              target="_blank"
              rel="noreferrer"
              className="group relative rounded-2xl overflow-hidden bg-white border border-amber-200/80 shadow-xs hover:shadow-xl transition-all block text-left"
            >
              {/* Image Aspect Box */}
              <div className="relative aspect-square overflow-hidden bg-stone-100">
                <img
                  src={post.imageUrl}
                  alt="Shreenath Ji Sarees Instagram Post"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-108"
                  loading="lazy"
                />
                
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-5 text-white">
                  <div className="flex items-center gap-1.5 font-bold text-sm">
                    <Heart className="w-5 h-5 fill-white text-white" />
                    <span>{post.likes}</span>
                  </div>
                  <div className="flex items-center gap-1.5 font-bold text-sm">
                    <MessageCircle className="w-5 h-5 fill-white text-white" />
                    <span>{post.comments}</span>
                  </div>
                </div>

                {/* Corner Instagram Icon */}
                <div className="absolute top-2.5 right-2.5 bg-black/40 backdrop-blur-xs p-1.5 rounded-full text-white">
                  <InstagramIcon className="w-3.5 h-3.5" />
                </div>
              </div>

              {/* Caption */}
              <div className="p-3.5">
                <p className="text-xs text-stone-700 line-clamp-2 leading-relaxed">
                  {post.caption}
                </p>
                <div className="mt-2 text-[11px] font-bold text-pink-700 flex items-center gap-1">
                  <span>View on Instagram</span>
                  <span>→</span>
                </div>
              </div>
            </a>
          ))}
        </div>

      </div>
    </section>
  );
}
