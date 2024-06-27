import { newUserType } from "../schemas/user.schema";
import userRepository from "../repositories/user.repository";

async function createNewUser(user: newUserType) {
  await userRepository.saveNewUser(user);
}

export default { createNewUser };
