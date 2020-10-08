import express from "express";
import body_parser from "body-parser";
import mongoose from "mongoose";

import { secrets } from "./secrets/secrets";

const app = express();

app.use(body_parser.json());

// Mongoose connect to database (during debug remember to update whitelisted IPs)
mongoose.set('useUnifiedTopology', true);

// BUSCAR DE "secrets.ts" ARQUIVO FORA DO VERSION CONTROL"
mongoose.connect(secrets.mongodb_connection_string, { useNewUrlParser: true })
  .then((mong) => {
    console.log(`[Connection Successfull] DB: ${mong.connection.name}`)
  },
  // connection failed
  (reason) => {
    console.log("[Connection Failed!]");
  })


// CORS
app.use((req,res,next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET"
  )
  next();
});

export { app };
