import { NextFunction, Request, Response } from "express"

import { SeguroFormModel, SeguroFormMongoModel } from "@db/seguroForm.model.mongo";
import { Seguro, SeguroDBModel } from "@db/seguro.model.mongo";
import { Emailer } from "@config/email/emailer.config";

export const getSeguroFormByID = (req: Request, res: Response, next: NextFunction) => 
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
  Emailer.sendEmail({
    from:`<${req.body.email}>`,
    to: "me@pog.com",
    subject: "Formulario",
    text: req.body
  })
  return res.status(201).json({
    meta:{
      message: "Form sent and saved (not yet)",
      statusCode: 201,
    },
    content: {
      form: req.body,
    }
  })  
}

export const getSeguroByName = (req: Request, res: Response, next: NextFunction) =>
{
  Seguro.findOne({name: req.params.name})
  .then( 
    (seguro) => {
      if (!seguro) {
        return res.status(404).json({
          meta: {
            statusCode: 404,
            message: "Seguro not found"
          }
        })
      }

      return res.status(200).json({
        meta: {
          statusCode: 200,
          message: "Seguro found"
        },
        content: {
          seguro: seguro
        }
      })
    },
    (reason) => {
      return res.status(400).json({
        meta:{
          statusCode: 400,
          message: "Error" 
        }
      })
    }
  )
}

// debug only either delete later or authorize
export const addForm = (req: Request, res: Response, next: NextFunction) =>
{
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

export const addSeguro = (req: Request, res: Response, next: NextFunction) =>
{
  const seguro = req.body as SeguroDBModel;
  const t0 = Date.now();

  Seguro.create(seguro)
  .then(
    (val) => {
      if (!val){
        return res.status(400).json({
          meta:{
            statusCode: 400,
            message: "Weird Error"
          }
        })
      }
      const t1 = Date.now();
      console.log(`Seguro saved in: ${t1-t0} ms`)
      return res.status(201).json({
        meta: {
          statusCode: 201,
          message: "Seguro created successfuly"
        },
        content: {
          seguro: val
        }
      })
    },
    (reason) => {
      return res.status(400).json({
        meta: {
          statusCode: 400,
          message: "Unkown error saving Seguro"
        }
      })
    }
  )
}