import React, { useState } from 'react';
import {
  X,
  CheckCircle2,
  Printer,
  ShieldCheck,
  Plane,
  Mail,
  Phone,
  Copy,
  Calendar,
  User,
  MapPin,
  FileBadge,
  Sparkles,
  ExternalLink,
} from 'lucide-react';
import { Language } from '../types';
import { translations } from '../translations';

interface RequestReceiptModalProps {
  isOpen: boolean;
  onClose: () => void;
  receiptData: any;
  currentLang: Language;
  onTrackNow: (requestId: string) => void;
  onNewRequest: () => void;
}

export const RequestReceiptModal: React.FC<RequestReceiptModalProps> = ({
  isOpen,
  onClose,
  receiptData,
  currentLang,
  onTrackNow,
  onNewRequest,
}) => {
  const [copied, setCopied] = useState(false);
  const [showEmailPreview, setShowEmailPreview] = useState(false);

  const t = translations[currentLang];
  const isRtl = currentLang === 'ar';

  if (!isOpen || !receiptData) return null;

  const handleCopyId = () => {
    if (receiptData.requestId) {
      navigator.clipboard.writeText(receiptData.requestId);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-stone-950/85 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-200">
      <div className="relative w-full max-w-2xl rounded-3xl bg-white text-stone-900 border border-amber-500/40 shadow-2xl overflow-hidden flex flex-col max-h-[92vh]">
        {/* Top Header */}
        <div className="bg-stone-950 text-white p-6 border-b border-amber-500/30 text-center relative overflow-hidden">
          <div className="w-14 h-14 rounded-2xl bg-gold-gradient text-stone-950 mx-auto mb-3 flex items-center justify-center shadow-xl shadow-amber-500/20">
            <CheckCircle2 className="w-8 h-8" />
          </div>

          <h2 className="font-serif-luxury text-xl sm:text-2xl font-bold text-stone-100">
            {t.success_title}
          </h2>

          <p className="text-xs sm:text-sm text-stone-300 mt-2 max-w-md mx-auto leading-relaxed">
            {t.success_msg}
          </p>

          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-xl bg-stone-900 hover:bg-stone-800 text-stone-400 hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Receipt Content Body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6 flex-1">
          {/* Unique Request ID Banner */}
          <div className="p-4 sm:p-5 rounded-2xl bg-amber-500/10 border border-amber-500/30 text-center">
            <div className="text-[11px] uppercase tracking-widest font-bold text-amber-800 mb-1">
              {t.receipt_request_id}
            </div>
            <div className="font-mono text-xl sm:text-2xl font-bold text-stone-950 tracking-wider flex items-center justify-center gap-2">
              <span>{receiptData.requestId}</span>
              <button
                onClick={handleCopyId}
                className="p-1.5 rounded-lg bg-white border border-amber-400 text-amber-700 hover:bg-amber-100 text-xs flex items-center gap-1 transition-all"
                title="Copy ID"
              >
                <Copy className="w-3.5 h-3.5" />
                <span className="text-[10px] font-sans font-semibold">
                  {copied ? 'Copied!' : 'Copy'}
                </span>
              </button>
            </div>
            <div className="mt-2 inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-amber-200/80 text-amber-900 text-xs font-bold">
              <span className="w-2 h-2 rounded-full bg-amber-600 animate-ping" />
              <span>Status: Pending Initial Review</span>
            </div>
          </div>

          {/* Key Summary Grid */}
          <div className="rounded-2xl border border-stone-200 divide-y divide-stone-100 text-xs">
            <div className="p-3.5 flex justify-between">
              <span className="text-stone-500">{t.receipt_customer}:</span>
              <span className="font-bold text-stone-900">{receiptData.fullName}</span>
            </div>
            <div className="p-3.5 flex justify-between">
              <span className="text-stone-500">{t.receipt_service}:</span>
              <span className="font-bold text-stone-900">{receiptData.serviceType}</span>
            </div>
            <div className="p-3.5 flex justify-between">
              <span className="text-stone-500">{t.receipt_destination}:</span>
              <span className="font-bold text-stone-900">{receiptData.destinationCountry}</span>
            </div>
            <div className="p-3.5 flex justify-between">
              <span className="text-stone-500">Departure / Travel Date:</span>
              <span className="font-bold text-stone-900">{receiptData.departureDate}</span>
            </div>
            <div className="p-3.5 flex justify-between">
              <span className="text-stone-500">Passenger Count:</span>
              <span className="font-bold text-stone-900">
                {receiptData.adults} Adults, {receiptData.children || 0} Children
              </span>
            </div>
            <div className="p-3.5 flex justify-between">
              <span className="text-stone-500">{t.receipt_phone}:</span>
              <span className="font-bold text-stone-900 dir-ltr">{receiptData.phoneNumber}</span>
            </div>
            <div className="p-3.5 flex justify-between">
              <span className="text-stone-500">{t.receipt_email}:</span>
              <span className="font-bold text-stone-900">{receiptData.email}</span>
            </div>
            <div className="p-3.5 flex justify-between">
              <span className="text-stone-500">{t.receipt_date}:</span>
              <span className="font-bold text-stone-900">
                {new Date(receiptData.createdAt).toLocaleString()}
              </span>
            </div>
          </div>

          {/* Email Preview Accordion */}
          <div className="rounded-2xl border border-stone-200 bg-stone-50 p-4">
            <button
              onClick={() => setShowEmailPreview(!showEmailPreview)}
              className="w-full flex items-center justify-between text-xs font-bold text-stone-800"
            >
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-amber-600" />
                <span>View Simulated Confirmation Email (Sent to {receiptData.email})</span>
              </div>
              <span className="text-amber-600 hover:underline">
                {showEmailPreview ? 'Hide' : 'Preview Email'}
              </span>
            </button>

            {showEmailPreview && (
              <div className="mt-3 p-4 rounded-xl bg-white border border-stone-200 text-xs text-stone-700 space-y-2 font-sans">
                <div className="font-bold text-stone-900 border-b pb-1">
                  From: Balcad Travel Agency &lt;balcadtravel@gmail.com&gt;
                </div>
                <div className="font-bold text-stone-900">
                  Subject: Travel Request Confirmation - {receiptData.requestId}
                </div>
                <p>Dear {receiptData.fullName},</p>
                <p>
                  Thank you for choosing Balcad Travel Agency. We have received your request for{' '}
                  <strong>{receiptData.serviceType}</strong> to{' '}
                  <strong>{receiptData.destinationCountry}</strong>.
                </p>
                <p>
                  Your unique Request ID is <strong>{receiptData.requestId}</strong>. A dedicated
                  travel officer is currently reviewing your details and will contact you directly via
                  phone or WhatsApp.
                </p>
                <div className="pt-2 text-stone-500 text-[11px] border-t">
                  Balcad Travel Agency | +252 61 2483838 / +252 61 2141414 | balcadtravel@gmail.com
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Modal Bottom Actions */}
        <div className="bg-stone-100 border-t border-stone-200 p-4 sm:p-5 flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="px-4 py-2 rounded-xl bg-white border border-stone-300 text-stone-700 hover:bg-stone-50 text-xs font-semibold flex items-center gap-1.5 transition-colors"
            >
              <Printer className="w-4 h-4" />
              <span>{t.receipt_btn_print}</span>
            </button>

            <button
              onClick={onNewRequest}
              className="px-4 py-2 rounded-xl text-stone-600 hover:text-stone-950 text-xs font-semibold transition-colors"
            >
              {t.receipt_btn_new}
            </button>
          </div>

          <button
            onClick={() => onTrackNow(receiptData.requestId)}
            className="px-5 py-2.5 rounded-xl bg-gold-gradient text-stone-950 font-bold text-xs sm:text-sm hover:brightness-105 active:scale-95 shadow-md flex items-center gap-2"
          >
            <ShieldCheck className="w-4 h-4" />
            <span>{t.receipt_btn_track}</span>
          </button>
        </div>
      </div>
    </div>
  );
};
