import express from "express";
import dotenv from "dotenv";
import path from "path";
import { connectDB } from "./config/db.js";

import productRoutes from "./routes/product.route.js";

dotenv.config();
const PORT = process.env.PORT;
const app = express();

const __dirname = path.resolve();

app.use(express.json()); //allows us to accept JSON data in the req.body

app.use("/api/products", productRoutes);

if (process.env.NODE_ENV.trim() === "production") {
  console.log("test 0");
  app.use(express.static(path.join(__dirname, "/front-end/dist")));
  console.log("test 1");
  app.get("/{*any}", (req, res) => {
    res.sendFile(path.resolve(__dirname, "front-end", "dist", "index.html"));
  });
  console.log("test 2");
}

app.listen(PORT, () => {
  connectDB();
  console.log("Server started at http://localhost:" + PORT);
});
