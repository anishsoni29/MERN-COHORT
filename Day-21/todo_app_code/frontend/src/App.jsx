import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { CreateTodo } from "./components/CreateTodo";
import { Todos } from "./components/Todos";
import "./App.css";

function App() {
  const [count, setCount] = useState([]);

  fetch("http://localhost:3000/todos").then(async function (res) {
    const json = await res.json();
    setTodos(json.todos);
  });

  //to connect this with the backend --> use the state variables.
  //updating the state

  return (
    <div>
      <CreateTodo />
      <Todos
        todos={[
          {
            title: "Go to the gym",
            description: "You need to go to the gym",
            completed: false,
          },
        ]}
      ></Todos>
    </div>
  );
}

export default App;

//CORS library : Let's the frontend hit the backend
