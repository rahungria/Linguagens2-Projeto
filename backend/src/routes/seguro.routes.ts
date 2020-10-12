import { Router } from "express";

import { addForm, getSeguroById, receiveFormAnswer } from "@controller/seguro.controller";

let router = Router();

router.get('/:seguroId', getSeguroById);

router.post('/answer', receiveFormAnswer);

router.post('/add_form', addForm)

export { router as seguroRoutes }