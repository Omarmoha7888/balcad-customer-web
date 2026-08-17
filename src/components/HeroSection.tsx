import React from 'react';
import {
  Plane,
  FileCheck,
  Moon,
  Building2,
  Package,
  ShieldCheck,
  ArrowRight,
  PhoneCall,
  Sparkles,
  Award,
  CheckCircle,
} from 'lucide-react';
import { Language } from '../types';
import { translations } from '../translations';

interface HeroSectionProps {
  currentLang: Language;
  onRequestServiceClick: (preselectedService?: string) => void;
  onContactClick: () => void;
  onTrackClick: () => void;
  onSelectCategory: (category: string) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  currentLang,
  onRequestServiceClick,
  onContactClick,
  onTrackClick,
  onSelectCategory,
}) => {
  const t = translations[currentLang];
  const isRtl = currentLang === 'ar';

  return (
    <section id="hero" className="relative w-full overflow-hidden bg-stone-950 text-white pt-12 pb-20 sm:pb-28">
      {/* Ambient Luxury Background with Gold Glow Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=2000&q=80"
          alt="Luxury International Travel"
          className="w-full h-full object-cover object-center opacity-25 scale-105 transition-transform duration-1000"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/80 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-stone-950/95 via-stone-950/70 to-stone-950/90" />
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-amber-500/10 blur-[140px] rounded-full pointer-events-none" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-8">
        {/* Top Trust Badge */}
        <div className="flex justify-center sm:justify-start mb-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-stone-900/90 border border-amber-500/40 text-amber-300 text-xs font-semibold tracking-wide backdrop-blur-md shadow-lg shadow-amber-500/5">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>{t.hero_badge}</span>
            <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
          </div>
        </div>

        {/* Hero Title & Subtitle */}
        <div className="max-w-3xl text-center sm:text-left rtl:sm:text-right">
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-serif-luxury font-bold tracking-tight text-stone-100 leading-[1.15]">
            {t.hero_title_prefix}{' '}
            <span className="text-gold-gradient font-extrabold block sm:inline mt-1 sm:mt-0">
              {t.hero_title_highlight}
            </span>
          </h1>

          <p className="mt-5 text-base sm:text-lg text-stone-300 font-normal leading-relaxed max-w-2xl">
            {t.hero_description}
          </p>

          {/* Core CTAs */}
          <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
            <button
              onClick={() => onRequestServiceClick()}
              className="px-6 py-3.5 rounded-xl bg-gold-gradient text-stone-950 font-bold text-sm shadow-xl shadow-amber-500/25 hover:brightness-110 active:scale-95 transition-all flex items-center justify-center gap-2.5 cursor-pointer group"
            >
              <Plane className="w-4 h-4 text-stone-950 group-hover:rotate-12 transition-transform" />
              <span>{t.hero_btn_request}</span>
              <ArrowRight className={`w-4 h-4 ${isRtl ? 'rotate-180' : ''}`} />
            </button>

            <button
              onClick={onTrackClick}
              className="px-5 py-3.5 rounded-xl bg-stone-900/90 hover:bg-stone-800 text-stone-100 border border-amber-500/30 hover:border-amber-400 font-semibold text-sm transition-all flex items-center justify-center gap-2"
            >
              <ShieldCheck className="w-4 h-4 text-amber-400" />
              <span>{t.hero_btn_track}</span>
            </button>

            <button
              onClick={onContactClick}
              className="px-5 py-3.5 rounded-xl bg-transparent hover:bg-stone-900/60 text-stone-300 hover:text-amber-300 font-medium text-sm transition-all flex items-center justify-center gap-2"
            >
              <PhoneCall className="w-4 h-4 text-amber-400" />
              <span>{t.hero_btn_contact}</span>
            </button>
          </div>

          {/* Reassuring Zero-Online-Payment Banner (SRS Mandate) */}
          <div className="mt-6 p-3 rounded-xl bg-stone-900/80 border border-amber-500/20 text-stone-300 text-xs flex items-start gap-2.5 backdrop-blur-sm">
            <CheckCircle className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
            <p className="leading-relaxed">{t.hero_no_payment_notice}</p>
          </div>
        </div>

        {/* Quick Travel Services Bar */}
        <div className="mt-14 pt-8 border-t border-stone-800/80">
          <div className="text-xs uppercase tracking-widest text-amber-400/90 font-semibold mb-4 text-center sm:text-left rtl:sm:text-right">
            Popular Travel Services
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
            {/* Quick 1: Flights */}
            <button
              onClick={() => onRequestServiceClick('International Flight Booking')}
              className="p-3.5 rounded-xl bg-stone-900/70 hover:bg-stone-800/90 border border-stone-800 hover:border-amber-500/40 text-left rtl:text-right transition-all group hover:-translate-y-0.5"
            >
              <div className="w-8 h-8 rounded-lg bg-amber-500/10 text-amber-400 flex items-center justify-center mb-2 group-hover:bg-amber-500 group-hover:text-stone-950 transition-colors">
                <Plane className="w-4 h-4" />
              </div>
              <div className="text-xs font-bold text-stone-200 group-hover:text-amber-300">
                {t.quick_flights}
              </div>
              <div className="text-[11px] text-stone-400">Direct & Transit</div>
            </button>

            {/* Quick 2: Visa */}
            <button
              onClick={() => onRequestServiceClick('Tourist Visa Processing')}
              className="p-3.5 rounded-xl bg-stone-900/70 hover:bg-stone-800/90 border border-stone-800 hover:border-amber-500/40 text-left rtl:text-right transition-all group hover:-translate-y-0.5"
            >
              <div className="w-8 h-8 rounded-lg bg-amber-500/10 text-amber-400 flex items-center justify-center mb-2 group-hover:bg-amber-500 group-hover:text-stone-950 transition-colors">
                <FileCheck className="w-4 h-4" />
              </div>
              <div className="text-xs font-bold text-stone-200 group-hover:text-amber-300">
                {t.quick_visa}
              </div>
              <div className="text-[11px] text-stone-400">Dubai, Turkey, EU</div>
            </button>

            {/* Quick 3: Umrah & Hajj */}
            <button
              onClick={() => onRequestServiceClick('Spiritual Umrah Packages')}
              className="p-3.5 rounded-xl bg-stone-900/70 hover:bg-stone-800/90 border border-stone-800 hover:border-amber-500/40 text-left rtl:text-right transition-all group hover:-translate-y-0.5"
            >
              <div className="w-8 h-8 rounded-lg bg-amber-500/10 text-amber-400 flex items-center justify-center mb-2 group-hover:bg-amber-500 group-hover:text-stone-950 transition-colors">
                <Moon className="w-4 h-4" />
              </div>
              <div className="text-xs font-bold text-stone-200 group-hover:text-amber-300">
                {t.quick_pilgrimage}
              </div>
              <div className="text-[11px] text-stone-400">Nusuk & Haram View</div>
            </button>

            {/* Quick 4: Hotels */}
            <button
              onClick={() => onRequestServiceClick('Luxury Hotel & Resort Reservations')}
              className="p-3.5 rounded-xl bg-stone-900/70 hover:bg-stone-800/90 border border-stone-800 hover:border-amber-500/40 text-left rtl:text-right transition-all group hover:-translate-y-0.5"
            >
              <div className="w-8 h-8 rounded-lg bg-amber-500/10 text-amber-400 flex items-center justify-center mb-2 group-hover:bg-amber-500 group-hover:text-stone-950 transition-colors">
                <Building2 className="w-4 h-4" />
              </div>
              <div className="text-xs font-bold text-stone-200 group-hover:text-amber-300">
                {t.quick_hotels}
              </div>
              <div className="text-[11px] text-stone-400">5-Star & Resorts</div>
            </button>

            {/* Quick 5: Cargo */}
            <button
              onClick={() => onRequestServiceClick('Air Cargo & International Logistics')}
              className="p-3.5 rounded-xl bg-stone-900/70 hover:bg-stone-800/90 border border-stone-800 hover:border-amber-500/40 text-left rtl:text-right transition-all group hover:-translate-y-0.5 col-span-2 sm:col-span-1"
            >
              <div className="w-8 h-8 rounded-lg bg-amber-500/10 text-amber-400 flex items-center justify-center mb-2 group-hover:bg-amber-500 group-hover:text-stone-950 transition-colors">
                <Package className="w-4 h-4" />
              </div>
              <div className="text-xs font-bold text-stone-200 group-hover:text-amber-300">
                {t.quick_cargo}
              </div>
              <div className="text-[11px] text-stone-400">Global Air Freight</div>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
