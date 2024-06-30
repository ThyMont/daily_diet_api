import { FastifyReply, FastifyRequest } from "fastify";
import { newMealSchema } from "../schemas/meal.schema";
import mealService from "../service/meal.service";

export async function createNewMeal(request: FastifyRequest, reply: FastifyReply) {
  const meal = newMealSchema.safeParse(request.body);
  const { userId = "" } = request.cookies;
  if (meal.success) {
    await mealService.createNewMeal(meal.data, userId);
  } else {
    return reply.status(500).send();
  }
  return reply.status(201).send();
}
