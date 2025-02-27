import fastify from "fastify";
import cookie from "@fastify/cookie";
import { userRoutes } from "./routes/user.route";
import { mealRoutes } from "./routes/meal.route";
import { env } from "./env";

const app = fastify();

app.register(cookie);
app.register(userRoutes, { prefix: "users" });
app.register(mealRoutes, { prefix: "meals" });

app.listen({ port: env.PORT }).then(() => {
  console.log("Diet API Running");
});
