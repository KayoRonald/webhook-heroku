import { Request, Response } from "express";

export class ListServiceUserController {
  async handle(req: Request, res: Response) {
    return res.status(201).json({ message: "ok" });
  }
}
