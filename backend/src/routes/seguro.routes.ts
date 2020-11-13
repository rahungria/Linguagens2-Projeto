import { Router } from "express";

import { addForm, addSeguro, getSeguroByName, getSeguroFormByID, receiveFormAnswer } from "@controller/seguro.controller";

let router = Router();

router.get('/:name', getSeguroByName);
router.get('/form/:seguroId', getSeguroFormByID);

router.post('/answer', receiveFormAnswer);

router.post('/form/create', addForm)
router.post('/create', addSeguro)

export { router as seguroRoutes }