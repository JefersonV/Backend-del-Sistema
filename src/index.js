const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const routerSales = require("./routes/sales.routes");
const routerInventory = require("./routes/inventory.routes");
const routerRawMaterial = require("./routes/raw.material.routes");
const routerPacking = require("./routes/packing.material.routes");
const routerProvider = require("./routes/provider.routes");
const routerShopping = require("./routes/shopping.routes");
const routerSalesReturns = require("./routes/sales.returns.routes");
const routerProviderReturns = require("./routes/provider.returns.routes");
const routerClient = require("./routes/client.routes");
const routerDashboard = require("./routes/dashboard.routes");

require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 3000;

//middleware
app.use(express.json()); //req. body
app.use(cors());
app.use(morgan("dev"));

app.use(routerSales);
app.use(routerInventory);
app.use(routerRawMaterial);
app.use(routerPacking);
app.use(routerProvider);
app.use(routerShopping);
app.use(routerSalesReturns);
app.use(routerProviderReturns);
app.use(routerClient);
app.use(routerDashboard);

app.use((err, req, res, next) => {
  return res.json({
    message: err.message,
  });
});
//ROUTES
//register and login routes
app.use("/auth", require("./routes/jwtAuth"));
app.use("/home", require("./routes/home"));

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
