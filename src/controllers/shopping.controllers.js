const pool = require("../db");
const {
  getAllShippingsQ,
  getShoppingQ,
  updateShoppingQ,
} = require("../querys");

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
  const {
    cantidad,
    precio_unitario,
    descuento,
    subtotal,
    total,
    no_comprobante,
    observaciones,
    id_tipo_comprobante,
    id_proveedor,
    id_producto,
    id_modo_pago,
  } = req.body;

  try {
    await pool.query(
      `INSERT INTO 
      compras(fecha, cantidad, precio_unitario, descuento, subtotal, 
        total, no_comprobante, observaciones, id_tipo_comprobante, 
        id_proveedor, id_producto, id_modo_pago) 
        VALUES (CURRENT_DATE, $1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11)`,
      [
        cantidad,
        precio_unitario,
        descuento,
        subtotal,
        total,
        no_comprobante,
        observaciones,
        id_tipo_comprobante,
        id_proveedor,
        id_producto,
        id_modo_pago,
      ]
    );
    res.sendStatus(204);
  } catch (error) {
    next(error);
  }
};

//Actualizar un registro de compras
const updateShopping = async (req, res, next) => {
  const { id } = req.params;
  const {
    cantidad,
    precio_unitario,
    descuento,
    subtotal,
    total,
    no_comprobante,
    observaciones,
    id_tipo_comprobante,
    id_proveedor,
    id_producto,
    id_modo_pago,
  } = req.body;

  try {
    await pool.query(updateShoppingQ, [
      cantidad,
      precio_unitario,
      descuento,
      subtotal,
      total,
      no_comprobante,
      observaciones,
      id_tipo_comprobante,
      id_proveedor,
      id_producto,
      id_modo_pago,
      id,
    ]);
    res.sendStatus(204);
  } catch (error) {
    next(error);
  }
};

//Eliminar un registro
const deleteShopping = async (req, res, next) => {
  const { id } = req.params;
  try {
    const result = await pool.query(
      "DELETE FROM inventario_movimiento WHERE id_compra=$1",
      [id]
    );
    if (result.rowCount === 0) {
      return res.status(404).json({
        message: "Compra no encontrada",
      });
    }
    const result2 = await pool.query("DELETE FROM compras WHERE id_compra=$1", [
      id,
    ]);
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
