"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.adressRouter = void 0;
const express_1 = require("express");
const adress_controller_1 = require("../controllers/adress-controller");
const authentication_middleware_1 = require("../middlewares/authentication-middleware");
const adressRouter = (0, express_1.Router)();
exports.adressRouter = adressRouter;
adressRouter
    .all("/*", authentication_middleware_1.authenticateToken)
    .post("/", adress_controller_1.userPostAdress)
    .get("/cep", adress_controller_1.cepsUsers);
