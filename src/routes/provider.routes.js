const { Router } = require("express");
const {
  getAllProviders,
  getProvider,
  createProvider,
  updateProvider,
  deleteProvider,
} = require("../controllers/providers.controllers");

const routerProvider = Router();

routerProvider.get("/inventory/provider", authorization, getAllProviders);
routerProvider.get("/inventory/provider/:id", authorization, getProvider);
routerProvider.post("/inventory/provider", authorization, createProvider);
routerProvider.put("/inventory/provider/:id", authorization, updateProvider);
routerProvider.delete("/inventory/provider/:id", authorization, deleteProvider);

module.exports = routerProvider;
