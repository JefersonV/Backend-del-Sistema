const pool = require("../db");
const {
  sumaTotalVentasMes,
  bolsasVendidas,
  bolsasDisponibles,
  clientesFrecuentes,
  sumaVentasHoy,
} = require("../querys");

let fecha = new Date();
let anio = fecha.getFullYear();
let mes = fecha.getMonth() + 1;
let fechaCompleta = `${anio}-${mes}-01`;

const getSumaVentasMes = async (req, res, next) => {
  try {
    const result = await pool.query(sumaTotalVentasMes, [fechaCompleta]);
    // const result = await pool.query(sumaTotalVentasMes);
    if (result.rows[0].suma_total == null) {
      res.json([{ suma_total: 0 }]);
    } else {
      res.json(result.rows);
    }
  } catch (error) {
    next(error);
  }
};

const getBolsasVendidas = async (req, res, next) => {
  try {
    const result = await pool.query(bolsasVendidas, [fechaCompleta]);
    // const result = await pool.query(bolsasVendidas);
    if (result.rows[0].bolsas_vendidas == null) {
      res.json([{ bolsas_vendidas: 0 }]);
    } else {
      res.json(result.rows);
    }
  } catch (error) {
    next(error);
  }
};

const getBolsasDisponibles = async (req, res, next) => {
  try {
    const result = await pool.query(bolsasDisponibles);
    res.json(result.rows);
  } catch (error) {
    next(error);
  }
};

const getClientesFrecuentes = async (req, res, next) => {
  try {
    const result = await pool.query(clientesFrecuentes, [fechaCompleta]);
    let vecesCompra = [];
    // res.json(result.rows);
    result.rows.map((data) => {
      if (parseInt(data.veces, 10) > 5) {
        vecesCompras.push(data.veces);
      }
    });
    console.log(vecesCompra);
    res.json({ clientes_frecuentes: vecesCompra.length });
  } catch (error) {
    next(error);
  }
};

const getSumaVentasHoy = async (req, res, next) => {
  try {
    const result = await pool.query(sumaVentasHoy);
    // const result = await pool.query(sumaTotalVentasMes);
    if (result.rows[0].venta_total == null) {
      res.json([{ venta_total: 0 }]);
    } else {
      res.json(result.rows);
    }
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getSumaVentasMes,
  getBolsasVendidas,
  getBolsasDisponibles,
  getClientesFrecuentes,
  getSumaVentasHoy,
};
