"use client";

import Link from "next/link";
import { Menu, ShoppingBag, X } from "lucide-react";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { BrandLogo } from "./brand-logo";

const nav = [
  { label: "Home", href: "/" },
  { label: "About", href: "/#about" },
  { label: "Mobiles", href: "/#featured" },
  { label: "Deals", href: "/#categories" },
  { label: "Contact Us", href: "/#newsletter" }
];

const mobileNav = [
  { label: "Home", href: "/" },
  { label: "About", href: "/#about" },
  { label: "Shop Mobiles", href: "/#featured" },
  { label: "Categories", href: "/#categories" },
  { label: "Contact", href: "/#newsletter" },
  { label: "Cart", href: "/cart" },
  { label: "Checkout", href: "/checkout" }
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";
  const transparentMode = isHome && !scrolled;

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 56);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`${
        isHome ? "fixed inset-x-0 top-0" : "sticky top-0 border-b border-black/5 bg-white"
      } z-50`}
    >
      <div className={`container ${isHome ? "pt-6" : ""}`}>
        <div
          className={`flex h-20 items-center justify-between rounded-xl px-5 ${
            transparentMode
              ? "border border-white/20 bg-white/10 text-white backdrop-blur-md"
              : "border border-black/10 bg-white text-text shadow-sm"
          }`}
        >
          <div className="flex items-center gap-4">
            <button
              className={`rounded-full border p-2 transition ${
                transparentMode
                  ? "border-white/25 hover:bg-white/15"
                  : "border-black/10 hover:bg-secondary-bg"
              }`}
              onClick={() => setOpen(true)}
              aria-label="Open menu"
            >
              <Menu size={18} />
            </button>
            <Link href="/" aria-label="The world mobile home">
              <BrandLogo light={transparentMode} compact />
            </Link>
          </div>

          <nav className="hidden items-center gap-9 lg:flex">
            {nav.map((item) => (
              <Link key={item.label} href={item.href} className="text-[16px] font-medium transition hover:text-accent">
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <Link
              href="/cart"
              aria-label="Cart"
              className={`rounded-xl p-2 transition ${
                transparentMode ? "hover:bg-white/15" : "hover:bg-secondary-bg"
              }`}
            >
              <ShoppingBag size={20} />
            </Link>
            <Link
              href="/checkout"
              className={`pressable rounded-xl px-5 py-2.5 text-[16px] font-semibold shadow-sm transition ${
                transparentMode ? "bg-white text-black hover:bg-white/90" : "bg-black text-white hover:opacity-90"
              }`}
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>

      <div
        className={`fixed inset-0 z-[60] transition ${
          open ? "pointer-events-auto bg-black/40 opacity-100" : "pointer-events-none opacity-0"
        }`}
        onClick={() => setOpen(false)}
      />

      <aside
        className={`fixed inset-y-0 left-0 z-[70] w-80 border-r border-black/10 bg-white p-6 shadow-md transition-transform duration-300 ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="mb-8 flex items-center justify-between">
          <p className="text-lg font-bold">Menu</p>
          <button onClick={() => setOpen(false)} aria-label="Close menu" className="rounded-xl p-2 hover:bg-secondary-bg">
            <X size={18} />
          </button>
        </div>

        <div className="flex flex-col gap-2">
          {mobileNav.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="rounded-xl px-3 py-2.5 text-[16px] font-medium text-text transition hover:bg-secondary-bg"
              onClick={() => setOpen(false)}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </aside>
    </header>
  );
}
