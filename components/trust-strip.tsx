"use client";

import { Headphones, RotateCcw, ShieldCheck, Truck } from "lucide-react";
import { useFadeInOnScroll } from "@/lib/use-fade-in-on-scroll";

const items = [
  { icon: ShieldCheck, title: "Secure Payments" },
  { icon: Truck, title: "Fast European Delivery" },
  { icon: RotateCcw, title: "30-Day Returns" },
  { icon: Headphones, title: "24/7 Support" }
];

export function TrustStrip() {
  const { ref, visible } = useFadeInOnScroll();

  return (
    <section className="section py-8 sm:py-12">
      <div ref={ref} className={`container fade-in ${visible ? "visible" : ""}`}>
        <h2 className="mb-6 text-2xl font-extrabold text-text sm:text-3xl">Why Customers Trust Us</h2>
        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {items.map((item) => (
            <article key={item.title} className="card-premium rounded-xl border border-black/10 bg-white p-5 shadow-sm">
              <item.icon size={22} className="text-accent" />
              <h3 className="mt-3 text-[17px] font-bold text-text">{item.title}</h3>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
