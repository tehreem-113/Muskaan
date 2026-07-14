// All mock/demo data lives here so components stay clean.
// In a real build, these would come from the Flask/REST API in /backend.

export const clinics = [
  {
    id: 1,
    name: 'Smile Care Dental Clinic',
    city: 'Karachi',
    area: 'Clifton',
    rating: 4.8,
    distanceKm: 1.2,
    pmdcVerified: true,
    services: ['Scaling', 'RCT', 'Extraction', 'Whitening'],
    nextSlot: 'Today, 4:30 PM',
  },
  {
    id: 2,
    name: 'Aga Khan Dental OPD',
    city: 'Karachi',
    area: 'Stadium Road',
    rating: 4.9,
    distanceKm: 3.5,
    pmdcVerified: true,
    services: ['RCT', 'Braces', 'Pediatric Dentistry'],
    nextSlot: 'Tomorrow, 10:00 AM',
  },
  {
    id: 3,
    name: 'Bright Smiles Lahore',
    city: 'Lahore',
    area: 'Gulberg',
    rating: 4.6,
    distanceKm: 5.1,
    pmdcVerified: true,
    services: ['Scaling', 'Whitening', 'Implants'],
    nextSlot: 'Today, 6:00 PM',
  },
  {
    id: 4,
    name: 'Gilgit Community Dental Camp',
    city: 'Gilgit-Baltistan',
    area: 'Gilgit City',
    rating: 4.7,
    distanceKm: 0.8,
    pmdcVerified: true,
    services: ['Free Checkups', 'Extraction', 'Awareness Sessions'],
    nextSlot: 'Sat, 9:00 AM',
  },
  {
    id: 5,
    name: 'Hunza Valley Health & Dental Unit',
    city: 'Gilgit-Baltistan',
    area: 'Hunza',
    rating: 4.5,
    distanceKm: 2.4,
    pmdcVerified: false,
    services: ['Scaling', 'First Aid', 'Referrals'],
    nextSlot: 'Mon, 11:00 AM',
  },
  {
    id: 6,
    name: 'Islamabad Dental Studio',
    city: 'Islamabad',
    area: 'F-7 Markaz',
    rating: 4.9,
    distanceKm: 4.0,
    pmdcVerified: true,
    services: ['RCT', 'Implants', 'Cosmetic Dentistry'],
    nextSlot: 'Today, 3:00 PM',
  },
]

