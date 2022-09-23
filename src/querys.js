const getSales = `SELECT id_venta, fecha, cantidad, descripcion, descuento, subtotal, total, 
  (SELECT nombre as cliente FROM cliente WHERE venta.id_cliente = cliente.id_cliente), 
  (SELECT observaciones as factura FROM factura WHERE venta.id_factura = factura.id_factura), 
  (SELECT nombre as producto FROM producto WHERE venta.id_producto = producto.id_producto), 
  (SELECT nombre as modo_pago FROM modo_pago WHERE venta.id_modo_pago = modo_pago.id_modo_pago), 
  (SELECT nombre as vendedor FROM usuario WHERE venta.id_usuario = usuario.id_usuario) 
  FROM venta`;
const getSaleQ = `SELECT id_venta, fecha, cantidad, descripcion, descuento, subtotal, total, 
  (SELECT nombre as cliente FROM cliente WHERE venta.id_cliente = cliente.id_cliente), 
  (SELECT observaciones as factura FROM factura WHERE venta.id_factura = factura.id_factura), 
  (SELECT nombre as producto FROM producto WHERE venta.id_producto = producto.id_producto), 
  (SELECT nombre as modo_pago FROM modo_pago WHERE venta.id_modo_pago = modo_pago.id_modo_pago), 
  (SELECT nombre as vendedor FROM usuario WHERE venta.id_usuario = usuario.id_usuario) 
  FROM venta WHERE id_venta = $1`;

const insertSale = `INSERT INTO venta
(fecha, cantidad, descripcion, descuento, subtotal, total, id_factura, id_cliente, id_producto, id_modo_pago, id_usuario)
VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11)`;

const getPrecioVenta = `SELECT precio_venta FROM producto`;

const deleteSaleQ = `DELETE FROM venta WHERE id_venta = $1`;

module.exports = {
  getSales,
  getSaleQ,
  insertSale,
  getPrecioVenta,
  deleteSaleQ,
};
