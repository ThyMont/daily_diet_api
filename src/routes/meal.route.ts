import { FastifyInstance } from "fastify";
import {
  createNewMeal,
  listAllMeals,
  detailMeal,
  updateMeal,
  deleteMeal,
} from "../controllers/meal.controller";
import { checkUserIdExists } from "../middlewares/checkUserIdExists";

export async function mealRoutes(app: FastifyInstance) {
  app.get("/", { preHandler: [checkUserIdExists] }, listAllMeals);
  app.get("/:id", { preHandler: [checkUserIdExists] }, detailMeal);
  app.delete("/:id", { preHandler: [checkUserIdExists] }, deleteMeal);
  app.put("/:id", { preHandler: [checkUserIdExists] }, updateMeal);
  app.post("/", { preHandler: [checkUserIdExists] }, createNewMeal);
}
