import { HeroSection } from "@/components/hero-section";
import { SpainTrustBar } from "@/components/spain-trust-bar";
import { TrustStrip } from "@/components/trust-strip";
import { FeaturedBrands } from "@/components/featured-brands";
import { FeaturedProducts } from "@/components/featured-products";
import { CategoriesSection } from "@/components/categories-section";
import { WhyChooseSection } from "@/components/why-choose-section";
import { TestimonialsSection } from "@/components/testimonials-section";
import { NewsletterSection } from "@/components/newsletter-section";
import { CtaBanner } from "@/components/cta-banner";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <SpainTrustBar />
      <TrustStrip />
      <FeaturedBrands />
      <FeaturedProducts />
      <CategoriesSection />
      <WhyChooseSection />
      <TestimonialsSection />
      <CtaBanner />
      <NewsletterSection />
    </>
  );
}
