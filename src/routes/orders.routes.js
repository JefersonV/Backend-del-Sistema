const {Router} = require ('express')
 const {
    getAllOrder,
    getOrder,
    deleteOrder,
    createOrder,
    updateOrder
 }=require('../controllers/orders.controller');
const router = Router();


 router.get("/orders",getAllOrder);
 router.get("/orders/:id", getOrder);
 router.post("/orders",createOrder);
 router.put("orders/:id", updateOrder);
 router.delete("/orders/:id", deleteOrder);
 
 module.exports = router;
 