import { newMealType } from "../schemas/meal.schema";
import mealRepository from "../repositories/meal.repository";

async function createNewMeal(meal: newMealType, userId: string) {
  await mealRepository.saveNewMeal(meal, userId);
}

export default { createNewMeal };
