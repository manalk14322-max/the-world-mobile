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
        className="p-3 text-muted transition hover:bg-secondary-bg"
        aria-label="Decrease quantity"
      >
        <Minus size={16} />
      </button>
      <span className="min-w-12 text-center text-[16px] font-medium">{quantity}</span>
      <button onClick={() => onChange(quantity + 1)} className="p-3 text-muted transition hover:bg-secondary-bg" aria-label="Increase quantity">
        <Plus size={16} />
      </button>
    </div>
  );
}
