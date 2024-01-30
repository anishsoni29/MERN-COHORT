//explaination of custom hooks
import { useDebugValue, useEffect } from "react";

function App() {
  return (
    <>
      <MyComponent />
    </>
  );
}

//using custom hooks
function MyComponent() {
  useEffect(() => {
    console.error("MyComponent is mounted");

    return () => {
      console.log("MyComponent is unmounted");
    };
  }, []); //--> this [] is the dependency array, anytime this changes, the code reruns.
  //changing the value of the dependency array will cause the code to rerun.

  return <div>From inside MyComponent</div>;
}

export default App;
