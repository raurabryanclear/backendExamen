import { Router } from "express";
import { getClients } from "../controller/client.controller.js";
const router = Router();

router.get("/client",getClients) 

export default router;