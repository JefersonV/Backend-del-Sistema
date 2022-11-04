const {Router} = require ('express')
 const {
    getAllRawMaterials,
    getRawMaterial,
    createRawMaterial,
    updateRawMaterial,
    deleteRawMaterial,
 }=require('../controllers/raw.material.production');
 const authorization = require("../middleware/authorization");
const router = Router();


 router.get("/production_cost/menu_costo/raw_material",authorization, getAllRawMaterials);
 router.get("/production_cost/menu_costo/raw_material/:id",authorization, getRawMaterial);
 router.post("/production_cost/menu_costo/raw_material",authorization, createRawMaterial);
 router.put("/production_cost/menu_costo/raw_material/:id",authorization, updateRawMaterial);
 router.delete("/production_cost/menu_costo/raw_material/:id",authorization, deleteRawMaterial);
 
 module.exports = router;