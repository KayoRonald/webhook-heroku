import { Router } from "express";
import { ListServiceUserController } from "../../controllers/ListServiceUserController";
import { WebhookController } from "../../controllers/WebhookController";

const routes = Router();

const ListUser = new ListServiceUserController();
const Webhook = new WebhookController();

export default routes
  .get("/webhook", ListUser.handle)
  .post("/webhook/:channel/:token", Webhook.create);
