import { NextResponse } from "next/server";
import dbConnect from "@/lib/dbConnect";
import Property from "@/models/Property";

interface RouteParams {
  params: Promise<{ id: string }>;
}

export async function GET(request: Request, { params }: RouteParams) {
  try {
    // Connect to database
    await dbConnect();

    const { id } = await params;

    // Fetch property by ID
    const property = await Property.findById(id).populate(
      "owner",
      "name email phone"
    );

    if (!property) {
      return NextResponse.json(
        { message: "Property not found" },
        { status: 404 }
      );
    }

    return NextResponse.json(property);
  } catch (error) {
    console.error("Error fetching property:", error);
    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 }
    );
  }
}
