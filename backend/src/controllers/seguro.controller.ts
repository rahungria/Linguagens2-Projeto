import { NextFunction, Request, Response } from "express"

export const getSeguroById = (req: Request, res: Response, next: NextFunction) => 
{
  console.log(req.params);
  res.status(200).json({params: req.params, message: "bom dia teste router"});  
}

export const receiveFormAnswer = (req: Request, res: Response, next: NextFunction) => 
{
  console.log(req.body);
  res.status(201).json({
    message: "form enviado",
    statusCode: 201,
    form: req.body,
  })  
}