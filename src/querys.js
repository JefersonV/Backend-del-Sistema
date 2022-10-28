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
const getInventoryQ = `SELECT * 
FROM inventario_movimiento
WHERE inventario_movimiento.fecha = '2022-10-14'
ORDER BY id_inventario_movimiento ASC;`;
//WHERE inventario_movimiento.fecha = (SELECT CURRENT_DATE);`;

const getAllProductsQ = `SELECT
producto.id_producto, 
producto.nombre AS producto, 
costo_produccion.precio_venta,
costo_produccion.costo_por_libra AS costo_compra,
producto.stock_actual, 
producto.stock_minimo,
unidad_de_medida.nombre AS unidad_medida
FROM producto
INNER JOIN unidad_de_medida ON unidad_de_medida.id_unidad_medida = producto.id_unidad_medida
INNER JOIN costo_produccion ON costo_produccion.id_unidad_medida = producto.id_unidad_medida
ORDER BY id_producto ASC`;

//Obtener un solo producto
const getProductQ = `SELECT
producto.id_producto, 
producto.nombre AS producto, 
costo_produccion.precio_venta,
costo_produccion.costo_por_libra AS costo_compra,
producto.stock_actual, 
producto.stock_minimo,
unidad_de_medida.nombre AS unidad_medida
FROM producto
INNER JOIN unidad_de_medida ON unidad_de_medida.id_unidad_medida = producto.id_unidad_medida
INNER JOIN costo_produccion ON costo_produccion.id_unidad_medida = producto.id_unidad_medida
WHERE id_producto = $1`;
// costo_produccion.precio_venta,
// INNER JOIN costo_produccion ON costo_produccion.id_unidad_medida = producto.id_unidad_medida

//Ingreso de producto
const createProductQ = `SELECT insertproduct($1, $2, $3, $4, $5, $6);`;

//Actualizar producto
const updateProductQ = `select updateProduct($1, $2, $3, $4, $5, $6, $7);`;

//Eliminar un producto
const deleteProductQ = `DELETE FROM producto WHERE id_producto = $1`;

//Querys para el modulo de materia prima
//Obtener todos los registros
const getAllRawMaterialsQ = `SELECT 
materia_prima.id_materia_prima,
materia_prima.fecha,
tipo_materia_prima.nombre AS tipo_materia, 
materia_prima.cantidad,
materia_prima.costo,
unidad_de_medida.nombre AS unidad_medida
FROM materia_prima
INNER JOIN unidad_de_medida ON unidad_de_medida.id_unidad_medida = materia_prima.id_unidad_medida
INNER JOIN tipo_materia_prima ON tipo_materia_prima.id_tipo_materia = materia_prima.id_tipo_materia
ORDER BY id_materia_prima ASC;`;

//Obtener un solo registro
const getRawMaterialQ = `SELECT 
materia_prima.id_materia_prima,
materia_prima.fecha,
tipo_materia_prima.nombre AS tipo_materia, 
materia_prima.cantidad,
materia_prima.costo,
unidad_de_medida.nombre AS unidad_medida
FROM materia_prima
INNER JOIN unidad_de_medida ON unidad_de_medida.id_unidad_medida = materia_prima.id_unidad_medida
INNER JOIN tipo_materia_prima ON tipo_materia_prima.id_tipo_materia = materia_prima.id_tipo_materia
WHERE id_materia_prima = $1`;

//Ingreso de materia prima
const createRawMaterialQ = `INSERT INTO materia_prima(id_tipo_materia, cantidad, id_unidad_medida, costo, fecha)
VALUES($1, $2, $3, $4, (SELECT CURRENT_DATE));`;

