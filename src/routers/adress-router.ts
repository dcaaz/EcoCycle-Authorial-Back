import { Router } from "express";
import { cepsUsers, userPostAdress } from "../controllers/adress-controller";
import { authenticateToken } from "../middlewares/authentication-middleware";

const adressRouter = Router();

adressRouter
    .all("/*", authenticateToken)
    .post("/", userPostAdress)
    .get("/cep", cepsUsers);

export { adressRouter };