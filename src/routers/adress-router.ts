import { Router } from "express";
import { cepsUsers, userPostAdress } from "@/controllers/adress-controller";
import { authenticateToken } from "@/middlewares/authentication-middleware";
//importar validação do token

const adressRouter = Router();

adressRouter
    .all("/", authenticateToken)
    .post("/", userPostAdress)
    .get("/cep", cepsUsers);

export { adressRouter };