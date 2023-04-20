import { Request, Response } from "express";
import { AuthenticatedRequest } from "../middlewares/authentication-middleware";
import adressService from "../services/adress-service";

export async function userPostAdress(req: AuthenticatedRequest & Request, res: Response) {
  const adress = req.body;
  const userId = req.userId;

  try {
    await adressService.createAdress(adress, userId);
    return res.status(201).send("Criado");
  } catch (error) {
    return res.status(500).send(error);
  }
}

export async function cepsUsers(req: AuthenticatedRequest & Request, res: Response) {
  const userId = req.userId;

  try {

    const allAdres = await adressService.findAllAdress(userId);

    return res.status(200).send(allAdres);

  } catch (error) {
    if (error.name === "NotFoundError") {
      return res.status(404).send(error.message);
    }
    return res.status(500).send(error);
  }
}

