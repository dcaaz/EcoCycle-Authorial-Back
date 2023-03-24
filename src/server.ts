import express, { json } from "express";
import cors from 'cors';
import dotenv from 'dotenv';

//importar rotas

dotenv.config();

const app = express();
app
    .use(cors())
    .use(json()) //receber req do cliente no formato json
    .get("/health", (_req, res) => res.send("OK!"));
/*  .use("/signin") //nome da rota */

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`Server running in port: ${PORT}`));