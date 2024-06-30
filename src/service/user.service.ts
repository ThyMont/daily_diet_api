import { MealSummary, newUserType } from "../schemas/user.schema";
import userRepository from "../repositories/user.repository";
import mealRepository from "../repositories/meal.repository";

async function createNewUser(user: newUserType): Promise<string> {
  return await userRepository.saveNewUser(user);
}

async function getUserSummary(userId: string): Promise<MealSummary> {
  const totalMealsRegistered = await mealRepository.countTotalMealsByUser(userId);
  const mealsWithinDiet = await mealRepository.countMealsByUserAndCompliance(userId, true);
  const mealsOutsideDiet = await mealRepository.countMealsByUserAndCompliance(userId, false);
  const bestDietSequence = 1;
  const summary: MealSummary = {
    totalMealsRegistered,
    mealsWithinDiet,
    mealsOutsideDiet,
    bestDietSequence,
  };

  return summary;
}

export default { createNewUser, getUserSummary };
