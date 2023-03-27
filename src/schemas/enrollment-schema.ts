import joi from 'joi';
import { getStates, isValidCEP, isValidCPF, isValidMobilePhone } from '@brazilian-utils/brazilian-utils';

const cpfValidationSchema = joi.string().length(11).custom(joiCpfValidation).required();

const cepValidationSchema = joi.string().length(9).custom(JoiCepValidation).required();

const mobilePhoneValidationSchema = joi.string().min(14).max(15).custom(joiMobilePhoneValidation).required();

export const enrollmentSchema = joi.object({
    name: joi.string().min(3).max(40).required(),
    cpf: cpfValidationSchema,
    birthday: joi.string().isoDate().required(),
    phone: mobilePhoneValidationSchema,
    cep: cepValidationSchema,
    street: joi.string().required(),
    city: joi.string().required(),
    number: joi.string().required(),
    state: joi.string()
        .length(2)
        .valid(...getStates().map((s) => s.code))
        .required(),
    neighborhood: joi.string().required(),
    addressDetail: joi.string().allow(null, "")
});

function joiCpfValidation(value: string) {
    if (!value) return value;

    if (!isValidCPF(value)) {
        return "CPF inváligo";
    }

    return value;
}

function JoiCepValidation(value: string) {
    if (!value) return value;

    if (!isValidCEP(value)) {
        return "CEP inválido";
    }

    return value;
}

function joiMobilePhoneValidation(value: string) {
    if (!value) return value;

    if (!isValidMobilePhone(value)) {
        return "Telefone inválido";
    }

    return value;
}
