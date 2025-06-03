/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useState } from "react";
import SearchFilter from "@/components/properties/SearchFilter";
import PropertyListing from "@/components/properties/PropertyListing";

export default function PropertiesPage() {
  const [filters, setFilters] = useState({});

  const handleFilterChange = (newFilters: any) => {
    setFilters(newFilters);
  };

  return (
    <main className="container mx-auto px-4 py-12">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2 text-black">
          Browse Properties
        </h1>
        <p className="text-dark-gray">
          Find your dream property from our listings
        </p>
      </div>

      {/* Filter Section */}
      <SearchFilter onFilterChange={handleFilterChange} />

      {/* Property Listing */}
      <PropertyListing filters={filters} />
    </main>
  );
}
