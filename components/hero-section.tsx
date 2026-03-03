import Image from "next/image";
import Link from "next/link";

export function HeroSection() {
  return (
    <section className="section pb-10 pt-6 sm:pt-8">
      <div className="container relative overflow-hidden rounded-xl border border-black/10">
        <Image
          src="https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=1900&q=80"
          alt="Premium mobile essentials"
          width={1900}
          height={980}
          priority
          quality={80}
          className="h-[560px] w-full object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#111827]/80 via-[#111827]/50 to-[#111827]/25" />
        <div className="absolute inset-0 flex items-center">
          <div className="max-w-3xl px-6 text-white sm:px-10">
            <h1 className="text-4xl font-extrabold leading-tight sm:text-5xl lg:text-6xl">
              Discover Premium Mobile Essentials
            </h1>
            <p className="mt-4 max-w-2xl text-[18px] text-white/90">
              Quality Products at European Standards
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Link href="/#top-products" className="pressable rounded-xl bg-accent px-6 py-3 text-[16px] font-semibold text-white shadow-sm transition hover:opacity-90">
                Shop Now
              </Link>
              <Link href="/#categories" className="pressable rounded-xl border border-white/70 px-6 py-3 text-[16px] font-semibold transition hover:bg-white hover:text-text">
                View Collections
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
