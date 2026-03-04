"use client";

import { useLanguage } from "./language-context";

export function NewsletterSection() {
  const { language } = useLanguage();

  return (
    <section id="newsletter" className="section py-8 sm:py-12">
      <div className="container">
        <div className="rounded-xl border border-black/10 bg-white p-6 text-center shadow-sm sm:p-8">
          <h2 className="text-2xl font-extrabold text-text sm:text-3xl">
            {language === "es" ? "Recibe ofertas exclusivas en Europa" : "Get Exclusive European Offers"}
          </h2>
          <p className="mt-2 text-[16px] text-muted">
            {language === "es" ? "Unete para recibir antes las mejores ofertas y nuevos lanzamientos." : "Join our newsletter for early access to deals and new arrivals."}
          </p>
          <form className="mx-auto mt-6 flex max-w-xl flex-col gap-3 sm:flex-row">
            <input
              type="email"
              placeholder={language === "es" ? "Introduce tu email" : "Enter your email"}
              className="h-12 flex-1 rounded-xl border border-black/10 px-4 text-[16px] outline-none transition focus:border-accent"
            />
            <button className="pressable h-12 rounded-xl bg-accent px-6 text-[16px] font-semibold text-white shadow-sm transition hover:opacity-90">
              {language === "es" ? "Suscribirse" : "Subscribe"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
