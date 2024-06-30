import { FastifyInstance } from "fastify";
import { createNewMeal, listAllMeals, detailMeal } from "../controllers/meal.controller";
import { checkUserIdExists } from "../middlewares/checkUserIdExists";

export async function mealRoutes(app: FastifyInstance) {
  app.get("/", { preHandler: [checkUserIdExists] }, listAllMeals);
  app.get("/:id", { preHandler: [checkUserIdExists] }, detailMeal);
  app.post("/", { preHandler: [checkUserIdExists] }, createNewMeal);
}
