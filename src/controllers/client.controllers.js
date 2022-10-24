const pool = require("../db");
const {
  insertClient,
  getAllClientsQ,
  getClientQ,
  updateClientQ,
  deleteClientQ,
} = require("../querys");

//Obtener clientes
const getAllClients = async (req, res, next) => {
  try {
    const result = await pool.query(getAllClientsQ);
    res.json(result.rows);
  } catch (error) {
    next(error);
  }
};

//Obtener cliente
const getClient = async (req, res, next) => {
  const { id } = req.params;
  try {
    const result = await pool.query(getClientQ, [id]);
    if (result.rows.length === 0) {
      return res.status(404).json({
        message: "Cliente no econtrado",
      });
    }
    res.json(result.rows[0]);
  } catch (error) {
    next(error);
  }
};

//Registrar clientes
const createClient = async (req, res, next) => {
  const { nombre, telefono, correo, direccion, nit } = req.body;

  try {
    await pool.query(insertClient, [nombre, telefono, correo, direccion, nit]);
    res.sendStatus(204);
  } catch (error) {
    next(error);
  }
};

//Actualizar registro de cliente
const updateClient = async (req, res, next) => {
  const { id } = req.params;
  const { nombre, telefono, correo, direccion, nit } = req.body;

  try {
    await pool.query(updateClientQ, [
      nombre,
      telefono,
      correo,
      direccion,
      nit,
      id,
    ]);
    res.sendStatus(204);
  } catch (error) {
    next(error);
  }
};

//Eliminar un registro
const deleteClient = async (req, res, next) => {
  const { id } = req.params;
  try {
    const result = await pool.query(deleteClientQ, [id]);

    if (result.rowCount === 0) {
      return res.status(404).json({
        message: "Producto no encontrada",
      });
    }
    res.sendStatus(204);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  createClient,
  getAllClients,
  getClient,
  updateClient,
  deleteClient,
};
