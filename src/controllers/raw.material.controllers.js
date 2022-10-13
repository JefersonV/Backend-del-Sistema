const pool = require("../db");
const {
  getAllRawMaterialsQ,
  getRawMaterialQ,
  deleteRawMaterialQ,
} = require("../querys");

//Obtener todos los registros
const getAllRawMaterials = async (req, res, next) => {
  try {
    const allRawMaterial = await pool.query(getAllRawMaterialsQ);
    res.json(allRawMaterial.rows);
  } catch (error) {
    next(error);
  }
};

//Obtener un solo registro
const getRawMaterial = async (req, res, next) => {
  const { id } = req.params;
  try {
    const result = await pool.query(getRawMaterialQ, [id]);
    if (result.rows.length === 0) {
      return res.status(404).json({
        message: "Materia prima no econtrado",
      });
    }
    res.json(result.rows[0]);
  } catch (error) {
    next(error);
  }
};

//Crear o ingresar materia prima FALTA
const createRawMaterial = async (req, res, next) => {
  const {} = req.body;
  try {
    await pool.query("", []);
    res.sendStatus(204);
  } catch (error) {
    next(error);
  }
};

//Actualizar matera prima FALTA
const updateRawMaterial = async (req, res, next) => {
  const {} = req.body;
  try {
    await pool.query("", []);
    res.sendStatus(204);
  } catch (error) {
    next(error);
  }
};

//Eliminar un registro de materia prima
const deleteRawMaterial = async (req, res, next) => {
  const { id } = req.params;
  try {
    const result = await pool.query(deleteRawMaterialQ, [id]);
    if (result.rowCount === 0) {
      return res.status(404).json({
        message: "Materia prima no encontrada",
      });
    }
    res.sendStatus(204);
  } catch (error) {
    next(error);
  }
};
module.exports = {
  getAllRawMaterials,
  getRawMaterial,
  createRawMaterial,
  updateRawMaterial,
  deleteRawMaterial,
};
