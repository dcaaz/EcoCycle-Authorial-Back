import { Router } from "express";
import { userValidation } from "../middlewares/user-middleware";
import { userPost } from "../controllers/user-controller";
//importar validação do token

const userRouter = Router();

userRouter
    .post("/", userValidation, userPost);

export { userRouter };