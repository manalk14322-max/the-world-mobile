"use client";

import Link from "next/link";
import { Facebook, Instagram, Linkedin } from "lucide-react";
import { useLanguage } from "./language-context";

export function SiteFooter() {
  const { language } = useLanguage();

  return (
    <footer className="section border-t border-black/10 bg-secondary-bg py-10 sm:py-14">
      <div className="container grid gap-8 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <p className="text-xl font-extrabold text-text">The world mobile</p>
          <p className="mt-2 text-[15px] text-muted">
            {language === "es" ? "Accesorios premium para clientes europeos." : "Premium mobile essentials for European customers."}
          </p>
          <p className="mt-3 text-[15px] text-text">{language === "es" ? "Direccion: Calle de Alcala 45, Madrid, Espana" : "Address: Calle de Alcala 45, Madrid, Spain"}</p>
          <p className="mt-4 text-[15px] text-text">Email: support@theworldmobile.eu</p>
          <p className="text-[15px] text-text">{language === "es" ? "Telefono: +34 600 123 456" : "Phone: +34 600 123 456"}</p>
        </div>

        <div>
          <p className="font-bold text-text">{language === "es" ? "Enlaces rapidos" : "Quick Links"}</p>
          <ul className="mt-3 space-y-2 text-[15px] text-muted">
            <li><Link href="/">{language === "es" ? "Inicio" : "Home"}</Link></li>
            <li><Link href="/#top-products">{language === "es" ? "Tienda" : "Shop"}</Link></li>
            <li><Link href="/#categories">{language === "es" ? "Categorias" : "Categories"}</Link></li>
            <li><Link href="/#testimonials">{language === "es" ? "Resenas" : "About"}</Link></li>
          </ul>
        </div>

        <div>
          <p className="font-bold text-text">{language === "es" ? "Atencion al cliente" : "Customer Care"}</p>
          <ul className="mt-3 space-y-2 text-[15px] text-muted">
            <li>{language === "es" ? "Politica de entrega" : "Delivery Policy"}</li>
            <li>{language === "es" ? "Devoluciones y reembolsos" : "Returns & Refunds"}</li>
            <li>{language === "es" ? "Soporte de garantia" : "Warranty Support"}</li>
          </ul>
        </div>

        <div>
          <p className="font-bold text-text">{language === "es" ? "Siguenos" : "Follow Us"}</p>
          <div className="mt-3 flex gap-2 text-muted">
            <span className="rounded-xl border border-black/10 p-2"><Facebook size={17} /></span>
            <span className="rounded-xl border border-black/10 p-2"><Instagram size={17} /></span>
            <span className="rounded-xl border border-black/10 p-2"><Linkedin size={17} /></span>
          </div>
        </div>
      </div>

      <div className="container mt-8 border-t border-black/10 pt-5 text-[14px] text-muted">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <p>Copyright {new Date().getFullYear()} The world mobile.</p>
          <div className="flex gap-3">
            <Link href="#">{language === "es" ? "Privacidad" : "Privacy Policy"}</Link>
            <Link href="#">{language === "es" ? "Terminos" : "Terms"}</Link>
            <Link href="#">{language === "es" ? "Devoluciones" : "Returns"}</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
