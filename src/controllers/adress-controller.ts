import { Request, Response } from "express";
import { AuthenticatedRequest } from "@/middlewares/authentication-middleware";
import adressService from "@/services/adress-servise";

export async function userPostAdress(req: AuthenticatedRequest & Request, res: Response) {
    const adress  = req.body;
    const userId = req.userId;
    console.log("userId", userId);
    console.log("adress", adress);
  
    try {
      const result = await adressService.createAdress(adress, userId);
  
      return res.status(200);
    } catch (error) {
      return res.status(500).send(error);
    }
  }