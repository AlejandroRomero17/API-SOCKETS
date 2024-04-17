import express from "express";
import morgan from "morgan";
import { config } from "dotenv";
config()
import listasRouter from './src/routes/list.routes.js'
const app = express();

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(morgan('dev'));
app.use(express.static('src'));


app.use(listasRouter);

export default app;