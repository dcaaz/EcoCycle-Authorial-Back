import { Request, Response } from "express";
import userService from "../services/user-service";

export async function userPost(req: Request, res: Response) {
    const { email, password } = req.body;
    
    try {
        const create = await userService.createUser(email, password);
        console.log("create", create);
        return res.status(201).send("User Created");
      } catch (error) {
        console.log("error usersPost", error.message);
        return res.status(500).send(error);
      }
}