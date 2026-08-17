import React, { useState } from 'react';
import {
  X,
  Sparkles,
  MapPin,
  Maximize2,
} from 'lucide-react';
import { Language, GalleryItem } from '../types';
import { translations } from '../translations';
import { galleryData } from '../data/galleryData';

interface GallerySectionProps {
  currentLang: Language;
}

export const GallerySection: React.FC<GallerySectionProps> = ({ currentLang }) => {
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'destinations' | 'hajj_umrah' | 'flights' | 'hotels'>('all');
  const [lightboxImage, setLightboxImage] = useState<GalleryItem | null>(null);

  const t = translations[currentLang];

  const filtered = galleryData.filter((item) => {
    if (selectedCategory === 'all') return true;
    return item.category === selectedCategory;
  });

  return (
    <section className="py-20 bg-stone-100 text-stone-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 text-amber-700 text-xs font-bold uppercase tracking-widest mb-3 border border-amber-500/20">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Visual Inspirations</span>
          </div>

          <h2 className="font-serif-luxury text-3xl sm:text-4xl font-bold text-stone-900 tracking-tight">
            {t.gallery_title}
          </h2>

          <p className="mt-3 text-sm sm:text-base text-stone-600 leading-relaxed">
            {t.gallery_subtitle}
          </p>

          {/* Filtering Category Pills */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-2">
            <button
              onClick={() => setSelectedCategory('all')}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                selectedCategory === 'all'
                  ? 'bg-stone-900 text-amber-400 shadow-md'
                  : 'bg-white text-stone-600 hover:bg-stone-200 border border-stone-200'
              }`}
            >
              All Photos
            </button>
            <button
              onClick={() => setSelectedCategory('destinations')}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                selectedCategory === 'destinations'
                  ? 'bg-stone-900 text-amber-400 shadow-md'
                  : 'bg-white text-stone-600 hover:bg-stone-200 border border-stone-200'
              }`}
            >
              Destinations
            </button>
            <button
              onClick={() => setSelectedCategory('hajj_umrah')}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                selectedCategory === 'hajj_umrah'
                  ? 'bg-stone-900 text-amber-400 shadow-md'
                  : 'bg-white text-stone-600 hover:bg-stone-200 border border-stone-200'
              }`}
            >
              Hajj & Umrah
            </button>
            <button
              onClick={() => setSelectedCategory('flights')}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                selectedCategory === 'flights'
                  ? 'bg-stone-900 text-amber-400 shadow-md'
                  : 'bg-white text-stone-600 hover:bg-stone-200 border border-stone-200'
              }`}
            >
              Aviation & Fleet
            </button>
            <button
              onClick={() => setSelectedCategory('hotels')}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                selectedCategory === 'hotels'
                  ? 'bg-stone-900 text-amber-400 shadow-md'
                  : 'bg-white text-stone-600 hover:bg-stone-200 border border-stone-200'
              }`}
            >
              Luxury Stays
            </button>
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((item) => (
            <div
              key={item.id}
              onClick={() => setLightboxImage(item)}
              className="group relative h-64 sm:h-72 rounded-2xl overflow-hidden cursor-pointer shadow-sm hover:shadow-xl transition-all duration-300 bg-stone-900"
            >
              <img
                src={item.image}
                alt={item.title[currentLang]}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                loading="lazy"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-950/85 via-stone-950/20 to-transparent opacity-80 group-hover:opacity-95 transition-opacity" />

              {/* Top Action Icon */}
              <div className="absolute top-3 right-3 p-2 rounded-xl bg-stone-950/70 text-amber-400 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity">
                <Maximize2 className="w-4 h-4" />
              </div>

              {/* Bottom Info */}
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <div className="flex items-center gap-1.5 text-[11px] text-amber-400 font-semibold mb-1">
                  <MapPin className="w-3.5 h-3.5" />
                  <span>{item.location}</span>
                </div>
                <h3 className="font-serif-luxury text-base font-bold text-stone-100">
                  {item.title[currentLang]}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {lightboxImage && (
        <div
          onClick={() => setLightboxImage(null)}
          className="fixed inset-0 z-50 bg-stone-950/90 backdrop-blur-md flex items-center justify-center p-4 animate-in fade-in"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-4xl w-full rounded-3xl overflow-hidden bg-stone-950 border border-amber-500/40 shadow-2xl"
          >
            <button
              onClick={() => setLightboxImage(null)}
              className="absolute top-4 right-4 p-2 rounded-full bg-stone-900/80 hover:bg-stone-800 text-stone-300 hover:text-white transition-colors z-10"
            >
              <X className="w-6 h-6" />
            </button>

            <img
              src={lightboxImage.image}
              alt={lightboxImage.title[currentLang]}
              className="w-full max-h-[70vh] object-cover"
              referrerPolicy="no-referrer"
            />

            <div className="p-6 bg-stone-950 text-white flex items-center justify-between">
              <div>
                <div className="flex items-center gap-1.5 text-xs text-amber-400 font-semibold mb-1">
                  <MapPin className="w-4 h-4" />
                  <span>{lightboxImage.location}</span>
                </div>
                <h3 className="font-serif-luxury text-xl font-bold text-stone-100">
                  {lightboxImage.title[currentLang]}
                </h3>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
