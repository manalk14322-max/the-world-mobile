"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import { Star } from "lucide-react";
import { products, storeCategories } from "@/data/mock-data";
import { useCart } from "@/components/cart-context";

export default function ShopPage() {
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const { addItem } = useCart();

  const filtered = useMemo(
    () => (activeCategory === "All" ? products : products.filter((p) => p.category === activeCategory)),
    [activeCategory]
  );

  return (
    <section className="section">
      <div className="container">
        <h1 className="text-4xl font-extrabold text-text">Product Listing</h1>

        <div className="mt-6 flex flex-wrap gap-2">
          {["All", ...storeCategories].map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`rounded-full border px-4 py-2 text-[14px] font-semibold transition ${
                activeCategory === category ? "border-accent bg-accent text-white" : "border-black/10 bg-white text-text hover:bg-secondary-bg"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="mt-8 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {filtered.map((product) => (
            <article key={product.id} className="group card-premium overflow-hidden rounded-xl border border-black/10 bg-white shadow-sm hover:shadow-md">
              <div className="relative overflow-hidden">
                <div className="absolute left-3 top-3 z-10 flex gap-2">
                  {product.isBestSeller && <span className="rounded-full bg-primary px-2.5 py-1 text-[11px] font-semibold text-white">BEST SELLER</span>}
                  {product.isNew && <span className="rounded-full bg-accent px-2.5 py-1 text-[11px] font-semibold text-white">NEW</span>}
                </div>
                <Image src={product.images[0]} alt={product.name} width={640} height={760} className="image-tilt h-[21rem] w-full object-cover transition duration-500 group-hover:scale-105" />
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
                <button onClick={() => addItem(product.id, 1)} className="btn-hover mt-3 w-full rounded-[10px] bg-accent px-4 py-2.5 text-[14px] font-semibold text-white">
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
