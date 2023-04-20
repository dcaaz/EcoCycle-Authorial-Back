import prisma from "../config/database";
import { NextFunction } from "express";
import { Response, Request } from "express";
import * as jwt from "jsonwebtoken";

export async function authenticateToken(req: AuthenticatedRequest, res: Response, next: NextFunction) {
    const { authorization } = req.headers;

    const token = authorization?.replace("Bearer ", "");

    if (!token) {
        return res.status(401).send("Token inexistente!");
    }

    try{
        const { userId } = jwt.verify(token, process.env.JWT_SECRET) as JWTPayload;

        const session = await prisma.session.findFirst({
            where: {
              token
            }
          })


        if(!session){
            return res.status(401).send("Token inválido!");
        }

        req.userId = userId;

        return next();
    } catch (err) {
        return res.sendStatus(500);
    }
}

export type AuthenticatedRequest = Request & JWTPayload;

type JWTPayload = {
  userId: number;
};

