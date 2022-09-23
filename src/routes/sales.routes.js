const { Router } = require("express");
const {
  home,
  getAllSales,
  getSale,
  deleteSale,
  createSales,
  updateSale,
} = require("../controllers/sales.controllers");
const router = Router();

router.get("/", home);

router.get("/sales", getAllSales);

router.get("/sales/:id", getSale);

router.post("/sales", createSales);

router.put("/sales/:id", updateSale);

router.delete("/sales/:id", deleteSale);

module.exports = router;
