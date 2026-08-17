import React, { useState, useEffect } from 'react';
import { Language, ServiceItem } from './types';
import { servicesData } from './data/servicesData';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { ServicesSection } from './components/ServicesSection';
import { WhyChooseUs } from './components/WhyChooseUs';
import { AboutSection } from './components/AboutSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { GallerySection } from './components/GallerySection';
import { FaqSection } from './components/FaqSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { RequestServiceModal } from './components/RequestServiceModal';
import { RequestReceiptModal } from './components/RequestReceiptModal';
import { RequestTrackerModal } from './components/RequestTrackerModal';
import { ServiceDetailModal } from './components/ServiceDetailModal';
import { GlobalSearchModal } from './components/GlobalSearchModal';
import { LiveChatWidget } from './components/LiveChatWidget';

export function App() {
  // Multilingual State ('en' | 'so' | 'ar')
  const [currentLang, setCurrentLang] = useState<Language>('en');

  // Modal States
  const [isRequestModalOpen, setIsRequestModalOpen] = useState(false);
  const [preselectedService, setPreselectedService] = useState<string | undefined>(undefined);

  const [receiptData, setReceiptData] = useState<any | null>(null);
  const [isReceiptModalOpen, setIsReceiptModalOpen] = useState(false);

  const [isTrackerModalOpen, setIsTrackerModalOpen] = useState(false);
  const [trackerInitialId, setTrackerInitialId] = useState<string>('');

  const [selectedDetailService, setSelectedDetailService] = useState<ServiceItem | null>(null);
  const [isDetailModalOpen, setIsDetailModalOpen] = useState(false);

  const [isSearchModalOpen, setIsSearchModalOpen] = useState(false);

  // Update HTML Direction and Lang attribute dynamically
  useEffect(() => {
    document.documentElement.lang = currentLang;
    if (currentLang === 'ar') {
      document.documentElement.dir = 'rtl';
      document.body.classList.add('rtl-arabic');
    } else {
      document.documentElement.dir = 'ltr';
      document.body.classList.remove('rtl-arabic');
    }
  }, [currentLang]);

  // Keyboard shortcut (Cmd+K or Ctrl+K) to open Global Search
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setIsSearchModalOpen((prev) => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Handlers
  const handleOpenRequestModal = (serviceName?: string) => {
    setPreselectedService(serviceName);
    setIsRequestModalOpen(true);
  };

  const handleRequestSuccess = (data: any) => {
    setIsRequestModalOpen(false);
    setReceiptData(data);
    setIsReceiptModalOpen(true);
  };

  const handleOpenTracker = (reqId?: string) => {
    setIsReceiptModalOpen(false);
    setTrackerInitialId(reqId || '');
    setIsTrackerModalOpen(true);
  };

  const handleSelectServiceForDetail = (serviceItemOrId: ServiceItem | string) => {
    if (typeof serviceItemOrId === 'string') {
      const found = servicesData.find((s) => s.id === serviceItemOrId);
      if (found) {
        setSelectedDetailService(found);
        setIsDetailModalOpen(true);
      }
    } else {
      setSelectedDetailService(serviceItemOrId);
      setIsDetailModalOpen(true);
    }
  };

  const scrollToContact = () => {
    const el = document.getElementById('contact');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const handleSelectCategory = (category: string) => {
    const el = document.getElementById('services');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-stone-950 text-stone-100 flex flex-col selection:bg-amber-500 selection:text-stone-950">
      {/* Navigation Header */}
      <Navbar
        currentLang={currentLang}
        onLanguageChange={setCurrentLang}
        onRequestServiceClick={handleOpenRequestModal}
        onTrackRequestClick={() => handleOpenTracker()}
        onSearchClick={() => setIsSearchModalOpen(true)}
        onServiceSelect={handleSelectServiceForDetail}
      />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* 1. Hero Section */}
        <HeroSection
          currentLang={currentLang}
          onRequestServiceClick={handleOpenRequestModal}
          onContactClick={scrollToContact}
          onTrackClick={() => handleOpenTracker()}
          onSelectCategory={handleSelectCategory}
        />

        {/* 2. All Services Directory */}
        <ServicesSection
          currentLang={currentLang}
          onRequestService={handleOpenRequestModal}
          onLearnMore={handleSelectServiceForDetail}
        />

        {/* 3. Why Choose Us (8 Pillars & Stats) */}
        <WhyChooseUs currentLang={currentLang} />

        {/* 4. About Us, Mission, Vision & Values */}
        <AboutSection currentLang={currentLang} />

        {/* 5. Customer Testimonials */}
        <TestimonialsSection currentLang={currentLang} />

        {/* 6. Travel Gallery */}
        <GallerySection currentLang={currentLang} />

        {/* 7. Comprehensive FAQ */}
        <FaqSection
          currentLang={currentLang}
          onRequestService={() => handleOpenRequestModal()}
        />

        {/* 8. Contact & Inquiry Section */}
        <ContactSection currentLang={currentLang} />
      </main>

      {/* Footer */}
      <Footer
        currentLang={currentLang}
        onLanguageChange={setCurrentLang}
        onRequestService={handleOpenRequestModal}
        onTrackRequest={() => handleOpenTracker()}
        onSelectService={handleSelectServiceForDetail}
      />

      {/* Floating Concierge Live Chat Widget */}
      <LiveChatWidget
        currentLang={currentLang}
        onRequestService={handleOpenRequestModal}
        onTrackRequest={() => handleOpenTracker()}
      />

      {/* MODALS */}
      {/* 1. Request Service Modal (4 Steps, Validation, 20MB file upload, Zero Payment Notice) */}
      <RequestServiceModal
        isOpen={isRequestModalOpen}
        onClose={() => setIsRequestModalOpen(false)}
        currentLang={currentLang}
        preselectedService={preselectedService}
        onSuccess={handleRequestSuccess}
      />

      {/* 2. Request Receipt Confirmation Modal */}
      <RequestReceiptModal
        isOpen={isReceiptModalOpen}
        onClose={() => setIsReceiptModalOpen(false)}
        receiptData={receiptData}
        currentLang={currentLang}
        onTrackNow={(id) => handleOpenTracker(id)}
        onNewRequest={() => {
          setIsReceiptModalOpen(false);
          handleOpenRequestModal();
        }}
      />

      {/* 3. Live Request Tracker & Officer Chat Modal */}
      <RequestTrackerModal
        isOpen={isTrackerModalOpen}
        onClose={() => setIsTrackerModalOpen(false)}
        currentLang={currentLang}
        initialRequestId={trackerInitialId}
      />

      {/* 4. Service Detail / Requirements Drawer Modal */}
      <ServiceDetailModal
        service={selectedDetailService}
        isOpen={isDetailModalOpen}
        onClose={() => setIsDetailModalOpen(false)}
        currentLang={currentLang}
        onRequestService={handleOpenRequestModal}
      />

      {/* 5. Global Search Modal (Cmd+K) */}
      <GlobalSearchModal
        isOpen={isSearchModalOpen}
        onClose={() => setIsSearchModalOpen(false)}
        currentLang={currentLang}
        onSelectService={handleSelectServiceForDetail}
        onRequestService={handleOpenRequestModal}
      />
    </div>
  );
}

export default App;
