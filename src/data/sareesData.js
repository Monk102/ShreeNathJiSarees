// Store Data & Catalog for Shreenath Ji Sarees, Betul, MP

export const STORE_INFO = {
  name: "Shreenath Ji Sarees",
  hindiName: "श्रीनाथ जी साड़ीज़",
  tagline: "Betul's Most Cherished Ethnic & Bridal Saree Destination",
  hindiTagline: "बैतूल का सबसे विश्वसनीय एवं प्रतिष्ठित साड़ी प्रतिष्ठान",
  address: "Cement Road, Kothi Bazar, Betul – 460001, Madhya Pradesh",
  shortAddress: "Cement Road, Kothi Bazar, Betul (M.P.)",
  landmark: "Near Main Market Commercial Hub, Kothi Bazar",
  phone: "+91 94250 81234",
  altPhone: "+91 7141 234567",
  whatsapp: "+919425081234",
  rating: 4.1,
  totalReviews: 240,
  justdialRating: 4.1,
  hours: "Open daily until 9:00 PM (10:30 AM – 9:00 PM)",
  openTime: 10.5, // 10:30 AM
  closeTime: 21.0, // 9:00 PM
  instagramUrl: "https://www.instagram.com/shrinath_jisarees/",
  instagramHandle: "@shrinath_jisarees",
  googleMapsUrl: "https://www.google.com/maps/place/Shrinath+Ji+Saarees+Shopping+Mall/@21.9143515,77.901497,17z/data=!3m1!4b1!4m6!3m5!1s0x3bd60985b8041dbb:0x34684e56c8bc5302!8m2!3d21.9143515!4d77.901497!16s%2Fg%2F11fw8w7h2q?hl=en-IN&entry=ttu&g_ep=EgoyMDI2MTEwMS4wIKXMDSoASAFQAw%3D%3D",
  justdialUrl: "https://www.justdial.com/Betul/Shreenath-Ji-Sarees-Kothi-Bazaar/9999P7141-7141-140329194218-A5V9_BZDET",
  googleKnowledgeGraphUrl: "https://www.google.com/search?kgmid=%2Fg%2F11fw8w7h2q"
};

export const CATEGORIES = [
  { id: "all", name: "All Collections", hindi: "सभी संग्रह" },
  { id: "banarasi", name: "Banarasi Silk Sarees", hindi: "बनारसी सिल्क साड़ी" },
  { id: "zari-border", name: "Lightweight Zari Borders", hindi: "जरी बॉर्डर साड़ियाँ" },
  { id: "chanderi", name: "Chanderi & Maheshwari", hindi: "चंदेरी एवं महेश्वरी" },
  { id: "bridal", name: "Bridal & Wedding Lounge", hindi: "दुल्हन एवं वैवाहिक स्पेशल" },
  { id: "organza", name: "Organza & Tissue Drapes", hindi: "ऑर्गेंजा एवं टिश्यू" },
  { id: "dress-materials", name: "Dress Materials & Suits", hindi: "ड्रेस मटेरियल एवं सूट" },
  { id: "festive", name: "Festive & Party Wear", hindi: "पार्टी एवं त्योहार वियर" }
];

