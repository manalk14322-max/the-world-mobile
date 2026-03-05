"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";

type CartMap = Record<string, number>;

type CartContextValue = {
  items: CartMap;
  totalItems: number;
  addItem: (id: string, qty?: number) => void;
  setQty: (id: string, qty: number) => void;
  removeItem: (id: string) => void;
  clearCart: () => void;
};

const CartContext = createContext<CartContextValue | undefined>(undefined);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<CartMap>({});

  useEffect(() => {
    const raw = window.localStorage.getItem("twm_cart");
    if (!raw) return;
    try {
      const parsed = JSON.parse(raw) as CartMap;
      setItems(parsed);
    } catch {
      setItems({});
    }
  }, []);

  useEffect(() => {
    window.localStorage.setItem("twm_cart", JSON.stringify(items));
  }, [items]);

  const value = useMemo<CartContextValue>(() => {
    const totalItems = Object.values(items).reduce((sum, qty) => sum + qty, 0);
    return {
      items,
      totalItems,
      addItem: (id, qty = 1) =>
        setItems((prev) => ({ ...prev, [id]: Math.max(1, (prev[id] ?? 0) + qty) })),
      setQty: (id, qty) =>
        setItems((prev) => {
          if (qty <= 0) {
            const clone = { ...prev };
            delete clone[id];
            return clone;
          }
          return { ...prev, [id]: qty };
        }),
      removeItem: (id) =>
        setItems((prev) => {
          const clone = { ...prev };
          delete clone[id];
          return clone;
        }),
      clearCart: () => setItems({})
    };
  }, [items]);

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) throw new Error("useCart must be used inside CartProvider");
  return context;
}
