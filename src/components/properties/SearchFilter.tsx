/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";

interface SearchFilterProps {
  onFilterChange: (filters: any) => void;
}

const SearchFilter = ({ onFilterChange }: SearchFilterProps) => {
  const [filters, setFilters] = useState({
    type: "",
    status: "",
    city: "",
    minPrice: "",
    maxPrice: "",
    bedrooms: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>
  ) => {
    const { name, value } = e.target;
    const newFilters = { ...filters, [name]: value };
    setFilters(newFilters);
    onFilterChange(newFilters);
  };

  const clearFilters = () => {
    const emptyFilters = {
      type: "",
      status: "",
      city: "",
      minPrice: "",
      maxPrice: "",
      bedrooms: "",
    };
    setFilters(emptyFilters);
    onFilterChange(emptyFilters);
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md mb-8">
      <h2 className="text-xl font-bold mb-4 text-black">Filter Properties</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {/* Property Type */}
        <div>
          <label
            className="block text-dark-gray text-sm font-medium mb-1"
            htmlFor="type"
          >
            Property Type
          </label>
          <select
            id="type"
            name="type"
            value={filters.type}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-light-gray rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-green"
          >
            <option value="">Any Type</option>
            <option value="house">House</option>
            <option value="apartment">Apartment</option>
            <option value="land">Land</option>
            <option value="commercial">Commercial</option>
          </select>
        </div>

        {/* Status */}
        <div>
          <label
            className="block text-dark-gray text-sm font-medium mb-1"
            htmlFor="status"
          >
            Status
          </label>
          <select
            id="status"
            name="status"
            value={filters.status}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-light-gray rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-green"
          >
            <option value="">Any Status</option>
            <option value="for-sale">For Sale</option>
            <option value="for-rent">For Rent</option>
          </select>
        </div>

        {/* City */}
        <div>
          <label
            className="block text-dark-gray text-sm font-medium mb-1"
            htmlFor="city"
          >
            City
          </label>
          <input
            type="text"
            id="city"
            name="city"
            value={filters.city}
            onChange={handleChange}
            placeholder="Enter city name"
            className="w-full px-3 py-2 border border-light-gray rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-green"
          />
        </div>

        {/* Min Price */}
        <div>
          <label
            className="block text-dark-gray text-sm font-medium mb-1"
            htmlFor="minPrice"
          >
            Min Price (Rp)
          </label>
          <input
            type="number"
            id="minPrice"
            name="minPrice"
            value={filters.minPrice}
            onChange={handleChange}
            placeholder="Minimum price"
            className="w-full px-3 py-2 border border-light-gray rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-green"
          />
        </div>

        {/* Max Price */}
        <div>
          <label
            className="block text-dark-gray text-sm font-medium mb-1"
            htmlFor="maxPrice"
          >
            Max Price (Rp)
          </label>
          <input
            type="number"
            id="maxPrice"
            name="maxPrice"
            value={filters.maxPrice}
            onChange={handleChange}
            placeholder="Maximum price"
            className="w-full px-3 py-2 border border-light-gray rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-green"
          />
        </div>

        {/* Bedrooms */}
        <div>
          <label
            className="block text-dark-gray text-sm font-medium mb-1"
            htmlFor="bedrooms"
          >
            Bedrooms
          </label>
          <select
            id="bedrooms"
            name="bedrooms"
            value={filters.bedrooms}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-light-gray rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-green"
          >
            <option value="">Any</option>
            <option value="1">1+</option>
            <option value="2">2+</option>
            <option value="3">3+</option>
            <option value="4">4+</option>
            <option value="5">5+</option>
          </select>
        </div>
      </div>

      {/* Button */}
      <div className="mt-6 flex justify-end">
        <button
          onClick={clearFilters}
          className="px-4 py-2 bg-white text-dark-gray border border-light-gray rounded-md hover:bg-light-gray transition duration-200 mr-2"
        >
          Clear Filters
        </button>
      </div>
    </div>
  );
};

export default SearchFilter;
