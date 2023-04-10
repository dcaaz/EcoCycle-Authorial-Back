import { Router } from "express";
import { userPostAdress } from "@/controllers/adress-controller";
import { authenticateToken } from "@/middlewares/authentication-middleware";
//importar validação do token

const adressRouter = Router();

adressRouter
    .all("/", authenticateToken)
    .post("/", userPostAdress);

export { adressRouter };