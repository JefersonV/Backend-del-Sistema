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

routerInventory.get("/inventory", getInventory);

routerInventory.get("/inventory/products", getAllProducts);
routerInventory.get("/inventory/products/:id", getProduct);
routerInventory.post("/inventory/products", createProduct);
routerInventory.put("/inventory/products/:id", updateProduct);
routerInventory.delete("/inventory/products/:id", deleteProduct);

module.exports = routerInventory;
