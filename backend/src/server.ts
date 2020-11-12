import express from "express";
import body_parser from "body-parser";

import { router } from "@src/router";
import { Connect } from "@config/dbconnection";
import { secrets } from "@config/secrets/secrets";
import { Emailer } from "@config/email/emailer.config"

Emailer.setUpTransporter();


Connect(secrets.mongodb_connection_string)
  .then((conn) => {
    console.log("Connection Successful")
  })
  .catch((reason) => {
    console.log("Connection Failed:\n" + reason);    
  })

const app = express();
app.use(body_parser.urlencoded({extended: true}));
app.use(body_parser.json());

// CORS
app.use((req,res,next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS"
  )
  next();
});

app.use(router);

const port = process.env.PORT || "3000";
console.log("running on port: " + port);
app.listen(port);

