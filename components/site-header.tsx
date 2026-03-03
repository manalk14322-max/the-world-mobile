"use client";

import Link from "next/link";
import { Menu, Search, ShoppingCart, X } from "lucide-react";
import { useState } from "react";

const nav = [
  { label: "Home", href: "/" },
  { label: "Shop", href: "/#top-products" },
  { label: "Categories", href: "/#categories" },
  { label: "About", href: "/#testimonials" },
  { label: "Contact", href: "/#newsletter" }
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-black/15 bg-white/95 backdrop-blur">
      <div className="container flex h-20 items-center gap-3">
        <Link href="/" className="shrink-0 text-xl font-black tracking-[0.01em] text-text sm:text-2xl">
          The world mobile
        </Link>

        <nav className="hidden items-center gap-10 lg:flex">
          {nav.map((item) => (
            <Link key={item.label} href={item.href} className="text-[16px] font-medium text-text transition hover:text-accent">
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="ml-auto hidden items-center gap-2 md:flex">
          <div className="flex h-11 w-64 items-center rounded-full border border-black/10 bg-secondary-bg px-3 shadow-sm">
            <Search size={16} className="text-muted" />
            <input
              placeholder="Search products"
              className="w-full bg-transparent px-2 text-[15px] text-text outline-none placeholder:text-muted"
            />
          </div>
          <Link href="/cart" className="relative rounded-xl p-2.5 transition hover:bg-secondary-bg" aria-label="Cart">
            <ShoppingCart size={20} />
            <span className="absolute -right-0.5 -top-0.5 inline-flex h-5 min-w-5 items-center justify-center rounded-full bg-gold px-1 text-[11px] font-bold text-black">
              2
            </span>
          </Link>
        </div>

        <div className="ml-auto flex items-center gap-2 md:hidden">
          <Link href="/cart" className="relative rounded-xl p-2.5 transition hover:bg-secondary-bg" aria-label="Cart">
            <ShoppingCart size={20} />
            <span className="absolute -right-0.5 -top-0.5 inline-flex h-5 min-w-5 items-center justify-center rounded-full bg-gold px-1 text-[11px] font-bold text-black">
              2
            </span>
          </Link>
          <button onClick={() => setOpen(true)} className="rounded-xl p-2.5 transition hover:bg-secondary-bg" aria-label="Open menu">
            <Menu size={20} />
          </button>
        </div>
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
          <input placeholder="Search products" className="w-full bg-transparent px-2 text-[15px] outline-none placeholder:text-muted" />
        </div>
        <div className="flex flex-col gap-2">
          {nav.map((item) => (
            <Link key={item.label} href={item.href} onClick={() => setOpen(false)} className="rounded-xl px-3 py-2.5 text-[16px] font-medium hover:bg-secondary-bg">
              {item.label}
            </Link>
          ))}
        </div>
      </aside>
    </header>
  );
}
