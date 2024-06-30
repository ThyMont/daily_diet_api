import "dotenv/config";
import { z } from "zod";

const envSchema = z.object({
  NODE_ENV: z.enum(["development", "test", "production"]).default("production"),
  DATABASE_URL: z.string(),
  CLIENT_DB: z.enum(["sqlite", "pg"]),
  PORT: z.coerce.number().default(3333),
});

const env = envSchema.parse(process.env);

export { env };
