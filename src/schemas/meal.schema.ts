import { z } from "zod";

export const newMealSchema = z.object({
  name: z.string(),
  description: z.string(),
  compliance: z.boolean(),
  datetime: z.coerce.date(),
});

export type newMealType = z.infer<typeof newMealSchema>;
