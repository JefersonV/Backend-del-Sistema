const { Router } = require("express");
const {
  getInventory,
  getAllProducts,
  getProduct,
  updateProduct,
  deleteProduct,
  createProduct,
} = require("../controllers/inventory.controllers");

const routerInventory = Router();

routerInventory.get("/inventory", authorization, getInventory);

routerInventory.get("/inventory/products", authorization, getAllProducts);
routerInventory.get("/inventory/products/:id", authorization, getProduct);
routerInventory.post("/inventory/products", authorization, createProduct);
routerInventory.put("/inventory/products/:id", authorization, updateProduct);
routerInventory.delete("/inventory/products/:id", authorization, deleteProduct);

module.exports = routerInventory;
