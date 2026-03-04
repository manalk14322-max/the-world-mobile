"use client";

import Link from "next/link";
import {
  Cable,
  ChevronRight,
  HardDrive,
  Headphones,
  House,
  Laptop,
  Menu,
  Monitor,
  Package,
  PlugZap,
  Search,
  Shield,
  ShoppingBag,
  ShoppingCart,
  Smartphone,
  Tag,
  User,
  X
} from "lucide-react";
import { useEffect, useState } from "react";
import { BrandLogo } from "./brand-logo";
import { products } from "@/data/mock-data";
import { useLanguage } from "./language-context";

const navByLanguage = {
  es: [
    { label: "Store", href: "/#top-products" },
    { label: "Nuestro Contacto", href: "/#newsletter" },
    { label: "Novedades", href: "/#top-products" },
    { label: "Oferta", href: "/#categories" }
  ],
  en: [
    { label: "Store", href: "/#top-products" },
    { label: "Contact", href: "/#newsletter" },
    { label: "New Arrivals", href: "/#top-products" },
    { label: "Offers", href: "/#categories" }
  ]
} as const;

const categoriesByLanguage = {
  es: [
    { label: "MARCA", icon: Tag },
    { label: "FUNDA", icon: Smartphone },
    { label: "PROTECTORES PANTALLA", icon: Shield },
    { label: "CARGADORES", icon: PlugZap },
    { label: "CABLE", icon: Cable },
    { label: "AUDIO", icon: Headphones },
    { label: "SOPORTE", icon: Monitor },
    { label: "INFORMATICA", icon: Laptop },
    { label: "GADGETS", icon: Package },
    { label: "TARJETA MEMORIAS", icon: HardDrive }
  ],
  en: [
    { label: "BRAND", icon: Tag },
    { label: "CASES", icon: Smartphone },
    { label: "SCREEN PROTECTORS", icon: Shield },
    { label: "CHARGERS", icon: PlugZap },
    { label: "CABLES", icon: Cable },
    { label: "AUDIO", icon: Headphones },
    { label: "MOUNTS", icon: Monitor },
    { label: "COMPUTING", icon: Laptop },
    { label: "GADGETS", icon: Package },
    { label: "MEMORY CARDS", icon: HardDrive }
  ]
} as const;

