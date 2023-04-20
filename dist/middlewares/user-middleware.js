"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userValidation = void 0;
const users_schema_1 = require("../schemas/users-schema");
async function userValidation(req, res, next) {
    const data = req.body;
    try {
        const { error } = users_schema_1.userSchema.validate(data, { abortEarly: false });
        if (error) {
            const errors = error.details.map(detail => detail.message);
            return res.status(422).send(errors);
        }
        if (!error) {
            next();
        }
    }
    catch (err) {
        res.status(500).send('Server not running');
    }
}
exports.userValidation = userValidation;
