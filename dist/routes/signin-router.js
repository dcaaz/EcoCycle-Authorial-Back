"use strict";
exports.__esModule = true;
exports.signInRoute = void 0;
var express_1 = require("express");
//importar validação do token
var signInRoute = (0, express_1.Router)();
exports.signInRoute = signInRoute;
signInRoute
    .post("/");
