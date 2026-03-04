"use client";

import Image from "next/image";
import { Star } from "lucide-react";
import { products } from "@/data/mock-data";
import { useLanguage } from "./language-context";

export function BestSellersSection() {
  const top = products.slice(0, 4);
  const { language } = useLanguage();

  return (
    <section className="section py-8 sm:py-12">
      <div className="container">
        <p className="text-center text-[13px] font-semibold uppercase tracking-[0.14em] text-muted">{language === "es" ? "Tendencias" : "Trending now"}</p>
        <h2 className="mb-6 text-center text-2xl font-extrabold text-text sm:text-3xl">{language === "es" ? "Mas vendidos" : "Best Sellers"}</h2>
        <div className="hide-scrollbar flex gap-4 overflow-x-auto pb-2">
          {top.map((product) => (
            <article key={product.id} className="card-premium w-[82vw] shrink-0 overflow-hidden rounded-xl border border-black/10 bg-white shadow-sm sm:w-[44vw] lg:w-[30%]">
              <Image
                src={product.images[0]}
                alt={product.name}
                width={900}
                height={880}
                quality={80}
                sizes="(max-width: 640px) 82vw, (max-width: 1024px) 44vw, 30vw"
                className="h-72 w-full object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-bold">{product.name}</h3>
                <p className="mt-1 text-[18px] font-bold text-accent">EUR {product.price}</p>
                <div className="mt-2 flex items-center gap-1 text-gold">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} size={15} fill={i < Math.round(product.rating) ? "currentColor" : "none"} />
                  ))}
                  <span className="ml-1 text-[14px] font-semibold text-muted">{product.rating}</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
