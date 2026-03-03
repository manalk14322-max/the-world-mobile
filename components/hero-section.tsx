import Image from "next/image";
import Link from "next/link";

export function HeroSection() {
  return (
    <section className="section pt-0">
      <div className="container relative overflow-hidden rounded-xl border border-black/10">
        <video
          className="h-[620px] w-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          poster="https://images.unsplash.com/photo-1592750475338-74b7b21085ab?auto=format&fit=crop&w=1800&q=80"
        >
          <source src="/videos/mobile-hero.mp4" type="video/mp4" />
          <source
            src="https://cdn.coverr.co/videos/coverr-close-up-of-a-smartphone-typing-1579/1080p.mp4"
            type="video/mp4"
          />
        </video>
        <Image
          src="https://images.unsplash.com/photo-1592750475338-74b7b21085ab?auto=format&fit=crop&w=1800&q=80"
          alt="The world mobile banner"
          width={1800}
          height={900}
          className="pointer-events-none absolute inset-0 -z-10 h-[620px] w-full object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/45 to-black/20" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(0,128,96,0.24),transparent_35%)]" />
        <div className="absolute inset-0 flex items-end pb-14">
          <div className="grid w-full items-end gap-6 px-8 text-white md:grid-cols-[1fr_290px] md:px-14">
            <div className="max-w-3xl">
              <p className="inline-flex rounded-full border border-white/30 bg-white/10 px-4 py-1 text-[14px] font-medium backdrop-blur">
                Premium mobile shopping experience
              </p>
              <h1 className="mt-5 text-4xl font-extrabold leading-tight md:text-6xl">
                Latest Smartphones at Best Prices
              </h1>
              <p className="mt-4 max-w-2xl text-[18px] text-white/90">
                Buy original Apple, Samsung, Xiaomi, and Infinix mobiles with fast delivery, secure payment,
                and trusted after-sales support.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href="/#featured"
                  className="pressable rounded-xl bg-accent px-6 py-3 text-[16px] font-semibold text-white shadow-sm transition hover:opacity-90"
                >
                  Shop Now
                </Link>
                <Link
                  href="/#categories"
                  className="pressable rounded-xl border border-white/80 px-6 py-3 text-[16px] font-semibold transition hover:bg-white hover:text-black"
                >
                  Explore Mobiles
                </Link>
              </div>
            </div>

            <div className="grid gap-3">
              <div className="rounded-xl border border-white/25 bg-white/10 p-4 backdrop-blur-md">
                <p className="text-[14px] text-white/80">Happy Customers</p>
                <p className="mt-1 text-3xl font-extrabold">25k+</p>
              </div>
              <div className="rounded-xl border border-white/25 bg-white/10 p-4 backdrop-blur-md">
                <p className="text-[14px] text-white/80">Average Delivery</p>
                <p className="mt-1 text-3xl font-extrabold">24h</p>
              </div>
              <div className="rounded-xl border border-white/25 bg-white/10 p-4 backdrop-blur-md">
                <p className="text-[14px] text-white/80">Verified Ratings</p>
                <p className="mt-1 text-3xl font-extrabold">4.9/5</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
