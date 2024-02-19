import { FastifyReply, FastifyRequest } from "fastify";
import { ClientListService } from "../services";

class ClientListController {
  async handler(request: FastifyRequest, replay: FastifyReply) {
    const listClientsService = new ClientListService()

    const list = await listClientsService.execute()

    replay.status(200).send(list)

  }
}

export { ClientListController }