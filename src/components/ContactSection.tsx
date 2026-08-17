import React, { useState } from 'react';
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  MessageSquare,
  CheckCircle2,
  AlertCircle,
  Sparkles,
  PhoneCall,
} from 'lucide-react';
import { Language } from '../types';
import { translations } from '../translations';

interface ContactSectionProps {
  currentLang: Language;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ currentLang }) => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMsg, setSuccessMsg] = useState<string | null>(null);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const t = translations[currentLang];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName.trim() || !email.trim() || !message.trim()) {
      setErrorMsg('Please fill in your name, email, and message.');
      return;
    }

    setIsSubmitting(true);
    setErrorMsg(null);
    setSuccessMsg(null);

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          fullName,
          email,
          phoneNumber,
          subject,
          message,
        }),
      });

      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.error || 'Failed to submit message.');
      }

      setSuccessMsg(data.message || t.contact_success);
      setFullName('');
      setEmail('');
      setPhoneNumber('');
      setSubject('');
      setMessage('');
    } catch (err: any) {
      setErrorMsg(err.message || 'Failed to send message.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-stone-900 text-stone-100 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 text-amber-400 text-xs font-bold uppercase tracking-widest mb-3 border border-amber-500/20">
            <PhoneCall className="w-3.5 h-3.5" />
            <span>Connect with Us</span>
          </div>

          <h2 className="font-serif-luxury text-3xl sm:text-4xl font-bold text-white tracking-tight">
            {t.contact_title}
          </h2>

          <p className="mt-3 text-sm sm:text-base text-stone-300 leading-relaxed">
            {t.contact_subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left: Contact Info & Credentials */}
          <div className="lg:col-span-5 space-y-4">
            {/* Phone numbers Card */}
            <div className="p-6 rounded-2xl bg-stone-950/80 border border-stone-800 hover:border-amber-500/40 transition-colors flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-amber-500/10 text-amber-400 flex items-center justify-center shrink-0 border border-amber-500/20">
                <Phone className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-serif-luxury text-sm font-bold text-stone-200 mb-1">
                  {t.contact_phone_title}
                </h3>
                <div className="space-y-1 text-xs sm:text-sm">
                  <a
                    href="tel:+252612483838"
                    className="block text-amber-400 hover:underline font-mono font-semibold dir-ltr"
                  >
                    +252 61 2483838
                  </a>
                  <a
                    href="tel:+252612141414"
                    className="block text-amber-400 hover:underline font-mono font-semibold dir-ltr"
                  >
                    +252 61 2141414
                  </a>
                </div>
              </div>
            </div>

            {/* Email Card */}
            <div className="p-6 rounded-2xl bg-stone-950/80 border border-stone-800 hover:border-amber-500/40 transition-colors flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-amber-500/10 text-amber-400 flex items-center justify-center shrink-0 border border-amber-500/20">
                <Mail className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-serif-luxury text-sm font-bold text-stone-200 mb-1">
                  {t.contact_email_title}
                </h3>
                <a
                  href="mailto:balcadtravel@gmail.com"
                  className="text-xs sm:text-sm text-stone-300 hover:text-amber-400 hover:underline"
                >
                  balcadtravel@gmail.com
                </a>
              </div>
            </div>

            {/* Address Card */}
            <div className="p-6 rounded-2xl bg-stone-950/80 border border-stone-800 hover:border-amber-500/40 transition-colors flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-amber-500/10 text-amber-400 flex items-center justify-center shrink-0 border border-amber-500/20">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-serif-luxury text-sm font-bold text-stone-200 mb-1">
                  {t.contact_address_title}
                </h3>
                <p className="text-xs sm:text-sm text-stone-400 leading-relaxed">
                  {t.contact_address_val}
                </p>
              </div>
            </div>

            {/* Working Hours Card */}
            <div className="p-6 rounded-2xl bg-stone-950/80 border border-stone-800 hover:border-amber-500/40 transition-colors flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-amber-500/10 text-amber-400 flex items-center justify-center shrink-0 border border-amber-500/20">
                <Clock className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-serif-luxury text-sm font-bold text-stone-200 mb-1">
                  {t.contact_hours_title}
                </h3>
                <p className="text-xs text-stone-400 leading-relaxed">
                  {t.topbar_working_hours}
                </p>
              </div>
            </div>

            {/* Direct WhatsApp CTA Button */}
            <a
              href="https://wa.me/252612483838"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 rounded-2xl bg-emerald-600/20 border border-emerald-500/40 hover:bg-emerald-600/30 text-emerald-400 font-bold text-xs sm:text-sm flex items-center justify-center gap-2 transition-colors cursor-pointer"
            >
              <MessageSquare className="w-4 h-4" />
              <span>{t.contact_btn_whatsapp}</span>
            </a>
          </div>

          {/* Right: Contact Form */}
          <div className="lg:col-span-7 p-6 sm:p-8 rounded-3xl bg-stone-950 border border-stone-800 shadow-xl">
            <h3 className="font-serif-luxury text-xl font-bold text-stone-100 mb-2">
              Send an Inquiry
            </h3>
            <p className="text-xs text-stone-400 mb-6">
              Fill in your inquiry details below and our travel consultants will respond immediately.
            </p>

            {successMsg && (
              <div className="p-4 rounded-xl bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 text-xs flex items-center gap-2 mb-4">
                <CheckCircle2 className="w-4 h-4 shrink-0" />
                <span>{successMsg}</span>
              </div>
            )}

            {errorMsg && (
              <div className="p-4 rounded-xl bg-rose-500/15 border border-rose-500/30 text-rose-400 text-xs flex items-center gap-2 mb-4">
                <AlertCircle className="w-4 h-4 shrink-0" />
                <span>{errorMsg}</span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-stone-300 mb-1">
                    {t.contact_form_name} <span className="text-amber-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="e.g. Hassan Ahmed"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-stone-900 border border-stone-800 focus:border-amber-500 text-xs sm:text-sm text-stone-100 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-stone-300 mb-1">
                    {t.contact_form_email} <span className="text-amber-500">*</span>
                  </label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="hassan@example.com"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-stone-900 border border-stone-800 focus:border-amber-500 text-xs sm:text-sm text-stone-100 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-stone-300 mb-1">
                    {t.contact_form_phone}
                  </label>
                  <input
                    type="tel"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    placeholder="+252 61 2483838"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-stone-900 border border-stone-800 focus:border-amber-500 text-xs sm:text-sm text-stone-100 focus:outline-none dir-ltr"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-stone-300 mb-1">
                    {t.contact_form_subject}
                  </label>
                  <input
                    type="text"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    placeholder="Flight / Visa Inquiry"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-stone-900 border border-stone-800 focus:border-amber-500 text-xs sm:text-sm text-stone-100 focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-stone-300 mb-1">
                  {t.contact_form_message} <span className="text-amber-500">*</span>
                </label>
                <textarea
                  rows={4}
                  required
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder={t.contact_form_message_ph}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-stone-900 border border-stone-800 focus:border-amber-500 text-xs sm:text-sm text-stone-100 focus:outline-none resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full sm:w-auto px-6 py-3 rounded-xl bg-gold-gradient text-stone-950 font-bold text-xs sm:text-sm shadow-lg shadow-amber-500/20 hover:brightness-110 active:scale-95 transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
              >
                {isSubmitting ? (
                  <span className="w-4 h-4 border-2 border-stone-950 border-t-transparent rounded-full animate-spin" />
                ) : (
                  <Send className="w-4 h-4 text-stone-950" />
                )}
                <span>{t.contact_btn_send}</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
