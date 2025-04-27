import dotenv from "dotenv";
dotenv.config();

import app from "./server.js";
import { connectDB } from "./config/db.js";

const PORT = process.env.PORT || 5000;
const start = () => {
  if (!process.env.MONGO_URI) {
    throw new Error("MONGO_URI not present");
  }

  connectDB();

  app.listen(PORT, () => {
    console.log(`hello on http://localhost:${PORT}`);
  });
};

start();
