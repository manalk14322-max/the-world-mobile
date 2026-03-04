"use client";

import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight, Menu, User } from "lucide-react";
import { useEffect, useState } from "react";
import { useLanguage } from "./language-context";

const slides = [
  {
    image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=1900&q=80",
    esTitle: "Super ofertas en moviles y accesorios premium",
    enTitle: "Super deals on premium mobiles and accessories",
    esSubtitle: "Productos originales con entrega rapida y soporte experto.",
    enSubtitle: "Original products with fast delivery and expert support."
  },
  {
    image: "https://images.unsplash.com/photo-1583573636246-18cb2246697f?auto=format&fit=crop&w=1900&q=80",
    esTitle: "Nuevos lanzamientos para clientes exigentes",
    enTitle: "New launches, superior shopping experience",
    esSubtitle: "Descubre los modelos mas buscados con garantia europea.",
    enSubtitle: "Explore the most wanted models with official European warranty."
  },
  {
    image: "https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&w=1900&q=80",
    esTitle: "Smartphones de alta gama al mejor precio",
    enTitle: "High-end smartphones at the best value",
    esSubtitle: "Precios transparentes, pago seguro y soporte experto.",
    enSubtitle: "Transparent pricing, secure checkout, and expert support."
  },
  {
    image: "https://images.unsplash.com/photo-1567581935884-3349723552ca?auto=format&fit=crop&w=1900&q=80",
    esTitle: "Compra facil, envio rapido, confianza total",
    enTitle: "Elegant shopping, fast shipping, complete trust",
    esSubtitle: "Todo lo que necesitas para comprar con tranquilidad.",
    enSubtitle: "Everything you need for a confident purchase journey."
  },
  {
    image: "https://images.unsplash.com/photo-1512499617640-c74ae3a79d37?auto=format&fit=crop&w=1900&q=80",
    esTitle: "Accesorios esenciales para potenciar tu telefono",
    enTitle: "Essential accessories to elevate your phone",
    esSubtitle: "Calidad premium en cada detalle, pensada para Europa.",
    enSubtitle: "Premium quality in every detail, tailored for Europe."
  },
  {
    image: "https://images.unsplash.com/photo-1605236453806-6ff36851218e?auto=format&fit=crop&w=1900&q=80",
    esTitle: "Rendimiento, diseno y seguridad en un solo sitio",
    enTitle: "Performance, design and security in one place",
    esSubtitle: "Tu tienda moderna para tecnologia movil en Espana.",
    enSubtitle: "Your modern destination for mobile technology in Spain."
  },
  {
    image: "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?auto=format&fit=crop&w=1900&q=80",
    esTitle: "The world mobile: tecnologia con garantia real",
    enTitle: "The world mobile: quality that builds trust",
    esSubtitle: "Mas de 2,000 clientes satisfechos ya compran con nosotros.",
    enSubtitle: "Trusted by 2,000+ satisfied customers across Spain."
  }
];

const staticCopy = {
  es: {
    primary: "Comprar ahora",
    secondary: "Ver colecciones",
    badge1: "Entrega 24-48h en Espana",
    badge2: "Pago seguro SSL",
    badge3: "Garantia oficial europea",
    trust: "Mas de 2,000 clientes satisfechos en Espana"
  },
  en: {
    primary: "Shop Now",
    secondary: "View Collections",
    badge1: "24-48h delivery in Spain",
    badge2: "Secure SSL checkout",
    badge3: "Official EU warranty",
    trust: "Trusted by 2,000+ satisfied customers in Spain"
  }
} as const;

const heroNav = {
  es: ["Store", "Nuestro Contacto", "Novedades", "Oferta"],
  en: ["Store", "Our Contact", "New Arrivals", "Offers"]
} as const;