// Full bilingual "how it works" guides for the six core procedures.
// Written as a friendly analogy + why-you-need-it + what-happens breakdown,
// shown in EducationalHub via ProcedureGuideModal.
export const procedureGuides = [
  {
    id: 'scaling',
    tag: 'Procedure',
    titleEn: 'Dental Scaling',
    titleUr: 'ڈینٹل اسکیلنگ',
    subtitleEn: 'The Heavy-Duty Pressure Wash',
    subtitleUr: 'دانتوں کی گہری صفائی',
    readMins: 4,
    sections: [
      {
        headingEn: 'The Idea',
        headingUr: 'مثال',
        bodyEn: "Think of your teeth like rocks sitting in a river. Over time, river minerals and debris form a hard, crusty layer on the rocks that you can't just wipe away with a towel. In your mouth, food and bacteria turn into a hard crust called tartar. It sticks to your teeth like superglue, especially right at the line where your teeth meet your gums.",
        bodyUr: 'اپنے دانتوں کو ایسے سمجھیں جیسے ندی میں پڑے ہوئے پتھر ہوں۔ وقت کے ساتھ ساتھ، ندی کے پانی میں موجود نمکیات اور کچرا ان پتھروں پر ایک سخت تہہ جما دیتے ہیں، جسے آپ صرف کپڑے سے صاف نہیں کر سکتے۔ بالکل اسی طرح، آپ کے منہ میں کھانا اور جراثیم مل کر دانتوں پر ایک سخت پتھر جیسی تہہ بنا دیتے ہیں جسے "ٹارٹر" (Tartar) یا دانتوں کا میل کہتے ہیں۔ یہ آپ کے دانتوں اور مسوڑھوں کے ملنے کی جگہ پر سُپر گلو کی طرح چپک جاتا ہے۔',
      },
      {
        headingEn: 'Why do you need it?',
        headingUr: 'آپ کو اس کی ضرورت کیوں ہے؟',
        bodyEn: "If that food and debris sits there too long, it pushes its way under your gums, making them red, swollen, and bleed when you brush. It also stains your teeth and deposits a hard rock-like structure around your teeth. If it is not removed it causes your gums to recede and teeth to start moving.",
        bodyUr: 'اگر یہ کھانا اور کچرا زیادہ دیر وہاں پڑا رہے، تو یہ مسوڑھوں کے اندر گھسنا شروع کر دیتا ہے، جس سے مسوڑھے سرخ ہو جاتے ہیں، سوج جاتے ہیں اور برش کرتے وقت ان سے خون نکلتا ہے۔ یہ دانتوں پر داغ بھی ڈالتا ہے اور دانتوں کے گرد پتھر جمع کر دیتا ہے۔ اگر اسے صاف نہ کیا جائے تو مسوڑھے اپنی جگہ چھوڑ کر نیچے گرنے لگتے ہیں اور دانت ہلنا شروع ہو جاتے ہیں۔',
      },
      {
        headingEn: 'What exactly happens?',
        headingUr: 'اصل میں ہوتا کیا ہے؟',
        bodyEn: "The dentist uses a tiny metal tool that vibrates incredibly fast while spraying cold water. The vibrations shatter the rock-hard buildup right off the tooth surface without hurting the tooth itself. They also use little hand tools to scrape away any remaining stubborn spots and stains.",
        bodyUr: 'ڈینٹسٹ ایک چھوٹا سا دھاتی اوزار استعمال کرتا ہے جو بہت تیزی سے تھرتھراتا (vibrate کرتا) ہے اور ساتھ ہی ٹھنڈا پانی سپرے کرتا ہے۔ یہ تھرتھراہٹ دانت کو نقصان پہنچائے بغیر اس سخت پتھر (ٹارٹر) کو توڑ کر الگ کر دیتی ہے۔ اس کے بعد وہ ہاتھ کے چھوٹے اوزاروں سے باقی رہ جانے والے ضدی داغ دھبے بھی صاف کر دیتے ہیں۔',
      },
    ],
  },
  {
    id: 'restorations',
    tag: 'Procedure',
    titleEn: 'Restorations (Fillings)',
    titleUr: 'ریسٹوریشنز (دانتوں کی بھرائی / فلنگ)',
    subtitleEn: 'Fixing Potholes',
    subtitleUr: 'دانتوں کے گڑھے بھرنا',
    readMins: 4,
    sections: [
      {
        headingEn: 'The Idea',
        headingUr: 'مثال',
        bodyEn: "Imagine the outer shell of your tooth is like concrete. If the food and sugar that you eat sits on the tooth for too long, the bacteria in your mouth start to eat away at it — in dentistry, we call this a cavity. If you leave a cavity alone, food and bacteria keep eating at it, making it deeper and deeper until the whole tooth breaks.",
        bodyUr: 'فرض کریں آپ کے دانت کی اوپری سطح کنکریٹ (سیمنٹ) کی طرح ہے۔ اگر آپ کا کھایا ہوا کھانا اور میٹھا زیادہ دیر دانت پر لگا رہے، تو منہ کے جراثیم اسے کھانا شروع کر دیتے ہیں، جس سے دانت میں ایک گڑھا یا ہول بن جاتا ہے، اسے "کیویٹی" (Cavity) کہتے ہیں۔ اگر آپ اس گڑھے کو ایسے ہی چھوڑ دیں، تو جراثیم اسے کھاتے رہتے ہیں اور یہ گڑھا گہرا ہوتا چلا جاتا ہے، یہاں تک کہ پورا دانت ٹوٹ جاتا ہے۔',
      },
      {
        headingEn: 'Why do you need it?',
        headingUr: 'آپ کو اس کی ضرورت کیوں ہے؟',
        bodyEn: "To stop the hole from getting bigger and reaching the sensitive center of the tooth.",
        bodyUr: 'تاکہ اس گڑھے کو مزید بڑا ہونے اور دانت کے اندرونی حساس حصے تک پہنچنے سے روکا جا سکے۔',
      },
      {
        headingEn: 'What exactly happens?',
        headingUr: 'اصل میں ہوتا کیا ہے؟',
        bodyEn: "First, they numb your gum (often with an injection) so the tooth is completely asleep. The dentist then uses a small, fast drill to clean out all the dark, mushy, rotted tooth structure until the hole is completely clean and hard. They place a doughy, tooth-coloured putty into the hole and shape it to look like a real tooth, then shine a bright blue light on it for a few seconds, which instantly hardens it like rock. You won't feel anything because of the numbness.",
        bodyUr: 'سب سے پہلے، وہ آپ کے مسوڑھے پر سُن کرنے والی جیلی لگاتے ہیں اور پھر انجکشن کے ذریعے دانت کو پوری طرح سُلا دیتے ہیں۔ اس کے بعد ڈینٹسٹ ایک باریک اور تیز رفتار ڈرل کے ذریعے دانت کے اندر سے تمام کالا، نرم اور گلا ہوا حصہ صاف کرتا ہے تاکہ گڑھا بالکل صاف اور سخت ہو جائے۔ پھر وہ اس گڑھے میں دانت کے رنگ کا ایک نرم مٹیریل بھرتے ہیں اور اسے بالکل اصلی دانت جیسی شکل دے دیتے ہیں، اور چند سیکنڈ کے لیے ایک تیز نیلی لائٹ چمکاتے ہیں جو اسے فوراً پتھر کی طرح سخت کر دیتی ہے۔ سُن ہونے کی وجہ سے آپ کو کچھ محسوس نہیں ہوگا۔',
      },
    ],
  },
  {
    id: 'rct',
    tag: 'Procedure',
    titleEn: 'RCT / Root Canal Treatment',
    titleUr: 'آر سی ٹی / روٹ کینال ٹریٹمنٹ',
    subtitleEn: 'Saving a Dying Tooth',
    subtitleUr: 'مرتے ہوئے دانت کو بچانا',
    readMins: 5,
    sections: [
      {
        headingEn: 'The Idea',
        headingUr: 'مثال',
        bodyEn: "Your tooth isn't solid bone; it's actually hollow inside like a pipe. Deep in the roots there is a tiny fleshy cord made of nerves and blood vessels (the pulp). If a cavity gets too deep, bacteria fall into this hollow pipe and attack the nerve, causing a massive, throbbing tooth infection.",
        bodyUr: 'آپ کا دانت اندر سے ٹھوس ہڈی نہیں ہوتا، بلکہ یہ ایک پائپ کی طرح اندر سے کھوکھلا ہوتا ہے۔ دانت کی جڑوں کے بالکل اندر ایک باریک، گوشت کے دھاگے جیسی چیز ہوتی ہے جس میں نسیں اور خون کی رگیں ہوتی ہیں (اسے پلپ کہتے ہیں)۔ اگر دانت کا گڑھا بہت گہرا ہو جائے تو جراثیم اس کھوکھلے پائپ کے اندر گر جاتے ہیں اور نس پر حملہ کر دیتے ہیں، جس سے دانت میں شدید، تڑپا دینے والا درد اور انفیکشن شروع ہو جاتا ہے۔',
      },
      {
        headingEn: 'Why do you need it?',
        headingUr: 'آپ کو اس کی ضرورت کیوں ہے؟',
        bodyEn: "To stop a terrible toothache and save the tooth so the dentist doesn't have to pull it out.",
        bodyUr: 'دانت کے شدید ترین درد کو ختم کرنے اور دانت کو بچانے کے لیے، تاکہ ڈاکٹر کو دانت باہر نہ نکالنا پڑے۔',
      },
      {
        headingEn: 'What exactly happens?',
        headingUr: 'اصل میں ہوتا کیا ہے؟',
        bodyEn: "They numb the area completely. The dentist drills a small door into the top of the tooth to reach the hollow centre pipe. Using tiny, flexible metal pins, they gently clean out the infected, dying nerve tissue from the roots, wash the inside with medicine, and fill the empty root pipes with a rubbery sealing material so bacteria can never live there again. Because a nerve-free tooth becomes fragile like a dead tree branch, it's usually covered with a porcelain crown afterwards to keep it from snapping.",
        bodyUr: 'وہ اس حصے کو پوری طرح سُن کر دیتے ہیں۔ ڈینٹسٹ دانت کے اوپر والے حصے میں ایک چھوٹا سا راستہ بناتا ہے تاکہ اندر کے کھوکھلے پائپ تک پہنچ سکے۔ باریک اور لچکدار دھاتی سوئیوں کی مدد سے وہ جڑوں کے اندر سے متاثرہ اور مرتی ہوئی نس کو آرام سے نکال کر صفائی کرتے ہیں، اندرونی حصے کو دوائی سے دھوتے ہیں، اور جڑوں کے خالی پائپوں کو ایک ربڑ جیسے مٹیریل سے سیل کر دیتے ہیں تاکہ جراثیم وہاں دوبارہ نہ رہ سکیں۔ چونکہ بغیر نس کے دانت کمزور ہو جاتا ہے، اس لیے بعد میں اس پر پورسلین کا ایک خول (کراؤن) چڑھا دیا جاتا ہے تاکہ دانت ٹوٹنے سے بچ جائے۔',
      },
    ],
  },
  {
    id: 'braces',
    tag: 'Procedure',
    titleEn: 'Braces',
    titleUr: 'بریسز',
    subtitleEn: 'The Slow, Gentle Tow-Truck',
    subtitleUr: 'دانتوں کو سیدھا کرنے والی تاریں',
    readMins: 3,
    sections: [
      {
        headingEn: 'The Idea',
        headingUr: 'مثال',
        bodyEn: "Your teeth aren't permanently welded into your jawbone; they are held in place by strong, tiny fibres. If you push on a tooth constantly in one direction, the bone in front of it gently melts away to let it move, and new bone grows in behind it to lock it into its new home.",
        bodyUr: 'آپ کے دانت جبڑے کی ہڈی کے اندر مستقل ویلڈ نہیں ہوئے ہوتے؛ بلکہ وہ باریک اور مضبوط ریشوں کے سہارے اپنی جگہ پر جڑے ہوتے ہیں۔ اگر آپ کسی دانت پر مستقل ایک ہی طرف ہلکا سا دباؤ ڈالیں، تو اس کے آگے والی ہڈی آہستہ آہستہ پگھل کر اسے جگہ دیتی ہے، اور پیچھے نئی ہڈی بن کر اسے نئے گھر میں لاک کر دیتی ہے۔',
      },
      {
        headingEn: 'Why do you need it?',
        headingUr: 'آپ کو اس کی ضرورت کیوں ہے؟',
        bodyEn: "To straighten crooked teeth, close big gaps, or fix a bite where the top and bottom teeth don't meet properly.",
        bodyUr: 'ٹیڑھے میڑھے دانتوں کو سیدھا کرنے، دانتوں کے درمیان بڑے فاصلے بند کرنے، یا اس بائٹ کو ٹھیک کرنے کے لیے جہاں اوپر اور نیچے کے دانت آپس میں صحیح طرح نہیں بیٹھتے۔',
      },
      {
        headingEn: 'What exactly happens?',
        headingUr: 'اصل میں ہوتا کیا ہے؟',
        bodyEn: "The dentist cleans your teeth and uses a safe glue to stick tiny metal or ceramic squares (brackets) onto each tooth. Then they run a springy metal wire through all the squares and tie it down with tiny rubber bands. Every month, they swap the wire for a slightly stronger one to keep guiding the teeth.",
        bodyUr: 'ڈینٹسٹ آپ کے دانتوں کو صاف کرتا ہے اور ایک محفوظ گلو کے ذریعے ہر دانت پر دھات یا سیرامک کے چھوٹے چوکور ٹکڑے (بریکٹس) چپکا دیتا ہے۔ پھر وہ ان تمام ٹکڑوں کے اندر سے ایک لچکدار دھاتی تار گزارتے ہیں اور اسے چھوٹے ربڑ بینڈز سے کس دیتے ہیں۔ ہر مہینے وہ اس تار کو بدل کر تھوڑی زیادہ مضبوط تار لگاتے ہیں تاکہ دانتوں کو صحیح سمت میں لایا جا سکے۔',
      },
    ],
  },
  {
    id: 'dentures',
    tag: 'Procedure',
    titleEn: 'CD / PD (Dentures)',
    titleUr: 'سی ڈی / پی ڈی (نقلی دانت)',
    subtitleEn: 'Complete & Partial Dentures',
    subtitleUr: 'مکمل اور جزوی ڈینچرز',
    readMins: 4,
    sections: [
      {
        headingEn: 'The Idea',
        headingUr: 'مثال',
        bodyEn: "When you lose teeth, eating and speaking clearly becomes difficult and your face can look sunken in. Dentures are custom-made, removable frameworks with fake teeth attached to them.",
        bodyUr: 'جب آپ کے دانت گر جاتے ہیں، تو کھانا کھانا مشکل ہو جاتا ہے، گال اندر کو دھنس جاتے ہیں، اور صاف بولنا بھی محال ہو جاتا ہے۔ ڈینچرز دراصل ایک ڈھانچہ ہوتا ہے جس پر نقلی دانت لگے ہوتے ہیں اور اسے منہ سے نکالا اور لگایا جا سکتا ہے۔',
      },
      {
        headingEn: 'CD (Complete Dentures)',
        headingUr: 'سی ڈی (کمپلیٹ ڈینچر)',
        bodyEn: "For someone who has zero natural teeth left on the top or bottom. It's a full plastic pink arch with white teeth that sits directly on your gums, held in place by natural suction (and sometimes denture glue).",
        bodyUr: 'یہ اس شخص کے لیے ہوتا ہے جس کے اوپر یا نیچے کے جبڑے میں ایک بھی اصلی دانت نہ بچا ہو۔ یہ گلابی پلاسٹک کا پورا محراب ہوتا ہے جس پر سفید دانت لگے ہوتے ہیں۔ یہ براہ راست آپ کے مسوڑھوں پر بیٹھتا ہے اور قدرتی سکشن کی وجہ سے اپنی جگہ پر ٹک جاتا ہے۔',
      },
      {
        headingEn: 'PD (Partial Dentures)',
        headingUr: 'پی ڈی (پارشل ڈینچر)',
        bodyEn: "For someone who is only missing some teeth. It's a smaller piece with metal clips that snaps onto your remaining real teeth like a puzzle piece, filling in the blank spaces.",
        bodyUr: 'یہ اس شخص کے لیے ہوتا ہے جس کے صرف چند دانت غائب ہوں۔ یہ ایک چھوٹا ٹکڑا ہوتا ہے جس میں دھات کے کلپ لگے ہوتے ہیں، جو آپ کے باقی ماندہ اصلی دانتوں کے ساتھ پھنس کر خالی جگہوں کو بھر دیتا ہے۔',
      },
      {
        headingEn: 'What exactly happens?',
        headingUr: 'اصل میں ہوتا کیا ہے؟',
        bodyEn: "The dentist presses a tray of soft, gooey paste against your gums to take a perfect imprint of your mouth. A lab uses this to build plastic teeth that look exactly like natural ones.",
        bodyUr: 'ڈینٹسٹ ایک ٹرے میں نرم اور لیس دار پیسٹ رکھ کر اسے آپ کے مسوڑھوں پر دباتا ہے تاکہ آپ کے منہ کا پرفیکٹ ناپ لیا جا سکے۔ لیبارٹری اس ناپ کو دیکھ کر بالکل اصلی جیسے پلاسٹک کے دانت تیار کرتی ہے۔',
      },
    ],
  },
  {
    id: 'extraction',
    tag: 'Procedure',
    titleEn: 'Extractions',
    titleUr: 'ایکسٹریکشن',
    subtitleEn: 'Pulling a Tooth',
    subtitleUr: 'دانت نکالنا',
    readMins: 4,
    sections: [
      {
        headingEn: 'The Idea',
        headingUr: 'مثال',
        bodyEn: "When a tooth is cracked all the way down to the root, or completely rotted away, it cannot be fixed. It has to come out to protect the rest of your body from infection.",
        bodyUr: 'جب کوئی دانت جڑ تک بالکل ٹوٹ جائے، یا پوری طرح گل سڑ جائے، تو اسے ٹھیک نہیں کیا جا سکتا۔ ایسے دانت کو باہر نکالنا ضروری ہوتا ہے تاکہ باقی جسم کو انفیکشن سے بچایا جا سکے۔',
      },
      {
        headingEn: 'Why do you need it?',
        headingUr: 'آپ کو اس کی ضرورت کیوں ہے؟',
        bodyEn: "To remove a broken, un-fixable tooth, or to clear out space (like pulling out wisdom teeth that are trapped under the bone).",
        bodyUr: 'ایک ٹوٹے ہوئے یا ناقابلِ علاج دانت کو نکالنے کے لیے، یا منہ میں جگہ بنانے کے لیے (جیسے عقل داڑھ کا نکالنا جو ہڈی کے نیچے پھنسی ہوتی ہے)۔',
      },
      {
        headingEn: 'What exactly happens?',
        headingUr: 'اصل میں ہوتا کیا ہے؟',
        bodyEn: "Teeth aren't held in by roots like nails in wood; they are bedded in a socket. The dentist numbs you completely, grabs the tooth with special tools, and gently presses and rocks it back and forth. This widens the bone socket until the tooth slides right out.",
        bodyUr: 'دانت ہڈی میں اس طرح نہیں ٹھکے ہوتے جیسے لکڑی میں کیل؛ بلکہ وہ ایک لچکدار ساکٹ میں بیٹھے ہوتے ہیں۔ ڈینٹسٹ اس حصے کو انجکشن سے بالکل سُن کر دیتا ہے، خاص اوزاروں سے دانت کو پکڑتا ہے، اور اسے آہستہ آہستہ آگے پیچھے ہلاتا ہے۔ اس ہلانے سے ہڈی کا وہ کھانچہ تھوڑا چوڑا ہو جاتا ہے اور دانت آرام سے باہر سرک آتا ہے۔',
      },
      {
        headingEn: 'What does it feel like?',
        headingUr: 'یہ کیسا محسوس ہوتا ہے؟',
        bodyEn: "You will feel zero sharp or cutting pain, but you will feel an intense, weird amount of pressure — like someone is firmly pushing against your jaw. Afterward, the numbness wears off and it will feel like a dull, throbbing ache for a few days while the gum heals over the empty socket.",
        bodyUr: 'آپ کو سوئی کی چوبھن یا کٹنے کا کوئی تیز درد محسوس نہیں ہوگا، لیکن آپ کو اپنے جبڑے پر ایک شدید قسم کا دباؤ محسوس ہوگا۔ بعد میں جب سُن کا اثر ختم ہوگا، تو چند دن تک وہاں ہلکا سا مدھم درد رہے گا، جب تک کہ مسوڑھا اس خالی جگہ کو بھر نہ لے۔',
      },
    ],
  },
]

