const pool = require("../db");
const {
  getSales,
  getSaleQ,
  deleteSaleQ,
  updateSaleQ,
  insertSaleQ,
} = require("../querys");

//controlador pagina inicio
const home = (req, res) => {
  res.send("Inicio");
};

//controlador obtener todas la ventas
const getAllSales = async (req, res, next) => {
  try {
    const allSales = await pool.query(getSales);
    res.json(allSales.rows);
  } catch (error) {
    next(error);
  }
};

//controlador obtener una venta en especifico
const getSale = async (req, res, next) => {
  const { id } = req.params;
  try {
    const result = await pool.query(getSaleQ, [id]);

    if (result.rows.length === 0) {
      return res.status(404).json({
        message: "Venta no econtrada",
      });
    }
    res.json(result.rows[0]);
  } catch (error) {
    next(error);
  }
};

//controlador para crear una venta
const createSales = async (req, res, next) => {
  const {
    cantidad,
    descripcion,
    descuento,
    id_factura,
    id_cliente,
    id_producto,
    id_modo_pago,
    id_usuario,
  } = req.body;

  try {
    await pool.query(insertSaleQ, [
      cantidad,
      descripcion,
      descuento,
      id_factura,
      id_cliente,
      id_producto,
      id_modo_pago,
      id_usuario,
    ]);
    res.sendStatus(204);
  } catch (error) {
    next(error);
  }
};

//contralador para actulizar una venta
const updateSale = async (req, res, next) => {
  const { id } = req.params;
  const {
    cantidad,
    descripcion,
    descuento,
    id_factura,
    id_cliente,
    id_producto,
    id_modo_pago,
    id_usuario,
  } = req.body;

  try {
    await pool.query(updateSaleQ, [
      id,
      cantidad,
      descripcion,
      descuento,
      id_factura,
      id_cliente,
      id_producto,
      id_modo_pago,
      id_usuario,
    ]);
    res.sendStatus(200);
  } catch (error) {
    next(error);
  }
};

//controlador para eliminar una venta
const deleteSale = async (req, res, next) => {
  const { id } = req.params;
  try {
    const result = await pool.query(deleteSaleQ, [id]);

    if (result.rowCount === 0) {
      return res.status(404).json({
        message: "Venta no encontrada",
      });
    }
    res.sendStatus(204);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  home,
  getAllSales,
  getSale,
  deleteSale,
  createSales,
  updateSale,
};
