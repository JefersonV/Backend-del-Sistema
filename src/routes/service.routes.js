const {Router} = require ('express')
 const {
    getAllService,
    getService,
    createService,
    updateService,
    deleteService,
 }=require('../controllers/service.controllers');
const router = Router();


 router.get("/production_cost/menu_costo/service",getAllService);
 router.get("/production_cost/menu_costo/service/:id", getService);
 router.post("/production_cost/menu_costo/service",createService);
 router.put("/production_cost/menu_costo/service/:id", updateService);
 router.delete("/production_cost/menu_costo/service/:id", deleteService);
 
 module.exports = router;