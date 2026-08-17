import React from 'react';
import {
  Plane,
  FileCheck,
  Briefcase,
  GraduationCap,
  Stethoscope,
  Users,
  FileBadge,
  Moon,
  Sun,
  Building2,
  Palmtree,
  Car,
  KeyRound,
  Package,
  ShieldCheck,
  Building,
  CheckCircle2,
  ArrowRight,
  Clock,
} from 'lucide-react';
import { ServiceItem, Language } from '../types';
import { translations } from '../translations';

const iconMap: Record<string, React.FC<{ className?: string }>> = {
  Plane,
  FileCheck,
  Briefcase,
  GraduationCap,
  Stethoscope,
  Users,
  FileBadge,
  Moon,
  Sun,
  Building2,
  Palmtree,
  Car,
  KeyRound,
  Package,
  ShieldCheck,
  Building,
};

interface ServiceCardProps {
  service: ServiceItem;
  currentLang: Language;
  onRequestService: (serviceName: string) => void;
  onLearnMore: (service: ServiceItem) => void;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({
  service,
  currentLang,
  onRequestService,
  onLearnMore,
}) => {
  const t = translations[currentLang];
  const IconComponent = iconMap[service.icon] || Plane;
  const isRtl = currentLang === 'ar';

  return (
    <div className="group rounded-2xl bg-white border border-stone-200/90 hover:border-amber-400/60 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col overflow-hidden">
      {/* Service Header Image */}
      <div className="relative h-48 sm:h-52 w-full overflow-hidden bg-stone-900">
        <img
          src={service.image}
          alt={service.name[currentLang]}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
          loading="lazy"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-stone-950/20 to-transparent" />

        {/* Category Pill */}
        <div className="absolute top-3 left-3 rtl:left-auto rtl:right-3">
          <span className="px-2.5 py-1 rounded-full text-[10px] font-bold tracking-wider uppercase bg-stone-950/80 backdrop-blur-md text-amber-300 border border-amber-500/30">
            {service.category}
          </span>
        </div>

        {/* Processing Time Badge */}
        <div className="absolute bottom-3 right-3 rtl:right-auto rtl:left-3 flex items-center gap-1 px-2.5 py-1 rounded-md bg-stone-900/90 text-stone-200 text-[11px] font-medium border border-stone-700/60">
          <Clock className="w-3 h-3 text-amber-400" />
          <span>{service.processingTime[currentLang]}</span>
        </div>
      </div>

      {/* Card Body */}
      <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between">
        <div>
          {/* Title with Icon */}
          <div className="flex items-start gap-3 mb-2.5">
            <div className="p-2 rounded-xl bg-amber-500/10 text-amber-600 border border-amber-500/20 group-hover:bg-gold-gradient group-hover:text-stone-950 transition-colors shrink-0">
              <IconComponent className="w-5 h-5" />
            </div>
            <h3 className="font-serif-luxury text-base sm:text-lg font-bold text-stone-900 leading-snug group-hover:text-amber-700 transition-colors">
              {service.name[currentLang]}
            </h3>
          </div>

          {/* Short Description */}
          <p className="text-xs sm:text-sm text-stone-600 leading-relaxed line-clamp-2 mb-4">
            {service.shortDescription[currentLang]}
          </p>

          {/* Benefits Checklist */}
          <div className="space-y-1.5 pt-2 border-t border-stone-100 mb-6">
            {service.benefits[currentLang].slice(0, 2).map((benefit, idx) => (
              <div key={idx} className="flex items-start gap-2 text-xs text-stone-700">
                <CheckCircle2 className="w-3.5 h-3.5 text-amber-500 shrink-0 mt-0.5" />
                <span className="line-clamp-1">{benefit}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Actions */}
        <div className="grid grid-cols-2 gap-2 pt-2 border-t border-stone-100">
          <button
            onClick={() => onLearnMore(service)}
            className="px-3 py-2 rounded-xl text-xs font-semibold text-stone-700 bg-stone-100 hover:bg-stone-200 hover:text-stone-950 transition-colors text-center"
          >
            {t.services_learn_more}
          </button>

          <button
            onClick={() => onRequestService(service.name[currentLang])}
            className="px-3 py-2 rounded-xl text-xs font-bold text-stone-950 bg-gold-gradient hover:brightness-105 active:scale-95 transition-all flex items-center justify-center gap-1 shadow-sm"
          >
            <span>{t.nav_request_service}</span>
            <ArrowRight className={`w-3 h-3 ${isRtl ? 'rotate-180' : ''}`} />
          </button>
        </div>
      </div>
    </div>
  );
};
