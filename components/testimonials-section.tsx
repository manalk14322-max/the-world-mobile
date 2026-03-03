"use client";

import { Star } from "lucide-react";
import { testimonials } from "@/data/mock-data";
import { useFadeInOnScroll } from "@/lib/use-fade-in-on-scroll";

export function TestimonialsSection() {
  const { ref, visible } = useFadeInOnScroll();

  return (
    <section id="about" className="section">
      <div ref={ref} className={`container fade-in ${visible ? "visible" : ""}`}>
        <div className="mb-8 flex flex-wrap items-end justify-between gap-3">
          <div>
            <p className="text-[14px] font-medium text-accent">Real customer feedback</p>
            <h2 className="text-3xl font-extrabold md:text-4xl">What Mobile Buyers Say</h2>
          </div>
          <p className="text-[15px] text-muted">Trusted by thousands of happy phone buyers.</p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((item) => (
            <article key={item.name} className="rounded-xl border border-black/10 bg-white p-6 shadow-sm">
              <div className="mb-4 flex gap-1 text-[#F59E0B]">
                {Array.from({ length: item.stars }).map((_, idx) => (
                  <Star key={idx} size={16} fill="currentColor" />
                ))}
              </div>
              <p className="text-[17px] text-text">{item.text}</p>
              <p className="mt-4 text-[16px] font-semibold">{item.name}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
