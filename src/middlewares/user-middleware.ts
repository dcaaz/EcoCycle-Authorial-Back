import { NextFunction, Request, Response } from "express";
import { userSchema } from "../schemas/users-schema";

export async function userValidation(req: Request, res: Response, next: NextFunction) {
    const data = req.body;

    try{
        const { error } = userSchema.validate(data, { abortEarly: false });

        if (error) {
            const errors = error.details.map(detail => detail.message);
            return res.status(422).send(errors);
        }

        if(!error){
            next();
        }
        
    }catch(err){
        res.status(500).send('Server not running');
    }
}