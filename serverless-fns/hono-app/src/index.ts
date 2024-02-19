import { Hono } from "hono";

const app = new Hono();

app.get("/", (c) => {
  //body, headers, query-parameteres, etc
  return c.text("Hello Hono!");
});

export default app;
