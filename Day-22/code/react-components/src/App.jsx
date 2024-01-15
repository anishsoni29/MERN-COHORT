import React, { useState } from "react";

let counter = 4;

function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      title: "Go to the gym",
      description: "You need to go to the gym",
    },
    {
      id: 2,
      title: "Go to market",
      description: "You need to go with Mummy",
    },
    {
      id: 3,
      title: "Read that book",
      description: "Read the Cave by Alok Kejriwal!",
    },
  ]);

  function addTodo() {
    setTodos([
      ...todos,
      {
        id: counter++,
        title: Math.random().toString(),
        description: Math.random().toString(),
      },
    ]);
  }

  return (
    <div>
      <button onClick={addTodo}>Add a todo</button>
      {todos.map(function (todo) {
        return (
          <Todo
            key={todo.id}
            title={todo.title}
            description={todo.description}
          />
        );
      })}
    </div>
  );
}

function Todo({ title, description }) {
  return (
    <div>
      <h1>{title}</h1>
      <h4>{description}</h4>
    </div>
  );
}

export default App;
