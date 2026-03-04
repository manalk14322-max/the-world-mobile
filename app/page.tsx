import { HeroSection } from "@/components/hero-section";
import { CategoriesSection } from "@/components/categories-section";
import { FeaturedProducts } from "@/components/featured-products";
import { TrustStrip } from "@/components/trust-strip";
import { BestSellersSection } from "@/components/best-sellers-section";
import { TestimonialsSection } from "@/components/testimonials-section";
import { NewsletterSection } from "@/components/newsletter-section";
import { FeaturedBrands } from "@/components/featured-brands";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <FeaturedBrands />
      <TrustStrip />
      <CategoriesSection />
      <FeaturedProducts />
      <BestSellersSection />
      <TestimonialsSection />
      <NewsletterSection />
    </>
  );
}
