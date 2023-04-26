"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const user_repository_1 = __importDefault(require("../repositories/user-repository"));
const errors_1 = require("../errors");
const bcrypt_1 = __importDefault(require("bcrypt"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
async function createUser(email, password) {
    const userExist = await user_repository_1.default.findeUserByEmail(email);
    if (userExist != null) {
        throw (0, errors_1.conflictError)();
    }
    const hashedPassword = await bcrypt_1.default.hash(password, 12);
    const createNewUser = await user_repository_1.default.createUser(email, hashedPassword);
    return createNewUser;
}
async function createSession(email, password) {
    const user = await user_repository_1.default.findeUserByEmail(email);
    if (!user) {
        throw (0, errors_1.forbidden)();
    }
    const validePassword = await bcrypt_1.default.compare(password, user.password);
    if (validePassword != true) {
        throw (0, errors_1.unauthorizedError)();
    }
    const userId = user.id;
    const userToken = jsonwebtoken_1.default.sign({ userId }, process.env.JWT_SECRET);
    const { token } = await user_repository_1.default.createSessionUser(userId, userToken);
    return ({ token, userId });
}
const userService = {
    createUser,
    createSession
};
exports.default = userService;
