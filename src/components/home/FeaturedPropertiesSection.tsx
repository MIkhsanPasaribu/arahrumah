import React from "react";
import FeaturedProperty from "./FeaturedProperty";

const mockFeaturedProperties = [
  {
    id: "1",
    title: "Modern Villa with Garden",
    price: 850000,
    location: "Bali, Indonesia",
    bedrooms: 4,
    bathrooms: 3,
    size: 320,
    imageUrl: "/images/property1.svg", // Using SVG placeholder
    propertyType: "house",
    status: "for-sale" as const,
  },
  {
    id: "2",
    title: "Luxury Apartment in City Center",
    price: 2500,
    location: "Jakarta, Indonesia",
    bedrooms: 2,
    bathrooms: 2,
    size: 120,
    imageUrl: "/images/property2.svg",
    propertyType: "apartment",
    status: "for-rent" as const,
  },
  {
    id: "3",
    title: "Seaside Family House",
    price: 650000,
    location: "Surabaya, Indonesia",
    bedrooms: 3,
    bathrooms: 2,
    size: 250,
    imageUrl: "/images/property3.svg",
    propertyType: "house",
    status: "for-sale" as const,
  },
];

interface FeaturedPropertiesSectionProps {
  title: string;
  subtitle: string;
}

const FeaturedPropertiesSection = ({
  title,
  subtitle,
}: FeaturedPropertiesSectionProps) => {
  return (
    <section className="py-16 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{title}</h2>
          <p className="text-dark-gray text-lg max-w-2xl mx-auto">{subtitle}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {mockFeaturedProperties.map((property) => (
            <FeaturedProperty key={property.id} {...property} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedPropertiesSection;
