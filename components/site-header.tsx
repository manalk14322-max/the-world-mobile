"use client";

import Link from "next/link";
import { Menu, Search, ShoppingCart, X } from "lucide-react";
import { useEffect, useState } from "react";
import { BrandLogo } from "./brand-logo";
import { products } from "@/data/mock-data";
import { useLanguage } from "./language-context";

const navByLanguage = {
  es: [
    { label: "Inicio", href: "/" },
    { label: "Tienda", href: "/#top-products" },
    { label: "Categorias", href: "/#categories" },
    { label: "Resenas", href: "/#testimonials" },
    { label: "Contacto", href: "/#newsletter" }
  ],
  en: [
    { label: "Home", href: "/" },
    { label: "Shop", href: "/#top-products" },
    { label: "Categories", href: "/#categories" },
    { label: "Reviews", href: "/#testimonials" },
    { label: "Contact", href: "/#newsletter" }
  ]
} as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  const [cartCount, setCartCount] = useState(2);
  const [bump, setBump] = useState(false);
  const { language, setLanguage } = useLanguage();
  const nav = navByLanguage[language];

  useEffect(() => {
    const onAdd = () => {
      setCartCount((prev) => prev + 1);
      setBump(true);
      setCartOpen(true);
      setTimeout(() => setBump(false), 450);
    };
    window.addEventListener("cart:add", onAdd);
    return () => window.removeEventListener("cart:add", onAdd);
  }, []);

  return (
    <header className="sticky top-0 z-50 border-b border-black/10 bg-white/95 backdrop-blur">
      <div className="hidden border-b border-black/10 bg-secondary-bg md:block">
        <div className="container flex h-10 items-center justify-between text-[13px]">
          <div className="flex items-center gap-6 text-text">
            <p className="font-semibold">{language === "es" ? "ENVIO GRATIS +100EUR" : "FREE SHIPPING +100EUR"}</p>
            <p className="text-muted">{language === "es" ? "Pedido minimo 50EUR + IVA" : "Minimum order 50EUR + VAT"}</p>
            <p className="text-muted">{language === "es" ? "Entrega urgente 24-48h" : "Express delivery 24-48h"}</p>
          </div>
          <div className="inline-flex items-center rounded-full border border-black/10 bg-white p-1">
            <button onClick={() => setLanguage("es")} className={`rounded-full px-3 py-1 text-[12px] font-semibold ${language === "es" ? "bg-primary text-white shadow-sm" : "text-muted"}`}>Spanish</button>
            <button onClick={() => setLanguage("en")} className={`rounded-full px-3 py-1 text-[12px] font-semibold ${language === "en" ? "bg-primary text-white shadow-sm" : "text-muted"}`}>English</button>
          </div>
        </div>
      </div>

      <div className="container flex h-20 items-center gap-3">
        <button onClick={() => setOpen(true)} className="rounded-xl border border-black/10 p-2.5 transition hover:bg-secondary-bg lg:hidden" aria-label="Open menu">
          <Menu size={20} />
        </button>
        <Link href="/" className="shrink-0">
          <BrandLogo shortOnMobile />
        </Link>

        <div className="mx-1 hidden h-11 min-w-[280px] flex-1 items-center rounded-full border border-black/10 bg-white px-3 shadow-sm md:flex lg:min-w-[380px]">
          <Search size={16} className="text-muted" />
          <input
            placeholder={language === "es" ? "Buscar productos" : "Search products"}
            className="w-full bg-transparent px-2 text-[15px] text-text outline-none placeholder:text-muted"
          />
        </div>

        <div className="ml-auto flex items-center gap-2">
          <button onClick={() => setLanguage(language === "es" ? "en" : "es")} className="rounded-xl border border-black/10 px-2.5 py-1.5 text-[12px] font-semibold text-primary md:hidden">
            {language === "es" ? "ES" : "EN"}
          </button>
          <button onClick={() => setCartOpen(true)} className="relative rounded-xl p-2.5 transition hover:bg-secondary-bg" aria-label="Cart">
            <ShoppingCart size={20} />
            <span className={`absolute -right-0.5 -top-0.5 inline-flex h-5 min-w-5 items-center justify-center rounded-full bg-accent px-1 text-[11px] font-bold text-white ${bump ? "pulse-once" : "cart-badge"}`}>
              {cartCount}
            </span>
          </button>
        </div>
      </div>

      <div className="hidden border-t border-black/10 bg-secondary-bg lg:block">
        <nav className="container flex h-14 items-center gap-8">
          {nav.map((item) => (
            <Link key={item.label} href={item.href} className="text-[15px] font-semibold text-text transition hover:text-accent">
              {item.label}
            </Link>
          ))}
        </nav>
      </div>

      <div className={`fixed inset-0 z-[60] transition ${open ? "pointer-events-auto bg-black/35 opacity-100" : "pointer-events-none opacity-0"}`} onClick={() => setOpen(false)} />
      <aside className={`fixed inset-y-0 right-0 z-[70] w-80 border-l border-black/10 bg-white p-6 shadow-md transition-transform duration-300 ${open ? "translate-x-0" : "translate-x-full"}`}>
        <div className="mb-6 flex items-center justify-between">
          <p className="text-lg font-bold">Menu</p>
          <button onClick={() => setOpen(false)} className="rounded-xl p-2 hover:bg-secondary-bg" aria-label="Close menu">
            <X size={18} />
          </button>
        </div>
        <div className="mb-5 flex h-11 items-center rounded-xl border border-black/10 bg-secondary-bg px-3">
          <Search size={16} className="text-muted" />
          <input placeholder={language === "es" ? "Buscar productos" : "Search products"} className="w-full bg-transparent px-2 text-[15px] outline-none placeholder:text-muted" />
        </div>
        <div className="mb-4 inline-flex items-center rounded-full border border-black/10 bg-secondary-bg p-1">
          <button onClick={() => setLanguage("es")} className={`rounded-full px-3 py-1 text-[12px] font-semibold ${language === "es" ? "bg-white text-primary shadow-sm" : "text-muted"}`}>Spanish</button>
          <button onClick={() => setLanguage("en")} className={`rounded-full px-3 py-1 text-[12px] font-semibold ${language === "en" ? "bg-white text-primary shadow-sm" : "text-muted"}`}>English</button>
        </div>
        <div className="flex flex-col gap-2">
          {nav.map((item) => (
            <Link key={item.label} href={item.href} onClick={() => setOpen(false)} className="rounded-xl px-3 py-2.5 text-[16px] font-medium hover:bg-secondary-bg">
              {item.label}
            </Link>
          ))}
        </div>
      </aside>

      <div className={`fixed inset-0 z-[72] transition ${cartOpen ? "pointer-events-auto bg-black/35 opacity-100" : "pointer-events-none opacity-0"}`} onClick={() => setCartOpen(false)} />
      <aside className={`slide-drawer fixed inset-y-0 right-0 z-[73] w-80 border-l border-black/10 bg-white p-5 shadow-md ${cartOpen ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"}`}>
        <div className="mb-5 flex items-center justify-between">
          <p className="text-lg font-bold text-text">{language === "es" ? "Tu carrito" : "Your cart"}</p>
          <button onClick={() => setCartOpen(false)} className="rounded-xl p-2 hover:bg-secondary-bg" aria-label="Close cart">
            <X size={18} />
          </button>
        </div>
        <div className="space-y-3">
          {products.slice(0, 2).map((item) => (
            <div key={item.id} className="rounded-xl border border-black/10 p-3">
              <p className="truncate text-[15px] font-semibold">{item.name}</p>
              <p className="text-[14px] text-muted">EUR {item.price.toFixed(2)}</p>
            </div>
          ))}
        </div>
        <Link onClick={() => setCartOpen(false)} href="/cart" className="btn-hover mt-5 block rounded-xl bg-primary px-4 py-3 text-center text-[15px] font-semibold text-white cta-glow">
          {language === "es" ? "Ver carrito" : "View cart"}
        </Link>
      </aside>
    </header>
  );
}
