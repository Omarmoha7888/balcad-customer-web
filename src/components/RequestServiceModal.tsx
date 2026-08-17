import React, { useState, useEffect, useRef } from 'react';
import {
  X,
  Plane,
  Upload,
  FileText,
  Trash2,
  CheckCircle2,
  AlertCircle,
  ShieldCheck,
  Calendar,
  User,
  Phone,
  Mail,
  MapPin,
  FileBadge,
  Sparkles,
  Lock,
  ChevronRight,
  ChevronLeft,
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { Language, UploadedDocument } from '../types';
import { translations } from '../translations';
import { servicesData } from '../data/servicesData';

interface RequestServiceModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentLang: Language;
  preselectedService?: string;
  onSuccess: (receiptData: any) => void;
}

export const RequestServiceModal: React.FC<RequestServiceModalProps> = ({
  isOpen,
  onClose,
  currentLang,
  preselectedService,
  onSuccess,
}) => {
  const t = translations[currentLang];
  const isRtl = currentLang === 'ar';
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Form State
  const [currentStep, setCurrentStep] = useState<number>(1);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [serverError, setServerError] = useState<string | null>(null);

  // Fields
  const [fullName, setFullName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [whatsAppNumber, setWhatsAppNumber] = useState('');
  const [email, setEmail] = useState('');
  const [gender, setGender] = useState<'Male' | 'Female' | 'Other'>('Male');
  const [dateOfBirth, setDateOfBirth] = useState('');
  const [nationality, setNationality] = useState('Somali');
  const [country, setCountry] = useState('Somalia');
  const [city, setCity] = useState('Mogadishu');

  const [passportNumber, setPassportNumber] = useState('');
  const [passportExpiryDate, setPassportExpiryDate] = useState('');
  const [passportIssueDate, setPassportIssueDate] = useState('');

  const [serviceType, setServiceType] = useState('International Flight Booking');
  const [destinationCountry, setDestinationCountry] = useState('');
  const [departureDate, setDepartureDate] = useState('');
  const [returnDate, setReturnDate] = useState('');
  const [adults, setAdults] = useState<number>(1);
  const [children, setChildren] = useState<number>(0);
  const [travelClass, setTravelClass] = useState<'Economy' | 'Premium Economy' | 'Business' | 'First Class'>('Economy');
  const [hotelPreference, setHotelPreference] = useState<'3-Star' | '4-Star' | '5-Star' | 'Luxury Resort' | 'None'>('None');
  const [notes, setNotes] = useState('');

  // Uploaded Files List
  const [uploadedFiles, setUploadedFiles] = useState<UploadedDocument[]>([]);
  const [docCategory, setDocCategory] = useState<'passport' | 'national_id' | 'visa_doc' | 'photo' | 'supporting'>('passport');

  // Real-time Errors Map
  const [errors, setErrors] = useState<Record<string, string>>({});

  useEffect(() => {
    if (preselectedService) {
      setServiceType(preselectedService);
    }
  }, [preselectedService]);

  if (!isOpen) return null;

  // Validation function
  const validateStep = (stepNumber: number): boolean => {
    const newErrors: Record<string, string> = {};
    const today = new Date().toISOString().split('T')[0];

    if (stepNumber === 1) {
      if (!fullName.trim() || fullName.trim().length < 3) {
        newErrors.fullName = t.err_fullname_req;
      }
      if (!phoneNumber.trim() || phoneNumber.trim().length < 5) {
        newErrors.phoneNumber = t.err_phone_req;
      }
      if (!email.trim() || !email.includes('@') || !email.includes('.')) {
        newErrors.email = t.err_email_req;
      }
      if (!dateOfBirth) {
        newErrors.dateOfBirth = t.err_dob_req;
      }
      if (!nationality.trim()) {
        newErrors.nationality = t.err_nationality_req;
      }
      if (!country.trim()) {
        newErrors.country = t.err_country_req;
      }
      if (!city.trim()) {
        newErrors.city = t.err_city_req;
      }
    }

    if (stepNumber === 2) {
      if (!passportNumber.trim()) {
        newErrors.passportNumber = t.err_passport_req;
      }
      if (!passportExpiryDate) {
        newErrors.passportExpiryDate = t.err_passport_expiry_req;
      }
    }

    if (stepNumber === 3) {
      if (!destinationCountry.trim()) {
        newErrors.destinationCountry = t.err_destination_req;
      }
      if (!departureDate) {
        newErrors.departureDate = t.err_departure_past;
      } else if (departureDate < today) {
        newErrors.departureDate = t.err_departure_past;
      }
      if (returnDate && returnDate < departureDate) {
        newErrors.returnDate = t.err_return_before_dep;
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNextStep = () => {
    if (validateStep(currentStep)) {
      setCurrentStep((prev) => Math.min(prev + 1, 4));
    }
  };

  const handlePrevStep = () => {
    setCurrentStep((prev) => Math.max(prev - 1, 1));
  };

  // Handle File Upload (Max 20MB, supported: pdf, jpg, png, jpeg)
  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files || files.length === 0) return;

    const allowedTypes = ['application/pdf', 'image/jpeg', 'image/png', 'image/jpg'];
    const maxSizeBytes = 20 * 1024 * 1024; // 20 MB

    for (let i = 0; i < files.length; i++) {
      const file = files[i];

      if (!allowedTypes.includes(file.type)) {
        alert(`${file.name}: ${t.err_file_type}`);
        continue;
      }

      if (file.size > maxSizeBytes) {
        alert(`${file.name}: ${t.err_file_size}`);
        continue;
      }

      const reader = new FileReader();
      reader.onload = (event) => {
        const base64 = event.target?.result as string;
        const newDoc: UploadedDocument = {
          id: `doc-${Date.now()}-${Math.random().toString(36).substring(2, 6)}`,
          name: file.name,
          size: file.size,
          type: file.type,
          docType: docCategory,
          base64: base64.substring(0, 100000), // stored or previewed
          uploadedAt: new Date().toISOString(),
        };
        setUploadedFiles((prev) => [...prev, newDoc]);
      };
      reader.readAsDataURL(file);
    }

    // Reset input
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const removeUploadedFile = (docId: string) => {
    setUploadedFiles((prev) => prev.filter((d) => d.id !== docId));
  };

  // Submit Handler
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateStep(1) || !validateStep(2) || !validateStep(3)) {
      setCurrentStep(1);
      return;
    }

    setIsSubmitting(true);
    setServerError(null);

    const payload = {
      fullName,
      phoneNumber,
      whatsAppNumber,
      email,
      gender,
      dateOfBirth,
      nationality,
      country,
      city,
      passportNumber,
      passportExpiryDate,
      passportIssueDate,
      serviceType,
      destinationCountry,
      departureDate,
      returnDate,
      adults,
      children,
      travelClass,
      hotelPreference,
      notes,
      uploadedFiles,
    };

    try {
      const res = await fetch('/api/requests', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || 'Failed to submit request.');
      }

      // Celebrate with confetti
      try {
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 },
          colors: ['#D4AF37', '#B88E1C', '#121212', '#F7E7A9'],
        });
      } catch (err) {
        // Confetti non-fatal
      }

      onSuccess({
        ...payload,
        requestId: data.data?.requestId || 'BTA-REQ-2026-XXXXX',
        createdAt: data.data?.createdAt || new Date().toISOString(),
        status: 'Pending',
      });
    } catch (err: any) {
      setServerError(err.message || 'Submission error. Please check your network connection.');
      setIsSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-stone-950/80 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-200">
      <div className="relative w-full max-w-4xl rounded-3xl bg-white text-stone-900 border border-amber-500/30 shadow-2xl overflow-hidden flex flex-col max-h-[92vh]">
        {/* Modal Top Header */}
        <div className="bg-stone-950 text-white p-5 sm:p-6 border-b border-amber-500/30 flex items-center justify-between relative overflow-hidden">
          <div className="flex items-center gap-3 relative z-10">
            <div className="w-10 h-10 rounded-xl bg-gold-gradient text-stone-950 flex items-center justify-center font-bold shadow-md">
              <Plane className="w-5 h-5" />
            </div>
            <div>
              <h2 className="font-serif-luxury text-lg sm:text-xl font-bold text-stone-100 flex items-center gap-2">
                <span>{t.form_title}</span>
                <span className="text-xs px-2 py-0.5 rounded-full bg-amber-400/20 text-amber-300 border border-amber-400/30 font-sans">
                  Zero Online Payment
                </span>
              </h2>
              <p className="text-xs text-stone-400 mt-0.5 line-clamp-1">{t.form_subtitle}</p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl bg-stone-900 hover:bg-stone-800 text-stone-400 hover:text-white transition-colors relative z-10"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Step Indicator Tabs */}
        <div className="bg-stone-100/90 border-b border-stone-200 px-4 sm:px-6 py-2.5 grid grid-cols-4 gap-2 text-xs font-semibold">
          <button
            type="button"
            onClick={() => setCurrentStep(1)}
            className={`py-1.5 px-2 rounded-lg text-center transition-colors flex items-center justify-center gap-1.5 ${
              currentStep === 1
                ? 'bg-stone-900 text-amber-400 shadow-sm'
                : 'text-stone-600 hover:text-stone-950'
            }`}
          >
            <span className="w-4 h-4 rounded-full bg-amber-500/20 text-amber-600 flex items-center justify-center text-[10px]">
              1
            </span>
            <span className="hidden sm:inline">{t.form_step1}</span>
          </button>

          <button
            type="button"
            onClick={() => {
              if (validateStep(1)) setCurrentStep(2);
            }}
            className={`py-1.5 px-2 rounded-lg text-center transition-colors flex items-center justify-center gap-1.5 ${
              currentStep === 2
                ? 'bg-stone-900 text-amber-400 shadow-sm'
                : 'text-stone-600 hover:text-stone-950'
            }`}
          >
            <span className="w-4 h-4 rounded-full bg-amber-500/20 text-amber-600 flex items-center justify-center text-[10px]">
              2
            </span>
            <span className="hidden sm:inline">{t.form_step2}</span>
          </button>

          <button
            type="button"
            onClick={() => {
              if (validateStep(1) && validateStep(2)) setCurrentStep(3);
            }}
            className={`py-1.5 px-2 rounded-lg text-center transition-colors flex items-center justify-center gap-1.5 ${
              currentStep === 3
                ? 'bg-stone-900 text-amber-400 shadow-sm'
                : 'text-stone-600 hover:text-stone-950'
            }`}
          >
            <span className="w-4 h-4 rounded-full bg-amber-500/20 text-amber-600 flex items-center justify-center text-[10px]">
              3
            </span>
            <span className="hidden sm:inline">{t.form_step3}</span>
          </button>

          <button
            type="button"
            onClick={() => {
              if (validateStep(1) && validateStep(2) && validateStep(3)) setCurrentStep(4);
            }}
            className={`py-1.5 px-2 rounded-lg text-center transition-colors flex items-center justify-center gap-1.5 ${
              currentStep === 4
                ? 'bg-stone-900 text-amber-400 shadow-sm'
                : 'text-stone-600 hover:text-stone-950'
            }`}
          >
            <span className="w-4 h-4 rounded-full bg-amber-500/20 text-amber-600 flex items-center justify-center text-[10px]">
              4
            </span>
            <span className="hidden sm:inline">{t.form_step4}</span>
          </button>
        </div>

        {/* Scrollable Form Body */}
        <form onSubmit={handleSubmit} className="p-6 sm:p-8 overflow-y-auto flex-1 space-y-6">
          {serverError && (
            <div className="p-4 rounded-xl bg-rose-50 border border-rose-200 text-rose-800 text-xs flex items-center gap-2">
              <AlertCircle className="w-4 h-4 text-rose-600 shrink-0" />
              <span>{serverError}</span>
            </div>
          )}

          {/* STEP 1: Personal Details */}
          {currentStep === 1 && (
            <div className="space-y-4 animate-in fade-in duration-150">
              <div className="border-b border-stone-100 pb-3">
                <h3 className="font-serif-luxury text-base font-bold text-stone-900 flex items-center gap-2">
                  <User className="w-4 h-4 text-amber-600" />
                  <span>{t.form_step1}</span>
                </h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Full Name */}
                <div className="sm:col-span-2">
                  <label className="block text-xs font-bold text-stone-800 mb-1">
                    {t.form_full_name} <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={fullName}
                    onChange={(e) => {
                      setFullName(e.target.value);
                      if (errors.fullName) setErrors({ ...errors, fullName: '' });
                    }}
                    placeholder={t.form_full_name_ph}
                    className={`w-full px-3.5 py-2.5 rounded-xl border text-xs sm:text-sm transition-colors focus:outline-none ${
                      errors.fullName
                        ? 'border-rose-400 bg-rose-50/30 focus:border-rose-500'
                        : 'border-stone-300 focus:border-amber-500'
                    }`}
                  />
                  {errors.fullName && (
                    <p className="text-[11px] text-rose-600 mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" /> {errors.fullName}
                    </p>
                  )}
                </div>

                {/* Phone Number */}
                <div>
                  <label className="block text-xs font-bold text-stone-800 mb-1">
                    {t.form_phone} <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="tel"
                    required
                    value={phoneNumber}
                    onChange={(e) => {
                      setPhoneNumber(e.target.value);
                      if (errors.phoneNumber) setErrors({ ...errors, phoneNumber: '' });
                    }}
                    placeholder={t.form_phone_ph}
                    className={`w-full px-3.5 py-2.5 rounded-xl border text-xs sm:text-sm transition-colors focus:outline-none dir-ltr ${
                      errors.phoneNumber
                        ? 'border-rose-400 bg-rose-50/30 focus:border-rose-500'
                        : 'border-stone-300 focus:border-amber-500'
                    }`}
                  />
                  {errors.phoneNumber && (
                    <p className="text-[11px] text-rose-600 mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" /> {errors.phoneNumber}
                    </p>
                  )}
                </div>

                {/* WhatsApp Number (Optional) */}
                <div>
                  <label className="block text-xs font-bold text-stone-800 mb-1">
                    {t.form_whatsapp}
                  </label>
                  <input
                    type="tel"
                    value={whatsAppNumber}
                    onChange={(e) => setWhatsAppNumber(e.target.value)}
                    placeholder={t.form_whatsapp_ph}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-stone-300 focus:border-amber-500 text-xs sm:text-sm focus:outline-none dir-ltr"
                  />
                </div>

                {/* Email Address */}
                <div>
                  <label className="block text-xs font-bold text-stone-800 mb-1">
                    {t.form_email} <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      if (errors.email) setErrors({ ...errors, email: '' });
                    }}
                    placeholder={t.form_email_ph}
                    className={`w-full px-3.5 py-2.5 rounded-xl border text-xs sm:text-sm transition-colors focus:outline-none ${
                      errors.email
                        ? 'border-rose-400 bg-rose-50/30 focus:border-rose-500'
                        : 'border-stone-300 focus:border-amber-500'
                    }`}
                  />
                  {errors.email && (
                    <p className="text-[11px] text-rose-600 mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" /> {errors.email}
                    </p>
                  )}
                </div>

                {/* Gender */}
                <div>
                  <label className="block text-xs font-bold text-stone-800 mb-1">
                    {t.form_gender} <span className="text-rose-500">*</span>
                  </label>
                  <select
                    value={gender}
                    onChange={(e) => setGender(e.target.value as any)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-stone-300 focus:border-amber-500 text-xs sm:text-sm bg-white focus:outline-none"
                  >
                    <option value="Male">{t.form_gender_male}</option>
                    <option value="Female">{t.form_gender_female}</option>
                    <option value="Other">{t.form_gender_other}</option>
                  </select>
                </div>

                {/* Date of Birth */}
                <div>
                  <label className="block text-xs font-bold text-stone-800 mb-1">
                    {t.form_dob} <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="date"
                    required
                    value={dateOfBirth}
                    onChange={(e) => {
                      setDateOfBirth(e.target.value);
                      if (errors.dateOfBirth) setErrors({ ...errors, dateOfBirth: '' });
                    }}
                    className={`w-full px-3.5 py-2.5 rounded-xl border text-xs sm:text-sm transition-colors focus:outline-none ${
                      errors.dateOfBirth
                        ? 'border-rose-400 bg-rose-50/30 focus:border-rose-500'
                        : 'border-stone-300 focus:border-amber-500'
                    }`}
                  />
                  {errors.dateOfBirth && (
                    <p className="text-[11px] text-rose-600 mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" /> {errors.dateOfBirth}
                    </p>
                  )}
                </div>

                {/* Nationality */}
                <div>
                  <label className="block text-xs font-bold text-stone-800 mb-1">
                    {t.form_nationality} <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={nationality}
                    onChange={(e) => setNationality(e.target.value)}
                    placeholder={t.form_nationality_ph}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-stone-300 focus:border-amber-500 text-xs sm:text-sm focus:outline-none"
                  />
                </div>

                {/* Country of Residence */}
                <div>
                  <label className="block text-xs font-bold text-stone-800 mb-1">
                    {t.form_country} <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={country}
                    onChange={(e) => setCountry(e.target.value)}
                    placeholder={t.form_country_ph}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-stone-300 focus:border-amber-500 text-xs sm:text-sm focus:outline-none"
                  />
                </div>

                {/* City */}
                <div>
                  <label className="block text-xs font-bold text-stone-800 mb-1">
                    {t.form_city} <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    placeholder={t.form_city_ph}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-stone-300 focus:border-amber-500 text-xs sm:text-sm focus:outline-none"
                  />
                </div>
              </div>
            </div>
          )}

          {/* STEP 2: Passport Information */}
          {currentStep === 2 && (
            <div className="space-y-4 animate-in fade-in duration-150">
              <div className="border-b border-stone-100 pb-3">
                <h3 className="font-serif-luxury text-base font-bold text-stone-900 flex items-center gap-2">
                  <FileBadge className="w-4 h-4 text-amber-600" />
                  <span>{t.form_step2}</span>
                </h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Passport Number */}
                <div className="sm:col-span-2">
                  <label className="block text-xs font-bold text-stone-800 mb-1">
                    {t.form_passport_num} <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={passportNumber}
                    onChange={(e) => {
                      setPassportNumber(e.target.value);
                      if (errors.passportNumber) setErrors({ ...errors, passportNumber: '' });
                    }}
                    placeholder={t.form_passport_num_ph}
                    className={`w-full px-3.5 py-2.5 rounded-xl border text-xs sm:text-sm uppercase font-mono tracking-wider transition-colors focus:outline-none ${
                      errors.passportNumber
                        ? 'border-rose-400 bg-rose-50/30 focus:border-rose-500'
                        : 'border-stone-300 focus:border-amber-500'
                    }`}
                  />
                  {errors.passportNumber && (
                    <p className="text-[11px] text-rose-600 mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" /> {errors.passportNumber}
                    </p>
                  )}
                </div>

                {/* Passport Expiry Date */}
                <div>
                  <label className="block text-xs font-bold text-stone-800 mb-1">
                    {t.form_passport_expiry} <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="date"
                    required
                    value={passportExpiryDate}
                    onChange={(e) => {
                      setPassportExpiryDate(e.target.value);
                      if (errors.passportExpiryDate) setErrors({ ...errors, passportExpiryDate: '' });
                    }}
                    className={`w-full px-3.5 py-2.5 rounded-xl border text-xs sm:text-sm transition-colors focus:outline-none ${
                      errors.passportExpiryDate
                        ? 'border-rose-400 bg-rose-50/30 focus:border-rose-500'
                        : 'border-stone-300 focus:border-amber-500'
                    }`}
                  />
                  {errors.passportExpiryDate && (
                    <p className="text-[11px] text-rose-600 mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" /> {errors.passportExpiryDate}
                    </p>
                  )}
                </div>

                {/* Passport Issue Date (Optional) */}
                <div>
                  <label className="block text-xs font-bold text-stone-800 mb-1">
                    {t.form_passport_issue}
                  </label>
                  <input
                    type="date"
                    value={passportIssueDate}
                    onChange={(e) => setPassportIssueDate(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-stone-300 focus:border-amber-500 text-xs sm:text-sm focus:outline-none"
                  />
                </div>
              </div>

              {/* Passport Guidelines Callout */}
              <div className="p-3.5 rounded-xl bg-amber-500/10 border border-amber-500/25 text-amber-900 text-xs flex items-start gap-2.5">
                <ShieldCheck className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold">Consulate Requirement:</span> Most international embassies require passports to have at least 6 months remaining validity before your departure date.
                </div>
              </div>
            </div>
          )}

          {/* STEP 3: Travel Requirements */}
          {currentStep === 3 && (
            <div className="space-y-4 animate-in fade-in duration-150">
              <div className="border-b border-stone-100 pb-3">
                <h3 className="font-serif-luxury text-base font-bold text-stone-900 flex items-center gap-2">
                  <Plane className="w-4 h-4 text-amber-600" />
                  <span>{t.form_step3}</span>
                </h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Service Type Selection */}
                <div className="sm:col-span-2">
                  <label className="block text-xs font-bold text-stone-800 mb-1">
                    {t.form_service_type} <span className="text-rose-500">*</span>
                  </label>
                  <select
                    value={serviceType}
                    onChange={(e) => setServiceType(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-stone-300 focus:border-amber-500 text-xs sm:text-sm bg-white font-semibold text-stone-900 focus:outline-none"
                  >
                    {servicesData.map((s) => (
                      <option key={s.id} value={s.name.en}>
                        {s.name[currentLang]}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Destination Country / City */}
                <div className="sm:col-span-2">
                  <label className="block text-xs font-bold text-stone-800 mb-1">
                    {t.form_destination_country} <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={destinationCountry}
                    onChange={(e) => {
                      setDestinationCountry(e.target.value);
                      if (errors.destinationCountry) setErrors({ ...errors, destinationCountry: '' });
                    }}
                    placeholder={t.form_destination_country_ph}
                    className={`w-full px-3.5 py-2.5 rounded-xl border text-xs sm:text-sm transition-colors focus:outline-none ${
                      errors.destinationCountry
                        ? 'border-rose-400 bg-rose-50/30 focus:border-rose-500'
                        : 'border-stone-300 focus:border-amber-500'
                    }`}
                  />
                  {errors.destinationCountry && (
                    <p className="text-[11px] text-rose-600 mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" /> {errors.destinationCountry}
                    </p>
                  )}
                </div>

                {/* Departure Date */}
                <div>
                  <label className="block text-xs font-bold text-stone-800 mb-1">
                    {t.form_departure_date} <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="date"
                    required
                    value={departureDate}
                    onChange={(e) => {
                      setDepartureDate(e.target.value);
                      if (errors.departureDate) setErrors({ ...errors, departureDate: '' });
                    }}
                    className={`w-full px-3.5 py-2.5 rounded-xl border text-xs sm:text-sm transition-colors focus:outline-none ${
                      errors.departureDate
                        ? 'border-rose-400 bg-rose-50/30 focus:border-rose-500'
                        : 'border-stone-300 focus:border-amber-500'
                    }`}
                  />
                  {errors.departureDate && (
                    <p className="text-[11px] text-rose-600 mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" /> {errors.departureDate}
                    </p>
                  )}
                </div>

                {/* Return Date */}
                <div>
                  <label className="block text-xs font-bold text-stone-800 mb-1">
                    {t.form_return_date}
                  </label>
                  <input
                    type="date"
                    value={returnDate}
                    onChange={(e) => {
                      setReturnDate(e.target.value);
                      if (errors.returnDate) setErrors({ ...errors, returnDate: '' });
                    }}
                    className={`w-full px-3.5 py-2.5 rounded-xl border text-xs sm:text-sm transition-colors focus:outline-none ${
                      errors.returnDate
                        ? 'border-rose-400 bg-rose-50/30 focus:border-rose-500'
                        : 'border-stone-300 focus:border-amber-500'
                    }`}
                  />
                  {errors.returnDate && (
                    <p className="text-[11px] text-rose-600 mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" /> {errors.returnDate}
                    </p>
                  )}
                </div>

                {/* Passengers: Adults & Children */}
                <div>
                  <label className="block text-xs font-bold text-stone-800 mb-1">
                    {t.form_adults}
                  </label>
                  <input
                    type="number"
                    min="1"
                    max="50"
                    value={adults}
                    onChange={(e) => setAdults(parseInt(e.target.value) || 1)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-stone-300 focus:border-amber-500 text-xs sm:text-sm focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-stone-800 mb-1">
                    {t.form_children}
                  </label>
                  <input
                    type="number"
                    min="0"
                    max="30"
                    value={children}
                    onChange={(e) => setChildren(parseInt(e.target.value) || 0)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-stone-300 focus:border-amber-500 text-xs sm:text-sm focus:outline-none"
                  />
                </div>

                {/* Travel Class */}
                <div>
                  <label className="block text-xs font-bold text-stone-800 mb-1">
                    {t.form_travel_class}
                  </label>
                  <select
                    value={travelClass}
                    onChange={(e) => setTravelClass(e.target.value as any)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-stone-300 focus:border-amber-500 text-xs sm:text-sm bg-white focus:outline-none"
                  >
                    <option value="Economy">{t.form_class_economy}</option>
                    <option value="Premium Economy">{t.form_class_premium_economy}</option>
                    <option value="Business">{t.form_class_business}</option>
                    <option value="First Class">{t.form_class_first}</option>
                  </select>
                </div>

                {/* Hotel Preference */}
                <div>
                  <label className="block text-xs font-bold text-stone-800 mb-1">
                    {t.form_hotel_preference}
                  </label>
                  <select
                    value={hotelPreference}
                    onChange={(e) => setHotelPreference(e.target.value as any)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-stone-300 focus:border-amber-500 text-xs sm:text-sm bg-white focus:outline-none"
                  >
                    <option value="None">{t.form_hotel_none}</option>
                    <option value="3-Star">{t.form_hotel_3star}</option>
                    <option value="4-Star">{t.form_hotel_4star}</option>
                    <option value="5-Star">{t.form_hotel_5star}</option>
                    <option value="Luxury Resort">{t.form_hotel_resort}</option>
                  </select>
                </div>

                {/* Additional Notes */}
                <div className="sm:col-span-2">
                  <label className="block text-xs font-bold text-stone-800 mb-1">
                    {t.form_notes}
                  </label>
                  <textarea
                    rows={3}
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    placeholder={t.form_notes_ph}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-stone-300 focus:border-amber-500 text-xs sm:text-sm focus:outline-none resize-none"
                  />
                </div>
              </div>
            </div>
          )}

          {/* STEP 4: Document Attachments & Final Confirmation */}
          {currentStep === 4 && (
            <div className="space-y-4 animate-in fade-in duration-150">
              <div className="border-b border-stone-100 pb-3">
                <h3 className="font-serif-luxury text-base font-bold text-stone-900 flex items-center gap-2">
                  <Upload className="w-4 h-4 text-amber-600" />
                  <span>{t.form_step4}</span>
                </h3>
              </div>

              <div>
                <p className="text-xs text-stone-600 mb-3">{t.form_upload_desc}</p>

                {/* Document Category Selector */}
                <div className="flex flex-wrap gap-2 mb-3">
                  <button
                    type="button"
                    onClick={() => setDocCategory('passport')}
                    className={`px-2.5 py-1.5 rounded-lg text-xs font-semibold ${
                      docCategory === 'passport'
                        ? 'bg-amber-500 text-stone-950'
                        : 'bg-stone-100 text-stone-600 hover:bg-stone-200'
                    }`}
                  >
                    {t.form_upload_passport}
                  </button>
                  <button
                    type="button"
                    onClick={() => setDocCategory('photo')}
                    className={`px-2.5 py-1.5 rounded-lg text-xs font-semibold ${
                      docCategory === 'photo'
                        ? 'bg-amber-500 text-stone-950'
                        : 'bg-stone-100 text-stone-600 hover:bg-stone-200'
                    }`}
                  >
                    {t.form_upload_photo}
                  </button>
                  <button
                    type="button"
                    onClick={() => setDocCategory('national_id')}
                    className={`px-2.5 py-1.5 rounded-lg text-xs font-semibold ${
                      docCategory === 'national_id'
                        ? 'bg-amber-500 text-stone-950'
                        : 'bg-stone-100 text-stone-600 hover:bg-stone-200'
                    }`}
                  >
                    {t.form_upload_id}
                  </button>
                  <button
                    type="button"
                    onClick={() => setDocCategory('visa_doc')}
                    className={`px-2.5 py-1.5 rounded-lg text-xs font-semibold ${
                      docCategory === 'visa_doc'
                        ? 'bg-amber-500 text-stone-950'
                        : 'bg-stone-100 text-stone-600 hover:bg-stone-200'
                    }`}
                  >
                    {t.form_upload_visa}
                  </button>
                </div>

                {/* Dropzone */}
                <div
                  onClick={() => fileInputRef.current?.click()}
                  className="border-2 border-dashed border-amber-500/40 hover:border-amber-500 rounded-2xl p-6 text-center bg-amber-500/5 hover:bg-amber-500/10 transition-colors cursor-pointer"
                >
                  <input
                    ref={fileInputRef}
                    type="file"
                    multiple
                    accept=".pdf,.jpg,.jpeg,.png"
                    onChange={handleFileUpload}
                    className="hidden"
                  />
                  <Upload className="w-8 h-8 text-amber-600 mx-auto mb-2 animate-bounce" />
                  <p className="text-xs font-bold text-stone-800">{t.form_upload_drop}</p>
                  <p className="text-[11px] text-stone-500 mt-1">PDF, JPG, PNG up to 20MB</p>
                </div>

                {/* Uploaded File Badges List */}
                {uploadedFiles.length > 0 && (
                  <div className="mt-4 space-y-2">
                    <div className="text-xs font-bold text-stone-800">
                      Uploaded Documents ({uploadedFiles.length})
                    </div>
                    <div className="space-y-1.5 max-h-36 overflow-y-auto">
                      {uploadedFiles.map((doc) => (
                        <div
                          key={doc.id}
                          className="flex items-center justify-between p-2.5 rounded-xl bg-stone-50 border border-stone-200 text-xs"
                        >
                          <div className="flex items-center gap-2 overflow-hidden">
                            <FileText className="w-4 h-4 text-amber-600 shrink-0" />
                            <span className="truncate font-medium text-stone-800">{doc.name}</span>
                            <span className="text-[10px] px-1.5 py-0.5 rounded bg-stone-200 text-stone-600 shrink-0 uppercase">
                              {(doc.size / 1024 / 1024).toFixed(1)} MB
                            </span>
                          </div>
                          <button
                            type="button"
                            onClick={() => removeUploadedFile(doc.id)}
                            className="p-1 rounded text-stone-400 hover:text-rose-600 hover:bg-rose-50 transition-colors"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Zero-Payment Reassurance Banner */}
              <div className="p-4 rounded-2xl bg-stone-950 text-white border border-amber-500/30 text-xs space-y-2">
                <div className="flex items-center gap-2 text-amber-400 font-bold">
                  <ShieldCheck className="w-4 h-4" />
                  <span>Important Payment & Booking Policy</span>
                </div>
                <p className="text-stone-300 leading-relaxed text-[11px]">{t.form_no_payment_banner}</p>
              </div>
            </div>
          )}
        </form>

        {/* Modal Bottom Footer Actions */}
        <div className="bg-stone-50 border-t border-stone-200 px-6 py-4 flex items-center justify-between">
          <div>
            {currentStep > 1 ? (
              <button
                type="button"
                onClick={handlePrevStep}
                className="px-4 py-2 rounded-xl text-xs font-semibold text-stone-700 bg-white border border-stone-300 hover:bg-stone-100 transition-colors flex items-center gap-1.5"
              >
                <ChevronLeft className={`w-4 h-4 ${isRtl ? 'rotate-180' : ''}`} />
                <span>Previous</span>
              </button>
            ) : (
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2 rounded-xl text-xs font-semibold text-stone-500 hover:text-stone-800 transition-colors"
              >
                Cancel
              </button>
            )}
          </div>

          <div>
            {currentStep < 4 ? (
              <button
                type="button"
                onClick={handleNextStep}
                className="px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold text-stone-950 bg-gold-gradient hover:brightness-105 active:scale-95 transition-all flex items-center gap-2 shadow-md"
              >
                <span>Continue</span>
                <ChevronRight className={`w-4 h-4 ${isRtl ? 'rotate-180' : ''}`} />
              </button>
            ) : (
              <button
                type="button"
                onClick={handleSubmit}
                disabled={isSubmitting}
                className="px-6 py-2.5 rounded-xl text-xs sm:text-sm font-bold text-stone-950 bg-gold-gradient hover:brightness-110 active:scale-95 transition-all flex items-center gap-2 shadow-lg shadow-amber-500/20 disabled:opacity-50"
              >
                {isSubmitting ? (
                  <>
                    <span className="w-4 h-4 border-2 border-stone-950 border-t-transparent rounded-full animate-spin" />
                    <span>{t.form_btn_submitting}</span>
                  </>
                ) : (
                  <>
                    <CheckCircle2 className="w-4 h-4 text-stone-950" />
                    <span>{t.form_btn_submit}</span>
                  </>
                )}
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
