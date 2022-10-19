const { Router } = require("express");
const {
  getAllRawMaterials,
  getRawMaterial,
  deleteRawMaterial,
  createRawMaterial,
  updateRawMaterial,
} = require("../controllers/raw.material.controllers");
const authorization = require("../middleware/authorization");
const routerRawMaterial = Router();

routerRawMaterial.get(
  "/inventory/raw_material",
  authorization,
  getAllRawMaterials
);
routerRawMaterial.get(
  "/inventory/raw_material/:id",
  authorization,
  getRawMaterial
);
routerRawMaterial.post(
  "/inventory/raw_material",
  authorization,
  createRawMaterial
);
routerRawMaterial.put(
  "/inventory/raw_material/:id",
  authorization,
  updateRawMaterial
);
routerRawMaterial.delete(
  "/inventory/raw_material/:id",
  authorization,
  deleteRawMaterial
);

module.exports = routerRawMaterial;
