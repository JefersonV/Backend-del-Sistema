const pool = require("../db");
const {
  getInventoryQ,
  getAllProductsQ,
  getProductQ,
  deleteProductQ,
} = require("../querys");

//Obtener los movimientos del inventario
const getInventory = async (req, res, next) => {
  try {
    const inventory = await pool.query(getInventoryQ);
    res.json(inventory.rows);
  } catch (error) {
    next(error);
  }
};

//Obtener todos los registros de los productos
const getAllProducts = async (req, res, next) => {
  try {
    const allProducts = await pool.query(getAllProductsQ);
    res.json(allProducts.rows);
  } catch (error) {
    next(error);
  }
};

//Obtener un solo registro
const getProduct = async (req, res, next) => {
  const { id } = req.params;
  try {
    const result = await pool.query(getProductQ, [id]);
    if (result.rows.length === 0) {
      return res.status(404).json({
        message: "Producto no econtrado",
      });
    }
    res.json(result.rows[0]);
  } catch (error) {
    next(error);
  }
};

//Crear o ingresar producto Falta completar
const createProduct = async (req, res, next) => {
  const {
    nombre,
    stock_ingreso,
    tipo_producto,
    stock_actual,
    precio_venta,
    stock_minimo,
    id_costo_produccion,
  } = req.body;

  try {
    //await pool.query(,[])
  } catch (error) {
    next(error);
  }
};

//Actualizar registro de producto Falta completar
const updateProduct = async (req, res, next) => {
  const {
    nombre,
    stock_ingreso,
    tipo_producto,
    stock_actual,
    precio_venta,
    stock_minimo,
    id_costo_produccion,
  } = req.body;

  try {
    //await pool.query();
  } catch (error) {
    next(error);
  }
};

const deleteProduct = async (req, res, next) => {
  const { id } = req.params;
  try {
    const result = await pool.query(deleteProductQ, [id]);

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
  getInventory,
  getAllProducts,
  getProduct,
  createProduct,
  updateProduct,
  deleteProduct,
};
