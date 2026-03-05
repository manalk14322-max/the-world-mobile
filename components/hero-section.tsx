"use client";

import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight, Menu, User } from "lucide-react";
import { useEffect, useState } from "react";
import { useLanguage } from "./language-context";

const slides = [
  {
    image: "https://images.unsplash.com/photo-1695048133142-1a20484d2569?auto=format&fit=crop&w=1800&q=80",
    esTitle: "Nueva serie premium disponible",
    enTitle: "New premium series now available",
    esSubtitle: "Modelos de alto rendimiento con entrega 24-48h en Espana.",
    enSubtitle: "High-performance models with 24-48h delivery across Spain."
  },
  {
    image: "https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&w=1800&q=80",
    esTitle: "Accesorios originales para uso diario",
    enTitle: "Original accessories for everyday use",
    esSubtitle: "Fundas, protectores y carga rapida con garantia europea.",
    enSubtitle: "Cases, protectors and fast charging with EU warranty."
  },
  {
    image: "https://images.unsplash.com/photo-1567581935884-3349723552ca?auto=format&fit=crop&w=1800&q=80",
    esTitle: "Ofertas exclusivas por tiempo limitado",
    enTitle: "Exclusive limited-time offers",
    esSubtitle: "Precios especiales en smartphones seleccionados.",
    enSubtitle: "Special pricing on selected smartphones."
  },
  {
    image: "https://images.unsplash.com/photo-1512499617640-c74ae3a79d37?auto=format&fit=crop&w=1800&q=80",
    esTitle: "Compra segura, rapida y profesional",
    enTitle: "Secure, fast and professional shopping",
    esSubtitle: "Pago SSL, devolucion 30 dias y soporte experto.",
    enSubtitle: "SSL checkout, 30-day returns and expert support."
  },
  {
    image: "https://images.unsplash.com/photo-1605236453806-6ff36851218e?auto=format&fit=crop&w=1800&q=80",
    esTitle: "Novedades semanales para tu tienda",
    enTitle: "Weekly new arrivals for your store",
    esSubtitle: "Productos actualizados con stock real.",
    enSubtitle: "Updated catalog with real-time stock."
  },
  {
    image: "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?auto=format&fit=crop&w=1800&q=80",
    esTitle: "Calidad premium con estilo europeo",
    enTitle: "Premium quality with European style",
    esSubtitle: "Seleccion cuidada para clientes exigentes.",
    enSubtitle: "Curated selection for demanding customers."
  },
  {
    image: "https://images.unsplash.com/photo-1583573636246-18cb2246697f?auto=format&fit=crop&w=1800&q=80",
    esTitle: "Galaxy, iPhone y mas en un solo lugar",
    enTitle: "Galaxy, iPhone and more in one place",
    esSubtitle: "La mejor experiencia de compra para movil.",
    enSubtitle: "The best shopping experience for mobile tech."
  }
];

const copy = {
  es: {
    nav: ["Store", "Nuestro Contacto", "Novedades", "Oferta"],
    cta1: "Comprar ahora",
    cta2: "Ver colecciones",
    b1: "Entrega 24-48h",
    b2: "Pago seguro SSL",
    b3: "Garantia EU oficial"
  },
  en: {
    nav: ["Store", "Our Contact", "New Arrivals", "Offers"],
    cta1: "Shop now",
    cta2: "View collections",
    b1: "24-48h delivery",
    b2: "Secure SSL checkout",
    b3: "Official EU warranty"
  }
} as const;

