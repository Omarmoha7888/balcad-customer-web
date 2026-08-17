import React, { useState } from 'react';
import {
  Star,
  Quote,
  Sparkles,
  ChevronLeft,
  ChevronRight,
  ShieldCheck,
} from 'lucide-react';
import { Language } from '../types';
import { translations } from '../translations';
import { testimonialsData } from '../data/testimonialsData';

interface TestimonialsSectionProps {
  currentLang: Language;
}

export const TestimonialsSection: React.FC<TestimonialsSectionProps> = ({ currentLang }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const t = translations[currentLang];
  const isRtl = currentLang === 'ar';

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonialsData.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev - 1 + testimonialsData.length) % testimonialsData.length);
  };

  return (
    <section className="py-20 bg-stone-950 text-white relative overflow-hidden">
      {/* Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-amber-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 text-amber-300 text-xs font-bold uppercase tracking-widest mb-3 border border-amber-500/20">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>Customer Experiences</span>
          </div>

          <h2 className="font-serif-luxury text-3xl sm:text-4xl font-bold text-stone-100 tracking-tight">
            {t.testimonials_title}
          </h2>

          <p className="mt-3 text-sm sm:text-base text-stone-400 leading-relaxed">
            {t.testimonials_subtitle}
          </p>
        </div>

        {/* Carousel / Grid View */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonialsData.slice(0, 6).map((item) => (
            <div
              key={item.id}
              className="p-6 rounded-2xl bg-stone-900/80 border border-stone-800 hover:border-amber-500/40 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Top Rating & Quote */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1 text-amber-400">
                    {Array.from({ length: item.rating }).map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400" />
                    ))}
                  </div>
                  <Quote className="w-6 h-6 text-amber-500/30 group-hover:text-amber-500/60 transition-colors" />
                </div>

                {/* Testimonial Quote */}
                <p className="text-xs sm:text-sm text-stone-300 leading-relaxed italic mb-6">
                  "{item.review[currentLang]}"
                </p>
              </div>

              {/* Author Details */}
              <div className="flex items-center gap-3 pt-4 border-t border-stone-800">
                <img
                  src={item.avatar}
                  alt={item.customerName}
                  className="w-11 h-11 rounded-full object-cover border-2 border-amber-500/30"
                  referrerPolicy="no-referrer"
                />
                <div className="overflow-hidden">
                  <div className="text-xs sm:text-sm font-bold text-stone-100 truncate">
                    {item.customerName}
                  </div>
                  <div className="text-[11px] text-amber-400/90 truncate flex items-center gap-1">
                    <span>{item.serviceUsed[currentLang]}</span>
                    <span>•</span>
                    <span>{item.country}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
