import { Router } from "express";

import {
  addButacaBalcon,
  addButacaPlatea,
  saleButaca,
  solds,
  collected,
  apported
} from "../controllers/butaca.controller.js";

const router = Router();

router.post("/create/balcon", addButacaBalcon);
router.post("/create/platea", addButacaPlatea);
router.post("/sale:type", saleButaca);
router.get("/soldes", solds);
router.get("/collect", collected);
router.get("/apport", apported);

export default router;