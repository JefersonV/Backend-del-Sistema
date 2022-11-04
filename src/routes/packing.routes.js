const {Router} = require ('express')
 const {
    getAllPackingMaterial,
  getPackingMaterial,
  createPackingMaterial,
  updatePackingMaterial,
  deletePackingMaterial,
 }=require('../controllers/packing.controller');
 const authorization = require("../middleware/authorization");
const router = Router();


 router.get("/production_cost/menu_costo/packing_material",authorization, getAllPackingMaterial);
 router.get("/production_cost/menu_costo/packing_material/:id", authorization, getPackingMaterial);
 router.post("/production_cost/menu_costo/packing_material",authorization, createPackingMaterial);
 router.put("/production_cost/menu_costo/packing_material/:id", authorization, updatePackingMaterial);
 router.delete("/production_cost/menu_costo/packing_material/:id",authorization, deletePackingMaterial);
 
 
 module.exports = router;