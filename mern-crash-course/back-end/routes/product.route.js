import express from "express";

import { createProduct, deleteProduct, getAllProducts, updateProduct } from "../controllers/product.controller.js";

const router = express.Router();

router.put("/:id", updateProduct);

router.delete("/:id", deleteProduct);

router.get("/", getAllProducts);

router.post("/", createProduct);

export default router;