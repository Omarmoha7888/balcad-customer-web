import React from 'react';
import {
  X,
  Plane,
  CheckCircle2,
  Clock,
  FileCheck,
  ShieldCheck,
  ArrowRight,
  Sparkles,
} from 'lucide-react';
import { ServiceItem, Language } from '../types';
import { translations } from '../translations';

interface ServiceDetailModalProps {
  service: ServiceItem | null;
  isOpen: boolean;
  onClose: () => void;
  currentLang: Language;
  onRequestService: (serviceName: string) => void;
}

export const ServiceDetailModal: React.FC<ServiceDetailModalProps> = ({
  service,
  isOpen,
  onClose,
  currentLang,
  onRequestService,
}) => {
  if (!isOpen || !service) return null;

  const t = translations[currentLang];
  const isRtl = currentLang === 'ar';

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-stone-950/80 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-200">
      <div className="relative w-full max-w-3xl rounded-3xl bg-white text-stone-900 border border-amber-500/40 shadow-2xl overflow-hidden flex flex-col max-h-[92vh]">
        {/* Cover Photo Header */}
        <div className="relative h-56 sm:h-64 w-full overflow-hidden bg-stone-950">
          <img
            src={service.image}
            alt={service.name[currentLang]}
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/40 to-transparent" />

          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-xl bg-stone-950/80 hover:bg-stone-900 text-stone-300 hover:text-white transition-colors backdrop-blur-sm z-10"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Banner Details */}
          <div className="absolute bottom-4 left-6 right-6 text-white">
            <span className="px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-amber-500 text-stone-950 mb-2 inline-block">
              {service.category}
            </span>
            <h2 className="font-serif-luxury text-xl sm:text-2xl font-bold text-stone-100">
              {service.name[currentLang]}
            </h2>
          </div>
        </div>

        {/* Content Body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6 flex-1 text-xs sm:text-sm">
          {/* Full Description */}
          <div>
            <h3 className="font-serif-luxury text-sm font-bold text-stone-900 uppercase tracking-wider mb-2 text-amber-700">
              Overview
            </h3>
            <p className="text-stone-700 leading-relaxed">
              {service.fullDescription[currentLang]}
            </p>
          </div>

          {/* Key Benefits */}
          <div className="p-5 rounded-2xl bg-stone-50 border border-stone-200">
            <h3 className="font-serif-luxury text-sm font-bold text-stone-900 mb-3 flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-amber-600" />
              <span>Service Key Advantages</span>
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {service.benefits[currentLang].map((benefit, idx) => (
                <div key={idx} className="flex items-start gap-2 text-stone-700">
                  <CheckCircle2 className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                  <span>{benefit}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Required Documents Checklist */}
          <div>
            <h3 className="font-serif-luxury text-sm font-bold text-stone-900 mb-3 flex items-center gap-2">
              <FileCheck className="w-4 h-4 text-amber-600" />
              <span>{t.services_required_documents}</span>
            </h3>
            <div className="rounded-2xl border border-stone-200 divide-y divide-stone-100 bg-white">
              {service.requiredDocuments[currentLang].map((doc, idx) => (
                <div key={idx} className="p-3 flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-amber-500/10 text-amber-700 flex items-center justify-center font-bold text-[10px] shrink-0">
                    {idx + 1}
                  </div>
                  <span className="font-medium text-stone-800">{doc}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Processing Time & Support Callout */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div className="p-4 rounded-2xl bg-amber-500/10 border border-amber-500/25 flex items-center gap-3">
              <Clock className="w-6 h-6 text-amber-600 shrink-0" />
              <div>
                <div className="text-[10px] uppercase tracking-wider font-bold text-amber-800">
                  {t.services_processing_time}
                </div>
                <div className="font-bold text-stone-900 text-xs sm:text-sm">
                  {service.processingTime[currentLang]}
                </div>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-stone-900 text-white flex items-center gap-3">
              <ShieldCheck className="w-6 h-6 text-amber-400 shrink-0" />
              <div>
                <div className="text-[10px] uppercase tracking-wider font-bold text-amber-400">
                  Zero Online Payment
                </div>
                <div className="text-[11px] text-stone-300">
                  Verified & confirmed by dedicated specialist
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Modal Bottom Actions */}
        <div className="bg-stone-50 border-t border-stone-200 p-4 sm:p-6 flex items-center justify-between">
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-xl text-stone-600 hover:text-stone-900 text-xs font-semibold"
          >
            Close
          </button>

          <button
            onClick={() => {
              onClose();
              onRequestService(service.name[currentLang]);
            }}
            className="px-6 py-2.5 rounded-xl bg-gold-gradient text-stone-950 font-bold text-xs sm:text-sm shadow-md hover:brightness-105 active:scale-95 transition-all flex items-center gap-2 cursor-pointer"
          >
            <Plane className="w-4 h-4 text-stone-950" />
            <span>{t.nav_request_service}</span>
            <ArrowRight className={`w-3.5 h-3.5 ${isRtl ? 'rotate-180' : ''}`} />
          </button>
        </div>
      </div>
    </div>
  );
};
