const pool = require("../db");
const {
    getAllServiceQ,
    getServiceQ,
    insertServiceQ,
    updateServiceQ,
    deleteServiceQ,  
} = require("../querys");

//Obtener todos los registros
const getAllService = async (req, res, next) => {
  try {

    const allService = await pool.query(getAllServiceQ);
    res.json(allService.rows);
  } catch (error) {
    next(error);
  }
};

//Obtener un solo registro
const getService = async (req, res, next) => {
  const { id } = req.params;
  try {
    const result = await pool.query(getServiceQ, [id]);
    if (result.rows.length === 0) {
      return res.status(404).json({
        message: "Tipo de servicio no econtrado",
      });
    }
    res.json(result.rows[0]);
  } catch (error) {
    next(error);
  }
};

//Crear o ingresar materia prima
const createService = async (req, res, next) => {
  const { id_tipo_materia,
    id_unidad_medida,
    id_tipo_servicio,
    costo_servicio,} = req.body;
  try {
    await pool.query(insertServiceQ, [
      id_tipo_materia,
      id_unidad_medida,
      id_tipo_servicio,
      costo_servicio,
    ]);
    res.sendStatus(204);
  } catch (error) {
    next(error);
  }
};

//Actualizar matera prima
const updateService = async (req, res, next) => {
  const { id } = req.params;
  const { 
    id_tipo_materia,
    id_unidad_medida,
    id_tipo_servicio,
    costo_servicio, } = req.body;
  try {
    await pool.query(updateServiceQ, [
        id_tipo_materia,
        id_unidad_medida,
        id_tipo_servicio,
        costo_servicio,
      id,
    ]);
    res.sendStatus(204);
  } catch (error) {
    next(error);
  }
};

//Eliminar un registro de materia prima
const deleteService = async (req, res, next) => {
  const { id } = req.params;
  try {
    const result = await pool.query(deleteServiceQ, [id]);
    if (result.rowCount === 0) {
      return res.status(404).json({
        message: "Servicio no encontrada",
      });
    }
    res.sendStatus(204);
  } catch (error) {
    next(error);
  }
};
module.exports = {
    getAllService,
    getService,
    createService,
    updateService,
    deleteService,
};