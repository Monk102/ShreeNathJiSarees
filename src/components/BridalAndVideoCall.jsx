import React, { useState } from 'react';
import { STORE_INFO } from '../data/sareesData';
import { Sparkles, Video, Calendar, Clock, User, Phone, CheckCircle2, MessageCircle, MapPin, Award } from 'lucide-react';

export default function BridalAndVideoCall({ language }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    town: 'Betul',
    preferredDate: '',
    timeSlot: 'Morning (11:00 AM - 1:00 PM)',
    sareeInterest: 'Bridal Banarasi Silk'
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;

    const message = encodeURIComponent(
      `Namaste Shreenath Ji Sarees! I would like to book a WhatsApp Video Call Shopping session:%0A%0A` +
      `• Name: ${formData.name}%0A` +
      `• Mobile: ${formData.phone}%0A` +
      `• Location/Town: ${formData.town}%0A` +
      `• Preferred Date: ${formData.preferredDate || 'Earliest available'}%0A` +
      `• Preferred Slot: ${formData.timeSlot}%0A` +
      `• Interested In: ${formData.sareeInterest}%0A%0A` +
      `Please confirm the appointment slot.`
    );

    window.open(`https://wa.me/${STORE_INFO.whatsapp}?text=${message}`, '_blank');
    setSubmitted(true);
  };

  return (
    <section id="bridal-lounge" className="py-16 bg-white border-b border-amber-900/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Bridal Lounge Banner */}
        <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-[#450514] via-[#630d1d] to-[#450514] text-white p-8 sm:p-12 shadow-2xl mb-16 border-2 border-amber-400/40">
          <div className="absolute top-0 right-0 w-80 h-80 bg-amber-400/10 rounded-full blur-2xl pointer-events-none"></div>
          
          <div className="relative z-10 max-w-3xl text-left space-y-4">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-400/20 text-amber-300 text-xs font-bold tracking-widest uppercase border border-amber-400/30">
              <Award className="w-3.5 h-3.5 text-amber-300" />
              {language === 'hi' ? 'बैतूल ब्राइडल स्टूडियो' : 'The Betul Bridal Sanctuary'}
            </span>

            <h2 className="font-serif text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
              {language === 'hi' ? (
                <>
                  सपनों की दुल्हन के लिए <br />
                  <span className="text-amber-300">राजसी बनारसी एवं शुद्ध जरी संग्रह</span>
                </>
              ) : (
                <>
                  Woven for the Regal Bride: <br />
                  <span className="text-amber-300">Pure Silk & Authentic Golden Zari</span>
                </>
              )}
            </h2>

            <p className="text-stone-200 text-sm sm:text-base leading-relaxed">
              {language === 'hi'
                ? 'श्रीनाथ जी साड़ीज़, कोठी बाजार में आपको मिलता है बैतूल का सबसे भव्य दुल्हन लाउंज। शादी के मुख्य फेरों से लेकर संगीत, रिसेप्शन एवं सगाई के लिए विशेष कारीगरी से तैयार भारी जरी साड़ियाँ, लहंगे एवं मैचिंग साफ़े।'
                : 'Step into our dedicated Bridal Lounge at Kothi Bazar, Betul. Explore royal Katan silk drapes, handcrafted Kadhwa borders, and heavy gold zari brocades curated to make every Betul bride radiate timeless majesty.'}
            </p>

            <div className="pt-2 flex flex-wrap gap-4 text-xs sm:text-sm font-semibold text-amber-200">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-amber-400" />
                {language === 'hi' ? 'शादी के लिए थोक छूट' : 'Special Wedding Trousseau Packages'}
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-amber-400" />
                {language === 'hi' ? 'मैचिंग फॉल, पीको एवं ब्लाउज' : 'Same-Day Fall, Pico & Blouse Tailoring'}
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-amber-400" />
                {language === 'hi' ? 'खुला रात्रि 9:00 बजे तक' : 'Open 7 Days till 9:00 PM'}
              </span>
            </div>
          </div>
        </div>

        {/* Video Call Shopping Feature Section */}
        <div id="video-shopping" className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center text-left">
          
          {/* Left: Video Shopping Context */}
          <div className="lg:col-span-6 space-y-5">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 text-emerald-900 text-xs font-bold uppercase tracking-wider">
              <Video className="w-3.5 h-3.5 text-emerald-600" />
              {language === 'hi' ? 'घर बैठे वीडियो शॉपिंग' : 'Live Virtual Showroom'}
            </div>

            <h3 className="font-serif text-2xl sm:text-4xl font-bold text-[#450514]">
              {language === 'hi'
                ? 'व्हाट्सएप वीडियो कॉल पर देखें अपनी मनपसंद साड़ी'
                : 'Live Video Call Shopping for Betul & Nearby Towns'}
            </h3>

            <p className="text-stone-600 text-sm sm:text-base leading-relaxed">
              {language === 'hi'
                ? 'यदि आप मुलताई, आमला, शाहपुर, पांढुर्णा, परासिया, छिंदवाड़ा, या भोपाल में रहते हैं और तुरंत कोठी बाजार नहीं आ सकते, तो हमारे विशेषज्ञ स्टाफ के साथ लाइव 1-ऑन-1 वीडियो कॉल बुक करें। हम आपको साड़ियों के फैब्रिक, ड्रेप और जरी का चमकता काम लाइव दिखाएंगे।'
                : 'Living in Multai, Amla, Shahpur, Chhindwara, Parasia or elsewhere in MP? Experience our Kothi Bazar showroom from the comfort of your living room! Our staff will pull pieces off the racks, showcase real zari sheen, and deliver safely to your doorstep.'}
            </p>

            <div className="space-y-3 pt-2">
              <div className="flex items-start gap-3 bg-stone-50 p-3 rounded-xl border border-stone-200">
                <div className="w-8 h-8 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 font-bold text-xs">
                  1
                </div>
                <div>
                  <h4 className="text-xs font-bold text-stone-900">
                    {language === 'hi' ? 'कॉल समय चुनें' : 'Schedule your preferred time'}
                  </h4>
                  <p className="text-[11px] text-stone-500">Pick a morning, afternoon, or evening slot that fits your schedule.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 bg-stone-50 p-3 rounded-xl border border-stone-200">
                <div className="w-8 h-8 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 font-bold text-xs">
                  2
                </div>
                <div>
                  <h4 className="text-xs font-bold text-stone-900">
                    {language === 'hi' ? 'लाइव वीडियो डेमो' : 'Personal 1-on-1 WhatsApp walkthrough'}
                  </h4>
                  <p className="text-[11px] text-stone-500">See real fabric textures, true colors, and pallu zari work on high-def video.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 bg-stone-50 p-3 rounded-xl border border-stone-200">
                <div className="w-8 h-8 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 font-bold text-xs">
                  3
                </div>
                <div>
                  <h4 className="text-xs font-bold text-stone-900">
                    {language === 'hi' ? 'सुरक्षित होम डिलीवरी या स्टोर पिकअप' : 'Doorstep dispatch or store trial hold'}
                  </h4>
                  <p className="text-[11px] text-stone-500">Have your selected sarees couriered or held for your in-person trial in Kothi Bazar.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Booking Form */}
          <div className="lg:col-span-6">
            <div className="bg-[#fcfaf7] p-6 sm:p-8 rounded-3xl border border-amber-300 shadow-xl relative">
              <div className="flex items-center justify-between border-b border-amber-200 pb-4 mb-5">
                <div>
                  <h4 className="font-serif text-lg font-bold text-stone-900">
                    {language === 'hi' ? 'वीडियो कॉल स्लॉट बुक करें' : 'Book a Video Shopping Session'}
                  </h4>
                  <p className="text-xs text-stone-500">Free consultation with our senior saree advisor</p>
                </div>
                <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-700">
                  <Video className="w-5 h-5" />
                </div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                
                {/* Full Name */}
                <div>
                  <label className="block text-xs font-bold text-stone-700 mb-1">
                    {language === 'hi' ? 'आपका नाम' : 'Your Full Name'} *
                  </label>
                  <div className="relative">
                    <User className="w-4 h-4 text-stone-400 absolute left-3 top-3" />
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder={language === 'hi' ? 'उदा. सुनीता शर्मा' : 'e.g. Priya Verma'}
                      className="w-full bg-white border border-stone-300 rounded-xl pl-9 pr-3 py-2 text-xs text-stone-800 focus:outline-none focus:ring-1 focus:ring-[#7d0a28]"
                    />
                  </div>
                </div>

                {/* Phone Number & Town */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-bold text-stone-700 mb-1">
                      {language === 'hi' ? 'व्हाट्सएप मोबाइल नंबर' : 'WhatsApp Number'} *
                    </label>
                    <div className="relative">
                      <Phone className="w-4 h-4 text-stone-400 absolute left-3 top-3" />
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+91 98XXX XXXXX"
                        className="w-full bg-white border border-stone-300 rounded-xl pl-9 pr-3 py-2 text-xs text-stone-800 focus:outline-none focus:ring-1 focus:ring-[#7d0a28]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-stone-700 mb-1">
                      {language === 'hi' ? 'शहर / कस्बा' : 'City / Town'}
                    </label>
                    <div className="relative">
                      <MapPin className="w-4 h-4 text-stone-400 absolute left-3 top-3" />
                      <input
                        type="text"
                        value={formData.town}
                        onChange={(e) => setFormData({ ...formData, town: e.target.value })}
                        placeholder="Betul, Multai, Amla..."
                        className="w-full bg-white border border-stone-300 rounded-xl pl-9 pr-3 py-2 text-xs text-stone-800 focus:outline-none focus:ring-1 focus:ring-[#7d0a28]"
                      />
                    </div>
                  </div>
                </div>

                {/* Category of Interest */}
                <div>
                  <label className="block text-xs font-bold text-stone-700 mb-1">
                    {language === 'hi' ? 'किस प्रकार की साड़ियाँ देखना चाहते हैं?' : 'Interested Collection'}
                  </label>
                  <select
                    value={formData.sareeInterest}
                    onChange={(e) => setFormData({ ...formData, sareeInterest: e.target.value })}
                    className="w-full bg-white border border-stone-300 rounded-xl px-3 py-2 text-xs text-stone-800 focus:outline-none focus:ring-1 focus:ring-[#7d0a28]"
                  >
                    <option value="Bridal Banarasi Silk">Bridal Banarasi Silk Sarees</option>
                    <option value="Lightweight Zari Borders">Lightweight Sarees with Golden Zari Borders</option>
                    <option value="Chanderi Handlooms">Chanderi & Maheshwari Handlooms</option>
                    <option value="Organza & Tissue Drapes">Organza & Tissue Party Wear</option>
                    <option value="Unstitched Dress Materials">Unstitched Suit Materials & Dupattas</option>
                    <option value="Bulk Wedding Gifting">Wedding Gifting & Family Packages</option>
                  </select>
                </div>

                {/* Date & Slot */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-bold text-stone-700 mb-1">
                      {language === 'hi' ? 'पसंदीदा तारीख' : 'Preferred Date'}
                    </label>
                    <input
                      type="date"
                      value={formData.preferredDate}
                      onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                      className="w-full bg-white border border-stone-300 rounded-xl px-3 py-2 text-xs text-stone-800 focus:outline-none focus:ring-1 focus:ring-[#7d0a28]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-stone-700 mb-1">
                      {language === 'hi' ? 'समय स्लॉट' : 'Time Slot'}
                    </label>
                    <select
                      value={formData.timeSlot}
                      onChange={(e) => setFormData({ ...formData, timeSlot: e.target.value })}
                      className="w-full bg-white border border-stone-300 rounded-xl px-3 py-2 text-xs text-stone-800 focus:outline-none focus:ring-1 focus:ring-[#7d0a28]"
                    >
                      <option value="Morning (11:00 AM - 1:00 PM)">Morning (11:00 AM - 1:00 PM)</option>
                      <option value="Afternoon (2:00 PM - 5:00 PM)">Afternoon (2:00 PM - 5:00 PM)</option>
                      <option value="Evening (5:00 PM - 8:30 PM)">Evening (5:00 PM - 8:30 PM)</option>
                    </select>
                  </div>
                </div>

                {/* Submit CTA */}
                <button
                  type="submit"
                  className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3 px-4 rounded-xl text-xs sm:text-sm flex items-center justify-center gap-2 shadow-md transition-all cursor-pointer mt-2"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>{language === 'hi' ? 'व्हाट्सएप पर स्लॉट कन्फर्म करें' : 'Confirm Video Call via WhatsApp'}</span>
                </button>

                {submitted && (
                  <p className="text-xs text-emerald-700 font-semibold text-center mt-2 flex items-center justify-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5" /> Appointment request opened in WhatsApp!
                  </p>
                )}

              </form>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
