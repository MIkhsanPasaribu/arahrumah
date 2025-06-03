import mongoose, { Schema, Document } from "mongoose";

export interface IProperty extends Document {
  title: string;
  description: string;
  type: "house" | "apartment" | "land" | "commercial";
  status: "for-sale" | "for-rent";
  price: number;
  location: {
    address: string;
    city: string;
    state?: string;
    zipCode: string;
    coordinates?: {
      lat: number;
      lng: number;
    };
  };
  features: {
    bedrooms?: number;
    bathrooms?: number;
    buildingSize?: number; // in square meters
    landSize?: number; // in square meters
    garage?: number;
    yearBuilt?: number;
    furnished?: boolean;
  };
  images: string[];
  owner: mongoose.Types.ObjectId;
  createdAt: Date;
  updatedAt: Date;
  featured: boolean;
}

const propertySchema = new Schema<IProperty>(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    type: {
      type: String,
      enum: ["house", "apartment", "land", "commercial"],
      required: true,
    },
    status: {
      type: String,
      enum: ["for-sale", "for-rent"],
      required: true,
    },
    price: { type: Number, required: true },
    location: {
      address: { type: String, required: true },
      city: { type: String, required: true },
      state: { type: String },
      zipCode: { type: String, required: true },
      coordinates: {
        lat: { type: Number },
        lng: { type: Number },
      },
    },
    features: {
      bedrooms: { type: Number },
      bathrooms: { type: Number },
      buildingSize: { type: Number },
      landSize: { type: Number },
      garage: { type: Number },
      yearBuilt: { type: Number },
      furnished: { type: Boolean },
    },
    images: [{ type: String }],
    owner: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    featured: { type: Boolean, default: false },
  },
  { timestamps: true }
);

export default mongoose.models.Property ||
  mongoose.model<IProperty>("Property", propertySchema);
