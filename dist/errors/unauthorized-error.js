"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.unauthorizedError = void 0;
function unauthorizedError() {
    return {
        name: "UnauthorizedError",
        message: "Sem acesso a esse recurso",
    };
}
exports.unauthorizedError = unauthorizedError;
//401
