import Fastify from "fastify";
import { DataBase } from "./database-postgres.js";
const fastify = Fastify({
  logger: true,
});

const db = new DataBase();

fastify.get("/", async () => {
  const list = await db.list();
  return list;
});

fastify.post("/createUser", async (request, reply) => {
  const { name, email, phone } = request.body;

  await db.createUser({ name, email, phone });

  reply.status(201).send(`user create`);
});

fastify.delete("/deleteUser/:id", async (request, reply) => {
  const id = request.params.id;

  await db.deleteUserById(id);

  reply.status(200).send(`user deleted`);
});

fastify.put("/updateUser/:id", async (request, reply) => {
  const id = request.params.id;
  const { name, email, phone } = request.body;

  await db.updateUser(id, { name, email, phone });

  reply.status(200).send(`user update`);
});

try {
  await fastify.listen({
    host: "0.0.0.0",
    port: 3000,
  });
} catch (e) {
  fastify.log.error(e);
  process.exit(1);
}
