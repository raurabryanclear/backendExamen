import { Router } from "express";
import { getClients } from "../controller/client.controller.js";
import { createClient } from "../controller/client.controller.js";
import {createsales} from "../controller/client.controller.js";
const router = Router();

router.get("/client", getClients);
router.post("/createclient", createClient);
router.post("/createsales", createsales);

export default router;
