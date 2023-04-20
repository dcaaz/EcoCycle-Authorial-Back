"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.enrollmentSchema = void 0;
const joi_1 = __importDefault(require("joi"));
const brazilian_utils_1 = require("@brazilian-utils/brazilian-utils");
const cpfValidationSchema = joi_1.default.string().length(11).custom(joiCpfValidation).required();
const cepValidationSchema = joi_1.default.string().length(9).custom(JoiCepValidation).required();
const mobilePhoneValidationSchema = joi_1.default.string().min(14).max(15).custom(joiMobilePhoneValidation).required();
exports.enrollmentSchema = joi_1.default.object({
    name: joi_1.default.string().min(3).max(40).required(),
    cpf: cpfValidationSchema,
    birthday: joi_1.default.string().isoDate().required(),
    phone: mobilePhoneValidationSchema,
    cep: cepValidationSchema,
    street: joi_1.default.string().required(),
    city: joi_1.default.string().required(),
    number: joi_1.default.string().required(),
    state: joi_1.default.string()
        .length(2)
        .valid(...(0, brazilian_utils_1.getStates)().map((s) => s.code))
        .required(),
    neighborhood: joi_1.default.string().required(),
    addressDetail: joi_1.default.string().allow(null, "")
});
function joiCpfValidation(value) {
    if (!value)
        return value;
    if (!(0, brazilian_utils_1.isValidCPF)(value)) {
        return "CPF inváligo";
    }
    return value;
}
function JoiCepValidation(value) {
    if (!value)
        return value;
    if (!(0, brazilian_utils_1.isValidCEP)(value)) {
        return "CEP inválido";
    }
    return value;
}
function joiMobilePhoneValidation(value) {
    if (!value)
        return value;
    if (!(0, brazilian_utils_1.isValidMobilePhone)(value)) {
        return "Telefone inválido";
    }
    return value;
}
