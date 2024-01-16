import { useState, useEffect } from "react";
import axios from "axios";

function App() {
  return (
    <div>
      <Todo id={1} />
    </div>
  );

  //initialising the state variables
  function Todo() {
    const [todo, setTodo] = useState({});
  }
  //useEffect hook to fetch data from the api and non infinitely.
  useEffect(() => {
    axios
      .get("https://sum-server.100xdevs.com/todo?id=1")
      .then(function (response) {
        setTodos(response.data.todos);
      });
  }, []);
  return (
    <>
      <h1>{todo.title}</h1>
      <h2>{todo.description}</h2>
    </>
  );
}

export default App;
