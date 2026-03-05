"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useLanguage } from "./language-context";

const images = [
  "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9",
  "https://images.unsplash.com/photo-1598327105666-5b89351aff97",
  "https://images.unsplash.com/photo-1510552776732-01acc4b7ddc5",
  "https://images.unsplash.com/photo-1512499617640-c2f999098c01"
];

const copy = {
  es: {
    top: "Premium Mobile Store in Spain",
    title: "Secure, Fast and Professional Mobile Shopping",
    subtitle: "High quality smartphones and accessories with fast delivery across Spain.",
    cta1: "Shop Now",
    cta2: "View Collection",
    b1: "24-48h delivery",
    b2: "Secure SSL checkout",
    b3: "EU official warranty"
  },
  en: {
    top: "Premium Mobile Store in Spain",
    title: "Secure, Fast and Professional Mobile Shopping",
    subtitle: "High quality smartphones and accessories with fast delivery across Spain.",
    cta1: "Shop Now",
    cta2: "View Collection",
    b1: "24-48h delivery",
    b2: "Secure SSL checkout",
    b3: "EU official warranty"
  }
} as const;

export function HeroSection() {
  const [active, setActive] = useState(0);
  const { language } = useLanguage();
  const text = copy[language];

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActive((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => window.clearInterval(timer);
  }, []);

  return (
    <section className="section pt-8 sm:pt-10">
      <div className="container">
        <div className="relative overflow-hidden rounded-xl border border-black/10 bg-black shadow-md">
          {images.map((src, idx) => (
            <Image
              key={src}
              src={src}
              alt="Premium mobile background"
              width={1900}
              height={980}
              priority={idx === 0}
              quality={82}
              sizes="100vw"
              className={`absolute inset-0 h-[620px] w-full object-cover transition-all duration-700 ${
                idx === active ? "scale-105 opacity-100" : "scale-100 opacity-0"
              }`}
            />
          ))}

          <div
            className="absolute inset-0"
            style={{
              background: "linear-gradient(rgba(0,0,0,0.55), rgba(0,0,0,0.45))"
            }}
          />

          <div className="relative flex min-h-[620px] items-center">
            <div className="max-w-3xl px-6 py-12 text-white sm:px-10">
              <p className="inline-flex rounded-full border border-white/35 bg-white/10 px-3 py-1 text-[12px] font-semibold uppercase tracking-[0.12em]">
                {text.top}
              </p>
              <h1 className="mt-4 text-4xl font-black leading-tight sm:text-6xl">{text.title}</h1>
              <p className="mt-4 max-w-2xl text-[18px] text-white/90">{text.subtitle}</p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link href="/#top-products" className="btn-hover rounded-[10px] bg-accent px-7 py-3.5 text-[16px] font-semibold text-white">
                  {text.cta1}
                </Link>
                <Link href="/#categories" className="btn-hover rounded-[10px] border border-white/60 px-7 py-3.5 text-[16px] font-semibold text-white transition hover:bg-white hover:text-text">
                  {text.cta2}
                </Link>
              </div>
              <div className="mt-5 flex flex-wrap gap-2 text-[12px] font-semibold">
                <span className="rounded-full border border-white/35 bg-white/10 px-3 py-1">{text.b1}</span>
                <span className="rounded-full border border-white/35 bg-white/10 px-3 py-1">{text.b2}</span>
                <span className="rounded-full border border-white/35 bg-white/10 px-3 py-1">{text.b3}</span>
              </div>
            </div>
          </div>

          <div className="absolute bottom-5 left-1/2 z-10 flex -translate-x-1/2 gap-2">
            {images.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setActive(idx)}
                aria-label={`Slide ${idx + 1}`}
                className={`h-2.5 rounded-full transition ${idx === active ? "w-8 bg-white" : "w-2.5 bg-white/60"}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
