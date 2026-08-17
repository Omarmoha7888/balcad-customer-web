import React, { useState } from 'react';
import {
  Plane,
  FileCheck,
  Building2,
  Moon,
  Phone,
  Mail,
  Search,
  Globe,
  Menu,
  X,
  Compass,
  CheckCircle2,
  Clock,
  ShieldCheck,
  ChevronDown,
} from 'lucide-react';
import { Language } from '../types';
import { translations } from '../translations';
import { servicesData } from '../data/servicesData';

interface NavbarProps {
  currentLang: Language;
  onLanguageChange: (lang: Language) => void;
  onRequestServiceClick: (preselectedService?: string) => void;
  onTrackRequestClick: () => void;
  onSearchClick: () => void;
  onServiceSelect: (serviceId: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentLang,
  onLanguageChange,
  onRequestServiceClick,
  onTrackRequestClick,
  onSearchClick,
  onServiceSelect,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [langDropdownOpen, setLangDropdownOpen] = useState(false);

  const t = translations[currentLang];
  const isRtl = currentLang === 'ar';

  const scrollToSection = (sectionId: string) => {
    setMobileMenuOpen(false);
    setServicesDropdownOpen(false);
    const elem = document.getElementById(sectionId);
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleServiceClickFromMenu = (serviceId: string) => {
    setMobileMenuOpen(false);
    setServicesDropdownOpen(false);
    onServiceSelect(serviceId);
  };

  return (
    <header className="sticky top-0 z-40 w-full shadow-sm">
      {/* Top Luxury Announcement & Contact Bar */}
      <div className="bg-stone-950 text-stone-300 text-xs border-b border-amber-500/20 py-2 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
          {/* Contact Numbers & Working Hours */}
          <div className="flex flex-wrap items-center gap-4 sm:gap-6 justify-center sm:justify-start">
            <div className="flex items-center gap-1.5 text-amber-400 font-medium">
              <Phone className="w-3.5 h-3.5" />
              <span>{t.topbar_call_us}</span>
              <a href="tel:+252612483838" className="hover:underline text-stone-100 font-semibold dir-ltr">
                +252 61 2483838
              </a>
              <span className="text-stone-500">/</span>
              <a href="tel:+252612141414" className="hover:underline text-stone-100 font-semibold dir-ltr">
                +252 61 2141414
              </a>
            </div>

            <div className="hidden md:flex items-center gap-1.5 text-stone-400">
              <Mail className="w-3.5 h-3.5 text-amber-400" />
              <a href="mailto:balcadtravel@gmail.com" className="hover:underline text-stone-300">
                balcadtravel@gmail.com
              </a>
            </div>
          </div>

          {/* Working Hours & Language Selector */}
          <div className="flex items-center gap-4 text-stone-400 text-xs">
            <div className="hidden lg:flex items-center gap-1 text-stone-400">
              <Clock className="w-3.5 h-3.5 text-amber-400" />
              <span>{t.topbar_working_hours}</span>
            </div>

            {/* Quick Language Switcher Buttons */}
            <div className="relative">
              <button
                onClick={() => setLangDropdownOpen(!langDropdownOpen)}
                className="flex items-center gap-1.5 px-2.5 py-1 rounded bg-stone-900 hover:bg-stone-800 text-amber-400 border border-amber-500/30 transition-colors"
                aria-label="Change language"
              >
                <Globe className="w-3.5 h-3.5" />
                <span className="font-semibold uppercase">{currentLang}</span>
                <ChevronDown className="w-3 h-3" />
              </button>

              {langDropdownOpen && (
                <div
                  className={`absolute mt-1.5 w-32 rounded-lg bg-stone-900 text-stone-200 border border-amber-500/30 shadow-xl py-1 z-50 ${
                    isRtl ? 'left-0' : 'right-0'
                  }`}
                >
                  <button
                    onClick={() => {
                      onLanguageChange('en');
                      setLangDropdownOpen(false);
                    }}
                    className={`w-full text-left px-3 py-1.5 text-xs hover:bg-amber-500/20 hover:text-amber-300 flex items-center justify-between ${
                      currentLang === 'en' ? 'text-amber-400 font-bold bg-stone-800' : ''
                    }`}
                  >
                    <span>English</span>
                    {currentLang === 'en' && <CheckCircle2 className="w-3 h-3" />}
                  </button>
                  <button
                    onClick={() => {
                      onLanguageChange('so');
                      setLangDropdownOpen(false);
                    }}
                    className={`w-full text-left px-3 py-1.5 text-xs hover:bg-amber-500/20 hover:text-amber-300 flex items-center justify-between ${
                      currentLang === 'so' ? 'text-amber-400 font-bold bg-stone-800' : ''
                    }`}
                  >
                    <span>Soomaali</span>
                    {currentLang === 'so' && <CheckCircle2 className="w-3 h-3" />}
                  </button>
                  <button
                    onClick={() => {
                      onLanguageChange('ar');
                      setLangDropdownOpen(false);
                    }}
                    className={`w-full text-right px-3 py-1.5 text-xs hover:bg-amber-500/20 hover:text-amber-300 flex items-center justify-between ${
                      currentLang === 'ar' ? 'text-amber-400 font-bold bg-stone-800' : ''
                    }`}
                  >
                    <span>العربية (RTL)</span>
                    {currentLang === 'ar' && <CheckCircle2 className="w-3 h-3" />}
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Main Sticky Navigation Bar */}
      <nav className="bg-stone-950/95 backdrop-blur-md border-b border-amber-500/25 px-4 sm:px-8 py-3.5 transition-all">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
          {/* Official Brand Logo & Name */}
          <div
            onClick={() => scrollToSection('hero')}
            className="flex items-center gap-3 cursor-pointer group select-none"
          >
            {/* Custom Luxury Gold Brand Crest */}
            <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-gradient-to-tr from-amber-600 via-amber-400 to-amber-200 p-[1.5px] shadow-lg shadow-amber-500/10 group-hover:scale-105 transition-transform">
              <div className="w-full h-full bg-stone-950 rounded-[10px] flex items-center justify-center relative overflow-hidden">
                <Compass className="w-6 h-6 text-amber-400 animate-[spin_12s_linear_infinite]" />
                <div className="absolute inset-0 bg-amber-400/10 pointer-events-none" />
              </div>
            </div>

            <div>
              <div className="font-serif-luxury text-lg sm:text-xl font-bold tracking-wider text-stone-100 flex items-center gap-1.5">
                <span>BALCAD</span>
                <span className="text-amber-400 font-light">TRAVEL</span>
              </div>
              <p className="text-[10px] uppercase tracking-widest text-amber-300/80 font-medium">
                Agency & Concierge
              </p>
            </div>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden xl:flex items-center gap-6 text-sm font-medium text-stone-200">
            <button
              onClick={() => scrollToSection('hero')}
              className="hover:text-amber-400 transition-colors py-1"
            >
              {t.nav_home}
            </button>

            <button
              onClick={() => scrollToSection('about')}
              className="hover:text-amber-400 transition-colors py-1"
            >
              {t.nav_about}
            </button>

            {/* Services Dropdown */}
            <div className="relative group">
              <button
                onMouseEnter={() => setServicesDropdownOpen(true)}
                onClick={() => scrollToSection('services')}
                className="flex items-center gap-1 hover:text-amber-400 transition-colors py-1"
              >
                <span>{t.nav_services}</span>
                <ChevronDown className="w-4 h-4 text-amber-400 transition-transform group-hover:rotate-180" />
              </button>

              {servicesDropdownOpen && (
                <div
                  onMouseLeave={() => setServicesDropdownOpen(false)}
                  className={`absolute top-full mt-2 w-[480px] bg-stone-900/95 backdrop-blur-md rounded-xl border border-amber-500/30 shadow-2xl p-4 grid grid-cols-2 gap-2 z-50 animate-in fade-in-50 duration-150 ${
                    isRtl ? 'right-0' : 'left-0'
                  }`}
                >
                  <div className="col-span-2 pb-2 mb-1 border-b border-stone-800 flex items-center justify-between text-xs text-amber-400 font-semibold">
                    <span>{t.services_title}</span>
                    <button
                      onClick={() => scrollToSection('services')}
                      className="text-stone-400 hover:text-amber-300 underline"
                    >
                      {t.services_view_all}
                    </button>
                  </div>

                  {servicesData.slice(0, 8).map((srv) => (
                    <button
                      key={srv.id}
                      onClick={() => handleServiceClickFromMenu(srv.id)}
                      className="text-left rtl:text-right p-2 rounded-lg hover:bg-stone-800/80 transition-colors flex items-start gap-2.5 group/item"
                    >
                      <div className="p-1.5 rounded-md bg-amber-500/10 text-amber-400 group-hover/item:bg-amber-500 group-hover/item:text-stone-950 transition-colors shrink-0">
                        <Plane className="w-3.5 h-3.5" />
                      </div>
                      <div>
                        <div className="text-xs font-semibold text-stone-200 group-hover/item:text-amber-300">
                          {srv.name[currentLang]}
                        </div>
                        <div className="text-[11px] text-stone-400 line-clamp-1">
                          {srv.shortDescription[currentLang]}
                        </div>
                      </div>
                    </button>
                  ))}
                </div>
              )}
            </div>

            <button
              onClick={() => {
                scrollToSection('services');
              }}
              className="hover:text-amber-400 transition-colors py-1"
            >
              {t.nav_visa}
            </button>

            <button
              onClick={() => {
                const umrah = servicesData.find((s) => s.category === 'pilgrimage');
                if (umrah) onServiceSelect(umrah.id);
                else scrollToSection('services');
              }}
              className="hover:text-amber-400 transition-colors py-1"
            >
              {t.nav_hajj_umrah}
            </button>

            <button
              onClick={() => scrollToSection('faq')}
              className="hover:text-amber-400 transition-colors py-1"
            >
              {t.nav_faq}
            </button>

            <button
              onClick={() => scrollToSection('contact')}
              className="hover:text-amber-400 transition-colors py-1"
            >
              {t.nav_contact}
            </button>
          </div>

          {/* Quick Search & Actions */}
          <div className="flex items-center gap-2.5 sm:gap-3.5">
            {/* Global Search Button */}
            <button
              onClick={onSearchClick}
              className="p-2 sm:px-3 sm:py-1.5 rounded-lg bg-stone-900 hover:bg-stone-800 text-stone-300 hover:text-amber-400 border border-stone-800 transition-colors flex items-center gap-2 text-xs"
              title="Search Portal (Cmd+K)"
            >
              <Search className="w-4 h-4 text-amber-400" />
              <span className="hidden md:inline">{t.nav_search_placeholder.substring(0, 15)}...</span>
              <kbd className="hidden lg:inline text-[10px] bg-stone-950 px-1.5 py-0.5 rounded border border-stone-700 text-stone-400">
                ⌘K
              </kbd>
            </button>

            {/* Track My Request Button */}
            <button
              onClick={onTrackRequestClick}
              className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-stone-900/90 hover:bg-stone-800 text-amber-300 hover:text-amber-200 border border-amber-500/30 text-xs font-semibold transition-all hover:border-amber-400"
            >
              <ShieldCheck className="w-3.5 h-3.5 text-amber-400" />
              <span>{t.nav_track_request}</span>
            </button>

            {/* Primary Gold Action: Request Service CTA */}
            <button
              onClick={() => onRequestServiceClick()}
              className="px-4 py-2 sm:px-5 sm:py-2.5 rounded-xl bg-gold-gradient text-stone-950 font-bold text-xs sm:text-sm shadow-lg shadow-amber-500/20 hover:brightness-110 active:scale-95 transition-all flex items-center gap-2 tracking-wide cursor-pointer"
            >
              <Plane className="w-4 h-4 text-stone-950" />
              <span>{t.nav_request_service}</span>
            </button>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="xl:hidden p-2 rounded-lg bg-stone-900 text-amber-400 border border-stone-800"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="xl:hidden mt-3 pt-4 border-t border-stone-800 space-y-3 pb-3 animate-in slide-in-from-top duration-200">
            <div className="grid grid-cols-2 gap-2 text-xs font-medium text-stone-200">
              <button
                onClick={() => scrollToSection('hero')}
                className="text-left rtl:text-right p-2.5 rounded-lg bg-stone-900 hover:bg-stone-800 text-stone-100"
              >
                {t.nav_home}
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className="text-left rtl:text-right p-2.5 rounded-lg bg-stone-900 hover:bg-stone-800 text-stone-100"
              >
                {t.nav_about}
              </button>
              <button
                onClick={() => scrollToSection('services')}
                className="text-left rtl:text-right p-2.5 rounded-lg bg-stone-900 hover:bg-stone-800 text-amber-400"
              >
                {t.nav_services}
              </button>
              <button
                onClick={() => scrollToSection('faq')}
                className="text-left rtl:text-right p-2.5 rounded-lg bg-stone-900 hover:bg-stone-800 text-stone-100"
              >
                {t.nav_faq}
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="text-left rtl:text-right p-2.5 rounded-lg bg-stone-900 hover:bg-stone-800 text-stone-100"
              >
                {t.nav_contact}
              </button>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onTrackRequestClick();
                }}
                className="text-left rtl:text-right p-2.5 rounded-lg bg-amber-500/10 border border-amber-500/30 text-amber-400 font-semibold"
              >
                {t.nav_track_request}
              </button>
            </div>

            {/* Language Switcher in Mobile Drawer */}
            <div className="pt-2 border-t border-stone-800 flex items-center justify-between">
              <span className="text-xs text-stone-400">Language:</span>
              <div className="flex gap-1.5">
                <button
                  onClick={() => onLanguageChange('en')}
                  className={`px-2.5 py-1 text-xs rounded ${
                    currentLang === 'en' ? 'bg-amber-500 text-stone-950 font-bold' : 'bg-stone-900 text-stone-300'
                  }`}
                >
                  EN
                </button>
                <button
                  onClick={() => onLanguageChange('so')}
                  className={`px-2.5 py-1 text-xs rounded ${
                    currentLang === 'so' ? 'bg-amber-500 text-stone-950 font-bold' : 'bg-stone-900 text-stone-300'
                  }`}
                >
                  SO
                </button>
                <button
                  onClick={() => onLanguageChange('ar')}
                  className={`px-2.5 py-1 text-xs rounded ${
                    currentLang === 'ar' ? 'bg-amber-500 text-stone-950 font-bold' : 'bg-stone-900 text-stone-300'
                  }`}
                >
                  العربية
                </button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};
