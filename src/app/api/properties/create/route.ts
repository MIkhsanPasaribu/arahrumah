/* eslint-disable @typescript-eslint/no-unused-vars */
import { NextResponse } from "next/server";
import dbConnect from "@/lib/dbConnect";
import Property from "@/models/Property";
import { getServerSession } from "next-auth/next";

// Helper function to verify JWT token from cookies
async function getSessionUser(request: Request) {
  // For MVP we'll assume a simplified auth check
  // In a real app, use getServerSession or verify JWT from cookie
  const cookies = request.headers.get("cookie");
  const token = cookies
    ?.split(";")
    .find((c) => c.trim().startsWith("token="))
    ?.split("=")[1];

  if (!token) {
    return null;
  }

  // Here, you would verify the token and extract user info
  // For MVP, we'll just return a placeholder
  return { id: "user-id", role: "user" };
}

export async function POST(request: Request) {
  try {
    // Check authentication
    const user = await getSessionUser(request);
    if (!user) {
      return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
    }

    // Connect to database
    await dbConnect();

    // Parse request body
    const propertyData = await request.json();

    // Create new property with current user as owner
    const property = await Property.create({
      ...propertyData,
      owner: user.id,
    });

    return NextResponse.json({
      message: "Property created successfully",
      property,
    });
  } catch (error) {
    console.error("Error creating property:", error);
    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 }
    );
  }
}
