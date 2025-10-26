import mongoose from "mongoose";
import dotenv from "dotenv";

if (process.env.NODE_ENV !== "production") {
  import("dotenv/config");
}

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);

    console.log(`✅✅✅ MongoDB Connected: ${conn.connection.host} ✅✅✅`);
  } catch (error) {
    console.error(`❌ MongoDB Connection Error: ${error.message}`);
    process.exit(1);
  }
};

export default connectDB;
