"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import heroOne from "@/public/1.png";
import heroThree from "@/public/3.png";
import heroFour from "@/public/4.png";

const images = [
  heroOne,
  heroThree,
  heroFour
];

export function HeroSection() {
  const [active, setActive] = useState(0);

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
              key={src.src}
              src={src}
              alt="Premium mobile background"
              width={1900}
              height={980}
              priority={idx === 0}
              quality={82}
              sizes="100vw"
              className={`absolute inset-0 h-full w-full object-cover transition-all duration-700 ${
                idx === active ? "scale-105 opacity-100" : "scale-100 opacity-0"
              }`}
            />
          ))}

          <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent" />
          <div className="relative min-h-[72vh] sm:min-h-[78vh] lg:min-h-[82vh]" />

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
