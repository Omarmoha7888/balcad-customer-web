import { FAQItem } from '../types';

export const faqData: FAQItem[] = [
  {
    id: 'faq-1',
    category: 'policy',
    question: {
      en: 'Do I need to pay online when submitting a request on this website?',
      so: 'Ma waxaan u baahanahay inaan lacag online ah ku bixiyo websaytkan?',
      ar: 'هل يجب أن أدفع عبر الإنترنت عند تقديم طلب في هذا الموقع؟',
    },
    answer: {
      en: 'No. Balcad Travel Agency does NOT collect online credit card payments on this website. Our website is designed to securely accept your travel requirements and documents. Once submitted, our certified travel officer will review your request, verify airline/visa quotas, and contact you directly via phone, WhatsApp, or email with exact options and payment procedures.',
      so: 'Maya. Balcad Travel Agency wax lacag-bixin online ah kama qaadato websaytkan. Websaytkan waxaa loogu talagalay inaad si ammaan ah ugu gudbiso dalabkaaga iyo dukumiintiyadaada. Ka dib markaad gudbiso, sarkaal socdaal ayaa toos kuula soo xiriiri doona (telefoon, WhatsApp, ama email) si uu kuugu sharxo qiimaha iyo sida aad u bixinayso.',
      ar: 'لا. وكالة بلعد للسفريات لا تقوم بتحصيل أي مدفوعات إلكترونية عبر البطاقات على هذا الموقع. تم تصميم الموقع لتسجيل طلباتكم ورفع الوثائق بأمان. بعد إرسال الطلب، يتولى مسؤول الحجوزات دراسة تفاصيل الرحلة والتواصل معكم مباشرة عبر الهاتف أو الواتساب أو البريد الإلكتروني لتأكيد الحجز وتوضيح طرق السداد.',
    },
  },
  {
    id: 'faq-2',
    category: 'general',
    question: {
      en: 'How do I submit a travel service request?',
      so: 'Sideen u gudbin karaa dalabka adeegga socdaalka?',
      ar: 'كيف يمكنني تقديم طلب خدمة سفر؟',
    },
    answer: {
      en: 'Simply click the "Request Service" button anywhere on the website, select the desired service (Flight Booking, Visa, Umrah, Hotel, etc.), fill in your passenger details and travel dates, attach your passport copy or relevant documents (up to 20MB), and click Submit. You will receive a unique Request ID (e.g. BTA-REQ-2026-XXXXX) for live tracking.',
      so: 'Kaliya guji batoonka "Dalbo Adeeg", dooro nooca adeegga aad rabto (Duulimaad, Fiiso, Cumro, Hoteel, iwm), buuxi xogtaada iyo taariikhda safarka, soo geli koobiga baasaboorkaaga (ilaa 20MB), ka dibna guji Gudbi. Waxaad heli doontaa Request ID aad kula socon karto xaaladda dalabkaaga.',
      ar: 'ما عليك سوى النقر على زر "طلب خدمة" واختيار الخدمة المطلوبة (طيران، تأشيرات، عمرة، فنادق، إلخ)، وملء بيانات المسافر وتواريخ السفر، وإرفاق صورة الجواز (حتى 20 ميجابايت) ثم الضغط على إرسال. ستتلقى مباشرة رقم طلب فريد (مثل BTA-REQ-2026-XXXXX) لمتابعة تقدم طلبك.',
    },
  },
  {
    id: 'faq-3',
    category: 'visa',
    question: {
      en: 'How long does visa processing take?',
      so: 'Muddo intee le’eg ayay qaadataa soo saarista fiisadu?',
      ar: 'كم تستغرق مدة معالجة واستخراج التأشيرة؟',
    },
    answer: {
      en: 'Processing times vary depending on the destination country and visa type: Electronic Visas (UAE/Dubai, Saudi Arabia tourist) typically take 24–48 hours; Express Medical and Business visas take 2–5 days; whereas physical Embassy stickers (Schengen, UK, Turkey, Egypt) typically take 5–14 working days.',
      so: 'Waqtigu wuxuu ku xiran yahay dalka aad u socoto iyo nooca fiisada: Fiisooyinka elektarooniga ah (UAE/Dubai, Sacuudi) waxay qaataan 24-48 saacadood; Fiisooyinka degdegga ah ee caafimaadka 2-5 maalmood; halka fiisooyinka safaaradaha (Yurub, Turkiga, Masar) ay qaataan 5-14 maalmood oo shaqo ah.',
      ar: 'تختلف المدة حسب الدولة ونوع التأشيرة: التأشيرات الإلكترونية (دبي، السعودية) تستغرق عادة من 24 إلى 48 ساعة؛ التأشيرات العلاجية والتجارية من 2 إلى 5 أيام؛ بينما تأشيرات السفارات المباشرة (الشنغن، تركيا، مصر) تستغرق ما بين 5 إلى 14 يوم عمل.',
    },
  },
  {
    id: 'faq-4',
    category: 'general',
    question: {
      en: 'Can I modify or update my submitted request?',
      so: 'Ma wax ka beddeli karaa dalabkayga markaan gudbiyo ka dib?',
      ar: 'هل يمكنني تعديل أو تحديث طلبي بعد إرساله؟',
    },
    answer: {
      en: 'Yes. You can use our "Track My Request" tool to enter your Request ID and send an update or message directly to your assigned travel officer, or contact us immediately by phone (+252 61 2483838 / +252 61 2141414) quoting your Request ID.',
      so: 'Haa. Waxaad isticmaali kartaa qaybta "La Soco Dalabkaaga", geli Request ID-gaaga si aad fariin toos ah ugu dirto sarkaalka ku xilsaaran, ama toos nooga soo wac telefoonka (+252 61 2483838 / +252 61 2141414).',
      ar: 'نعم. يمكنك استخدام ميزة "تتبع طلبي" وإدخال رقم الطلب لإرسال ملاحظاتك وتعديلاتك مباشرة إلى الموظف المسؤول، أو الاتصال بأرقامنا (+252 61 2483838 / +252 61 2141414) وتزويدنا برقم طلبك.',
    },
  },
  {
    id: 'faq-5',
    category: 'general',
    question: {
      en: 'How will Balcad Travel Agency contact me after I submit?',
      so: 'Sidee ayay Balcad Travel Agency iila soo xiriiri doontaa marka aan dalabka gudbiyo?',
      ar: 'كيف ستتواصل معي وكالة بلعد بعد إرسال الطلب؟',
    },
    answer: {
      en: 'Our dedicated travel specialist will contact you through your preferred channels: direct phone call, WhatsApp message, and a detailed confirmation email. Our staff will present available flight schedules, seat confirmations, and document checklist status.',
      so: 'Khubaradayadu waxay kula soo xiriiri doonaan telefoon toos ah, fariin WhatsApp ah, iyo email faahfaahsan. Waxay kuu soo bandhigi doonaan jadwalka duulimaadyada, kuraasta diyaaradda, iyo xogta fiisadaada.',
      ar: 'سيتواصل معك مستشار السفر المخصص عبر وسائلك المفضلة: اتصال هاتفي مباشر، رسالة واتساب، وبريد إلكتروني تفصيلي يتضمن خيارات الطيران ومواعيد الرحلات المتاحة.',
    },
  },
  {
    id: 'faq-6',
    category: 'visa',
    question: {
      en: 'What documents are required and what file formats are supported for upload?',
      so: 'Waa maxay dukumiintiyada loo baahan yahay iyo noocyada faylasha la ogol yahay?',
      ar: 'ما هي المستندات المطلوبة وما الصيغ المدعومة لرفع الملفات؟',
    },
    answer: {
      en: 'The standard required document is a clear copy of your Passport (bio-data page with at least 6 months validity). Depending on the service, you can also upload your National ID, recent passport photograph, university admission letter, or medical referrals. Supported formats: PDF, JPG, JPEG, PNG up to 20MB per file.',
      so: 'Dukumiintiga aasaasiga ah waa koobiga baasaboorkaaga (bogga hore oo leh ugu yaraan 6 bilood). Waxaad sidoo kale soo gelin kartaa kaarka aqoonsiga, sawirka baasaboorka, warqadda jaamacadda, ama warbixinta caafimaadka. Noocyada la ogol yahay: PDF, JPG, JPEG, PNG ilaa 20MB.',
      ar: 'المستند الأساسي هو صورة واضحة لصفحة بيانات جواز السفر (ساري المفعول لمدة 6 أشهر على الأقل). حسب نوع الخدمة يمكنك أيضاً إرفاق الهوية الوطنية، الصورة الشخصية، القبول الجامعي، أو التقارير الطبية. الصيغ المدعومة: PDF، JPG، JPEG، PNG حتى 20 ميجابايت لكل ملف.',
    },
  },
  {
    id: 'faq-7',
    category: 'pilgrimage',
    question: {
      en: 'Do you arrange complete Hajj and Umrah packages with hotels near the Haram?',
      so: 'Ma bixisaan xirmooyin dhameystiran oo Xajka iyo Cumrada ah oo hoteelladoodu u dhow yihiin Xaramka?',
      ar: 'هل تنظمون باقات عمرة وحج شاملة مع فنادق قريبة من الحرمين؟',
    },
    answer: {
      en: 'Yes! We specialize in premium Umrah and Hajj packages with 5-star and 4-star hotels situated directly on the Haram plazas in Makkah (Clock Tower, Jabal Omar) and Madinah (Northern Central Area), complete with luxury GMC transfers and religious scholars to guide your rituals.',
      so: 'Haa! Waxaan bixinnaa xirmooyin heer sare ah oo Xajka iyo Cumrada ah oo ay ku jiraan hoteello 5 iyo 4 xiddigood ah oo toos u eegaya Xaramka Makka iyo Madiina, oo leh gaadiid raaxo leh iyo culimo ku caawisa cibaadada.',
      ar: 'نعم بالتأكيد! نحن متخصصون في تقديم باقات حج وعمرة متميزة بفنادق 5 نجوم و4 نجوم على ساحات الحرم المكي الشريف وأبراج الساعة والمنطقة المركزية بالمدينة المنورة مع سيارات خاصة ومرشدين دينيين.',
    },
  },
  {
    id: 'faq-8',
    category: 'general',
    question: {
      en: 'How do I contact customer support in case of an emergency?',
      so: 'Sideen ula xiriiri karaa taageerada macaamiisha haddii ay jirto xaalad degdeg ah?',
      ar: 'كيف أتواصل مع خدمة العملاء في الحالات الطارئة؟',
    },
    answer: {
      en: 'Our emergency operations desk is active 24 hours a day, 7 days a week. You can reach us by direct phone at +252 61 2483838 or +252 61 2141414, message our WhatsApp support, or write to balcadtravel@gmail.com.',
      so: 'Qaybteena xaaladaha degdegga ah waxay shaqeysaa 24 saac maalin kasta, 7 maalmood toddobaadkii. Waxaad nagala soo xiriiri kartaa telefoonka tooska ah ee +252 61 2483838 ama +252 61 2141414, WhatsApp, ama emailka balcadtravel@gmail.com.',
      ar: 'يعمل مكتب طوارئ السفر لدينا على مدار 24 ساعة يومياً طوال أيام الأسبوع. يمكنك الاتصال بنا مباشرة على الأرقام +252 61 2483838 أو +252 61 2141414 أو عبر الواتساب أو البريد الإلكتروني balcadtravel@gmail.com.',
    },
  },
];
