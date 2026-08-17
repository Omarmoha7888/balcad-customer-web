import React, { useState, useEffect } from 'react';
import {
  Search,
  X,
  Plane,
  FileCheck,
  Moon,
  Building2,
  HelpCircle,
  ArrowRight,
  Sparkles,
} from 'lucide-react';
import { Language, ServiceItem, FAQItem } from '../types';
import { translations } from '../translations';
import { servicesData } from '../data/servicesData';
import { faqData } from '../data/faqData';

interface GlobalSearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentLang: Language;
  onSelectService: (service: ServiceItem) => void;
  onRequestService: (serviceName: string) => void;
}

export const GlobalSearchModal: React.FC<GlobalSearchModalProps> = ({
  isOpen,
  onClose,
  currentLang,
  onSelectService,
  onRequestService,
}) => {
  const [query, setQuery] = useState('');
  const t = translations[currentLang];
  const isRtl = currentLang === 'ar';

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        // Toggle or open
      }
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const matchedServices = servicesData.filter(
    (s) =>
      !query.trim() ||
      s.name[currentLang].toLowerCase().includes(query.toLowerCase()) ||
      s.shortDescription[currentLang].toLowerCase().includes(query.toLowerCase()) ||
      s.category.toLowerCase().includes(query.toLowerCase())
  );

  const matchedFaqs = faqData.filter(
    (f) =>
      query.trim() &&
      (f.question[currentLang].toLowerCase().includes(query.toLowerCase()) ||
        f.answer[currentLang].toLowerCase().includes(query.toLowerCase()))
  );

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-50 bg-stone-950/80 backdrop-blur-md flex items-start justify-center pt-20 p-4 animate-in fade-in duration-150"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="w-full max-w-2xl rounded-3xl bg-white text-stone-900 border border-amber-500/40 shadow-2xl overflow-hidden flex flex-col max-h-[80vh]"
      >
        {/* Search Input Bar */}
        <div className="p-4 sm:p-5 bg-stone-950 border-b border-amber-500/30 flex items-center gap-3">
          <Search className="w-5 h-5 text-amber-400 shrink-0" />
          <input
            type="text"
            autoFocus
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder={t.nav_search_placeholder}
            className="w-full bg-transparent text-sm sm:text-base text-stone-100 placeholder-stone-400 focus:outline-none"
          />
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg bg-stone-900 text-stone-400 hover:text-white"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Results List */}
        <div className="p-4 sm:p-6 overflow-y-auto space-y-6 flex-1 text-xs sm:text-sm">
          {/* Matched Travel Services */}
          <div>
            <div className="text-[11px] font-bold uppercase tracking-wider text-amber-800 mb-2.5 flex items-center justify-between">
              <span>Travel Services ({matchedServices.length})</span>
            </div>

            <div className="space-y-2">
              {matchedServices.slice(0, 5).map((srv) => (
                <div
                  key={srv.id}
                  className="p-3 rounded-xl bg-stone-50 hover:bg-amber-50/50 border border-stone-200/80 transition-colors flex items-center justify-between gap-3 group cursor-pointer"
                  onClick={() => {
                    onClose();
                    onSelectService(srv);
                  }}
                >
                  <div className="flex items-center gap-3">
                    <img
                      src={srv.image}
                      alt={srv.name[currentLang]}
                      className="w-10 h-10 rounded-lg object-cover"
                      referrerPolicy="no-referrer"
                    />
                    <div>
                      <h4 className="font-bold text-stone-900 group-hover:text-amber-800">
                        {srv.name[currentLang]}
                      </h4>
                      <p className="text-[11px] text-stone-500 line-clamp-1">
                        {srv.shortDescription[currentLang]}
                      </p>
                    </div>
                  </div>

                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      onClose();
                      onRequestService(srv.name[currentLang]);
                    }}
                    className="px-3 py-1.5 rounded-lg bg-gold-gradient text-stone-950 font-bold text-[11px] shrink-0 opacity-0 group-hover:opacity-100 transition-opacity"
                  >
                    Request
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Matched FAQs */}
          {matchedFaqs.length > 0 && (
            <div>
              <div className="text-[11px] font-bold uppercase tracking-wider text-amber-800 mb-2.5">
                Related FAQs ({matchedFaqs.length})
              </div>
              <div className="space-y-2">
                {matchedFaqs.slice(0, 3).map((f) => (
                  <div key={f.id} className="p-3 rounded-xl bg-stone-50 border border-stone-200">
                    <div className="font-bold text-stone-900 mb-1">{f.question[currentLang]}</div>
                    <p className="text-[11px] text-stone-600 line-clamp-2">{f.answer[currentLang]}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
