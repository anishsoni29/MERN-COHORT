import { useEffect, useState } from "react";
import { axios } from "./axios";
import { useIsOnline } from "./hooks/useIsOnline";

function App() {
  const isOnline = useIsOnline();
  //exporting this hook to a different file makes it look more cleaner.

  if (isOnline) {
    return "You are Online";
  }
  return "You are Offline, Please check your internet connection :(";
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
