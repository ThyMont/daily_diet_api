import knex from "knex";

declare module "knex/types/tables" {
  export interface Tables {
    users: {
      userId: string;
      name: string;
      username: string;
      password: string;
      created_at: string;
      avatar?: string | undefined;
    };
    meal: {
      mealId: string;
      name: string;
      description: string;
      datetime: string;
      userId: string;
      compliance: boolean;
      created_at: string;
    };
  }
}
