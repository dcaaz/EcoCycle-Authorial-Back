"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRouter = void 0;
const express_1 = require("express");
const user_middleware_1 = require("../middlewares/user-middleware");
const user_controller_1 = require("../controllers/user-controller");
//importar validação do token
const userRouter = (0, express_1.Router)();
exports.userRouter = userRouter;
userRouter
    .all("/", user_middleware_1.userValidation)
    .post("/signup", user_controller_1.userPostSignUp)
    .post("/signin", user_controller_1.userPostSignIn);
