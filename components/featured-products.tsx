"use client";

import Image from "next/image";
import Link from "next/link";
import { Star } from "lucide-react";
import { products } from "@/data/mock-data";
import { useFadeInOnScroll } from "@/lib/use-fade-in-on-scroll";
import { useCart } from "./cart-context";

export function FeaturedProducts() {
  const { ref, visible } = useFadeInOnScroll();
  const { addItem } = useCart();
  const trending = products.filter((product) => product.isTrending).slice(0, 8);

  return (
    <section id="top-products" className="section py-10 sm:py-14">
      <div ref={ref} className={`container fade-in ${visible ? "visible" : ""}`}>
        <h2 className="mb-7 text-3xl font-extrabold text-text">Trending Products</h2>
        <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {trending.map((product) => (
            <article key={product.id} className="group card-premium overflow-hidden rounded-xl border border-black/10 bg-white shadow-sm hover:shadow-md">
              <div className="relative overflow-hidden">
                <div className="absolute left-3 top-3 z-10 flex gap-2">
                  {product.isBestSeller && <span className="rounded-full bg-primary px-2.5 py-1 text-[11px] font-semibold text-white">BEST SELLER</span>}
                  {product.isNew && <span className="rounded-full bg-accent px-2.5 py-1 text-[11px] font-semibold text-white">NEW</span>}
                </div>
                <Image
                  src={product.images[0]}
                  alt={product.name}
                  width={640}
                  height={760}
                  quality={80}
                  sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 25vw"
                  className="image-tilt h-[21rem] w-full object-cover transition duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-4">
                <Link href={`/product/${product.id}`} className="text-lg font-bold text-text hover:text-accent">
                  {product.name}
                </Link>
                <div className="mt-2 flex items-center gap-1 text-accent">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} size={14} fill={i < Math.round(product.rating) ? "currentColor" : "none"} />
                  ))}
                </div>
                <p className="mt-2 text-[21px] font-extrabold text-text">€{product.price}</p>
                <button
                  onClick={() => addItem(product.id, 1)}
                  className="btn-hover mt-3 w-full rounded-[10px] bg-accent px-4 py-2.5 text-[14px] font-semibold text-white"
                >
                  Add to cart
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
