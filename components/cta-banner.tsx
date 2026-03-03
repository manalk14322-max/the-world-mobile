import Link from "next/link";

export function CtaBanner() {
  return (
    <section className="section py-10 sm:py-16">
      <div className="container">
        <div className="rounded-xl border border-black/10 bg-black p-6 text-white shadow-md sm:p-10">
          <p className="text-[14px] font-medium text-white/80">Ready for your next phone?</p>
          <h2 className="mt-2 max-w-3xl text-2xl font-extrabold leading-tight sm:text-4xl">
            Compare top models, check real prices, and order in minutes
          </h2>
          <p className="mt-3 max-w-2xl text-[16px] text-white/80">
            Mobile-first experience built for faster decisions and higher trust.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link href="/#featured" className="rounded-xl bg-accent px-5 py-3 text-[16px] font-semibold text-white">
              View Deals
            </Link>
            <Link href="/checkout" className="rounded-xl border border-white/25 px-5 py-3 text-[16px] font-semibold text-white">
              Checkout as Guest
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
