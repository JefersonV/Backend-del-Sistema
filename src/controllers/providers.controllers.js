const pool = require("../db");
const {} = require("../querys");

//Obtener todos los registros
const getAllProviders = async (req, res, next) => {
  try {
    const result = await pool.query("SELECT * FROM proveedor");
    res.json(result.rows);
  } catch (error) {
    next(error);
  }
};

//Obtener un solo registro
const getProvider = async (req, res, next) => {
  const { id } = req.params;
  try {
    const result = await pool.query(
      "SELECT * FROM proveedor WHERE id_proveedor = $1",
      [id]
    );
    if (result.rows.length === 0) {
      return res.status(404).json({
        message: "Proveedor no econtrado",
      });
    }
    res.json(result.rows[0]);
  } catch (error) {
    next(error);
  }
};

//Crear o ingresar proveedor
const createProvider = async (req, res, next) => {
  const { nombre, telefono, direccion, correo } = req.body;
  try {
    await pool.query(
      "INSERT INTO proveedor(nombre, telefono, direccion, correo) VALUES($1, $2, $3, $4)",
      [nombre, telefono, direccion, correo]
    );
    res.sendStatus(204);
  } catch (error) {
    next(error);
  }
};

//Actulizar un registro proveedor
const updateProvider = async (req, res, next) => {
  const { id } = req.params;
  const { nombre, telefono, direccion, correo } = req.body;
  try {
    await pool.query(
      "UPDATE proveedor SET nombre = $1, telefono = $2, direccion = $3, correo = $4 WHERE id_proveedor = $5",
      [nombre, telefono, direccion, correo, id]
    );
    res.sendStatus(204);
  } catch (error) {
    next(error);
  }
};

//Eliminar un regitro de proveedor
const deleteProvider = async (req, res, next) => {
  const { id } = req.params;
  try {
    const result = await pool.query(
      "DELETE FROM proveedor WHERE id_proveedor = $1",
      [id]
    );

    if (result.rowCount === 0) {
      return res.status(404).json({
        message: "Proveedor no encontrada",
      });
    }
    res.sendStatus(204);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getAllProviders,
  getProvider,
  createProvider,
  updateProvider,
  deleteProvider,
};
