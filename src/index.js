const express = require("express");
const router = require("./routes/sales.routes");
const morgan = require("morgan");

require("dotenv").config();

const app = express();

const PORT = process.env.PORT || 3000;

app.use(morgan("dev"));
app.use(express.json());
app.use(router);

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
