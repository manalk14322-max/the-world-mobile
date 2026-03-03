"use client";

import { useState } from "react";

const tabs = ["Description", "Details", "Shipping", "Reviews"] as const;

type Props = {
  rating: number;
};

export function ProductTabs({ rating }: Props) {
  const [active, setActive] = useState<(typeof tabs)[number]>("Description");

  return (
    <div className="mt-10 rounded-xl border border-black/10">
      <div className="flex flex-wrap gap-2 border-b border-black/10 p-3">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActive(tab)}
            className={`rounded-xl px-3 py-2 text-[15px] transition ${active === tab ? "bg-black text-white" : "text-muted hover:bg-secondary-bg"}`}
          >
            {tab}
          </button>
        ))}
      </div>

      <div className="p-5 text-[16px] text-muted">
        {active === "Description" && (
          <p>Original PTA-approved mobile phone with premium build quality and long-term software support.</p>
        )}
        {active === "Details" && (
          <p>Includes official box pack, charging cable, and standard manufacturer warranty for peace of mind.</p>
        )}
        {active === "Shipping" && (
          <p>Orders dispatch within 24 hours. Delivery typically takes 2-4 business days with live tracking.</p>
        )}
        {active === "Reviews" && <p>Rated {rating}/5 by verified buyers with consistent quality feedback.</p>}
      </div>
    </div>
  );
}
