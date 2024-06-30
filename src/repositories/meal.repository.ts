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
    .where("userId", userId)
    .orderBy("datetime", "asc");
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
    .where({ mealId, userId })
    .update({
      ...meal,
    });
}

async function deleteMealByIdAndUserId(mealId: string, userId: string) {
  await knex("meals").where({ mealId, userId }).delete();
}

async function countTotalMealsByUser(userId: string): Promise<number> {
  const totalMeals = await knex("meals").count("mealId as total").where({ userId });
  return parseInt(totalMeals[0].total as string, 10);
}

async function countMealsByUserAndCompliance(userId: string, compliance: boolean): Promise<number> {
  const totalMeals = await knex("meals").count("mealId as total").where({ userId, compliance });
  return parseInt(totalMeals[0].total as string, 10);
}

export default {
  saveNewMeal,
  listAllMealsByUser,
  findMealByIdAndUserId,
  updateMealByIdAndUserId,
  deleteMealByIdAndUserId,
  countTotalMealsByUser,
  countMealsByUserAndCompliance,
};
