import { knex } from "../database/database";
import { newUserType } from "../schemas/user.schema";

async function saveNewUser(user: newUserType): Promise<string> {
  const response = await knex("users")
    .insert({
      name: user.name,
      username: user.username,
      password: user.password,
      avatar: user.avatar ? user.avatar : undefined,
    })
    .returning("userId");
  return response[0].userId;
}

export default { saveNewUser };
