// import { router } from 'src/router';
import { router } from "@src/router";
import express from "express";
import body_parser from "body-parser";

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
app.listen(port);
console.log("running on port: " + port);

