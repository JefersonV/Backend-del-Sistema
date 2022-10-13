const { Router } = require("express");
const {
  getAllRawMaterials,
  getRawMaterial,
  deleteRawMaterial,
  createRawMaterial,
  updateRawMaterial,
} = require("../controllers/raw.material.controllers");

const routerRawMaterial = Router();

routerRawMaterial.get("/inventory/raw_material", getAllRawMaterials);
routerRawMaterial.get("/inventory/raw_material/:id", getRawMaterial);
routerRawMaterial.post("/inventory/raw_material", createRawMaterial);
routerRawMaterial.put("/inventory/raw_material/:id", updateRawMaterial);
routerRawMaterial.delete("/inventory/raw_material/:id", deleteRawMaterial);

module.exports = routerRawMaterial;