export const SAREES_CATALOG = [
  {
    id: "saree-01",
    name: "Royal Crimson Banarasi Katan Silk Saree",
    hindiName: "शाही क्रिम्सन बनारसी कतान सिल्क साड़ी",
    category: "banarasi",
    fabric: "Pure Katan Silk",
    zari: "Authentic Golden Zari Brocade",
    color: "Crimson Red & Gold",
    colorFamily: "Red",
    price: 6499,
    originalPrice: 8999,
    discount: "28% OFF",
    rating: 4.8,
    reviewsCount: 42,
    tag: "Bestseller",
    isNew: false,
    isBridal: true,
    image: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=900&q=80",
    description: "An ethereal crimson bridal Banarasi handcrafted with intricate kadhwa floral jaal, opulent golden zari borders, and a lavish royal pallu. An eternal heirloom for weddings in Betul.",
    highlights: [
      "Traditional Kadhwa weave with golden zari",
      "Rich grand pallu with peacock & paisley motifs",
      "Includes unstitched matching brocade blouse piece (0.8m)",
      "Pure silk mark certified guarantee"
    ],
    length: "5.5 meters saree + 0.8 meter blouse",
    washCare: "Dry Clean Only",
    occasion: "Bridal / Wedding / Reception"
  },
  {
    id: "saree-02",
    name: "Lightweight Emerald Organza Zari Border Saree",
    hindiName: "लाइटवेट एमराल्ड ऑर्गेंजा जरी बॉर्डर साड़ी",
    category: "zari-border",
    fabric: "Premium Glass Organza",
    zari: "Matte Antique Golden Zari Border",
    color: "Emerald Forest Green",
    colorFamily: "Green",
    price: 3299,
    originalPrice: 4799,
    discount: "31% OFF",
    rating: 4.9,
    reviewsCount: 38,
    tag: "Trending",
    isNew: true,
    isBridal: false,
    image: "https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?auto=format&fit=crop&w=900&q=80",
    description: "Ultra-lightweight and breathable organza saree in a deep royal emerald green, framed by a delicately scalloped antique golden zari border. Perfect for modern festive occasions.",
    highlights: [
      "Feather-light drape, effortless to carry all day",
      "Subtle scalloped golden zari embroidery",
      "Tone-on-tone raw silk blouse fabric included",
      "Crease-resistant luxury finish"
    ],
    length: "5.5 meters saree + 0.8 meter blouse",
    washCare: "Gentle Dry Clean",
    occasion: "Sangeet / Festive / Day Weddings"
  },
  {
    id: "saree-03",
    name: "Heritage Chanderi Silk Saree with Meenakari Zari",
    hindiName: "हेरिटेज चंदेरी सिल्क साड़ी मीनाकारी जरी",
    category: "chanderi",
    fabric: "Chanderi Katan Silk Cotton",
    zari: "Gold Zari with Fine Meenakari Butas",
    color: "Mustard Gold & Rani Pink",
    colorFamily: "Yellow",
    price: 4599,
    originalPrice: 5999,
    discount: "23% OFF",
    rating: 4.7,
    reviewsCount: 29,
    tag: "MP Handloom Pride",
    isNew: false,
    isBridal: false,
    image: "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&w=900&q=80",
    description: "A tribute to Madhya Pradesh's timeless weaving legacy. Crisp yet supple Chanderi fabric adorned with traditional gold coin butas and a signature contrasting rani pink zari border.",
    highlights: [
      "Authentic Madhya Pradesh handloom weave",
      "Airy texture with natural gossamer shine",
      "Contrasting rich pink pallu with zari lines",
      "Ideal for Haldi ceremonies and temple rituals"
    ],
    length: "5.5 meters saree + 0.8 meter blouse",
    washCare: "Dry Clean Only",
    occasion: "Haldi / Puja / Festive Mornings"
  },
  {
    id: "saree-04",
    name: "Rani Pink Golden Zari Brocade Wedding Saree",
    hindiName: "रानी पिंक गोल्डन जरी बनारसी वेडिंग साड़ी",
    category: "bridal",
    fabric: "Rich Woven Silk",
    zari: "Heavy Woven Gold Zari",
    color: "Rani Pink",
    colorFamily: "Pink",
    price: 7899,
    originalPrice: 10999,
    discount: "28% OFF",
    rating: 4.9,
    reviewsCount: 56,
    tag: "Bridal Favorite",
    isNew: true,
    isBridal: true,
    image: "https://images.unsplash.com/photo-1609357605129-26f69add5d6e?auto=format&fit=crop&w=900&q=80",
    description: "Captivate everyone with this showstopping rani pink bridal saree woven in heavy gold zari. Elaborate temple border motifs and an all-over floral jaal offer regal grace.",
    highlights: [
      "Heavy royal weight drape for brides",
      "Intricate temple border with golden bullion zari",
      "Grand bridal pallu with double-weave craftsmanship",
      "Complementary zari designer blouse material"
    ],
    length: "5.5 meters saree + 0.85 meter blouse",
    washCare: "Dry Clean Only",
    occasion: "Bridal Pheras / Reception / Wedding"
  },
  {
    id: "saree-05",
    name: "Powder Blue Pastel Tissue Silk Festive Saree",
    hindiName: "पाउडर ब्लू टिश्यू सिल्क फेस्टिव साड़ी",
    category: "organza",
    fabric: "Tissue Silk & Lurex Blend",
    zari: "Fine Rose-Gold Zari Weave",
    color: "Powder Blue & Rose Gold",
    colorFamily: "Blue",
    price: 3899,
    originalPrice: 5200,
    discount: "25% OFF",
    rating: 4.6,
    reviewsCount: 19,
    tag: "New Arrival",
    isNew: true,
    isBridal: false,
    image: "https://images.unsplash.com/photo-1610030469668-93213045a557?auto=format&fit=crop&w=900&q=80",
    description: "Modern pastel magic meets traditional opulence. Subtle metallic sheen woven through lightweight tissue silk with fine rose-gold zari border accents.",
    highlights: [
      "Subtle shimmer that photographs gracefully",
      "Gentle pastel tone popular for evening receptions",
      "Comfortable and non-prickly fabric lining",
      "Contemporary minimalist zari border"
    ],
    length: "5.5 meters saree + 0.8 meter blouse",
    washCare: "Dry Clean Only",
    occasion: "Cocktail / Reception / Engagement"
  },
  {
    id: "saree-06",
    name: "Classic Midnight Navy Lightweight Zari Border Georgette",
    hindiName: "मिडनाइट नेवी लाइटवेट जरी जॉर्जेट साड़ी",
    category: "zari-border",
    fabric: "Pure Viscose Georgette",
    zari: "Lightweight Matt Gold Zari Border",
    color: "Midnight Navy Blue",
    colorFamily: "Blue",
    price: 2499,
    originalPrice: 3499,
    discount: "29% OFF",
    rating: 4.8,
    reviewsCount: 64,
    tag: "Customer Choice",
    isNew: false,
    isBridal: false,
    image: "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?auto=format&fit=crop&w=900&q=80",
    description: "The quintessential party saree. Liquid-fluid pure georgette that wraps like a second skin, finished with an understated 3-inch golden zari border and delicate fringe tassels.",
    highlights: [
      "Falls gracefully into crisp, slender pleats",
      "Extremely comfortable for long party hours",
      "Subtle sparkle with micro sequins inside border",
      "Ready-to-wear fall & pico service available"
    ],
    length: "5.5 meters saree + 0.8 meter blouse",
    washCare: "Handwash in Mild Detergent or Dry Clean",
    occasion: "Parties / Farewell / Evening Gatherings"
  },
  {
    id: "saree-07",
    name: "Royal Purple Banarasi Tanchoi Weave Saree",
    hindiName: "रॉयल पर्पल बनारसी तंचोई वीव साड़ी",
    category: "banarasi",
    fabric: "Pure Silk Tanchoi",
    zari: "Satin Finish Gold & Copper Zari",
    color: "Regal Deep Purple",
    colorFamily: "Purple",
    price: 5999,
    originalPrice: 7999,
    discount: "25% OFF",
    rating: 4.8,
    reviewsCount: 31,
    tag: "Exclusive",
    isNew: false,
    isBridal: true,
    image: "https://images.unsplash.com/photo-1610030469850-24430e3be5b6?auto=format&fit=crop&w=900&q=80",
    description: "Tanchoi silk is revered for its smooth satin-like surface with woven silk relief motifs and fine golden zari borders that never snag your jewelry.",
    highlights: [
      "Smooth non-snagging Tanchoi handloom weave",
      "Dual tone iridescent purple-violet sheen",
      "Rich brocade border and pallu",
      "Traditional Indian heirloom quality"
    ],
    length: "5.5 meters saree + 0.8 meter blouse",
    washCare: "Dry Clean Only",
    occasion: "Weddings / Anniversaries / Grand Receptions"
  },
  {
    id: "saree-08",
    name: "Unstitched Chanderi Silk Suit Material with Zari Dupatta",
    hindiName: "अनस्टिच्ड चंदेरी सिल्क सूट विथ जरी दुपट्टा",
    category: "dress-materials",
    fabric: "Chanderi Silk Kurta + Shantoon Bottom + Zari Dupatta",
    zari: "Woven Golden Zari Border on Dupatta",
    color: "Teal Green & Gold",
    colorFamily: "Green",
    price: 2899,
    originalPrice: 3899,
    discount: "26% OFF",
    rating: 4.7,
    reviewsCount: 45,
    tag: "Best Dress Material",
    isNew: true,
    isBridal: false,
    image: "https://images.unsplash.com/photo-1609357605129-26f69add5d6e?auto=format&fit=crop&w=900&q=80",
    description: "3-piece premium unstitched dress material set with an intricately embroidered neckline, matching comfortable bottom fabric, and a grand 2.5m Chanderi zari dupatta.",
    highlights: [
      "Top: 2.5m Chanderi Silk with neck embroidery",
      "Bottom: 2.5m Premium Shantoon fabric",
      "Dupatta: 2.5m woven gold zari Chanderi dupatta",
      "Can be tailored into Anarkali, Straight Kurta, or Palazzo suit"
    ],
    length: "Full 3-Piece Material Set",
    washCare: "Dry Clean First Wash",
    occasion: "Office Festive / Family Dinners / Gifting"
  },
  {
    id: "saree-09",
    name: "Sunshine Yellow Woven Bandhani Georgette with Zari Pallu",
    hindiName: "सनशाइन येलो बंधेज जॉर्जेट विथ जरी पल्लू",
    category: "festive",
    fabric: "Artisan Georgette Bandhani",
    zari: "Kashmiri Style Golden Zari Weave",
    color: "Haldi Yellow & Coral",
    colorFamily: "Yellow",
    price: 3699,
    originalPrice: 4999,
    discount: "26% OFF",
    rating: 4.9,
    reviewsCount: 52,
    tag: "Festive Must-Have",
    isNew: false,
    isBridal: false,
    image: "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&w=900&q=80",
    description: "Bright, auspicious and celebratory. Traditional Rajasthani Bandhej tie-and-dye handcraft on soft georgette, crowned with a shimmering zari border and pallu.",
    highlights: [
      "Authentic Bandhani tie-and-dye patterns",
      "Gold zari woven border that holds pleats firmly",
      "Brings instant radiant festive glow",
      "Includes raw silk matching blouse piece"
    ],
    length: "5.5 meters saree + 0.8 meter blouse",
    washCare: "Dry Clean Only",
    occasion: "Haldi / Navratri / Diwali Pooja"
  },
  {
    id: "saree-10",
    name: "Vintage Golden Tissue Bridal Saree with Zardozi Work",
    hindiName: "विंटेज गोल्डन टिश्यू ब्राइडल साड़ी विथ ज़रदोज़ी",
    category: "bridal",
    fabric: "Metallic Pure Tissue Silk",
    zari: "Dual Gold & Antique Copper Zari with Handwork",
    color: "Champagne Gold",
    colorFamily: "Gold",
    price: 9499,
    originalPrice: 13500,
    discount: "30% OFF",
    rating: 5.0,
    reviewsCount: 27,
    tag: "Royal Couture",
    isNew: true,
    isBridal: true,
    image: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=900&q=80",
    description: "The peak of luxury ethnic craftsmanship. A shimmering champagne gold tissue saree embellished with hand-done Zardozi and Dabka work along the golden zari scalloped borders.",
    highlights: [
      "Handcrafted Zardozi and Kundan stone highlights",
      "Pure golden tissue silk with royal drape",
      "Heavily embroidered designer blouse fabric included",
      "Exclusive one-of-a-kind bridal masterpiece"
    ],
    length: "5.5 meters saree + 1.0 meter heavy designer blouse",
    washCare: "Dry Clean Only",
    occasion: "Main Wedding / Bridal Reception"
  },
  {
    id: "saree-11",
    name: "Everyday Grace Lightweight Cotton-Silk Saree with Sleek Zari",
    hindiName: "एवरीडे ग्रेस कॉटन-सिल्क साड़ी विथ स्लीक जरी बॉर्डर",
    category: "zari-border",
    fabric: "Chanderi Cotton-Silk Blend",
    zari: "Sleek 1.5-inch Gold Zari Piping & Border",
    color: "Pastel Sage Green & Gold",
    colorFamily: "Green",
    price: 1899,
    originalPrice: 2699,
    discount: "30% OFF",
    rating: 4.7,
    reviewsCount: 88,
    tag: "Best Daily Wear",
    isNew: false,
    isBridal: false,
    image: "https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?auto=format&fit=crop&w=900&q=80",
    description: "For the modern teacher, doctor, banker, and professional in Betul. Breathable cotton-silk that stays crisp all day long with an understated touch of golden zari.",
    highlights: [
      "Extremely breathable in Betul's summer and monsoon",
      "Easy to pleat, zero slippage",
      "Subtle office-appropriate golden zari border",
      "Includes matching blouse piece"
    ],
    length: "5.5 meters saree + 0.8 meter blouse",
    washCare: "Gentle Handwash or Dry Clean",
    occasion: "Workwear / Teachers' Day / Daily Sophistication"
  },
  {
    id: "saree-12",
    name: "Embroidered Velvet & Georgette Unstitched Anarkali Suit Material",
    hindiName: "एम्ब्रॉयडर्ड जॉर्जेट अनस्टिच्ड अनारकली सूट मटेरियल",
    category: "dress-materials",
    fabric: "Pure Heavy Georgette with Santoon Lining",
    zari: "Tilla Zari & Sequins Threadwork",
    color: "Wine Burgundy",
    colorFamily: "Red",
    price: 3499,
    originalPrice: 4899,
    discount: "28% OFF",
    rating: 4.8,
    reviewsCount: 34,
    tag: "Party Hit",
    isNew: true,
    isBridal: false,
    image: "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?auto=format&fit=crop&w=900&q=80",
    description: "A show-stopping unstitched suit set in deep wine burgundy with all-over intricate tilla zari and mirror-shine sequins work. Ideal for winter weddings.",
    highlights: [
      "Top: 3.5m Heavy Georgette with lavish flare embroidery",
      "Bottom & Inner: 4.0m Heavy Santoon",
      "Dupatta: 2.3m Heavy designer cutwork border dupatta",
      "Can be stitched up to size 48 (5XL)"
    ],
    length: "Complete 3-Piece Ensemble Material",
    washCare: "Dry Clean Only",
    occasion: "Winter Weddings / Reception Guest / Sangeet"
  }
];

