import Link from "next/link";
import Image from "next/image";
import { IProperty } from "@/models/Property";

interface PropertyCardProps {
  property: Partial<IProperty>;
}

const PropertyCard = ({ property }: PropertyCardProps) => {
  // Use a placeholder image if no images are available
  const imageUrl =
    property.images && property.images.length > 0
      ? property.images[0]
      : "/images/property-placeholder.jpg";

  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition duration-300">
      {/* Property Image */}
      <div className="relative h-48 w-full">
        <Image
          src={imageUrl}
          alt={property.title || "Property"}
          fill
          className="object-cover"
        />
        {/* Tags */}
        <div className="absolute top-2 left-2 flex flex-wrap gap-2">
          {property.status === "for-sale" ? (
            <span className="bg-emerald-green px-2 py-1 text-xs text-white font-semibold rounded">
              For Sale
            </span>
          ) : (
            <span className="bg-blue-500 px-2 py-1 text-xs text-white font-semibold rounded">
              For Rent
            </span>
          )}
          {property.featured && (
            <span className="bg-amber-500 px-2 py-1 text-xs text-white font-semibold rounded">
              Featured
            </span>
          )}
        </div>
        {/* Price Tag */}
        <div className="absolute bottom-2 left-2 bg-black bg-opacity-75 px-2 py-1 text-white font-bold rounded">
          {property.status === "for-sale"
            ? `Rp ${property.price?.toLocaleString("id-ID")}`
            : `Rp ${property.price?.toLocaleString("id-ID")}/month`}
        </div>
      </div>

      {/* Property Content */}
      <div className="p-4">
        {/* Title */}
        <h3 className="text-lg font-semibold mb-2 text-black hover:text-emerald-green transition">
          <Link href={`/properties/${property._id}`}>{property.title}</Link>
        </h3>

        {/* Location */}
        <p className="text-dark-gray mb-3 flex items-start">
          <svg
            className="h-5 w-5 mr-1 text-emerald-green flex-shrink-0"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
            />
          </svg>
          <span className="truncate">
            {property.location?.city}, {property.location?.address}
          </span>
        </p>

        {/* Features */}
        <div className="flex justify-between text-dark-gray border-t border-light-gray pt-3">
          {property.features?.bedrooms !== undefined && (
            <div className="flex items-center">
              <svg
                className="h-4 w-4 mr-1 text-emerald-green"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                />
              </svg>
              <span>
                {property.features.bedrooms}{" "}
                {property.features.bedrooms > 1 ? "Beds" : "Bed"}
              </span>
            </div>
          )}

          {property.features?.bathrooms !== undefined && (
            <div className="flex items-center">
              <svg
                className="h-4 w-4 mr-1 text-emerald-green"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z"
                />
              </svg>
              <span>
                {property.features.bathrooms}{" "}
                {property.features.bathrooms > 1 ? "Baths" : "Bath"}
              </span>
            </div>
          )}

          {property.features?.buildingSize !== undefined && (
            <div className="flex items-center">
              <svg
                className="h-4 w-4 mr-1 text-emerald-green"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z"
                />
              </svg>
              <span>{property.features.buildingSize} m²</span>
            </div>
          )}
        </div>
      </div>

      {/* View Details Button */}
      <div className="px-4 pb-4">
        <Link
          href={`/properties/${property._id}`}
          className="w-full block text-center bg-emerald-green hover:bg-emerald-700 text-white py-2 rounded transition duration-200"
        >
          View Details
        </Link>
      </div>
    </div>
  );
};

export default PropertyCard;
