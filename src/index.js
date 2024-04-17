import app from "./app.js";
import database from "./database.js";
import dotenv from 'dotenv';
dotenv.config();

const port= process.env.PORT;

app.listen(port,()=>{
console.log("Run Server on port: "+port);
});
