/* eslint-disable @typescript-eslint/no-require-imports */
require("dotenv").config({ path: ".env.local" });
const mongoose = require("mongoose");

const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
  console.error("Please define the MONGODB_URI environment variable");
  process.exit(1);
}

// Define property schema (make sure it matches your actual schema)
const propertySchema = new mongoose.Schema({
  title: String,
  description: String,
  type: String,
  status: String,
  price: Number,
  location: {
    address: String,
    city: String,
    state: String,
    zipCode: String,
    coordinates: {
      lat: Number,
      lng: Number,
    },
  },
  features: {
    bedrooms: Number,
    bathrooms: Number,
    buildingSize: Number,
    landSize: Number,
    garage: Number,
    yearBuilt: Number,
    furnished: Boolean,
  },
  images: [String],
  owner: mongoose.Schema.Types.ObjectId,
  featured: Boolean,
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

const Property =
  mongoose.models.Property || mongoose.model("Property", propertySchema);

// Define User model
const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
  phone: String,
  role: String,
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

const User = mongoose.models.User || mongoose.model("User", userSchema);

// Sample property data
const sampleProperties = [
  {
    title: "Modern Villa with Pool in Bali",
    description:
      "A beautiful modern villa located in the heart of Bali. Features include a private pool, garden, and stunning views of the ocean.",
    type: "house",
    status: "for-sale",
    price: 850000,
    location: {
      address: "Jalan Raya Kuta No 123",
      city: "Bali",
      state: "Bali",
      zipCode: "80361",
    },
    features: {
      bedrooms: 4,
      bathrooms: 3,
      buildingSize: 250,
      landSize: 500,
      garage: 2,
      yearBuilt: 2020,
      furnished: true,
    },
    images: [
      "/images/property1.svg",
      "/images/property2.svg",
      "/images/property3.svg",
    ],
    featured: true,
  },
  {
    title: "Luxury Apartment in Jakarta",
    description:
      "Modern luxury apartment in a prime location in Jakarta. Close to shopping malls, restaurants, and public transportation.",
    type: "apartment",
    status: "for-rent",
    price: 2000,
    location: {
      address: "Jalan Sudirman No 45",
      city: "Jakarta",
      state: "DKI Jakarta",
      zipCode: "10220",
    },
    features: {
      bedrooms: 2,
      bathrooms: 2,
      buildingSize: 120,
      landSize: 0,
      garage: 1,
      yearBuilt: 2022,
      furnished: true,
    },
    images: [
      "/images/property2.svg",
      "/images/property3.svg",
      "/images/property1.svg",
    ],
    featured: true,
  },
  {
    title: "Commercial Space in Bandung",
    description:
      "Strategic commercial space perfect for retail or office use. High foot traffic area in the center of Bandung.",
    type: "commercial",
    status: "for-sale",
    price: 450000,
    location: {
      address: "Jalan Braga No 10",
      city: "Bandung",
      state: "West Java",
      zipCode: "40111",
    },
    features: {
      buildingSize: 200,
      landSize: 200,
      yearBuilt: 2015,
    },
    images: [
      "/images/property3.svg",
      "/images/property1.svg",
      "/images/property2.svg",
    ],
    featured: false,
  },
  {
    title: "Land for Development in Yogyakarta",
    description:
      "Prime land perfect for residential or commercial development in a growing area of Yogyakarta.",
    type: "land",
    status: "for-sale",
    price: 300000,
    location: {
      address: "Jalan Malioboro No 88",
      city: "Yogyakarta",
      state: "Yogyakarta",
      zipCode: "55122",
    },
    features: {
      landSize: 1000,
    },
    images: ["/images/property1.svg"],
    featured: false,
  },
  {
    title: "Family Home in Surabaya",
    description:
      "Spacious family home in a quiet residential area of Surabaya. Close to schools, parks, and shopping centers.",
    type: "house",
    status: "for-rent",
    price: 1500,
    location: {
      address: "Jalan Darmo No 55",
      city: "Surabaya",
      state: "East Java",
      zipCode: "60264",
    },
    features: {
      bedrooms: 3,
      bathrooms: 2,
      buildingSize: 180,
      landSize: 300,
      garage: 1,
      yearBuilt: 2018,
      furnished: false,
    },
    images: ["/images/property2.svg", "/images/property1.svg"],
    featured: true,
  },
];

// Seed properties
async function seedProperties() {
  try {
    console.log("Connecting to MongoDB...");
    await mongoose.connect(MONGODB_URI);
    console.log("Connected to MongoDB");

    // Get admin user
    const adminUser = await User.findOne({ email: "admin@arahrumah.com" });

    if (!adminUser) {
      console.error(
        "Admin user not found. Please run 'npm run create-admin' first."
      );
      await mongoose.disconnect();
      return;
    }

    // Delete existing properties (optional, for clean seeding)
    await Property.deleteMany({});
    console.log("Cleared existing properties");

    // Add owner ID to properties
    const propertiesWithOwner = sampleProperties.map((property) => ({
      ...property,
      owner: adminUser._id,
    }));

    // Insert properties
    const result = await Property.insertMany(propertiesWithOwner);
    console.log(`Seeded ${result.length} properties`);

    // Disconnect from MongoDB
    await mongoose.disconnect();
    console.log("Disconnected from MongoDB");
  } catch (error) {
    console.error("Error seeding properties:", error);
    process.exit(1);
  }
}

// Run the function
seedProperties();
