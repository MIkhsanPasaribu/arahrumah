require("dotenv").config({ path: ".env.local" });
const mongoose = require("mongoose");

const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
  console.error("Please define the MONGODB_URI environment variable");
  process.exit(1);
}

async function testConnection() {
  try {
    console.log("Attempting to connect to MongoDB...");
    await mongoose.connect(MONGODB_URI);
    console.log("Connected successfully to MongoDB!");

    // Check if we can list collections
    const collections = await mongoose.connection.db
      .listCollections()
      .toArray();
    console.log("Available collections:");
    collections.forEach((collection) => {
      console.log(`- ${collection.name}`);
    });

    // Get a count of users
    const usersCount = await mongoose.connection.db
      .collection("users")
      .countDocuments();
    console.log(`Number of users in database: ${usersCount}`);

    // Get a count of properties
    const propertiesCount = await mongoose.connection.db
      .collection("properties")
      .countDocuments();
    console.log(`Number of properties in database: ${propertiesCount}`);

    await mongoose.disconnect();
    console.log("Disconnected from MongoDB");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
    process.exit(1);
  }
}

testConnection();
