"use client";

import Image from "next/image";
import { useFadeInOnScroll } from "@/lib/use-fade-in-on-scroll";

const categories = [
  {
    name: "Flagship Phones",
    image:
      "https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&w=1200&q=80"
  },
  {
    name: "Mid-Range Mobiles",
    image:
      "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=1200&q=80"
  },
  {
    name: "Mobile Accessories",
    image:
      "https://images.unsplash.com/photo-1587033411391-5d9e51cce126?auto=format&fit=crop&w=1200&q=80"
  }
];

export function CategoriesSection() {
  const { ref, visible } = useFadeInOnScroll();

  return (
    <section id="categories" className="section bg-secondary-bg py-10 sm:py-16">
      <div ref={ref} className={`container fade-in ${visible ? "visible" : ""}`}>
        <div className="mb-6 sm:mb-8">
          <p className="text-[14px] font-medium text-accent">Explore collections</p>
          <h2 className="text-2xl font-extrabold sm:text-3xl md:text-4xl">Shop by Mobile Category</h2>
        </div>
        <div className="grid gap-4 sm:gap-6 md:grid-cols-3">
          {categories.map((category) => (
            <article key={category.name} className="group relative overflow-hidden rounded-xl bg-white shadow-sm transition hover:shadow-md">
              <div className="overflow-hidden">
                <Image
                  src={category.image}
                  alt={category.name}
                  width={800}
                  height={900}
                  className="h-64 w-full object-cover transition duration-500 group-hover:scale-105 sm:h-80"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-5 text-white">
                <h3 className="text-2xl font-bold">{category.name}</h3>
                <p className="mt-1 text-[15px] text-white/90">Discover latest models and best-value options.</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
