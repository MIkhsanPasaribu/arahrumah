"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { IProperty } from "@/models/Property";

interface PageProps {
  params: Promise<{ id: string }>;
}

export default function PropertyDetailPage({ params }: PageProps) {
  const [property, setProperty] = useState<Partial<IProperty> | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [activeImage, setActiveImage] = useState<number>(0);
  const [resolvedParams, setResolvedParams] = useState<{ id: string } | null>(
    null
  );

  useEffect(() => {
    const resolveParamsAndFetch = async () => {
      try {
        setLoading(true);
        setError(null);

        // Resolve the params Promise first
        const resolvedParamsData = await params;
        setResolvedParams(resolvedParamsData);

        // Fetch property from API
        const response = await fetch(
          `/api/properties/${resolvedParamsData.id}`
        );

        if (!response.ok) {
          throw new Error("Failed to fetch property details");
        }

        const data = await response.json();
        setProperty(data);
      } catch (err: unknown) {
        const errorMessage =
          err instanceof Error ? err.message : "An error occurred";
        setError(errorMessage);
      } finally {
        setLoading(false);
      }
    };

    resolveParamsAndFetch();
  }, [params]);
  // For demo purposes, if API isn't connected
  useEffect(() => {
    if (!property && !loading && !error && resolvedParams) {
      // Sample property
      const sampleProperty: Partial<IProperty> = {
        _id: resolvedParams.id,
        title: "Modern Family House",
        description:
          "This beautiful modern house features a spacious living area, a large kitchen with modern appliances, and a beautiful garden perfect for family gatherings. The master bedroom has an en-suite bathroom and walk-in closet. Located in a quiet neighborhood close to schools, parks, and shopping centers.",
        type: "house",
        status: "for-sale",
        price: 2500000000,
        location: {
          address: "Jl. Menteng Raya No. 10",
          city: "Jakarta",
          state: "DKI Jakarta",
          zipCode: "10310",
          coordinates: {
            lat: -6.195924,
            lng: 106.823559,
          },
        },
        features: {
          bedrooms: 4,
          bathrooms: 3,
          buildingSize: 250,
          landSize: 350,
          garage: 2,
          yearBuilt: 2020,
          furnished: false,
        },
        images: [
          "/images/property1.svg",
          "/images/property2.svg",
          "/images/property3.svg",
        ],
        featured: true,
      };
      setProperty(sampleProperty);
    }
  }, [property, loading, error, resolvedParams]);

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-16 flex justify-center items-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-emerald-green"></div>
      </div>
    );
  }

  if (error || !property) {
    return (
      <div className="container mx-auto px-4 py-16">
        <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4">
          <p className="font-medium">Error</p>
          <p>{error || "Property not found"}</p>
          <Link
            href="/properties"
            className="mt-4 inline-block text-emerald-green hover:underline"
          >
            Return to properties
          </Link>
        </div>
      </div>
    );
  }

  return (
    <main className="container mx-auto px-4 py-12">
      {/* Breadcrumbs */}
      <div className="flex items-center text-sm mb-6 text-dark-gray">
        <Link
          href="/"
          className="hover:text-emerald-green transition duration-200"
        >
          Home
        </Link>
        <span className="mx-2">/</span>
        <Link
          href="/properties"
          className="hover:text-emerald-green transition duration-200"
        >
          Properties
        </Link>
        <span className="mx-2">/</span>
        <span className="text-emerald-green">{property.title}</span>
      </div>

      {/* Property Title and Status */}
      <div className="flex flex-col md:flex-row md:items-center justify-between mb-6">
        <div>
          <h1 className="text-3xl font-bold mb-2 text-black">
            {property.title}
          </h1>
          <p className="text-dark-gray flex items-center">
            <svg
              className="h-5 w-5 mr-1 text-emerald-green"
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
            {property.location?.address}, {property.location?.city}
          </p>
        </div>
        <div className="mt-4 md:mt-0">
          <div className="inline-block bg-emerald-green px-4 py-2 text-white font-semibold rounded-md">
            {property.status === "for-sale" ? "For Sale" : "For Rent"}
          </div>
          <div className="text-2xl font-bold mt-2 text-black">
            {property.status === "for-sale"
              ? `Rp ${property.price?.toLocaleString("id-ID")}`
              : `Rp ${property.price?.toLocaleString("id-ID")}/month`}
          </div>
        </div>
      </div>

      {/* Property Images */}
      <div className="mb-10">
        {property.images && property.images.length > 0 ? (
          <div>
            {/* Main Image */}
            <div className="relative h-[400px] w-full mb-4 rounded-lg overflow-hidden">
              <Image
                src={property.images[activeImage]}
                alt={property.title || "Property"}
                fill
                className="object-cover"
              />
            </div>

            {/* Thumbnail Gallery */}
            {property.images.length > 1 && (
              <div className="flex space-x-2 overflow-x-auto pb-2">
                {property.images.map((image, index) => (
                  <div
                    key={index}
                    className={`relative h-20 w-32 flex-shrink-0 cursor-pointer rounded-md overflow-hidden ${
                      activeImage === index ? "ring-2 ring-emerald-green" : ""
                    }`}
                    onClick={() => setActiveImage(index)}
                  >
                    <Image
                      src={image}
                      alt={`Property image ${index + 1}`}
                      fill
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>
            )}
          </div>
        ) : (
          <div className="relative h-[400px] w-full mb-4 bg-light-gray rounded-lg flex items-center justify-center">
            <p className="text-dark-gray">No images available</p>
          </div>
        )}
      </div>

      {/* Property Content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Content */}
        <div className="lg:col-span-2">
          {/* Features */}
          <div className="bg-white p-6 rounded-lg shadow-md mb-8">
            <h2 className="text-2xl font-bold mb-4 text-black">
              Property Features
            </h2>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-y-6">
              {property.features?.bedrooms !== undefined && (
                <div className="flex items-center">
                  <svg
                    className="h-6 w-6 mr-2 text-emerald-green"
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
                  <span className="text-dark-gray">
                    {property.features.bedrooms} Bedrooms
                  </span>
                </div>
              )}

              {property.features?.bathrooms !== undefined && (
                <div className="flex items-center">
                  <svg
                    className="h-6 w-6 mr-2 text-emerald-green"
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
                  <span className="text-dark-gray">
                    {property.features.bathrooms} Bathrooms
                  </span>
                </div>
              )}

              {property.features?.buildingSize !== undefined && (
                <div className="flex items-center">
                  <svg
                    className="h-6 w-6 mr-2 text-emerald-green"
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
                  <span className="text-dark-gray">
                    {property.features.buildingSize} m² Building
                  </span>
                </div>
              )}

              {property.features?.landSize !== undefined && (
                <div className="flex items-center">
                  <svg
                    className="h-6 w-6 mr-2 text-emerald-green"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"
                    />
                  </svg>
                  <span className="text-dark-gray">
                    {property.features.landSize} m² Land
                  </span>
                </div>
              )}

              {property.features?.garage !== undefined && (
                <div className="flex items-center">
                  <svg
                    className="h-6 w-6 mr-2 text-emerald-green"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"
                    />
                  </svg>
                  <span className="text-dark-gray">
                    {property.features.garage} Garage Spaces
                  </span>
                </div>
              )}

              {property.features?.yearBuilt !== undefined && (
                <div className="flex items-center">
                  <svg
                    className="h-6 w-6 mr-2 text-emerald-green"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                  <span className="text-dark-gray">
                    Built in {property.features.yearBuilt}
                  </span>
                </div>
              )}

              {property.features?.furnished !== undefined && (
                <div className="flex items-center">
                  <svg
                    className="h-6 w-6 mr-2 text-emerald-green"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
                    />
                  </svg>
                  <span className="text-dark-gray">
                    {property.features.furnished ? "Furnished" : "Unfurnished"}
                  </span>
                </div>
              )}
            </div>
          </div>

          {/* Description */}
          <div className="bg-white p-6 rounded-lg shadow-md mb-8">
            <h2 className="text-2xl font-bold mb-4 text-black">Description</h2>
            <p className="text-dark-gray whitespace-pre-line">
              {property.description}
            </p>
          </div>
        </div>

        {/* Sidebar */}
        <div className="lg:col-span-1">
          {/* Contact Agent Form */}
          <div className="bg-white p-6 rounded-lg shadow-md mb-8">
            <h3 className="text-xl font-bold mb-4 text-black">Contact Agent</h3>

            <form className="space-y-4">
              <div>
                <label
                  className="block text-dark-gray text-sm font-medium mb-1"
                  htmlFor="name"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-3 py-2 border border-light-gray rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-green"
                  placeholder="Enter your name"
                />
              </div>

              <div>
                <label
                  className="block text-dark-gray text-sm font-medium mb-1"
                  htmlFor="email"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-3 py-2 border border-light-gray rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-green"
                  placeholder="Enter your email"
                />
              </div>

              <div>
                <label
                  className="block text-dark-gray text-sm font-medium mb-1"
                  htmlFor="phone"
                >
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  className="w-full px-3 py-2 border border-light-gray rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-green"
                  placeholder="Enter your phone number"
                />
              </div>

              <div>
                <label
                  className="block text-dark-gray text-sm font-medium mb-1"
                  htmlFor="message"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-3 py-2 border border-light-gray rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-green"
                  placeholder={`I'm interested in this property. Please contact me.`}
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-emerald-green hover:bg-emerald-700 text-white py-2 px-4 rounded-md transition duration-200"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Property Type Info */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-4 text-black">
              Property Information
            </h3>

            <ul className="space-y-3">
              <li className="flex justify-between">
                <span className="text-dark-gray">Property ID:</span>
                <span className="font-medium text-black">
                  {typeof property._id === "string"
                    ? property._id.substring(0, 8).toUpperCase()
                    : ""}
                </span>
              </li>
              <li className="flex justify-between">
                <span className="text-dark-gray">Property Type:</span>
                <span className="font-medium text-black capitalize">
                  {property.type}
                </span>
              </li>
              <li className="flex justify-between">
                <span className="text-dark-gray">Status:</span>
                <span className="font-medium text-black">
                  {property.status === "for-sale" ? "For Sale" : "For Rent"}
                </span>
              </li>
              {property.features?.yearBuilt && (
                <li className="flex justify-between">
                  <span className="text-dark-gray">Year Built:</span>
                  <span className="font-medium text-black">
                    {property.features.yearBuilt}
                  </span>
                </li>
              )}
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
}