// Full bilingual explainers for common oral diseases/conditions.
// Same "What it is / The Cause" structure as procedureGuides, shown via
// the same ProcedureGuideModal component.
export const diseaseGuides = [
  {
    id: 'oral-cancer',
    tag: 'Disease',
    titleEn: 'Oral Cancer',
    titleUr: 'اورل کینسر (منہ کا کینسر)',
    subtitleEn: 'When cells in the mouth grow out of control',
    subtitleUr: 'جب منہ کے خلیات بے قابو ہو کر بڑھنے لگیں',
    readMins: 4,
    sections: [
      {
        headingEn: 'What it is',
        headingUr: 'یہ کیا ہے؟',
        bodyEn: "A dangerous condition where the cells in your mouth go rogue. Instead of growing normally, they start multiplying out of control, creating tumors on the tongue, cheeks, or gums that don't heal.",
        bodyUr: 'یہ ایک انتہائی خطرناک صورتحال ہے جس میں منہ کے خلیات (cells) باغی ہو جاتے ہیں۔ وہ معمول کے مطابق بڑھنے کے بجائے، بے قابو ہو کر تیزی سے پھیلنا شروع کر دیتے ہیں۔ اس کے نتیجے میں زبان، گالوں کے اندرونی حصے یا مسوڑھوں پر ایسے زخم یا رسولیاں بن جاتی ہیں جو ٹھیک نہیں ہوتیں۔',
      },
      {
        headingEn: 'The Cause',
        headingUr: 'وجہ کیا ہے؟',
        bodyEn: "It is mostly caused by repeated, heavy damage to the cells in your mouth. The biggest culprits are heavy tobacco use (smoking, chewing tobacco, or paan/gutka) and heavy alcohol use. A virus called HPV (Human Papillomavirus) can also cause it.",
        bodyUr: 'یہ زیادہ تر منہ کے اندرونی حصے کو بار بار اور شدید نقصان پہنچانے کی وجہ سے ہوتا ہے۔ اس کے سب سے بڑے ذمہ دار یہ ہیں: تمباکو کا بہت زیادہ استعمال (سگریٹ، نسوار، یا پان، گٹکا اور ماوا چبانا)، اور شراب نوشی کا زیادہ ہونا۔ ایک وائرس، جسے HPV (ہیومن پیپیلوما وائرس) کہتے ہیں، بھی اس کی وجہ بن سکتا ہے۔',
      },
    ],
  },
  {
    id: 'leukoplakia',
    tag: 'Disease',
    titleEn: 'Leukoplakia',
    titleUr: 'لیوکوپلیکیا (منہ کے سفید دھبے)',
    subtitleEn: 'Thick white patches that won\u2019t scrape off',
    subtitleUr: 'سخت سفید دھبے جو کھرچنے سے نہیں ہٹتے',
    readMins: 3,
    sections: [
      {
        headingEn: 'What it is',
        headingUr: 'یہ کیا ہے؟',
        bodyEn: "A tough, thick, white patch that forms on the inside of your cheeks, gums, or tongue. If you try to scrape it off with a toothbrush or fingernail, it won't budge — think of it like a callus that forms on your hands from heavy lifting, but inside your mouth.",
        bodyUr: 'یہ ایک سخت، موٹا اور سفید رنگ کا پیچ (دھبہ) ہوتا ہے جو آپ کے گالوں کے اندر، مسوڑھوں یا زبان پر بن جاتا ہے۔ اگر آپ اسے ٹوتھ برش یا ناخن سے کھرچ کر صاف کرنے کی کوشش کریں، تو یہ اپنی جگہ سے بالکل نہیں ہلتا۔ اسے یوں سمجھیں جیسے سخت محنت مزدوری کرنے سے ہاتھوں پر گٹے (سخت کھال) پڑ جاتے ہیں، بالکل اسی طرح منہ کے اندر ایک سخت کھال بن جاتی ہے۔',
      },
      {
        headingEn: 'The Cause',
        headingUr: 'وجہ کیا ہے؟',
        bodyEn: "Constant irritation — the mouth thickens its skin to protect itself. The number one cause is smoking or chewing tobacco. It can also be caused by a sharp, broken tooth constantly rubbing against your cheek.",
        bodyUr: 'منہ کے اندر مسلسل رگڑ یا جلن ہونا۔ منہ اپنی حفاظت کے لیے اس جگہ کی کھال کو موٹا کر لیتا ہے۔ اس کی سب سے پہلی اور بڑی وجہ سگریٹ نوشی یا تمباکو چبانا ہے۔ اس کے علاوہ اگر کوئی تیز یا ٹوٹا ہوا دانت مسلسل آپ کے گال کے اندرونی حصے سے ٹکراتا رہے، تو بھی یہ بن سکتا ہے۔',
      },
      {
        headingEn: 'Important note',
        headingUr: 'اہم نوٹ',
        bodyEn: "This is not cancer itself, but doctors examine it closely because it carries a risk of turning into cancer over time.",
        bodyUr: 'یہ خود کینسر نہیں ہے، لیکن ڈاکٹر اس کا معائنہ لازمی کرتے ہیں کیونکہ آگے چل کر اس کے کینسر میں بدلنے کا خطرہ ہوتا ہے۔',
      },
    ],
  },
  {
    id: 'polyps',
    tag: 'Disease',
    titleEn: 'Polyps (Oral Polyps / Fibromas)',
    titleUr: 'پولیپس یا فائبروما (گوشت کا لوتھڑا یا مسا)',
    subtitleEn: 'A small, painless bump from repeated biting',
    subtitleUr: 'بار بار کاٹنے سے بننے والا نرم ابھار',
    readMins: 3,
    sections: [
      {
        headingEn: 'What it is',
        headingUr: 'یہ کیا ہے؟',
        bodyEn: "A smooth, painless, fleshy little bump or lump that grows out of the skin inside your mouth (usually on the inside of your cheek or lips). It looks like a tiny pink skin tag.",
        bodyUr: 'یہ منہ کے اندر کی کھال پر ابھرنے والا ایک نرم، ہموار اور بغیر درد کا گوشت کا چھوٹا سا ٹکڑا یا ابھار ہوتا ہے (زیادہ تر گال کے اندر یا ہونٹوں پر)۔ یہ دیکھنے میں ایک چھوٹے سے گلابی رنگ کے مسے یا لوتھڑے جیسا لگتا ہے۔',
      },
      {
        headingEn: 'The Cause',
        headingUr: 'وجہ کیا ہے؟',
        bodyEn: "Accidentally biting yourself. If you chomp down hard on your cheek by accident, or if your teeth rub the same spot every time you chew, the body heals by piling up a tiny ball of scar tissue.",
        bodyUr: 'غلطی سے منہ کا کٹ جانا۔ اگر کھانا کھاتے ہوئے اچانک آپ کا گال دانتوں کے نیچے آ کر بری طرح کٹ جائے، یا آپ کے دانت چباتے وقت بار بار ایک ہی جگہ پر رگڑ کھائیں، تو جسم اس جگہ کو ٹھیک کرنے کے لیے وہاں زخم کے نشان (scar tissue) کا ایک چھوٹا سا گیند جیسا ابھار بنا دیتا ہے۔',
      },
    ],
  },
  {
    id: 'oral-ulcers',
    tag: 'Disease',
    titleEn: 'Oral Ulcers (Mouth Sores)',
    titleUr: 'اورل السرز (منہ کے چھالے)',
    subtitleEn: 'Small, painful sores that heal on their own',
    subtitleUr: 'چھوٹے، دردناک چھالے جو خود ہی ٹھیک ہو جاتے ہیں',
    readMins: 3,
    sections: [
      {
        headingEn: 'What it is',
        headingUr: 'یہ کیا ہے؟',
        bodyEn: "A small, painful, open crater or sore inside your mouth that looks white or yellow with a red border. Eating spicy food or drinking juice feels like someone is poking a burn with a needle.",
        bodyUr: 'یہ منہ کے اندر چھوٹے، دردناک اور کھلے ہوئے زخم یا گڑھے ہوتے ہیں جو سفید یا پیلے رنگ کے دکھائی دیتے ہیں اور ان کے ارد گرد کی جگہ سرخ ہوتی ہے۔ جب آپ مرچ مصالحے والا کھانا کھاتے ہیں یا جوس پیتے ہیں، تو ایسا لگتا ہے جیسے کسی نے جلتے ہوئے زخم پر سوئی چبھو دی ہو۔',
      },
      {
        headingEn: 'The Cause',
        headingUr: 'وجہ کیا ہے؟',
        bodyEn: "The protective top skin layer gets stripped away. It can be triggered by a simple injury (like a sharp chip poking your gum or aggressive brushing), high stress, a lack of vitamins (like Iron or B12), or a weak immune system. They usually heal on their own in 10 to 14 days.",
        bodyUr: 'منہ کے اندر کی حفاظتی کھال کا چھل جانا۔ یہ کسی معمولی چوٹ کی وجہ سے ہو سکتا ہے (جیسے پاپڑ یا چپس کا کوئی تیز ٹکڑا مسوڑھے میں چبھ جانا یا بہت زور سے برش کرنا)۔ اس کے علاوہ شدید دماغی تناؤ، وٹامنز کی کمی (جیسے آئرن یا وٹامن B12)، یا قوتِ مدافعت کا کمزور ہونا بھی اس کی وجہ بنتا ہے۔ یہ عام طور پر 10 سے 14 دنوں میں خود ہی ٹھیک ہو جاتے ہیں۔',
      },
    ],
  },
  {
    id: 'gum-disease',
    tag: 'Disease',
    titleEn: 'Gingivitis & Periodontitis (Gum Disease)',
    titleUr: 'جنجیوائٹس اور پیریوڈونٹائٹس (مسوڑھوں کی بیماری)',
    subtitleEn: 'A progressive attack on the foundation holding your teeth',
    subtitleUr: 'دانتوں کی بنیاد پر بتدریج ہونے والا حملہ',
    readMins: 4,
    sections: [
      {
        headingEn: 'What it is',
        headingUr: 'یہ کیا ہے؟',
        bodyEn: "A progressive attack on the \u201cfoundation\u201d holding your teeth, moving through two stages.",
        bodyUr: 'یہ آپ کے دانتوں کو سنبھالنے والی "بنیاد" پر ایک بتدریج ہونے والا حملہ ہے، جو دو مراحل میں ہوتا ہے۔',
      },
      {
        headingEn: 'Gingivitis (Early Stage)',
        headingUr: 'جنجیوائٹس (ابتدائی مرحلہ)',
        bodyEn: "The early stage where your gums get red, puffy, and bleed when you brush.",
        bodyUr: 'اس ابتدائی مرحلے میں مسوڑھے سرخ اور سوجے ہوئے ہو جاتے ہیں اور جب بھی آپ برش کرتے ہیں، ان سے خون نکلتا ہے۔',
      },
      {
        headingEn: 'Periodontitis (Severe Stage)',
        headingUr: 'پیریوڈونٹائٹس (خطرناک مرحلہ)',
        bodyEn: "The severe stage. The infection travels deeper, melting away the jawbone under your gums until your teeth become loose and fall out.",
        bodyUr: 'یہ مسوڑھوں کی بیماری کی شدید شکل ہے۔ انفیکشن مسوڑھوں سے نیچے گہرائی میں چلا جاتا ہے اور دانت کے نیچے موجود جبڑے کی ہڈی کو پگھلانا شروع کر دیتا ہے، یہاں تک کہ دانت بالکل ہلنے لگتے ہیں اور خود ہی گر جاتے ہیں۔',
      },
      {
        headingEn: 'The Cause',
        headingUr: 'وجہ کیا ہے؟',
        bodyEn: "Leftover food and bacteria (plaque). If you don't brush and floss well, bacteria set up camp at the base of your teeth. Your body tries to fight them, and that constant battle causes the inflammation that destroys your gums and bone.",
        bodyUr: 'دانتوں میں پھنسا ہوا کھانا اور جراثیم (پلاک)۔ اگر آپ روزانہ اچھے سے برش اور خلال نہیں کرتے، تو جراثیم دانتوں کی جڑ میں اپنا ڈیرہ جما لیتے ہیں۔ آپ کا جسم ان جراثیم سے لڑنے کی کوشش کرتا ہے، اور اس مستقل جنگ کی وجہ سے مسوڑھوں میں سوجن اور جلن پیدا ہوتی ہے جو آخر کار مسوڑھوں اور ہڈی کو تباہ کر دیتی ہے۔',
      },
    ],
  },
  {
    id: 'fluorosis',
    tag: 'Disease',
    titleEn: 'Fluorosis',
    titleUr: 'فلوروسس (دانتوں پر داغ پڑنا)',
    subtitleEn: 'Chalky white or brown-stained teeth in children',
    subtitleUr: 'بچوں کے دانتوں پر سفید یا بھورے داغ',
    readMins: 3,
    sections: [
      {
        headingEn: 'What it is',
        headingUr: 'یہ کیا ہے؟',
        bodyEn: "A cosmetic change that makes teeth look chalky white, mottled, or even stained brown with tiny pits. It only happens to children when their adult teeth are still growing deep inside their jawbones.",
        bodyUr: 'یہ دانتوں کی بناوٹ میں آنے والی ایک ظاہری تبدیلی ہے جس کی وجہ سے دانت چاک جیسے سفید، دھبے دار یا چھوٹے چھوٹے گڑھوں کے ساتھ بھورے رنگ کے دکھائی دینے لگتے ہیں۔ یہ بیماری صرف بچوں میں ہوتی ہے، وہ بھی اس وقت جب ان کے پکے (مستقل) دانت ابھی جبڑے کی ہڈی کے اندر بن رہے ہوتے ہیں۔',
      },
      {
        headingEn: 'The Cause',
        headingUr: 'وجہ کیا ہے؟',
        bodyEn: "Too much fluoride. Fluoride is great for preventing cavities, but if a young child (under 8 years old) swallows too much toothpaste or drinks water with very high natural fluoride levels, it disrupts how the hard enamel shell forms, making it look stained.",
        bodyUr: 'فلورائیڈ کا بہت زیادہ استعمال۔ فلورائیڈ دانتوں کو کیڑے سے بچانے کے لیے بہت اچھا ہوتا ہے، لیکن اگر چھوٹا بچہ (8 سال سے کم عمر کا) بہت زیادہ ٹوتھ پیسٹ نگل جائے، یا ایسے علاقے کا پانی پیے جہاں پانی میں قدرتی طور پر فلورائیڈ کی مقدار حد سے زیادہ ہو، تو یہ دانتوں کی سخت اوپری تہہ (اینامل) بننے کے عمل کو خراب کر دیتا ہے، جس سے دانتوں پر مستقل داغ پڑ جاتے ہیں۔',
      },
    ],
  },
  {
    id: 'oral-thrush',
    tag: 'Disease',
    titleEn: 'Oral Candidiasis (Oral Thrush)',
    titleUr: 'اورل کینڈیدیاسس (منہ کا پکا یا برفانی چھالا)',
    subtitleEn: 'A creamy white fungal coating on the tongue',
    subtitleUr: 'زبان پر ملائی جیسی سفید تہہ',
    readMins: 3,
    sections: [
      {
        headingEn: 'What it is',
        headingUr: 'یہ کیا ہے؟',
        bodyEn: "A fungal infection that leaves a thick, creamy, cottage-cheese-like white coating all over your tongue and the roof of your mouth. Unlike Leukoplakia, if you wipe this with a cloth, it will rub off, leaving a red, raw, bleeding surface underneath.",
        bodyUr: 'یہ ایک فنگس (پھپھوندی) کا انفیکشن ہے جو آپ کی پوری زبان اور تالو پر ایک موٹی، ملائی یا پنیر جیسی سفید تہہ جما دیتا ہے۔ لیوکوپلیکیا کے برعکس، اگر آپ اس سفید تہہ کو کسی کپڑے سے صاف کریں گے، تو یہ اتر جائے گی، لیکن نیچے سے کھال بالکل سرخ، کچی اور خون بہتی ہوئی نکلے گی۔',
      },
      {
        headingEn: 'The Cause',
        headingUr: 'وجہ کیا ہے؟',
        bodyEn: "An overgrowth of yeast. Everyone has a tiny amount of harmless yeast living in their mouth. But if you take strong antibiotics (which kill off the good bacteria that keep the yeast in check), use a steroid asthma inhaler without rinsing your mouth, or have a weak immune system, the yeast multiplies like wildfire.",
        bodyUr: 'منہ کے اندر ییسٹ (yeast) کا حد سے زیادہ بڑھ جانا۔ ہر انسان کے منہ میں تھوڑی مقدار میں یہ پھپھوندی بغیر کوئی نقصان پہنچائے موجود ہوتی ہے۔ لیکن اگر آپ بہت زیادہ تیز اینٹی بائیوٹک دوائیں کھا لیں (جو ان اچھے جراثیم کو مار دیتی ہیں جو اس پھپھوندی کو قابو میں رکھتے ہیں)، یا دمہ کا انہیلر استعمال کرنے کے بعد کلی نہ کریں، یا آپ کی قوتِ مدافعت بہت کمزور ہو، تو یہ پھپھوندی جنگل کی آگ کی طرح پھیل جاتی ہے۔',
      },
    ],
  },
]

