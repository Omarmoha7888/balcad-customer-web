import express from 'express';
import path from 'path';
import { createServer as createViteServer } from 'vite';

const app = express();
const PORT = 3000;

// Middleware for parsing JSON with generous limit for document attachments
app.use(express.json({ limit: '25mb' }));
app.use(express.urlencoded({ extended: true, limit: '25mb' }));

// In-Memory Database Store (with sample initialized seed data)
interface StoredRequest {
  id: string;
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
  travelClass?: string;
  hotelPreference?: string;
  notes?: string;
  uploadedFiles: {
    id: string;
    name: string;
    size: number;
    type: string;
    docType: string;
    url?: string;
    uploadedAt: string;
  }[];
  status:
    | 'Pending'
    | 'Assigned'
    | 'In Review'
    | 'Waiting for Customer'
    | 'Approved'
    | 'Rejected'
    | 'In Progress'
    | 'Completed'
    | 'Cancelled';
  createdAt: string;
  updatedAt: string;
  assignedStaff?: {
    name: string;
    department: string;
    email: string;
  };
  timeline: {
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
  }[];
}

const customerRequests: StoredRequest[] = [
  {
    id: 'BTA-REQ-2026-89421',
    fullName: 'Abdirahman Sheikh Hassan',
    phoneNumber: '+252 61 5551234',
    whatsAppNumber: '+252 61 5551234',
    email: 'abdirahman.hassan@example.com',
    gender: 'Male',
    dateOfBirth: '1988-04-12',
    nationality: 'Somali',
    country: 'Somalia',
    city: 'Mogadishu',
    passportNumber: 'N10849201',
    passportExpiryDate: '2030-05-18',
    passportIssueDate: '2020-05-19',
    serviceType: 'Spiritual Umrah Packages',
    destinationCountry: 'Saudi Arabia / Makkah & Madinah',
    departureDate: '2026-09-15',
    returnDate: '2026-09-29',
    adults: 2,
    children: 1,
    travelClass: 'Economy Class',
    hotelPreference: '5-Star Luxury',
    notes: 'Please arrange Haram-view rooms in Makkah (Clock Tower) and wheelchair assistance for my mother.',
    uploadedFiles: [
      {
        id: 'file-1',
        name: 'Passport_Abdirahman.pdf',
        size: 1420000,
        type: 'application/pdf',
        docType: 'passport',
        uploadedAt: '2026-08-15T09:30:00Z',
      },
    ],
    status: 'In Review',
    createdAt: '2026-08-15T09:30:00Z',
    updatedAt: '2026-08-16T11:20:00Z',
    assignedStaff: {
      name: 'Ahmed Mohamed Ali',
      department: 'Hajj & Umrah Pilgrimage Desk',
      email: 'ahmed.m@balcadtravel.com',
    },
    timeline: [
      {
        id: 'evt-1',
        timestamp: '2026-08-15T09:30:00Z',
        userName: 'System',
        userRole: 'System',
        action: 'Request Created',
        description: {
          en: 'Travel service request received and registered into Balcad Travel Agency CRM.',
          so: 'Dalabka socdaalka waa la diiwaangeliyay waxaana la geliyay nidaamka CRM ee Balcad Travel.',
          ar: 'تم استلام طلب السفر وتسجيله بنجاح في نظام إدارة العمليات بوكالة بلعد.',
        },
      },
      {
        id: 'evt-2',
        timestamp: '2026-08-15T11:00:00Z',
        userName: 'Super Administrator',
        userRole: 'Super Admin',
        action: 'Officer Assigned',
        description: {
          en: 'Request assigned to Senior Pilgrimage Officer Ahmed Mohamed Ali.',
          so: 'Dalabka waxaa loo xilsaaray Sarkaalka Sare ee Xajka & Cumrada Axmed Maxamed Cali.',
          ar: 'تم تعيين الطلب للأستاذ أحمد محمد علي - مسؤول قسم الحج والعمرة.',
        },
      },
      {
        id: 'evt-3',
        timestamp: '2026-08-16T11:20:00Z',
        userName: 'Ahmed Mohamed Ali',
        userRole: 'Staff',
        action: 'Status Changed to In Review',
        description: {
          en: 'Nusuk visa documents verified. Hotel reservations at Makkah Clock Tower under preliminary hold.',
          so: 'Dukumiintiyada fiisada Nusuk waa la hubiyay. Qolalka hoteelka Makkah Tower boos-qabasho ku meel gaar ah ayaa loo sameeyay.',
          ar: 'تم تدقيق مستندات تأشيرة نسك وتثبيت الحجز المبدئي بفندق أبراج مكة.',
        },
      },
    ],
  },
];

