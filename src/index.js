const express = require("express");
const routerSales = require("./routes/sales.routes");
const routerOrder =require("./routes/orders.routes");
const routerRawMaterial=require("./routes/raw.material.routes");
const routePacking = require("./routes/packing.routes");
const routeProduction = require("./routes/production.routes");
const routeService = require("./routes/service.routes");
const morgan = require("morgan");
const cors = require("cors");

require("dotenv").config();

const app = express();

const PORT = process.env.PORT || 4000;

app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use(routerSales);
app.use(routerOrder);
app.use(routerRawMaterial);
app.use(routePacking);
app.use(routeProduction);
app.use(routeService);

app.use((err, req, res, next) => {
  return res.json({
    message: err.message,
  });
});

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
