import { z } from "zod";

export const NewUserSchema = z.object({
  name: z.string(),
  username: z.string(),
  password: z.string(),
  avatar: z.string().optional(),
});

export type newUserType = z.infer<typeof NewUserSchema>;

export type MealSummary = {
  totalMealsRegistered: number;
  mealsWithinDiet: number;
  mealsOutsideDiet: number;
  bestDietSequence: number;
};
