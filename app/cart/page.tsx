"use client";

import Image from "next/image";
import Link from "next/link";
import { products } from "@/data/mock-data";
import { QuantitySelector } from "@/components/quantity-selector";
import { useMemo, useState } from "react";

const initialQty: Record<string, number> = {
  "iphone-15-pro-max": 1,
  "samsung-galaxy-s24-ultra": 1
};

export default function CartPage() {
  const [qtyMap, setQtyMap] = useState(initialQty);
  const cartItems = products.filter((item) => qtyMap[item.id]);

  const subtotal = useMemo(
    () => cartItems.reduce((sum, item) => sum + item.price * qtyMap[item.id], 0),
    [cartItems, qtyMap]
  );

  const updateQty = (id: string, qty: number) => setQtyMap((prev) => ({ ...prev, [id]: qty }));
  const removeItem = (id: string) =>
    setQtyMap((prev) => {
      const clone = { ...prev };
      delete clone[id];
      return clone;
    });

  return (
    <section className="section">
      <div className="container grid gap-8 lg:grid-cols-[1fr_360px]">
        <div className="space-y-5">
          <h1 className="text-4xl font-extrabold">Your Cart</h1>
          {cartItems.map((item) => (
            <article key={item.id} className="grid gap-4 rounded-xl border border-black/10 p-4 shadow-sm sm:grid-cols-[140px_1fr]">
              <Image src={item.images[0]} alt={item.name} width={280} height={320} className="h-36 w-full rounded-xl object-cover" />
              <div className="flex flex-col justify-between gap-4">
                <div>
                  <p className="text-xl font-bold">{item.name}</p>
                  <p className="text-[16px] text-muted">${item.price}</p>
                </div>
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <QuantitySelector quantity={qtyMap[item.id]} onChange={(q) => updateQty(item.id, q)} />
                  <button onClick={() => removeItem(item.id)} className="text-[15px] font-medium text-muted underline">
                    Remove
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>

        <aside className="h-fit rounded-xl border border-black/10 p-6 shadow-sm lg:sticky lg:top-24">
          <h2 className="text-2xl font-bold">Order Summary</h2>
          <div className="mt-5 space-y-3 text-[16px]">
            <div className="flex justify-between">
              <span>Subtotal</span>
              <span>${subtotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between">
              <span>Shipping</span>
              <span>$8.00</span>
            </div>
            <div className="flex justify-between font-bold">
              <span>Total</span>
              <span>${(subtotal + 8).toFixed(2)}</span>
            </div>
          </div>
          <Link
            href="/checkout"
            className="mt-6 block rounded-xl bg-accent px-5 py-3 text-center text-[16px] font-semibold text-white shadow-sm transition hover:opacity-90"
          >
            Checkout
          </Link>
        </aside>
      </div>

      <div className="fixed inset-x-0 bottom-0 z-40 border-t border-black/10 bg-white p-4 lg:hidden">
        <Link href="/checkout" className="block rounded-xl bg-accent px-5 py-3 text-center text-[16px] font-semibold text-white shadow-sm">
          Checkout ${(subtotal + 8).toFixed(2)}
        </Link>
      </div>
    </section>
  );
}
