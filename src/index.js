import app from "./app.js";
import database from "./database.js";
import dotenv from 'dotenv';
dotenv.config();

const PORT= process.env.PORT;

app.listen(PORT,()=>{
console.log("Run Server on port: "+ PORT);
});
