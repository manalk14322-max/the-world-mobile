import { BadgeCheck, Headphones, ShieldCheck, Truck } from "lucide-react";

const items = [
  { icon: ShieldCheck, title: "100% Original Devices", text: "Only genuine, box-pack mobiles" },
  { icon: Truck, title: "Fast Nationwide Delivery", text: "Dispatch in 24 hours" },
  { icon: Headphones, title: "Dedicated Support", text: "Expert guidance before and after sale" },
  { icon: BadgeCheck, title: "Warranty Safe", text: "Trusted warranty-backed products" }
];

export function TrustStrip() {
  return (
    <section className="section pt-6">
      <div className="container">
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {items.map((item) => (
            <article key={item.title} className="rounded-xl border border-black/10 bg-white p-5 shadow-sm">
              <item.icon size={20} className="text-accent" />
              <h3 className="mt-3 text-xl font-bold">{item.title}</h3>
              <p className="mt-1 text-[16px] text-muted">{item.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
