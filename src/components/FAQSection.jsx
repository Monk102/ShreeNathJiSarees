import React, { useState } from 'react';
import { FAQS } from '../data/sareesData';
import { ChevronDown, ChevronUp, HelpCircle, Sparkles } from 'lucide-react';

export default function FAQSection({ language }) {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section className="py-16 bg-white border-b border-amber-900/10">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-bold uppercase tracking-wider mb-2">
            <HelpCircle className="w-3.5 h-3.5 text-amber-600" />
            {language === 'hi' ? 'अक्सर पूछे जाने वाले प्रश्न' : 'Frequently Asked Questions'}
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-extrabold text-[#450514]">
            {language === 'hi' ? 'आपके प्रश्नों के सरल उत्तर' : 'Everything You Need to Know'}
          </h2>
          <p className="mt-2 text-stone-600 text-sm">
            {language === 'hi'
              ? 'साड़ी चयन, जरी बॉर्डर, टेलरिंग, एवं दुकान से संबंधित सभी जानकारियाँ'
              : 'Details regarding our saree fabrics, golden zari finishes, timings, and shopping services'}
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-3.5">
          {FAQS.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="rounded-2xl border border-amber-200/80 bg-[#fffdfa] overflow-hidden transition-all shadow-2xs"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 hover:bg-amber-50/50 transition-colors cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <span className="font-serif text-sm sm:text-base font-bold text-stone-900 flex items-center gap-2.5">
                    <span className="w-2 h-2 rounded-full bg-[#7d0a28] shrink-0"></span>
                    <span>{language === 'hi' ? faq.hindiQuestion : faq.question}</span>
                  </span>

                  <span className="p-1 rounded-full bg-amber-100/70 text-amber-900 shrink-0">
                    {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                  </span>
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-stone-600 leading-relaxed border-t border-amber-100 animate-fadeIn">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
