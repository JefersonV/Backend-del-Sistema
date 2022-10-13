const { Router } = require("express");
const {
  getAllReturns,
  getReturn,
  createReturn,
  updateReturn,
  deleteReturn,
} = require("../controllers/provider.returns.controllers");

const routerProviderReturns = Router();

routerProviderReturns.get("/inventory/shopping_returns", getAllReturns);
routerProviderReturns.get("/inventory/shopping_returns/:id", getReturn);
routerProviderReturns.post("/inventory/shopping_returns", createReturn);
routerProviderReturns.put("/inventory/shopping_returns/:id", updateReturn);
routerProviderReturns.delete("/inventory/shopping_returns/:id", deleteReturn);

module.exports = routerProviderReturns;
