// write basix express boilerplate code
// with express.json() middleware

const express = require("express");
const { createTodo, updateTodo } = require("./types");
const app = express();

app.use(express.json());

//body {
//title: string;
//description: string;
//} --> for this we need to use ZOD, otherwise the users can put anything they want.

//for writing the todo
app.post("/todo", function (req, res) {
  //adding validation here
  const createPayload = req.body;
  const parsedPayload = createTodo.safeParse(createPayload);
  if (!parsedPayload.success) {
    res.status(411).json({
      msg: " You sent the wrong inputs",
    });
    return;
  }
  //putting in the mongodb schema:
  //updating something in mongodb, creating something in mondodb, and deleting something in mongodb.
  //this will come under the post method.
});

//for reading the todo
app.get("/todos", function (req, res) {});

//for marking the todo as completed
app.put("/completed", function (req, res) {
  //adding validation here
  const updatePayload = req.body;
  const parsedPayload = updateTodo.safeParse(updatePayload);
  if (!parsedPayload.success) {
    res.status(411).json({
      msg: "You sent the wrong inputs",
    });
    return;
  }
});
