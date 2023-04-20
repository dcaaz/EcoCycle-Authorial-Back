"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.cepsUsers = exports.userPostAdress = void 0;
const adress_service_1 = __importDefault(require("../services/adress-service"));
async function userPostAdress(req, res) {
    const adress = req.body;
    const userId = req.userId;
    try {
        await adress_service_1.default.createAdress(adress, userId);
        return res.status(201).send("Criado");
    }
    catch (error) {
        return res.status(500).send(error);
    }
}
exports.userPostAdress = userPostAdress;
async function cepsUsers(req, res) {
    const userId = req.userId;
    try {
        const allAdres = await adress_service_1.default.findAllAdress(userId);
        return res.status(200).send(allAdres);
    }
    catch (error) {
        if (error.name === "NotFoundError") {
            return res.status(404).send(error.message);
        }
        return res.status(500).send(error);
    }
}
exports.cepsUsers = cepsUsers;
