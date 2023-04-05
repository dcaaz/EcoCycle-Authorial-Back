import express, { json } from "express";
import cors from 'cors';
import dotenv from 'dotenv';
import { adressRouter, userRouter } from "./routers";

//importar rotas

dotenv.config();

const app = express();
app
    .use(cors())
    .use(json()) //receber req do cliente no formato json
    .get("/health", (_req, res) => res.send("OK!"))
    .use("/", userRouter)
    .use("/adress", adressRouter);

export default app;