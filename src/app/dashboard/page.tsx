/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Image from "next/image";

// Mock user data for MVP
const mockUserData = {
  id: "1",
  name: "John Doe",
  email: "john@example.com",
  phone: "+62 812-3456-7890",
  role: "user",
};

// Mock properties data for MVP
const mockProperties = [
  {
    id: "1",
    title: "Modern Villa with Garden",
    status: "for-sale",
    price: 850000,
    location: "Bali, Indonesia",
    imageUrl: "/images/property1.svg",
    createdAt: "2025-05-15",
  },
  {
    id: "2",
    title: "Luxury Apartment in City Center",
    status: "for-rent",
    price: 2500,
    location: "Jakarta, Indonesia",
    imageUrl: "/images/property2.svg",
    createdAt: "2025-05-10",
  },
];

interface TabProps {
  label: string;
  active: boolean;
  onClick: () => void;
}

const Tab = ({ label, active, onClick }: TabProps) => {
  return (
    <button
      className={`px-4 py-2 font-medium text-sm rounded-md ${
        active
          ? "bg-emerald-green text-white"
          : "text-dark-gray hover:bg-light-gray"
      }`}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default function Dashboard() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState("properties");
  const [user, setUser] = useState(mockUserData);

  // For a real application, you would fetch the user data from the API
  useEffect(() => {
    // Simulating authentication check
    const checkAuth = async () => {
      try {
        // In a real app, check if user is authenticated
        // const response = await fetch('/api/auth/me');
        // if (!response.ok) router.push('/auth/login');
        // const userData = await response.json();
        // setUser(userData);
      } catch (error) {
        console.error("Authentication error:", error);
        // router.push('/auth/login');
      }
    };

    checkAuth();
  }, [router]);

  return (
    <div className="min-h-screen bg-white">
      {/* Dashboard Header */}
      <div className="bg-light-gray py-8">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold text-dark-gray">My Dashboard</h1>
          <p className="text-dark-gray mt-2">Welcome back, {user.name}!</p>
        </div>
      </div>

      {/* Dashboard Content */}
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-wrap gap-4 mb-6">
          <Tab
            label="My Properties"
            active={activeTab === "properties"}
            onClick={() => setActiveTab("properties")}
          />
          <Tab
            label="Saved Properties"
            active={activeTab === "saved"}
            onClick={() => setActiveTab("saved")}
          />
          <Tab
            label="Profile"
            active={activeTab === "profile"}
            onClick={() => setActiveTab("profile")}
          />
        </div>

        {/* Tab Content */}
        {activeTab === "properties" && (
          <div>
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-semibold text-dark-gray">
                My Properties
              </h2>
              <Link
                href="/properties/create"
                className="bg-emerald-green hover:bg-emerald-700 text-white px-4 py-2 rounded-md transition duration-200"
              >
                Add New Property
              </Link>
            </div>

            {mockProperties.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {mockProperties.map((property) => (
                  <div
                    key={property.id}
                    className="bg-white border border-light-gray rounded-lg overflow-hidden shadow-sm"
                  >
                    <div className="relative h-48">
                      <Image
                        src={property.imageUrl}
                        alt={property.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="p-4">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-emerald-green font-bold">
                          {property.status === "for-sale"
                            ? `$${property.price.toLocaleString()}`
                            : `$${property.price.toLocaleString()}/mo`}
                        </span>
                        <span className="text-sm text-dark-gray">
                          Posted on {property.createdAt}
                        </span>
                      </div>
                      <h3 className="font-semibold mb-1">{property.title}</h3>
                      <p className="text-dark-gray text-sm mb-4">
                        {property.location}
                      </p>
                      <div className="flex justify-between">
                        <Link
                          href={`/properties/${property.id}`}
                          className="text-emerald-green hover:underline"
                        >
                          View
                        </Link>
                        <Link
                          href={`/properties/${property.id}/edit`}
                          className="text-dark-gray hover:underline"
                        >
                          Edit
                        </Link>
                        <button className="text-red-500 hover:underline">
                          Delete
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-12 bg-light-gray bg-opacity-50 rounded-md">
                <p className="text-dark-gray mb-4">
                  You haven&apos;t added any properties yet
                </p>
                <Link
                  href="/properties/create"
                  className="bg-emerald-green hover:bg-emerald-700 text-white px-4 py-2 rounded-md transition duration-200"
                >
                  Add Your First Property
                </Link>
              </div>
            )}
          </div>
        )}

        {activeTab === "saved" && (
          <div>
            <h2 className="text-xl font-semibold text-dark-gray mb-6">
              Saved Properties
            </h2>
            <div className="text-center py-12 bg-light-gray bg-opacity-50 rounded-md">
              <p className="text-dark-gray mb-4">
                You haven&apos;t saved any properties yet
              </p>
              <Link
                href="/properties"
                className="bg-emerald-green hover:bg-emerald-700 text-white px-4 py-2 rounded-md transition duration-200"
              >
                Browse Properties
              </Link>
            </div>
          </div>
        )}

        {activeTab === "profile" && (
          <div>
            <h2 className="text-xl font-semibold text-dark-gray mb-6">
              Profile Information
            </h2>
            <div className="bg-white border border-light-gray rounded-lg p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-sm font-medium text-dark-gray">
                    Full Name
                  </h3>
                  <p className="mt-1 text-dark-gray font-medium">{user.name}</p>
                </div>
                <div>
                  <h3 className="text-sm font-medium text-dark-gray">
                    Email Address
                  </h3>
                  <p className="mt-1 text-dark-gray font-medium">
                    {user.email}
                  </p>
                </div>
                <div>
                  <h3 className="text-sm font-medium text-dark-gray">
                    Phone Number
                  </h3>
                  <p className="mt-1 text-dark-gray font-medium">
                    {user.phone || "Not provided"}
                  </p>
                </div>
                <div>
                  <h3 className="text-sm font-medium text-dark-gray">
                    Account Type
                  </h3>
                  <p className="mt-1 text-dark-gray font-medium capitalize">
                    {user.role}
                  </p>
                </div>
              </div>

              <div className="mt-6 pt-6 border-t border-light-gray">
                <h3 className="text-lg font-medium text-dark-gray mb-4">
                  Account Settings
                </h3>
                <div className="flex flex-wrap gap-4">
                  <button className="bg-emerald-green hover:bg-emerald-700 text-white px-4 py-2 rounded-md transition duration-200">
                    Edit Profile
                  </button>
                  <button className="bg-dark-gray hover:bg-black text-white px-4 py-2 rounded-md transition duration-200">
                    Change Password
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
