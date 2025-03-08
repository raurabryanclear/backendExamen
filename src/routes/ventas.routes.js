import { Router } from "express";
import { getSales } from "../controller/ventas.controller.js";
const router = Router();

router.get("/ventas",getSales)
export default router;