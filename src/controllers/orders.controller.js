//conexión a la base de datos
const pool = require("../db")
const {
   getOrders,
  getOrderQ,
  insertOrderQ,
  deleteOrderQ,
  updateOrderQ,
}=require("../querys")

//controlador para obtener los pedidos
const getAllOrder = async (req, res, next) =>{
    try {
        const allOrder = await pool.query(getOrders);
    res.json (allOrder.rows);
    }catch(error){
        next (error);
    }
};
 
//controlador para obtener específicamente un pedido por medio del ID
const getOrder = async (req,res,next)=>{
    const { id } = req.params;
  try {
    const result = await pool.query(getOrderQ, [id]);

    if (result.rows.length === 0) {
      return res.status(404).json({
        message: "Este pedido no fue econtrado",
      });
    }
    res.json(result.rows[0]);
  } catch (error) {
    next(error);
  }
   
};

//controlador para crear un nuevo pedido
const createOrder = async (req,res,next)=>{
   const {
    cantidad_producto,
    descuento,
    id_cliente,
    id_producto,
    id_usuario,
   
   } = req.body;

 try { await pool.query(insertOrderQ, [
    cantidad_producto,
    descuento,
    id_cliente,
    id_producto,
    id_usuario,
   ]);
   res.sendStatus(204);

    }catch (error){
        next(error)
    }
};

//controlador para actualizar un pedido creada
const updateOrder = async (req,res, next)=>{
    const {id} = req.params;
    const {
        cantidad_producto,
        descuento,
        id_cliente,
        id_producto,
        id_usuario,
        
       
       } = req.body;
    
     try { await pool.query(updateOrderQ, [
        id,
        cantidad_producto,
        descuento,
        id_cliente,
        id_producto,
        id_usuario,
       ]);
    res.sendStatus(200);
}catch(error){
    next(error);
}
};

//controlador para eliminar un pedido
const deleteOrder = async (req,res, next)=>{
    const {id} = req.params;
    try{
        const resultado = await pool.query(deleteOrderQ, [id]);
        if(resultado.rowCount == 0){
            return res.status(400).json({
                message: "Este pedido no fue encontrado",
            });
        }
        res.sendStatus(204);
    }catch(error){
    next(error);
    }
};

module.exports= {
    getAllOrder,
    getOrder,
    createOrder,
    updateOrder,
    deleteOrder,
    
};