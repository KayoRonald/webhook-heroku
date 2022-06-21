import axios from "axios";
import AppError from "../../middleware/AppError";

export default class WebhookServicePost {
  public async execute({ Payload, channel, token }: any): Promise<void> {
    const data = {
      avatar_url:
        "https://www.herokucdn.com/favicons/apple-touch-icon-120x120.png",
      embeds: [
        {
          color: 0x0099ff,
          author: {
            name: Payload.data.user.email
          },
          title: Payload.data.app.name,
          description: Payload.data.slug.commit_description,
          fields: [
            {
              name: "Status da aplicação:",
              value: Payload.data.status,
              inline: false
            },
            {
              name: "Alteração:",
              value: Payload.data.description,
              inline: false
            }
          ],
          timestamp: new Date()
        }
      ]
    };
    try {
      const res = await axios.post(
        `https://discord.com/api/webhooks/${channel}/${token}`,
        data
      );
      console.log("Dentro do try");
    } catch (error) {
      throw new AppError("Falha ao enviar a mensagem");
    }
    return;
  }
}
