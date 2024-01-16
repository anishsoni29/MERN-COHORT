import { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    // Fetch todos from your server
    axios.get("http://localhost:3001/todos").then((response) => {
      console.log(response);
      setTodos(response.data.todos);
    });
  }, []);

  return (
    <>
      {todos.map((todo) => (
        <div key={todo._id}>
          <h1>{todo.title}</h1>
          <h2>{todo.description}</h2>
        </div>
      ))}
    </>
  );
}

export default App;
