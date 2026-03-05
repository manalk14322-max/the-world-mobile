"use client";

import Link from "next/link";
import { Menu, Search, ShoppingCart, User, X } from "lucide-react";
import { useState } from "react";
import { BrandLogo } from "./brand-logo";
import { useLanguage } from "./language-context";
import { useCart } from "./cart-context";

const navByLanguage = {
  es: [
    { label: "Inicio", href: "/" },
    { label: "Tienda", href: "/shop" },
    { label: "Categorías", href: "/#categories" },
    { label: "Ofertas", href: "/#promotion" },
    { label: "Contacto", href: "/#newsletter" }
  ],
  en: [
    { label: "Home", href: "/" },
    { label: "Shop", href: "/shop" },
    { label: "Categories", href: "/#categories" },
    { label: "Offers", href: "/#promotion" },
    { label: "Contact", href: "/#newsletter" }
  ]
} as const;

export function SiteHeader() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { language, setLanguage } = useLanguage();
  const { totalItems } = useCart();
  const nav = navByLanguage[language];

  return (
    <header className="sticky top-0 z-50">
      <div className="bg-[#0f172a]">
        <div className="container flex h-10 items-center justify-between text-[12px] text-white">
          <p>Entrega rápida 24-48h en toda España</p>
          <div className="inline-flex items-center gap-2">
            <button onClick={() => setLanguage("es")} className={`rounded-md px-2 py-0.5 font-semibold ${language === "es" ? "bg-white/20" : "opacity-80"}`}>Spanish</button>
            <span className="opacity-60">|</span>
            <button onClick={() => setLanguage("en")} className={`rounded-md px-2 py-0.5 font-semibold ${language === "en" ? "bg-white/20" : "opacity-80"}`}>English</button>
          </div>
        </div>
      </div>

      <div className="border-b border-black/10 bg-white shadow-sm">
        <div className="container flex h-20 items-center gap-3">
          <button onClick={() => setMobileOpen(true)} className="rounded-xl border border-black/10 p-2.5 lg:hidden" aria-label="Open menu">
            <Menu size={20} />
          </button>

          <Link href="/" className="shrink-0">
            <BrandLogo shortOnMobile />
          </Link>

          <nav className="mx-auto hidden items-center gap-8 lg:flex">
            {nav.map((item) => (
              <Link key={item.label} href={item.href} className="text-[15px] font-medium text-text transition hover:text-accent">
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="ml-auto flex items-center gap-1.5">
            <button className="rounded-xl p-2.5 text-text transition hover:bg-secondary-bg" aria-label="Search">
              <Search size={19} />
            </button>
            <button className="hidden rounded-xl p-2.5 text-text transition hover:bg-secondary-bg md:block" aria-label="Account">
              <User size={19} />
            </button>
            <Link href="/cart" className="relative rounded-xl p-2.5 text-text transition hover:bg-secondary-bg" aria-label="Cart">
              <ShoppingCart size={19} />
              <span className="absolute -right-0.5 -top-0.5 inline-flex h-5 min-w-5 items-center justify-center rounded-full bg-accent px-1 text-[11px] font-bold text-white">
                {totalItems}
              </span>
            </Link>
          </div>
        </div>
      </div>

      <div className={`fixed inset-0 z-[60] transition ${mobileOpen ? "pointer-events-auto bg-black/35 opacity-100" : "pointer-events-none opacity-0"}`} onClick={() => setMobileOpen(false)} />
      <aside className={`fixed inset-y-0 left-0 z-[70] w-[290px] border-r border-black/10 bg-white p-4 shadow-md transition-transform duration-300 ${mobileOpen ? "translate-x-0" : "-translate-x-full"}`}>
        <div className="mb-5 flex items-center justify-between">
          <p className="text-base font-bold text-text">Menu</p>
          <button onClick={() => setMobileOpen(false)} className="rounded-xl p-2 hover:bg-secondary-bg" aria-label="Close menu">
            <X size={18} />
          </button>
        </div>
        <div className="space-y-1">
          {nav.map((item) => (
            <Link key={item.label} href={item.href} onClick={() => setMobileOpen(false)} className="block rounded-lg px-3 py-3 text-[14px] font-semibold text-text hover:bg-secondary-bg">
              {item.label}
            </Link>
          ))}
        </div>
      </aside>
    </header>
  );
}
