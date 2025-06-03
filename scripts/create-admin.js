/* eslint-disable @typescript-eslint/no-require-imports */
const bcrypt = require("bcryptjs");
const mongoose = require("mongoose");
require("dotenv").config({ path: ".env.local" });

// MongoDB connection URI
const MONGODB_URI = process.env.MONGODB_URI;
const ADMIN_PASSWORD = process.env.PASSWORD_ADMIN;

if (!MONGODB_URI) {
  console.error("Please define the MONGODB_URI environment variable");
  process.exit(1);
}

if (!ADMIN_PASSWORD) {
  console.error("Please define the PASSWORD_ADMIN environment variable");
  process.exit(1);
}

// Define user schema
const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
  phone: String,
  role: String,
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

// Define User model (make sure it matches your actual schema)
const User = mongoose.model("User", userSchema);

// Function to create admin user
async function createAdminUser() {
  try {
    // Connect to MongoDB
    await mongoose.connect(MONGODB_URI);
    console.log("Connected to MongoDB");

    // Check if admin already exists
    const existingAdmin = await User.findOne({ email: "admin@arahrumah.com" });

    if (existingAdmin) {
      console.log("Admin user already exists.");
      await mongoose.disconnect();
      return;
    }

    // Hash the admin password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(ADMIN_PASSWORD, salt);

    // Create admin user
    const adminUser = new User({
      name: "Admin",
      email: "admin@arahrumah.com",
      password: hashedPassword,
      role: "admin",
      phone: "+62123456789",
    });

    await adminUser.save();
    console.log("Admin user created successfully!");

    // Disconnect from MongoDB
    await mongoose.disconnect();
    console.log("Disconnected from MongoDB");
  } catch (error) {
    console.error("Error creating admin user:", error);
    process.exit(1);
  }
}

// Run the function
createAdminUser();
