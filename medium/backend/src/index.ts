import { Hono } from "hono";

const app = new Hono();

//adding the routes
//c is the context object which has the req,res and next properties
app.post("/api/vi/signup", (c) => {
  return c.text("Signup Route");
});

app.post("/api/vi/login", (c) => {
  return c.text("Signin Route");
});

app.post("/api/vi/blog", (c) => {
  return c.text("Blog Route");
});

app.put("/api/v1/blog", (c) => {
  return c.text("Update Blog Route");
});

app.get("/api/v1/blog/:id", (c) => {
  return c.text("Get Blog Route");
});

export default app;

//connection pool url in wrangler.toml
//database url in .env file
//you can't use local environment with connection pool hence no docker.
