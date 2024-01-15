// write basix express boilerplate code
// with express.json() middleware

const express = require("express");
const { createTodo, updateTodo } = require("./types");
const { todo } = require("./db");
const app = express();

app.use(express.json());

//for writing the todo
app.post("/todo", async function (req, res) {
  //adding validation here
  const createPayload = req.body;
  const parsedPayload = createTodo.safeParse(createPayload);
  if (!parsedPayload.success) {
    res.status(411).json({
      msg: " You sent the wrong inputs",
    });
    return;
  }
  //put it in mongo db

  await todo.create({
    title: createPayload.title,
    description: createPayload.description,
    completed: false,
  });
  res.json({
    msg: "Todo created successfully",
  });
});

//for reading the todo
//here you have to await for the database to fetch the data from you from a server in a different corner of the world.
app.get("/todos", async function (req, res) {
  const todos = await todo.find({});
  res.json({
    todos,
    //only todos since we are not looking to fetch a particular task.
  });
});

//for marking the todo as completed
app.put("/completed", async function (req, res) {
  //adding validation here
  const updatePayload = req.body;
  const parsedPayload = updateTodo.safeParse(updatePayload);
  if (!parsedPayload.success) {
    res.status(411).json({
      msg: "You sent the wrong inputs",
    });
    return;
  }
  await todo.update(
    {
      _id: req.body.id,
    },
    {
      completed: true,
    }
  );
  res.json({
    msg: "Todo marked as completed",
  });
});
