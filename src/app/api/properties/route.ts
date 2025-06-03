/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextResponse } from "next/server";
import dbConnect from "@/lib/dbConnect";
import Property from "@/models/Property";

export async function GET(request: Request) {
  try {
    console.log("API Properties GET request received");
    const { searchParams } = new URL(request.url);

    // Connect to database
    console.log("Connecting to database...");
    await dbConnect();
    console.log("Database connected successfully");

    // Build query params
    const queryParams: any = {};

    // Filter by property type
    const type = searchParams.get("type");
    if (type) {
      queryParams.type = type;
    }

    // Filter by status (for-sale or for-rent)
    const status = searchParams.get("status");
    if (status) {
      queryParams.status = status;
    }

    // Filter by city
    const city = searchParams.get("city");
    if (city) {
      queryParams["location.city"] = { $regex: city, $options: "i" };
    }

    // Filter by price range
    const minPrice = searchParams.get("minPrice");
    const maxPrice = searchParams.get("maxPrice");

    if (minPrice || maxPrice) {
      queryParams.price = {};

      if (minPrice) {
        queryParams.price.$gte = Number(minPrice);
      }

      if (maxPrice) {
        queryParams.price.$lte = Number(maxPrice);
      }
    }

    // Filter by bedrooms
    const bedrooms = searchParams.get("bedrooms");
    if (bedrooms) {
      queryParams["features.bedrooms"] = { $gte: Number(bedrooms) };
    }

    // Pagination
    const page = parseInt(searchParams.get("page") || "1");
    const limit = parseInt(searchParams.get("limit") || "10");
    const skip = (page - 1) * limit; // Fetch properties with pagination
    console.log("Fetching properties with query:", queryParams);
    const properties = await Property.find(queryParams)
      .sort({ createdAt: -1 })
      .skip(skip)
      .limit(limit)
      .populate("owner", "name email phone");

    // Count total properties for pagination
    const totalProperties = await Property.countDocuments(queryParams);

    console.log(
      `Found ${properties.length} properties, total: ${totalProperties}`
    );

    return NextResponse.json({
      properties,
      pagination: {
        total: totalProperties,
        page,
        limit,
        totalPages: Math.ceil(totalProperties / limit),
      },
    });
  } catch (error) {
    console.error("Error fetching properties:", error);
    return NextResponse.json(
      {
        message: "Internal server error",
        error: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 }
    );
  }
}
