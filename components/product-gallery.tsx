"use client";

import Image from "next/image";
import { TouchEvent, useEffect, useMemo, useState } from "react";

type Props = {
  images: string[];
  alt: string;
};

export function ProductGallery({ images, alt }: Props) {
  const [active, setActive] = useState(0);
  const [touchStartX, setTouchStartX] = useState<number | null>(null);
  const [parallax, setParallax] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const value = Math.max(-10, Math.min(10, window.scrollY * 0.02));
      setParallax(value);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const activeImage = useMemo(() => images[active], [active, images]);

  const onTouchStart = (event: TouchEvent<HTMLDivElement>) => {
    setTouchStartX(event.touches[0].clientX);
  };

  const onTouchEnd = (event: TouchEvent<HTMLDivElement>) => {
    if (touchStartX === null) return;
    const end = event.changedTouches[0].clientX;
    const delta = end - touchStartX;
    if (delta < -45) {
      setActive((prev) => (prev + 1) % images.length);
    } else if (delta > 45) {
      setActive((prev) => (prev - 1 + images.length) % images.length);
    }
    setTouchStartX(null);
  };

  return (
    <div>
      <div onTouchStart={onTouchStart} onTouchEnd={onTouchEnd} className="overflow-hidden rounded-xl border border-black/5 bg-secondary-bg">
        <div style={{ transform: `translateY(${parallax}px)` }}>
          <Image
            src={activeImage}
            alt={alt}
            width={1000}
            height={1200}
            className="image-tilt h-[540px] w-full object-cover"
            priority
          />
        </div>
      </div>
      <div className="mt-4 grid grid-cols-4 gap-3">
        {images.map((img, idx) => (
          <button
            key={img}
            onClick={() => setActive(idx)}
            className={`overflow-hidden rounded-xl border transition ${idx === active ? "border-black" : "border-black/10"}`}
          >
            <Image src={img} alt={`${alt} ${idx + 1}`} width={220} height={220} className="h-24 w-full object-cover" />
          </button>
        ))}
      </div>
    </div>
  );
}
