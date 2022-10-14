const { Router } = require("express");
const authorization = require("../middleware/authorization");
const {
  home,
  getAllSales,
  getSale,
  deleteSale,
  createSales,
  updateSale,
} = require("../controllers/sales.controllers");
const routerSales = Router();

routerSales.get("/", home);

routerSales.get("/sales", authorization, getAllSales);
routerSales.get("/sales/:id", authorization, getSale);
routerSales.post("/sales", authorization, createSales);
routerSales.put("/sales/:id", authorization, updateSale);
routerSales.delete("/sales/:id", authorization, deleteSale);
module.exports = routerSales;