export const articles = [
  {
    id: 4,
    tag: 'Awareness',
    titleEn: 'Chaalia & Gutka: The Hidden Cost to Your Mouth',
    titleUr: 'چھالیہ اور گٹکا: آپ کے منہ کی پوشیدہ قیمت',
    bodyEn: 'An honest look at oral submucous fibrosis, gum disease, and oral cancer risk linked to chaalia and gutka use — and how to seek help.',
    bodyUr: 'چھالیہ اور گٹکا کے استعمال سے منہ کے کینسر اور مسوڑھوں کی بیماری کے خطرات، اور مدد کہاں سے حاصل کی جائے۔',
    readMins: 6,
    highlight: true,
  },
  {
    id: 5,
    tag: 'Kids',
    titleEn: 'Teaching Children to Love Brushing',
    titleUr: 'بچوں کو برش کرنے کی عادت کیسے سکھائیں',
    bodyEn: 'Simple games and routines to turn the two-minute brush into the best part of a child\u2019s day.',
    bodyUr: 'آسان کھیل اور معمولات جو دو منٹ کے برش کو بچوں کے دن کا بہترین حصہ بنا دیں۔',
    readMins: 3,
  },
  {
    id: 6,
    tag: 'Prevention',
    titleEn: 'Diet & Cavities: What Pakistani Households Should Know',
    titleUr: 'خوراک اور دانتوں کی خرابی: پاکستانی گھرانوں کے لیے رہنمائی',
    bodyEn: 'From sugary chai to dried fruit, a look at everyday foods that affect cavity risk and how to balance them.',
    bodyUr: 'میٹھی چائے سے لے کر خشک میوہ جات تک، روزمرہ کی خوراک دانتوں کی خرابی پر کیسے اثر انداز ہوتی ہے۔',
    readMins: 4,
  },
]

