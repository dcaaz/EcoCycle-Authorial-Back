import { Request, Response } from "express";
import { AuthenticatedRequest } from "@/middlewares/authentication-middleware";
import adressService from "@/services/adress-service";

export async function userPostAdress(req: AuthenticatedRequest & Request, res: Response) {
  const adress = req.body;
  const userId = req.userId;

  try {
    await adressService.createAdress(adress, userId);
    return res.status(201);
  } catch (error) {
    return res.status(500).send(error);
  }
}

export async function allAdres(req: Request, res: Response) {

  try {
  
    const allAdres = await adressService.findAllAdress();

    return res.status(200).send(allAdres);

  } catch (error) {
    return res.status(500).send(error);
  }
}

