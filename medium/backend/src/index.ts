import { Hono } from "hono";
import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";
//adding the JWL to the signup route using the HONO libraries
import { decode, sign, verify } from "hono/jwt";

const app = new Hono();

//adding the routes
//c is the context object which has the req,res and next properties

//add code in the signup route -->
app.post("/api/vi/signup", async (c) => {
  const prisma = new PrismaClient({
    //@ts-ignore
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());

  const body = await c.req.json();

  const user = await prisma.user.create({
    data: {
      email: body.email,
      password: body.password,
    },
  });

  //added the user to get the sign token
  //ignoring the error --> ideally you should not do it.
  //@ts-ignore
  const token = sign({ id: user.id }, c.env.JWT_SECRET);

  return c.json({
    jwt: token,
  });
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
//migrate the database with the AEVIAN postgres schema
