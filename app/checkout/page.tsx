"use client";

import { useState } from "react";

export default function CheckoutPage() {
  const [loading, setLoading] = useState(false);

  const handleCheckout = async () => {
    setLoading(true);
    try {
      await new Promise((resolve) => setTimeout(resolve, 700));
      alert("Order request submitted. For GitHub Pages demo, connect backend payment on your live server.");
    } catch (error) {
      alert(error instanceof Error ? error.message : "Checkout failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="section">
      <div className="container grid gap-10 lg:grid-cols-[1fr_360px]">
        <div className="rounded-xl border border-black/10 p-6 shadow-sm">
          <h1 className="text-4xl font-extrabold">Checkout</h1>
          <p className="mt-2 text-[16px] text-muted">Secure checkout ready for backend payment integration.</p>

          <form className="mt-8 grid gap-4 sm:grid-cols-2">
            <input className="h-12 rounded-xl border border-black/10 px-4 text-[16px]" placeholder="First Name" />
            <input className="h-12 rounded-xl border border-black/10 px-4 text-[16px]" placeholder="Last Name" />
            <input className="h-12 rounded-xl border border-black/10 px-4 text-[16px] sm:col-span-2" placeholder="Email" />
            <input className="h-12 rounded-xl border border-black/10 px-4 text-[16px] sm:col-span-2" placeholder="Address" />
            <input className="h-12 rounded-xl border border-black/10 px-4 text-[16px]" placeholder="City" />
            <input className="h-12 rounded-xl border border-black/10 px-4 text-[16px]" placeholder="Postal Code" />
          </form>
        </div>

        <aside className="h-fit rounded-xl border border-black/10 p-6 shadow-sm">
          <h2 className="text-2xl font-bold">Order Summary</h2>
          <div className="mt-5 space-y-3 text-[16px]">
            <div className="flex justify-between">
              <span>iPhone 15 Pro Max</span>
              <span>$1299.00</span>
            </div>
            <div className="flex justify-between">
              <span>Shipping</span>
              <span>$8.00</span>
            </div>
            <div className="flex justify-between font-bold">
              <span>Total</span>
              <span>$1307.00</span>
            </div>
          </div>
          <button
            onClick={handleCheckout}
            disabled={loading}
            className="pressable mt-6 w-full rounded-xl bg-accent px-5 py-3 text-[16px] font-semibold text-white shadow-sm transition hover:opacity-90 disabled:opacity-70"
          >
            {loading ? "Processing..." : "Place Order Request"}
          </button>
        </aside>
      </div>
    </section>
  );
}
