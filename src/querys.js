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
const getInventoryQ = `SELECT 
id_inventario_movimiento,
(select puesto as responsable from usuario where id_usuario = inventario_movimiento.id_usuario),
fecha,
tipo_operacion,
descuento,
total_operacion,
(select nombre as modo_pago from modo_pago where id_modo_pago = inventario_movimiento.id_modo_pago),
(select nombre as cliente from cliente where id_cliente = inventario_movimiento.id_cliente),
(select nombre as proveedor from proveedor where id_proveedor = inventario_movimiento.id_proveedor)
FROM inventario_movimiento
WHERE inventario_movimiento.fecha = (SELECT CURRENT_DATE)
ORDER BY id_inventario_movimiento DESC;`;
//WHERE inventario_movimiento.fecha = (SELECT CURRENT_DATE);`;

const getAllProductsQ = `SELECT
producto.id_producto, 
producto.nombre AS producto, 
producto.precio_venta,
costo_produccion.costo_por_libra AS costo_compra,
producto.stock_actual, 
producto.stock_minimo,
unidad_de_medida.nombre AS unidad_medida,
tipo_producto.nombre as tipo_producto
FROM producto
INNER JOIN unidad_de_medida ON unidad_de_medida.id_unidad_medida = producto.id_unidad_medida
INNER JOIN costo_produccion ON costo_produccion.id_unidad_medida = producto.id_unidad_medida
INNER JOIN tipo_producto ON tipo_producto.id_tipo_producto = producto.tipo_producto
ORDER BY id_producto DESC`;

//Obtener un solo producto
const getProductQ = `SELECT
producto.id_producto, 
producto.nombre AS producto, 
producto.precio_venta,
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
ORDER BY id_materia_prima DESC;`;

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
INNER JOIN tipo_empaque on tipo_empaque.id_tipo_empaque = material_empaque.id_tipo_empaque
ORDER BY id_empaque DESC;`;

//Obtener un solo registro
const getPackingMaterialQ = `
SELECT material_empaque.id_empaque,
material_empaque.fecha,
material_empaque.costo,
tipo_empaque.nombre
FROM material_empaque
INNER JOIN tipo_empaque on tipo_empaque.id_tipo_empaque = material_empaque.id_tipo_empaque
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
  "DELETE FROM material_empaque WHERE id_empaque = $1";

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
ORDER BY devolucion_proveedor.id_devolucion_proveedor DESC;`;

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
ORDER BY devolucion_cliente.id_dev_cliente DESC`;

//Querys para el modulo de compras
// const getAllShippingsQ = `SELECT
// compras.id_compra,
// compras.fecha,
// compras.cantidad,
// compras.precio_unitario,
// compras.descuento,
// compras.subtotal,
// compras.total,
// compras.no_comprobante,
// compras.observaciones,
// tipo_comprobante.nombre AS tipo_comprobante,
// proveedor.nombre AS proveedor,
// producto.nombre AS producto,
// modo_pago.nombre AS modo_pago,
// usuario.nombre AS usuario
// FROM compras
// INNER JOIN tipo_comprobante ON tipo_comprobante.id_tipo_comprobante = compras.id_tipo_comprobante
// INNER JOIN proveedor ON proveedor.id_proveedor = compras.id_proveedor
// INNER JOIN producto ON producto.id_producto = compras.id_producto
// INNER JOIN modo_pago ON modo_pago.id_modo_pago = compras.id_modo_pago
// INNER JOIN usuario ON usuario.id_usuario = compras.id_usuario
// ORDER BY id_compra ASC;`;

//QUERYS PARA TABLA CLIENTES
//Query para obtener todos los clientes

const getAllClientsQ = `SELECT
id_cliente,
nombre,
telefono,
correo,
direccion,
nit
FROM cliente
ORDER BY id_cliente DESC`;

//Obtener un solo cliente
const getClientQ = `SELECT
id_cliente,
nombre,
telefono,
correo,
direccion,
nit
FROM cliente WHERE id_cliente = $1`;

//Querys para registar clientes
const insertClient = `INSERT INTO cliente(nombre, telefono, correo, direccion, nit)
VALUES($1, $2, $3, $4, $5)`;

//Query para actualizar cliente
const updateClientQ = `UPDATE cliente 
SET nombre = $1, telefono = $2, correo = $3, direccion = $4, nit = $5
WHERE id_cliente = $6`;

//Query para eliminar cliente
const deleteClientQ = `DELETE FROM cliente WHERE id_cliente = $1`;

//QUERY PARA LA TABLA COMPRA

//Query para obtener las compras
const getAllShippingsQ = `select
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

//Query para obtener una compra
const getShoppingQ = `select
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
WHERE id_compra = $1
ORDER BY id_compra DESC;`;

`INSERT INTO 
compras(fecha, cantidad, precio_unitario, descuento, subtotal, 
  total, no_comprobante, observaciones, id_tipo_comprobante, 
  id_proveedor, id_producto, id_modo_pago) 
VALUES (CURRENT_DATE, $1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11)`;

//Actualizar una compra
const updateShoppingQ = `UPDATE compras 
SET fecha = CURRENT_DATE, cantidad = $1, precio_unitario = $2, descuento = $3, 
subtotal = $4, total = $5, no_comprobante = $6, observaciones = $7, id_tipo_comprobante = $8,
id_proveedor = $9, id_producto=$10, id_modo_pago=$11
WHERE id_compra = $12`;

//Querys para el dashboard
//Obtener el total de las ventas para el mes en curso
// const sumaTotalVentasMes = `select getSumaTotalVentasMes($1) as suma_total;`;
const sumaTotalVentasMes = `select sum(total) as suma_total
from venta
where fecha between $1 and current_date;`;
// where fecha between '2022-10-01' and '2022-10-31';`;

//Obtener el total de las bolsas vendidas para el mes en curso
const bolsasVendidas = `select sum(cantidad) as bolsas_vendidas
from venta
where fecha between $1 and current_date;`;
// where fecha between '2022-10-01' and '2022-10-31';`;

//Obtener las bolsas disponibles para la venta
const bolsasDisponibles = `select sum(stock_actual) as bolsas_disponibles
from producto;`;

//Obtener los clientes frecuentes
const clientesFrecuentes = `select cliente.nombre, venta.id_cliente, count(venta.id_cliente) as veces
from venta
inner join cliente on cliente.id_cliente = venta.id_cliente
where fecha between $1 and current_date
group by venta.id_cliente, cliente.nombre;`;
// where fecha between '2022-10-01' and '2022-10-31'

//Obtener el total de las ventas de hoy
const sumaVentasHoy = `select sum(total) as venta_total 
from venta where fecha = current_date;`;

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
  insertClient,
  getAllClientsQ,
  getClientQ,
  updateClientQ,
  deleteClientQ,
  getShoppingQ,
  updateShoppingQ,
  sumaTotalVentasMes,
  bolsasVendidas,
  bolsasDisponibles,
  clientesFrecuentes,
  sumaVentasHoy,
};
