import { useEffect, useState } from "react";
import { axios } from "./axios";

function useIsOnline() {
  const [isOnline, setIsOnline] = useState(window.navigator.onLine);

  useEffect(() => {
    window.addEventListener("online", () => {
      setIsOnline(true);
    });

    window.addEventListener("offline", () => {
      setIsOnline(false);
    });
  }, []); //--> dependecy array

  return isOnline;
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
