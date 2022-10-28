const { Router } = require("express");
const {
  getAllClients,
  getClient,
  createClient,
  updateClient,
  deleteClient,
} = require("../controllers/client.controllers");

const routerClient = Router();
const authorization = require("../middleware/authorization");

routerClient.get("/customers", authorization, getAllClients);
routerClient.get("/customers/:id", authorization, getClient);
routerClient.post("/customers/", authorization, createClient);
routerClient.put("/customers/:id", authorization, updateClient);
routerClient.delete("/customers/:id", authorization, deleteClient);

module.exports = routerClient;
