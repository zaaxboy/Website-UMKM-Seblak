// ==========================================
// DATA CONFIG & CONTENT UNTUK SEBLAKKUY
// ==========================================

export const BRAND_INFO = {
  name: "SEBLAKKUY",
  tagline: "Pedes Nagih, Toping Ngeramein",
  subTagline: "Seblak street food level up khas Gen Z! Topping melimpah, level pedas fleksibel dari ramah perut sampai merem melek.",
  whatsappNumber: "6281234567890",
  address: "Jl. Contoh Raya No. 123, Pemalang, Jawa Tengah",
  mapsEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126743.58584879208!2d109.3090623!3d-6.8897534!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e6dcf3586d13267%3A0x4027a76e352efe0!2sPemalang%2C%20Pemalang%20Regency%2C%20Central%20Java!5e0!3m2!1sen!2sid!4v1700000000000!5m2!1sen!2sid",
  openHours: "Setiap Hari, 10.00 - 22.00 WIB",
  socials: {
    instagram: "https://instagram.com/#",
    tiktok: "https://tiktok.com/#",
    whatsapp: "https://wa.me/6281234567890"
  }
};

export const FEATURES_DATA = [
  {
    id: 1,
    icon: "Flame",
    title: "Pedas Level 1-5",
    description: "Bebas atur tingkat kepedasan dari racikan santai pemula sampai Level 5 Neraka Dunia!"
  },
  {
    id: 2,
    icon: "UtensilsCrossed",
    title: "Topping Lengkap & Custom",
    description: "Bosan seblak polos? Pilih 15+ jenis topping favoritmu, bikin seblak impian sesukamu!"
  },
  {
    id: 3,
    icon: "Truck",
    title: "Bisa Delivery Cepat",
    description: "Lagi mager keluar? Tenang, pesanan siap diantar hangat-hangat langsung ke depan rumahmu."
  },
  {
    id: 4,
    icon: "Clock",
    title: "Pesan Online 24 Jam",
    description: "Sistem order otomatis langsung terhubung ke WhatsApp admin kami tanpa ribet."
  }
];

export const MENU_DATA = [
  // CATEGORY 1: SEBLAK (MAKANAN)
  {
    id: 1,
    name: "Seblak Original Rempah",
    category: "Seblak",
    description: "Racikan bumbu kencur autentik dengan kerupuk basah, ceker empuk, bakso gurih, dan telur kocok.",
    price: 15000,
    badge: "Best Seller",
    badgeColor: "bg-amber-500 text-white",
    image: "https://images.unsplash.com/photo-1555126634-323283e090fa?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 2,
    name: "Seblak Mie Ceker Pedas",
    category: "Seblak",
    description: "Kombinasi mie kuning kenyal, ceker lembut meluncur, sosis sapi pilihan & kuah pedas gurih.",
    price: 18000,
    badge: "Favorit",
    badgeColor: "bg-[#C8102E] text-white",
    image: "https://images.unsplash.com/photo-1612927601601-6638404737ce?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 3,
    name: "Seblak Cheese Melted",
    category: "Seblak",
    description: "Kuah pedas gurih bertabur keju mozzarella lumer, dumpling keju, & sosis bratwurst impian.",
    price: 20000,
    badgeColor: "bg-amber-400 text-gray-900 font-extrabold",
    image: "https://images.unsplash.com/photo-1541544741938-0af808871cc0?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 4,
    name: "Seblak Seafood Komplit",
    category: "Seblak",
    description: "Sensasi laut berkuah pedas! Udang segar, cumi kenyal, bakso ikan, & dumpling seafood.",
    price: 22000,
    Color: "bg-emerald-600 text-white",
    image: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 5,
    name: "Seblak Cabe Hijau Rempah",
    category: "Seblak",
    description: "Olahan cabai hijau segar pilihan dengan aroma kencur wangi, ceker empuk & bakso sapi iga.",
    price: 18000,
    badgeColor: "bg-green-600 text-white",
    image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 6,
    name: "Seblak Jumbo Topping Lengkap",
    category: "Seblak",
    description: "Porsi brutal untuk yang lapar berat! Semua topping gabung: ceker, sosis, bakso, cireng, & dumpling.",
    price: 28000,
    badgeColor: "bg-red-700 text-white",
    image: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=600&q=80"
  },

  // CATEGORY 2: MINUMAN (DRINKS)
  {
    id: 7,
    name: "Es Teh Manis Jumbo",
    category: "Minuman",
    description: "Penawar pedas alami! Es teh seduh segar dengan gula asli dingin menyegarkan tenggorokan.",
    price: 5000,
    badgeColor: "bg-sky-500 text-white",
    image: "https://images.unsplash.com/photo-1556679343-c7306c1976bc?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 8,
    name: "Es Jeruk Peras Murni",
    category: "Minuman",
    description: "Perasan jeruk segar asli dingin manis asam balance banget abis makan seblak pedas.",
    price: 6000,
    badgeColor: "bg-orange-500 text-white",
    image: "https://images.unsplash.com/photo-1613478223719-2ab802602423?auto=format&fit=crop&w=600&q=80",
    defaultLevel: 0
  },
  {
    id: 9,
    name: "Es Lychee Tea Float",
    category: "Minuman",
    description: "Perpaduan teh rasa buah leci manis dingin bertabur buah leci asli & es krim manis.",
    price: 8000,
    badge: "Favorit",
    badgeColor: "bg-pink-500 text-white",
    image: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=600&q=80",
    defaultLevel: 0
  },
  {
    id: 10,
    name: "Es Mangga Float Creamy",
    category: "Minuman",
    description: "Jus mangga harum manis dingin dilapisi float es krim vanilla manis penyejuk lidah.",
    price: 10000,
    badge: "Best Seller",
    badgeColor: "bg-amber-500 text-white",
    image: "https://images.unsplash.com/photo-1546173159-315724a31696?auto=format&fit=crop&w=600&q=80",
    defaultLevel: 0
  },
  {
    id: 11,
    name: "Es Alpukat Kocok Lumer",
    category: "Minuman",
    description: "Alpukat mentega kocok kental bertabur susu kental manis cokelat & es serut manis.",
    price: 12000,
    badgeColor: "bg-emerald-600 text-white",
    image: "https://images.unsplash.com/photo-1525385133512-2f3bdd039054?auto=format&fit=crop&w=600&q=80",
    defaultLevel: 0
  }
];

