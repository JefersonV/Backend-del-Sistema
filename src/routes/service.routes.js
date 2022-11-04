const {Router} = require ('express')
 const {
    getAllService,
    getService,
    createService,
    updateService,
    deleteService,
 }=require('../controllers/service.controllers');
 const authorization = require("../middleware/authorization");
const router = Router();


 router.get("/production_cost/menu_costo/service",authorization, getAllService);
 router.get("/production_cost/menu_costo/service/:id",authorization, getService);
 router.post("/production_cost/menu_costo/service",authorization, createService);
 router.put("/production_cost/menu_costo/service/:id",authorization, updateService);
 router.delete("/production_cost/menu_costo/service/:id",authorization, deleteService);
 
 module.exports = router;