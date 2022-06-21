import { Response } from "express";
import { IUSerRequest } from "../../interface";
import WebhookServicePost from "../services/WebhookServicePost";

export class WebhookController {
  async create(req: IUSerRequest, res: Response) {
    const Payload = req.body;
    const { channel, token } = req.params;
    const webhook = new WebhookServicePost();
    await webhook.execute({ Payload, channel, token });
    return res.status(201).json({
      success: true,
      message: `ok`
    });
  }
}
