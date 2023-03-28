import { Router } from "express";
import { userValidation } from "../middlewares/user-middleware";
//importar validação do token

const userRouter = Router();

userRouter
    .post("/", userValidation);

export { userRouter };