import { FastifyReply, FastifyRequest } from "fastify";
import { mealIdSchema, newMealSchema } from "../schemas/meal.schema";
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

export async function listAllMeals(request: FastifyRequest, reply: FastifyReply) {
  const { userId = "" } = request.cookies;
  const meals = await mealService.listAllMeals(userId);

  return reply.send({ meals });
}

export async function detailMeal(request: FastifyRequest, reply: FastifyReply) {
  const { userId = "" } = request.cookies;
  const mealId = mealIdSchema.parse(request.params).id;
  const meal = await mealService.detailMeal(mealId, userId);

  if (!meal) {
    reply.status(404).send({ error: "Meal not found" });
  }

  return reply.send({ meal });
}

export async function updateMeal(request: FastifyRequest, reply: FastifyReply) {
  const { userId = "" } = request.cookies;
  const mealId = mealIdSchema.parse(request.params).id;
  const updatedMeal = newMealSchema.safeParse(request.body);
  const meal = await mealService.detailMeal(mealId, userId);

  if (!meal) {
    return reply.status(404).send({ error: "Meal not found" });
  }

  if (updatedMeal.success) {
    await mealService.updateMeal(updatedMeal.data, mealId, userId);
  } else {
    return reply.status(500).send();
  }

  return reply.status(201).send();
}

export async function deleteMeal(request: FastifyRequest, reply: FastifyReply) {
  const { userId = "" } = request.cookies;
  const mealId = mealIdSchema.parse(request.params).id;
  const meal = await mealService.detailMeal(mealId, userId);

  if (!meal) {
    reply.status(404).send({ error: "Meal not found" });
  }

  await mealService.deleteMeal(mealId, userId);

  return reply.status(200).send();
}
