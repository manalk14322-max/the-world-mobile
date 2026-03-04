"use client";

import Link from "next/link";
import {
  Cable,
  ChevronRight,
  Headphones,
  Menu,
  Monitor,
  Package,
  PlugZap,
  Search,
  Shield,
  ShoppingCart,
  Smartphone,
  Tag,
  User,
  X
} from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { BrandLogo } from "./brand-logo";
import { useLanguage } from "./language-context";

const navByLanguage = {
  es: [
    { label: "Inicio", href: "/" },
    { label: "Store", href: "/#top-products" },
    { label: "Novedades", href: "/#top-products" },
    { label: "Ofertas", href: "/#categories" },
    { label: "Contacto", href: "/#newsletter" }
  ],
  en: [
    { label: "Home", href: "/" },
    { label: "Store", href: "/#top-products" },
    { label: "New Arrivals", href: "/#top-products" },
    { label: "Offers", href: "/#categories" },
    { label: "Contact", href: "/#newsletter" }
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
    { label: "GADGETS", icon: Package }
  ],
  en: [
    { label: "BRAND", icon: Tag },
    { label: "CASES", icon: Smartphone },
    { label: "SCREEN PROTECTORS", icon: Shield },
    { label: "CHARGERS", icon: PlugZap },
    { label: "CABLES", icon: Cable },
    { label: "AUDIO", icon: Headphones },
    { label: "MOUNTS", icon: Monitor },
    { label: "GADGETS", icon: Package }
  ]
} as const;

export function SiteHeader() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [catOpen, setCatOpen] = useState(false);
  const { language, setLanguage } = useLanguage();
  const nav = navByLanguage[language];
  const categories = categoriesByLanguage[language];
  const catRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const onOutside = (event: MouseEvent) => {
      if (!catRef.current) return;
      if (!catRef.current.contains(event.target as Node)) setCatOpen(false);
    };
    document.addEventListener("mousedown", onOutside);
    return () => document.removeEventListener("mousedown", onOutside);
  }, []);

  return (
    <header className="sticky top-0 z-50 border-b border-black/10 bg-white">
      <div className="hidden border-b border-black/10 bg-[#F7F7F7] md:block">
        <div className="container flex h-9 items-center justify-between text-[12px] text-muted">
          <p>{language === "es" ? "Entrega 24-48h en toda Espana" : "24-48h delivery across Spain"}</p>
          <div className="inline-flex items-center rounded-full border border-black/10 bg-white p-1">
            <button onClick={() => setLanguage("es")} className={`rounded-full px-3 py-1 font-semibold ${language === "es" ? "bg-[#F57224] text-white" : "text-muted"}`}>Spanish</button>
            <button onClick={() => setLanguage("en")} className={`rounded-full px-3 py-1 font-semibold ${language === "en" ? "bg-[#F57224] text-white" : "text-muted"}`}>English</button>
          </div>
        </div>
      </div>

      <div className="container flex h-20 items-center gap-3">
        <button onClick={() => setMobileOpen(true)} className="rounded-xl border border-black/10 p-2.5 lg:hidden" aria-label="Open menu">
          <Menu size={20} />
        </button>
        <Link href="/" className="shrink-0">
          <BrandLogo shortOnMobile />
        </Link>

        <div className="ml-2 hidden h-11 flex-1 items-center overflow-hidden rounded-md border border-black/10 bg-white md:flex">
          <input
            placeholder={language === "es" ? "Buscar productos" : "Search products"}
            className="h-full w-full bg-transparent px-4 text-[15px] text-text outline-none placeholder:text-muted"
          />
          <button className="inline-flex h-11 w-12 items-center justify-center bg-[#F57224] text-white">
            <Search size={17} />
          </button>
        </div>

        <div className="ml-auto flex items-center gap-2">
          <button onClick={() => setLanguage(language === "es" ? "en" : "es")} className="rounded-xl border border-black/10 px-2.5 py-1.5 text-[12px] font-semibold text-[#F57224] md:hidden">
            {language === "es" ? "ES" : "EN"}
          </button>
          <button className="hidden rounded-full border border-black/10 p-2.5 text-text md:inline-flex">
            <User size={18} />
          </button>
          <Link href="/cart" className="relative rounded-xl p-2.5 transition hover:bg-secondary-bg" aria-label="Cart">
            <ShoppingCart size={20} />
            <span className="absolute -right-0.5 -top-0.5 inline-flex h-5 min-w-5 items-center justify-center rounded-full bg-[#F57224] px-1 text-[11px] font-bold text-white">2</span>
          </Link>
        </div>
      </div>

      <div className="hidden border-t border-black/10 bg-[#EEF3FF] lg:block">
        <div className="container relative flex h-14 items-center gap-8" ref={catRef}>
          <button onClick={() => setCatOpen((v) => !v)} className="inline-flex items-center gap-2 rounded-full bg-[#2E63D7] px-4 py-2 text-[15px] font-semibold text-white">
            <Menu size={17} />
            {language === "es" ? "All Categories" : "All Categories"}
          </button>

          {nav.map((item) => (
            <Link key={item.label} href={item.href} className="text-[15px] font-semibold text-text transition hover:text-[#2E63D7]">
              {item.label}
            </Link>
          ))}

          {catOpen && (
            <div className="absolute left-0 top-[58px] z-40 w-[320px] rounded-xl border border-black/10 bg-white p-2 shadow-md">
              {categories.map((item) => (
                <button key={item.label} className="group flex w-full items-center gap-3 rounded-lg px-3 py-3 text-left hover:bg-[#F7F9FF]">
                  <item.icon size={17} className="text-text" />
                  <span className="text-[14px] font-semibold text-text">{item.label}</span>
                  <ChevronRight size={15} className="ml-auto text-muted group-hover:text-[#2E63D7]" />
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      <div className={`fixed inset-0 z-[60] transition ${mobileOpen ? "pointer-events-auto bg-black/35 opacity-100" : "pointer-events-none opacity-0"}`} onClick={() => setMobileOpen(false)} />
      <aside className={`fixed inset-y-0 left-0 z-[70] w-[290px] border-r border-black/10 bg-white p-4 shadow-md transition-transform duration-300 ${mobileOpen ? "translate-x-0" : "-translate-x-full"}`}>
        <div className="mb-4 flex items-center justify-between">
          <p className="text-base font-bold text-text">{language === "es" ? "Menu" : "Menu"}</p>
          <button onClick={() => setMobileOpen(false)} className="rounded-xl p-2 hover:bg-secondary-bg" aria-label="Close menu">
            <X size={18} />
          </button>
        </div>
        <div className="mb-4 flex h-10 items-center rounded-xl border border-black/10 bg-secondary-bg px-3">
          <Search size={15} className="text-muted" />
          <input placeholder={language === "es" ? "Buscar productos" : "Search products"} className="w-full bg-transparent px-2 text-[14px] outline-none placeholder:text-muted" />
        </div>
        <div className="space-y-1">
          {categories.map((item) => (
            <button key={item.label} className="group flex w-full items-center gap-3 rounded-lg px-3 py-3 text-left hover:bg-[#F7F9FF]">
              <item.icon size={17} className="text-text" />
              <span className="text-[14px] font-semibold text-text">{item.label}</span>
              <ChevronRight size={15} className="ml-auto text-muted group-hover:text-[#2E63D7]" />
            </button>
          ))}
        </div>
      </aside>
    </header>
  );
}
