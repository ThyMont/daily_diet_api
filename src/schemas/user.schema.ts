import { z } from "zod";

export const newUserSchema = z.object({
  name: z.string(),
  username: z.string(),
  password: z.string(),
  avatar: z.string().optional(),
});

export type newUserType = z.infer<typeof newUserSchema>;
