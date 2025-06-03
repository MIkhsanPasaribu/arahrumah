import Hero from "@/components/home/Hero";
import FeaturedPropertiesSection from "@/components/home/FeaturedPropertiesSection";
import WhyChooseUsSection from "@/components/home/WhyChooseUsSection";
import CtaSection from "@/components/home/CtaSection";

export default function Home() {
  return (
    <main>
      <Hero
        title="Find Your Dream Home in Indonesia"
        subtitle="Discover a wide range of properties for sale and rent across Indonesia's most desirable locations"
        imageUrl="/images/hero-image.svg" // Using SVG file instead of JPG
      />

      <FeaturedPropertiesSection
        title="Featured Properties"
        subtitle="Explore our hand-picked selection of properties that match your lifestyle and preferences"
      />

      <WhyChooseUsSection />

      <CtaSection />
    </main>
  );
}
