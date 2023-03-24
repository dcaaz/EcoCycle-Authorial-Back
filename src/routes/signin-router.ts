import { Router } from "express";
//importar validação do token

const signInRoute = Router();

signInRoute
    .post("/");

export { signInRoute };