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
const getAllSales = async (req, res) => {
  try {
    const allSales = await pool.query(getSales);
    res.json(allSales.rows);
  } catch (error) {
    console.log(error.message);
  }
};

//controlador obtener una venta en especifico
const getSale = async (req, res) => {
  const { id } = req.params;
  try {
    const result = await pool.query(getSaleQ, [id]);

    if (result.rows.length === 0) {
      return res.status(404).json({
        message: "Venta no econtrada",
      });
    }
    res.json(result.rows[0]);
  } catch (error) {}
};

//controlador para crear una venta
const createSales = async (req, res) => {
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
    res.sendStatus(500);
  }
};

//contralador para actulizar una venta
const updateSale = async (req, res) => {
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
    res.sendStatus(500);
  }
};

//controlador para eliminar una venta
const deleteSale = async (req, res) => {
  const { id } = req.params;
  const result = await pool.query(deleteSaleQ, [id]);

  if (result.rowCount === 0) {
    return res.status(404).json({
      message: "Venta no encontrada",
    });
  }
  res.sendStatus(204);
};

module.exports = {
  home,
  getAllSales,
  getSale,
  deleteSale,
  createSales,
  updateSale,
};
