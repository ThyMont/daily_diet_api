import fastify from "fastify";

const app = fastify();

app.get("/", () => {
  return "API Iniciada asd";
});

app.listen({ port: 3333 }).then(() => {
  console.log("Diet API Running");
});
