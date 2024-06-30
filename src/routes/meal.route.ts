import { FastifyInstance } from "fastify";
import { createNewMeal } from "../controllers/meal.controller";
import { checkUserIdExists } from "../middlewares/checkUserIdExists";

export async function mealRoutes(app: FastifyInstance) {
  app.post("/", { preHandler: [checkUserIdExists] }, createNewMeal);
}
