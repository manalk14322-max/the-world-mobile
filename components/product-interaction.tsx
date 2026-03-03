"use client";

import Link from "next/link";
import { useState } from "react";
import { QuantitySelector } from "./quantity-selector";

type Props = {
  colors: string[];
  sizes: string[];
};

export function ProductInteraction({ colors, sizes }: Props) {
  const [color, setColor] = useState(colors[0]);
  const [size, setSize] = useState(sizes[0]);
  const [qty, setQty] = useState(1);

  return (
    <>
      <div className="mt-8">
        <p className="mb-2 text-[16px] font-semibold">Color</p>
        <div className="flex flex-wrap gap-2">
          {colors.map((item) => (
            <button
              key={item}
              onClick={() => setColor(item)}
              className={`rounded-xl border px-4 py-2 text-[15px] transition ${color === item ? "border-black bg-black text-white" : "border-black/10"}`}
            >
              {item}
            </button>
          ))}
        </div>
      </div>

      <div className="mt-6">
        <p className="mb-2 text-[16px] font-semibold">Storage</p>
        <div className="flex flex-wrap gap-2">
          {sizes.map((item) => (
            <button
              key={item}
              onClick={() => setSize(item)}
              className={`rounded-xl border px-4 py-2 text-[15px] transition ${size === item ? "border-black bg-black text-white" : "border-black/10"}`}
            >
              {item}
            </button>
          ))}
        </div>
      </div>

      <div className="mt-6">
        <p className="mb-2 text-[16px] font-semibold">Quantity</p>
        <QuantitySelector quantity={qty} onChange={setQty} />
      </div>

      <div className="mt-8 hidden gap-3 sm:flex">
        <button className="pressable flex-1 rounded-xl bg-accent px-6 py-3 text-[16px] font-semibold text-white shadow-sm transition hover:opacity-90">
          Add to Cart
        </button>
        <Link href="/checkout" className="pressable rounded-xl border border-black px-6 py-3 text-[16px] font-semibold">
          Buy Now
        </Link>
      </div>

      <div className="fixed inset-x-0 bottom-0 z-40 border-t border-black/10 bg-white p-4 sm:hidden">
        <button className="w-full rounded-xl bg-accent px-6 py-3 text-[16px] font-semibold text-white shadow-sm">Add to Cart</button>
      </div>
    </>
  );
}
