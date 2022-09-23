const { Router } = require("express");
const {
  home,
  getAllSales,
  getSale,
  deleteSale,
  createSales,
} = require("../controllers/sales.controllers");
const router = Router();

router.get("/", home);

router.get("/sales", getAllSales);

router.get("/sales/:id", getSale);

router.post("/sales", createSales);

router.delete("/sales/:id", deleteSale);

module.exports = router;
