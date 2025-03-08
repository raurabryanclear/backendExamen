import { pool } from "../db.js";

export const getSales = async (req, res) => {
    try {
        
        const {rows} = await pool.query("    SELECT po.precio, ve.cantidad, (po.precio*ve.cantidad) as total FROM producto po, ventas ve WHERE po.id_producto = ve.id ");
        return res.json(rows);
    } catch (error) {
        console.log(error.message);
    }
}