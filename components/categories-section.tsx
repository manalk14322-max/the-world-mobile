"use client";

import Image from "next/image";
import { useFadeInOnScroll } from "@/lib/use-fade-in-on-scroll";

const categories = [
  {
    title: "Smartphones",
    image: "https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?auto=format&fit=crop&w=1100&q=80"
  },
  {
    title: "Accessories",
    image: "https://images.unsplash.com/photo-1625772452859-1c03d5bf1137?auto=format&fit=crop&w=1100&q=80"
  },
  {
    title: "Wireless Earbuds",
    image: "https://images.unsplash.com/photo-1606220588913-b3aacb4d2f37?auto=format&fit=crop&w=1100&q=80"
  },
  {
    title: "Chargers & Cables",
    image: "https://images.unsplash.com/photo-1585338107529-13afc5f02586?auto=format&fit=crop&w=1100&q=80"
  }
];

export function CategoriesSection() {
  const { ref, visible } = useFadeInOnScroll();

  return (
    <section id="categories" className="section py-10 sm:py-14">
      <div ref={ref} className={`container fade-in ${visible ? "visible" : ""}`}>
        <h2 className="mb-7 text-3xl font-extrabold text-text">Shop by Category</h2>
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {categories.map((category) => (
            <article key={category.title} className="group card-premium overflow-hidden rounded-xl border border-black/10 bg-white shadow-sm hover:shadow-md">
              <div className="relative">
                <Image src={category.image} alt={category.title} width={1100} height={800} className="h-64 w-full object-cover transition duration-500 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
                <h3 className="absolute bottom-4 left-4 text-xl font-bold text-white">{category.title}</h3>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
