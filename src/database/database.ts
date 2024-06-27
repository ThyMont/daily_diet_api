import setupKnex from "knex";

export const config = {
  client: "sqlite",
  connection: { filename: "./tmp/db.db" },
  useNullAsDefault: true,
};
export const knex = setupKnex(config);
