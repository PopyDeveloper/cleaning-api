import prismaClient from "../prisma";

class ClientListService {
  async execute() {
    const list = await prismaClient.client.findMany()
    return list
  }
}

export { ClientListService }