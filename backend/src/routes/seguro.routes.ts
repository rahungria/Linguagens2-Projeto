import { Router } from "express";

import { getSeguroById, receiveFormAnswer } from "src/controllers/seguro.controller";

let router = Router();

router.get('/:seguroId', getSeguroById);

router.post('/answer', receiveFormAnswer);

export { router as seguroRoutes }