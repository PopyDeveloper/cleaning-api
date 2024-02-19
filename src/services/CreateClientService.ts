import { Client } from "@prisma/client";
import prismaClient from "../prisma";
import {randomUUID}  from 'node:crypto'

class CreateClientService {

  async execute({name, email, phone}: Client) {
    if(!name || !email || !phone) {
      throw new Error('Body request invalid')
    }

    const client = await prismaClient.client.create({
      data: {
        id: randomUUID(),
        name,
        email,
        phone
      }
    })

    return client
  }
}

export { CreateClientService }