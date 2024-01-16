import { useState } from "react";
import { useEffect } from "react";

function App() {
  return (
    <div>
      <Todo id={1}></Todo>
    </div>
  );
}

function Todo() {
  const [todo, setTodo] = useState({});

  //implement effect here -->

  useEffect(() => {
    axios
      .get("https://sum-server.100xdevs.com/todo?id=1" + id)
      .then((response) => {
        setTodo(response.data.todo);
      });
  }),
    [];

  //the data.todo is being fetched from the backend and it is the boilerplate of the axios library.

  return (
    <div>
      <h1>{todo.title}</h1>
      <h2>{todo.description}</h2>
    </div>
  );
}

export default App;
