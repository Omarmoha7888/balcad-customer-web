import { ServiceItem } from '../types';

export const servicesData: ServiceItem[] = [
  {
    id: 'flight-booking',
    category: 'flight',
    icon: 'Plane',
    image: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=1200&q=80',
    name: {
      en: 'International Flight Booking',
      so: 'Dalbashada Duulimaadyada Caalamiga',
      ar: 'حجز تذاكر الطيران الدولي',
    },
    shortDescription: {
      en: 'Direct & connecting flights across premier international airlines with priority seating and flexible baggage allowances.',
      so: 'Duulimaadyo toos ah iyo kuwo isku xiran oo leh shirkadaha diyaaradaha ugu waaweyn caalamka.',
      ar: 'رحلات مباشرة وترانزيت عبر كبرى خطوط الطيران العالمية مع مقاعد مميزة وأوزان أمتعة مريحة.',
    },
    fullDescription: {
      en: 'Balcad Travel Agency coordinates international and regional flights with leading carriers including Turkish Airlines, Qatar Airways, Emirates, Ethiopian Airlines, flydubai, and Daallo Airlines. We secure optimal routing, corporate fares, layover assistance, and customized group arrangements.',
      so: 'Balcad Travel Agency waxay kugu xireysaa diyaaradaha ugu caansan adduunka sida Turkish Airlines, Qatar Airways, Emirates, iyo Ethiopian Airlines iyadoo ku siinaysa qiimeeyn hufan iyo kuraas raaxo leh.',
      ar: 'توفر وكالة بلعد للسفريات أفضل حجوزات الطيران عبر أرقى الناقلات الجوية العالمية مع تسهيل إجراءات الترانزيت واختيار المقاعد وتنسيق رحلات الأفراد والمجموعات.',
    },
    benefits: {
      en: [
        'Access to exclusive negotiated airline fares',
        '24/7 rebooking & emergency schedule change support',
        'Direct coordination with airline dispatchers for transit care',
        'Assistance with special dietary meals & wheelchair requests',
      ],
      so: [
        'Helitaanka qiimo jaban oo gaar ah',
        'Caawinaad 24/7 haddii duulimaadku isbeddelo',
        'Isku xirka tooska ah ee shaqaalaha garoonka',
        'Dalbashada kuraasta gaarka ah iyo cuntada',
      ],
      ar: [
        'الحصول على أفضل أسعار الطيران التفاوضية',
        'دعم متواصل على مدار 24/7 لتعديل وإعادة جدولة الرحلات',
        'تنسيق مباشر مع موظفي المطارات لتسهيل الترانزيت',
        'طلب الوجبات الخاصة وخدمات الكراسي المتحركة',
      ],
    },
    requiredDocuments: {
      en: [
        'Valid Passport copy (minimum 6 months validity)',
        'Destination visa or resident permit (if applicable)',
        'Preferred departure & return dates',
        'Passenger names matching passport spelling exactly',
      ],
      so: [
        'Koobiga baasaboorka (ugu yaraan 6 bilood ka dhiman tahay)',
        'Fiisada dalka aad u socoto ama deganaansho',
        'Taariikhaha aad rabto inaad baxdo oo sax ah',
        'Magaca oo u qoran sida baasaboorka ku qoran',
      ],
      ar: [
        'صورة جواز سفر ساري المفعول (صلاحية 6 أشهر على الأقل)',
        'تأشيرة الدخول للدولة المستقبلة أو الإقامة (إن وجدت)',
        'تواريخ السفر والعودة المفضلة',
        'تطابق الأسماء باللغة الإنجليزية مع جواز السفر',
      ],
    },
    processingTime: {
      en: 'Instant quote within 30–60 minutes',
      so: 'Xaqiijin 30–60 daqiiqo gudaheed',
      ar: 'تأكيد الحجز خلال 30 إلى 60 دقيقة',
    },
    faqs: [
      {
        question: {
          en: 'Can I request multiple stopovers or open-jaw tickets?',
          so: 'Ma codsan karaa duulimaad dhowr magaalo sii maraya?',
          ar: 'هل يمكنني طلب رحلات متعددة الوجهات أو التوقفات؟',
        },
        answer: {
          en: 'Yes, our travel specialists build customized multi-city itineraries tailored to your schedule.',
          so: 'Haa, waxaan kuu qorsheyn karnaa duulimaad dhowr dal ama magaalo sii maraya.',
          ar: 'نعم، يقوم مستشارونا بتصميم مسارات سفر مخصصة تتضمن عدة محطات وتوقفات حسب رغبتك.',
        },
      },
    ],
  },
  {
    id: 'tourist-visa',
    category: 'visa',
    icon: 'FileCheck',
    image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1200&q=80',
    name: {
      en: 'Tourist Visa Processing',
      so: 'Soo Saarista Fiisada Dalxiiska',
      ar: 'معالجة تأشيرات السياحة',
    },
    shortDescription: {
      en: 'Express tourist visa facilitation for Dubai (UAE), Turkey, Saudi Arabia, Egypt, Malaysia, Schengen, and Kenya.',
      so: 'Adeeg degdeg ah oo lagu soo saaro fiisada dalxiiska ee Dubai, Turkiga, Sacuudiga, Masar, iyo Yurub.',
      ar: 'إصدار سريع لتأشيرات السياحة لدبي، تركيا، السعودية، مصر، ماليزيا، دول الشنغن، وكينيا.',
    },
    fullDescription: {
      en: 'Our dedicated visa processing department ensures flawless compliance with international consulate regulations. We assist with application verification, invitation letters, biometric appointment booking, and embassy submission.',
      so: 'Qaybta fiisooyinka ee Balcad Travel waxay si sax ah u hubisaa dhammaan dukumiintiyada qunsuliyadaha si aad fiisadaada u hesho adigoo aan dhibaato la kulmin.',
      ar: 'يتولى قسم التأشيرات في وكالة بلعد تدقيق كافة المتطلبات والشروط القنصلية، وحجز مواعيد البصمة، وتجهيز خطابات الدعوة لضمان صدور التأشيرة بسلاسة.',
    },
    benefits: {
      en: [
        'Consular pre-check to eliminate application errors',
        'Fast-track submission through certified channels',
        'Official embassy appointment reservation',
        'Real-time status updates via SMS & Email',
      ],
      so: [
        'Hubin buuxda si looga fogaado qaladaadka',
        'Gudbinta degdegga ah ee safaaradaha',
        'Qabsashada ballanta safaaradda',
        'La-socodka xaaladda fiisada',
      ],
      ar: [
        'مراجعة قنصلية مسبقة لتفادي أي أخطاء أو رفض',
        'مسار تقديم سريع عبر القنوات المعتمدة',
        'حجز مواعيد المقابلات والبصمة في السفارات',
        'تحديثات فورية لحالة التأشيرة عبر الرسائل والبريد',
      ],
    },
    requiredDocuments: {
      en: [
        'Passport scan with at least 6 months validity',
        'Recent white background passport photograph (high resolution)',
        'Bank statement / financial proof (where required by consulate)',
        'Flight itinerary reservation & hotel accommodation proof',
      ],
      so: [
        'Koobiga baasaboorka oo cad',
        'Sawir baasaboor oo cusub oo asal ah (cad)',
        'Warqadda bangiga (haddii safaaraddu rabto)',
        'Boos-qabsashada hoteelka iyo duulimaadka',
      ],
      ar: [
        'صورة واضحة لجواز السفر بصلاحية 6 أشهر كحد أدنى',
        'صورة شخصية حديثة بخلفية بيضاء عالية الدقة',
        'كشف حساب بنكي (للدول التي تشترط ذلك)',
        'حجز مبدئي للطيران والفندق',
      ],
    },
    processingTime: {
      en: '24 hours for eVisa (UAE/Saudi) | 5–10 days for Embassy Stickers',
      so: '24 saac fiisada elektarooniga ah | 5-10 maalmood safaaradaha',
      ar: '24 ساعة للتأشيرة الإلكترونية | 5-10 أيام لمعاملات السفارات',
    },
    faqs: [
      {
        question: {
          en: 'What if my passport expires soon?',
          so: 'Maxaan sameeyaa haddii baasaboorkeygu dhowaan dhacayo?',
          ar: 'ماذا أفعل إذا قارب جواز سفري على الانتهاء؟',
        },
        answer: {
          en: 'Most consulates require a minimum of 6 months validity from travel date. We can advise on renewal procedures.',
          so: 'Inta badan waddamadu waxay rabaan 6 bilood ugu yaraan.',
          ar: 'تشترط معظم الدول صلاحية 6 أشهر على الأقل. يمكننا إرشادك لإجراءات التجديد أولاً.',
        },
      },
    ],
  },
  {
    id: 'business-visa',
    category: 'visa',
    icon: 'Briefcase',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80',
    name: {
      en: 'Business & Commercial Visa',
      so: 'Fiisada Ganacsiga & Shirarka',
      ar: 'تأشيرات رجال الأعمال والتجارة',
    },
    shortDescription: {
      en: 'Priority corporate and business visas for trade conferences, meetings, commercial ventures, and investor visits.',
      so: 'Fiisooyinka ganacsiga, shirarka caalamiga ah, iyo booqashooyinka shirkadaha.',
      ar: 'تأشيرات مخصصة لرجال الأعمال والمستثمرين والمشاركة في المعارض والمؤتمرات الدولية.',
    },
    fullDescription: {
      en: 'We assist company executives, entrepreneurs, and delegations in acquiring official business visas with authenticated invitation letters, commercial documentation, and chamber of commerce endorsements.',
      so: 'Waxaan ganacsatada iyo shirkadaha ka caawinaa helitaanka fiisooyinka ganacsiga iyadoo la raacayo shuruucda shirkadaha martiqaadka iyo rugaha ganacsiga.',
      ar: 'نوفر حلولاً متكاملة للشركات والوفود التجارية لاستخراج تأشيرات الزيارة التجارية وتوثيق خطابات الدعوة والاعتمادات الرسمية.',
    },
    benefits: {
      en: [
        'Dedicated corporate concierge representative',
        'Official invitation letter authentication support',
        'Express embassy appointment scheduling',
        'Multi-entry options for frequent travelers',
      ],
      so: [
        'Wakiil gaar ah oo shirkadaha u qaabilsan',
        'Hubinta warqadaha martiqaadka rasmiga ah',
        'Ballan safaaradeed oo degdeg ah',
        'Fiisooyin dhowr jeer lagu geli karo dalka',
      ],
      ar: [
        'مسؤول حسابات مخصص لتنسيق معاملات الشركات',
        'توثيق ومتابعة خطابات الدعوة التجارية الرسمية',
        'مواعيد سفارة عاجلة لكبار الشخصيات',
        'إمكانية إصدار تأشيرات متعددة السفرات',
      ],
    },
    requiredDocuments: {
      en: [
        'Passport valid for at least 6 months',
        'Host company invitation letter / Trade license copy',
        'Company introductory letter',
        'Recent biometric photographs',
      ],
      so: [
        'Baasaboor sax ah oo shaqeynaya',
        'Warqad martiqaad oo shirkadda kale ka timid',
        'Warqadda aqoonsiga shirkaddaada',
        'Sawirro baasaboor oo cad',
      ],
      ar: [
        'جواز سفر صالح لمدة 6 أشهر على الأقل',
        'خطاب دعوة من الشركة المستضيفة والسجل التجاري',
        'خطاب تعريف من جهة العمل',
        'صور شخصية حديثة للمسافر',
      ],
    },
    processingTime: {
      en: '3–7 working days',
      so: '3-7 maalmood oo shaqo ah',
      ar: 'من 3 إلى 7 أيام عمل',
    },
    faqs: [],
  },
  {
    id: 'student-visa',
    category: 'visa',
    icon: 'GraduationCap',
    image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1200&q=80',
    name: {
      en: 'Student & Academic Visa',
      so: 'Fiisada Waxbarashada & Ardayda',
      ar: 'تأشيرات الدراسة والقبول الجامعي',
    },
    shortDescription: {
      en: 'Complete guidance for students traveling to Turkey, Malaysia, UK, Egypt, India, and UAE universities.',
      so: 'Caawinaad buuxda oo loogu talagalay ardayda u socota jaamacadaha Turkiga, Malaysia, Masar, iyo Yurub.',
      ar: 'إرشاد متكامل للطلاب الراغبين بالدراسة في جامعات تركيا، ماليزيا، بريطانيا، مصر، والإمارات.',
    },
    fullDescription: {
      en: 'We guide students through every step of study permit applications: admission letter verification, equivalency documentation, medical examinations, financial sponsorships, and embassy interview preparation.',
      so: 'Waxaan ardayda ka caawinaa warqadaha aqbalaadda jaamacadda, hubinta shahaadooyinka, ballamaha safaaradda, iyo u diyaar-garowga wareysiga.',
      ar: 'نساعد الطلاب في تجهيز ملف التأشيرة الدراسية بالكامل: تصديق القبولات الجامعية، الفحص الطبي، كفالات الدعم المالي، والتدريب على مقابلة السفارة.',
    },
    benefits: {
      en: [
        'University admission & scholarship document review',
        'Student flight discounts with extra baggage allowance',
        'Embassy interview coaching and question preparation',
      ],
      so: [
        'Hubinta warqadaha jaamacadda iyo deeqaha waxbarasho',
        'Qiimo dhimis tikidhada ardayda iyo kiilooyin dheeraad ah',
        'U tababarka wareysiga safaaradda',
      ],
      ar: [
        'تدقيق وثائق القبول الجامعي والمنح الدراسية',
        'تخفيضات خاصة على تذاكر الطلاب وأوزان إضافية',
        'جلسات إرشاد وتأهيل لمقابلة القنصلية',
      ],
    },
    requiredDocuments: {
      en: [
        'Official University Acceptance / Admission Letter',
        'Original Academic Certificates & Transcripts',
        'Financial Affidavit / Sponsorship proof',
        'Medical clearance certificate',
      ],
      so: [
        'Warqadda aqbalaadda jaamacadda',
        'Shahaadooyinka asalka ah ee dugsiga/jaamacadda',
        'Warqadda dammaanadda dhaqaalaha',
        'Warqadda caafimaadka',
      ],
      ar: [
        'خطاب القبول الجامعي الرسمي',
        'الشهادات الدراسية وكشوف الدرجات المعتمدة',
        'إثبات الضمان المالي أو كشف حساب الكفيل',
        'شهادة الفحص الطبي المعتمدة',
      ],
    },
    processingTime: {
      en: '2–4 weeks depending on university & country',
      so: '2-4 toddobaad iyadoo ku xiran dalka',
      ar: 'من أسبوعين إلى 4 أسابيع بحسب الدولة',
    },
    faqs: [],
  },
  {
    id: 'medical-visa',
    category: 'visa',
    icon: 'Stethoscope',
    image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1200&q=80',
    name: {
      en: 'Medical Treatment Visa',
      so: 'Fiisada Daawaynta Caafimaadka',
      ar: 'تأشيرات العلاج الطبي والرعاية الصحية',
    },
    shortDescription: {
      en: 'Fast-track urgent medical visas for Turkey, India, UAE, and Egypt with hospital appointment coordination.',
      so: 'Fiisooyin degdeg ah oo daaweyn loogu aadayo Turkiga, Hindiya, UAE, iyo Masar oo leh ballan isbitaal.',
      ar: 'تأشيرات علاجية عاجلة للهند، تركيا، الإمارات، ومصر مع التنسيق المباشر مع أرقى المستشفيات.',
    },
    fullDescription: {
      en: 'When health cannot wait, our urgent medical desk fast-tracks visa issuance, coordinates official hospital invitation letters, medical escorts, and airport ambulance transfers.',
      so: 'Qaybta caafimaadka ee Balcad Travel waxay si degdeg ah u soo saartaa fiisada bukaanka iyo wehelka, iyadoo toos ula xiriirta isbitaallada caalamiga ah.',
      ar: 'نوفر قسماً خاصاً للحالات العلاجية الطارئة لسرعة استخراج التأشيرة للمريض والمرافق وتنسيق خطابات المستشفى واستقبال الإسعاف بالمطار.',
    },
    benefits: {
      en: [
        'Priority emergency expedited embassy processing',
        'Direct hospital invitation & doctor consultation matching',
        'Companion / medical attendant visa synchronization',
        'Airport ambulance and stretcher flight coordination',
      ],
      so: [
        'Gudbin degdeg ah oo safaaradda ah',
        'Isku xirka isbitaalka iyo dhakhaatiirta',
        'Fiisada wehelka bukaanka oo la socota',
        'Gaadiidka gaarka ah ee bukaanka',
      ],
      ar: [
        'تسريع فوري واستثنائي لدى القنصليات للحالات العاجلة',
        'تنسيق خطابات المستشفيات ومواعيد كبار الأطباء',
        'إصدار تأشيرات المرافقين بالتزامن مع المريض',
        'تجهيز خدمات الاستقبال الطبي في المطار',
      ],
    },
    requiredDocuments: {
      en: [
        'Local doctor / hospital referral report',
        'Passport copies of patient & traveling companions',
        'Destination hospital invitation & appointment letter',
      ],
      so: [
        'Warbixinta caafimaad ee dhakhtarka',
        'Baasaboorka bukaanka iyo qofka la socda',
        'Warqadda ballanta isbitaalka dibadda',
      ],
      ar: [
        'التقرير الطبي المحلي المعتمد',
        'جواز سفر المريض والمرافقين',
        'خطاب القبول والموعد من المستشفى الدولي',
      ],
    },
    processingTime: {
      en: '24–72 hours for urgent cases',
      so: '24-72 saacadood xaaladaha degdegga ah',
      ar: 'من 24 إلى 72 ساعة للحالات الطارئة',
    },
    faqs: [],
  },
  {
    id: 'family-visit-visa',
    category: 'visa',
    icon: 'Users',
    image: 'https://images.unsplash.com/photo-1511895426328-dc8714191300?auto=format&fit=crop&w=1200&q=80',
    name: {
      en: 'Family Visit Visa',
      so: 'Fiisada Booqashada Qoyska',
      ar: 'تأشيرات الزيارة العائلية',
    },
    shortDescription: {
      en: 'Reunite with relatives abroad with hassle-free family sponsorship and visit visa issuance.',
      so: 'Ku biir qoyskaaga iyo qaraabadaada dibadda ku nool adigoo helaya fiiso booqasho oo fudud.',
      ar: 'التقِ بعائلتك وأقاربك في الخارج بسهولة مع خدمات إصدار تأشيرات الزيارة العائلية.',
    },
    fullDescription: {
      en: 'We assist with family visit visas for parents, spouses, and children to destinations worldwide, managing kinship verification, sponsorship attestations, and travel insurance.',
      so: 'Waxaan kuu fududeyneynaa fiisooyinka booqashada ehelka ee waddamada Khaliijka, Yurub, iyo waddamada dariska ah.',
      ar: 'نساعدك في استخراج تأشيرات زيارة الوالدين والزوجة والأبناء لمختلف دول العالم مع توثيق صلة القرابة ومتطلبات الإقامة.',
    },
    benefits: {
      en: [
        'Family group application synchronization',
        'Multi-entry options for frequent family visits',
        'Affordable travel medical insurance coverage included',
      ],
      so: [
        'Gudbinta hal mar ee qoyska oo dhan',
        'Fiiso dhowr jeer lagu booqan karo',
        'Caymiska caafimaadka socdaalka',
      ],
      ar: [
        'تقديم موحد لكافة أفراد العائلة في ملف واحد',
        'خيارات الدخول المتعدد لزيارات متكررة',
        'توفير تأمين السفر الطبي المعتمد',
      ],
    },
    requiredDocuments: {
      en: [
        'Passports of all traveling family members',
        'Sponsorship / Invitation from resident host',
        'Proof of kinship (Marriage/Birth certificate)',
      ],
      so: [
        'Baasaboorrada dhammaan xubnaha qoyska',
        'Warqadda martiqaadka ehelka degan dibadda',
        'Warqadaha caddeynta qaraabonimada',
      ],
      ar: [
        'جوازات سفر جميع أفراد الأسرة المسافرين',
        'إثبات إقامة ودعوة المستضيف في الدولة المقصودة',
        'شهادات الميلاد أو الزواج لإثبات صلة القرابة',
      ],
    },
    processingTime: {
      en: '3–7 working days',
      so: '3-7 maalmood oo shaqo ah',
      ar: 'من 3 إلى 7 أيام عمل',
    },
    faqs: [],
  },
  {
    id: 'work-transit-visas',
    category: 'visa',
    icon: 'FileBadge',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1200&q=80',
    name: {
      en: 'Work & Transit Visas',
      so: 'Fiisada Shaqada & Transit-ka',
      ar: 'تأشيرات العمل والعبور (الترانزيت)',
    },
    shortDescription: {
      en: 'Employment visa facilitation and transit stopover visas for seamless international stopovers.',
      so: 'Adeegyada fiisada shaqada dibadda iyo fiisooyinka transit-ka ee garoomada.',
      ar: 'تسهيل معاملات تأشيرات العمل وإصدار تأشيرات الترانزيت للتوقف في المطارات الدولية.',
    },
    fullDescription: {
      en: 'We handle work visa embassy attestations and rapid transit visas for layovers in Dubai, Doha, Istanbul, Addis Ababa, and Cairo, ensuring passengers never miss their connecting flight.',
      so: 'Waxaan maareynaa dukumiintiyada shaqada iyo fiisooyinka transit-ka ee safarka dhexe si aanay duulimaadyadaadu u lumin.',
      ar: 'نتولى تصديق عقود العمل ومعاملات السفارات، بالإضافة لتأشيرات التوقف السريعة في دبي والدوحة وإسطنبول وأديس أبابا والقاهرة.',
    },
    benefits: {
      en: [
        'Contract and degree consular attestation support',
        'Stopover hotel packages included with transit visas',
        'Express delivery of approved permits',
      ],
      so: [
        'Shahaadooyinka iyo heshiisyada shaqada oo la ansixiyo',
        'Hoteel ku jira fiisada transit-ka',
        'Soo saaris degdeg ah',
      ],
      ar: [
        'تصديق عقود العمل والشهادات لدى القنصليات',
        'توفير باقات الفنادق مع تأشيرة الترانزيت',
        'تسليم سريع وسلس للتأشيرات المعتمدة',
      ],
    },
    requiredDocuments: {
      en: [
        'Passport (valid 6+ months)',
        'Employment offer / Contract (for work visa)',
        'Confirmed onward flight ticket (for transit visa)',
      ],
      so: [
        'Baasaboor sax ah',
        'Heshiiska shaqada (fiisada shaqada)',
        'Tikidha duulimaadka xiga (transit)',
      ],
      ar: [
        'جواز سفر صالح لمدة 6 أشهر فأكثر',
        'عقد العمل الرسمي المعتمد (لتأشيرات العمل)',
        'تذكرة الطيران المؤكدة للمحطة التالية (لتأشيرات الترانزيت)',
      ],
    },
    processingTime: {
      en: 'Transit: 12–24 hrs | Work: 2–3 weeks',
      so: 'Transit: 12-24 saac | Shaqo: 2-3 toddobaad',
      ar: 'الترانزيت: 12-24 ساعة | العمل: أسبوعين إلى 3 أسابيع',
    },
    faqs: [],
  },
  {
    id: 'umrah-packages',
    category: 'pilgrimage',
    icon: 'Moon',
    image: 'https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?auto=format&fit=crop&w=1200&q=80',
    name: {
      en: 'Spiritual Umrah Packages',
      so: 'Xirmooyinka Barakeysan Ee Cumrada',
      ar: 'باقات العمرة المباركة المتميزة',
    },
    shortDescription: {
      en: 'Complete Umrah arrangements: electronic Nusuk visas, direct flights, 5-star Haram hotels, and guided ziyarat.',
      so: 'Adeeg buuxa oo Cumro: fiisada Nusuk, duulimaad toos ah, hoteello u dhow Xaramka, iyo booqashada goobaha taariikhiga ah.',
      ar: 'تنظيم متكامل لرحلات العمرة: تأشيرة نسك الإلكترونية، طيران مباشر، فنادق مطلة على الحرم، وزيارات مزارات مكة والمدينة.',
    },
    fullDescription: {
      en: 'Balcad Travel Agency is honored to guide pilgrims to Makkah and Madinah with curated spiritual packages. We provide 5-star and 4-star hotels within walking distance of the Holy Mosques, private VIP transport, knowledgeable religious guides, and rawdah permits.',
      so: 'Balcad Travel Agency waxay sharaf u tahay inay kugu hagto Xaramka barakeysan ee Makka iyo Madiina iyadoo ku siinaysa hoteello u dhow Xaramka, gaadiid casri ah, iyo hagayaal cibaadada ku caawiya.',
      ar: 'تتشرف وكالة بلعد للسفريات بخدمة ضيوف الرحمن عبر باقات عمرة راقية تشمل فنادق قريبة من الحرم المكي والنبوي الشريف، وتنقلات VIP، وإصدار تصاريح الروضة الشريفة.',
    },
    benefits: {
      en: [
        'Official Saudi Nusuk Umrah Visa issuing',
        'Luxury hotels near King Abdulaziz Gate & Clock Tower',
        'Private VIP GMC / Luxury Bus transfers between Jeddah, Makkah, and Madinah',
        'Guided historical Ziyarat tours in Makkah & Madinah',
      ],
      so: [
        'Soo saarista fiisada rasmiga ah ee Nusuk',
        'Hoteello raaxo leh oo u dhow Xaramka',
        'Gaadiid VIP ah oo u dhexeeya Jeddah, Makka, iyo Madiina',
        'Booqashada goobaha taariikhiga ah ee Makka iyo Madiina',
      ],
      ar: [
        'إصدار تأشيرات العمرة الرسمية عبر منصة نسك',
        'فنادق راقية مطلة وعلى بعد خطوات من الحرمين الشريفين',
        'تنقلات فاخرة بسيارات GMC وحافلات VIP بين جدة ومكة والمدينة',
        'جولات مزارات دينية وتاريخية بصحبة مرشدين متخصصين',
      ],
    },
    requiredDocuments: {
      en: [
        'Passport copy (valid 6+ months)',
        'Clear passport size photo with white background',
        'Preferred departure period & room type (Single, Double, Quad)',
      ],
      so: [
        'Koobiga baasaboorka (6 bilood ugu yaraan)',
        'Sawir baasaboor oo cad',
        'Xilliga aad rabto inaad baxdo iyo nooca qolka',
      ],
      ar: [
        'صورة جواز السفر (صلاحية 6 أشهر فأكثر)',
        'صورة شخصية واضحة بخلفية بيضاء',
        'تحديد تاريخ السفر ونوع الغرفة (مفردة، ثنائية، رباعية)',
      ],
    },
    processingTime: {
      en: '24–48 hours for visa & confirmation',
      so: '24-48 saacadood fiisada iyo xaqiijinta',
      ar: 'من 24 إلى 48 ساعة للتأشيرة وتأكيد الحجز',
    },
    faqs: [
      {
        question: {
          en: 'Are meals included in the Umrah package?',
          so: 'Cuntadu ma ku jirtaa xirmada Cumrada?',
          ar: 'هل تشمل باقة العمرة وجبات الإفطار والسحور؟',
        },
        answer: {
          en: 'Yes, we offer both Bed & Breakfast and Full Board luxury dining options upon request.',
          so: 'Haa, waxaad dooran kartaa quraac kaliya ama dhammaan cuntada maalinlaha ah.',
          ar: 'نعم، نوفر خيارات تشمل وجبة الإفطار أو إقامة كاملة مع بوفيه فاخر حسب طلبك.',
        },
      },
    ],
  },
  {
    id: 'hajj-packages',
    category: 'pilgrimage',
    icon: 'Sun',
    image: 'https://images.unsplash.com/photo-1564769625905-50e93615e769?auto=format&fit=crop&w=1200&q=80',
    name: {
      en: 'Comprehensive Hajj Packages',
      so: 'Xirmooyinka Dhameystiran Ee Xajka',
      ar: 'باقات الحج الشاملة المعتمدة',
    },
    shortDescription: {
      en: 'Exclusive full-service Hajj packages with air-conditioned Mina & Arafat camps, dedicated scholars, and VIP logistics.',
      so: 'Xirmooyin heer sare ah oo Xajka ah oo leh teendhooyin qaboojiye leh oo Mina & Carafo ah iyo culimo ku hagi doonta.',
      ar: 'باقات حج متكاملة تشمل مخيمات مكيفة ومجهزة في منى وعرفة مع إرشاد ديني من كبار العلماء وخدمات لوجستية فاخرة.',
    },
    fullDescription: {
      en: 'Perform your once-in-a-lifetime pilgrimage with complete serenity. Our comprehensive Hajj program includes official ministry registration, direct flights, upgraded Mina tents, Qurbani arrangements, and 24-hour medical team accompaniment.',
      so: 'Geli acmaasha Xajka adigoo helaya deganaan buuxda. Barnaamijka Xajka ee Balcad Travel wuxuu ka kooban yahay diiwaangelin rasmi ah, duulimaadyo toos ah, cuntada, iyo caafimaadka.',
      ar: 'أدِّ فريضة العمر بطمأنينة وسكينة تامة مع باقات الحج المعتمدة من وكالة بلعد والتي تتضمن الإقامة الراقية، ومخيمات المشاعر المطورة، والإعاشة الكاملة، وفريقاً طبياً مرافقاً.',
    },
    benefits: {
      en: [
        'Official Ministry of Hajj quota allocation & registration',
        'VIP air-conditioned tents in Mina and Arafat with full catering',
        'Accompanying Islamic scholars and certified doctors',
        'Smooth train and private luxury bus transfers in holy sites',
      ],
      so: [
        'Diiwaangelinta rasmiga ah ee Wasaaradda Xajka',
        'Teendhooyin raaxo leh oo Mina iyo Carafo ah',
        'Culimo iyo dhakhaatiir safarka kula socda',
        'Gaadiid gaar ah oo loogu talagalay goobaha barakeysan',
      ],
      ar: [
        'التسجيل المعتمد ضمن الحصص الرسمية لوزارة الحج والعمرة',
        'مخيمات VIP مكيفة في منى وعرفة مع بوفيه مفتوح',
        'مرافقة نخبة من المشايخ والعلماء وكادر طبي على مدار الساعة',
        'تنقلات ميسرة بقطار المشاعر والحافلات الحديثة',
      ],
    },
    requiredDocuments: {
      en: [
        'Valid Passport (at least 8 months validity)',
        'Mandatory vaccination certificates (Meningitis, COVID, Yellow Fever)',
        'Passport photos with white background',
        'Proof of relationship for Mahram if traveling together',
      ],
      so: [
        'Baasaboor sax ah (ugu yaraan 8 bilood)',
        'Shahaadada tallaallada caafimaadka ee loo baahan yahay',
        'Sawirrada baasaboorka',
        'Warqadda maxramka haddii dumar la socdaan',
      ],
      ar: [
        'جواز سفر صالح لمدة 8 أشهر على الأقل',
        'شهادات التطعيم الإلزامية المعتمدة',
        'صور شخصية حديثة للمحرم والمرافقين',
        'إثبات صلة القرابة (للمحرم)',
      ],
    },
    processingTime: {
      en: 'Seasonal Hajj scheduling based on official deadlines',
      so: 'Xilliga Xajka sida waafaqsan jadwalka rasmiga ah',
      ar: 'وفق المواعيد والجداول الموسمية المعتمدة من وزارة الحج',
    },
    faqs: [],
  },
  {
    id: 'hotel-booking',
    category: 'hotel',
    icon: 'Building2',
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80',
    name: {
      en: 'Luxury Hotel & Resort Reservations',
      so: 'Boos-Qabsashada Hoteellada & Resort-yada',
      ar: 'حجوزات الفنادق والمنتجعات الفاخرة',
    },
    shortDescription: {
      en: '5-star & 4-star worldwide hotel bookings with complimentary room upgrades, early check-in, and VIP amenities.',
      so: 'Boos-qabsashada hoteellada 5-ta iyo 4-ta xiddigood ee adduunka oo leh quraac iyo soo dhoweyn heer sare ah.',
      ar: 'حجوزات فندقية عالمية 5 نجوم و4 نجوم مع مزايا الترقية المجانية للغرف، الدخول المبكر، وأرقى الخدمات.',
    },
    fullDescription: {
      en: 'Through direct partnerships with global hospitality chains (Marriott, Hilton, Accor, Jumeirah, Hyatt), we guarantee the finest rooms, city center locations, oceanfront suites, and family-friendly villas.',
      so: 'Xiriirka tooska ah ee aan la leenahay hoteellada waaweyn sida Marriott, Hilton, iyo Jumeirah waxay kuu saamaxaysaa inaad hesho qolalka ugu fiican qiimo macquul ah.',
      ar: 'من خلال شراكاتنا المباشرة مع كبرى سلاسل الفنادق العالمية نضمن لك أفضل الغرف والأجنحة الفندقية في أهم المراكز الحيوية والإطلالات الساحرة.',
    },
    benefits: {
      en: [
        'Exclusive corporate contracted hotel rates',
        'Complimentary breakfast & WiFi inclusion guarantees',
        'Flexible cancellation policies on select luxury partners',
        'Haram-view suites in Makkah & Madinah',
      ],
      so: [
        'Qiimo gaar ah oo aan la heli karin meelo kale',
        'Quraac bilaash ah iyo internet degdeg ah',
        'Bedelidda taariikhda oo fudud',
        'Qolal toos u eegaya Xaramka',
      ],
      ar: [
        'أسعار تعاقدية حصرية غير متاحة في منصات الحجز العامة',
        'وجبة إفطار مجانية وإنترنت عالي السرعة',
        'مرونة عالية في التعديل والإلغاء لدى شركائنا',
        'أجنحة بإطلالات مباشرة على الحرم المكي والنبوي',
      ],
    },
    requiredDocuments: {
      en: [
        'Guest legal full names matching passports',
        'Check-in and check-out dates',
        'Preferred room type (Single, Double, Suite, Family Room)',
      ],
      so: [
        'Magacyada martida oo sax ah',
        'Taariikhda gelitaanka iyo bixitaanka',
        'Nooca qolka aad jeceshahay',
      ],
      ar: [
        'الأسماء الرسمية للنزلاء مطابقة لجوازات السفر',
        'تواريخ الدخول والمغادرة المحددة',
        'نوع الغرفة أو الجناح المطلوب',
      ],
    },
    processingTime: {
      en: 'Instant confirmation within 15–30 minutes',
      so: 'Xaqiijin 15-30 daqiiqo gudaheed',
      ar: 'تأكيد الحجز الفندقي خلال 15 إلى 30 دقيقة',
    },
    faqs: [],
  },
  {
    id: 'holiday-packages',
    category: 'tours',
    icon: 'Palmtree',
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80',
    name: {
      en: 'Curated Holiday & Vacation Packages',
      so: 'Xirmooyinka Dalxiiska & Fasaxa',
      ar: 'باقات العطلات والجولات السياحية',
    },
    shortDescription: {
      en: 'All-inclusive family, honeymoon, and leisure vacation packages to Zanzibar, Turkey, Dubai, Malaysia, and Maldives.',
      so: 'Xirmooyin dalxiis oo dhameystiran oo loogu talagalay qoysaska, aroosyada cusub, iyo fasaxa ee Zanzibar, Turkey, Dubai, iyo Maldives.',
      ar: 'باقات سياحية شاملة للعائلات وشهر العسل والاستجمام إلى زنجبار، تركيا، دبي، ماليزيا، وجزر المالديف.',
    },
    fullDescription: {
      en: 'Discover the world stress-free with our curated vacation packages combining international flights, boutique luxury resorts, private sightseeing tours, theme park tickets, and authentic cultural dinners.',
      so: 'Ku raaxayso fasax cajiib ah oo ay ku jiraan tikidhada diyaaradda, hoteellada xeebta ku yaalla, booqashada goobaha taariikhiga ah, iyo baabuur kuu gaar ah.',
      ar: 'عش متعة الاستكشاف والاسترخاء مع باقاتنا المتكاملة التي تجمع بين تذاكر الطيران، الإقامة في أفخم المنتجعات، الجولات السياحية الخاصة، وتذاكر الفعاليات.',
    },
    benefits: {
      en: [
        'Complete itinerary coordination (Flight + Hotel + Tours + Transfers)',
        'Private multilingual local tour guides in every city',
        'Special honeymoon amenities & family discount structures',
      ],
      so: [
        'Isku xirka buuxa (Diyaarad + Hoteel + Dalxiis + Gaadiid)',
        'Hagayaal dalxiis oo luqado badan ku hadla',
        'Adeegyo gaar ah oo loogu talagalay aroosyada cusub',
      ],
      ar: [
        'تنسيق شامل لكافة تفاصيل الرحلة (طيران + فندق + جولات + تنقلات)',
        'مرشدون سياحيون محليون يتحدثون عدة لغات',
        'خدمات ترحيبية خاصة برحلات شهر العسل وخصومات عائلية',
      ],
    },
    requiredDocuments: {
      en: [
        'Number of traveling guests & age of children',
        'Intended travel month & duration',
        'Preferred destinations & vacation style (Beach, Adventure, City)',
      ],
      so: [
        'Tirada dadka safarka ah iyo da’da carruurta',
        'Bisha aad rabto inaad safarto iyo mudada',
        'Magaalada aad rabto inaad u dalxiisto',
      ],
      ar: [
        'عدد المسافرين وأعمار الأطفال المرافقين',
        'تاريخ ومدة الإجازة المقترحة',
        'الوجهة المفضلة وطبيعة الرحلة (شاطئية، مغامرات، تسوق)',
      ],
    },
    processingTime: {
      en: 'Custom proposal generated within 24 hours',
      so: 'Qorshe gaar ah 24 saac gudaheed',
      ar: 'تصميم برنامج سياحي مخصص خلال 24 ساعة',
    },
    faqs: [],
  },
  {
    id: 'airport-transfer',
    category: 'transfer',
    icon: 'Car',
    image: 'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=1200&q=80',
    name: {
      en: 'Airport Pickup & VIP Transfers',
      so: 'Qaadista Garoonka & Gaadiidka VIP',
      ar: 'استقبال وتوصيل المطار وخدمات VIP',
    },
    shortDescription: {
      en: 'Punctual airport pickup and drop-off with professional chauffeurs, flight tracking, and executive vehicle fleets.',
      so: 'Gaadiid diyaar ku ah garoonka oo ku qaada xilliga aad soo degto, baabuur raaxo leh iyo darawallo xirfad sare leh.',
      ar: 'استقبال وتوصيل فوري من وإلى المطار بسيارات فارهة وسائقين محترفين مع تتبع مواعيد وصول الطائرات بدقة.',
    },
    fullDescription: {
      en: 'Arrive at your destination with ease. We provide meet-and-greet services inside the arrivals hall, luggage assistance, and direct chauffeur transfers to your residence, hotel, or embassy in Mogadishu, Nairobi, Dubai, Istanbul, and other major hubs.',
      so: 'Balcad Travel waxay kuu diyaarineysaa soo dhoweyn gaar ah gudaha garoonka, qaadista boorsooyinka, iyo gaadiid toos kuu geeya hoteelkaaga ama gurigaaga.',
      ar: 'نضمن وصولك بأعلى درجات الراحة عبر خدمة الاستقبال بلافتة خاصة عند بوابة الوصول، ومساعدة الأمتعة، ونقل مباشر إلى الفندق أو مقر الإقامة.',
    },
    benefits: {
      en: [
        'Live flight arrival tracking to adjust for delays automatically',
        'Complimentary 60 minutes waiting time at airport arrivals',
        'Executive SUVs, Mercedes sedans, and luxury minivans available',
      ],
      so: [
        'La-socodka tooska ah ee waqtiga ay diyaaraddu soo degto',
        'Hal saac oo sugid bilaash ah garoonka dhexdiisa',
        'Baabuur nooca raaxada ah oo kala duwan',
      ],
      ar: [
        'تتبع مباشر لمواعيد هبوط الرحلات لتعديل وقت الاستقبال تلقائياً',
        'ساعة انتظار مجانية في صالة الوصول دون أي رسوم إضافية',
        'أسطول متنوع من سيارات الدفع الرباعي وسيارات المرسيدس الفارهة',
      ],
    },
    requiredDocuments: {
      en: [
        'Arrival / Departure flight flight number & airline',
        'Passenger contact phone number & number of luggage bags',
        'Drop-off / Pickup hotel or address',
      ],
      so: [
        'Lambarka duulimaadka iyo diyaaradda',
        'Telefoonka iyo tirada boorsooyinka',
        'Halka aad rabto in lagu geeyo',
      ],
      ar: [
        'رقم رحلة الطيران واسم الناقل الجوي',
        'رقم هاتف المسافر وعدد الحقائب والأمتعة',
        'عنوان الفندق أو الوجهة المراد التوصيل إليها',
      ],
    },
    processingTime: {
      en: 'Immediate dispatch confirmation',
      so: 'Xaqiijin degdeg ah',
      ar: 'تأكيد وتخصيص السائق فورياً',
    },
    faqs: [],
  },
  {
    id: 'car-rental',
    category: 'transfer',
    icon: 'KeyRound',
    image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1200&q=80',
    name: {
      en: 'VIP & Executive Car Rental',
      so: 'Kireysiga Baabuurta Raaxada & VIP',
      ar: 'تأجير السيارات الفاخرة والخدمات الخاصة',
    },
    shortDescription: {
      en: 'Chauffeur-driven and self-drive luxury vehicles, armored SUVs, and commercial passenger vans.',
      so: 'Kireysiga baabuurta gaarka ah, SUV-yada ammaanka sare leh, iyo basaska raaxada ee safarrada.',
      ar: 'تأجير سيارات فارهة مع سائق أو قيادة ذاتية، وسيارات دفع رباعي مصفحة للحمايات والزيارات الرسمية.',
    },
    fullDescription: {
      en: 'Whether attending international summits, hosting state guests, or touring scenic landscapes, our modern fleet includes Land Cruisers, Mercedes S-Class, Range Rovers, and VIP HiAce vans maintained to immaculate standards.',
      so: 'Haddii aad ka qeyb galeyso shirar ama aad u baahan tahay baabuur ammaan ah oo raaxo leh, waxaan ku siinaynaa baabuurta ugu casrisan.',
      ar: 'نوفر أسطولاً متكاملاً من أحدث سيارات لاندكروزر ومرسيدس ورينج روفر مع سائقين مدربين على أعلى معايير القيادة الآمنة والبروتوكول.',
    },
    benefits: {
      en: [
        'Comprehensive insurance coverage and 24/7 roadside assistance',
        'Security-trained, discreet professional drivers',
        'Daily, weekly, and monthly long-term corporate rental rates',
      ],
      so: [
        'Caymis dhameystiran iyo caawinaad jidka ah',
        'Darawallo tababaran oo ammaanka yaqaana',
        'Kireysi maalinle, toddobaadle, ama bille ah',
      ],
      ar: [
        'تأمين شامل ومساعدة على الطرق على مدار الساعة',
        'سائقون محترفون مدربون على إجراءات الأمان والخصوصية',
        'عقود تأجير يومية، أسبوعية، وشهرية مخصصة للشركات',
      ],
    },
    requiredDocuments: {
      en: [
        'Valid Driver’s License (for self-drive) or Passport copy',
        'Rental start and end date/time',
        'City of operation',
      ],
      so: [
        'Laysinka wadista baabuurka ama baasaboor',
        'Taariikhda aad rabto inaad kireysato',
        'Magaalada aad ku wadanayso',
      ],
      ar: [
        'رخصة قيادة سارية أو صورة جواز السفر',
        'تواريخ بدء وانتهاء فترة التأجير',
        'المدينة والمناطق المراد التنقل فيها',
      ],
    },
    processingTime: {
      en: 'Car reserved within 1 hour',
      so: 'Boos-qabasho 1 saac gudaheed',
      ar: 'تجهيز وتسليم السيارة خلال ساعة واحدة',
    },
    faqs: [],
  },
  {
    id: 'cargo-services',
    category: 'cargo',
    icon: 'Package',
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=80',
    name: {
      en: 'Air Cargo & International Logistics',
      so: 'Adeegyada Xamuulka Diyaaradda & Logistics',
      ar: 'خدمات الشحن الجوي واللوجستيات الدولية',
    },
    shortDescription: {
      en: 'Secure air freight and express courier solutions connecting East Africa, Dubai, Turkey, China, and worldwide destinations.',
      so: 'Xamuul degdeg ah oo la isku halayn karo oo isku xira Bariga Afrika, Dubai, Turkiga, Shiinaha, iyo caalamka.',
      ar: 'شحن جوي سريع وآمن للبضائع والطرود يربط بين شرق إفريقيا ودبي وتركيا والصين وكافة دول العالم.',
    },
    fullDescription: {
      en: 'Balcad Travel Cargo division provides air freight forwarding, customs clearance, documentation compliance, door-to-airport, and airport-to-door delivery with real-time tracking for commercial goods and personal cargo.',
      so: 'Qaybta xamuulka ee Balcad Travel waxay kuu qaadeysaa alaabta ganacsiga iyo midda shakhsiga ah iyadoo hubineysa canshuuraha iyo soo gaarista degdegga ah.',
      ar: 'يتولى قسم الشحن في وكالة بلعد تخليص الإجراءات الجمركية ونقل البضائع التجارية والشحنات الشخصية مع توفير رقم تتبع مباشر لكل شحنة.',
    },
    benefits: {
      en: [
        'Fast scheduled cargo flights with guaranteed departure slots',
        'Complete customs clearance and bill of lading documentation',
        'Fragile, temperature-sensitive, and commercial cargo handling',
      ],
      so: [
        'Duulimaadyo joogto ah oo xamuulka ah',
        'Dhammeynta canshuuraha iyo warqadaha dekadda/garoonka',
        'Daryeelka alaabta jilicsan ama qiimaha badan leh',
      ],
      ar: [
        'رحلات شحن جوي مجدولة ومضمونة المواعيد',
        'تخليص جمركي شامل وإصدار بوالص الشحن الجوي',
        'معاملة خاصة للبضائع الحساسة والمعدات التجارية',
      ],
    },
    requiredDocuments: {
      en: [
        'Packing list & estimated cargo weight/dimensions',
        'Commercial Invoice (for business shipments)',
        'Sender and Receiver full contact details',
      ],
      so: [
        'Liiska alaabta iyo miisaankeeda',
        'Warqadda rasiidka ganacsiga (haddii ay tahay ganacsi)',
        'Xogta qofka diraya iyo qofka qaadaya',
      ],
      ar: [
        'قائمة محتويات الشحنة والأوزان والأبعاد التقديرية',
        'الفاتورة التجارية (للشحنات التجارية)',
        'بيانات المرسل والمستلم كاملة مع أرقام التواصل',
      ],
    },
    processingTime: {
      en: 'Freight transit within 2–5 days',
      so: 'Soo gaaris 2-5 maalmood gudaheed',
      ar: 'مدة وصول الشحنة من 2 إلى 5 أيام',
    },
    faqs: [],
  },
  {
    id: 'travel-insurance',
    category: 'insurance',
    icon: 'ShieldCheck',
    image: 'https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&w=1200&q=80',
    name: {
      en: 'International Travel Insurance',
      so: 'Caymiska Caalamiga Ee Safarka',
      ar: 'التأمين الطبي الشامل على السفر',
    },
    shortDescription: {
      en: 'Schengen and worldwide embassy-compliant travel insurance covering medical emergencies, trip cancellations, and lost luggage.',
      so: 'Caymiska safarka ee ay safaaradaha Yurub iyo caalamka rabaan oo daboolaya caafimaadka iyo alaabta lonta.',
      ar: 'تأمين سفر معتمد لدى سفارات الشنغن وجميع دول العالم يغطي الحالات الطبية الطارئة وإلغاء الرحلات وفقدان الأمتعة.',
    },
    fullDescription: {
      en: 'Travel with complete peace of mind. Our worldwide insurance policies fulfill visa application requirements for Europe (Schengen), USA, UK, Turkey, and GCC countries, offering comprehensive medical emergency coverage up to $100,000 USD.',
      so: 'U safar adigoo ammaan ku dareemaya. Caymiskeena safarka waxa uu buuxiyaa shuruudaha safaaradaha Yurub iyo kuwa adduunka.',
      ar: 'سافر باطمئنان تام؛ تفي وثائق التأمين المعتمدة لدينا بكافة متطلبات استخراج تأشيرات الشنغن وأمريكا وتركيا مع تغطية علاجية تصل إلى 100,000 دولار.',
    },
    benefits: {
      en: [
        'Instant embassy-compliant certificate generation',
        'COVID-19 and emergency medical evacuation coverage',
        'Luggage loss and flight delay compensation protection',
      ],
      so: [
        'Shahaado degdeg ah oo safaaraddu aqbasho',
        'Daboolidda xaaladaha caafimaad ee degdegga ah',
        'Magdhawga boorsooyinka luma ama dib-u-dhaca',
      ],
      ar: [
        'إصدار فوري لوثيقة التأمين المعتمدة لتقديمها للسفارات',
        'تغطية الحالات الطارئة والإخلاء الطبي',
        'تعويضات عن تأخر الرحلات أو فقدان الحقائب',
      ],
    },
    requiredDocuments: {
      en: [
        'Passport copy of insured traveler',
        'Exact travel start date and return date',
        'Destination countries to be visited',
      ],
      so: [
        'Baasaboorka qofka safarka ah',
        'Taariikhda uu safarku bilaabanayo iyo marka uu dhamaanayo',
        'Waddamada aad booqaneyso',
      ],
      ar: [
        'صورة جواز سفر المؤمن عليه',
        'تواريخ بداية ونهاية وثيقة التأمين',
        'قائمة الدول والمناطق المراد زيارتها',
      ],
    },
    processingTime: {
      en: 'Issued instantly within 10 minutes',
      so: 'Waxaa lagu soo saaraa 10 daqiiqo gudaheed',
      ar: 'إصدار الوثيقة فورياً خلال 10 دقائق',
    },
    faqs: [],
  },
  {
    id: 'corporate-group-travel',
    category: 'corporate',
    icon: 'Building',
    image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1200&q=80',
    name: {
      en: 'Corporate Travel & Group Delegations',
      so: 'Safarrada Shirkadaha & Wufuudda Waaweyn',
      ar: 'سفريات الشركات والوفود والمجموعات',
    },
    shortDescription: {
      en: 'Comprehensive corporate travel management, NGO logistics, delegation ticketing, and conference packages.',
      so: 'Maareynta safarrada shirkadaha, hay’adaha NGO-yada, wufuudda dowladda, iyo shirarka.',
      ar: 'إدارة متخصصة لسفريات قطاع الأعمال والشركات والمنظمات الدولية وتنظيم حجوزات الوفود والمؤتمرات.',
    },
    fullDescription: {
      en: 'We partner with governmental institutions, international NGOs, and commercial enterprises to streamline corporate travel accounts, providing flexible billing, dedicated account managers, and priority seating on high-demand routes.',
      so: 'Waxaan la shaqeynaa hay’adaha caalamiga ah iyo shirkadaha ganacsiga si aan ugu fududeyno safarrada shaqaalahooda iyadoo la siinayo mudnaan gaar ah.',
      ar: 'نقدم حلولاً مخصصة للمؤسسات الحكومية والمنظمات الإنسانية والشركات الكبرى لإدارة حسابات السفر مع تقارير دورية ومزايا تفضيلية للمسافرين الدائمين.',
    },
    benefits: {
      en: [
        'Dedicated corporate travel desk & account manager',
        'Consolidated monthly reporting and invoicing',
        'Special group fare discounts for 10+ passengers',
      ],
      so: [
        'Xafiis gaar ah oo shirkadaha u heellan',
        'Warbixinno bille ah iyo qaansheegyo habaysan',
        'Qiimo dhimis gaar ah kooxaha ka badan 10 qof',
      ],
      ar: [
        'مكتب خدمة مخصص ومدير حسابات مباشر لكل شركة',
        'تقارير سفر مفصلة وفواتير موحدة للمؤسسات',
        'خصومات تفضيلية للمجموعات والوفود المكونة من 10 أفراد فأكثر',
      ],
    },
    requiredDocuments: {
      en: [
        'Corporate organization details & travel coordinator contact',
        'Passenger manifest list with passport details',
        'Itinerary parameters and conference dates',
      ],
      so: [
        'Xogta shirkadda ama hay’adda',
        'Liiska dadka safarka ah iyo baasaboorradooda',
        'Taariikhaha shirka ama safarka',
      ],
      ar: [
        'بيانات الجهة أو المنظمة وبيانات منسق السفر',
        'قائمة أسماء المسافرين وصور جوازات سفرهم',
        'تواريخ المؤتمر أو البرنامج المطلوب تنفيذه',
      ],
    },
    processingTime: {
      en: 'Corporate quote submitted in under 2 hours',
      so: 'Xogta oo lagu diyaariyo 2 saac gudaheed',
      ar: 'تقديم عرض الأسعار وتفاصيل الرحلة خلال ساعتين',
    },
    faqs: [],
  },
];
