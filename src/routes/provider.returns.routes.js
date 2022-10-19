const { Router } = require("express");
const {
  getAllReturns,
  getReturn,
  createReturn,
  updateReturn,
  deleteReturn,
} = require("../controllers/provider.returns.controllers");
const authorization = require("../middleware/authorization");
const routerProviderReturns = Router();

routerProviderReturns.get(
  "/inventory/shopping_returns",
  authorization,
  getAllReturns
);
routerProviderReturns.get(
  "/inventory/shopping_returns/:id",
  authorization,
  getReturn
);
routerProviderReturns.post(
  "/inventory/shopping_returns",
  authorization,
  createReturn
);
routerProviderReturns.put(
  "/inventory/shopping_returns/:id",
  authorization,
  updateReturn
);
routerProviderReturns.delete(
  "/inventory/shopping_returns/:id",
  authorization,
  deleteReturn
);

module.exports = routerProviderReturns;
