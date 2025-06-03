/* eslint-disable @typescript-eslint/no-require-imports */
// Get user credentials for testing
require("dotenv").config({ path: ".env.local" });
const { MongoClient } = require("mongodb");

async function getUserCredentials() {
  const client = new MongoClient(process.env.MONGODB_URI);

  try {
    await client.connect();
    console.log("Connected to MongoDB");

    const db = client.db();
    const users = await db
      .collection("users")
      .find({}, { projection: { password: 0 } })
      .toArray();

    console.log("\n=== Available Users for Testing ===");
    users.forEach((user, index) => {
      console.log(`\nUser ${index + 1}:`);
      console.log(`Email: ${user.email}`);
      console.log(`Name: ${user.name}`);
      console.log(`Role: ${user.role}`);
      console.log(`Password: Use "admin123" if this is the admin user`);
    });
  } catch (error) {
    console.error("Error:", error);
  } finally {
    await client.close();
  }
}

getUserCredentials();
