import React, { useState, useEffect } from 'react';
import { STORE_INFO } from '../data/sareesData';
import { MapPin, Clock, Phone, Navigation, ExternalLink, ShieldCheck, Car, CheckCircle2, MessageCircle } from 'lucide-react';

export default function StoreLocation({ language }) {
  const [isOpenNow, setIsOpenNow] = useState(true);
  const [currentTimeStr, setCurrentTimeStr] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const currentHour = now.getHours() + now.getMinutes() / 60;
      setIsOpenNow(currentHour >= 10.5 && currentHour <= 21.0);
      setCurrentTimeStr(now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }));
    };
    updateTime();
    const interval = setInterval(updateTime, 60000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="location" className="py-16 bg-[#fbf7f0] border-b border-amber-900/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-bold uppercase tracking-wider mb-2">
            <MapPin className="w-3.5 h-3.5 text-[#7d0a28]" />
            {language === 'hi' ? 'दुकान का पता एवं समय' : 'Store Location & Timings'}
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-extrabold text-[#450514]">
            {language === 'hi' ? 'कोठी बाजार, बैतूल में हमारे शोरूम पधारें' : 'Visit Our Showroom in Kothi Bazar, Betul'}
          </h2>
          <p className="mt-2 text-stone-600 text-sm sm:text-base">
            {language === 'hi'
              ? 'सीमेंट रोड पर स्थित, सुविधाजनक पार्किंग, वातानुकूलित शोरूम और परिवार के साथ आराम से खरीदारी'
              : 'Located on Cement Road, Kothi Bazar — easily accessible with comfortable parking and warm hospitality'}
          </p>
        </div>

        {/* Location Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch text-left">
          
          {/* Store Info & Timings Card */}
          <div className="lg:col-span-5 bg-white rounded-3xl p-6 sm:p-8 border border-amber-300 shadow-md flex flex-col justify-between space-y-6">
            
            <div className="space-y-6">
              
              {/* Live Status Pill */}
              <div className="flex items-center justify-between pb-4 border-b border-amber-100">
                <div className="flex items-center gap-2">
                  <span className={`w-3 h-3 rounded-full ${isOpenNow ? 'bg-emerald-500 animate-pulse' : 'bg-amber-500'}`}></span>
                  <span className="font-bold text-sm text-stone-800">
                    {isOpenNow 
                      ? (language === 'hi' ? 'शोरूम अभी खुला है' : 'Store is Open Now') 
                      : (language === 'hi' ? 'प्रातः 10:30 बजे खुलेगा' : 'Opens Tomorrow at 10:30 AM')}
                  </span>
                </div>
                <span className="text-xs text-stone-400 font-medium">Local time: {currentTimeStr}</span>
              </div>

              {/* Exact Address */}
              <div className="space-y-2">
                <span className="text-xs font-extrabold uppercase text-[#7d0a28] tracking-wider flex items-center gap-1.5">
                  <MapPin className="w-4 h-4" />
                  {language === 'hi' ? 'दुकान का पूरा पता' : 'Complete Showroom Address'}
                </span>
                <p className="text-base sm:text-lg font-serif font-bold text-stone-900 leading-snug">
                  {STORE_INFO.name} ({STORE_INFO.hindiName})
                </p>
                <p className="text-sm text-stone-700 leading-relaxed">
                  Cement Road, Kothi Bazar, Betul – 460001, Madhya Pradesh, India.
                </p>
                <p className="text-xs text-amber-900/80 font-medium bg-amber-50 p-2.5 rounded-xl border border-amber-200">
                  📍 <strong>Landmark:</strong> Main Commercial Hub of Kothi Bazar, convenient connectivity from Betul Railway Station & Bus Stand.
                </p>
              </div>

              {/* Store Hours */}
              <div className="space-y-2">
                <span className="text-xs font-extrabold uppercase text-[#7d0a28] tracking-wider flex items-center gap-1.5">
                  <Clock className="w-4 h-4" />
                  {language === 'hi' ? 'खुलने का समय' : 'Store Hours (Open All 7 Days)'}
                </span>
                <div className="bg-[#fcfaf7] p-3 rounded-xl border border-amber-200/80 space-y-1.5 text-xs">
                  <div className="flex justify-between font-bold text-stone-800">
                    <span>Monday – Sunday:</span>
                    <span className="text-[#7d0a28]">10:30 AM – 9:00 PM</span>
                  </div>
                  <div className="flex items-center gap-1 text-[11px] text-emerald-700 font-semibold">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>Open daily until 9:00 PM for leisurely evening family shopping.</span>
                  </div>
                </div>
              </div>

              {/* Contact Direct Numbers */}
              <div className="space-y-2">
                <span className="text-xs font-extrabold uppercase text-[#7d0a28] tracking-wider flex items-center gap-1.5">
                  <Phone className="w-4 h-4" />
                  {language === 'hi' ? 'फोन व पूछताछ' : 'Direct Helpline & Assistance'}
                </span>
                <div className="flex flex-col sm:flex-row gap-2">
                  <a
                    href={`tel:${STORE_INFO.phone}`}
                    className="flex-1 bg-stone-100 hover:bg-stone-200 text-stone-800 p-2.5 rounded-xl text-xs font-bold flex items-center justify-center gap-1.5 transition-colors"
                  >
                    <Phone className="w-3.5 h-3.5 text-[#7d0a28]" />
                    <span>{STORE_INFO.phone}</span>
                  </a>
                  <a
                    href={`https://wa.me/${STORE_INFO.whatsapp}?text=Namaste%20Shreenath%20Ji%20Sarees,%20I%20am%20visiting%20your%20Kothi%20Bazar%20store`}
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 bg-emerald-50 hover:bg-emerald-100 text-emerald-800 p-2.5 rounded-xl text-xs font-bold flex items-center justify-center gap-1.5 transition-colors border border-emerald-300"
                  >
                    <MessageCircle className="w-3.5 h-3.5 text-emerald-600" />
                    <span>WhatsApp Inquiry</span>
                  </a>
                </div>
              </div>

            </div>

            {/* Direct Navigation Button */}
            <div className="pt-4 border-t border-amber-100 space-y-2">
              <a
                href={STORE_INFO.googleMapsUrl}
                target="_blank"
                rel="noreferrer"
                className="w-full bg-[#7d0a28] hover:bg-[#580d1e] text-white font-bold py-3.5 px-4 rounded-xl text-xs sm:text-sm flex items-center justify-center gap-2 shadow-md transition-all cursor-pointer"
              >
                <Navigation className="w-4 h-4 text-amber-300" />
                <span>{language === 'hi' ? 'गूगल मैप्स पर दिशा-निर्देश प्राप्त करें' : 'Open Directions in Google Maps'}</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>

              <div className="flex items-center justify-between text-[11px] text-stone-500 pt-1">
                <a 
                  href={STORE_INFO.justdialUrl} 
                  target="_blank" 
                  rel="noreferrer"
                  className="hover:text-[#7d0a28] underline"
                >
                  View Justdial Profile
                </a>
                <a 
                  href={STORE_INFO.googleKnowledgeGraphUrl} 
                  target="_blank" 
                  rel="noreferrer"
                  className="hover:text-[#7d0a28] underline"
                >
                  Google Knowledge Graph
                </a>
              </div>
            </div>

          </div>

          {/* Map Preview & Visiting Guide */}
          <div className="lg:col-span-7 flex flex-col justify-between space-y-4">
            
            {/* Interactive Map Iframe / Responsive Container */}
            <div className="relative rounded-3xl overflow-hidden border border-amber-300 shadow-md bg-stone-100 h-80 sm:h-96 w-full">
              <iframe
                title="Shreenath Ji Sarees Kothi Bazar Betul Map"
                src="https://maps.google.com/maps?q=Shrinath+Ji+Saarees+Shopping+Mall+Betul+Madhya+Pradesh&t=&z=16&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full"
              ></iframe>

              {/* Float Card on Map */}
              <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-md p-3 rounded-xl shadow-lg border border-amber-300 max-w-xs text-left hidden sm:block">
                <div className="flex items-center gap-1.5 text-xs font-bold text-stone-900">
                  <MapPin className="w-4 h-4 text-[#7d0a28]" />
                  <span>Shreenath Ji Sarees</span>
                </div>
                <p className="text-[11px] text-stone-600 mt-0.5">Cement Road, Kothi Bazar, Betul</p>
                <div className="mt-1.5 flex items-center gap-2">
                  <span className="text-[10px] font-bold bg-amber-100 text-amber-900 px-1.5 py-0.5 rounded">
                    ★ 4.1 Rated
                  </span>
                  <span className="text-[10px] font-semibold text-emerald-700">Open until 9 PM</span>
                </div>
              </div>
            </div>

            {/* Travel / Arrival Tips for Betul District */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-white p-4 rounded-2xl border border-amber-200/80 text-left">
                <div className="flex items-center gap-2 text-[#7d0a28] font-bold text-xs uppercase mb-1">
                  <Car className="w-4 h-4 text-amber-700" />
                  <span>{language === 'hi' ? 'पार्किंग एवं आवागमन' : 'Parking & Access'}</span>
                </div>
                <p className="text-xs text-stone-600 leading-relaxed">
                  Ample two-wheeler parking directly outside the showroom. Four-wheelers can comfortably park on Cement Road and adjoining designated market parking zones.
                </p>
              </div>

              <div className="bg-white p-4 rounded-2xl border border-amber-200/80 text-left">
                <div className="flex items-center gap-2 text-[#7d0a28] font-bold text-xs uppercase mb-1">
                  <ShieldCheck className="w-4 h-4 text-amber-700" />
                  <span>{language === 'hi' ? 'जिले के अन्य कस्बों से' : 'Coming from Nearby Towns'}</span>
                </div>
                <p className="text-xs text-stone-600 leading-relaxed">
                  Just 10 minutes from Betul Bus Stand & Railway Station. Regularly visited by families from Multai, Shahpur, Amla, and Bhainsdehi.
                </p>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