interface StoredContact {
  id: string;
  fullName: string;
  email: string;
  phoneNumber: string;
  subject: string;
  message: string;
  createdAt: string;
  status: 'Unread' | 'Read' | 'Responded';
}

const contactMessages: StoredContact[] = [];

interface ChatMsg {
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
}

const chatDatabase: Record<string, ChatMsg[]> = {
  'BTA-REQ-2026-89421': [
    {
      id: 'msg-1',
      requestId: 'BTA-REQ-2026-89421',
      sender: 'staff',
      senderName: 'Ahmed Mohamed Ali (Pilgrimage Officer)',
      text: 'Asc Mudane Abdirahman! Waxaan helnay dalabkaaga Cumrada. Qolalka aad codsatay ee Xaramka hortaagan iyo gaadiidka gaarka ah ee Jeddah-Makkah waan kuu diyaarinaynaa. Fadlan ma noo soo diri kartaa koobiga baasaboorka labaad?',
      timestamp: '2026-08-16T11:25:00Z',
    },
    {
      id: 'msg-2',
      requestId: 'BTA-REQ-2026-89421',
      sender: 'customer',
      senderName: 'Abdirahman Sheikh Hassan',
      text: 'Waad mahadsan tihiin walaal Ahmed. Hadda ayaan soo gelinayaa baasaboorka hooyaday.',
      timestamp: '2026-08-16T12:05:00Z',
    },
  ],
};

// Helper: Generate Unique Request ID
function generateRequestId(): string {
  const year = new Date().getFullYear();
  const randomDigits = Math.floor(10000 + Math.random() * 90000);
  return `BTA-REQ-${year}-${randomDigits}`;
}

// -------------------------------------------------------------
// REST API ENDPOINTS
// -------------------------------------------------------------

// 1. Health check
app.get('/api/health', (req, res) => {
  res.json({
    status: 'ok',
    agency: 'Balcad Travel Agency',
    environment: process.env.NODE_ENV || 'development',
    timestamp: new Date().toISOString(),
  });
});

// 2. Company & Website Settings
app.get('/api/settings', (req, res) => {
  res.json({
    companyName: 'Balcad Travel Agency',
    phones: ['+252 61 2483838', '+252 61 2141414'],
    email: 'balcadtravel@gmail.com',
    emergencyPhone: '+252 61 2483838',
    whatsappNumber: '+252 61 2483838',
    officeAddress: 'Main Airport Road & KM4 Commercial District, Mogadishu, Somalia',
    workingHours: {
      en: 'Saturday – Thursday: 8:00 AM – 9:00 PM | Friday: 2:00 PM – 9:00 PM',
      so: 'Sabti – Khamiis: 8:00 AM – 9:00 PM | Jimco: 2:00 PM – 9:00 PM',
      ar: 'السبت – الخميس: 8:00 ص – 9:00 م | الجمعة: 2:00 م – 9:00 م',
    },
  });
});

