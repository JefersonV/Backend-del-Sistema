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


                       //Query para funciones de pedidos
//query para hacer el llamado desde postgres y obtener toda la lista de pedidos
const getOrders =`SELECT * FROM getallOrder()`;
//query para hacer el llamado desde postgres y obtener específicamente un de pedidos
const getOrderQ =`SELECT * FROM getOrde($1)`;
//query para hacer el llamado desde postgres para agregar nuevo de pedidos
const insertOrderQ =`SELECT insertOrder($1,$2,$3,$4,$5)`;
//query para hacer el llamado desde postgres para eliminar un pedido
const deleteOrderQ =`DELETE FROM pedido_cliente WHERE id_pedido_cliente = $1`;
//query para hacer el llamado desde postgres para actualizar un  pedidos
const updateOrderQ =``;

                   //QUERY PARA OBTENER LOS DATOS DE MATERIA PRIMA
//Hacer el llamado  y mostrar toda la lista de materia prima
const getAllmaterial=`
SELECT 
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

const getMaterial=`
SELECT materia_prima.id_materia_prima,
materia_prima.fecha,
tipo_materia_prima.nombre AS tipo_materia, 
materia_prima.cantidad,
materia_prima.costo,
unidad_de_medida.nombre AS unidad_medida
FROM materia_prima
INNER JOIN unidad_de_medida ON unidad_de_medida.id_unidad_medida = materia_prima.id_unidad_medida
INNER JOIN tipo_materia_prima ON tipo_materia_prima.id_tipo_materia = materia_prima.id_tipo_materia
WHERE id_materia_prima = $1
`;
const insertMaterial =`
INSERT INTO materia_prima(id_tipo_materia, cantidad, id_unidad_medida, costo, fecha)
VALUES($1, $2, $3, $4, (SELECT CURRENT_DATE));
`;
const updateMaterial =`
UPDATE materia_prima SET id_tipo_materia = $1, cantidad = $2, id_unidad_medida = $3, costo = $4, fecha = (SELECT CURRENT_DATE)
WHERE id_materia_prima = $5;
`;
const deleteMaterial =`
DELETE FROM materia_prima WHERE id_materia_prima = $1
`;

         //QUERY PARA OBTENER LOS DATOS DE MATERIAL DE EMPAQUE
//Hacer el llamado  y mostrar toda la lista de material de empaque
const getAllParcking= `
SELECT material_empaque.id_empaque,
material_empaque.fecha,
material_empaque.costo,
tipo_empaque.nombre
FROM material_empaque
INNER JOIN tipo_empaque on tipo_empaque.id_tipo_empaque = material_empaque.id_tipo_empaque
ORDER BY id_empaque ASC;`;

const getParcking=`
SELECT material_empaque.id_empaque,
material_empaque.fecha,
material_empaque.costo,
tipo_empaque.nombre
FROM material_empaque
INNER JOIN tipo_empaque on tipo_empaque.id_tipo_empaque = material_empaque.id_tipo_empaque
WHERE material_empaque.id_empaque = $1
`;
const insertPacking=`
insert into material_empaque(fecha, costo, id_tipo_empaque)
values((select CURRENT_DATE), $1, $2);
`;
const updatePacking=`
UPDATE material_empaque 
SET fecha = (select CURRENT_DATE), costo = $1, id_tipo_empaque = $2
WHERE id_empaque = $3;
`;

const deletePacking=`
DELETE FROM material_empaque WHERE id__empaque = $1
`;

       //QUERY PARA OBTENER LOS DATOS DE Servicios
//Hacer el llamado  y mostrar toda la lista de Servicios
const getAllServiceQ=`
SELECT servicio_cafe.id_servicio_cafe,
servicio_cafe.fecha,
tipo_materia_prima.nombre AS materia_prima,
unidad_de_medida.nombre AS unidad_de_medida,
tipo_servicio.nombre AS servicio,
servicio_cafe.costo_servicio
FROM servicio_cafe
INNER JOIN tipo_materia_prima on tipo_materia_prima.id_tipo_materia = servicio_cafe.id_tipo_materia
INNER JOIN tipo_servicio on tipo_servicio.id_tipo_servicio = servicio_cafe.id_tipo_servicio
INNER JOIN unidad_de_medida on unidad_de_medida.id_unidad_medida = servicio_cafe.id_unidad_medida
ORDER BY id_servicio_cafe ASC;
`;
const getServiceQ=`

SELECT servicio_cafe.id_servicio_cafe,
servicio_cafe.fecha,
tipo_materia_prima.nombre AS materia_prima,
unidad_de_medida.nombre AS unidad_de_medida,
tipo_servicio.nombre AS servicio,
servicio_cafe.costo_servicio
FROM servicio_cafe
INNER JOIN tipo_materia_prima on tipo_materia_prima.id_tipo_materia = servicio_cafe.id_tipo_materia
INNER JOIN tipo_servicio on tipo_servicio.id_tipo_servicio = servicio_cafe.id_tipo_servicio
INNER JOIN unidad_de_medida on unidad_de_medida.id_unidad_medida = servicio_cafe.id_unidad_medida
WHERE servicio_cafe.id_servicio_cafe = $1
`;
const insertServiceQ=`
INSERT INTO servicio_cafe(fecha,id_tipo_materia, id_unidad_medida, id_tipo_servicio, costo_servicio)
VALUES((SELECT CURRENT_DATE), $1,$2,$3,$4);
`;
const updateServiceQ=`
UPDATE servicio_cafe 
SET fecha = (select CURRENT_DATE), id_tipo_materia = $1, id_unidad_medida=$2, id_tipo_servicio = $3, costo_servicio =$4
WHERE id_servicio_cafe = $5;
`;
const deleteServiceQ=`
DELETE FROM servicio_cafe WHERE id_servicio_cafe = $1

`;

//Query para obtener los datos en producción
const getAllProductionQ =`select * from getallProduccion()`;
const getProduccionQ=`SELECT * FROM getProduccionC($1)`;
const insertProductionQ=`SELECT insertProduccionC ($1,$2,$3,$4,$5,$6,$7) `;
const updateProductionQ =`SELECT updateProduccionC ($1,$2,$3,$4,$5,$6,$7,$8) `;
const deleteProductionQ =`DELETE FROM costo_produccion WHERE id_costo_produccion = $1`;


module.exports = {
  getSales,
  getSaleQ,
  insertSaleQ,
  deleteSaleQ,
  updateSaleQ,

  getOrders,
  getOrderQ,
  insertOrderQ,
  deleteOrderQ,
  updateOrderQ,

  getAllmaterial,
  getMaterial,
  insertMaterial,
  deleteMaterial,
  updateMaterial,

  getAllParcking,
  getParcking,
  insertPacking,
  updatePacking,
  deletePacking,

  getAllServiceQ,
  getServiceQ,
  insertServiceQ,
  updateServiceQ,
  deleteServiceQ,

  getAllProductionQ ,
 getProduccionQ,
 insertProductionQ,
 updateProductionQ,
 deleteProductionQ,

};
