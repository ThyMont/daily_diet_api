import type { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTable("users", (table) => {
    table.uuid("userId").primary().defaultTo(knex.fn.uuid());
    table.text("name").notNullable();
    table.text("username").notNullable().unique();
    table.text("password").notNullable();
    table.text("created_at").defaultTo(new Date()).notNullable();
    table.text("avatar");
  });
}

export async function down(knex: Knex): Promise<void> {
  return await knex.schema.dropTable("users");
}
