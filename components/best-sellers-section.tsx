"use client";

import Image from "next/image";
import Link from "next/link";
import { Star } from "lucide-react";
import { products } from "@/data/mock-data";
import { useCart } from "./cart-context";

export function BestSellersSection() {
  const { addItem } = useCart();
  const best = products.filter((product) => product.isBestSeller).slice(0, 6);

  return (
    <section className="section py-10 sm:py-14">
      <div className="container">
        <h2 className="mb-7 text-3xl font-extrabold text-text">Best Sellers</h2>
        <div className="hide-scrollbar flex gap-4 overflow-x-auto pb-2">
          {best.map((product) => (
            <article key={product.id} className="card-premium w-[82vw] shrink-0 overflow-hidden rounded-xl border border-black/10 bg-white shadow-sm sm:w-[44vw] lg:w-[31%]">
              <Image src={product.images[0]} alt={product.name} width={900} height={880} className="h-72 w-full object-cover" />
              <div className="p-4">
                <Link href={`/product/${product.id}`} className="text-lg font-bold text-text hover:text-accent">{product.name}</Link>
                <p className="mt-1 text-[20px] font-extrabold text-text">€{product.price}</p>
                <div className="mt-2 flex items-center gap-1 text-accent">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} size={14} fill={i < Math.round(product.rating) ? "currentColor" : "none"} />
                  ))}
                </div>
                <button onClick={() => addItem(product.id, 1)} className="btn-hover mt-3 w-full rounded-[10px] bg-primary px-4 py-2.5 text-[14px] font-semibold text-white">
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
