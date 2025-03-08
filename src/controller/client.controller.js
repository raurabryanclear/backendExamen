import { pool } from "../db.js";

export const getClients = async (req, res) => {
  try {
    const { rows } = await pool.query("SELECT * FROM cliente");
    return res.json(rows);
  } catch (error) {
    console.log(error.message);
  }
};

export const createClient = async (req, res) => {
  const data = req.body;
  const { rows } = await pool.query(
    "INSERT INTO cliente (id_cliente,nombre_cl, apellido,telefono,direccion, email) VALUES ($1, $2, $3, $4,$5,$6) RETURNING *",
    [data.id_cliente, data.nombre_cl, data.apellido, data.telefono, data.direccion, data.email, ]
  );
  return res.json(rows[0]);
};


export const createsales = async (req, res) => {
  const data = req.body;
  const { rows } = await pool.query(
    "INSERT INTO ventas (id_cliente,id_producto, cantidad) VALUES ($1, $2, $3) RETURNING *",
    [data.id_cliente, data.id_producto, data.cantidad]
  );
  return res.json(rows[0]);
}
