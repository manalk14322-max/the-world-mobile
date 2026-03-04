"use client";

import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useState } from "react";
import { useLanguage } from "./language-context";

const slides = [
  {
    image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=1900&q=80",
    esTitle: "Tecnologia premium para un estilo profesional",
    enTitle: "Premium technology for a professional lifestyle",
    esSubtitle: "Moviles y accesorios originales con entrega rapida en toda Espana.",
    enSubtitle: "Original smartphones and accessories with fast delivery across Spain."
  },
  {
    image: "https://images.unsplash.com/photo-1583573636246-18cb2246697f?auto=format&fit=crop&w=1900&q=80",
    esTitle: "Nuevos lanzamientos, experiencia de compra superior",
    enTitle: "New launches, superior shopping experience",
    esSubtitle: "Descubre los modelos mas buscados con garantia europea.",
    enSubtitle: "Explore the most wanted models with official European warranty."
  },
  {
    image: "https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&w=1900&q=80",
    esTitle: "Smartphones de alta gama al mejor valor",
    enTitle: "High-end smartphones at the best value",
    esSubtitle: "Precios transparentes, pago seguro y soporte experto.",
    enSubtitle: "Transparent pricing, secure checkout, and expert support."
  },
  {
    image: "https://images.unsplash.com/photo-1567581935884-3349723552ca?auto=format&fit=crop&w=1900&q=80",
    esTitle: "Compra elegante, envio rapido, confianza total",
    enTitle: "Elegant shopping, fast shipping, complete trust",
    esSubtitle: "Todo lo que necesitas para comprar con tranquilidad.",
    enSubtitle: "Everything you need for a confident purchase journey."
  },
  {
    image: "https://images.unsplash.com/photo-1512499617640-c74ae3a79d37?auto=format&fit=crop&w=1900&q=80",
    esTitle: "Accesorios esenciales para potenciar tu movil",
    enTitle: "Essential accessories to elevate your phone",
    esSubtitle: "Calidad premium en cada detalle, pensada para Europa.",
    enSubtitle: "Premium quality in every detail, tailored for Europe."
  },
  {
    image: "https://images.unsplash.com/photo-1605236453806-6ff36851218e?auto=format&fit=crop&w=1900&q=80",
    esTitle: "Rendimiento, diseno y seguridad en un solo lugar",
    enTitle: "Performance, design and security in one place",
    esSubtitle: "Tu tienda moderna para tecnologia movil en Espana.",
    enSubtitle: "Your modern destination for mobile technology in Spain."
  },
  {
    image: "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?auto=format&fit=crop&w=1900&q=80",
    esTitle: "The world mobile: calidad que inspira confianza",
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
    stat1: "2,000+ clientes felices",
    stat2: "Entrega media 24h",
    stat3: "4.9/5 valoracion real"
  },
  en: {
    primary: "Shop Now",
    secondary: "View Collections",
    badge1: "24-48h delivery in Spain",
    badge2: "Secure SSL checkout",
    badge3: "Official EU warranty",
    stat1: "2,000+ happy customers",
    stat2: "24h average dispatch",
    stat3: "4.9/5 verified rating"
  }
} as const;

export function HeroSection() {
  const [index, setIndex] = useState(0);
  const { language } = useLanguage();
  const slide = slides[index];
  const text = staticCopy[language];

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
          className="h-[640px] w-full object-cover transition duration-700"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#1E3A8A]/90 via-[#1E3A8A]/68 to-[#1E3A8A]/36" />

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

        <div className="absolute inset-0 flex items-center">
          <div className="max-w-2xl px-6 text-white sm:px-10">
            <p className="mb-3 inline-flex rounded-full border border-white/40 bg-white/10 px-3 py-1 text-[12px] font-semibold uppercase tracking-[0.14em] text-white/95">
              {language === "es" ? "Tienda premium en Espana" : "Premium store for Spain"}
            </p>
            <h1 className="text-4xl font-black leading-tight sm:text-5xl lg:text-6xl">
              {language === "es" ? slide.esTitle : slide.enTitle}
            </h1>
            <p className="mt-5 max-w-2xl text-[18px] text-white/90">
              {language === "es" ? slide.esSubtitle : slide.enSubtitle}
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              <Link href="/#top-products" className="btn-hover cta-glow rounded-xl bg-primary px-8 py-4 text-[17px] font-semibold text-white">
                {text.primary}
              </Link>
              <Link href="/#categories" className="btn-hover rounded-xl border border-white/70 px-6 py-3 text-[16px] font-semibold transition hover:bg-white hover:text-text">
                {text.secondary}
              </Link>
            </div>
            <div className="mt-6 flex flex-wrap gap-2">
              <span className="rounded-full border border-white/35 bg-white/10 px-3 py-1 text-[13px] font-semibold text-white/95">{text.badge1}</span>
              <span className="rounded-full border border-white/35 bg-white/10 px-3 py-1 text-[13px] font-semibold text-white/95">{text.badge2}</span>
              <span className="rounded-full border border-white/35 bg-white/10 px-3 py-1 text-[13px] font-semibold text-white/95">{text.badge3}</span>
            </div>
            <div className="mt-6 grid max-w-xl gap-2 text-[13px] sm:grid-cols-3">
              <div className="rounded-lg border border-white/30 bg-white/10 px-3 py-2 font-semibold">{text.stat1}</div>
              <div className="rounded-lg border border-white/30 bg-white/10 px-3 py-2 font-semibold">{text.stat2}</div>
              <div className="rounded-lg border border-white/30 bg-white/10 px-3 py-2 font-semibold">{text.stat3}</div>
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
