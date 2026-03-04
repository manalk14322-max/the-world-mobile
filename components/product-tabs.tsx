"use client";

import { useState } from "react";

const tabs = ["Descripcion", "Detalles", "Envio", "Resenas"] as const;

type Props = {
  rating: number;
};

export function ProductTabs({ rating }: Props) {
  const [active, setActive] = useState<(typeof tabs)[number]>("Descripcion");

  return (
    <div className="mt-10 rounded-xl border border-black/10">
      <div className="flex flex-wrap gap-2 border-b border-black/10 p-3">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActive(tab)}
            className={`rounded-xl px-3 py-2 text-[15px] transition ${active === tab ? "bg-primary text-white" : "text-muted hover:bg-secondary-bg"}`}
          >
            {tab}
          </button>
        ))}
      </div>

      <div className="p-5 text-[16px] text-muted">
        {active === "Descripcion" && (
          <p>Smartphone original con acabados premium, rendimiento fluido y soporte oficial para uso diario profesional.</p>
        )}
        {active === "Detalles" && (
          <p>Incluye caja oficial, cable de carga y garantia del fabricante para una compra segura y confiable.</p>
        )}
        {active === "Envio" && (
          <p>Despacho rapido con entrega en 24-48h en Espana y seguimiento activo desde el primer dia.</p>
        )}
        {active === "Resenas" && <p>Valorado con {rating}/5 por clientes verificados con opiniones consistentes de calidad.</p>}
      </div>
    </div>
  );
}
