export function NewsletterSection() {
  return (
    <section id="newsletter" className="section bg-secondary-bg py-10 sm:py-16">
      <div className="container">
        <div className="mx-auto max-w-5xl overflow-hidden rounded-xl border border-black/10 bg-white shadow-sm">
          <div className="grid gap-5 p-5 sm:gap-6 sm:p-8 md:grid-cols-[1fr_auto] md:items-center md:p-10">
            <div>
              <p className="text-[14px] font-medium text-accent">Exclusive members list</p>
              <h2 className="mt-2 text-2xl font-extrabold sm:text-3xl md:text-4xl">Get Mobile Deals First</h2>
              <p className="mt-2 text-[16px] text-muted sm:text-[17px]">
                Subscribe for launch alerts, limited-time discounts, and exclusive premium offers.
              </p>
            </div>

            <form className="flex w-full flex-col gap-3 md:w-[420px]">
              <input
                type="email"
                placeholder="Enter your email"
                className="h-12 w-full rounded-xl border border-black/10 px-4 text-[16px] outline-none transition focus:border-black"
              />
              <button className="pressable h-12 rounded-xl bg-black px-6 text-[16px] font-semibold text-white transition hover:opacity-90">
                Join Now
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
