import mongoose, {  } from "mongoose";
import { secrets } from "src/config/secrets/secrets";

/**
 * Function to be called once to connect to the mongo db
 * at the begining of execution
 */
let Connect = (conn_string:string) : Promise<typeof mongoose> => 
{
  // Mongoose connect to database (during debug remember to update whitelisted IPs)
  mongoose.set('useUnifiedTopology', true);
  mongoose.set('useCreateIndex', true);

  // BUSCAR DE "secrets.ts" ARQUIVO FORA DO VERSION CONTROL"
  return mongoose.connect(conn_string, { useNewUrlParser: true })
}

export { Connect }