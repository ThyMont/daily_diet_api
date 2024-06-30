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
  const bestDietSequence = await countBestSequenceByCompliance(userId);
  const summary: MealSummary = {
    totalMealsRegistered,
    mealsWithinDiet,
    mealsOutsideDiet,
    bestDietSequence,
  };

  return summary;
}

async function countBestSequenceByCompliance(userId: string): Promise<number> {
  const meals = await mealRepository.listAllMealsByUser(userId);
  let maxSequence = 0;
  let currentSequence = 0;

  for (const meal of meals) {
    if (meal.compliance) {
      currentSequence++;
      maxSequence = Math.max(maxSequence, currentSequence);
    } else {
      currentSequence = 0;
    }
  }

  return maxSequence;
}

export default { createNewUser, getUserSummary };
