import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <CustomButton count={count} setCount={setCount} />
    </div>
  );
}

//component

function CustomButton(props) {
  function onClickHandler() {
    props.setCount(props.count + 1);
    //while using props the code should be props.setCount and props.count --> not count only!
  }
  return <button onClick={onClickHandler}> Counter {props.count} </button>;
}

export default App;
