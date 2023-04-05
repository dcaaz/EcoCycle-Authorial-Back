import { Request, Response } from "express";
import userService from "../services/user-service";

export async function userPostSignUp(req: Request, res: Response) {
  const { email, password } = req.body;

  try {

    await userService.createUser(email, password);
    return res.status(201).send("User Created");

  } catch (error) {

    if (error.name === "ConflictError") {
      return res.status(409).send("Usuário já cadastrado!");
    }
    return res.status(500).send(error);

  }
}

export async function userPostSignIn(req: Request, res: Response) {
  const { email, password } = req.body;

  try {
    const token = await userService.createSession(email, password);

    return res.status(200).send(token);

  } catch (error) {
    if (error.name === "Forbidden") {
      return res.status(403).send("E-mail incorreto ou usuário não cadastrado!");
    }
    if (error.name === "UnauthorizedError") {
      return res.status(403).send("Senha incorreta ou usuário não cadastrado!");
    }
    return res.status(500).send(error);
  }
}

export async function userPostAdress(req: Request, res: Response) {
  const data  = req.body;
  console.log("cheguei no userPostAdress")

  try {
    const result = await userService.createAdress(data)

    return res.status(200);
  } catch (error) {
    return res.status(500).send(error);
  }
}