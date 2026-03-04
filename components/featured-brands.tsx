"use client";

import { useLanguage } from "./language-context";

const brands = ["Apple", "Samsung", "Xiaomi", "Google Pixel", "OnePlus", "Nothing"];

export function FeaturedBrands() {
  const { language } = useLanguage();

  return (
    <section className="py-6 sm:py-8">
      <div className="container">
        <div className="rounded-xl border border-black/10 bg-white p-4 shadow-sm sm:p-6">
          <p className="text-center text-[13px] font-semibold uppercase tracking-[0.18em] text-muted">
            {language === "es" ? "Marcas de confianza" : "Trusted Brands"}
          </p>
          <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
            {brands.map((brand) => (
              <div key={brand} className="rounded-xl border border-black/10 bg-secondary-bg px-3 py-2 text-center text-[15px] font-semibold">
                {brand}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
