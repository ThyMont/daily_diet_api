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

export default { saveNewMeal };
