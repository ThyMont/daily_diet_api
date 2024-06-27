import { FastifyReply, FastifyRequest } from "fastify";
import { newUserSchema } from "../schemas/user.schema";
import userService from "../service/user.service";

export async function createNewUser(request: FastifyRequest, reply: FastifyReply) {
  const user = newUserSchema.safeParse(request.body);
  if (user.success) await userService.createNewUser(user.data);
  else {
    return reply.status(500).send();
  }
  return reply.status(201).send();
}
