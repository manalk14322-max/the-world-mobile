"use client";

import { CreditCard, Headphones, ShieldCheck, Truck } from "lucide-react";
import { useFadeInOnScroll } from "@/lib/use-fade-in-on-scroll";
import { useLanguage } from "./language-context";

const items = [
  { icon: Truck, title: "Fast Delivery in Europe" },
  { icon: ShieldCheck, title: "Secure Payments" },
  { icon: CreditCard, title: "Multiple Payment Methods" },
  { icon: Headphones, title: "24/7 Support" }
];

export function TrustStrip() {
  const { ref, visible } = useFadeInOnScroll();
  const { language } = useLanguage();

  return (
    <section className="section py-8 sm:py-12">
      <div ref={ref} className={`container fade-in ${visible ? "visible" : ""}`}>
        <h2 className="mb-6 text-2xl font-extrabold text-text sm:text-3xl">
          {language === "es" ? "Por que confian en nosotros" : "Why Customers Trust Us"}
        </h2>
        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {items.map((item) => (
            <article key={item.title} className="card-premium rounded-xl border border-black/10 bg-white p-5 shadow-sm">
              <item.icon size={22} className="text-accent" />
              <h3 className="mt-3 text-[17px] font-bold text-text">
                {language === "es"
                  ? item.title === "Fast Delivery in Europe"
                    ? "Entrega rapida en Europa"
                    : item.title === "Secure Payments"
                      ? "Pagos seguros"
                      : item.title === "Multiple Payment Methods"
                        ? "Multiples metodos de pago"
                        : "Soporte 24/7"
                  : item.title}
              </h3>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
