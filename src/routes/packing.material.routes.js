const { Router } = require("express");
const {
  getAllPackingMaterial,
  getPackingMaterial,
  deletePackingMaterial,
  createPackingMaterial,
  updatePackingMaterial,
} = require("../controllers/packing.material.controllers");

const routerPacking = Router();

routerPacking.get("/inventory/packing_material", getAllPackingMaterial);
routerPacking.get("/inventory/packing_material/:id", getPackingMaterial);
routerPacking.post("/inventory/packing_material", createPackingMaterial);
routerPacking.put("/inventory/packing_material/:id", updatePackingMaterial);
routerPacking.delete("/inventory/packing_material/:id", deletePackingMaterial);

module.exports = routerPacking;
