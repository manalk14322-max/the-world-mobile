"use client";

import Link from "next/link";
import { useState } from "react";
import { QuantitySelector } from "./quantity-selector";
import { BadgeCheck, ShieldCheck, Truck } from "lucide-react";
import { useCart } from "./cart-context";

type Props = {
  productId: string;
  colors: string[];
  sizes: string[];
};

export function ProductInteraction({ productId, colors, sizes }: Props) {
  const [color, setColor] = useState(colors[0]);
  const [size, setSize] = useState(sizes[0]);
  const [qty, setQty] = useState(1);
  const [pulse, setPulse] = useState(false);
  const { addItem } = useCart();

  const onAddCart = () => {
    setPulse(true);
    addItem(productId, qty);
    setTimeout(() => setPulse(false), 460);
  };

  return (
    <>
      <div className="mt-8">
        <p className="mb-2 text-[16px] font-semibold">Color</p>
        <div className="flex flex-wrap gap-2">
          {colors.map((item) => (
            <button
              key={item}
              onClick={() => setColor(item)}
              className={`rounded-xl border px-4 py-2 text-[15px] transition ${color === item ? "border-primary bg-primary text-white" : "border-black/10"}`}
            >
              {item}
            </button>
          ))}
        </div>
      </div>

      <div className="mt-6">
        <p className="mb-2 text-[16px] font-semibold">Almacenamiento</p>
        <div className="flex flex-wrap gap-2">
          {sizes.map((item) => (
            <button
              key={item}
              onClick={() => setSize(item)}
              className={`rounded-xl border px-4 py-2 text-[15px] transition ${size === item ? "border-primary bg-primary text-white" : "border-black/10"}`}
            >
              {item}
            </button>
          ))}
        </div>
      </div>

      <div className="mt-6">
        <p className="mb-2 text-[16px] font-semibold">Cantidad</p>
        <QuantitySelector quantity={qty} onChange={setQty} />
      </div>

      <div className="mt-8 hidden gap-3 sm:flex">
        <button onClick={onAddCart} className={`btn-hover cta-glow flex-1 rounded-xl bg-primary px-6 py-3 text-[16px] font-semibold text-white ${pulse ? "pulse-once" : ""}`}>
          Anadir al carrito
        </button>
        <Link href="/checkout" className="btn-hover rounded-xl border border-black px-6 py-3 text-[16px] font-semibold">
          Comprar ahora
        </Link>
      </div>

      <div className="mt-6 rounded-xl border border-black/10 bg-secondary-bg p-4">
        <div className="grid gap-2 text-[14px] text-text sm:grid-cols-3">
          <p className="inline-flex items-center gap-2"><ShieldCheck size={15} className="text-accent" /> Pago seguro SSL</p>
          <p className="inline-flex items-center gap-2"><Truck size={15} className="text-accent" /> Devolucion 30 dias</p>
          <p className="inline-flex items-center gap-2"><BadgeCheck size={15} className="text-accent" /> Garantia oficial 2 anos</p>
        </div>
      </div>

      <div className="fixed inset-x-0 bottom-0 z-40 border-t border-black/10 bg-white p-4 sm:hidden">
        <button onClick={onAddCart} className={`w-full rounded-xl bg-primary px-6 py-3 text-[16px] font-semibold text-white shadow-sm ${pulse ? "pulse-once" : ""}`}>Anadir al carrito</button>
      </div>
    </>
  );
}
