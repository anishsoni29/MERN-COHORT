//re-render assignment

import React, { useState } from "react";

//react-returns

function App() {
  //state variable
  const [title, setTitle] = useState("my name is Anish");

  function updateTitle() {
    setTitle("My name is " + Math.random());
  }

  return (
    <div>
      <button onClick={updateTitle}> Update the title </button>
      <Header title={title} />
      <Header title="Anish" />
    </div>
  );
}

//object destructuring --> no need to use props
function Header({ title }) {
  return <div>{title}</div>;
}

export default App;
