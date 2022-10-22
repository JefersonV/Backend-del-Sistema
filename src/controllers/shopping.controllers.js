const pool = require("../db");
const { getAllShippingsQ, getShoppingQ } = require("../querys");

//Obtener todas la compras
const getAllShoppings = async (req, res, next) => {
  try {
    const result = await pool.query(getAllShippingsQ);
    res.json(result.rows);
  } catch (error) {
    next(error);
  }
};

//Obtener un solo registro
const getShopping = async (req, res, next) => {
  const { id } = req.params;
  try {
    const result = await pool.query(getShoppingQ, [id]);

    if (result.rows.length === 0) {
      return res.status(404).json({
        message: "Compras no econtrada",
      });
    }
    res.json(result.rows[0]);
  } catch (error) {
    next(error);
  }
};

//Crear o registrar una compra
const createShopping = async (req, res, next) => {
  const {} = req.body;

  try {
    await pool.query("", []);
    res.sendStatus(204);
  } catch (error) {
    next(error);
  }
};

//Actualizar un registro de compras
const updateShopping = async (req, res, next) => {
  const { id } = req.params;
  const {} = req.body;

  try {
    await pool.query("", [id]);
    res.sendStatus(200);
  } catch (error) {
    next(error);
  }
};

//Eliminar un registro
const deleteShopping = async (req, res, next) => {
  const { id } = req.params;
  try {
    const result = await pool.query("", [id]);

    if (result.rowCount === 0) {
      return res.status(404).json({
        message: "Compra no encontrada",
      });
    }
    res.sendStatus(204);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getAllShoppings,
  getShopping,
  createShopping,
  updateShopping,
  deleteShopping,
};