export function HeroSection() {
  const [index, setIndex] = useState(0);
  const [showStickyBar, setShowStickyBar] = useState(false);
  const { language } = useLanguage();
  const t = copy[language];
  const slide = slides[index];

  useEffect(() => {
    const timer = window.setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 4200);
    return () => window.clearInterval(timer);
  }, []);

  useEffect(() => {
    const onScroll = () => setShowStickyBar(window.scrollY > 260);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section className="section pb-14 pt-6">
      {showStickyBar && (
        <div className="fixed left-0 right-0 top-20 z-40 hidden lg:block">
          <div className="container">
            <div className="mx-auto flex max-w-[1020px] items-center gap-6 rounded-xl border border-white/20 bg-[#0F1F48]/88 px-4 py-2.5 text-white shadow-md backdrop-blur-md">
              <button className="inline-flex items-center gap-2 rounded-full bg-[#2E63D7] px-4 py-2 text-[13px] font-semibold">
                <Menu size={15} />
                All Categories
              </button>
              <div className="flex items-center gap-7">
                {t.nav.map((item) => (
                  <Link key={item} href="/#top-products" className="text-[13px] font-semibold text-white/95 transition hover:text-[#C9D9FF]">
                    {item}
                  </Link>
                ))}
              </div>
              <button className="ml-auto rounded-full border border-white/40 bg-white/95 p-2 text-[#1E293B]">
                <User size={15} />
              </button>
            </div>
          </div>
        </div>
      )}
      <div className="container">
        <div className="relative mx-auto max-w-[1020px] overflow-hidden rounded-xl border border-black/10 shadow-md">
          <Image
            src={slide.image}
            alt="Campaign banner"
            width={1800}
            height={1200}
            priority
            quality={82}
            className="h-[650px] w-full object-cover"
            sizes="(max-width: 1024px) 100vw, 1020px"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0A1D4F]/84 via-[#173B86]/52 to-[#173B86]/22" />
          <div className="absolute left-4 right-4 top-4 z-20 hidden items-center gap-6 rounded-xl border border-white/25 bg-[#0F1F48]/60 px-4 py-3 text-white backdrop-blur-md lg:flex">
            <button className="inline-flex items-center gap-2 rounded-full bg-[#2E63D7] px-4 py-2 text-[14px] font-semibold">
              <Menu size={16} />
              All Categories
            </button>
            <div className="flex items-center gap-7">
              {t.nav.map((item) => (
                <Link key={item} href="/#top-products" className="text-[14px] font-semibold text-white/95 transition hover:text-[#C9D9FF]">
                  {item}
                </Link>
              ))}
            </div>
            <button className="ml-auto rounded-full border border-white/40 bg-white/95 p-2 text-[#1E293B]">
              <User size={16} />
            </button>
          </div>

          <button
            onClick={() => setIndex((prev) => (prev - 1 + slides.length) % slides.length)}
            className="btn-hover absolute left-4 top-1/2 z-10 -translate-y-1/2 rounded-full border border-white/40 bg-white/10 p-2 text-white backdrop-blur"
            aria-label="Previous slide"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={() => setIndex((prev) => (prev + 1) % slides.length)}
            className="btn-hover absolute right-4 top-1/2 z-10 -translate-y-1/2 rounded-full border border-white/40 bg-white/10 p-2 text-white backdrop-blur"
            aria-label="Next slide"
          >
            <ChevronRight size={20} />
          </button>

          <div className="absolute inset-0 flex items-center">
            <div className="max-w-[560px] px-7 text-white sm:px-9">
              <div className="rounded-2xl border border-white/20 bg-black/25 p-5 backdrop-blur-sm sm:p-7">
                <p className="mb-3 inline-flex rounded-full border border-white/40 bg-white/10 px-3 py-1 text-[12px] font-semibold uppercase tracking-[0.14em] text-white/95">
                  {language === "es" ? "Premium store for Spain" : "Premium store for Spain"}
                </p>
                <h1 className="text-4xl font-black leading-[1.04] sm:text-5xl">{language === "es" ? slide.esTitle : slide.enTitle}</h1>
                <p className="mt-4 text-[18px] leading-relaxed text-white/90">{language === "es" ? slide.esSubtitle : slide.enSubtitle}</p>
                <div className="mt-7 flex flex-wrap gap-3">
                  <Link href="/#top-products" className="btn-hover rounded-xl bg-[#2E63D7] px-7 py-3.5 text-[17px] font-semibold text-white shadow-md">
                    {t.cta1}
                  </Link>
                  <Link href="/#categories" className="btn-hover rounded-xl border border-white/65 px-6 py-3 text-[16px] font-semibold text-white transition hover:bg-white hover:text-[#1E293B]">
                    {t.cta2}
                  </Link>
                </div>
                <div className="mt-5 flex flex-wrap gap-2 text-[12px] font-semibold">
                  <span className="rounded-full border border-white/35 bg-white/10 px-3 py-1">{t.b1}</span>
                  <span className="rounded-full border border-white/35 bg-white/10 px-3 py-1">{t.b2}</span>
                  <span className="rounded-full border border-white/35 bg-white/10 px-3 py-1">{t.b3}</span>
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
      </div>
    </section>
  );
}
