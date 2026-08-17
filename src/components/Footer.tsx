import React from 'react';
import {
  Compass,
  Phone,
  Mail,
  MapPin,
  Clock,
  ShieldCheck,
  Plane,
  HeartHandshake,
  CheckCircle2,
} from 'lucide-react';
import { Language } from '../types';
import { translations } from '../translations';
import { servicesData } from '../data/servicesData';

interface FooterProps {
  currentLang: Language;
  onLanguageChange: (lang: Language) => void;
  onRequestService: (serviceName?: string) => void;
  onTrackRequest: () => void;
  onSelectService: (serviceId: string) => void;
}

export const Footer: React.FC<FooterProps> = ({
  currentLang,
  onLanguageChange,
  onRequestService,
  onTrackRequest,
  onSelectService,
}) => {
  const t = translations[currentLang];

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-stone-950 text-stone-300 border-t border-amber-500/25 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-stone-800/80">
          {/* Col 1: Brand & Overview (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-amber-600 via-amber-400 to-amber-200 p-[1.5px] shadow-lg shadow-amber-500/10">
                <div className="w-full h-full bg-stone-950 rounded-[10px] flex items-center justify-center">
                  <Compass className="w-6 h-6 text-amber-400" />
                </div>
              </div>

              <div>
                <div className="font-serif-luxury text-lg font-bold tracking-wider text-stone-100 flex items-center gap-1.5">
                  <span>BALCAD</span>
                  <span className="text-amber-400 font-light">TRAVEL</span>
                </div>
                <p className="text-[10px] uppercase tracking-widest text-amber-300/80 font-medium">
                  Agency & Concierge
                </p>
              </div>
            </div>

            <p className="text-xs text-stone-400 leading-relaxed max-w-sm">
              Balcad Travel Agency is a premier full-service travel management agency providing
              international flight ticketing, embassy visa facilitation, VIP Hajj & Umrah
              packages, luxury hotel accommodations, and air cargo solutions.
            </p>

            <div className="pt-2 flex items-center gap-3">
              <span className="px-3 py-1 rounded-full text-[11px] font-semibold bg-stone-900 border border-amber-500/30 text-amber-400">
                IATA Certified Partner
              </span>
              <span className="px-3 py-1 rounded-full text-[11px] font-semibold bg-stone-900 border border-amber-500/30 text-amber-400">
                Nusuk Authorized
              </span>
            </div>
          </div>

          {/* Col 2: Quick Links (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="font-serif-luxury text-sm font-bold text-stone-100 uppercase tracking-wider text-amber-400">
              {t.footer_quick_links}
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button
                  onClick={() => scrollTo('hero')}
                  className="hover:text-amber-400 transition-colors"
                >
                  {t.nav_home}
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollTo('about')}
                  className="hover:text-amber-400 transition-colors"
                >
                  {t.nav_about}
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollTo('services')}
                  className="hover:text-amber-400 transition-colors"
                >
                  {t.nav_services}
                </button>
              </li>
              <li>
                <button
                  onClick={() => onTrackRequest()}
                  className="hover:text-amber-400 transition-colors font-semibold text-amber-300"
                >
                  {t.nav_track_request}
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollTo('faq')}
                  className="hover:text-amber-400 transition-colors"
                >
                  {t.nav_faq}
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollTo('contact')}
                  className="hover:text-amber-400 transition-colors"
                >
                  {t.nav_contact}
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Key Travel Services (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-serif-luxury text-sm font-bold text-stone-100 uppercase tracking-wider text-amber-400">
              {t.footer_services}
            </h4>
            <ul className="space-y-2 text-xs">
              {servicesData.slice(0, 6).map((srv) => (
                <li key={srv.id}>
                  <button
                    onClick={() => onSelectService(srv.id)}
                    className="hover:text-amber-400 transition-colors text-left rtl:text-right line-clamp-1"
                  >
                    {srv.name[currentLang]}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Contact & Office (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-serif-luxury text-sm font-bold text-stone-100 uppercase tracking-wider text-amber-400">
              {t.footer_contact_info}
            </h4>
            <div className="space-y-2.5 text-xs text-stone-400">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span>{t.contact_address_val}</span>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-amber-400 shrink-0" />
                <div className="space-x-2 dir-ltr">
                  <a href="tel:+252612483838" className="hover:text-amber-400 font-mono">
                    +252 61 2483838
                  </a>
                  <span>/</span>
                  <a href="tel:+252612141414" className="hover:text-amber-400 font-mono">
                    +252 61 2141414
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-amber-400 shrink-0" />
                <a href="mailto:balcadtravel@gmail.com" className="hover:text-amber-400">
                  balcadtravel@gmail.com
                </a>
              </div>

              <div className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span>{t.topbar_working_hours}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Disclaimer & Copyright */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-stone-500">
          <div>
            <p>{t.footer_rights}</p>
            <p className="text-[11px] text-stone-600 mt-1">
              Notice: Balcad Travel Agency does not collect online payments through this website. All bookings are reviewed & finalized with our certified agents directly.
            </p>
          </div>

          <div className="flex items-center gap-4 text-stone-400">
            <button onClick={() => onLanguageChange('en')} className="hover:text-amber-400">
              English
            </button>
            <span>•</span>
            <button onClick={() => onLanguageChange('so')} className="hover:text-amber-400">
              Soomaali
            </button>
            <span>•</span>
            <button onClick={() => onLanguageChange('ar')} className="hover:text-amber-400">
              العربية
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
