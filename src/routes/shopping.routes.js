const { Router } = require("express");
const {
  getAllShoppings,
  getShopping,
  deleteShopping,
  createShopping,
  updateShopping,
} = require("../controllers/shopping.controllers");

const routerShopping = Router();

routerShopping.get("/inventory/shopping", getAllShoppings);
routerShopping.get("/inventory/shopping/:id", getShopping);
routerShopping.post("/inventory/shopping", createShopping);
routerShopping.put("/inventory/shopping/:id", updateShopping);
routerShopping.delete("/inventory/shopping/:id", deleteShopping);

module.exports = routerShopping;
