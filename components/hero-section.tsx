"use client";

import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useState } from "react";
import { useLanguage } from "./language-context";

const slides = [
  "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=1900&q=80",
  "https://images.unsplash.com/photo-1583573636246-18cb2246697f?auto=format&fit=crop&w=1900&q=80",
  "https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&w=1900&q=80",
  "https://images.unsplash.com/photo-1567581935884-3349723552ca?auto=format&fit=crop&w=1900&q=80",
  "https://images.unsplash.com/photo-1512499617640-c74ae3a79d37?auto=format&fit=crop&w=1900&q=80",
  "https://images.unsplash.com/photo-1605236453806-6ff36851218e?auto=format&fit=crop&w=1900&q=80",
  "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?auto=format&fit=crop&w=1900&q=80"
];

const copy = {
  es: {
    title: "Descubre Accesorios Premium para Movil",
    subtitle: "Calidad profesional, entrega rapida y compra segura en toda Espana.",
    primary: "Comprar ahora",
    secondary: "Ver colecciones",
    badge1: "Envio rapido 24-48h",
    badge2: "Pago seguro SSL",
    socialProof: "Mas de 2,000 clientes satisfechos en Espana"
  },
  en: {
    title: "Discover Premium Mobile Essentials",
    subtitle: "Professional quality, fast delivery, and secure checkout across Spain.",
    primary: "Shop Now",
    secondary: "View Collections",
    badge1: "Fast 24-48h Delivery",
    badge2: "Secure SSL Payments",
    socialProof: "Trusted by 2,000+ satisfied customers in Spain"
  }
} as const;

export function HeroSection() {
  const [index, setIndex] = useState(0);
  const { language } = useLanguage();
  const text = copy[language];

  useEffect(() => {
    const timer = window.setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 3500);
    return () => window.clearInterval(timer);
  }, []);

  return (
    <section className="section pb-16 pt-8 sm:pt-10">
      <div className="container relative overflow-hidden rounded-xl border border-black/10">
        <Image
          src={slides[index]}
          alt="Premium mobile showcase"
          width={1900}
          height={980}
          priority
          quality={80}
          className="h-[620px] w-full object-cover transition duration-700"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#1E3A8A]/88 via-[#1E3A8A]/64 to-[#1E3A8A]/38" />

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

        <div className="absolute inset-0 flex items-center pt-14 sm:pt-0">
          <div className="max-w-3xl px-6 text-white sm:px-10">
            <h1 className="text-4xl font-black leading-tight sm:text-6xl lg:text-7xl">{text.title}</h1>
            <p className="mt-5 max-w-2xl text-[18px] text-white/90">{text.subtitle}</p>
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
            </div>
            <p className="mt-4 text-[14px] text-white/80">{text.socialProof}</p>
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
