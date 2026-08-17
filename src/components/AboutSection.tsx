import React from 'react';
import {
  Compass,
  Target,
  Eye,
  ShieldCheck,
  Award,
  HeartHandshake,
  Lightbulb,
  Scale,
  Sparkles,
  CheckCircle2,
} from 'lucide-react';
import { Language } from '../types';
import { translations } from '../translations';

interface AboutSectionProps {
  currentLang: Language;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ currentLang }) => {
  const t = translations[currentLang];

  const coreValues = [
    {
      icon: ShieldCheck,
      name: t.about_val_integrity,
      desc: 'Upholding uncompromising honesty, transparency, and ethical diligence in every booking.',
    },
    {
      icon: HeartHandshake,
      name: t.about_val_trust,
      desc: 'Building lifelong relationships based on dependability, security, and personal care.',
    },
    {
      icon: Award,
      name: t.about_val_professionalism,
      desc: 'Certified IATA travel consultants dedicated to the highest standards of international aviation.',
    },
    {
      icon: Target,
      name: t.about_val_satisfaction,
      desc: 'Tailoring customized flight schedules, VIP hotels, and seamless visa processing for every client.',
    },
    {
      icon: Lightbulb,
      name: t.about_val_innovation,
      desc: 'Modern digital tracking portals, live CRM updates, and streamlined document submission.',
    },
    {
      icon: Scale,
      name: t.about_val_transparency,
      desc: 'Clear communication, direct verification by certified specialists, and zero hidden surprises.',
    },
  ];

  return (
    <section id="about" className="py-20 bg-white text-stone-900 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 text-amber-700 text-xs font-bold uppercase tracking-widest mb-3 border border-amber-500/20">
            <Compass className="w-3.5 h-3.5" />
            <span>Discover Our Legacy</span>
          </div>

          <h2 className="font-serif-luxury text-3xl sm:text-4xl font-bold text-stone-900 tracking-tight">
            {t.about_title}
          </h2>

          <p className="mt-4 text-base sm:text-lg text-stone-600 leading-relaxed font-normal">
            {t.about_description}
          </p>
        </div>

        {/* Mission & Vision Bento Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {/* Mission Card */}
          <div className="p-8 rounded-3xl bg-gradient-to-br from-stone-950 to-stone-900 text-white border border-amber-500/30 shadow-xl relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-48 h-48 bg-amber-500/10 rounded-full blur-3xl group-hover:scale-125 transition-transform" />

            <div className="w-12 h-12 rounded-2xl bg-gold-gradient text-stone-950 flex items-center justify-center mb-6 shadow-md">
              <Target className="w-6 h-6" />
            </div>

            <h3 className="font-serif-luxury text-xl sm:text-2xl font-bold text-stone-100 mb-3">
              {t.about_mission_title}
            </h3>

            <p className="text-sm sm:text-base text-stone-300 leading-relaxed font-normal">
              {t.about_mission_desc}
            </p>
          </div>

          {/* Vision Card */}
          <div className="p-8 rounded-3xl bg-stone-50 border border-stone-200 shadow-sm relative overflow-hidden group hover:border-amber-500/40 transition-colors">
            <div className="w-12 h-12 rounded-2xl bg-amber-500/10 text-amber-700 border border-amber-500/20 flex items-center justify-center mb-6">
              <Eye className="w-6 h-6" />
            </div>

            <h3 className="font-serif-luxury text-xl sm:text-2xl font-bold text-stone-900 mb-3">
              {t.about_vision_title}
            </h3>

            <p className="text-sm sm:text-base text-stone-600 leading-relaxed font-normal">
              {t.about_vision_desc}
            </p>
          </div>
        </div>

        {/* Core Values Grid */}
        <div className="pt-6">
          <div className="text-center mb-10">
            <h3 className="font-serif-luxury text-2xl font-bold text-stone-900">
              {t.about_values_title}
            </h3>
            <p className="text-xs sm:text-sm text-stone-500 mt-1">
              Guiding principles that define every interaction at Balcad Travel Agency
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {coreValues.map((val, idx) => {
              const Icon = val.icon;
              return (
                <div
                  key={idx}
                  className="p-6 rounded-2xl bg-white border border-stone-200/80 hover:border-amber-400/60 shadow-sm hover:shadow-md transition-all group"
                >
                  <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-600 flex items-center justify-center mb-4 group-hover:bg-amber-500 group-hover:text-stone-950 transition-colors">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h4 className="text-base font-bold text-stone-900 mb-1 group-hover:text-amber-700 transition-colors">
                    {val.name}
                  </h4>
                  <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">{val.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
