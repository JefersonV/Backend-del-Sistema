const {Router} = require ('express')
 const {
    getAllProduction,
  getProduction,
  createProduction,
  updateProduction,
  deleteProduction,
 }=require('../controllers/production.controller');
 const authorization = require("../middleware/authorization");
const router = Router();


 router.get("/production_cost",authorization, getAllProduction);
 router.get("/production_cost/:id", authorization, getProduction);
 router.post("/production_cost/",authorization, createProduction);
 router.put("/production_cost/:id",authorization, updateProduction);
 router.delete("/production_cost/:id",authorization, deleteProduction);
 
 
 module.exports = router;