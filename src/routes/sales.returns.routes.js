const { Router } = require("express");
const {
  getAllReturns,
  getReturn,
  createReturn,
  updateReturn,
  deleteReturn,
} = require("../controllers/sales.returns.controllers");

const routerSalesReturns = Router();

routerSalesReturns.get("/inventory/sales_returns", getAllReturns);
routerSalesReturns.get("/inventory/sales_returns/:id", getReturn);
routerSalesReturns.post("/inventory/sales_returns", createReturn);
routerSalesReturns.put("/inventory/sales_returns/:id", updateReturn);
routerSalesReturns.delete("/inventory/sales_returns/:id", deleteReturn);

module.exports = routerSalesReturns;
