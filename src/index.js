const express = require("express");
const router = require("./routes/sales.routes");
const morgan = require("morgan");

//Librerias para el login del usuario
const cors = require("cors");

require("dotenv").config();

const app = express();

//Middleware para login
app.use(cors());

//Routes for login
app.use("/login", (req, res) => {
  res.send({
    token: "test123",
  });
});

const PORT = process.env.PORT || 3000;

app.use(morgan("dev"));
app.use(express.json());
app.use(router);

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
