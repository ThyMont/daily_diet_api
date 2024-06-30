import { randomUUID } from "crypto";
import type { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
  return await knex.schema.createTable("meals", (table) => {
    table.uuid("mealId").primary().defaultTo(randomUUID());
    table.text("name").notNullable();
    table.text("description").notNullable().unique();
    table.text("datetime").notNullable();
    table.boolean("compliance").notNullable();
    table.text("created_at").defaultTo(new Date()).notNullable();
    table.text("userId").unsigned();
    table.foreign("userId").references("userId").inTable("users");
  });
}

export async function down(knex: Knex): Promise<void> {
  return await knex.schema.dropTable("meals");
}
