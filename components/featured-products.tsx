"use client";

import Image from "next/image";
import Link from "next/link";
import { products } from "@/data/mock-data";
import { useFadeInOnScroll } from "@/lib/use-fade-in-on-scroll";
import { useEffect, useRef, useState } from "react";

export function FeaturedProducts() {
  const { ref, visible } = useFadeInOnScroll();
  const trackRef = useRef<HTMLDivElement | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const startXRef = useRef(0);
  const startScrollLeftRef = useRef(0);
  const movedRef = useRef(false);
  const lastInteractionRef = useRef(0);
  const loopedProducts = [...products, ...products];

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;

    let frame = 0;
    const speed = 0.65;

    const tick = () => {
      if (!isDragging && Date.now() - lastInteractionRef.current > 900) {
        el.scrollLeft += speed;
        if (el.scrollLeft >= el.scrollWidth / 2) {
          el.scrollLeft = 0;
        }
      }
      frame = window.requestAnimationFrame(tick);
    };

    frame = window.requestAnimationFrame(tick);
    return () => window.cancelAnimationFrame(frame);
  }, [isDragging]);

  const onPointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    const el = trackRef.current;
    if (!el) return;
    setIsDragging(true);
    movedRef.current = false;
    startXRef.current = e.clientX;
    startScrollLeftRef.current = el.scrollLeft;
    lastInteractionRef.current = Date.now();
  };

  const onPointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!isDragging) return;
    const el = trackRef.current;
    if (!el) return;

    const delta = e.clientX - startXRef.current;
    if (Math.abs(delta) > 6) movedRef.current = true;
    el.scrollLeft = startScrollLeftRef.current - delta * 1.45;
    lastInteractionRef.current = Date.now();

    const half = el.scrollWidth / 2;
    if (el.scrollLeft < 0) {
      el.scrollLeft += half;
      startScrollLeftRef.current = el.scrollLeft;
      startXRef.current = e.clientX;
    } else if (el.scrollLeft >= half) {
      el.scrollLeft -= half;
      startScrollLeftRef.current = el.scrollLeft;
      startXRef.current = e.clientX;
    }
  };

  const onPointerUp = () => {
    setIsDragging(false);
    lastInteractionRef.current = Date.now();
    window.setTimeout(() => {
      movedRef.current = false;
    }, 80);
  };

  return (
    <section id="featured" className="section bg-white py-10 sm:py-16">
      <div ref={ref} className={`container fade-in ${visible ? "visible" : ""}`}>
        <div className="mb-6 flex flex-wrap items-end justify-between gap-3 sm:mb-8">
          <div>
            <p className="text-[14px] font-medium text-accent">Top picks this week</p>
            <h2 className="text-2xl font-extrabold sm:text-3xl md:text-4xl">Featured Mobiles</h2>
          </div>
          <Link href="/product/iphone-15-pro-max" className="text-[16px] text-accent">
            View all
          </Link>
        </div>

        <div
          ref={trackRef}
          className={`hide-scrollbar flex gap-4 overflow-x-auto pb-2 sm:gap-6 ${isDragging ? "cursor-grabbing" : "cursor-grab"}`}
          onPointerDown={onPointerDown}
          onPointerMove={onPointerMove}
          onPointerUp={onPointerUp}
          onPointerCancel={onPointerUp}
          onPointerLeave={onPointerUp}
        >
          {loopedProducts.map((product, index) => (
            <article
              key={`${product.id}-${index}`}
              className="group w-[86vw] shrink-0 overflow-hidden rounded-xl border border-black/10 bg-white shadow-sm transition hover:shadow-md sm:w-[46vw] lg:w-[31%]"
            >
              <div className="relative overflow-hidden">
                <Image
                  src={product.images[0]}
                  alt={product.name}
                  width={700}
                  height={800}
                  className="h-64 w-full object-cover transition duration-500 group-hover:scale-105 sm:h-72"
                />
                <span className="absolute left-3 top-3 rounded-full bg-white/95 px-3 py-1 text-[12px] font-semibold text-text shadow-sm">
                  {product.category}
                </span>
                <Link
                  href={`/product/${product.id}`}
                  onClick={(e) => {
                    if (movedRef.current) e.preventDefault();
                  }}
                  className="absolute bottom-3 left-1/2 -translate-x-1/2 rounded-xl bg-black px-4 py-2 text-[15px] font-medium text-white opacity-0 shadow-sm transition group-hover:opacity-100"
                >
                  Add to Cart
                </Link>
              </div>
              <div className="p-4">
                <h3 className="mt-1 text-xl font-bold">{product.name}</h3>
                <p className="mt-2 text-[18px] font-semibold">${product.price}</p>
                <p className="mt-2 min-h-[48px] text-[15px] text-muted">{product.description}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {product.sizes.slice(0, 2).map((storage) => (
                    <span key={storage} className="rounded-full border border-black/10 px-3 py-1 text-[12px] font-medium text-muted">
                      {storage}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
