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
};

export const products: Product[] = [
  {
    id: "iphone-15-pro-max",
    name: "iPhone 15 Pro Max",
    price: 1299,
    description: "A17 Pro performance, titanium body, and advanced camera system for pro users.",
    category: "Apple",
    rating: 4.8,
    images: [
      "https://images.unsplash.com/photo-1695048133142-1a20484d2569?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1567581935884-3349723552ca?auto=format&fit=crop&w=1200&q=80"
    ],
    colors: ["Natural Titanium", "Blue Titanium", "Black Titanium"],
    sizes: ["256GB", "512GB", "1TB"]
  },
  {
    id: "samsung-galaxy-s24-ultra",
    name: "Samsung Galaxy S24 Ultra",
    price: 1199,
    description: "Flagship Galaxy AI features, S Pen productivity, and ultra zoom camera power.",
    category: "Samsung",
    rating: 4.7,
    images: [
      "https://images.unsplash.com/photo-1583573636246-18cb2246697f?auto=format&fit=crop&w=1200&q=80"
    ],
    colors: ["Titanium Black", "Titanium Gray", "Titanium Violet"],
    sizes: ["256GB", "512GB", "1TB"]
  },
  {
    id: "xiaomi-14",
    name: "Xiaomi 14",
    price: 749,
    description: "Compact flagship with Leica optics, smooth display, and all-day battery life.",
    category: "Xiaomi",
    rating: 4.9,
    images: [
      "https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&w=1200&q=80"
    ],
    colors: ["Black", "White", "Jade Green"],
    sizes: ["256GB", "512GB"]
  },
  {
    id: "infinix-note-40-pro",
    name: "Infinix Note 40 Pro",
    price: 329,
    description: "Value-packed smartphone with fast charging, AMOLED display, and strong performance.",
    category: "Infinix",
    rating: 4.6,
    images: [
      "https://images.unsplash.com/photo-1512499617640-c74ae3a79d37?auto=format&fit=crop&w=1200&q=80"
    ],
    colors: ["Vintage Green", "Obsidian Black"],
    sizes: ["256GB"]
  }
];

export const testimonials = [
  {
    name: "Lucia M.",
    text: "Producto original, entrega en 24 horas y atencion impecable. Compra totalmente fiable en Espana.",
    stars: 5
  },
  {
    name: "Carlos R.",
    text: "Compre mi Samsung aqui y todo fue profesional: pago seguro, envio rapido y calidad excelente.",
    stars: 5
  },
  {
    name: "Marta G.",
    text: "Muy buena experiencia de compra, precios claros y devolucion sencilla. Recomendado.",
    stars: 4
  }
];
