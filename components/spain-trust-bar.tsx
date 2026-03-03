import { CreditCard, ShieldCheck, Truck } from "lucide-react";

const items = [
  {
    icon: Truck,
    title: "Envio 24-48h en Espana",
    text: "Entrega rapida con seguimiento"
  },
  {
    icon: CreditCard,
    title: "Precio final claro",
    text: "IVA incluido, sin cargos sorpresa"
  },
  {
    icon: ShieldCheck,
    title: "Compra segura",
    text: "Garantia y devolucion de 14 dias"
  }
];

export function SpainTrustBar() {
  return (
    <section className="py-4">
      <div className="container">
        <div className="grid gap-3 md:grid-cols-3">
          {items.map((item) => (
            <article key={item.title} className="rounded-xl border border-black/10 bg-white p-4 shadow-sm">
              <div className="flex items-start gap-3">
                <span className="rounded-xl bg-secondary-bg p-2 text-accent">
                  <item.icon size={18} />
                </span>
                <div>
                  <h3 className="text-[15px] font-bold">{item.title}</h3>
                  <p className="text-[14px] text-muted">{item.text}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
