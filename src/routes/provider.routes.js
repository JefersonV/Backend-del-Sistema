const { Router } = require("express");
const {
  getAllProviders,
  getProvider,
  createProvider,
  updateProvider,
  deleteProvider,
} = require("../controllers/providers.controllers");

const routerProvider = Router();

routerProvider.get("/inventory/provider", getAllProviders);
routerProvider.get("/inventory/provider/:id", getProvider);
routerProvider.post("/inventory/provider", createProvider);
routerProvider.put("/inventory/provider/:id", updateProvider);
routerProvider.delete("/inventory/provider/:id", deleteProvider);

module.exports = routerProvider;
