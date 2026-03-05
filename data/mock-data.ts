export type Product = {
  id: string;
  name: string;
  price: number;
  description: string;
  category: string;
  rating: number;
  images: string[];
  colors: string[];
  sizes: string[];
  isBestSeller?: boolean;
  isNew?: boolean;
  isTrending?: boolean;
};

export const storeCategories = [
  "Chargers",
  "Cables",
  "Earphones",
  "Powerbanks",
  "Phone Covers",
  "Screen Protectors",
  "Wireless Accessories",
  "Smartphones"
];

export const products: Product[] = [
  {
    id: "iphone-15-pro-max",
    name: "iPhone 15 Pro Max",
    price: 1299,
    description: "A17 Pro performance, titanium body and flagship camera for premium users.",
    category: "Smartphones",
    rating: 4.9,
    images: ["https://images.unsplash.com/photo-1695048133142-1a20484d2569?auto=format&fit=crop&w=1200&q=80"],
    colors: ["Natural Titanium", "Blue Titanium", "Black Titanium"],
    sizes: ["256GB", "512GB", "1TB"],
    isBestSeller: true,
    isTrending: true
  },
  {
    id: "samsung-s24-ultra",
    name: "Samsung Galaxy S24 Ultra",
    price: 1199,
    description: "Galaxy AI flagship with pro-grade zoom and powerful battery life.",
    category: "Smartphones",
    rating: 4.8,
    images: ["https://images.unsplash.com/photo-1583573636246-18cb2246697f?auto=format&fit=crop&w=1200&q=80"],
    colors: ["Titanium Black", "Titanium Gray", "Titanium Violet"],
    sizes: ["256GB", "512GB", "1TB"],
    isBestSeller: true
  },
  {
    id: "xiaomi-14",
    name: "Xiaomi 14",
    price: 749,
    description: "Compact flagship with Leica camera tuning and smooth display.",
    category: "Smartphones",
    rating: 4.7,
    images: ["https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&w=1200&q=80"],
    colors: ["Black", "White", "Green"],
    sizes: ["256GB", "512GB"],
    isTrending: true
  },
  {
    id: "anker-gan-65w",
    name: "Anker GaN Fast Charger 65W",
    price: 69,
    description: "Compact GaN charger for fast and safe charging across devices.",
    category: "Chargers",
    rating: 4.8,
    images: ["https://images.unsplash.com/photo-1585338107529-13afc5f02586?auto=format&fit=crop&w=1200&q=80"],
    colors: ["Black", "White"],
    sizes: ["65W"],
    isNew: true
  },
  {
    id: "baseus-100w-cable",
    name: "Baseus USB-C Cable 100W",
    price: 19,
    description: "Durable high-speed cable for charging and data transfer.",
    category: "Cables",
    rating: 4.6,
    images: ["https://images.unsplash.com/photo-1625772452859-1c03d5bf1137?auto=format&fit=crop&w=1200&q=80"],
    colors: ["Black", "Blue"],
    sizes: ["1m", "2m"],
    isBestSeller: true
  },
  {
    id: "sony-wf1000xm5",
    name: "Sony WF-1000XM5 Earbuds",
    price: 299,
    description: "Premium ANC earbuds with crystal-clear call quality.",
    category: "Earphones",
    rating: 4.9,
    images: ["https://images.unsplash.com/photo-1606220588913-b3aacb4d2f37?auto=format&fit=crop&w=1200&q=80"],
    colors: ["Black", "Silver"],
    sizes: ["Standard"],
    isTrending: true
  },
  {
    id: "aukey-20000mah",
    name: "Aukey Powerbank 20000mAh",
    price: 49,
    description: "High-capacity powerbank with dual fast-charge output.",
    category: "Powerbanks",
    rating: 4.7,
    images: ["https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?auto=format&fit=crop&w=1200&q=80"],
    colors: ["Black"],
    sizes: ["20000mAh"],
    isNew: true
  },
  {
    id: "pitaka-magsafe-case",
    name: "Pitaka MagSafe Cover",
    price: 59,
    description: "Aramid-fiber slim case with premium texture and MagSafe support.",
    category: "Phone Covers",
    rating: 4.8,
    images: ["https://images.unsplash.com/photo-1565849904461-04a58ad377e0?auto=format&fit=crop&w=1200&q=80"],
    colors: ["Black", "Blue"],
    sizes: ["iPhone 15 Pro", "iPhone 15 Pro Max"],
    isBestSeller: true
  },
  {
    id: "esr-screen-protector",
    name: "ESR Tempered Screen Protector",
    price: 25,
    description: "9H tempered protection with anti-fingerprint coating.",
    category: "Screen Protectors",
    rating: 4.5,
    images: ["https://images.unsplash.com/photo-1572569511254-d8f925fe2cbb?auto=format&fit=crop&w=1200&q=80"],
    colors: ["Clear"],
    sizes: ["6.1 inch", "6.7 inch"],
    isTrending: true
  },
  {
    id: "belkin-magsafe-stand",
    name: "Belkin MagSafe Wireless Stand",
    price: 99,
    description: "Elegant wireless charging stand for desk and bedside setup.",
    category: "Wireless Accessories",
    rating: 4.7,
    images: ["https://images.unsplash.com/photo-1583321500900-82807e458f3c?auto=format&fit=crop&w=1200&q=80"],
    colors: ["White", "Black"],
    sizes: ["15W"],
    isNew: true
  },
  {
    id: "apple-20w-adapter",
    name: "Apple USB-C Power Adapter 20W",
    price: 29,
    description: "Official Apple adapter for efficient and safe fast charging.",
    category: "Chargers",
    rating: 4.8,
    images: ["https://images.unsplash.com/photo-1625723044792-44de16ccb4e9?auto=format&fit=crop&w=1200&q=80"],
    colors: ["White"],
    sizes: ["20W"],
    isBestSeller: true
  },
  {
    id: "satechi-aluminum-hub",
    name: "Satechi USB-C Mobile Hub",
    price: 79,
    description: "Premium aluminum hub for mobile creators and power users.",
    category: "Wireless Accessories",
    rating: 4.6,
    images: ["https://images.unsplash.com/photo-1625723044792-44de16ccb4e9?auto=format&fit=crop&w=1200&q=80"],
    colors: ["Space Gray"],
    sizes: ["6-in-1"],
    isTrending: true
  }
];
