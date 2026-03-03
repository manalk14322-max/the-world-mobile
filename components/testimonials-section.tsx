"use client";

import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react";
import { testimonials } from "@/data/mock-data";

export function TestimonialsSection() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 3500);
    return () => window.clearInterval(timer);
  }, []);

  const current = testimonials[index];

  return (
    <section id="testimonials" className="section py-8 sm:py-12">
      <div className="container">
        <h2 className="mb-6 text-2xl font-extrabold text-text sm:text-3xl">Customer Testimonials</h2>
        <article className="rounded-xl border border-black/10 bg-white p-6 shadow-md sm:p-8">
          <Quote size={28} className="text-accent" />
          <p className="mt-4 text-[19px] font-medium leading-relaxed text-text">&quot;{current.text}&quot;</p>
          <div className="mt-4 flex items-center gap-1 text-gold">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} size={16} fill={i < current.stars ? "currentColor" : "none"} />
            ))}
          </div>
          <p className="mt-3 text-[16px] font-bold text-text">{current.name}</p>

          <div className="mt-6 flex gap-2">
            <button
              onClick={() => setIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)}
              className="rounded-xl border border-black/10 p-2 transition hover:bg-secondary-bg"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              onClick={() => setIndex((prev) => (prev + 1) % testimonials.length)}
              className="rounded-xl border border-black/10 p-2 transition hover:bg-secondary-bg"
              aria-label="Next testimonial"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </article>
      </div>
    </section>
  );
}
