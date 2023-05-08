import { Router } from "express";

import {
  addButacaBalcon,
  addButacaPlatea,
  listButacas,
  saleButaca,
  solds,
  collected,
  apported
} from "../controllers/butaca.controller.js";

const router = Router();

router
  .post("/create/balcon", addButacaBalcon)
  .post("/create/platea", addButacaPlatea)
  .get("/list/butacas", listButacas)
  .post("/sale", saleButaca)
  .get("/soldes", solds)
  .get("/collect", collected)
  .get("/apport", apported);

export default router;