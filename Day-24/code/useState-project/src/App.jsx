import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

function App() {
  return (
    <div>
      <Todo id={4}></Todo>
    </div>
  );
}

//passing id inside the Todo component.
function Todo({ id }) {
  const [todo, setTodo] = useState({});
  //the todo element is being fetched from the backend.

  //implement effect here -->

  useEffect(() => {
    axios
      .get(`https://sum-server.100xdevs.com/todo?id=` + id)
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