const railIcons = [House, Smartphone, Shield, PlugZap, Cable, Headphones, Monitor, Laptop, ShoppingBag];

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  const [cartCount, setCartCount] = useState(2);
  const [bump, setBump] = useState(false);
  const { language, setLanguage } = useLanguage();
  const nav = navByLanguage[language];
  const categories = categoriesByLanguage[language];

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
    <>
      <aside className="fixed inset-y-0 left-0 z-[45] hidden w-14 border-r border-black/10 bg-white xl:block">
        <div className="flex h-full flex-col items-center gap-7 pt-24">
          <button onClick={() => setOpen(true)} className="rounded-full bg-primary p-2.5 text-white shadow-sm">
            <Menu size={18} />
          </button>
          {railIcons.map((Icon, idx) => (
            <button key={idx} className="text-text/85 transition hover:text-primary" aria-label="Category">
              <Icon size={18} />
            </button>
          ))}
        </div>
      </aside>

      <header className="sticky top-0 z-50 border-b border-black/10 bg-white/95 backdrop-blur">
        <div className="hidden border-b border-black/10 bg-white lg:block">
          <div className="container flex h-20 items-center gap-4">
            <button onClick={() => setOpen(true)} className="inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2.5 text-white shadow-sm transition hover:opacity-90">
              <Menu size={17} />
              <span className="text-[15px] font-semibold">{language === "es" ? "All Categories" : "All Categories"}</span>
            </button>

            <Link href="/" className="shrink-0">
              <BrandLogo />
            </Link>

            <div className="ml-2 flex h-11 min-w-[330px] flex-1 items-center rounded-full border border-black/10 bg-white px-3 shadow-sm">
              <Search size={16} className="text-muted" />
              <input
                placeholder={language === "es" ? "Buscar productos" : "Search products"}
                className="w-full bg-transparent px-2 text-[15px] text-text outline-none placeholder:text-muted"
              />
            </div>

            <div className="min-w-[250px] text-[13px] leading-tight text-text">
              <p className="font-extrabold">{language === "es" ? "ENVIO GRATIS +100EUR" : "FREE SHIPPING +100EUR"}</p>
              <p className="font-semibold text-[#EA580C]">{language === "es" ? "Pedido Minimo 50EUR + IVA" : "Minimum Order 50EUR + VAT"}</p>
              <p className="text-muted">{language === "es" ? "Hora limite 17:30 envio urgente 24h" : "Cut-off 17:30 express shipping 24h"}</p>
            </div>

            <div className="inline-flex items-center rounded-full border border-black/10 bg-secondary-bg p-1">
              <button onClick={() => setLanguage("es")} className={`rounded-full px-3 py-1 text-[12px] font-semibold ${language === "es" ? "bg-white text-primary shadow-sm" : "text-muted"}`}>Spanish</button>
              <button onClick={() => setLanguage("en")} className={`rounded-full px-3 py-1 text-[12px] font-semibold ${language === "en" ? "bg-white text-primary shadow-sm" : "text-muted"}`}>English</button>
            </div>
            <button onClick={() => setCartOpen(true)} className="relative rounded-xl p-2.5 transition hover:bg-secondary-bg" aria-label="Cart">
              <ShoppingCart size={20} />
              <span className={`absolute -right-0.5 -top-0.5 inline-flex h-5 min-w-5 items-center justify-center rounded-full bg-accent px-1 text-[11px] font-bold text-white ${bump ? "pulse-once" : "cart-badge"}`}>
                {cartCount}
              </span>
            </button>
          </div>
        </div>

        <div className="hidden border-b border-black/10 bg-[#EAF0FF] lg:block">
          <div className="container flex h-14 items-center gap-8">
            {nav.map((item) => (
              <Link key={item.label} href={item.href} className="text-[15px] font-semibold text-text transition hover:text-primary">
                {item.label}
              </Link>
            ))}
            <button className="ml-auto rounded-full border border-black/10 bg-white p-2 text-text hover:bg-secondary-bg" aria-label="Account">
              <User size={17} />
            </button>
          </div>
        </div>

        <div className="container py-2 lg:hidden">
          <div className="flex h-14 items-center gap-2">
            <button onClick={() => setOpen(true)} className="rounded-xl border border-black/10 p-2.5" aria-label="Open categories">
              <Menu size={18} />
            </button>
            <Link href="/" className="min-w-0 flex-1">
              <BrandLogo compact shortOnMobile />
            </Link>
            <button onClick={() => setLanguage(language === "es" ? "en" : "es")} className="rounded-xl border border-black/10 px-2.5 py-1.5 text-[12px] font-semibold text-primary">
              {language === "es" ? "ES" : "EN"}
            </button>
            <button onClick={() => setCartOpen(true)} className="relative rounded-xl p-2.5" aria-label="Cart">
              <ShoppingCart size={20} />
              <span className={`absolute -right-0.5 -top-0.5 inline-flex h-5 min-w-5 items-center justify-center rounded-full bg-accent px-1 text-[11px] font-bold text-white ${bump ? "pulse-once" : "cart-badge"}`}>
                {cartCount}
              </span>
            </button>
          </div>
          <div className="mt-2 flex h-11 items-center rounded-full border border-black/10 bg-white px-3 shadow-sm">
            <Search size={16} className="text-muted" />
            <input
              placeholder={language === "es" ? "Buscar productos" : "Search products"}
              className="w-full bg-transparent px-2 text-[15px] text-text outline-none placeholder:text-muted"
            />
          </div>
        </div>

        <div className={`fixed inset-0 z-[60] transition ${open ? "pointer-events-auto bg-black/35 opacity-100" : "pointer-events-none opacity-0"}`} onClick={() => setOpen(false)} />
        <aside className={`fixed inset-y-0 left-0 z-[70] w-[310px] border-r border-black/10 bg-white shadow-md transition-transform duration-300 ${open ? "translate-x-0" : "-translate-x-full"}`}>
          <div className="flex h-full flex-col bg-white">
            <div className="flex items-center justify-between border-b border-black/10 px-4 py-4">
              <button className="inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-[15px] font-semibold text-white">
                <Menu size={17} />
                {language === "es" ? "All Categories" : "All Categories"}
              </button>
              <button onClick={() => setOpen(false)} className="rounded-xl p-2 hover:bg-secondary-bg" aria-label="Close menu">
                <X size={18} />
              </button>
            </div>
            <div className="hide-scrollbar flex-1 overflow-y-auto px-2 py-2">
              {categories.map((item) => (
                <button key={item.label} className="flex w-full items-center gap-3 border-b border-black/5 px-3 py-3 text-left transition hover:bg-secondary-bg">
                  <item.icon size={18} className="text-text" />
                  <span className="text-[15px] font-semibold text-text">{item.label}</span>
                  <ChevronRight size={15} className="ml-auto text-muted" />
                </button>
              ))}
            </div>
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
    </>
  );
}
