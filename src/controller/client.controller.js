import { pool } from "../db.js";

export const getClients = async (req, res) => {
    try {
        const {rows} = await pool.query("SELECT * FROM cliente");
        return res.json(rows);
    } catch (error) {
        console.log(error.message);
    }
};
