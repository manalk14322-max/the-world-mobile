"use client";

import { Headphones, ShieldCheck, Truck, Wallet } from "lucide-react";
import { useFadeInOnScroll } from "@/lib/use-fade-in-on-scroll";

const items = [
  { icon: Truck, title: "Fast Delivery", text: "24-48h delivery across Spain" },
  { icon: ShieldCheck, title: "Secure Payment", text: "Protected SSL checkout" },
  { icon: Wallet, title: "Best Prices", text: "Competitive European pricing" },
  { icon: Headphones, title: "Support", text: "Professional customer support" }
];

export function TrustStrip() {
  const { ref, visible } = useFadeInOnScroll();

  return (
    <section className="section py-10 sm:py-14">
      <div ref={ref} className={`container fade-in ${visible ? "visible" : ""}`}>
        <h2 className="mb-7 text-3xl font-extrabold text-text">Why Choose Us</h2>
        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {items.map((item) => (
            <article key={item.title} className="rounded-xl border border-black/10 bg-white p-5 shadow-sm">
              <item.icon size={22} className="text-accent" />
              <h3 className="mt-3 text-[18px] font-bold text-text">{item.title}</h3>
              <p className="mt-1 text-[15px] text-muted">{item.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
