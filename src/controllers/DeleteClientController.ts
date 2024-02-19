import { FastifyReply, FastifyRequest } from "fastify"
import { DeleteClientService } from "../services"
import { Client } from "@prisma/client"

class DeleteClientController {
  
  async handler(request: FastifyRequest, reply: FastifyReply) {
    const deleteClientService = new DeleteClientService()

    const { id } = request.query as Client

    const client = await deleteClientService.execute(id)

    reply.send(client)
  }
}

export { DeleteClientController}