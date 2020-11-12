import { NextFunction, Request, Response } from "express"

import { SeguroFormModel, SeguroFormMongoModel } from "@db/seguroForm.model.mongo";

export const getSeguroById = (req: Request, res: Response, next: NextFunction) => 
{
  console.log(req.params);
  SeguroFormMongoModel.findOne({identifier: req.params.seguroId})
    .then((form) => {
      // if not found
      if (!form){
        return res.status(404).json({
          statusCode: 404,
          message: "Form Not Found"
        })
      }
      // if found
      console.log(`Form requested by id: ${form.identifier}\n`);
      return res.status(200).json({
        statusCode: 200,
        message: "Form Encontrado",
        content: {
          form: form,
        }
      })
    })
    .catch( (reason) => {
      return res.status(400).json({
        statusCode: 400,
        message: "Couldn't Find or Access Form"
      })
    })
}

export const receiveFormAnswer = (req: Request, res: Response, next: NextFunction) => 
{
  // do something with the form
  console.log(req.body);
  return res.status(201).json({
    message: "form enviado",
    statusCode: 201,
    form: req.body,
  })  
}

// either delete later, or add some authorization middleware
export const addForm = (req: Request, res: Response, next: NextFunction) => {
  let form = req.body as SeguroFormModel;
  let t0 = Date.now();
  SeguroFormMongoModel.create(form)
    .then( (value) => {
      let t1 = Date.now();
      console.log(`Form Salvo com sucesso em ${t1-t0} ms`);
      console.log(`Form:\n${value}`);
      return res.status(201).json({
        statusCode: 201,
        message: `Form by id: '${value.identifier}' created successfully`
      })
    })
    .catch( (reason) => {
      console.log(`Form couldn't be created:\n${reason}`);
      return res.status(400).json({
        statusCode: 400,
        message: "Form couldn't be created"
      })
    })
}