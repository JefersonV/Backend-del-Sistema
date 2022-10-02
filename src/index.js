const express = require("express");
const router = require("./routes/sales.routes");
const morgan = require("morgan");
const cors = require("cors");

require("dotenv").config();

const app = express();

const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use(router);

app.use((err, req, res, next) => {
  return res.json({
    message: err.message,
  });
});

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
