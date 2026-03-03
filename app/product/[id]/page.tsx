import { notFound } from "next/navigation";
import { ProductGallery } from "@/components/product-gallery";
import { products } from "@/data/mock-data";
import { ProductInteraction } from "@/components/product-interaction";
import { ProductTabs } from "@/components/product-tabs";

export default function ProductPage({ params }: { params: { id: string } }) {
  const product = products.find((item) => item.id === params.id);
  if (!product) return notFound();

  return (
    <section className="section">
      <div className="container grid gap-10 lg:grid-cols-2">
        <ProductGallery images={product.images} alt={product.name} />

        <div>
          <p className="text-[16px] text-muted">{product.category}</p>
          <h1 className="mt-2 text-4xl font-extrabold">{product.name}</h1>
          <p className="mt-4 text-3xl font-bold">${product.price}</p>
          <p className="mt-4 text-[17px] text-muted">{product.description}</p>

          <ProductInteraction colors={product.colors} sizes={product.sizes} />

          <ProductTabs rating={product.rating} />
        </div>
      </div>
    </section>
  );
}