//Actulizar un registro de materi prima
const updateRawMaterialQ = `UPDATE materia_prima SET id_tipo_materia = $1, cantidad = $2, id_unidad_medida = $3, costo = $4, fecha = (SELECT CURRENT_DATE)
WHERE id_materia_prima = $5;`;

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
INNER JOIN tipo_empaque on tipo_empaque.id_empaque = material_empaque.id_tipo_empaque
ORDER BY id_empaque ASC;`;

//Obtener un solo registro
const getPackingMaterialQ = `
SELECT material_empaque.id_empaque,
material_empaque.fecha,
material_empaque.costo,
tipo_empaque.nombre
FROM material_empaque
INNER JOIN tipo_empaque on tipo_empaque.id_empaque = material_empaque.id_tipo_empaque
WHERE material_empaque.id_empaque = $1`;

//Ingresar material de empaque
const createPackingMaterialQ = `insert into material_empaque(fecha, costo, id_tipo_empaque)
values((select CURRENT_DATE), $1, $2);`;

//Actualizar material de empaque
const updatePackingMaterialQ = `UPDATE material_empaque 
SET fecha = (select CURRENT_DATE), costo = $1, id_tipo_empaque = $2
WHERE id_empaque = $3;`;

//Elminar un registro
const deletePackingMaterialQ =
  "DELETE FROM material_empaque WHERE id_tipo_empaque = $1";

//Querys para el submodulo devoluiones sobre compras
//Obtener todos los registros
const getAllReturnsProvidersQ = `select 
devolucion_proveedor.id_devolucion_proveedor,
proveedor.nombre as proveedor,
producto.nombre as producto,
compras.cantidad,
compras.total,
transportista.nombre as transportista,
devolucion_proveedor.detalle_devolucion
from devolucion_proveedor
inner join transportista on transportista.id_transportista = devolucion_proveedor.id_transportista
inner join compras on compras.id_compra = devolucion_proveedor.id_compra
inner join proveedor on proveedor.id_proveedor = compras.id_proveedor
inner join producto on producto.id_producto = compras.id_producto
ORDER BY devolucion_proveedor.id_devolucion_proveedor ASC;`;

//Querys para el submodulo dev sobre ventas
//Obtener todos los registros
const getAllReturnsSalesQ = `select
devolucion_cliente.id_dev_cliente,
cliente.nombre as cliente,
devolucion_cliente.fecha,
producto.nombre as producto,
venta.cantidad,
venta.total,
devolucion_cliente.detalle_devolucion
from devolucion_cliente
inner join cliente ON cliente.id_cliente = devolucion_cliente.id_cliente
inner join venta on venta.id_venta = devolucion_cliente.id_venta
inner join producto on producto.id_producto = venta.id_producto
ORDER BY devolucion_cliente.id_dev_cliente ASC`;

//Querys para el modulo de compras
const getAllShippingsQ = `
select
	id_compra,
	proveedor.nombre as proveedor,
	fecha,
	total,
	tipo_comprobante.nombre as tipo_comprbante,
	modo_pago.nombre as modo_pago
from compras
	inner join tipo_comprobante on tipo_comprobante.id_tipo_comprobante = compras.id_tipo_comprobante
	inner join proveedor on proveedor.id_proveedor = compras.id_proveedor
	inner join modo_pago on modo_pago.id_modo_pago = compras.id_modo_pago
	ORDER BY id_compra DESC;`;

const updateShoppingQ = `UPDATE compras 
SET fecha = CURRENT_DATE, cantidad = $1, precio_unitario = $2, descuento = $3, 
subtotal = $4, total = $5, no_comprobante = $6, observaciones = $7, id_tipo_comprobante = $8,
id_proveedor = $9, id_producto=$10, id_modo_pago=$11
WHERE id_compra=$12;`;

module.exports = {
  getSales,
  getSaleQ,
  insertSaleQ,
  deleteSaleQ,
  updateSaleQ,
  getInventoryQ,
  getAllProductsQ,
  getProductQ,
  createProductQ,
  updateProductQ,
  deleteProductQ,
  getAllRawMaterialsQ,
  getRawMaterialQ,
  createRawMaterialQ,
  updateRawMaterialQ,
  deleteRawMaterialQ,
  getAllPackingMaterialQ,
  getPackingMaterialQ,
  createPackingMaterialQ,
  updatePackingMaterialQ,
  deletePackingMaterialQ,
  getAllShippingsQ,
  getAllReturnsProvidersQ,
  getAllReturnsSalesQ,
  updateShoppingQ,
};
