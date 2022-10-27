const {Router} = require ('express')
 const {
    getAllRawMaterials,
    getRawMaterial,
    createRawMaterial,
    updateRawMaterial,
    deleteRawMaterial,
 }=require('../controllers/raw.material.controller');
const router = Router();


 router.get("/production_cost/menu_costo/raw_material",getAllRawMaterials);
 router.get("/production_cost/menu_costo/raw_material/:id", getRawMaterial);
 router.post("/production_cost/menu_costo/raw_material",createRawMaterial);
 router.put("/production_cost/menu_costo/raw_material/:id", updateRawMaterial);
 router.delete("/production_cost/menu_costo/raw_material/:id", deleteRawMaterial);
 
 module.exports = router;