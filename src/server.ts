import fastify from "fastify";
import cookie from "@fastify/cookie";
import { userRoutes } from "./routes/user.route";

const app = fastify();

app.register(cookie);
app.register(userRoutes, { prefix: "users" });

app.listen({ port: 3333 }).then(() => {
  console.log("Diet API Running");
});
