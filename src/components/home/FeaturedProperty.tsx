import React from "react";
import Link from "next/link";
import Image from "next/image";

interface FeaturedPropertyProps {
  id: string;
  title: string;
  price: number;
  location: string;
  bedrooms?: number;
  bathrooms?: number;
  size?: number;
  imageUrl: string;
  propertyType: string;
  status: "for-sale" | "for-rent";
}

const FeaturedProperty = ({
  id,
  title,
  price,
  location,
  bedrooms,
  bathrooms,
  size,
  imageUrl,
  propertyType,
  status,
}: FeaturedPropertyProps) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg">
      <Link href={`/properties/${id}`}>
        <div className="relative h-64 w-full">
          <Image src={imageUrl} alt={title} fill className="object-cover" />
          <div className="absolute top-4 left-4 bg-emerald-green text-white text-sm font-semibold px-2 py-1 rounded">
            {status === "for-sale" ? "For Sale" : "For Rent"}
          </div>
        </div>
        <div className="p-4">
          <div className="flex justify-between items-center mb-2">
            <span className="text-emerald-green font-bold text-xl">
              {status === "for-sale"
                ? `$${price.toLocaleString()}`
                : `$${price.toLocaleString()}/mo`}
            </span>
            <span className="text-dark-gray text-sm capitalize">
              {propertyType}
            </span>
          </div>
          <h3 className="text-lg font-semibold mb-2">{title}</h3>
          <p className="text-dark-gray text-sm mb-4">{location}</p>

          {/* Property Features */}
          <div className="flex justify-between text-dark-gray text-sm border-t pt-4">
            {bedrooms !== undefined && (
              <div className="flex items-center">
                <svg
                  className="w-4 h-4 mr-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                  />
                </svg>
                <span>
                  {bedrooms} {bedrooms === 1 ? "Bedroom" : "Bedrooms"}
                </span>
              </div>
            )}
            {bathrooms !== undefined && (
              <div className="flex items-center">
                <svg
                  className="w-4 h-4 mr-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M8 7h12m0 0v8a4 4 0 01-4 4H8m12-12H8a4 4 0 00-4 4v8"
                  />
                </svg>
                <span>
                  {bathrooms} {bathrooms === 1 ? "Bathroom" : "Bathrooms"}
                </span>
              </div>
            )}
            {size !== undefined && (
              <div className="flex items-center">
                <svg
                  className="w-4 h-4 mr-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5v-4m0 4h-4m4 0l-5-5"
                  />
                </svg>
                <span>{size} m²</span>
              </div>
            )}
          </div>
        </div>
      </Link>
    </div>
  );
};

export default FeaturedProperty;
