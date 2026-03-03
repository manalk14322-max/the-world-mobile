import { Headphones, RotateCcw, ShieldCheck, Truck } from "lucide-react";

const items = [
  { icon: Truck, title: "Fast Delivery (Europe)" },
  { icon: ShieldCheck, title: "Secure Checkout" },
  { icon: RotateCcw, title: "30-Day Returns" },
  { icon: Headphones, title: "24/7 Support" }
];

export function TrustStrip() {
  return (
    <section className="section py-8 sm:py-12">
      <div className="container">
        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {items.map((item) => (
            <article key={item.title} className="rounded-xl border border-black/10 bg-white p-5 shadow-sm">
              <item.icon size={22} className="text-accent" />
              <h3 className="mt-3 text-[17px] font-bold text-text">{item.title}</h3>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
