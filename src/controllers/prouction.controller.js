const pool = require("../db");
const {
  getAllProductionQ ,
 getProduccionQ,
 insertProductionQ,
 updateProductionQ,
 deleteProductionQ,
} = require("../querys");

//Obtener todos los registros
const getAllProduction = async (req, res, next) => {
  try {
    const allRawMaterial = await pool.query(getAllProductionQ );
    res.json(allRawMaterial.rows);
  } catch (error) {
    next(error);
  }
};

//Obtener un solo registro
const getProduction = async (req, res, next) => {
  const { id } = req.params;
  try {
    const result = await pool.query(getProduccionQ, [id]);
    if (result.rows.length === 0) {
      return res.status(404).json({
        message: "Produccion no econtrado",
      });
    }
    res.json(result.rows[0]);
  } catch (error) {
    next(error);
  }
};

//Crear o ingresar materia prima
const createProduction = async (req, res, next) => {
  const {
    cantidad,
    precio_venta,
    costo_por_libra,
    id_empaque,
    id_tipo_materia,
    id_unidad_medida,
    id_servicio_cafe

   } = req.body;
  try {
    await pool.query(insertProductionQ, [
      cantidad,
      precio_venta,
      costo_por_libra,
      id_empaque,
      id_tipo_materia,
      id_unidad_medida,
      id_servicio_cafe
      
    ]);
    res.sendStatus(204);
  } catch (error) {
    next(error);
  }
};

//Actualizar matera prima
const updateProduction = async (req, res, next) => {
  const { id } = req.params;
  const { 
    cantidad,
    precio_venta,
    costo_por_libra,
    id_empaque,
    id_tipo_materia,
    id_unidad_medida,
    id_servicio_cafe

   } = req.body;
  try {
    await pool.query(updateProductionQ, [
      id,
      cantidad,
      precio_venta,
      costo_por_libra,
      id_empaque,
      id_tipo_materia,
      id_unidad_medida,
      id_servicio_cafe
    ]);
    res.sendStatus(204);
  } catch (error) {
    next(error);
  }
};

//Eliminar un registro de materia prima
const deleteProduction = async (req, res, next) => {
  const { id } = req.params;
  try {
    const result = await pool.query(deleteProductionQ, [id]);
    if (result.rowCount === 0) {
      return res.status(404).json({
        message: "Productio  no encontrada",
      });
    }
    res.sendStatus(204);
  } catch (error) {
    next(error);
  }
};
module.exports = {
    getAllProduction,
    getProduction,
    createProduction,
    updateProduction,
    deleteProduction,
};