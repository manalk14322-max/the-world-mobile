"use client";

import { BadgePercent, Smartphone, Usb } from "lucide-react";
import { useFadeInOnScroll } from "@/lib/use-fade-in-on-scroll";

const categories = [
  { label: "Phones", icon: Smartphone },
  { label: "Accessories", icon: Usb },
  { label: "Deals", icon: BadgePercent }
];

export function CategoriesSection() {
  const { ref, visible } = useFadeInOnScroll();

  return (
    <section id="categories" className="section py-8 sm:py-12">
      <div ref={ref} className={`container fade-in ${visible ? "visible" : ""}`}>
        <h2 className="mb-5 text-2xl font-extrabold text-text sm:text-3xl">Categories</h2>
        <div className="grid gap-4 md:grid-cols-3">
          {categories.map((category) => (
            <article key={category.label} className="group rounded-xl border border-black/10 bg-white p-6 shadow-sm transition duration-300 hover:scale-[1.02] hover:shadow-md">
              <div className="inline-flex rounded-xl bg-secondary-bg p-3 text-accent">
                <category.icon size={22} />
              </div>
              <h3 className="mt-4 text-xl font-bold">{category.label}</h3>
              <p className="mt-1 text-[15px] text-muted">Explore premium {category.label.toLowerCase()} with fast EU delivery.</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
