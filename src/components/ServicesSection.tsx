import React, { useState } from 'react';
import {
  Plane,
  FileCheck,
  Moon,
  Building2,
  Package,
  Layers,
  Sparkles,
} from 'lucide-react';
import { ServiceItem, Language } from '../types';
import { servicesData } from '../data/servicesData';
import { translations } from '../translations';
import { ServiceCard } from './ServiceCard';

interface ServicesSectionProps {
  currentLang: Language;
  onRequestService: (serviceName?: string) => void;
  onLearnMore: (service: ServiceItem) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({
  currentLang,
  onRequestService,
  onLearnMore,
}) => {
  const [activeTab, setActiveTab] = useState<'all' | 'flight' | 'visa' | 'pilgrimage' | 'hospitality' | 'cargo'>('all');
  const t = translations[currentLang];

  const filteredServices = servicesData.filter((srv) => {
    if (activeTab === 'all') return true;
    if (activeTab === 'flight') return srv.category === 'flight' || srv.category === 'corporate';
    if (activeTab === 'visa') return srv.category === 'visa';
    if (activeTab === 'pilgrimage') return srv.category === 'pilgrimage';
    if (activeTab === 'hospitality') return srv.category === 'hotel' || srv.category === 'transfer' || srv.category === 'tours';
    if (activeTab === 'cargo') return srv.category === 'cargo' || srv.category === 'insurance';
    return true;
  });

  return (
    <section id="services" className="py-20 bg-stone-50 text-stone-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 text-amber-700 text-xs font-bold uppercase tracking-widest mb-3 border border-amber-500/20">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Comprehensive Travel Solutions</span>
          </div>

          <h2 className="font-serif-luxury text-3xl sm:text-4xl font-bold text-stone-900 tracking-tight">
            {t.services_title}
          </h2>

          <p className="mt-3 text-sm sm:text-base text-stone-600 leading-relaxed">
            {t.services_subtitle}
          </p>

          {/* Filtering Category Pills */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-2">
            <button
              onClick={() => setActiveTab('all')}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                activeTab === 'all'
                  ? 'bg-stone-900 text-amber-400 shadow-md'
                  : 'bg-white text-stone-600 hover:bg-stone-100 border border-stone-200'
              }`}
            >
              {t.services_filter_all}
            </button>

            <button
              onClick={() => setActiveTab('flight')}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer ${
                activeTab === 'flight'
                  ? 'bg-stone-900 text-amber-400 shadow-md'
                  : 'bg-white text-stone-600 hover:bg-stone-100 border border-stone-200'
              }`}
            >
              <Plane className="w-3.5 h-3.5" />
              <span>{t.services_filter_flight}</span>
            </button>

            <button
              onClick={() => setActiveTab('visa')}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer ${
                activeTab === 'visa'
                  ? 'bg-stone-900 text-amber-400 shadow-md'
                  : 'bg-white text-stone-600 hover:bg-stone-100 border border-stone-200'
              }`}
            >
              <FileCheck className="w-3.5 h-3.5" />
              <span>{t.services_filter_visa}</span>
            </button>

            <button
              onClick={() => setActiveTab('pilgrimage')}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer ${
                activeTab === 'pilgrimage'
                  ? 'bg-stone-900 text-amber-400 shadow-md'
                  : 'bg-white text-stone-600 hover:bg-stone-100 border border-stone-200'
              }`}
            >
              <Moon className="w-3.5 h-3.5" />
              <span>{t.services_filter_pilgrimage}</span>
            </button>

            <button
              onClick={() => setActiveTab('hospitality')}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer ${
                activeTab === 'hospitality'
                  ? 'bg-stone-900 text-amber-400 shadow-md'
                  : 'bg-white text-stone-600 hover:bg-stone-100 border border-stone-200'
              }`}
            >
              <Building2 className="w-3.5 h-3.5" />
              <span>{t.services_filter_hospitality}</span>
            </button>

            <button
              onClick={() => setActiveTab('cargo')}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer ${
                activeTab === 'cargo'
                  ? 'bg-stone-900 text-amber-400 shadow-md'
                  : 'bg-white text-stone-600 hover:bg-stone-100 border border-stone-200'
              }`}
            >
              <Package className="w-3.5 h-3.5" />
              <span>{t.services_filter_cargo}</span>
            </button>
          </div>
        </div>

        {/* Services Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredServices.map((service) => (
            <ServiceCard
              key={service.id}
              service={service}
              currentLang={currentLang}
              onRequestService={onRequestService}
              onLearnMore={onLearnMore}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
