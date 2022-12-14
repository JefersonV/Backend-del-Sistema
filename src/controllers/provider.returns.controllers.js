const pool = require("../db");
const { getAllReturnsProvidersQ } = require("../querys");

//Obtener todos los registros
const getAllReturns = async (req, res, next) => {
  try {
    const result = await pool.query(getAllReturnsProvidersQ);
    res.json(result.rows);
  } catch (error) {
    next(error);
  }
};

//Obtener un solo registro
const getReturn = async (req, res, next) => {
  const { id } = req.params;
  try {
    const result = await pool.query("", [id]);

    if (result.rows.length === 0) {
      return res.status(404).json({
        message: "Devolucion no econtrada",
      });
    }
    res.json(result.rows[0]);
  } catch (error) {
    next(error);
  }
};

//Crear o registrar PENDIENTE
const createReturn = async (req, res, next) => {
  const {} = req.body;

  try {
    await pool.query("", []);
    res.sendStatus(204);
  } catch (error) {
    next(error);
  }
};

//Actualizar un registro PEDIENTE
const updateReturn = async (req, res, next) => {
  const { id } = req.params;
  const {} = req.body;

  try {
    await pool.query("", [id]);
    res.sendStatus(200);
  } catch (error) {
    next(error);
  }
};

//Eliminar un registro PENDIENTE
const deleteReturn = async (req, res, next) => {
  const { id } = req.params;
  try {
    const result = await pool.query("", [id]);

    if (result.rowCount === 0) {
      return res.status(404).json({
        message: "Devolucion no encontrada",
      });
    }
    res.sendStatus(204);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getAllReturns,
  getReturn,
  createReturn,
  updateReturn,
  deleteReturn,
};
