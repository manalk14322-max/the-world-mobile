"use client";

import { useEffect, useState } from "react";
import { Star } from "lucide-react";

const reviews = [
  "Excellent service and fast delivery!",
  "Very professional store. Highly recommended."
];

export function TestimonialsSection() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setIndex((prev) => (prev + 1) % reviews.length);
    }, 3500);
    return () => window.clearInterval(timer);
  }, []);

  return (
    <section id="testimonials" className="section py-10 sm:py-14">
      <div className="container">
        <h2 className="mb-7 text-3xl font-extrabold text-text">Customer Reviews</h2>
        <div className="rounded-xl border border-black/10 bg-white p-6 shadow-md sm:p-8">
          <p className="text-[22px] font-medium text-text">&quot;{reviews[index]}&quot;</p>
          <div className="mt-4 flex items-center gap-1 text-accent">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} size={17} fill="currentColor" />
            ))}
          </div>
          <div className="mt-6 flex gap-2">
            {reviews.map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                aria-label={`Review ${i + 1}`}
                className={`h-2.5 rounded-full transition ${i === index ? "w-8 bg-accent" : "w-2.5 bg-black/20"}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
