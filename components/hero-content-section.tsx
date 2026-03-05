import Link from "next/link";

export function HeroContentSection() {
  return (
    <section className="pb-10 pt-2 sm:pb-14">
      <div className="container">
        <div className="rounded-xl border border-black/10 bg-white p-6 shadow-sm sm:p-8">
          <p className="text-[12px] font-semibold uppercase tracking-[0.12em] text-muted">
            Premium Mobile Store in Spain
          </p>
          <h2 className="mt-3 text-3xl font-black leading-tight text-text sm:text-5xl">
            Secure, Fast and Professional Mobile Shopping
          </h2>
          <p className="mt-3 max-w-3xl text-[18px] text-muted">
            High quality smartphones and accessories with fast delivery across Spain.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link href="/#top-products" className="btn-hover rounded-[10px] bg-accent px-7 py-3.5 text-[16px] font-semibold text-white">
              Shop Now
            </Link>
            <Link href="/#categories" className="btn-hover rounded-[10px] border border-black/15 bg-white px-7 py-3.5 text-[16px] font-semibold text-text transition hover:bg-secondary-bg">
              View Collection
            </Link>
          </div>
          <div className="mt-5 flex flex-wrap gap-2 text-[12px] font-semibold">
            <span className="rounded-full border border-black/15 bg-secondary-bg px-3 py-1 text-text">24-48h delivery</span>
            <span className="rounded-full border border-black/15 bg-secondary-bg px-3 py-1 text-text">Secure SSL checkout</span>
            <span className="rounded-full border border-black/15 bg-secondary-bg px-3 py-1 text-text">EU official warranty</span>
          </div>
        </div>
      </div>
    </section>
  );
}
