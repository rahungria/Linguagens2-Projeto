const express       = require("express");
const body_parser   = require("body-parser");
const mongoose      = require("mongoose");

const app = express();

app.use(body_parser.json());

// Mongoose connect to database (during debug remember to update whitelisted IPs)
mongoose.set('useUnifiedTopology', true);
mongoose.connect("mongodb+srv://adm:GdaDfJCMMi96BYTB@turincorp.ow1uc.mongodb.net/<dbname>?retryWrites=true&w=majority", { useNewUrlParser: true })
  .then( () => {
    console.log("connection successful with mongoDB!");
  })
  .catch( () => {
    console.log("Connection Failed with mongoDB!");
  });

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



module.exports = app;
