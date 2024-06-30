import { FastifyInstance } from "fastify";
import { createNewUser, getUserSummary } from "../controllers/user.controller";
import { checkUserIdExists } from "../middlewares/checkUserIdExists";

export async function userRoutes(app: FastifyInstance) {
  app.post("/", createNewUser);
  app.get("/summary", { preHandler: [checkUserIdExists] }, getUserSummary);
}
