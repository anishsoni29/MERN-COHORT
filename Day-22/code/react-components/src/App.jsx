//re-render assignment

import React, { useState } from "react";

//react-returns

function App() {
  //state variable

  return (
    <div>
      <HeaderWithButton />
      <Header title="Anish 1" />
      <Header title="Anish 2" />
    </div>
  );
}

//we have made a different component here such that only the thing which was meant to re-render does, not the entire children of the parent body.
//push the state down to the button in the tree --> the parent will not re-render (put it to the lowest leave)
//.. or you can use react.memo()

function HeaderWithButton() {
  //define the state variables also here
  const [title, setTitle] = useState("my name is Anish");

  function updateTitle() {
    setTitle("My name is " + Math.random());
  }
  return (
    <div>
      <button onClick={updateTitle}> Update the title </button>
      <Header title={title} />
    </div>
  );
}

//object destructuring --> no need to use props

const Header = React.memo(function Header({ title }) {
  return <div>{title}</div>;
});

export default App;
