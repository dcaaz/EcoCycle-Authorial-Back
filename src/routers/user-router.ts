import { Router } from "express";
import { userValidation } from "../middlewares/user-middleware";
import { userPostSignUp, userPostSignIn } from "../controllers/user-controller";
//importar validação do token

const userRouter = Router();

userRouter
    .all("/", userValidation)
    .post("/signup", userPostSignUp)
    .post("/signin", userPostSignIn);

export { userRouter };