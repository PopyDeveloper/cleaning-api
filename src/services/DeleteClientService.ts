import prismaClient from "../prisma"

class DeleteClientService {

  async execute(id: string) {

    if(!id) {
      throw new Error('Delete need Id')
    }

    const client = await prismaClient.client.findFirst({
      where: {
        id: id
      }
    })

    if(!client) {
      throw new Error('Client not found')
    }

    await prismaClient.client.delete({
      where: {
        id: id
      }
    })

    return client
  }

}


export { DeleteClientService }