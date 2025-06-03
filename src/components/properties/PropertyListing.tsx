/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, useEffect } from "react";
import PropertyCard from "./PropertyCard";
import { IProperty } from "@/models/Property";

interface PropertyListingProps {
  initialProperties?: Partial<IProperty>[];
  filters?: any;
}

const PropertyListing = ({
  initialProperties = [],
  filters = {},
}: PropertyListingProps) => {
  const [properties, setProperties] =
    useState<Partial<IProperty>[]>(initialProperties);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [page, setPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(1);

  // Function to fetch properties with filters
  const fetchProperties = async (page = 1, filters = {}) => {
    try {
      setLoading(true);
      setError(null);

      // Build query params
      const params = new URLSearchParams();
      params.append("page", page.toString());

      // Add filters to params
      Object.entries(filters).forEach(([key, value]) => {
        if (value) {
          params.append(key, String(value));
        }
      });

      // Fetch from API
      const response = await fetch(`/api/properties?${params.toString()}`);

      if (!response.ok) {
        throw new Error("Failed to fetch properties");
      }

      const data = await response.json();

      setProperties(data.properties || []);
      setTotalPages(data.pagination?.totalPages || 1);
    } catch (err: any) {
      setError(err.message || "An error occurred");
      setProperties([]);
    } finally {
      setLoading(false);
    }
  };

  // Fetch properties whenever filters or page changes
  useEffect(() => {
    fetchProperties(page, filters);
  }, [page, JSON.stringify(filters)]);

  // For demo purposes, if no API is connected yet, use dummy data
  useEffect(() => {
    if (properties.length === 0 && !loading && !error) {
      // Sample properties if API isn't connected
      const sampleProperties: Partial<IProperty>[] = [
        {
          _id: "1",
          title: "Modern Family House",
          description: "Beautiful modern house with garden",
          type: "house",
          status: "for-sale",
          price: 2500000000,
          location: {
            address: "Jl. Menteng Raya No. 10",
            city: "Jakarta",
            zipCode: "10310",
          },
          features: {
            bedrooms: 4,
            bathrooms: 3,
            buildingSize: 250,
            landSize: 350,
          },
          images: ["/images/property-placeholder.jpg"],
          featured: true,
        },
        {
          _id: "2",
          title: "City View Apartment",
          description: "Luxury apartment with city view",
          type: "apartment",
          status: "for-rent",
          price: 15000000,
          location: {
            address: "Apartment Sudirman Park Tower A",
            city: "Jakarta",
            zipCode: "10220",
          },
          features: {
            bedrooms: 2,
            bathrooms: 2,
            buildingSize: 85,
          },
          images: ["/images/property-placeholder.jpg"],
          featured: false,
        },
        {
          _id: "3",
          title: "Investment Land",
          description: "Strategic land for investment",
          type: "land",
          status: "for-sale",
          price: 5000000000,
          location: {
            address: "Jl. Raya Serpong",
            city: "Tangerang",
            zipCode: "15310",
          },
          features: {
            landSize: 500,
          },
          images: ["/images/property-placeholder.jpg"],
          featured: true,
        },
      ];

      setProperties(sampleProperties);
    }
  }, [properties.length, loading, error]);

  // Handle page navigation
  const handlePageChange = (newPage: number) => {
    if (newPage > 0 && newPage <= totalPages) {
      setPage(newPage);
    }
  };

  return (
    <div>
      {error && (
        <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-6">
          <p>{error}</p>
        </div>
      )}

      {loading ? (
        <div className="flex justify-center items-center h-64">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-emerald-green"></div>
        </div>
      ) : (
        <>
          {properties.length === 0 ? (
            <div className="bg-light-gray rounded-lg p-10 text-center">
              <h3 className="text-xl font-semibold mb-2">
                No properties found
              </h3>
              <p className="text-dark-gray">
                Try adjusting your search filters to find properties.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {properties.map((property) => (
                <PropertyCard key={String(property._id)} property={property} />
              ))}
            </div>
          )}

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex justify-center mt-10">
              <nav className="flex items-center space-x-2">
                <button
                  onClick={() => handlePageChange(page - 1)}
                  disabled={page === 1}
                  className={`px-3 py-1 rounded-md ${
                    page === 1
                      ? "bg-light-gray text-dark-gray cursor-not-allowed"
                      : "bg-white border border-light-gray text-dark-gray hover:bg-light-gray"
                  }`}
                >
                  Previous
                </button>

                {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                  (pageNum) => (
                    <button
                      key={pageNum}
                      onClick={() => handlePageChange(pageNum)}
                      className={`px-3 py-1 rounded-md ${
                        pageNum === page
                          ? "bg-emerald-green text-white"
                          : "bg-white border border-light-gray text-dark-gray hover:bg-light-gray"
                      }`}
                    >
                      {pageNum}
                    </button>
                  )
                )}

                <button
                  onClick={() => handlePageChange(page + 1)}
                  disabled={page === totalPages}
                  className={`px-3 py-1 rounded-md ${
                    page === totalPages
                      ? "bg-light-gray text-dark-gray cursor-not-allowed"
                      : "bg-white border border-light-gray text-dark-gray hover:bg-light-gray"
                  }`}
                >
                  Next
                </button>
              </nav>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default PropertyListing;
