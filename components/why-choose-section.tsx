import { ArrowRight, Sparkles } from "lucide-react";
import Link from "next/link";

const points = [
  {
    title: "Curated Premium Catalog",
    text: "Top-performing phones only, selected for camera, battery, and long-term value."
  },
  {
    title: "Transparent Pricing",
    text: "Clear final prices with no hidden surprises during checkout."
  },
  {
    title: "Launch-Day Availability",
    text: "Get new releases early with priority pre-order and instant notifications."
  }
];

export function WhyChooseSection() {
  return (
    <section className="section py-10 sm:py-16">
      <div className="container overflow-hidden rounded-xl border border-black/10 bg-white shadow-sm">
        <div className="grid gap-6 p-5 sm:gap-8 sm:p-7 md:p-10 lg:grid-cols-[1.05fr_1fr]">
          <div>
            <p className="inline-flex items-center gap-2 rounded-full bg-secondary-bg px-3 py-1 text-[14px] font-medium text-text">
              <Sparkles size={14} className="text-accent" />
              Why customers choose us
            </p>
            <h2 className="mt-4 text-2xl font-extrabold leading-tight sm:text-3xl md:text-4xl">
              Professional mobile store experience built for trust and speed
            </h2>
            <p className="mt-3 text-[16px] text-muted sm:text-[17px]">
              The world mobile gives you a clean buying journey from discovery to delivery.
            </p>
            <Link
              href="/#featured"
              className="pressable mt-6 inline-flex items-center gap-2 rounded-xl bg-black px-5 py-3 text-[16px] font-semibold text-white shadow-sm transition hover:opacity-90"
            >
              Start Shopping
              <ArrowRight size={18} />
            </Link>
          </div>

          <div className="grid gap-3 sm:gap-4">
            {points.map((point) => (
              <article key={point.title} className="rounded-xl border border-black/10 bg-secondary-bg p-4 sm:p-5">
                <h3 className="text-lg font-bold sm:text-xl">{point.title}</h3>
                <p className="mt-2 text-[15px] text-muted sm:text-[16px]">{point.text}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