export const SPICY_LEVELS = [
  { level: 1, name: "Anak Kecil", emoji: "👶", desc: "Pedes santai, aman buat pemula" },
  { level: 2, name: "Pedes Manis Santai", emoji: "😊", desc: "Pedes pas, masih santuy" },
  { level: 3, name: "Lumayan Keringetan", emoji: "🌶️", desc: "Mulai bikin lidah bergoyang" },
  { level: 4, name: "Merem Melek", emoji: "🔥", desc: "Pedes mantap bikin mata segar" },
  { level: 5, name: "Neraka Dunia", emoji: "💀", desc: "Bikin ketagihan sekaligus nangis guling-guling!" }
];

export const EXTRA_TOPPINGS = [
  { id: "ceker", name: "Ceker Empuk", price: 3000, icon: "🍗" },
  { id: "sosis", name: "Sosis Sapi", price: 3000, icon: "🌭" },
  { id: "bakso", name: "Bakso Sapi", price: 2000, icon: "🧆" },
  { id: "telur", name: "Telur Kocok/Mata Sapi", price: 2000, icon: "🥚" },
  { id: "cireng", name: "Cireng Crispy", price: 3000, icon: "🥟" },
  { id: "dumpling", name: "Dumpling Keju", price: 4000, icon: "🧀" },
  { id: "enoki", name: "Jamur Enoki", price: 4000, icon: "🍄" },
  { id: "cikua", name: "Chikuwa Seafood", price: 3000, icon: "🍢" }
];

export const ORDER_STEPS = [
  {
    step: "01",
    title: "Pilih Menu & Level Pedas",
    desc: "Tentukan seblak pilihanmu, pilih level pedas dari 1-5, dan tambahkan topping favoritmu."
  },
  {
    step: "02",
    title: "Klik Order via WhatsApp",
    desc: "Sistem kami akan memformat detail pesananmu secara otomatis tanpa perlu ngetik ulang."
  },
  {
    step: "03",
    title: "Konfirmasi & Bayar",
    desc: "Admin akan merespon total biaya & memberikan pilihan QRIS / Transfer / COD."
  },
  {
    step: "04",
    title: "Pesanan Diantar / Diambil",
    desc: "Duduk manis dan seblak pedas nagih siap diantar ke tempatmu hangat-hangat!"
  }
];

export const TESTIMONIALS_DATA = [
  {
    id: 1,
    name: "Siska Amelia",
    role: "Mahasiswi & Foodie",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80",
    rating: 5,
    comment: "Pedesnya juara bgt, toppingnya numpuk!! Bumbu kencurnya kerasa banget bukan sekadar bumbu instant. Fix langganan tiada tanding 🔥😭"
  },
  {
    id: 2,
    name: "Rian Prasetyo",
    role: "Gamer & Gen Z",
    avatar: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=150&q=80",
    rating: 5,
    comment: "Cobain Level 5 pas nongkrong bareng temen, asli merem melek! Tapi anehnya malah nagih parah. Dumpling kejunya melumer pas dikunyah."
  },
  {
    id: 3,
    name: "Nabila Putri",
    role: "Content Creator",
    avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=150&q=80",
    rating: 5,
    comment: "Pesan via WhatsApp gampang bgt tinggal klik! Sambalnya nendang, ceker empuk bgt ga perlu usaha gigitnya. Recommended seblak Pemalang!"
  }
];
