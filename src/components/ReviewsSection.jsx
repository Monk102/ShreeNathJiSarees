import React from 'react';
import { TESTIMONIALS, STORE_INFO } from '../data/sareesData';
import { Star, CheckCircle, ExternalLink, MessageSquareQuote, ShieldCheck, MapPin } from 'lucide-react';

export default function ReviewsSection({ language }) {
  return (
    <section id="reviews" className="py-16 bg-white border-b border-amber-900/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Rating Overview Card */}
        <div className="bg-[#fcfaf7] border border-amber-300 rounded-3xl p-6 sm:p-10 mb-12 shadow-sm">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center text-left">
            
            {/* Left Score Box */}
            <div className="md:col-span-5 flex flex-col sm:flex-row items-center gap-6 border-b md:border-b-0 md:border-r border-amber-200 pb-6 md:pb-0 md:pr-8">
              <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-amber-500 to-[#7d0a28] flex flex-col items-center justify-center text-white shadow-lg shrink-0">
                <span className="font-serif text-3xl font-black">4.1</span>
                <div className="flex items-center gap-0.5 mt-0.5">
                  {[...Array(4)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-amber-300 text-amber-300" />
                  ))}
                  <Star className="w-3.5 h-3.5 text-amber-300/40" />
                </div>
                <span className="text-[10px] uppercase font-bold text-amber-200 mt-0.5">Out of 5</span>
              </div>

              <div className="text-center sm:text-left">
                <h3 className="font-serif text-xl sm:text-2xl font-bold text-stone-900">
                  {language === 'hi' ? 'बैतूल वासियों का अपार विश्वास' : 'Betul’s Most Trusted Rating'}
                </h3>
                <p className="text-xs text-stone-600 mt-1">
                  Based on authentic ratings across <strong className="text-stone-800">Google My Business</strong> and <strong className="text-stone-800">Justdial</strong>.
                </p>

                <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2 mt-3">
                  <a
                    href={STORE_INFO.googleMapsUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1 text-[11px] font-bold text-stone-700 bg-white hover:bg-stone-50 border border-stone-300 px-2.5 py-1 rounded-md shadow-2xs"
                  >
                    <span>Google Maps (4.1★)</span>
                    <ExternalLink className="w-3 h-3 text-stone-400" />
                  </a>

                  <a
                    href={STORE_INFO.justdialUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1 text-[11px] font-bold text-[#7d0a28] bg-amber-50 hover:bg-amber-100 border border-amber-300 px-2.5 py-1 rounded-md"
                  >
                    <span>Justdial Profile</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </div>

            {/* Right Trust Metrics */}
            <div className="md:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-4 text-center sm:text-left">
              <div className="p-3 bg-white rounded-xl border border-amber-200/80">
                <span className="text-lg font-black text-[#7d0a28]">15+ Years</span>
                <p className="text-[11px] font-semibold text-stone-600">Heritage in Kothi Bazar</p>
              </div>

              <div className="p-3 bg-white rounded-xl border border-amber-200/80">
                <span className="text-lg font-black text-amber-700">10,000+</span>
                <p className="text-[11px] font-semibold text-stone-600">Weddings Draped</p>
              </div>

              <div className="p-3 bg-white rounded-xl border border-amber-200/80 col-span-2 sm:col-span-1">
                <span className="text-lg font-black text-emerald-700">100% Honest</span>
                <p className="text-[11px] font-semibold text-stone-600">Fair & Transparent Rates</p>
              </div>
            </div>

          </div>
        </div>

        {/* Customer Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.id}
              className="bg-[#fffdfa] p-6 rounded-2xl border border-amber-200 shadow-xs hover:shadow-md transition-shadow flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-1 text-amber-500">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>

                  <span className="text-[11px] font-bold px-2 py-0.5 rounded-full bg-stone-100 text-stone-600 border border-stone-200">
                    {t.platform}
                  </span>
                </div>

                <p className="text-stone-700 text-sm leading-relaxed italic">
                  "{t.text}"
                </p>
              </div>

              <div className="mt-5 pt-4 border-t border-amber-100 flex items-center justify-between">
                <div>
                  <h4 className="font-serif text-sm font-bold text-stone-900 flex items-center gap-1.5">
                    <span>{t.name}</span>
                    {t.verified && (
                      <CheckCircle className="w-3.5 h-3.5 text-emerald-600" title="Verified Customer" />
                    )}
                  </h4>
                  <p className="text-[11px] text-stone-500 flex items-center gap-1">
                    <MapPin className="w-3 h-3 text-amber-700" /> {t.location}
                  </p>
                </div>

                <span className="text-[11px] text-stone-400">{t.date}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Review */}
        <div className="mt-8 text-center">
          <p className="text-xs text-stone-500">
            Have you shopped at our showroom on Cement Road? We would love to hear your feedback!
          </p>
          <a
            href={STORE_INFO.googleMapsUrl}
            target="_blank"
            rel="noreferrer"
            className="mt-2 inline-flex items-center gap-1.5 text-xs font-bold text-[#7d0a28] hover:underline"
          >
            <span>Leave a Review on Google Maps</span>
            <ExternalLink className="w-3 h-3" />
          </a>
        </div>

      </div>
    </section>
  );
}
