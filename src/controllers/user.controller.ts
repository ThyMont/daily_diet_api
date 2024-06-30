import { FastifyReply, FastifyRequest } from "fastify";
import { newUserSchema } from "../schemas/user.schema";
import userService from "../service/user.service";

export async function createNewUser(request: FastifyRequest, reply: FastifyReply) {
  const user = newUserSchema.safeParse(request.body);
  let userId;
  if (user.success) {
    userId = await userService.createNewUser(user.data);
    reply.cookie("userId", userId, {
      path: "/",
      maxAge: 60 * 60 * 24 * 7,
    });
  } else {
    return reply.status(500).send();
  }
  return reply.status(201).send();
}
