import { Request, Response } from "express";
import userService from "../services/user-service";

export async function userPostSignUp(req: Request, res: Response) {
  const { email, password } = req.body;

  try {
    const create = await userService.createUser(email, password);
    console.log("create", create);
    return res.status(201).send("User Created");
  } catch (error) {
    if (error.name === "ConflictError") {
      return res.status(409).send(error.name);
    }
    return res.status(500).send(error);
  }
}

export async function userPostSignIn(req: Request, res: Response) {
  const { email, password } = req.body;

  try {
    const token = await userService.createSession(email, password);

    return res.status(201).send(token);

  } catch (error) {
    return res.status(500).send(error);
  }
}