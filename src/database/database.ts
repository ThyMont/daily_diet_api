import setupKnex from "knex";
import { env } from "../env";

export const config = {
  client: env.CLIENT_DB,
  connection: { filename: env.DATABASE_URL },
  useNullAsDefault: true,
};
export const knex = setupKnex(config);
