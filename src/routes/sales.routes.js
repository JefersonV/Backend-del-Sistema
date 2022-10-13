const { Router } = require("express");
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

routerSales.get("/sales", getAllSales);
routerSales.get("/sales/:id", getSale);
routerSales.post("/sales", createSales);
routerSales.put("/sales/:id", updateSale);
routerSales.delete("/sales/:id", deleteSale);
module.exports = routerSales;
