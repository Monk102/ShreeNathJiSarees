import React from 'react';
import { STORE_INFO } from '../data/sareesData';
import { Sparkles, MapPin, Clock, Star, ShieldCheck, ArrowRight, Video, Award } from 'lucide-react';

export default function Hero({ language, onExploreClick, onVideoCallClick }) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#f8f1e8] via-[#fdfaf6] to-[#fbf7f0] border-b border-amber-900/10">
      {/* Decorative Traditional Motif Overlays */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-amber-300/10 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#7d0a28]/5 rounded-full blur-3xl pointer-events-none -ml-20 -mb-20"></div>
      
      {/* Indian Zari Border Accent Line */}
      <div className="h-1.5 w-full bg-gradient-to-r from-amber-600 via-yellow-400 to-amber-700 opacity-90 shadow-sm"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-16 lg:pt-14 lg:pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          
          {/* Left Column: Headlines & Story */}
          <div className="lg:col-span-7 text-left space-y-6">
            
            {/* Top Local Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-100/90 border border-amber-300/80 text-amber-900 shadow-sm">
              <span className="flex h-2 w-2 rounded-full bg-[#7d0a28] animate-ping"></span>
              <span className="text-xs font-bold tracking-wide uppercase">
                {language === 'hi' ? 'बैतूल का प्रतिष्ठित साड़ी शॉपिंग मॉल' : 'Betul’s Premier Saree Destination'}
              </span>
              <span className="text-amber-400 font-bold">•</span>
              <span className="text-xs font-semibold flex items-center gap-1 text-amber-950">
                <MapPin className="w-3 h-3 text-[#7d0a28]" /> Kothi Bazar
              </span>
            </div>

            {/* Main Headline */}
            <div className="space-y-2">
              <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-extrabold text-[#450514] tracking-tight leading-[1.15]">
                {language === 'hi' ? (
                  <>
                    शाही साड़ियाँ, <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7d0a28] via-[#a8223d] to-[#d4af37]">
                      सदाबहार जरी वैभव
                    </span>
                  </>
                ) : (
                  <>
                    Timeless Weaves, <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7d0a28] via-[#a8223d] to-[#c59b27]">
                      Exquisite Golden Zari
                    </span>
                  </>
                )}
              </h1>
              <p className="font-royal text-xl sm:text-2xl text-amber-900/90 italic font-medium">
                {language === 'hi' 
                  ? 'पारंपरिक बनारसी सिल्क, चंदेरी, एवं आधुनिक लाइटवेट जरी बॉर्डर साड़ियों का भव्य संग्रह' 
                  : 'Traditional Banarasi Silks, lightweight golden zari borders & bespoke bridal trousseau'}
              </p>
            </div>

            {/* Story Paragraph */}
            <p className="text-stone-600 text-sm sm:text-base leading-relaxed max-w-2xl">
              {language === 'hi'
                ? 'सीमेंट रोड, कोठी बाजार में स्थित श्रीनाथ जी साड़ीज़ बैतूल जिले के परिवारों के वैवाहिक एवं त्योहारों के परिधानों की पहली पसंद है। यहाँ आपको मिलती है कारीगरों की शुद्ध बुनाई, लाइटवेट जरी बॉर्डर, और आकर्षक सूट मटेरियल्स का अद्वितीय संग्रह।'
                : 'Located on Cement Road, Kothi Bazar, Betul, Shreenath Ji Sarees is the beloved shopping haven for brides, wedding families, and festive connoisseurs. From feather-light zari borders to grand Banarasi silks and unstitched suit materials — experience honest quality open daily till 9:00 PM.'}
            </p>

            {/* Badges / Rating Strip */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
              <div className="bg-white/90 backdrop-blur-sm p-3 rounded-xl border border-amber-200/80 shadow-xs flex flex-col">
                <div className="flex items-center gap-1 text-amber-500 font-bold text-base">
                  <Star className="w-4 h-4 fill-amber-400 text-amber-500" />
                  <span className="text-stone-900 font-extrabold">4.1 / 5</span>
                </div>
                <span className="text-[11px] text-stone-500 font-medium">Google & Justdial</span>
              </div>

              <div className="bg-white/90 backdrop-blur-sm p-3 rounded-xl border border-amber-200/80 shadow-xs flex flex-col">
                <div className="flex items-center gap-1 text-emerald-700 font-bold text-base">
                  <Clock className="w-4 h-4 text-emerald-600" />
                  <span className="text-stone-900 font-extrabold">Till 9 PM</span>
                </div>
                <span className="text-[11px] text-stone-500 font-medium">{language === 'hi' ? 'प्रतिदिन खुला' : 'Open 7 Days'}</span>
              </div>

              <div className="bg-white/90 backdrop-blur-sm p-3 rounded-xl border border-amber-200/80 shadow-xs flex flex-col">
                <div className="flex items-center gap-1 text-[#7d0a28] font-bold text-base">
                  <Sparkles className="w-4 h-4 text-[#7d0a28]" />
                  <span className="text-stone-900 font-extrabold">100% Zari</span>
                </div>
                <span className="text-[11px] text-stone-500 font-medium">{language === 'hi' ? 'शुद्ध जरी फिनिश' : 'Artisan Weaves'}</span>
              </div>

              <div className="bg-white/90 backdrop-blur-sm p-3 rounded-xl border border-amber-200/80 shadow-xs flex flex-col">
                <div className="flex items-center gap-1 text-amber-700 font-bold text-base">
                  <ShieldCheck className="w-4 h-4 text-amber-600" />
                  <span className="text-stone-900 font-extrabold">10K+ Happy</span>
                </div>
                <span className="text-[11px] text-stone-500 font-medium">{language === 'hi' ? 'संतुष्ट परिवार' : 'Betul Families'}</span>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-3.5 pt-2">
              <button
                onClick={onExploreClick}
                className="bg-gradient-to-r from-[#7d0a28] to-[#580d1e] hover:from-[#580d1e] hover:to-[#450514] text-white px-6 py-3.5 rounded-full font-bold text-sm sm:text-base shadow-lg hover:shadow-xl transition-all flex items-center gap-2 group border border-amber-400/40 cursor-pointer"
              >
                <span>{language === 'hi' ? 'साड़ियों का संग्रह देखें' : 'Explore Saree Catalog'}</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={onVideoCallClick}
                className="bg-white hover:bg-amber-50 text-[#7d0a28] border-2 border-[#7d0a28]/40 hover:border-[#7d0a28] px-5 py-3.5 rounded-full font-bold text-sm sm:text-base shadow-xs transition-all flex items-center gap-2 cursor-pointer"
              >
                <Video className="w-4 h-4 text-emerald-600" />
                <span>{language === 'hi' ? 'व्हाट्सएप वीडियो शॉपिंग' : 'Live Video Shopping'}</span>
              </button>

              <a
                href={STORE_INFO.googleMapsUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-stone-700 hover:text-[#7d0a28] underline underline-offset-4 decoration-amber-400 py-2 px-2"
              >
                <MapPin className="w-3.5 h-3.5 text-[#7d0a28]" />
                <span>{language === 'hi' ? 'कोठी बाजार दुकान का पता' : 'Navigate to Kothi Bazar'}</span>
              </a>
            </div>

          </div>

          {/* Right Column: Visual Showcase */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Outer Golden Frame */}
              <div className="absolute -inset-3 rounded-3xl bg-gradient-to-tr from-amber-400/30 via-yellow-300/40 to-amber-600/30 blur-sm"></div>

              {/* Card Container */}
              <div className="relative rounded-2xl overflow-hidden bg-white shadow-2xl border-4 border-white">
                
                {/* Hero Showcase Image */}
                <div className="relative h-96 sm:h-[430px] overflow-hidden group">
                  <img
                    src="https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=900&q=80"
                    alt="Shreenath Ji Sarees Bridal Collection Betul"
                    className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>

                  {/* Top Floating Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="bg-[#7d0a28] text-amber-200 text-xs font-bold px-3 py-1.5 rounded-full shadow-md border border-amber-400/50 flex items-center gap-1.5">
                      <Sparkles className="w-3 h-3 text-amber-300" />
                      {language === 'hi' ? 'शादी एवं उत्सव स्पेशल' : 'Wedding Season Special'}
                    </span>
                  </div>

                  {/* Bottom Text Overlay */}
                  <div className="absolute bottom-4 left-4 right-4 text-white text-left">
                    <span className="text-amber-300 text-xs font-bold uppercase tracking-wider">
                      {language === 'hi' ? 'शाही बनारसी व जरी बॉर्डर' : 'Pure Kadhwa Banarasi Silk'}
                    </span>
                    <h3 className="font-serif text-xl sm:text-2xl font-bold mt-0.5 text-white">
                      {language === 'hi' ? 'बैतूल की पारंपरिक दुल्हन साड़ियाँ' : 'The Heritage Bridal Collection'}
                    </h3>
                    <p className="text-stone-300 text-xs mt-1">
                      {language === 'hi' 
                        ? 'हल्की जरी किनारी, सुरुचिपूर्ण रंग एवं संपूर्ण वैवाहिक वस्त्र'
                        : 'Woven with gold zari threads, tailored for weddings in Betul'}
                    </p>
                  </div>
                </div>

                {/* Sub-strip with Store Highlight */}
                <div className="bg-[#580d1e] text-[#fceecb] p-3.5 flex items-center justify-between text-xs font-medium">
                  <div className="flex items-center gap-2">
                    <Award className="w-4 h-4 text-amber-400" />
                    <span>{language === 'hi' ? 'सीधा बुनकरों से प्रामाणिक संग्रह' : 'Handloom Certified & Weaver-Sourced'}</span>
                  </div>
                  <a 
                    href="#location" 
                    className="text-amber-300 hover:text-white font-bold underline"
                  >
                    {language === 'hi' ? 'दुकान देखें' : 'Visit Us'}
                  </a>
                </div>

              </div>

              {/* Floating Pill on bottom right */}
              <div className="absolute -bottom-5 -right-4 bg-white/95 backdrop-blur-md border border-amber-300 rounded-2xl p-3 shadow-xl flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-700">
                  <Clock className="w-5 h-5" />
                </div>
                <div className="text-left">
                  <p className="text-[10px] uppercase font-bold text-stone-500">{language === 'hi' ? 'दुकान समय' : 'Store Hours'}</p>
                  <p className="text-xs font-extrabold text-stone-900">{STORE_INFO.hours}</p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
