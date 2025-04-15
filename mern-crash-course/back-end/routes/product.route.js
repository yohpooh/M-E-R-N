import express from "express";

import { createProduct, deleteProduct, getAllProducts, getProducts } from "../controllers/product.controller.js";

const router = express.Router();

router.put("/:id", getProducts);

router.delete("/:id", deleteProduct);

router.get("/", getAllProducts);

router.post("/", createProduct);

export default router;