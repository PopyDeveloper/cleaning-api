import { Client } from "@prisma/client";
import { FastifyReply, FastifyRequest } from "fastify";
import { CreateClientService } from "../services";

class CreateClientController {

  async handler(request: FastifyRequest, reply: FastifyReply) {
    const { name, email, phone} = request.body as Client

    const createClientService = new CreateClientService()

    const client = createClientService.execute({name, email, phone} as Client)

    reply.status(201).send(client)
    
  }
}

export { CreateClientController}