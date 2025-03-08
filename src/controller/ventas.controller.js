import { pool } from "../db.js";

export const getSales = async (req, res) => {
    try {
        
        const {rows} = await pool.query(" SELECT ve.id, ve.id_cliente, ve.id_producto, ve.cantidad, po.precio, (po.precio*ve.cantidad) as total,  ve.fecha_compra FROM producto po, ventas ve  WHERE po.id_producto = ve.id ");
        return res.json(rows);
    } catch (error) {
        console.log(error.message);
    }
}