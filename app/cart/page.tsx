"use client";

import Image from "next/image";
import Link from "next/link";
import { products } from "@/data/mock-data";
import { useMemo, useState } from "react";
import { CreditCard, ShieldCheck } from "lucide-react";

const initialQty: Record<string, number> = {
  "iphone-15-pro-max": 1,
  "samsung-galaxy-s24-ultra": 1
};

export default function CartPage() {
  const [qtyMap, setQtyMap] = useState(initialQty);
  const [promo, setPromo] = useState("");
  const [promoApplied, setPromoApplied] = useState(false);
  const cartItems = products.filter((item) => qtyMap[item.id]);

  const subtotal = useMemo(
    () => cartItems.reduce((sum, item) => sum + item.price * qtyMap[item.id], 0),
    [cartItems, qtyMap]
  );
  const shipping = cartItems.length ? 0 : 0;
  const tax = subtotal * 0.06;
  const discount = promoApplied ? subtotal * 0.08 : 0;
  const total = subtotal + shipping + tax - discount;

  const updateQty = (id: string, qty: number) =>
    setQtyMap((prev) => ({ ...prev, [id]: Math.max(1, qty) }));

  const removeItem = (id: string) =>
    setQtyMap((prev) => {
      const clone = { ...prev };
      delete clone[id];
      return clone;
    });

  if (!cartItems.length) {
    return (
      <section className="section bg-white">
        <div className="container">
          <div className="mx-auto max-w-2xl rounded-xl border border-black/10 bg-white p-10 text-center shadow-sm">
            <h1 className="text-3xl font-extrabold text-text">Your cart is currently empty.</h1>
            <p className="mt-3 text-[16px] text-muted">Anade productos premium para empezar tu compra.</p>
            <Link
              href="/#top-products"
              className="btn-hover mt-6 inline-block rounded-xl bg-primary px-6 py-3 text-[16px] font-semibold text-white shadow-sm"
            >
              Continue Shopping
            </Link>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="section bg-background">
      <div className="container grid gap-8 lg:grid-cols-[1fr_390px]">
        <div className="space-y-5">
          <h1 className="text-4xl font-extrabold text-text">Carrito</h1>
          {cartItems.map((item) => (
            <article key={item.id} className="grid gap-4 rounded-xl border border-black/10 bg-white p-4 shadow-sm sm:grid-cols-[120px_1fr] sm:p-5">
              <Image src={item.images[0]} alt={item.name} width={240} height={260} className="h-28 w-full rounded-xl object-cover sm:h-32" />
              <div className="flex flex-col gap-3">
                <div>
                  <p className="text-xl font-bold text-text">{item.name}</p>
                  <p className="mt-1 text-[14px] text-muted">
                    Color: {item.colors[0]} | {item.sizes[0]}
                  </p>
                  <p className="mt-1 text-[16px] font-semibold text-text">EUR {item.price.toFixed(2)}</p>
                </div>

                <div className="flex flex-wrap items-center justify-between gap-3">
                  <div className="inline-flex items-center rounded-xl border border-black/10">
                    <button
                      onClick={() => updateQty(item.id, qtyMap[item.id] - 1)}
                      className="qty-bounce h-10 w-10 text-lg font-bold text-text transition hover:bg-secondary-bg sm:h-11 sm:w-11"
                      aria-label="Decrease quantity"
                    >
                      -
                    </button>
                    <span className="min-w-10 text-center text-[16px] font-semibold">{qtyMap[item.id]}</span>
                    <button
                      onClick={() => updateQty(item.id, qtyMap[item.id] + 1)}
                      className="qty-bounce h-10 w-10 text-lg font-bold text-text transition hover:bg-secondary-bg sm:h-11 sm:w-11"
                      aria-label="Increase quantity"
                    >
                      +
                    </button>
                  </div>

                  <button onClick={() => removeItem(item.id)} className="text-[14px] font-semibold text-red-600">
                    Eliminar
                  </button>
                </div>
                <p className="text-[15px] font-semibold text-text">
                  Subtotal: EUR {(item.price * qtyMap[item.id]).toFixed(2)}
                </p>
              </div>
            </article>
          ))}
        </div>

        <aside className="h-fit rounded-xl border border-black/10 bg-white p-6 shadow-md lg:sticky lg:top-24">
          <h2 className="text-2xl font-bold text-text">Resumen del pedido</h2>
          <div className="mt-5 space-y-3 text-[16px]">
            <div className="flex justify-between">
              <span>Subtotal</span>
              <span>EUR {subtotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between">
              <span>Envio</span>
              <span>Gratis</span>
            </div>
            <div className="flex justify-between">
              <span>IVA</span>
              <span>EUR {tax.toFixed(2)}</span>
            </div>
            {promoApplied && (
              <div className="flex justify-between text-accent">
                <span>Descuento</span>
                <span>- EUR {discount.toFixed(2)}</span>
              </div>
            )}
            <div className="flex justify-between font-bold">
              <span>Total</span>
              <span className="text-xl text-text">EUR {total.toFixed(2)}</span>
            </div>
          </div>

          <div className="mt-5 flex gap-2">
            <input
              value={promo}
              onChange={(e) => setPromo(e.target.value)}
              placeholder="Codigo promo"
              className="h-11 flex-1 rounded-xl border border-black/10 px-3 text-[15px] outline-none focus:border-accent"
            />
            <button
              onClick={() => setPromoApplied(Boolean(promo.trim()))}
              className="btn-hover rounded-xl border border-black/10 px-4 text-[14px] font-semibold transition hover:bg-secondary-bg"
            >
              Aplicar
            </button>
          </div>

          <Link
            href="/checkout"
            className="btn-hover mt-6 block rounded-xl bg-primary px-5 py-3.5 text-center text-[16px] font-semibold text-white shadow-sm"
          >
            Finalizar compra
          </Link>
          <p className="mt-3 text-center text-[13px] font-semibold text-text">Stock limitado - alta demanda</p>

          <div className="mt-5 rounded-xl border border-black/10 bg-secondary-bg p-4 text-[14px] text-muted">
            <div className="flex items-center gap-2 font-semibold text-text">
              <ShieldCheck size={16} className="text-accent" />
              Pago seguro
            </div>
            <div className="mt-3 flex flex-wrap gap-2">
              <span className="rounded-md border border-black/10 bg-white px-2 py-1 text-[12px] font-semibold text-text">VISA</span>
              <span className="rounded-md border border-black/10 bg-white px-2 py-1 text-[12px] font-semibold text-text">Mastercard</span>
              <span className="rounded-md border border-black/10 bg-white px-2 py-1 text-[12px] font-semibold text-text">Stripe</span>
            </div>
            <div className="mt-3 inline-flex items-center gap-2 rounded-full bg-white px-3 py-1 text-[12px] font-semibold text-text">
              <CreditCard size={14} className="text-accent" />
              Devolucion 30 dias
            </div>
          </div>
        </aside>
      </div>

      <div className="fixed inset-x-0 bottom-0 z-40 border-t border-black/10 bg-white p-3 lg:hidden">
        <div className="mb-2 flex items-center justify-between px-1 text-[14px]">
          <span className="text-muted">Total</span>
          <span className="text-lg font-bold text-text">EUR {total.toFixed(2)}</span>
        </div>
        <Link href="/checkout" className="block rounded-xl bg-primary px-5 py-3 text-center text-[16px] font-semibold text-white shadow-sm">
          Finalizar compra
        </Link>
      </div>
    </section>
  );
}