// Very small canned-response "AI" for the chatbot mockup.
// A real deployment would call the Flask backend, which would call an LLM API.
export const chatbotKnowledge = [
  {
    keywords: ['bleed', 'gum', 'khoon', 'mausoray'],
    reply: "Bleeding gums are often an early sign of gingivitis. Try brushing gently twice a day and flossing once daily. If bleeding continues for more than a week, please book a scaling appointment with a PMDC-certified dentist near you.",
  },
  {
    keywords: ['pain', 'dard', 'ache', 'hurt'],
    reply: "Sorry to hear you're in pain. For now: rinse with warm salt water and avoid very hot/cold food. If the pain is severe or swelling appears, please book an urgent consultation \u2014 don't wait it out.",
  },
  {
    keywords: ['gutka', 'chaalia', 'chalia', 'paan', 'naswar'],
    reply: "Chaalia, gutka and naswar are strongly linked to oral cancer, gum disease and white patches inside the mouth (leukoplakia). Quitting is the single best thing you can do for your oral health \u2014 would you like resources on how to start?",
  },
  {
    keywords: ['brush', 'brushing', 'kitni dair', 'how long'],
    reply: "Brush for a full 2 minutes, twice a day, using a soft-bristled brush and fluoride toothpaste. Try our built-in Brushing Timer on this page to make sure you hit the full 2 minutes!",
  },
  {
    keywords: ['whiten', 'white', 'yellow', 'zard'],
    reply: "Yellowing can come from staining (chai, paan, smoking) or natural enamel thinning. Professional scaling and polishing is the safest first step \u2014 avoid unverified home whitening kits, they can damage enamel.",
  },
  {
    keywords: ['appointment', 'book', 'clinic', 'doctor', 'dentist'],
    reply: "I can help with that! Scroll down to the Clinic Locator to find a PMDC-certified dentist near you, or use the \"Book an Appointment\" button at the top of the page.",
  },
  {
    keywords: ['child', 'kid', 'bacha', 'baby teeth'],
    reply: "For children, the first dental visit is recommended around age 1, or within 6 months of the first tooth appearing. Supervise brushing until age 7-8 and limit sugary snacks between meals.",
  },
]

export const defaultBotReply = "That's a great question. I'm a prototype assistant for general guidance only \u2014 for anything specific to you, please book a consultation with one of our PMDC-certified dentists. You can also ask me about brushing, gum pain, gutka/chaalia risks, or booking a clinic."
