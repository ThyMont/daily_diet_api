import { knex } from "../database/database";
import { newMealType } from "../schemas/meal.schema";

async function saveNewMeal(meal: newMealType, userId: string) {
  await knex("meals").insert({
    name: meal.name,
    description: meal.description,
    userId: userId,
    compliance: meal.compliance,
    datetime: meal.datetime,
  });
}
async function listAllMealsByUser(userId: string) {
  const meals = await knex("meals")
    .select("mealId", "name", "description", "datetime", "compliance")
    .where("userId", userId);
  return meals;
}
async function findMealByIdAndUserId(mealId: string, userId: string) {
  const meal = await knex("meals")
    .select("mealId", "name", "description", "datetime", "compliance")
    .where("mealId", mealId)
    .andWhere("userId", userId)
    .first();
  return meal;
}
async function updateMealByIdAndUserId(meal: newMealType, mealId: string, userId: string) {
  await knex("meals")
    .where({ mealId, userId }) // Filtra pelo mealId e userId
    .update({
      ...meal,
    });
}

export default { saveNewMeal, listAllMealsByUser, findMealByIdAndUserId, updateMealByIdAndUserId };
