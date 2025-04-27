import dotenv from "dotenv";
dotenv.config();

import app from "./server.js";

const PORT = process.env.PORT || 5000;
const start = () => {
  app.listen(PORT, () => {
    console.log(`hello on http://localhost:${PORT}`);
  });
};

start();
