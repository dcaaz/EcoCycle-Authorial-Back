import { Request, Response } from "express";

export async function usersPost(req: Request, res: Response) {
    const { email, password } = req.body;

    try {
        /* const user = await userService.createUser({ email, password }); */
        return res.status(201).send("User Created");
      } catch (error) {
        console.log("error usersPost", error.message)
        return res.status(500).send(error);
      }

}