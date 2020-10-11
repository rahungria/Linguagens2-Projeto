import mongoose, {  } from "mongoose";
import { secrets } from "src/config/secrets/secrets";

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