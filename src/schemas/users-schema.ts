import joi from "joi";

export const signUpSchema = joi.object({
    email: joi.string().email().required(),
    password: joi.string().required(),
    confirmPassword: joi.ref("password")
});

export const signInSchema = joi.object({
    email: joi.string().email().required(),
    password: joi.string().required()
});

