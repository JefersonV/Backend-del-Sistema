const {Router} = require ('express')
 const {
    getAllProduction,
  getProduction,
  createProduction,
  updateProduction,
  deleteProduction,
 }=require('../controllers/prouction.controller');
const router = Router();


 router.get("/production_cost",getAllProduction);
 router.get("/production_cost/:id", getProduction);
 router.post("/production_cost/",createProduction);
 router.put("/production_cost/:id", updateProduction);
 router.delete("/production_cost/:id", deleteProduction);
 
 
 module.exports = router;