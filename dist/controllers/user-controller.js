"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userPostSignIn = exports.userPostSignUp = void 0;
const user_service_1 = __importDefault(require("../services/user-service"));
const adress_service_1 = __importDefault(require("../services/adress-service"));
async function userPostSignUp(req, res) {
    const { email, password } = req.body;
    try {
        await user_service_1.default.createUser(email, password);
        return res.status(201).send("User Created");
    }
    catch (error) {
        if (error.name === "ConflictError") {
            return res.status(409).send("Usuário já cadastrado!");
        }
        return res.status(500).send(error);
    }
}
exports.userPostSignUp = userPostSignUp;
async function userPostSignIn(req, res) {
    const { email, password } = req.body;
    try {
        const data = await user_service_1.default.createSession(email, password);
        const adresExist = await adress_service_1.default.findUserAdress(data.userId);
        return res.status(200).send({ token: data.token, adress: adresExist });
    }
    catch (error) {
        if (error.name === "Forbidden") {
            return res.status(403).send("E-mail incorreto ou usuário não cadastrado!");
        }
        if (error.name === "UnauthorizedError") {
            return res.status(403).send("Senha incorreta ou usuário não cadastrado!");
        }
        return res.status(500).send(error);
    }
}
exports.userPostSignIn = userPostSignIn;
