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

routerClient.get("/costumers", authorization, getAllClients);
routerClient.get("/costumers/:id", authorization, getClient);
routerClient.post("/costumers/", authorization, createClient);
routerClient.put("/costumers/:id", authorization, updateClient);
routerClient.delete("/costumers/:id", authorization, deleteClient);

module.exports = routerClient;