export const STORE_HIGHLIGHTS = [
  {
    icon: "Sparkles",
    title: "Pure & Golden Zari Collection",
    hindiTitle: "प्रामाणिक जरी एवं शुद्ध सिल्क",
    description: "Handcrafted lightweight sarees with exquisite golden zari borders, woven directly with artisans in Banaras, Chanderi, and Kanchipuram."
  },
  {
    icon: "MapPin",
    title: "Centrally Located in Kothi Bazar",
    hindiTitle: "कोठी बाजार, बैतूल का मुख्य केंद्र",
    description: "Situated on Cement Road, Kothi Bazar, Betul – the premier shopping destination for ethnic wear in the district."
  },
  {
    icon: "Clock",
    title: "Open Daily Until 9:00 PM",
    hindiTitle: "प्रतिदिन रात्रि 9:00 बजे तक खुला",
    description: "Convenient shopping hours 7 days a week, so you can shop peacefully with your family after office hours."
  },
  {
    icon: "Star",
    title: "4.1★ High Customer Rating",
    hindiTitle: "4.1★ विश्वसनीय गूगल एवं जस्टडायल रेटिंग",
    description: "Over 10,000+ satisfied families across Betul, Multai, Amla, and Shahpur who trust us for their auspicious occasions."
  },
  {
    icon: "Video",
    title: "WhatsApp Video Call Shopping",
    hindiTitle: "व्हाट्सएप वीडियो कॉल शॉपिंग",
    description: "Can't visit immediately? Browse our live racks over a personal 1-on-1 WhatsApp video call from your home."
  },
  {
    icon: "Scissors",
    title: "Complete Fall, Pico & Blouse Tailoring",
    hindiTitle: "फॉल, पीको एवं मैचिंग ब्लाउज सुविधा",
    description: "Walk out with a ready-to-drape saree with prompt professional fall, pico, and custom designer tailoring services."
  }
];

