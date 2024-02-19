import { FastifyInstance, FastifyPluginOptions, FastifyReply, FastifyRequest } from "fastify";
import { ClientListController, CreateClientController, DeleteClientController } from "./controllers";

export async function routes(
  fastify: FastifyInstance,
  options: FastifyPluginOptions
) {
  fastify.get("/", async (request: FastifyRequest, reply: FastifyReply) => {
    return new ClientListController().handler(request, reply)
  });

  fastify.post("/createUser", async (request: FastifyRequest, reply: FastifyReply) => {
    return new CreateClientController().handler(request, reply)
  });

  fastify.delete("/deleteUser", async (request: FastifyRequest, reply: FastifyReply) => {
    return new DeleteClientController().handler(request, reply)
  });

}