// 3. Submit Customer Request (Core endpoint)
app.post('/api/requests', (req, res) => {
  try {
    const {
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
    } = req.body;

    // Strict Validation
    if (!fullName || typeof fullName !== 'string' || fullName.trim().length < 3) {
      return res.status(400).json({ error: 'Full name is required and must have at least 3 characters.' });
    }
    if (!phoneNumber || typeof phoneNumber !== 'string' || phoneNumber.trim().length < 5) {
      return res.status(400).json({ error: 'A valid international phone number is required.' });
    }
    if (!email || typeof email !== 'string' || !email.includes('@')) {
      return res.status(400).json({ error: 'A valid email address is required.' });
    }
    if (!passportNumber || typeof passportNumber !== 'string' || passportNumber.trim().length < 2) {
      return res.status(400).json({ error: 'Passport number cannot be empty.' });
    }
    if (!departureDate) {
      return res.status(400).json({ error: 'Departure date is required.' });
    }

    const newRequestId = generateRequestId();
    const nowIso = new Date().toISOString();

    const newRequest: StoredRequest = {
      id: newRequestId,
      fullName: fullName.trim(),
      phoneNumber: phoneNumber.trim(),
      whatsAppNumber: whatsAppNumber ? whatsAppNumber.trim() : undefined,
      email: email.trim().toLowerCase(),
      gender: gender || 'Male',
      dateOfBirth: dateOfBirth || '',
      nationality: nationality || 'Somali',
      country: country || 'Somalia',
      city: city || 'Mogadishu',
      passportNumber: passportNumber.trim().toUpperCase(),
      passportExpiryDate: passportExpiryDate || '',
      passportIssueDate: passportIssueDate || '',
      serviceType: serviceType || 'International Flight Booking',
      destinationCountry: destinationCountry || 'Worldwide',
      departureDate,
      returnDate: returnDate || '',
      adults: Number(adults) || 1,
      children: Number(children) || 0,
      travelClass: travelClass || 'Economy Class',
      hotelPreference: hotelPreference || 'None',
      notes: notes ? notes.trim() : '',
      uploadedFiles: Array.isArray(uploadedFiles) ? uploadedFiles : [],
      status: 'Pending',
      createdAt: nowIso,
      updatedAt: nowIso,
      timeline: [
        {
          id: `evt-${Date.now()}-1`,
          timestamp: nowIso,
          userName: 'Customer',
          userRole: 'Customer',
          action: 'Request Submitted',
          description: {
            en: 'Travel service request submitted by customer and queued for travel specialist assignment.',
            so: 'Dalabka socdaalka waxaa si guul leh u gudbiyay macmiilka waxaana loo gudbiyay shaqaalaha.',
            ar: 'تم تقديم طلب السفر بنجاح وهو الآن بانتظار تعيين مسؤول الحجوزات.',
          },
        },
      ],
    };

    customerRequests.unshift(newRequest);

    // Initialize chat thread for this request
    chatDatabase[newRequestId] = [
      {
        id: `msg-${Date.now()}`,
        requestId: newRequestId,
        sender: 'staff',
        senderName: 'Balcad Travel Automated Desk',
        text: `Welcome ${fullName}! Your request ${newRequestId} has been logged in our system. A certified travel officer will review your requirements and reach out to you directly. You can leave questions here anytime.`,
        timestamp: nowIso,
      },
    ];

    return res.status(201).json({
      success: true,
      message: 'Your request has been submitted successfully. Our team will contact you as soon as possible. Thank you for choosing Balcad Travel Agency.',
      data: {
        requestId: newRequestId,
        fullName: newRequest.fullName,
        serviceType: newRequest.serviceType,
        destinationCountry: newRequest.destinationCountry,
        departureDate: newRequest.departureDate,
        createdAt: newRequest.createdAt,
        status: newRequest.status,
      },
    });
  } catch (err: any) {
    console.error('Error submitting request:', err);
    return res.status(500).json({ error: 'Failed to process request. Please try again later.' });
  }
});

// 4. Lookup Single Request by ID (For customer tracker and CRM)
app.get('/api/requests/:id', (req, res) => {
  const reqId = req.params.id?.trim().toUpperCase();
  const found = customerRequests.find(
    (r) =>
      r.id.toUpperCase() === reqId ||
      r.passportNumber.toUpperCase() === reqId ||
      r.phoneNumber.replace(/[\s+-]/g, '').includes(reqId.replace(/[\s+-]/g, ''))
  );

  if (!found) {
    return res.status(404).json({
      error: 'No travel request found matching this Request ID or phone number.',
    });
  }

  res.json({
    success: true,
    request: found,
  });
});