export const TESTIMONIALS = [
  {
    id: 1,
    name: "Sunita Agrawal",
    location: "Kothi Bazar, Betul",
    rating: 5,
    date: "2 weeks ago",
    text: "Shreenath Ji Sarees is our family's trusted store for all wedding purchases in Betul. We bought the complete bridal trousseau including Banarasi silk and lightweight zari sarees for my daughter's wedding. The staff is polite and rates are very reasonable compared to Bhopal or Nagpur!",
    verified: true,
    platform: "Google Review"
  },
  {
    id: 2,
    name: "Pooja Malviya",
    location: "Cement Road, Betul",
    rating: 5,
    date: "1 month ago",
    text: "The collection of lightweight sarees with golden zari borders is simply outstanding. They are so easy to drape and look very royal. Also loved their unstitched Chanderi dress materials. A must-visit store in Kothi Bazar!",
    verified: true,
    platform: "Google Review"
  },
  {
    id: 3,
    name: "Rajesh Sahu",
    location: "Multai, Betul District",
    rating: 5,
    date: "3 weeks ago",
    text: "We traveled from Multai specifically to shop at Shreenath Ji Sarees for our family function. The variety of silk sarees and bridal lehengas under one roof saved us so much time. Store is open till 9 PM which made evening shopping hassle-free.",
    verified: true,
    platform: "Justdial Review"
  },
  {
    id: 4,
    name: "Dr. Anamika Verma",
    location: "Civil Lines, Betul",
    rating: 4,
    date: "2 months ago",
    text: "Excellent collection of daily wear and festive cotton-silk sarees. Their customer service is warm, and they don't push you to buy. Very honest pricing and genuine 4.1+ rated shop in Betul.",
    verified: true,
    platform: "Google Review"
  }
];

