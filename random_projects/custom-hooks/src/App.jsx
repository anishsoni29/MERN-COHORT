import { useEffect, useState } from "react";
import { axios } from "./axios";

//designing the custom hook : A hook is basically a function which starts with use and has a self calling hook either React based or custom component.
//the main aim is to not write the logic in the main functional component.

function useTodos() {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get("https://sum-server.100xdevs.com/todos").then((res) => {
      setTodos(res.data.todos);
      setLoading(false);
    });
  }, []);
  return { todos, loading };
}

function App() {
  const { todos, loading } = useTodos();

  if (loading) {
    return <div>loading ...</div>;
  }

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