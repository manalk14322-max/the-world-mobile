"use client";

import Image from "next/image";
import { useFadeInOnScroll } from "@/lib/use-fade-in-on-scroll";
import { storeCategories } from "@/data/mock-data";

const categoryImages: Record<string, string> = {
  Chargers: "https://images.unsplash.com/photo-1585338107529-13afc5f02586?auto=format&fit=crop&w=1100&q=80",
  Cables: "https://images.unsplash.com/photo-1625772452859-1c03d5bf1137?auto=format&fit=crop&w=1100&q=80",
  Earphones: "https://images.unsplash.com/photo-1606220588913-b3aacb4d2f37?auto=format&fit=crop&w=1100&q=80",
  Powerbanks: "https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?auto=format&fit=crop&w=1100&q=80",
  "Phone Covers": "https://images.unsplash.com/photo-1565849904461-04a58ad377e0?auto=format&fit=crop&w=1100&q=80",
  "Screen Protectors": "https://images.unsplash.com/photo-1572569511254-d8f925fe2cbb?auto=format&fit=crop&w=1100&q=80",
  "Wireless Accessories": "https://images.unsplash.com/photo-1583321500900-82807e458f3c?auto=format&fit=crop&w=1100&q=80",
  Smartphones: "https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?auto=format&fit=crop&w=1100&q=80"
};

export function CategoriesSection() {
  const { ref, visible } = useFadeInOnScroll();

  return (
    <section id="categories" className="section py-10 sm:py-14">
      <div ref={ref} className={`container fade-in ${visible ? "visible" : ""}`}>
        <h2 className="mb-7 text-3xl font-extrabold text-text">Shop by Category</h2>
        <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {storeCategories.map((category) => (
            <article key={category} className="group card-premium overflow-hidden rounded-xl border border-black/10 bg-white shadow-sm hover:shadow-md">
              <div className="relative">
                <Image src={categoryImages[category]} alt={category} width={1100} height={800} className="h-56 w-full object-cover transition duration-500 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
                <h3 className="absolute bottom-3 left-3 text-lg font-bold text-white">{category}</h3>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