export const INSTAGRAM_POSTS = [
  {
    id: "ig-1",
    imageUrl: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=600&q=80",
    caption: "New arrivals in royal Banarasi bridal silk! Draped in pure golden zari magic ✨ #ShreenathJiSarees #BetulShopping #KothiBazar #BridalSaree",
    likes: "348",
    comments: "24",
    link: "https://www.instagram.com/shrinath_jisarees/"
  },
  {
    id: "ig-2",
    imageUrl: "https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?auto=format&fit=crop&w=600&q=80",
    caption: "Trending emerald organza with delicate scalloped gold zari borders. Light as a breeze, regal as royalty 💚 #BetulFashion #OrganzaSaree",
    likes: "512",
    comments: "39",
    link: "https://www.instagram.com/shrinath_jisarees/"
  },
  {
    id: "ig-3",
    imageUrl: "https://images.unsplash.com/photo-1609357605129-26f69add5d6e?auto=format&fit=crop&w=600&q=80",
    caption: "Haldi & Wedding season favorites! Vibrant colors that make your Betul wedding memories timeless 💛 #SareesOfInstagram",
    likes: "420",
    comments: "31",
    link: "https://www.instagram.com/shrinath_jisarees/"
  },
  {
    id: "ig-4",
    imageUrl: "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&w=600&q=80",
    caption: "Dress materials with heavy zari dupattas just unboxed at our Kothi Bazar showroom! Visit us today till 9:00 PM 🛍️ #ShreenathJiSarees",
    likes: "295",
    comments: "18",
    link: "https://www.instagram.com/shrinath_jisarees/"
  }
];

