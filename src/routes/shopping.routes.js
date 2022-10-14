const { Router } = require("express");
const {
  getAllShoppings,
  getShopping,
  deleteShopping,
  createShopping,
  updateShopping,
} = require("../controllers/shopping.controllers");
const authorization = require("../middleware/authorization");

const routerShopping = Router();

routerShopping.get("/inventory/shopping", authorization, getAllShoppings);
routerShopping.get("/inventory/shopping/:id", authorization, getShopping);
routerShopping.post("/inventory/shopping", authorization, createShopping);
routerShopping.put("/inventory/shopping/:id", authorization, updateShopping);
routerShopping.delete("/inventory/shopping/:id", authorization, deleteShopping);

module.exports = routerShopping;
