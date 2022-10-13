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

//Consultas sobre modulo de inventario - Producto
const getInventoryQ = `SELECT * FROM inventario_movimiento`;
const getAllProductsQ = `SELECT
producto.id_producto, 
producto.nombre AS producto, 
unidad_de_medida.nombre AS unidad_medida,
tipo_producto.nombre AS tipo_producto,  
producto.stock_actual, 
producto.stock_minimo
FROM producto
INNER JOIN unidad_de_medida ON unidad_de_medida.id_unidad_medida = producto.id_unidad_medida
INNER JOIN tipo_producto ON tipo_producto.id_tipo_producto = producto.tipo_producto`;
//costo_produccion.precio_venta,
//INNER JOIN costo_produccion ON costo_produccion.id_unidad_medida = producto.id_unidad_medida`;

//Obtener un solo producto
const getProductQ = `SELECT
producto.id_producto, 
producto.nombre AS producto, 
unidad_de_medida.nombre AS unidad_medida,
tipo_producto.nombre AS tipo_producto,  
producto.stock_actual, 
producto.stock_minimo
FROM producto
INNER JOIN unidad_de_medida ON unidad_de_medida.id_unidad_medida = producto.id_unidad_medida
INNER JOIN tipo_producto ON tipo_producto.id_tipo_producto = producto.tipo_producto
WHERE id_producto = $1`;
// costo_produccion.precio_venta,
// INNER JOIN costo_produccion ON costo_produccion.id_unidad_medida = producto.id_unidad_medida

//Eliminar un producto
const deleteProductQ = `DELETE FROM producto WHERE id_producto = $1`;

//Querys para el modulo de materia prima
//Obtener todos los registros
const getAllRawMaterialsQ = `SELECT 
materia_prima.id_materia_prima,
materia_prima.cantidad,
materia_prima.costo,
unidad_de_medida.nombre AS unidad_medida,
tipo_materia_prima.nombre AS tipo_materia 
FROM materia_prima
INNER JOIN unidad_de_medida ON unidad_de_medida.id_unidad_medida = materia_prima.id_unidad_medida
INNER JOIN tipo_materia_prima ON tipo_materia_prima.id_tipo_materia = materia_prima.id_tipo_materia`;

//Obtener un solo registro
const getRawMaterialQ = `SELECT 
materia_prima.id_materia_prima,
materia_prima.cantidad,
materia_prima.costo,
unidad_de_medida.nombre AS unidad_medida,
tipo_materia_prima.nombre AS tipo_materia 
FROM materia_prima
INNER JOIN unidad_de_medida ON unidad_de_medida.id_unidad_medida = materia_prima.id_unidad_medida
INNER JOIN tipo_materia_prima ON tipo_materia_prima.id_tipo_materia = materia_prima.id_tipo_materia
WHERE id_materia_prima = $1`;

//Eliminar registro de materia prima
const deleteRawMaterialQ =
  "DELETE FROM materia_prima WHERE id_materia_prima = $1";

//Querys para el modulo material de empaque
//Obtener todos los registros de materia prima
const getAllPackingMaterialQ = `
SELECT material_empaque.id_empaque,
material_empaque.fecha,
material_empaque.costo,
tipo_empaque.nombre
FROM material_empaque
INNER JOIN tipo_empaque on tipo_empaque.id_empaque = material_empaque.id_tipo_empaque;`;

//Obtener un solo registro
const getPackingMaterialQ = `
SELECT material_empaque.id_empaque,
material_empaque.fecha,
material_empaque.costo,
tipo_empaque.nombre
FROM material_empaque
INNER JOIN tipo_empaque on tipo_empaque.id_empaque = material_empaque.id_tipo_empaque
WHERE id_tipo_empaque = $1`;

//Elminar un registro
const deletePackingMaterialQ =
  "DELETE FROM material_empaque WHERE id_tipo_empaque = $1";

//Querys para el modulo de compras
const getAllShippingsQ = `SELECT 
compras.id_compra,
compras.fecha,
compras.cantidad,
compras.precio_unitario,
compras.descuento,
compras.subtotal,
compras.total,
compras.no_comprobante,
compras.observaciones,
tipo_comprobante.nombre AS tipo_comprobante,
proveedor.nombre AS proveedor,
producto.nombre AS producto,
modo_pago.nombre AS modo_pago,
usuario.nombre AS usuario
FROM compras
INNER JOIN tipo_comprobante ON tipo_comprobante.id_tipo_comprobante = compras.id_tipo_comprobante
INNER JOIN proveedor ON proveedor.id_proveedor = compras.id_proveedor
INNER JOIN producto ON producto.id_producto = compras.id_producto
INNER JOIN modo_pago ON modo_pago.id_modo_pago = compras.id_modo_pago
INNER JOIN usuario ON usuario.id_usuario = compras.id_usuario`;
module.exports = {
  getSales,
  getSaleQ,
  insertSaleQ,
  deleteSaleQ,
  updateSaleQ,
  getInventoryQ,
  getAllProductsQ,
  getProductQ,
  deleteProductQ,
  getAllRawMaterialsQ,
  getRawMaterialQ,
  deleteRawMaterialQ,
  getAllPackingMaterialQ,
  getPackingMaterialQ,
  deletePackingMaterialQ,
  getAllShippingsQ,
};
