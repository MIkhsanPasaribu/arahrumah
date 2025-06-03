import mongoose from "mongoose";

declare global {
  // eslint-disable-next-line no-var
  var mongoose:
    | {
        conn: typeof import("mongoose") | null;
        promise: Promise<typeof import("mongoose")> | null;
      }
    | undefined;
}

const MONGODB_URI =
  process.env.MONGODB_URI || "mongodb://localhost:27017/arahrumah";

if (!MONGODB_URI) {
  throw new Error(
    "Please define the MONGODB_URI environment variable inside .env.local"
  );
}

/**
 * Global is used here to maintain a cached connection across hot reloads
 * in development. This prevents connections growing exponentially
 * during API Route usage.
 */
let cached = global.mongoose;

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null };
}

async function dbConnect() {
  if (cached?.conn) {
    return cached.conn;
  }

  if (!cached?.promise) {
    const opts = {
      bufferCommands: false,
    };

    if (cached) {
      cached.promise = mongoose.connect(MONGODB_URI, opts);
    }
  }

  if (cached?.promise) {
    cached.conn = await cached.promise;
    return cached.conn;
  }

  throw new Error("Failed to connect to MongoDB");
}

export default dbConnect;
