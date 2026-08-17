export type Language = 'en' | 'so' | 'ar';

export type RequestStatus =
  | 'Pending'
  | 'Assigned'
  | 'In Review'
  | 'Waiting for Customer'
  | 'Approved'
  | 'Rejected'
  | 'In Progress'
  | 'Completed'
  | 'Cancelled';

export type ServiceCategory =
  | 'flight'
  | 'visa'
  | 'hotel'
  | 'pilgrimage'
  | 'transfer'
  | 'cargo'
  | 'corporate'
  | 'tours'
  | 'insurance';

export interface ServiceItem {
  id: string;
  category: ServiceCategory;
  name: {
    en: string;
    so: string;
    ar: string;
  };
  shortDescription: {
    en: string;
    so: string;
    ar: string;
  };
  fullDescription: {
    en: string;
    so: string;
    ar: string;
  };
  icon: string;
  image: string;
  benefits: {
    en: string[];
    so: string[];
    ar: string[];
  };
  requiredDocuments: {
    en: string[];
    so: string[];
    ar: string[];
  };
  processingTime: {
    en: string;
    so: string;
    ar: string;
  };
  faqs: {
    question: { en: string; so: string; ar: string };
    answer: { en: string; so: string; ar: string };
  }[];
}

export interface UploadedDocument {
  id: string;
  name: string;
  size: number;
  type: string;
  docType: 'passport' | 'national_id' | 'visa_doc' | 'photo' | 'supporting';
  url?: string;
  base64?: string;
  uploadedAt: string;
}

export interface RequestTimelineEvent {
  id: string;
  timestamp: string;
  userName: string;
  userRole: 'System' | 'Customer' | 'Staff' | 'Super Admin';
  action: string;
  description: {
    en: string;
    so: string;
    ar: string;
  };
}

export interface CustomerRequest {
  id: string; // e.g. BTA-REQ-2026-89421
  fullName: string;
  phoneNumber: string;
  whatsAppNumber?: string;
  email: string;
  gender: 'Male' | 'Female' | 'Other';
  dateOfBirth: string;
  nationality: string;
  country: string;
  city: string;
  passportNumber: string;
  passportExpiryDate: string;
  passportIssueDate?: string;
  serviceType: string;
  destinationCountry: string;
  departureDate: string;
  returnDate?: string;
  adults: number;
  children: number;
  travelClass?: 'Economy' | 'Premium Economy' | 'Business' | 'First Class';
  hotelPreference?: '3-Star' | '4-Star' | '5-Star' | 'Luxury Resort' | 'None';
  notes?: string;
  uploadedFiles: UploadedDocument[];
  status: RequestStatus;
  createdAt: string;
  updatedAt: string;
  assignedStaff?: {
    name: string;
    department: string;
    email: string;
  };
  timeline: RequestTimelineEvent[];
}

export interface ContactMessage {
  id: string;
  fullName: string;
  email: string;
  phoneNumber: string;
  subject: string;
  message: string;
  createdAt: string;
  status: 'Unread' | 'Read' | 'Responded';
}

export interface FAQItem {
  id: string;
  category: 'general' | 'visa' | 'flights' | 'pilgrimage' | 'policy';
  question: {
    en: string;
    so: string;
    ar: string;
  };
  answer: {
    en: string;
    so: string;
    ar: string;
  };
}

export interface TestimonialItem {
  id: string;
  customerName: string;
  country: string;
  serviceUsed: {
    en: string;
    so: string;
    ar: string;
  };
  review: {
    en: string;
    so: string;
    ar: string;
  };
  rating: number;
  date: string;
  avatar: string;
}

export interface GalleryItem {
  id: string;
  category: 'flights' | 'hotels' | 'tour_packages' | 'pilgrimage' | 'tourist_destinations' | 'travel_experiences';
  title: {
    en: string;
    so: string;
    ar: string;
  };
  location: string;
  image: string;
}

export interface ChatMessage {
  id: string;
  requestId: string;
  sender: 'customer' | 'staff' | 'superadmin';
  senderName: string;
  text: string;
  timestamp: string;
  attachment?: {
    name: string;
    type: string;
    url: string;
    size: number;
  };
  isRead?: boolean;
}

export interface CompanySettings {
  name: string;
  phones: string[];
  email: string;
  address: string;
  workingHours: {
    en: string;
    so: string;
    ar: string;
  };
  emergencyContact: string;
  whatsAppDirect: string;
}
