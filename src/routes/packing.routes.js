const {Router} = require ('express')
 const {
    getAllPackingMaterial,
  getPackingMaterial,
  createPackingMaterial,
  updatePackingMaterial,
  deletePackingMaterial,
 }=require('../controllers/packing.controller');
const router = Router();


 router.get("/production_cost/menu_costo/packing_material",getAllPackingMaterial);
 router.get("/production_cost/menu_costo/packing_material/:id", getPackingMaterial);
 router.post("/production_cost/menu_costo/packing_material",createPackingMaterial);
 router.put("/production_cost/menu_costo/packing_material/:id", updatePackingMaterial);
 router.delete("/production_cost/menu_costo/packing_material/:id", deletePackingMaterial);
 
 
 module.exports = router;