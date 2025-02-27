import { newMealType } from "../schemas/meal.schema";
import mealRepository from "../repositories/meal.repository";

async function createNewMeal(meal: newMealType, userId: string) {
  await mealRepository.saveNewMeal(meal, userId);
}
async function listAllMeals(userId: string) {
  return await mealRepository.listAllMealsByUser(userId);
}
async function detailMeal(mealId: string, userId: string) {
  return await mealRepository.findMealByIdAndUserId(mealId, userId);
}
async function updateMeal(meal: newMealType, mealId: string, userId: string) {
  return await mealRepository.updateMealByIdAndUserId(meal, mealId, userId);
}
async function deleteMeal(mealId: string, userId: string) {
  return await mealRepository.deleteMealByIdAndUserId(mealId, userId);
}

export default { createNewMeal, listAllMeals, detailMeal, updateMeal, deleteMeal };
