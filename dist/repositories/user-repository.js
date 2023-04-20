"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = __importDefault(require("../config/database"));
async function findeUserByEmail(email) {
    return database_1.default.user.findFirst({
        where: {
            email
        }
    });
}
async function createUser(email, hashedPassword) {
    return database_1.default.user.create({
        data: {
            email,
            password: hashedPassword
        }
    });
}
async function createSessionUser(userId, userToken) {
    return database_1.default.session.create({
        data: {
            userid: userId,
            token: userToken
        }
    });
}
const userRepository = {
    createUser,
    findeUserByEmail,
    createSessionUser
};
exports.default = userRepository;
