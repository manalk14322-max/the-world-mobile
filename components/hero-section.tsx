import Image from "next/image";
import Link from "next/link";

export function HeroSection() {
  return (
    <section className="section pb-16 pt-8 sm:pt-10">
      <div className="container relative overflow-hidden rounded-xl border border-black/10">
        <Image
          src="https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=1900&q=80"
          alt="Premium mobile essentials"
          width={1900}
          height={980}
          priority
          quality={80}
          className="h-[600px] w-full object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#1E3A8A]/88 via-[#1E3A8A]/64 to-[#1E3A8A]/36" />
        <div className="absolute inset-0 flex items-center pt-14 sm:pt-0">
          <div className="max-w-3xl px-6 text-white sm:px-10">
            <h1 className="text-4xl font-black leading-tight sm:text-6xl lg:text-7xl">
              Discover Premium Mobile Essentials
            </h1>
            <p className="mt-5 max-w-2xl text-[18px] text-white/90">
              Smartphones y accesorios con estandar europeo, entrega rapida y experiencia de compra segura en Espana.
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              <Link href="/#top-products" className="btn-hover cta-glow rounded-xl bg-primary px-8 py-4 text-[17px] font-semibold text-white">
                Comprar ahora
              </Link>
              <Link href="/#categories" className="btn-hover rounded-xl border border-white/70 px-6 py-3 text-[16px] font-semibold transition hover:bg-white hover:text-text">
                Ver colecciones
              </Link>
            </div>
            <div className="mt-6 flex flex-wrap gap-2">
              <span className="rounded-full border border-white/35 bg-white/10 px-3 py-1 text-[13px] font-semibold text-white/95">
                Free EU Delivery
              </span>
              <span className="rounded-full border border-white/35 bg-white/10 px-3 py-1 text-[13px] font-semibold text-white/95">
                30-Day Returns
              </span>
            </div>
            <p className="mt-4 text-[14px] text-white/80">Mas de 2,000 clientes satisfechos en Espana</p>
          </div>
        </div>
      </div>
    </section>
  );
}