export const TROUSSEAU_EVENTS = [
  {
    id: "haldi",
    title: "Haldi & Mehendi",
    hindiTitle: "हल्दी एवं मेहंदी",
    recommendedFabrics: "Chanderi Cotton-Silk, Organza, Georgette Bandhej",
    idealColors: "Mustard Gold, Haldi Yellow, Mehendi Green, Tangerine",
    tip: "Opt for lightweight sarees with subtle zari piping so you can move and dance freely without feeling weighed down."
  },
  {
    id: "sangeet",
    title: "Sangeet & Cocktail",
    hindiTitle: "संगीत एवं कॉकटेल नाइट",
    recommendedFabrics: "Shimmer Tissue Silk, Viscose Georgette, Organza",
    idealColors: "Midnight Blue, Wine Burgundy, Emerald Green, Rose Gold",
    tip: "A fluid georgette or glistening tissue drape reflects stage lighting beautifully during choreography."
  },
  {
    id: "wedding",
    title: "Main Wedding Ceremony (Pheras)",
    hindiTitle: "मुख्य वैवाहिक फेरे",
    recommendedFabrics: "Pure Banarasi Katan Silk, Heavy Zari Brocade",
    idealColors: "Crimson Red, Rani Pink, Bridal Maroon, Champagne Gold",
    tip: "Heavier zari with authentic Kadhwa or Tanchoi weaves creates the classic timeless bridal silhouette."
  },
  {
    id: "reception",
    title: "Grand Reception",
    hindiTitle: "शाही रिसेप्शन",
    recommendedFabrics: "Vintage Tissue Zardozi, Pastel Organza, Katan Silk",
    idealColors: "Powder Blue, Royal Purple, Champagne Gold, Peach Rose",
    tip: "Pastels or deep jewel tones paired with statement contrasting blouses make a regal impression."
  }
];

