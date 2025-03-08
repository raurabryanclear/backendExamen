import express from "express";
import morgan from "morgan";
import { PORT } from "./config.js";
import clientRoutes from "./routes/client.routes.js";
import ventasRoutes from "./routes/ventas.routes.js";

const app = express();
app.use(express.json());
app.use(morgan("dev"));
app.use(clientRoutes);
app.use(ventasRoutes);


app.listen(PORT);
console.log("Server on port", PORT);
