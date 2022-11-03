const { Router } = require("express");
const {
  getSumaVentasMes,
  getBolsasVendidas,
  getBolsasDisponibles,
  getClientesFrecuentes,
  getSumaVentasHoy,
} = require("../controllers/dashboard.controllers");

const routerDashboard = Router();
const authorization = require("../middleware/authorization");

routerDashboard.get("/dashboard/suma", authorization, getSumaVentasMes);
routerDashboard.get(
  "/dashboard/bolsas-vendidas",
  authorization,
  getBolsasVendidas
);
routerDashboard.get(
  "/dashboard/bolsas-disponibles",
  authorization,
  getBolsasDisponibles
);
routerDashboard.get(
  "/dashboard/clientes-frec",
  authorization,
  getClientesFrecuentes
);
routerDashboard.get("/dashboard/ventas-hoy", authorization, getSumaVentasHoy);
module.exports = routerDashboard;
