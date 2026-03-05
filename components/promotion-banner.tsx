import Link from "next/link";
import Image from "next/image";

export function PromotionBanner() {
  return (
    <section id="promotion" className="section py-10 sm:py-14">
      <div className="container">
        <div className="relative overflow-hidden rounded-xl border border-black/10 shadow-md">
          <Image
            src="https://images.unsplash.com/photo-1526738549149-8e07eca6c147?auto=format&fit=crop&w=1800&q=80"
            alt="Special smartphone offers"
            width={1800}
            height={900}
            className="h-[360px] w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30" />
          <div className="absolute inset-0 flex items-center px-6 sm:px-10">
            <div>
              <h2 className="max-w-2xl text-3xl font-extrabold text-white sm:text-5xl">
                Special Offers on Premium Smartphones
              </h2>
              <Link href="/#top-products" className="btn-hover mt-6 inline-block rounded-[10px] bg-accent px-6 py-3 text-[16px] font-semibold text-white">
                Explore Deals
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