// 5. Get All Requests (Supports filters for status, search)
app.get('/api/requests', (req, res) => {
  const { status, search } = req.query;
  let filtered = [...customerRequests];

  if (status && typeof status === 'string' && status !== 'all') {
    filtered = filtered.filter((r) => r.status.toLowerCase() === status.toLowerCase());
  }

  if (search && typeof search === 'string') {
    const q = search.toLowerCase();
    filtered = filtered.filter(
      (r) =>
        r.id.toLowerCase().includes(q) ||
        r.fullName.toLowerCase().includes(q) ||
        r.email.toLowerCase().includes(q) ||
        r.passportNumber.toLowerCase().includes(q) ||
        r.phoneNumber.includes(q) ||
        r.serviceType.toLowerCase().includes(q) ||
        r.destinationCountry.toLowerCase().includes(q)
    );
  }

  res.json({
    total: filtered.length,
    requests: filtered,
  });
});

// 6. Submit Contact Form Message
app.post('/api/contact', (req, res) => {
  try {
    const { fullName, email, phoneNumber, subject, message } = req.body;

    if (!fullName || !email || !message) {
      return res.status(400).json({ error: 'Please provide name, email, and message.' });
    }

    const newContact: StoredContact = {
      id: `MSG-${Date.now()}`,
      fullName: fullName.trim(),
      email: email.trim().toLowerCase(),
      phoneNumber: phoneNumber ? phoneNumber.trim() : '',
      subject: subject ? subject.trim() : 'General Inquiry',
      message: message.trim(),
      createdAt: new Date().toISOString(),
      status: 'Unread',
    };

    contactMessages.unshift(newContact);

    res.status(201).json({
      success: true,
      message: 'Thank you! Your message has been sent to Balcad Travel Agency. Our team will contact you shortly.',
      id: newContact.id,
    });
  } catch (err: any) {
    res.status(500).json({ error: 'Failed to send message.' });
  }
});

// 7. Get Contact Messages
app.get('/api/contact', (req, res) => {
  res.json({
    total: contactMessages.length,
    messages: contactMessages,
  });
});

// 8. Chat history for a request
app.get('/api/chat/:requestId', (req, res) => {
  const reqId = req.params.requestId?.trim().toUpperCase();
  const messages = chatDatabase[reqId] || [];
  res.json({
    requestId: reqId,
    messages,
  });
});

// 9. Send chat message
app.post('/api/chat/message', (req, res) => {
  try {
    const { requestId, sender, senderName, text, attachment } = req.body;

    if (!requestId || !text) {
      return res.status(400).json({ error: 'RequestId and text are required.' });
    }

    const cleanReqId = requestId.trim().toUpperCase();
    if (!chatDatabase[cleanReqId]) {
      chatDatabase[cleanReqId] = [];
    }

    const newMsg: ChatMsg = {
      id: `msg-${Date.now()}-${Math.random().toString(36).substring(2, 6)}`,
      requestId: cleanReqId,
      sender: sender || 'customer',
      senderName: senderName || 'Customer',
      text: text.trim(),
      timestamp: new Date().toISOString(),
      attachment,
    };

    chatDatabase[cleanReqId].push(newMsg);

    // If customer sent message, simulate instant acknowledgement if no staff reply yet
    if (sender === 'customer') {
      setTimeout(() => {
        if (chatDatabase[cleanReqId]) {
          chatDatabase[cleanReqId].push({
            id: `msg-auto-${Date.now()}`,
            requestId: cleanReqId,
            sender: 'staff',
            senderName: 'Balcad Travel Support',
            text: 'Thank you for your update. Your assigned travel officer has been notified and will review your message.',
            timestamp: new Date().toISOString(),
          });
        }
      }, 1500);
    }

    res.status(201).json({
      success: true,
      message: newMsg,
    });
  } catch (err: any) {
    res.status(500).json({ error: 'Failed to send chat message.' });
  }
});

// -------------------------------------------------------------
// Vite Middleware setup for development & SPA fallback for production
// -------------------------------------------------------------
async function startServer() {
  if (process.env.NODE_ENV !== 'production') {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Balcad Travel Agency Server running on http://0.0.0.0:${PORT}`);
  });
}

startServer();
