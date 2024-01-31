import { useEffect, useState } from "react";
import { axios } from "./axios";

//designing the custom hook : A hook is basically a function which starts with use and has a self calling hook either React based or custom component.
//the main aim is to not write the logic in the main functional component.

function useTodos() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    axios.get("https://sum-server.100xdevs.com/todos").then((res) => {
      setTodos(res.data.todos);
    });
  }, []);
}

function App() {
  const todos = useTodos();

  return (
    <div>
      {todos.map((todo) => (
        <Track todo={todo}></Track>
      ))}
    </div>
  );
}

function Track({ todo }) {
  return (
    <div>
      {todo.title}
      <br />
      {todo.description}
    </div>
  );
}

export default App;
