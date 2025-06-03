/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import { useState, FormEvent, ChangeEvent } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

const propertyTypes = ["house", "apartment", "land", "commercial"];
const propertyStatuses = ["for-sale", "for-rent"];

export default function CreateProperty() {
  const router = useRouter();
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  // Basic property information
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [type, setType] = useState("house");
  const [status, setStatus] = useState("for-sale");

  // Location information
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [zipCode, setZipCode] = useState("");

  // Features
  const [bedrooms, setBedrooms] = useState("");
  const [bathrooms, setBathrooms] = useState("");
  const [buildingSize, setBuildingSize] = useState("");
  const [landSize, setLandSize] = useState("");
  const [yearBuilt, setYearBuilt] = useState("");
  const [furnished, setFurnished] = useState(false);
  const [garage, setGarage] = useState("");

  // Images
  const [images, setImages] = useState<FileList | null>(null);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (!title || !description || !price || !address || !city || !zipCode) {
      setError("Please fill in all required fields.");
      return;
    }

    setSubmitting(true);
    setError("");

    try {
      // For MVP we'll mock image URLs since we don't have image upload yet
      const mockImageUrls = [
        "/images/property1.svg",
        "/images/property2.svg",
        "/images/property3.svg",
      ];

      // Convert numeric inputs to numbers for API
      const propertyData = {
        title,
        description,
        type,
        status,
        price: parseFloat(price),
        location: {
          address,
          city,
          state: state || undefined,
          zipCode,
          // Coordinates would be added here with geocoding in a real implementation
        },
        features: {
          bedrooms: bedrooms ? parseInt(bedrooms) : undefined,
          bathrooms: bathrooms ? parseInt(bathrooms) : undefined,
          buildingSize: buildingSize ? parseFloat(buildingSize) : undefined,
          landSize: landSize ? parseFloat(landSize) : undefined,
          yearBuilt: yearBuilt ? parseInt(yearBuilt) : undefined,
          furnished,
          garage: garage ? parseInt(garage) : undefined,
        },
        images: mockImageUrls, // In a real app, you would upload these and get URLs
        featured: false, // Default to non-featured
      };

      // Send the data to your API
      const response = await fetch("/api/properties/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(propertyData),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Failed to create property");
      }

      setSuccess(true);

      // In a real app, redirect to the newly created property
      // For MVP, we'll redirect to dashboard after a delay
      setTimeout(() => {
        router.push("/dashboard");
      }, 2000);
    } catch (err) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError("An unknown error occurred");
      }
      setSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-white py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <h1 className="text-3xl font-bold text-dark-gray">
              Create New Property
            </h1>
            <Link
              href="/dashboard"
              className="text-emerald-green hover:underline"
            >
              Back to Dashboard
            </Link>
          </div>

          {success ? (
            <div className="bg-emerald-green bg-opacity-10 border border-emerald-green text-emerald-green p-4 rounded-md mb-8">
              Property created successfully! Redirecting to dashboard...
            </div>
          ) : (
            error && (
              <div className="bg-red-50 border border-red-200 text-red-600 p-4 rounded-md mb-8">
                {error}
              </div>
            )
          )}

          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Basic Information */}
            <div className="bg-white border border-light-gray rounded-lg p-6">
              <h2 className="text-xl font-semibold mb-6">Basic Information</h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="col-span-2">
                  <label
                    htmlFor="title"
                    className="block text-sm font-medium text-dark-gray mb-2"
                  >
                    Property Title <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className="w-full border border-light-gray rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-emerald-green"
                    placeholder="e.g. Modern Villa in Bali"
                    required
                  />
                </div>

                <div className="col-span-2">
                  <label
                    htmlFor="description"
                    className="block text-sm font-medium text-dark-gray mb-2"
                  >
                    Description <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    rows={5}
                    className="w-full border border-light-gray rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-emerald-green"
                    placeholder="Describe your property in detail"
                    required
                  ></textarea>
                </div>

                <div>
                  <label
                    htmlFor="price"
                    className="block text-sm font-medium text-dark-gray mb-2"
                  >
                    Price <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="number"
                    id="price"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                    className="w-full border border-light-gray rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-emerald-green"
                    placeholder="e.g. 250000"
                    required
                  />
                  <p className="text-sm text-dark-gray mt-1">
                    Enter in USD. For rent, this will be per month.
                  </p>
                </div>

                <div>
                  <label
                    htmlFor="status"
                    className="block text-sm font-medium text-dark-gray mb-2"
                  >
                    Listing Status <span className="text-red-500">*</span>
                  </label>
                  <select
                    id="status"
                    value={status}
                    onChange={(e) => setStatus(e.target.value)}
                    className="w-full border border-light-gray rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-emerald-green"
                    required
                  >
                    {propertyStatuses.map((option) => (
                      <option key={option} value={option}>
                        {option === "for-sale" ? "For Sale" : "For Rent"}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="type"
                    className="block text-sm font-medium text-dark-gray mb-2"
                  >
                    Property Type <span className="text-red-500">*</span>
                  </label>
                  <select
                    id="type"
                    value={type}
                    onChange={(e) => setType(e.target.value)}
                    className="w-full border border-light-gray rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-emerald-green"
                    required
                  >
                    {propertyTypes.map((option) => (
                      <option key={option} value={option}>
                        {option.charAt(0).toUpperCase() + option.slice(1)}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>

            {/* Location */}
            <div className="bg-white border border-light-gray rounded-lg p-6">
              <h2 className="text-xl font-semibold mb-6">Location</h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="col-span-2">
                  <label
                    htmlFor="address"
                    className="block text-sm font-medium text-dark-gray mb-2"
                  >
                    Address <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="address"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    className="w-full border border-light-gray rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-emerald-green"
                    placeholder="e.g. Jalan Raya Kuta No 123"
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="city"
                    className="block text-sm font-medium text-dark-gray mb-2"
                  >
                    City <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="city"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    className="w-full border border-light-gray rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-emerald-green"
                    placeholder="e.g. Bali"
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="state"
                    className="block text-sm font-medium text-dark-gray mb-2"
                  >
                    State/Province
                  </label>
                  <input
                    type="text"
                    id="state"
                    value={state}
                    onChange={(e) => setState(e.target.value)}
                    className="w-full border border-light-gray rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-emerald-green"
                    placeholder="e.g. Bali"
                  />
                </div>

                <div>
                  <label
                    htmlFor="zipCode"
                    className="block text-sm font-medium text-dark-gray mb-2"
                  >
                    Zip Code <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="zipCode"
                    value={zipCode}
                    onChange={(e) => setZipCode(e.target.value)}
                    className="w-full border border-light-gray rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-emerald-green"
                    placeholder="e.g. 80361"
                    required
                  />
                </div>
              </div>
            </div>

            {/* Features */}
            <div className="bg-white border border-light-gray rounded-lg p-6">
              <h2 className="text-xl font-semibold mb-6">Property Features</h2>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <label
                    htmlFor="bedrooms"
                    className="block text-sm font-medium text-dark-gray mb-2"
                  >
                    Bedrooms
                  </label>
                  <input
                    type="number"
                    id="bedrooms"
                    value={bedrooms}
                    onChange={(e) => setBedrooms(e.target.value)}
                    className="w-full border border-light-gray rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-emerald-green"
                    placeholder="e.g. 3"
                    min="0"
                  />
                </div>

                <div>
                  <label
                    htmlFor="bathrooms"
                    className="block text-sm font-medium text-dark-gray mb-2"
                  >
                    Bathrooms
                  </label>
                  <input
                    type="number"
                    id="bathrooms"
                    value={bathrooms}
                    onChange={(e) => setBathrooms(e.target.value)}
                    className="w-full border border-light-gray rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-emerald-green"
                    placeholder="e.g. 2"
                    min="0"
                  />
                </div>

                <div>
                  <label
                    htmlFor="garage"
                    className="block text-sm font-medium text-dark-gray mb-2"
                  >
                    Garage Spaces
                  </label>
                  <input
                    type="number"
                    id="garage"
                    value={garage}
                    onChange={(e) => setGarage(e.target.value)}
                    className="w-full border border-light-gray rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-emerald-green"
                    placeholder="e.g. 1"
                    min="0"
                  />
                </div>

                <div>
                  <label
                    htmlFor="buildingSize"
                    className="block text-sm font-medium text-dark-gray mb-2"
                  >
                    Building Size (m²)
                  </label>
                  <input
                    type="number"
                    id="buildingSize"
                    value={buildingSize}
                    onChange={(e) => setBuildingSize(e.target.value)}
                    className="w-full border border-light-gray rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-emerald-green"
                    placeholder="e.g. 150"
                    min="0"
                  />
                </div>

                <div>
                  <label
                    htmlFor="landSize"
                    className="block text-sm font-medium text-dark-gray mb-2"
                  >
                    Land Size (m²)
                  </label>
                  <input
                    type="number"
                    id="landSize"
                    value={landSize}
                    onChange={(e) => setLandSize(e.target.value)}
                    className="w-full border border-light-gray rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-emerald-green"
                    placeholder="e.g. 200"
                    min="0"
                  />
                </div>

                <div>
                  <label
                    htmlFor="yearBuilt"
                    className="block text-sm font-medium text-dark-gray mb-2"
                  >
                    Year Built
                  </label>
                  <input
                    type="number"
                    id="yearBuilt"
                    value={yearBuilt}
                    onChange={(e) => setYearBuilt(e.target.value)}
                    className="w-full border border-light-gray rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-emerald-green"
                    placeholder="e.g. 2020"
                    min="1900"
                    max={new Date().getFullYear()}
                  />
                </div>

                <div className="md:col-span-3">
                  <div className="flex items-center">
                    <input
                      id="furnished"
                      type="checkbox"
                      checked={furnished}
                      onChange={(e) => setFurnished(e.target.checked)}
                      className="h-5 w-5 text-emerald-green focus:ring-emerald-green border-light-gray rounded"
                    />
                    <label
                      htmlFor="furnished"
                      className="ml-2 block text-sm text-dark-gray"
                    >
                      This property is furnished
                    </label>
                  </div>
                </div>
              </div>
            </div>

            {/* Images */}
            <div className="bg-white border border-light-gray rounded-lg p-6">
              <h2 className="text-xl font-semibold mb-6">Property Images</h2>

              <div className="mb-6">
                <label
                  htmlFor="images"
                  className="block text-sm font-medium text-dark-gray mb-2"
                >
                  Upload Images (Max 5)
                </label>
                <input
                  type="file"
                  id="images"
                  accept="image/*"
                  multiple
                  onChange={(e) => setImages(e.target.files)}
                  className="w-full border border-light-gray rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-emerald-green"
                />
                <p className="text-sm text-dark-gray mt-2">
                  Note: For the MVP, image upload functionality is simulated.
                  Your property will be displayed with placeholder images.
                </p>
              </div>
            </div>

            {/* Submit Button */}
            <div className="flex justify-end">
              <button
                type="submit"
                disabled={submitting}
                className={`bg-emerald-green hover:bg-emerald-700 text-white font-bold px-8 py-3 rounded-md transition duration-300 ${
                  submitting ? "opacity-70 cursor-not-allowed" : ""
                }`}
              >
                {submitting ? "Creating Property..." : "Create Property"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