export function HeroSection() {
  const [index, setIndex] = useState(0);
  const { language } = useLanguage();
  const slide = slides[index];
  const text = staticCopy[language];
  const nav = heroNav[language];

  useEffect(() => {
    const timer = window.setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 4200);
    return () => window.clearInterval(timer);
  }, []);

  return (
    <section className="section pb-16 pt-8 sm:pt-10">
      <div className="container relative overflow-hidden rounded-xl border border-black/10 shadow-md">
        <Image
          src={slide.image}
          alt="Premium mobile showcase"
          width={1900}
          height={980}
          priority
          quality={82}
          className="h-[560px] w-full object-cover transition duration-700"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0F2B6E]/86 via-[#1E3A8A]/56 to-[#1E3A8A]/24" />

        <div className="absolute left-4 right-4 top-4 z-20 hidden items-center gap-6 rounded-xl border border-white/20 bg-white/86 px-4 py-2.5 backdrop-blur lg:flex">
          <button className="inline-flex items-center gap-2 rounded-full bg-[#2E63D7] px-3.5 py-1.5 text-[13px] font-semibold text-white">
            <Menu size={16} />
            {language === "es" ? "All Categories" : "All Categories"}
          </button>
          <div className="flex items-center gap-7">
            {nav.map((item) => (
              <Link key={item} href="/#top-products" className="text-[14px] font-semibold text-[#1E293B] transition hover:text-[#2E63D7]">
                {item}
              </Link>
            ))}
          </div>
          <button className="ml-auto rounded-full border border-black/10 bg-white p-2 text-[#1E293B]">
            <User size={16} />
          </button>
        </div>

        <button
          onClick={() => setIndex((prev) => (prev - 1 + slides.length) % slides.length)}
          className="btn-hover absolute left-4 top-1/2 z-10 -translate-y-1/2 rounded-full border border-white/40 bg-white/15 p-2 text-white backdrop-blur"
          aria-label="Previous slide"
        >
          <ChevronLeft size={20} />
        </button>
        <button
          onClick={() => setIndex((prev) => (prev + 1) % slides.length)}
          className="btn-hover absolute right-4 top-1/2 z-10 -translate-y-1/2 rounded-full border border-white/40 bg-white/15 p-2 text-white backdrop-blur"
          aria-label="Next slide"
        >
          <ChevronRight size={20} />
        </button>

        <div className="absolute inset-0 flex items-center pt-16 lg:pt-10">
          <div className="max-w-2xl px-6 sm:px-10">
            <div className="rounded-2xl border border-white/20 bg-black/20 p-5 backdrop-blur-sm sm:p-7">
            <p className="mb-3 inline-flex rounded-full border border-white/40 bg-white/10 px-3 py-1 text-[12px] font-semibold uppercase tracking-[0.14em] text-white/95">
              {language === "es" ? "Tienda premium en Espana" : "Premium store for Spain"}
            </p>
            <h1 className="text-3xl font-black leading-[1.05] text-white sm:text-4xl lg:text-5xl">
              {language === "es" ? slide.esTitle : slide.enTitle}
            </h1>
            <p className="mt-4 max-w-xl text-[17px] leading-relaxed text-white/90">
              {language === "es" ? slide.esSubtitle : slide.enSubtitle}
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Link href="/#top-products" className="btn-hover cta-glow rounded-xl bg-primary px-8 py-4 text-[17px] font-semibold text-white">
                {text.primary}
              </Link>
              <Link href="/#categories" className="btn-hover rounded-xl border border-white/70 px-6 py-3 text-[16px] font-semibold transition hover:bg-white hover:text-text">
                {text.secondary}
              </Link>
            </div>
            <div className="mt-5 flex flex-wrap gap-2">
              <span className="rounded-full border border-white/35 bg-white/10 px-3 py-1 text-[13px] font-semibold text-white/95">{text.badge1}</span>
              <span className="rounded-full border border-white/35 bg-white/10 px-3 py-1 text-[13px] font-semibold text-white/95">{text.badge2}</span>
              <span className="rounded-full border border-white/35 bg-white/10 px-3 py-1 text-[13px] font-semibold text-white/95">{text.badge3}</span>
            </div>
            <div className="mt-4 rounded-lg border border-white/25 bg-white/10 px-3 py-2 text-[13px] font-semibold text-white/95">
              {text.trust}
            </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-5 left-1/2 z-10 flex -translate-x-1/2 gap-2">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              aria-label={`Slide ${i + 1}`}
              className={`h-2.5 rounded-full transition ${i === index ? "w-7 bg-white" : "w-2.5 bg-white/60"}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
