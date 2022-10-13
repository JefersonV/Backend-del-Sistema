const pool = require("../db");
const {
  getAllPackingMaterialQ,
  getPackingMaterialQ,
  deletePackingMaterialQ,
} = require("../querys");

//Obtener todas los materiales de empaque
const getAllPackingMaterial = async (req, res, next) => {
  try {
    const result = await pool.query(getAllPackingMaterialQ);
    res.json(result.rows);
  } catch (error) {
    next(error);
  }
};

//Obtener un solo registro
const getPackingMaterial = async (req, res, next) => {
  const { id } = req.params;
  try {
    const result = await pool.query(getPackingMaterialQ, [id]);
    if (result.rows.length === 0) {
      return res.status(404).json({
        message: "Material de empaque no econtrado",
      });
    }
    res.json(result.rows[0]);
  } catch (error) {
    next(error);
  }
};

//Crear o ingresar material de empque FALTA
const createPackingMaterial = async (req, res, next) => {
  const {} = req.body;
  try {
    await pool.query("", []);
    res.sendStatus(204);
  } catch (error) {
    next(error);
  }
};

//Acutalizar registro material empaque FALTA
const updatePackingMaterial = async (req, res, next) => {
  const {} = req.body;
  try {
    await pool.query("", []);
    res.sendStatus(204);
  } catch (error) {
    next(error);
  }
};

//Eliminar un registro de material de empaque
const deletePackingMaterial = async (req, res, next) => {
  const { id } = req.params;
  try {
    const result = await pool.query(deletePackingMaterialQ, [id]);
    if (result.rowCount === 0) {
      return res.status(404).json({
        message: "Material de empaque no encontrada",
      });
    }
    res.sendStatus(204);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getAllPackingMaterial,
  getPackingMaterial,
  createPackingMaterial,
  updatePackingMaterial,
  deletePackingMaterial,
};
