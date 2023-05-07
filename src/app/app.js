import express from "express";
import manageButaca from "../routes/butaca.routes.js";
import manageTheater from "../routes/teather.routes.js";

const app = express();

// Middlewares
app.use(express.json());
app.use("/api/v1", manageButaca);
app.use("/api/v1", manageTheater);

export default app;