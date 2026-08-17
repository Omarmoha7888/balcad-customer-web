import React from 'react';
import {
  Users,
  Zap,
  ShieldCheck,
  Award,
  Headphones,
  Compass,
  Globe2,
  Lock,
  TrendingUp,
  Plane,
  Building2,
  FileCheck,
  CheckCircle,
} from 'lucide-react';
import { Language } from '../types';
import { translations } from '../translations';

interface WhyChooseUsProps {
  currentLang: Language;
}

export const WhyChooseUs: React.FC<WhyChooseUsProps> = ({ currentLang }) => {
  const t = translations[currentLang];

  const pillars = [
    {
      icon: Users,
      title: t.why_team_title,
      desc: t.why_team_desc,
    },
    {
      icon: Zap,
      title: t.why_fast_title,
      desc: t.why_fast_desc,
    },
    {
      icon: ShieldCheck,
      title: t.why_trusted_title,
      desc: t.why_trusted_desc,
    },
    {
      icon: Award,
      title: t.why_experienced_title,
      desc: t.why_experienced_desc,
    },
    {
      icon: Headphones,
      title: t.why_support_title,
      desc: t.why_support_desc,
    },
    {
      icon: Compass,
      title: t.why_reliable_title,
      desc: t.why_reliable_desc,
    },
    {
      icon: Globe2,
      title: t.why_destinations_title,
      desc: t.why_destinations_desc,
    },
    {
      icon: Lock,
      title: t.why_security_title,
      desc: t.why_security_desc,
    },
  ];

  return (
    <section className="py-20 bg-stone-900 text-stone-100 relative overflow-hidden">
      {/* Background Subtle Luxury Patterns */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 text-amber-400 text-xs font-bold uppercase tracking-widest mb-3 border border-amber-500/20">
            <Award className="w-3.5 h-3.5" />
            <span>Unmatched Travel Excellence</span>
          </div>

          <h2 className="font-serif-luxury text-3xl sm:text-4xl font-bold text-white tracking-tight">
            {t.why_title}
          </h2>

          <p className="mt-3 text-sm sm:text-base text-stone-300 leading-relaxed">
            {t.why_subtitle}
          </p>
        </div>

        {/* 8 Core Value Pillars Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-stone-950/70 border border-stone-800 hover:border-amber-500/40 hover:bg-stone-950 transition-all duration-300 group hover:-translate-y-1"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-amber-600/20 to-amber-400/10 border border-amber-500/30 text-amber-400 flex items-center justify-center mb-4 group-hover:bg-gold-gradient group-hover:text-stone-950 transition-all">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-base font-bold text-stone-100 group-hover:text-amber-300 transition-colors mb-2">
                  {pillar.title}
                </h3>
                <p className="text-xs sm:text-sm text-stone-400 leading-relaxed">
                  {pillar.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* Animated Statistics Section */}
        <div className="mt-16 pt-12 border-t border-stone-800/90 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 text-center">
          <div className="p-4 rounded-xl bg-stone-950/40 border border-stone-800/60">
            <div className="font-serif-luxury text-2xl sm:text-3xl font-bold text-gold-gradient">
              15,000+
            </div>
            <div className="text-xs text-stone-400 mt-1 font-medium">{t.stats_customers}</div>
          </div>

          <div className="p-4 rounded-xl bg-stone-950/40 border border-stone-800/60">
            <div className="font-serif-luxury text-2xl sm:text-3xl font-bold text-gold-gradient">
              28,000+
            </div>
            <div className="text-xs text-stone-400 mt-1 font-medium">{t.stats_flights}</div>
          </div>

          <div className="p-4 rounded-xl bg-stone-950/40 border border-stone-800/60">
            <div className="font-serif-luxury text-2xl sm:text-3xl font-bold text-gold-gradient">
              12,500+
            </div>
            <div className="text-xs text-stone-400 mt-1 font-medium">{t.stats_visas}</div>
          </div>

          <div className="p-4 rounded-xl bg-stone-950/40 border border-stone-800/60">
            <div className="font-serif-luxury text-2xl sm:text-3xl font-bold text-gold-gradient">
              45,000+
            </div>
            <div className="text-xs text-stone-400 mt-1 font-medium">{t.stats_hotels}</div>
          </div>

          <div className="p-4 rounded-xl bg-stone-950/40 border border-stone-800/60">
            <div className="font-serif-luxury text-2xl sm:text-3xl font-bold text-gold-gradient">
              14+
            </div>
            <div className="text-xs text-stone-400 mt-1 font-medium">{t.stats_experience}</div>
          </div>

          <div className="p-4 rounded-xl bg-stone-950/40 border border-stone-800/60">
            <div className="font-serif-luxury text-2xl sm:text-3xl font-bold text-gold-gradient">
              85+
            </div>
            <div className="text-xs text-stone-400 mt-1 font-medium">{t.stats_destinations}</div>
          </div>
        </div>
      </div>
    </section>
  );
};
