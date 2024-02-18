import { randomUUID } from "node:crypto";
import sql from "./db.config.js";

export class DataBase {
  async list() {
    const list = await sql`select * from "users"`;

    return list;
  }

  async createUser(user) {
    const id = randomUUID();
    const { name, email, phone } = user;

    await sql`insert into "users" (id, name, email, phone) values (${id}, ${name}, ${email}, ${phone})`;
  }

  async deleteUserById(id) {
    await sql`delete from "users" where id = ${id}`;
  }

  async updateUser(id, user) {
    const { name, email, phone } = user;
    await sql`update "users" set name=${name}, email=${email}, phone=${phone} where id = ${id}`;
  }
}
