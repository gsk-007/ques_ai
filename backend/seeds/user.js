import mongoose from "mongoose";
import bcrypt from "bcryptjs";
import dotenv from "dotenv";
import User from "../models/userModel.js";

dotenv.config();

// Connect to your MongoDB database
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDB connected");
    seedUsers();
  })
  .catch((err) => {
    console.error("❌ MongoDB connection error:", err);
  });

// Seed function
const seedUsers = async () => {
  try {
    // Clear existing users (optional)
    await User.deleteMany();

    // Create 3 users
    const users = [
      {
        name: "john_doe",
        email: "john@example.com",
        password: await bcrypt.hash("password123", 10),
      },
      {
        name: "jane_smith",
        email: "jane@example.com",
        password: await bcrypt.hash("password123", 10),
      },
      {
        name: "alice_wonder",
        email: "alice@example.com",
        password: await bcrypt.hash("password123", 10),
      },
    ];

    await User.insertMany(users);
    console.log("✅ Users seeded successfully!");
    process.exit();
  } catch (err) {
    console.error("❌ Error seeding users:", err);
    process.exit(1);
  }
};
