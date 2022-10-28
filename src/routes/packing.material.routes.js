const { Router } = require("express");
const {
  getAllPackingMaterial,
  getPackingMaterial,
  deletePackingMaterial,
  createPackingMaterial,
  updatePackingMaterial,
} = require("../controllers/packing.material.controllers");
const authorization = require("../middleware/authorization");
const routerPacking = Router();

routerPacking.get(
  "/inventory/packing_material",
  authorization,
  getAllPackingMaterial
);
routerPacking.get(
  "/inventory/packing_material/:id",
  authorization,
  getPackingMaterial
);
routerPacking.post(
  "/inventory/packing_material",
  authorization,
  createPackingMaterial
);
routerPacking.put(
  "/inventory/packing_material/:id",
  authorization,
  updatePackingMaterial
);
routerPacking.delete(
  "/inventory/packing_material/:id",
  authorization,
  deletePackingMaterial
);

module.exports = routerPacking;
