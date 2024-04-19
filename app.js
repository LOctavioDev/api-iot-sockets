import express, { json, urlencoded } from "express";
import morgan from "morgan";
import listsRouter from "./src/routes/lists.routes.js";

const app = express();

app.use(json());
app.use(urlencoded({ extended: false }));
app.use(morgan("dev"));  

app.use(listsRouter);   

export default app;
