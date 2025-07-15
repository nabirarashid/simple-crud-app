import express from "express";
import mongoose from "mongoose";
import productRoutes from "./routes/product.route.js";
import dotenv from 'dotenv';

dotenv.config();

import Product from "./models/productModel.js";
const app = express();

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// routes
app.use("/api/products", productRoutes);

app.get("/", (req, res) => {
  res.send("Hello from Node API");
});

mongoose
  .connect(
    `mongodb+srv://nabiraper1701:${process.env.DB_PASSWORD}@backenddb.pdegwaw.mongodb.net/products?retryWrites=true&w=majority&appName=BackendDB`
  )
  .then(() => {
    console.log("Connected to database!");
    app.listen(3000, () => {
      console.log("Server is running on port 3000");
    });
  })
  .catch((err) => console.error("Database connection error:", err));
