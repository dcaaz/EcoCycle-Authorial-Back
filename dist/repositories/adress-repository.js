"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = __importDefault(require("../config/database"));
async function findAdress(userid) {
    return database_1.default.adress.findFirst({
        where: {
            userid
        },
        select: {
            cep: true
        }
    });
}
async function findAllCeps() {
    return database_1.default.adress.findMany({
        select: {
            cep: true,
            name: true,
            neighborhood: true,
            phone: true,
            profile: true
        }
    });
}
async function createAdress(adress, userid) {
    return database_1.default.adress.create({
        data: {
            userid,
            name: adress.name,
            cep: adress.cep,
            street: adress.street,
            number: adress.number,
            complement: adress.complement,
            reference: adress.reference,
            city: adress.city,
            state: adress.state,
            neighborhood: adress.neighborhood,
            phone: adress.phone,
            profile: adress.profile
        }
    });
}
const adressRepository = {
    createAdress,
    findAdress,
    findAllCeps
};
exports.default = adressRepository;
