//major flaw in this code is that it re-renders the expensive for loop.
//when a parent component re-renders, all the children will re-render.

import { useMemo, useState, useEffect } from "react";

function App() {
  const [counter, setCounter] = useState(0);
  const [inputValue, setInputValue] = useState(1);

  let count = useMemo(() => {
    let finalCount = 0;
    console.log("useMemo called");
    for (let i = 0; i <= inputValue; i++) {
      finalCount += i;
    }
    return finalCount;
  }, [inputValue]);
  //changes according to the input value

  return (
    <div>
      <input
        onChange={function (e) {
          setInputValue(e.target.value);
        }}
        placeholder={"Find sum from 1 to n"}
      ></input>
      <br />
      Sum from 1 to {inputValue} is {count}
      <br />
      <button
        onClick={() => {
          setCounter(counter + 1);
        }}
      >
        Counter ({counter})
      </button>
    </div>
  );
}

export default App;
