import { FastifyInstance } from "fastify";
import { createNewUser } from "../controllers/user.controller";

export async function userRoutes(app: FastifyInstance) {
  app.post("/", createNewUser);
}
