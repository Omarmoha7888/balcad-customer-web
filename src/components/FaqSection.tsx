import React, { useState } from 'react';
import {
  HelpCircle,
  ChevronDown,
  Search,
  Sparkles,
} from 'lucide-react';
import { Language } from '../types';
import { translations } from '../translations';
import { faqData } from '../data/faqData';

interface FaqSectionProps {
  currentLang: Language;
  onRequestService: () => void;
}

export const FaqSection: React.FC<FaqSectionProps> = ({ currentLang, onRequestService }) => {
  const [openFaqId, setOpenFaqId] = useState<string | null>(faqData[0]?.id || null);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'general' | 'booking' | 'payment' | 'visa' | 'pilgrimage'>('all');

  const t = translations[currentLang];

  const filteredFaqs = faqData.filter((faq) => {
    const matchCategory = selectedCategory === 'all' || faq.category === selectedCategory;
    const matchSearch =
      !searchQuery.trim() ||
      faq.question[currentLang].toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer[currentLang].toLowerCase().includes(searchQuery.toLowerCase());
    return matchCategory && matchSearch;
  });

  const toggleFaq = (id: string) => {
    setOpenFaqId((prev) => (prev === id ? null : id));
  };

  return (
    <section id="faq" className="py-20 bg-white text-stone-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 text-amber-700 text-xs font-bold uppercase tracking-widest mb-3 border border-amber-500/20">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Got Questions?</span>
          </div>

          <h2 className="font-serif-luxury text-3xl sm:text-4xl font-bold text-stone-900 tracking-tight">
            {t.faq_title}
          </h2>

          <p className="mt-3 text-sm sm:text-base text-stone-600 leading-relaxed">
            {t.faq_subtitle}
          </p>

          {/* Search bar inside FAQ */}
          <div className="mt-6 relative max-w-md mx-auto">
            <Search className="w-4 h-4 text-stone-400 absolute left-3.5 top-1/2 -translate-y-1/2 rtl:left-auto rtl:right-3.5" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search frequently asked questions..."
              className="w-full pl-10 pr-4 rtl:pl-4 rtl:pr-10 py-2.5 rounded-xl border border-stone-300 focus:border-amber-500 text-xs sm:text-sm focus:outline-none bg-stone-50"
            />
          </div>

          {/* Category Filter Pills */}
          <div className="mt-6 flex flex-wrap items-center justify-center gap-2">
            <button
              onClick={() => setSelectedCategory('all')}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                selectedCategory === 'all'
                  ? 'bg-stone-900 text-amber-400'
                  : 'bg-stone-100 text-stone-600 hover:bg-stone-200'
              }`}
            >
              All
            </button>
            <button
              onClick={() => setSelectedCategory('payment')}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                selectedCategory === 'payment'
                  ? 'bg-stone-900 text-amber-400'
                  : 'bg-stone-100 text-stone-600 hover:bg-stone-200'
              }`}
            >
              Payment Policy
            </button>
            <button
              onClick={() => setSelectedCategory('booking')}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                selectedCategory === 'booking'
                  ? 'bg-stone-900 text-amber-400'
                  : 'bg-stone-100 text-stone-600 hover:bg-stone-200'
              }`}
            >
              Booking Process
            </button>
            <button
              onClick={() => setSelectedCategory('visa')}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                selectedCategory === 'visa'
                  ? 'bg-stone-900 text-amber-400'
                  : 'bg-stone-100 text-stone-600 hover:bg-stone-200'
              }`}
            >
              Visa Services
            </button>
            <button
              onClick={() => setSelectedCategory('pilgrimage')}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                selectedCategory === 'pilgrimage'
                  ? 'bg-stone-900 text-amber-400'
                  : 'bg-stone-100 text-stone-600 hover:bg-stone-200'
              }`}
            >
              Hajj & Umrah
            </button>
          </div>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-3">
          {filteredFaqs.map((faq) => {
            const isOpen = openFaqId === faq.id;
            return (
              <div
                key={faq.id}
                className="rounded-2xl border border-stone-200/90 bg-stone-50 overflow-hidden transition-all"
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(faq.id)}
                  className="w-full p-5 text-left rtl:text-right flex items-center justify-between gap-4 font-serif-luxury font-bold text-sm sm:text-base text-stone-900 hover:text-amber-800 transition-colors"
                >
                  <span className="leading-snug">{faq.question[currentLang]}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-amber-600 shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-stone-600 leading-relaxed border-t border-stone-200/60 bg-white animate-in fade-in-50 duration-150">
                    <p>{faq.answer[currentLang]}</p>
                  </div>
                )}
              </div>
            );
          })}

          {filteredFaqs.length === 0 && (
            <div className="text-center py-12 text-stone-500 text-xs">
              No answers matching your search criteria. Please contact our support team.
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
