"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const errors_1 = require("../errors");
const adress_repository_1 = __importDefault(require("../repositories/adress-repository"));
async function createAdress(adress, userid) {
    const adressUser = await adress_repository_1.default.createAdress(adress, userid);
    return adressUser;
}
async function findUserAdress(userid) {
    const existAdress = await adress_repository_1.default.findAdress(userid);
    if (existAdress != null) {
        return false;
    }
    return true;
}
async function findAllAdress(userid) {
    const user = await adress_repository_1.default.findAdress(userid);
    const users = await adress_repository_1.default.findAllCeps();
    if (!user || !users) {
        throw (0, errors_1.notFoundError)();
    }
    return ({ User: user, Users: users });
}
const adressService = {
    createAdress,
    findUserAdress,
    findAllAdress
};
exports.default = adressService;
