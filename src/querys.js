//Query que llama una funcion desde postgres para obtener todas las ventas
const getSales = `SELECT * FROM getallsales()`;

//Query que llama una funcion desde postgres para obtener una  venta por id
const getSaleQ = `SELECT * FROM getsale($1)`;

//Query que llama una funcion desde postgres para insertar una venta
const insertSaleQ = `SELECT insertSale($1, $2, $3, $4, $5, $6, $7, $8)`;

//Query para eliminar una venta por id
const deleteSaleQ = `DELETE FROM venta WHERE id_venta = $1`;

//Query que llama una funcion desde postgres para actualizar una venta
//--updateSale(id_v, cantidad, descrpcion, descuento, id_factura. id_cliente, id_producto, id_modo_pago, id_usuario)
//SELECT updateSale(10, 2, 'CAFE Prueba', 10, 1, 1, 2, 2, 2);
const updateSaleQ = `SELECT updateSale($1, $2, $3, $4, $5, $6, $7, $8, $9)`;

module.exports = {
  getSales,
  getSaleQ,
  insertSaleQ,
  deleteSaleQ,
  updateSaleQ,
};
