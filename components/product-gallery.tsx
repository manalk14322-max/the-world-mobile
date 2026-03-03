"use client";

import Image from "next/image";
import { useState } from "react";

type Props = {
  images: string[];
  alt: string;
};

export function ProductGallery({ images, alt }: Props) {
  const [active, setActive] = useState(0);

  return (
    <div>
      <div className="overflow-hidden rounded-xl border border-black/5 bg-secondary-bg">
        <Image src={images[active]} alt={alt} width={1000} height={1200} className="h-[500px] w-full object-cover" priority />
      </div>
      <div className="mt-4 grid grid-cols-4 gap-3">
        {images.map((img, idx) => (
          <button
            key={img}
            onClick={() => setActive(idx)}
            className={`overflow-hidden rounded-xl border transition ${idx === active ? "border-black" : "border-black/10"}`}
          >
            <Image src={img} alt={`${alt} ${idx + 1}`} width={220} height={220} className="h-24 w-full object-cover" />
          </button>
        ))}
      </div>
    </div>
  );
}
