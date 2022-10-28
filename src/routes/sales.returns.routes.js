const { Router } = require("express");
const {
  getAllReturns,
  getReturn,
  createReturn,
  updateReturn,
  deleteReturn,
} = require("../controllers/sales.returns.controllers");
const authorization = require("../middleware/authorization");
const routerSalesReturns = Router();

routerSalesReturns.get(
  "/inventory/sales_returns",
  authorization,
  getAllReturns
);
routerSalesReturns.get(
  "/inventory/sales_returns/:id",
  authorization,
  getReturn
);
routerSalesReturns.post(
  "/inventory/sales_returns",
  authorization,
  createReturn
);
routerSalesReturns.put(
  "/inventory/sales_returns/:id",
  authorization,
  updateReturn
);
routerSalesReturns.delete(
  "/inventory/sales_returns/:id",
  authorization,
  deleteReturn
);

module.exports = routerSalesReturns;