export const FAQS = [
  {
    question: "Where exactly is Shreenath Ji Sarees located in Betul?",
    hindiQuestion: "श्रीनाथ जी साड़ीज़ बैतूल में कहाँ स्थित है?",
    answer: "We are located on Cement Road, Kothi Bazar, Betul, Madhya Pradesh – 460001. We are in the commercial hub of Kothi Bazar, easily reachable by two-wheelers and four-wheelers with nearby parking."
  },
  {
    question: "What are your store timings?",
    hindiQuestion: "दुकान का समय क्या है?",
    answer: "We are open daily throughout the week from 10:30 AM until 9:00 PM, giving you plenty of time to shop comfortably with family after work hours."
  },
  {
    question: "Do you have lightweight sarees with golden zari borders?",
    hindiQuestion: "क्या आपके पास गोल्डन जरी बॉर्डर वाली लाइटवेट साड़ियाँ उपलब्ध हैं?",
    answer: "Yes, lightweight sarees with golden zari borders are one of our core specialties! We stock hundreds of designs in organza, chiffon, soft georgette, tissue, and lightweight Chanderi silks featuring delicate golden zari borders."
  },
  {
    question: "Do you offer WhatsApp video call shopping for customers outside Betul?",
    hindiQuestion: "क्या बाहर के ग्राहकों के लिए वीडियो कॉल शॉपिंग की सुविधा है?",
    answer: "Yes! If you are in Multai, Amla, Shahpur, Chhindwara, Bhopal or anywhere else, you can schedule a WhatsApp video call. Our dedicated staff will display sarees on live camera and ship safely to your doorstep."
  },
  {
    question: "Do you offer fall, pico, and blouse tailoring services?",
    hindiQuestion: "क्या फॉल, पीको और ब्लाउज सिलाई की सुविधा मिलती है?",
    answer: "Yes, we provide same-day or next-day fall, pico, and blouse piece cutting/tailoring on request so your saree is immediately ready to wear for your function."
  },
  {
    question: "What variety of dress materials and suits do you carry?",
    hindiQuestion: "आपके यहाँ किस प्रकार के ड्रेस मटेरियल और सूट उपलब्ध हैं?",
    answer: "We have an extensive collection of unstitched 3-piece suit materials in Chanderi silk, cotton, georgette, and designer velvet with heavy zari and embroidered dupattas for all festive and daily needs."
  }
];
