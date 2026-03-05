import { notFound } from "next/navigation";
import { ProductGallery } from "@/components/product-gallery";
import { products } from "@/data/mock-data";
import { ProductInteraction } from "@/components/product-interaction";
import { ProductTabs } from "@/components/product-tabs";
import { Star } from "lucide-react";

export function generateStaticParams() {
  return products.map((product) => ({ id: product.id }));
}

export default function ProductPage({ params }: { params: { id: string } }) {
  const product = products.find((item) => item.id === params.id);
  if (!product) return notFound();

  return (
    <section className="section">
      <div className="container grid gap-10 lg:grid-cols-2">
        <ProductGallery images={product.images} alt={product.name} />

        <div>
          <p className="text-[16px] text-muted">{product.category}</p>
          <h1 className="mt-2 text-4xl font-extrabold text-text sm:text-5xl">{product.name}</h1>
          <div className="mt-3 flex items-center gap-1 text-gold">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} size={16} fill={i < Math.round(product.rating) ? "currentColor" : "none"} />
            ))}
            <span className="ml-1 text-[14px] font-semibold text-muted">{product.rating}</span>
          </div>
          <p className="mt-4 text-4xl font-extrabold text-text">EUR {product.price.toFixed(2)}</p>
          <div className="mt-4 space-y-2 text-[15px]">
            <p className="font-semibold text-text">Free Shipping in Spain</p>
            <p className="text-muted">Entrega en 24-48h</p>
            <p className="inline-flex items-center gap-2 text-[#15803D]">
              <span className="inline-block h-2.5 w-2.5 rounded-full bg-[#22C55E]" />
              En stock
            </p>
          </div>
          <p className="mt-4 text-[17px] text-muted">{product.description}</p>
          <div className="mt-5 flex flex-wrap gap-2 text-[13px]">
            <span className="rounded-full border border-black/10 bg-white px-3 py-1 font-semibold text-text">Solo quedan 5 unidades</span>
            <span className="rounded-full border border-black/10 bg-white px-3 py-1 font-semibold text-text">Garantia oficial europea 2 anos</span>
            <span className="rounded-full border border-black/10 bg-white px-3 py-1 font-semibold text-text">Devolucion gratuita en 30 dias</span>
          </div>

          <ProductInteraction productId={product.id} colors={product.colors} sizes={product.sizes} />

          <ProductTabs rating={product.rating} />
        </div>
      </div>
    </section>
  );
}
