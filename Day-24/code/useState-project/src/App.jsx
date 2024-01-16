import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

function App() {
  //before using the effect of different id on each button , use a state and hook.
  const [selectedId, setSelectedId] = useState(1);

  return (
    <div>
      <button
        onClick={function () {
          setSelectedId(1);
        }}
      >
        1
      </button>
      <button
        onClick={function () {
          setSelectedId(2);
        }}
      >
        2
      </button>
      <button
        onClick={function () {
          setSelectedId(3);
        }}
      >
        3
      </button>
      <button
        onClick={function () {
          setSelectedId(4);
        }}
      >
        4
      </button>
      <Todo id={selectedId}></Todo>
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
    [id];

  //the data.todo is being fetched from the backend and it is the boilerplate of the axios library.

  return (
    <div>
      Id = {id}
      <h1>{todo.title}</h1>
      <h2>{todo.description}</h2>
    </div>
  );
}

export default App;
