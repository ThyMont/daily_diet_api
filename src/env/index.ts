import "dotenv/config";
import { z } from "zod";

const envSchema = z.object({
  NODE_ENV: z.enum(["development", "test", "production"]),
  DATABASE_URL: z.enum(["sqlite", "pg"]),
  CLIENT_DB: z.string(),
  PORT: z.number().default(3333),
});

const env = envSchema.parse(process.env);

export { env };
