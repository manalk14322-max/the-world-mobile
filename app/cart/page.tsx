"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo } from "react";
import { products } from "@/data/mock-data";
import { useCart } from "@/components/cart-context";

export default function CartPage() {
  const { items, setQty, removeItem } = useCart();
  const cartItems = products.filter((p) => items[p.id]);

  const subtotal = useMemo(
    () => cartItems.reduce((sum, item) => sum + item.price * (items[item.id] ?? 0), 0),
    [cartItems, items]
  );

  const shipping = cartItems.length ? 0 : 0;
  const total = subtotal + shipping;

  if (!cartItems.length) {
    return (
      <section className="section">
        <div className="container">
          <div className="mx-auto max-w-xl rounded-xl border border-black/10 bg-white p-8 text-center shadow-sm">
            <h1 className="text-3xl font-extrabold text-text">Your cart is currently empty.</h1>
            <Link href="/#top-products" className="btn-hover mt-5 inline-block rounded-[10px] bg-accent px-6 py-3 text-white">
              Continue Shopping
            </Link>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="section">
      <div className="container grid gap-8 lg:grid-cols-[1fr_360px]">
        <div className="space-y-4">
          <h1 className="text-4xl font-extrabold text-text">Cart</h1>
          {cartItems.map((item) => (
            <article key={item.id} className="grid gap-4 rounded-xl border border-black/10 bg-white p-4 shadow-sm sm:grid-cols-[120px_1fr]">
              <Image src={item.images[0]} alt={item.name} width={240} height={240} className="h-28 w-full rounded-xl object-cover sm:h-32" />
              <div>
                <p className="text-xl font-bold text-text">{item.name}</p>
                <p className="mt-1 text-[15px] text-muted">€{item.price.toFixed(2)}</p>
                <div className="mt-3 inline-flex items-center rounded-xl border border-black/10">
                  <button onClick={() => setQty(item.id, (items[item.id] ?? 1) - 1)} className="h-10 w-10 font-bold hover:bg-secondary-bg">-</button>
                  <span className="min-w-10 text-center font-semibold">{items[item.id]}</span>
                  <button onClick={() => setQty(item.id, (items[item.id] ?? 1) + 1)} className="h-10 w-10 font-bold hover:bg-secondary-bg">+</button>
                </div>
                <button onClick={() => removeItem(item.id)} className="ml-4 text-sm font-semibold text-red-600">Remove</button>
              </div>
            </article>
          ))}
        </div>

        <aside className="h-fit rounded-xl border border-black/10 bg-white p-6 shadow-md lg:sticky lg:top-24">
          <h2 className="text-2xl font-bold text-text">Order Summary</h2>
          <div className="mt-5 space-y-3 text-[16px]">
            <div className="flex justify-between"><span>Subtotal</span><span>€{subtotal.toFixed(2)}</span></div>
            <div className="flex justify-between"><span>Shipping</span><span>Free</span></div>
            <div className="flex justify-between text-xl font-bold"><span>Total</span><span>€{total.toFixed(2)}</span></div>
          </div>
          <Link href="/checkout" className="btn-hover mt-6 block rounded-[10px] bg-accent px-5 py-3 text-center text-[16px] font-semibold text-white">
            Proceed to Secure Checkout
          </Link>
        </aside>
      </div>
    </section>
  );
}
