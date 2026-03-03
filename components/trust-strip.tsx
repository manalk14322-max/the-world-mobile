import { BadgeCheck, Headphones, ShieldCheck, Truck } from "lucide-react";

const items = [
  { icon: ShieldCheck, title: "100% Original Devices", text: "Only genuine, box-pack mobiles" },
  { icon: Truck, title: "Fast Nationwide Delivery", text: "Dispatch in 24 hours" },
  { icon: Headphones, title: "Dedicated Support", text: "Expert guidance before and after sale" },
  { icon: BadgeCheck, title: "Warranty Safe", text: "Trusted warranty-backed products" }
];

export function TrustStrip() {
  return (
    <section className="section pb-8 pt-4 sm:pt-6">
      <div className="container">
        <div className="grid gap-3 sm:gap-4 md:grid-cols-2 xl:grid-cols-4">
          {items.map((item) => (
            <article key={item.title} className="rounded-xl border border-black/10 bg-white p-4 shadow-sm sm:p-5">
              <item.icon size={20} className="text-accent" />
              <h3 className="mt-2 text-lg font-bold sm:mt-3 sm:text-xl">{item.title}</h3>
              <p className="mt-1 text-[15px] text-muted sm:text-[16px]">{item.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
