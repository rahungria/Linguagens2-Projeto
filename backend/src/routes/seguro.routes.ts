import { Router } from "express";

import { getSeguroById } from "src/controllers/seguro.controller";

let router = Router();

router.get('/:seguroId', getSeguroById);

export { router as seguroRoutes }