"use client";

import { Minus, Plus } from "lucide-react";

type Props = {
  quantity: number;
  onChange: (qty: number) => void;
};

export function QuantitySelector({ quantity, onChange }: Props) {
  return (
    <div className="inline-flex items-center rounded-xl border border-black/10">
      <button
        onClick={() => onChange(Math.max(1, quantity - 1))}
        className="qty-bounce p-3 text-muted transition hover:bg-secondary-bg sm:p-3.5"
        aria-label="Decrease quantity"
      >
        <Minus size={16} />
      </button>
      <span className="min-w-12 text-center text-[16px] font-medium sm:min-w-14">{quantity}</span>
      <button onClick={() => onChange(quantity + 1)} className="qty-bounce p-3 text-muted transition hover:bg-secondary-bg sm:p-3.5" aria-label="Increase quantity">
        <Plus size={16} />
      </button>
    </div>
  );
}
