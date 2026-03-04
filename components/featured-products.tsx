"use client";

import Image from "next/image";
import Link from "next/link";
import { Star } from "lucide-react";
import { products } from "@/data/mock-data";
import { useFadeInOnScroll } from "@/lib/use-fade-in-on-scroll";
import { useLanguage } from "./language-context";

export function FeaturedProducts() {
  const { ref, visible } = useFadeInOnScroll();
  const { language } = useLanguage();

  return (
    <section id="top-products" className="section py-8 sm:py-12">
      <div ref={ref} className={`container fade-in ${visible ? "visible" : ""}`}>
        <h2 className="mb-6 text-2xl font-extrabold text-text sm:text-3xl">{language === "es" ? "Top Productos" : "Top Products"}</h2>
        <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {products.map((product) => (
            <article key={product.id} className="card-premium group overflow-hidden rounded-xl border border-black/10 bg-white shadow-sm hover:shadow-md">
              <div className="relative overflow-hidden">
                <Image
                  src={product.images[0]}
                  alt={product.name}
                  width={640}
                  height={760}
                  quality={80}
                  sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 25vw"
                  className="h-[21rem] w-full object-cover transition duration-500 group-hover:scale-105"
                />
                <Link href={`/product/${product.id}`} className="absolute bottom-3 left-1/2 -translate-x-1/2 rounded-xl bg-primary px-4 py-2 text-[14px] font-semibold text-white opacity-0 transition duration-300 group-hover:opacity-100">
                  {language === "es" ? "Anadir al carrito" : "Add to Cart"}
                </Link>
              </div>
              <div className="p-4">
                <h3 className="text-xl font-bold text-text">{product.name}</h3>
                <p className="mt-1 text-[22px] font-extrabold text-text">EUR {product.price}</p>
                <div className="mt-2 flex items-center gap-1 text-gold">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} size={14} fill={i < Math.round(product.rating) ? "currentColor" : "none"} />
                  ))}
                  <span className="ml-1 text-[13px] font-semibold text-muted">{product.rating}</span>
                </div>
                <p className="mt-2 text-[15px] text-muted">{product.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
