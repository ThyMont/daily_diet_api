import { randomUUID } from "crypto";
import { knex } from "../database/database";
import { newUserType } from "../schemas/user.schema";

async function saveNewUser(user: newUserType) {
  return await knex("users").insert({
    id: randomUUID(),
    name: user.name,
    username: user.username,
    password: user.password,
    avatar: user.avatar ? user.avatar : undefined,
  });
}

export default { saveNewUser };
